import { type ClientSchema, a, defineData } from '@aws-amplify/backend';
import { postConfirmation } from '../auth/post-confirmation/resource';

const schema = a.schema({
  US_STATE: a
    .enum(['AL',  'AK',  'AS',  'AZ',  'AR',  'CA',  'CO',  'CT',  'DE',  'DC',  'FM',  'FL',  'GA',  'GU',  'HI',  'ID',  'IL',  'IN',  'IA',  'KS',  'KY',  'LA',  'ME',  'MH',  'MD',  'MA',  'MI',  'MN',  'MS',  'MO',  'MT',  'NE',  'NV',  'NH',  'NJ',  'NM',  'NY',  'NC',  'ND',  'MP',  'OH',  'OK',  'OR',  'PW',  'PA',  'PR',  'RI',  'SC',  'SD',  'TN',  'TX',  'UT',  'VT',  'VI',  'VA',  'WA',  'WV',  'WI',  'WY']),
  UOM: a
    .enum(['FT','YD','IN']),
  CURRENCY: a
    .enum(['US']),
  ATTRIBUTION_TYPE: a
    .enum(['LEASE']),
  User: a
  .model({
    cognito_username: a.string().required(),
    email_1: a.email(),
    email_2: a.email(),
    first_name: a.string(),
    last_name: a.string(),
    phone_1: a.string(),
    phone_2: a.string(),
    address_1: a.string(),
    address_2: a.string(),
    city: a.string(),
    state: a.ref('US_STATE'),
    postal_code: a.string(),
    country: a.string().default('USA'),
    authorizations: a.hasMany('Authorization', 'user_id'),
    tenants: a.hasMany('Tenant', 'owner_id'),
    companies: a.hasMany('Company', 'owner_id')
  })
  // .secondaryIndexes((index) => [index('cognito_username')]),
  .identifier(['cognito_username']),
  // .authorization((allow) => [allow.guest()]),
  Authorization: a
    .model({
      issuer_id: a.string().required(),
      resource_type: a.enum(['COMPANY', 'LEASE', 'UNIT']),
      resource_id: a.string().required(),
      authority_type: a.enum(['COMPANY#EMPLOYEE', 'LEASE#OWNER', 'ADMIN']),
      authority_id: a.string().required(),
      claim: a.string().required(),
      user_id: a.id().required(),
      user: a.belongsTo('User', 'user_id')
  }),
  Tenant: a
    .model({
      email_1: a.email(),
      email_2: a.email(),
      first_name: a.string(),
      last_name: a.string(),
      business_name: a.string(),
      phone_1: a.string(),
      phone_2: a.string(),
      postal_address_1: a.string(),
      postal_address_2: a.string(),
      postal_city: a.string(),
      postal_state: a.ref('US_STATE'),
      postal_postal_code: a.string(),
      postal_country: a.string().default('USA'),
      is_active: a.boolean(),
      is_business: a.boolean(),
      owner_id: a.id(),
      owner: a.belongsTo('User', 'owner_id'),
      leases: a.hasMany('Lease', 'tenant_id'),
      transactions: a.hasMany('Transaction', 'tenant_id'),
      company_id: a.id().required(),
      company: a.belongsTo('Company', 'company_id')
    }),
  Company: a
    .model({
      name: a.string().required(),
      physical_address_1: a.string(),
      physical_address_2: a.string(),
      physical_city: a.string(),
      physical_state: a.ref('US_STATE'),
      physical_postal_code: a.string(),
      physical_country: a.string(),
      postal_address_1: a.string(),
      postal_address_2: a.string(),
      postal_city: a.string(),
      postal_state: a.ref('US_STATE'),
      postal_postal_code: a.string(),
      postal_country: a.string(),
      locations: a.hasMany('Location', 'company_id'),
      transactions: a.hasMany('Transaction', 'company_id'),
      leases: a.hasMany('Lease', 'company_id'),
      tenants: a.hasMany('Tenant', 'company_id'),
      owner_id: a.string().required(),
      owner: a.belongsTo('User', 'owner_id')
    }),
  Location: a.model({
    name: a.string().required(),
    physical_address_1: a.string(),
    physical_address_2: a.string(),
    physical_city: a.string(),
    physical_state: a.ref('US_STATE'),
    physical_postal_code: a.string(),
    physical_country: a.string(),
    company_id: a.id().required(),
    company: a.belongsTo('Company', 'company_id'),
    buildings: a.hasMany('Building', 'location_id')
  }),
  Building: a.model({
    name: a.string().required(),
    location_id: a.id().required(),
    location: a.belongsTo('Location', 'location_id'),
    units: a.hasMany('Unit', 'building_id')
  }),
  Unit: a.model({
    name: a.string().required(),
    width: a.float(),
    depth: a.float(),
    height: a.float(),
    basis_price: a.float(),
    uom: a.ref('UOM'),
    currency: a.ref('CURRENCY'),
    building_id: a.id().required(),
    building: a.belongsTo('Building', 'building_id'),
    leases: a.hasMany('LeaseUnit', 'unit_id'),
    is_available: a.boolean().default(true)
  }),
  Lease: a.model({
    start_date: a.datetime().required(),
    close_date: a.datetime(),
    price: a.float(),
    is_active: a.boolean(),
    units: a.hasMany('LeaseUnit', 'lease_id'),
    tenant_id: a.string().required(),
    tenant: a.belongsTo('Tenant', 'tenant_id'),
    company_id: a.string().required(),
    comapny: a.belongsTo('Company', 'company_id')
  }),
  LeaseUnit: a.model({
    lease_id: a.id().required(),
    unit_id: a.id().required(),
    lease: a.belongsTo('Lease', 'lease_id'),
    unit: a.belongsTo('Unit', 'unit_id'),
    price: a.float(),
    is_active: a.boolean()
  }),
  Transaction: a.model({
    date: a.datetime().required(),
    amount: a.float().required(),
    open_amount: a.float(),
    is_closed: a.boolean(),
    reference: a.string(),
    memo: a.string(),
    currency: a.ref('CURRENCY'),
    user_id: a.string().required(),
    company_id: a.id().required(),
    company: a.belongsTo('Company', 'company_id'),
    transaction_attributions: a.hasMany('TransactionAttribution', 'transaction_id'),
    tenant_id: a.string().required(),
    tenant: a.belongsTo('Tenant', 'tenant_id') // Need to change label to tenant
  }),
  TransactionAttribution: a.model({
    amount: a.float().required(),
    attribution_type: a.ref('ATTRIBUTION_TYPE').required(),
    attribution_id: a.string().required(),
    description: a.string(),
    transaction_id: a.id().required(),
    transaction: a.belongsTo('Transaction', 'transaction_id')
  })
    // .authorization((allow) => [allow.guest()]),
}).authorization((allow) => [
  // allow.guest(),
  allow.authenticated(),
  allow.resource(postConfirmation)
]);

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'iam'
  },
});
