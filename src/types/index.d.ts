import { type ClientSchema, a, defineData } from '@aws-amplify/backend';
import { postConfirmation } from '../auth/post-confirmation/resource';
import type { US_STATE } from '~~/amplify/auth/post-confirmation/graphql/API';
import type { Authorization } from 'aws-cdk-lib/aws-events';



export enum US_STATE {
  AL = 'AL', AK = 'AK', AS = 'AS', AZ = 'AZ', AR = 'AR', CA = 'CA', CO = 'CO', CT = 'CT', DE = 'DE', DC = 'DC', 
  FM = 'FM', FL = 'FL', GA = 'GA', GU = 'GU', HI = 'HI', ID = 'ID', IL = 'IL', IN = 'IN', IA = 'IA', KS = 'KS', 
  KY = 'KY', LA = 'FL', ME = 'ME', MH = 'MH', MD = 'MD', MA = 'MA', MI = 'MI', MN = 'MN', MS = 'MS', MO = 'MO', 
  MT = 'MT', NE = 'NE', NV = 'NV', NH = 'NH', NJ = 'NJ', NM = 'NM', NY = 'NY', NC = 'NC', ND = 'ND', MP = 'MP', 
  OH = 'OH', OK = 'OK', OR = 'OR', PW = 'PW', PA = 'PA', PR = 'PR', RI = 'RI', SC = 'SC', SD = 'SD', TN = 'TN', 
  TX = 'TX', UT = 'UT', VT = 'VT', VI = 'VI', VA = 'VA', WA = 'WA', WV = 'WV', WI = 'WI', WY = 'WY'
}

export enum UOM {
  FT = 'FT', 
  YD = 'YD', 
  IN = 'IN'
}

export enum CURRENCY {
  US = 'US'
}

export enum ATTRIBUTION_TYPE {
  LEASE = 'LEASE'
}

export interface model {
  __type: string,
  createdAt: string,
  modifiedAt: string
}

export interface User extends model {
  cognito_username: string,
  email_1: string,
  email_2: string | null | undefined,
  first_name: string | null | undefined,
  last_name: string | null | undefined,
  phone_1: string | null | undefined,
  phone_2: string | null | undefined,
  address_1: string | null | undefined,
  address_2: string | null | undefined,
  city: string | null | undefined,
  state: US_STATE,
  postal_code: string | null | undefined,
  country: string | null | undefined,
  authorizations: Array<Authorization> | Function,
  tenants: Array<Tenant> | Function,
  companies: Array<Company> | Function
}

export interface Authorization extends model {
      issuer_id: string,
      resource_type: string,
      resource_id: string,
      authority_type: string,
      authority_id: string,
      claim: string,
      user_id: string,
      user: User
}
  
export interface Tenant extends model {
      email_1: string | null | undefined,
      email_2: string | null | undefined,
      first_name: string | null | undefined,
      last_name: string | null | undefined,
      business_name: string | null | undefined,
      phone_1: string | null | undefined,
      phone_2: string | null | undefined,
      postal_address_1: string | null | undefined,
      postal_address_2: string | null | undefined,
      postal_city: string | null | undefined,
      postal_state: US_STATE,
      postal_postal_code: string | null | undefined,
      postal_country: string | null | undefined,
      is_active: boolean | null | undefined,
      is_business: boolean | null | undefined,
      owner_id: string | null | undefined,
      owner: User | null | undefined,
      leases: Array<Lease> | Function | null | undefined,
      transactions: Array<Transaction> | Function | null | undefined,
      company_id: string | null | undefined,
      company: Company | null | undefined

    }

export interface Company extends model {
      name: required,
      physical_address_1: string | null | undefined,
      physical_address_2: string | null | undefined,
      physical_city: string | null | undefined,
      physical_state: US_STATE | null | undefined,
      physical_postal_code: string | null | undefined,
      physical_country: string | null | undefined,
      postal_address_1: string | null | undefined,
      postal_address_2: string | null | undefined,
      postal_city: string | null | undefined,
      postal_state: US_STATE | null | undefined,
      postal_postal_code: string | null | undefined,
      postal_country: string | null | undefined,
      locations: Array<Location> | Function | null | undefined,
      transactions: Array<Transaction> | Function | null | undefined,
      leases: Array<Lease> | Function | null | undefined,
      tenants: Array<Tenant> | Function | null | undefined,
      owner_id: string | null | undefined,
      owner: User | null | undefined
}

export interface Location extends model {
    name: string,
    physical_address_1: string | null | undefined,
    physical_address_2: string | null | undefined,
    physical_city: string | null | undefined,
    physical_state: US_STATE | null | undefined,
    physical_postal_code: string | null | undefined,
    physical_country: string | null | undefined,
    company_id: id,
    company: Company | Function | null | undefined,
    buildings: Array<Building> | Function | null | undefined
}

export interface Building extends model {
    name: string,
    location_id: id,
    location: Location | Function | null | undefined,
    units: Array<Unit> | Function | null | undefined
}

export interface Unit extends model {
    name: string,
    width: number | null | undefined,
    depth: number | null | undefined,
    height: number | null | undefined,
    basis_price: number | null | undefined,
    uom: UOM | null | undefined,
    currency: CURRENCY | null | undefined,
    building_id: id,
    building: Building | Function | null | undefined,
    leases: Array<Lease> | Function | null | undefined,
    is_available: boolean
}

export interface Lease extends model {
    start_date: string,
    close_date: string | null | undefined,
    price: number | null | undefined,
    is_active: boolean | null | undefined,
    units: Array<LeaseUnit> | Function | null | undefined,
    tenant_id: string | null | undefined,
    tenant: Tenant | Function | null | undefined,
    company_id: string,
    comapny: Company | Function | null | undefined
}

export interface LeaseUnit extends model {
    lease_id: string,
    unit_id: string
    lease: Lease | null | undefined,
    unit: Unit | null | undefined,
    price: number | null | undefined,
    is_active: boolean | null | undefined
}

export interface Transaction extends model {
    date: string,
    amount: number,
    open_amount: number | null | undefined,
    is_closed: boolean | null | undefined,
    reference: string | null | undefined,
    memo: string | null | undefined,
    currency: CURRENCY | null | undefined,
    user_id: string,
    company_id: string,
    company: Company | Function | null | undefined,
    transaction_attributions: Array<TransactionAttribution> | Function | null | undefined,
    tenant_id: string,
    tenant: Tenant | Function | null | undefined
}

export interface TransactionAttribution extends model {
    amount: number,
    attribution_type: ATTRIBUTION_TYPE,
    attribution_id: string,
    description: string | null | undefined,
    transaction_id: id,
    transaction: Transaction | Function | null | undefined
  }

