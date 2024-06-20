import { type Ref, ref, computed, watch } from "vue";
import { defineStore } from "pinia";
import { getCurrentUser, fetchAuthSession } from "aws-amplify/auth";
import {type AuthUser, type AuthSession, AuthError} from 'aws-amplify/auth'
import {generateClient} from 'aws-amplify/data'
import type {Schema} from '~/../amplify/data/resource'
import type {Lease as LocalLease, Unit as LocalUnit, LeaseUnit as LocalLeaseUnit} from '~/types/index'

export const useDataStore = defineStore("data", () => {

  const client = generateClient<Schema>()

  // UTILITES
  ///////////////////////////////////////////////////////////////////
  const test = ref('Test This')
  function watch_for_dependancy_loaded(reference:Ref, fn:Function, timeout=5000) : void {
    const unwatch = watch(reference, (
      newValue:Ref<any>,
      oldValue:Ref<any>
    ) => {
      if (newValue) {
        // now fetch the dependant data
        fn(newValue)
        // unwatch
        unwatch()
      }
    })
    // Set timeout to kill the watch
    setTimeout(()=> {
      if (!reference){
        unwatch()
      }
    }, timeout)
  }


  // USER PROFILE
  /////////////////////////////////////////////////////////////////////
  type User = Schema['User']['type']
  type Authorization = Schema['Authorization']['type']
  const user_profile = ref<User | object>({})
  const authorizations = ref<Array<Authorization>>([])

  // typeof(client.models.User)
  // users.value = [{}]

  async function getUser(cognito_username:string) {
    console.log('Starting get user!!!')
    const {data: profile, errors } = await client.models.User.get({
      'cognito_username': cognito_username, 
    }, {
      authMode: 'userPool'
    });
    console.log('Get user request completed')
    console.log(profile)
    console.log(errors)
    if (errors){
      throw new Error(errors.toString());
    } else if (!profile){
      throw new Error('Data not returned from getUser');
    }
    console.log('Starting get authroizations...')
    let {data: _authorizations } = await profile.authorizations();
    console.log('Authorizations type check: ')
    user_profile.value = profile;

    authorizations.value = _authorizations as unknown as Array<Authorization>;
  }

  //COMPANY DATA
  ///////////////////////////////////////////////////////////////
  type Company = Schema['Company']['type']
  // const company = ref<Company>();
  const companies = ref<Array<Company>>([]);
  const company_idx = ref<number>(0);
  const company = computed(() : Company | undefined => {
    return companies.value ? companies.value[company_idx.value] : undefined
  })

  async function _fetchCompany(
    _authorizations:Array<Schema['Authorization']['type']>
  ): Promise<void> {
    const company_ids = _authorizations.filter((_) => {
      return _.claim.split('#').length == 2
    })

    const return_data:Array<Company> = await Promise.all(
      company_ids.map(async (_) : Promise<Company> => {
        const {data: company, errors} = await client.models.Company.get({
            id: _.claim.split('#')[1]
          },{
            authMode: 'userPool'
          })
          if (errors) {
            throw new Error(errors.toString())
          }
          return company as unknown as Company
        }
      )
    )
    companies.value = return_data //as unknown as Array<Authorization>
  }

  async function loadCompanies(force_refresh=false) {
    console.log('Enter getCompany getter')
    if (authorizations.value.length === 0) {
      // console.log('Setting up watch')
      watch_for_dependancy_loaded(authorizations, _fetchCompany)
    }
    else if (!companies.value || force_refresh){
      // console.log('user_profile found, fetching Company')
      await _fetchCompany(authorizations.value)
    }
  }


  // TENANTS DATA
  ///////////////////////////////////////////////////////////////
  type Tenant = Schema['Tenant']['type']
  const tenants = ref<Array<Tenant>>([])
  const _tenant_idx = ref<number>(0)
  const tenant = computed(()=>{
    return tenants.value ? tenants.value[_tenant_idx.value] : undefined
  })

  function setTenantBy_id(id:string){
    const _filter_result = tenants.value.findIndex((_:Tenant)=>{
      return _.id === id
    })
    if (_filter_result !== -1){
      _tenant_idx.value = _filter_result
    }
  }

  function getTenantBy_id_by_last_name(last_name:string){
    const _filter_result = tenants.value.filter((_:Tenant)=>{
      return _.last_name == last_name
    })
    return _filter_result
  }

  const tenant_name = computed((): string => {
    if (!tenant.value) {
      console.log("Returning Null");
      return "Loading...";
    }
    const return_val = tenant.value.is_business
      ? tenant.value.business_name
      : `${tenant.value.first_name}  ${tenant.value.last_name}`;
    return <string>return_val;
  });

  async function _fetchTenantsByCompany(
    company:Company
  ) : Promise<void> {
    // fetch by company id
    const {data: _tenants, errors} = await client.models.Tenant.list({
      selectionSet: [
        'id','owner_id','first_name', 'last_name', 'business_name', 'is_business',
        'is_active', 'leases.*', 'transactions.*', 'leases.units.*', 
        'transactions.transaction_attributions.*'
      ],
      filter: {
        company_id: {
          eq: company.id
        }
      },
      authMode: 'userPool'
    })
    tenants.value = _tenants as unknown as Array<Tenant>
  }

  async function load_tenants_by_company(
    // company:Company, 
    force_refresh:Boolean=false
  ) : Promise<void> {
    if (!company.value) {
      await watch_for_dependancy_loaded(company, _fetchTenantsByCompany)
    } else if (company.value || force_refresh) {
      await _fetchTenantsByCompany(company.value)
    }
  }

  type Nullable<T> = {
    [P in keyof T]: T[P] | null
  }
  type AccountSummary = {
    collected: number,
    accrued: number,
    total: number
  }
  type TenantsMonthlyBalance = {
    id: string,
    first_name: Nullable<string>,
    last_name: Nullable<string>,
    transactions: {[key:string]: AccountSummary}
  }
  type Transaction = Schema['Transaction']['type']

  // Helper for datetime conversion
  function convertUTCDateToLocalDate(date:Date) : Date {
    // return new Date(date.getTime() - date.getTimezoneOffset()*60*1000);   
    return new Date(date.getTime() + dstOffsetAtDate(date))
  }
  const tenants_with_balance = computed(() : Array<TenantsMonthlyBalance> =>{
    if (!tenants.value){
      return []
    }
    return tenants.value.map((_:Tenant) : TenantsMonthlyBalance => {
      let t = _.transactions as unknown as Array<Transaction>
      t.sort((a,b) => {
        return Number(new Date(a.date)) - Number(new Date(b.date))
      })

      // fn_set_amount = (base_amount:AccountSummary, new_ammount:number) : AccountSummary => {
      //   if (new_amount > 0) {

      //   }
      // }
      
      const balance_by_month = t.reduce(
        (prev:{[key: string]: AccountSummary}, curr:Transaction) => {
          let local_data = new Date(curr.date);
          let _sort_id = (`${local_data.getFullYear()}_${local_data.getMonth()}`)
          if(prev[_sort_id]){
            // console.log('ADDING CURRENT AMOUNT', curr.amount)
            if(curr.amount > 0) {
              prev[_sort_id].collected += curr.amount
            } else {
              prev[_sort_id].accrued += curr.amount
            }
            prev[_sort_id].total += curr.amount
          } else {
            // console.log('OVERWRITTING WITH CURRENT AMOUNT', curr.amount)
            if (curr.amount > 0){
              prev[_sort_id] = {
                collected: curr.amount,
                accrued: 0,
                total: 0,
              }
            }
          }
          return prev
        }, {})
      return {
        id: _.id,
        first_name: <Nullable<string>>_.first_name,
        last_name: <Nullable<string>>_.last_name,
        transactions: balance_by_month
      }
    })
  })

  const tenant_collections_total_by_month = computed(()=>{
    return tenants_with_balance.value.reduce((
      prev:{[key:string]: AccountSummary}, curr:TenantsMonthlyBalance
    ) : {[key: string]: AccountSummary} => {
      Object.keys(curr.transactions).forEach((_)=>{
        if(_ in prev) {
          prev[_].collected += curr.transactions[_].collected
          prev[_].accrued += curr.transactions[_].accrued
          prev[_].total += curr.transactions[_].total
        } else {
          prev[_] = {
            collected:  curr.transactions[_].collected,
            accrued: curr.transactions[_].accrued,
            total: curr.transactions[_].total
          }
        }
      })
      return prev
    }, {})
  })

  type MonthComparison = {
    last_month: {[key: string]: AccountSummary},
    this_month: {[key: string]: AccountSummary}
  }
  const tenant_last_current_month_comparison = computed(
      () => 
    {
      const today = new Date();
      const last_month = today.getMonth() - 1 >= 0 ? today.getMonth() -1 : 11;
      const last_month_year = last_month === 11 ? today.getFullYear() - 1 : today.getFullYear()
      const this_month_str = `${today.getFullYear()}_${today.getMonth()}`
      const last_month_str = `${last_month_year}_${last_month}`
      return {
        last_month: tenant_collections_total_by_month.value[last_month_str],
        this_month: tenant_collections_total_by_month.value[this_month_str]
    }
  })

  // LEASES
  /////////////////////////////////////////////////////////////////
  async function _fetchLeasesByTenant(
    company:Company
  ) : Promise<void> {
    // fetch by company id
    const {data: _tenants, errors} = await client.models.Tenant.list({
      selectionSet: [
        'first_name', 'last_name', 'business_name', 'is_business',
        'is_active', 'leases.*', 'transactions.*', 'leases.units.*'
      ],
      filter: {
        company_id: {
          eq: company.id
        }
      },
      authMode: 'userPool'
    })
    tenants.value = _tenants as unknown as Array<Tenant>
  }

  async function leases_by_tenant(
    // company:Company, 
    force_refresh:Boolean=false
  ) : Promise<void> {
    if (!company.value) {
      await watch_for_dependancy_loaded(company, _fetchLeasesByTenant)
    } else if (company.value || force_refresh) {
      await _fetchLeasesByTenant(company.value)
    }
  }

  type Lease = Schema['Lease']['type'];
  const lease_idx = ref<number>(0);

 
  const tenant_leases_view = computed(()=>{
    const _leases = <Array<Lease>><unknown>tenant.value?.leases
    if (!_leases){return {}}

    const naturalCollator = new Intl.Collator(undefined, {numeric: true, sensitivity: 'base'});
    _leases.sort((a:Lease,b:Lease)=>{
      return +(new Date(a.start_date)) - +(new Date(b.start_date))
    })
    return _leases
  });

  const tenant_profile_view = computed(() => {
    if (!tenant.value){return {}}
    const to_remove = ['leases', 'transactions']
    return Object.fromEntries(
      Object.entries(tenant.value).filter(([key, value])=> !to_remove.includes(key))
    )
  })

  const tenant_transactions_view = computed(() => {
    if (!tenant.value){return {}};
    const _transactions = tenant.value.transactions as unknown as Array<Transaction>; 
    _transactions.sort((a:Transaction,b:Transaction)=> +(new Date(a.date)) - +(new Date(b.date)));
    return _transactions;
  })

  interface LeaseView extends LocalLease{
    id: string,
    start_date: string,
    close_date: string | null | undefined,
    price: number | null | undefined,
    is_active: boolean | null | undefined,
    units: Array<LocalLeaseUnit>,
    tenant_id: string,
    // tenant: Tenant | Function | null | undefined,
    company_id: string,
    // comapny: Company | Function | null | undefined 
  }
  const lease_view = computed(() : LeaseView | undefined => {
    if (!tenant.value){return undefined}
    const _leases = tenant.value.leases as unknown as Array<LocalLease>
    return _leases[lease_idx.value] as LeaseView
  })


  return {
    test,
    user_profile,
    authorizations,
    getUser,
    company,
    companies,
    loadCompanies,
    tenant,
    tenants,
    tenant_name,
    load_tenants_by_company,
    tenants_with_balance,
    tenant_collections_total_by_month,
    tenant_last_current_month_comparison,
    tenant_leases_view,
    tenant_profile_view,
    tenant_transactions_view,
    setTenantBy_id,
    getTenantBy_id_by_last_name,
    lease_view
  };
});