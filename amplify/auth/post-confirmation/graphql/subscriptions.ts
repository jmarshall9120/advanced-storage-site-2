/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateAuthorization = /* GraphQL */ `subscription OnCreateAuthorization(
  $filter: ModelSubscriptionAuthorizationFilterInput
) {
  onCreateAuthorization(filter: $filter) {
    authority_id
    authority_type
    claim
    createdAt
    id
    issuer_id
    resource_id
    resource_type
    updatedAt
    user {
      address_1
      address_2
      city
      cognito_username
      country
      createdAt
      email_1
      email_2
      first_name
      last_name
      phone_1
      phone_2
      postal_code
      state
      updatedAt
      __typename
    }
    user_id
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateAuthorizationSubscriptionVariables,
  APITypes.OnCreateAuthorizationSubscription
>;
export const onCreateBuilding = /* GraphQL */ `subscription OnCreateBuilding($filter: ModelSubscriptionBuildingFilterInput) {
  onCreateBuilding(filter: $filter) {
    createdAt
    id
    location {
      company_id
      createdAt
      id
      name
      physical_address_address_1
      physical_address_address_2
      physical_address_city
      physical_address_country
      physical_address_postal_code
      physical_address_state
      updatedAt
      __typename
    }
    location_id
    name
    units {
      nextToken
      __typename
    }
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateBuildingSubscriptionVariables,
  APITypes.OnCreateBuildingSubscription
>;
export const onCreateCompany = /* GraphQL */ `subscription OnCreateCompany($filter: ModelSubscriptionCompanyFilterInput) {
  onCreateCompany(filter: $filter) {
    createdAt
    id
    locations {
      nextToken
      __typename
    }
    name
    owner {
      address_1
      address_2
      city
      cognito_username
      country
      createdAt
      email_1
      email_2
      first_name
      last_name
      phone_1
      phone_2
      postal_code
      state
      updatedAt
      __typename
    }
    owner_id
    physical_address_address_1
    physical_address_address_2
    physical_address_city
    physical_address_country
    physical_address_postal_code
    physical_address_state
    postal_address_address_1
    postal_address_address_2
    postal_address_city
    postal_address_country
    postal_address_postal_code
    postal_address_state
    transactions {
      nextToken
      __typename
    }
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateCompanySubscriptionVariables,
  APITypes.OnCreateCompanySubscription
>;
export const onCreateLease = /* GraphQL */ `subscription OnCreateLease($filter: ModelSubscriptionLeaseFilterInput) {
  onCreateLease(filter: $filter) {
    createdAt
    id
    owner {
      address_1
      address_2
      city
      cognito_username
      country
      createdAt
      email_1
      email_2
      first_name
      last_name
      phone_1
      phone_2
      postal_code
      state
      updatedAt
      __typename
    }
    owner_id
    price
    units {
      nextToken
      __typename
    }
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateLeaseSubscriptionVariables,
  APITypes.OnCreateLeaseSubscription
>;
export const onCreateLeaseUnit = /* GraphQL */ `subscription OnCreateLeaseUnit($filter: ModelSubscriptionLeaseUnitFilterInput) {
  onCreateLeaseUnit(filter: $filter) {
    createdAt
    id
    lease {
      createdAt
      id
      owner_id
      price
      updatedAt
      __typename
    }
    lease_id
    unit {
      basis_price
      building_id
      createdAt
      currency
      depth
      height
      id
      name
      uom
      updatedAt
      width
      __typename
    }
    unit_id
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateLeaseUnitSubscriptionVariables,
  APITypes.OnCreateLeaseUnitSubscription
>;
export const onCreateLocation = /* GraphQL */ `subscription OnCreateLocation($filter: ModelSubscriptionLocationFilterInput) {
  onCreateLocation(filter: $filter) {
    buildings {
      nextToken
      __typename
    }
    company {
      createdAt
      id
      name
      owner_id
      physical_address_address_1
      physical_address_address_2
      physical_address_city
      physical_address_country
      physical_address_postal_code
      physical_address_state
      postal_address_address_1
      postal_address_address_2
      postal_address_city
      postal_address_country
      postal_address_postal_code
      postal_address_state
      updatedAt
      __typename
    }
    company_id
    createdAt
    id
    name
    physical_address_address_1
    physical_address_address_2
    physical_address_city
    physical_address_country
    physical_address_postal_code
    physical_address_state
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateLocationSubscriptionVariables,
  APITypes.OnCreateLocationSubscription
>;
export const onCreateTransaction = /* GraphQL */ `subscription OnCreateTransaction(
  $filter: ModelSubscriptionTransactionFilterInput
) {
  onCreateTransaction(filter: $filter) {
    amount
    company {
      createdAt
      id
      name
      owner_id
      physical_address_address_1
      physical_address_address_2
      physical_address_city
      physical_address_country
      physical_address_postal_code
      physical_address_state
      postal_address_address_1
      postal_address_address_2
      postal_address_city
      postal_address_country
      postal_address_postal_code
      postal_address_state
      updatedAt
      __typename
    }
    company_id
    createdAt
    currency
    date
    id
    memo
    owner {
      address_1
      address_2
      city
      cognito_username
      country
      createdAt
      email_1
      email_2
      first_name
      last_name
      phone_1
      phone_2
      postal_code
      state
      updatedAt
      __typename
    }
    owner_id
    reference
    transaction_attributions {
      nextToken
      __typename
    }
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateTransactionSubscriptionVariables,
  APITypes.OnCreateTransactionSubscription
>;
export const onCreateTransactionAttribution = /* GraphQL */ `subscription OnCreateTransactionAttribution(
  $filter: ModelSubscriptionTransactionAttributionFilterInput
) {
  onCreateTransactionAttribution(filter: $filter) {
    amount
    attribution_id
    attribution_type
    createdAt
    description
    id
    transaction {
      amount
      company_id
      createdAt
      currency
      date
      id
      memo
      owner_id
      reference
      updatedAt
      __typename
    }
    transaction_id
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateTransactionAttributionSubscriptionVariables,
  APITypes.OnCreateTransactionAttributionSubscription
>;
export const onCreateUnit = /* GraphQL */ `subscription OnCreateUnit($filter: ModelSubscriptionUnitFilterInput) {
  onCreateUnit(filter: $filter) {
    basis_price
    building {
      createdAt
      id
      location_id
      name
      updatedAt
      __typename
    }
    building_id
    createdAt
    currency
    depth
    height
    id
    leases {
      nextToken
      __typename
    }
    name
    uom
    updatedAt
    width
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateUnitSubscriptionVariables,
  APITypes.OnCreateUnitSubscription
>;
export const onCreateUser = /* GraphQL */ `subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
  onCreateUser(filter: $filter) {
    address_1
    address_2
    authorizations {
      nextToken
      __typename
    }
    city
    cognito_username
    companies {
      nextToken
      __typename
    }
    country
    createdAt
    email_1
    email_2
    first_name
    last_name
    leases {
      nextToken
      __typename
    }
    phone_1
    phone_2
    postal_code
    state
    transactions {
      nextToken
      __typename
    }
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onDeleteAuthorization = /* GraphQL */ `subscription OnDeleteAuthorization(
  $filter: ModelSubscriptionAuthorizationFilterInput
) {
  onDeleteAuthorization(filter: $filter) {
    authority_id
    authority_type
    claim
    createdAt
    id
    issuer_id
    resource_id
    resource_type
    updatedAt
    user {
      address_1
      address_2
      city
      cognito_username
      country
      createdAt
      email_1
      email_2
      first_name
      last_name
      phone_1
      phone_2
      postal_code
      state
      updatedAt
      __typename
    }
    user_id
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteAuthorizationSubscriptionVariables,
  APITypes.OnDeleteAuthorizationSubscription
>;
export const onDeleteBuilding = /* GraphQL */ `subscription OnDeleteBuilding($filter: ModelSubscriptionBuildingFilterInput) {
  onDeleteBuilding(filter: $filter) {
    createdAt
    id
    location {
      company_id
      createdAt
      id
      name
      physical_address_address_1
      physical_address_address_2
      physical_address_city
      physical_address_country
      physical_address_postal_code
      physical_address_state
      updatedAt
      __typename
    }
    location_id
    name
    units {
      nextToken
      __typename
    }
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteBuildingSubscriptionVariables,
  APITypes.OnDeleteBuildingSubscription
>;
export const onDeleteCompany = /* GraphQL */ `subscription OnDeleteCompany($filter: ModelSubscriptionCompanyFilterInput) {
  onDeleteCompany(filter: $filter) {
    createdAt
    id
    locations {
      nextToken
      __typename
    }
    name
    owner {
      address_1
      address_2
      city
      cognito_username
      country
      createdAt
      email_1
      email_2
      first_name
      last_name
      phone_1
      phone_2
      postal_code
      state
      updatedAt
      __typename
    }
    owner_id
    physical_address_address_1
    physical_address_address_2
    physical_address_city
    physical_address_country
    physical_address_postal_code
    physical_address_state
    postal_address_address_1
    postal_address_address_2
    postal_address_city
    postal_address_country
    postal_address_postal_code
    postal_address_state
    transactions {
      nextToken
      __typename
    }
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteCompanySubscriptionVariables,
  APITypes.OnDeleteCompanySubscription
>;
export const onDeleteLease = /* GraphQL */ `subscription OnDeleteLease($filter: ModelSubscriptionLeaseFilterInput) {
  onDeleteLease(filter: $filter) {
    createdAt
    id
    owner {
      address_1
      address_2
      city
      cognito_username
      country
      createdAt
      email_1
      email_2
      first_name
      last_name
      phone_1
      phone_2
      postal_code
      state
      updatedAt
      __typename
    }
    owner_id
    price
    units {
      nextToken
      __typename
    }
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteLeaseSubscriptionVariables,
  APITypes.OnDeleteLeaseSubscription
>;
export const onDeleteLeaseUnit = /* GraphQL */ `subscription OnDeleteLeaseUnit($filter: ModelSubscriptionLeaseUnitFilterInput) {
  onDeleteLeaseUnit(filter: $filter) {
    createdAt
    id
    lease {
      createdAt
      id
      owner_id
      price
      updatedAt
      __typename
    }
    lease_id
    unit {
      basis_price
      building_id
      createdAt
      currency
      depth
      height
      id
      name
      uom
      updatedAt
      width
      __typename
    }
    unit_id
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteLeaseUnitSubscriptionVariables,
  APITypes.OnDeleteLeaseUnitSubscription
>;
export const onDeleteLocation = /* GraphQL */ `subscription OnDeleteLocation($filter: ModelSubscriptionLocationFilterInput) {
  onDeleteLocation(filter: $filter) {
    buildings {
      nextToken
      __typename
    }
    company {
      createdAt
      id
      name
      owner_id
      physical_address_address_1
      physical_address_address_2
      physical_address_city
      physical_address_country
      physical_address_postal_code
      physical_address_state
      postal_address_address_1
      postal_address_address_2
      postal_address_city
      postal_address_country
      postal_address_postal_code
      postal_address_state
      updatedAt
      __typename
    }
    company_id
    createdAt
    id
    name
    physical_address_address_1
    physical_address_address_2
    physical_address_city
    physical_address_country
    physical_address_postal_code
    physical_address_state
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteLocationSubscriptionVariables,
  APITypes.OnDeleteLocationSubscription
>;
export const onDeleteTransaction = /* GraphQL */ `subscription OnDeleteTransaction(
  $filter: ModelSubscriptionTransactionFilterInput
) {
  onDeleteTransaction(filter: $filter) {
    amount
    company {
      createdAt
      id
      name
      owner_id
      physical_address_address_1
      physical_address_address_2
      physical_address_city
      physical_address_country
      physical_address_postal_code
      physical_address_state
      postal_address_address_1
      postal_address_address_2
      postal_address_city
      postal_address_country
      postal_address_postal_code
      postal_address_state
      updatedAt
      __typename
    }
    company_id
    createdAt
    currency
    date
    id
    memo
    owner {
      address_1
      address_2
      city
      cognito_username
      country
      createdAt
      email_1
      email_2
      first_name
      last_name
      phone_1
      phone_2
      postal_code
      state
      updatedAt
      __typename
    }
    owner_id
    reference
    transaction_attributions {
      nextToken
      __typename
    }
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteTransactionSubscriptionVariables,
  APITypes.OnDeleteTransactionSubscription
>;
export const onDeleteTransactionAttribution = /* GraphQL */ `subscription OnDeleteTransactionAttribution(
  $filter: ModelSubscriptionTransactionAttributionFilterInput
) {
  onDeleteTransactionAttribution(filter: $filter) {
    amount
    attribution_id
    attribution_type
    createdAt
    description
    id
    transaction {
      amount
      company_id
      createdAt
      currency
      date
      id
      memo
      owner_id
      reference
      updatedAt
      __typename
    }
    transaction_id
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteTransactionAttributionSubscriptionVariables,
  APITypes.OnDeleteTransactionAttributionSubscription
>;
export const onDeleteUnit = /* GraphQL */ `subscription OnDeleteUnit($filter: ModelSubscriptionUnitFilterInput) {
  onDeleteUnit(filter: $filter) {
    basis_price
    building {
      createdAt
      id
      location_id
      name
      updatedAt
      __typename
    }
    building_id
    createdAt
    currency
    depth
    height
    id
    leases {
      nextToken
      __typename
    }
    name
    uom
    updatedAt
    width
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteUnitSubscriptionVariables,
  APITypes.OnDeleteUnitSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
  onDeleteUser(filter: $filter) {
    address_1
    address_2
    authorizations {
      nextToken
      __typename
    }
    city
    cognito_username
    companies {
      nextToken
      __typename
    }
    country
    createdAt
    email_1
    email_2
    first_name
    last_name
    leases {
      nextToken
      __typename
    }
    phone_1
    phone_2
    postal_code
    state
    transactions {
      nextToken
      __typename
    }
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onUpdateAuthorization = /* GraphQL */ `subscription OnUpdateAuthorization(
  $filter: ModelSubscriptionAuthorizationFilterInput
) {
  onUpdateAuthorization(filter: $filter) {
    authority_id
    authority_type
    claim
    createdAt
    id
    issuer_id
    resource_id
    resource_type
    updatedAt
    user {
      address_1
      address_2
      city
      cognito_username
      country
      createdAt
      email_1
      email_2
      first_name
      last_name
      phone_1
      phone_2
      postal_code
      state
      updatedAt
      __typename
    }
    user_id
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateAuthorizationSubscriptionVariables,
  APITypes.OnUpdateAuthorizationSubscription
>;
export const onUpdateBuilding = /* GraphQL */ `subscription OnUpdateBuilding($filter: ModelSubscriptionBuildingFilterInput) {
  onUpdateBuilding(filter: $filter) {
    createdAt
    id
    location {
      company_id
      createdAt
      id
      name
      physical_address_address_1
      physical_address_address_2
      physical_address_city
      physical_address_country
      physical_address_postal_code
      physical_address_state
      updatedAt
      __typename
    }
    location_id
    name
    units {
      nextToken
      __typename
    }
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateBuildingSubscriptionVariables,
  APITypes.OnUpdateBuildingSubscription
>;
export const onUpdateCompany = /* GraphQL */ `subscription OnUpdateCompany($filter: ModelSubscriptionCompanyFilterInput) {
  onUpdateCompany(filter: $filter) {
    createdAt
    id
    locations {
      nextToken
      __typename
    }
    name
    owner {
      address_1
      address_2
      city
      cognito_username
      country
      createdAt
      email_1
      email_2
      first_name
      last_name
      phone_1
      phone_2
      postal_code
      state
      updatedAt
      __typename
    }
    owner_id
    physical_address_address_1
    physical_address_address_2
    physical_address_city
    physical_address_country
    physical_address_postal_code
    physical_address_state
    postal_address_address_1
    postal_address_address_2
    postal_address_city
    postal_address_country
    postal_address_postal_code
    postal_address_state
    transactions {
      nextToken
      __typename
    }
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateCompanySubscriptionVariables,
  APITypes.OnUpdateCompanySubscription
>;
export const onUpdateLease = /* GraphQL */ `subscription OnUpdateLease($filter: ModelSubscriptionLeaseFilterInput) {
  onUpdateLease(filter: $filter) {
    createdAt
    id
    owner {
      address_1
      address_2
      city
      cognito_username
      country
      createdAt
      email_1
      email_2
      first_name
      last_name
      phone_1
      phone_2
      postal_code
      state
      updatedAt
      __typename
    }
    owner_id
    price
    units {
      nextToken
      __typename
    }
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateLeaseSubscriptionVariables,
  APITypes.OnUpdateLeaseSubscription
>;
export const onUpdateLeaseUnit = /* GraphQL */ `subscription OnUpdateLeaseUnit($filter: ModelSubscriptionLeaseUnitFilterInput) {
  onUpdateLeaseUnit(filter: $filter) {
    createdAt
    id
    lease {
      createdAt
      id
      owner_id
      price
      updatedAt
      __typename
    }
    lease_id
    unit {
      basis_price
      building_id
      createdAt
      currency
      depth
      height
      id
      name
      uom
      updatedAt
      width
      __typename
    }
    unit_id
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateLeaseUnitSubscriptionVariables,
  APITypes.OnUpdateLeaseUnitSubscription
>;
export const onUpdateLocation = /* GraphQL */ `subscription OnUpdateLocation($filter: ModelSubscriptionLocationFilterInput) {
  onUpdateLocation(filter: $filter) {
    buildings {
      nextToken
      __typename
    }
    company {
      createdAt
      id
      name
      owner_id
      physical_address_address_1
      physical_address_address_2
      physical_address_city
      physical_address_country
      physical_address_postal_code
      physical_address_state
      postal_address_address_1
      postal_address_address_2
      postal_address_city
      postal_address_country
      postal_address_postal_code
      postal_address_state
      updatedAt
      __typename
    }
    company_id
    createdAt
    id
    name
    physical_address_address_1
    physical_address_address_2
    physical_address_city
    physical_address_country
    physical_address_postal_code
    physical_address_state
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateLocationSubscriptionVariables,
  APITypes.OnUpdateLocationSubscription
>;
export const onUpdateTransaction = /* GraphQL */ `subscription OnUpdateTransaction(
  $filter: ModelSubscriptionTransactionFilterInput
) {
  onUpdateTransaction(filter: $filter) {
    amount
    company {
      createdAt
      id
      name
      owner_id
      physical_address_address_1
      physical_address_address_2
      physical_address_city
      physical_address_country
      physical_address_postal_code
      physical_address_state
      postal_address_address_1
      postal_address_address_2
      postal_address_city
      postal_address_country
      postal_address_postal_code
      postal_address_state
      updatedAt
      __typename
    }
    company_id
    createdAt
    currency
    date
    id
    memo
    owner {
      address_1
      address_2
      city
      cognito_username
      country
      createdAt
      email_1
      email_2
      first_name
      last_name
      phone_1
      phone_2
      postal_code
      state
      updatedAt
      __typename
    }
    owner_id
    reference
    transaction_attributions {
      nextToken
      __typename
    }
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateTransactionSubscriptionVariables,
  APITypes.OnUpdateTransactionSubscription
>;
export const onUpdateTransactionAttribution = /* GraphQL */ `subscription OnUpdateTransactionAttribution(
  $filter: ModelSubscriptionTransactionAttributionFilterInput
) {
  onUpdateTransactionAttribution(filter: $filter) {
    amount
    attribution_id
    attribution_type
    createdAt
    description
    id
    transaction {
      amount
      company_id
      createdAt
      currency
      date
      id
      memo
      owner_id
      reference
      updatedAt
      __typename
    }
    transaction_id
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateTransactionAttributionSubscriptionVariables,
  APITypes.OnUpdateTransactionAttributionSubscription
>;
export const onUpdateUnit = /* GraphQL */ `subscription OnUpdateUnit($filter: ModelSubscriptionUnitFilterInput) {
  onUpdateUnit(filter: $filter) {
    basis_price
    building {
      createdAt
      id
      location_id
      name
      updatedAt
      __typename
    }
    building_id
    createdAt
    currency
    depth
    height
    id
    leases {
      nextToken
      __typename
    }
    name
    uom
    updatedAt
    width
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateUnitSubscriptionVariables,
  APITypes.OnUpdateUnitSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
  onUpdateUser(filter: $filter) {
    address_1
    address_2
    authorizations {
      nextToken
      __typename
    }
    city
    cognito_username
    companies {
      nextToken
      __typename
    }
    country
    createdAt
    email_1
    email_2
    first_name
    last_name
    leases {
      nextToken
      __typename
    }
    phone_1
    phone_2
    postal_code
    state
    transactions {
      nextToken
      __typename
    }
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
