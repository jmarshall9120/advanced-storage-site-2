<template>
  <v-container>
    <v-row>
      <v-col>
        <div>{{ dataStore.tenant_name }}</div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>Lease</v-card-title>
          <v-card-text>{{ lease_details }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>Units</v-card-title>
          <v-card-text>{{ units }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>Transactions</v-card-title>
          <v-card-text>{{ attributed_transactions }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>UnMatchedTransactions</v-card-title>
          <v-card-text>{{ potential_matching_transactions }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup lang="ts">
import { ref, computed, watch, onMounted } from "vue";
import { useDataStore } from "~/stores/data";
import { useUnitsStore } from "~/stores/units";
import type {Schema} from '~/../amplify/data/resource';
import type {Lease, LeaseUnit, Transaction, TransactionAttribution, CURRENCY} from '~/types/index';

const dataStore = useDataStore();
const unitsStore = useUnitsStore();
// type Tenant = Schema['Tenant']['type']
// type Unit = Schema['Unit']['type']
// type Lease = Schema['Lease']['type']
// type LeaseUnit = Schema['LeaseUnit']['type']
// type Transaction = Schema['Transaction']['type']
// type Attribution = Schema['TransactionAttribution']['type']
// type DataStore = ReturnType<typeof useDataStore>

const lease_details = computed(() => {
  if (!dataStore.tenant) {
    return "Loading...";
  }
  return dataStore.lease_view;
});

const units = computed(() => {
  if (!dataStore.lease_view) {
    return "Loading...";
  }
  const _unit_ids = dataStore.lease_view.units.map((_) => _.unit_id);
  return unitsStore.units_flattened_by_location_view.filter(_ => {
    return _unit_ids.includes(_.id);
  });
});

interface _Transaction extends Transaction {
  date: string,
    amount: number,
    // open_amount: number | null | undefined,
    // is_closed: boolean | null | undefined,
    reference: string | null | undefined,
    memo: string | null | undefined,
    currency: CURRENCY | null | undefined,
    user_id: string,
    company_id: string,
    transaction_attributions: Array<TransactionAttribution>,
    tenant_id: string,
}
const attributed_transactions = computed(() : Array<TransactionAttribution> | string => {
  if (!dataStore.tenant || !dataStore.lease_view){
    return "Loading..."
  }
  const _transactions = dataStore.tenant.transactions as unknown as Array<_Transaction>
  return _transactions.reduce((prev:Array<TransactionAttribution>, curr:_Transaction) => {
    // const _attributions = curr.transaction_attributions as unknown as Array<TransactionAttribution>
      const attrs = curr.transaction_attributions.filter((_:TransactionAttribution) => {
        return (
          _.attribution_type === "LEASE" &&
          _.attribution_id === dataStore.lease_view?.id
        );
      });
      // console.log("ATTRS: ", attrs);
      return prev.concat(attrs);
    }, []);
});

const potential_matching_transactions = computed(() => {
  if (!dataStore.tenant || !dataStore.lease_view) {
    return 'Loading...'
  } else if (!dataStore.tenant.transactions){
    return []
  }
  const _unit_prices = dataStore.lease_view.units.map((_:LeaseUnit) => {return Math.abs(_.price)})
  const _attributions : Array<TransactionAttribution> = dataStore.tenant.transactions.reduce((
    prev:Array<TransactionAttribution>,
    curr:Transaction
  ) : Array<TransactionAttribution> => {
    return prev.concat(curr.transaction_attributions.filter((_:TransactionAttribution) => {
      return !_.attribution_id && (
        Math.abs(_.amount) == Math.abs(dataStore.lease_view?.price as unknown as number) || // ts doesn't catch the path above that checks for null
        _unit_prices.includes(Math.abs(_.amount))
    )
    }))
  },[])
  return _attributions
})

onMounted(async () => {
  await dataStore.loadCompanies();
  await dataStore.load_tenants_by_company();
  await unitsStore.load_locations();

  // Set tenant to someone with lots of
  // data for testing:
  const fn = (val: any) => {
    const _tenant_to_set = dataStore.getTenantBy_id_by_last_name("Carter");
    console.log('ID to set!!!: ', _tenant_to_set)
    dataStore.setTenantBy_id(_tenant_to_set[0].id);
  };
  if (!dataStore.tenant){
    watch_for_dependancy_loaded(() => dataStore.tenant, fn);
  } else {
    fn('')
  }
  // const _tenant_to_set = dataStore.getTenantBy_id_by_last_name("Carter");
  // console.log("CHECKING TENANT GOT");
  // console.log(_tenant_to_set);
});
</script>
