/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createAuthorization = /* GraphQL */ `mutation CreateAuthorization(
  $condition: ModelAuthorizationConditionInput
  $input: CreateAuthorizationInput!
) {
  createAuthorization(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateAuthorizationMutationVariables,
  APITypes.CreateAuthorizationMutation
>;
export const createBuilding = /* GraphQL */ `mutation CreateBuilding(
  $condition: ModelBuildingConditionInput
  $input: CreateBuildingInput!
) {
  createBuilding(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateBuildingMutationVariables,
  APITypes.CreateBuildingMutation
>;
export const createCompany = /* GraphQL */ `mutation CreateCompany(
  $condition: ModelCompanyConditionInput
  $input: CreateCompanyInput!
) {
  createCompany(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateCompanyMutationVariables,
  APITypes.CreateCompanyMutation
>;
export const createLease = /* GraphQL */ `mutation CreateLease(
  $condition: ModelLeaseConditionInput
  $input: CreateLeaseInput!
) {
  createLease(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateLeaseMutationVariables,
  APITypes.CreateLeaseMutation
>;
export const createLeaseUnit = /* GraphQL */ `mutation CreateLeaseUnit(
  $condition: ModelLeaseUnitConditionInput
  $input: CreateLeaseUnitInput!
) {
  createLeaseUnit(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateLeaseUnitMutationVariables,
  APITypes.CreateLeaseUnitMutation
>;
export const createLocation = /* GraphQL */ `mutation CreateLocation(
  $condition: ModelLocationConditionInput
  $input: CreateLocationInput!
) {
  createLocation(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateLocationMutationVariables,
  APITypes.CreateLocationMutation
>;
export const createTransaction = /* GraphQL */ `mutation CreateTransaction(
  $condition: ModelTransactionConditionInput
  $input: CreateTransactionInput!
) {
  createTransaction(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateTransactionMutationVariables,
  APITypes.CreateTransactionMutation
>;
export const createTransactionAttribution = /* GraphQL */ `mutation CreateTransactionAttribution(
  $condition: ModelTransactionAttributionConditionInput
  $input: CreateTransactionAttributionInput!
) {
  createTransactionAttribution(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateTransactionAttributionMutationVariables,
  APITypes.CreateTransactionAttributionMutation
>;
export const createUnit = /* GraphQL */ `mutation CreateUnit(
  $condition: ModelUnitConditionInput
  $input: CreateUnitInput!
) {
  createUnit(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateUnitMutationVariables,
  APITypes.CreateUnitMutation
>;
export const createUser = /* GraphQL */ `mutation CreateUser(
  $condition: ModelUserConditionInput
  $input: CreateUserInput!
) {
  createUser(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const deleteAuthorization = /* GraphQL */ `mutation DeleteAuthorization(
  $condition: ModelAuthorizationConditionInput
  $input: DeleteAuthorizationInput!
) {
  deleteAuthorization(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteAuthorizationMutationVariables,
  APITypes.DeleteAuthorizationMutation
>;
export const deleteBuilding = /* GraphQL */ `mutation DeleteBuilding(
  $condition: ModelBuildingConditionInput
  $input: DeleteBuildingInput!
) {
  deleteBuilding(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteBuildingMutationVariables,
  APITypes.DeleteBuildingMutation
>;
export const deleteCompany = /* GraphQL */ `mutation DeleteCompany(
  $condition: ModelCompanyConditionInput
  $input: DeleteCompanyInput!
) {
  deleteCompany(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteCompanyMutationVariables,
  APITypes.DeleteCompanyMutation
>;
export const deleteLease = /* GraphQL */ `mutation DeleteLease(
  $condition: ModelLeaseConditionInput
  $input: DeleteLeaseInput!
) {
  deleteLease(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteLeaseMutationVariables,
  APITypes.DeleteLeaseMutation
>;
export const deleteLeaseUnit = /* GraphQL */ `mutation DeleteLeaseUnit(
  $condition: ModelLeaseUnitConditionInput
  $input: DeleteLeaseUnitInput!
) {
  deleteLeaseUnit(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteLeaseUnitMutationVariables,
  APITypes.DeleteLeaseUnitMutation
>;
export const deleteLocation = /* GraphQL */ `mutation DeleteLocation(
  $condition: ModelLocationConditionInput
  $input: DeleteLocationInput!
) {
  deleteLocation(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteLocationMutationVariables,
  APITypes.DeleteLocationMutation
>;
export const deleteTransaction = /* GraphQL */ `mutation DeleteTransaction(
  $condition: ModelTransactionConditionInput
  $input: DeleteTransactionInput!
) {
  deleteTransaction(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteTransactionMutationVariables,
  APITypes.DeleteTransactionMutation
>;
export const deleteTransactionAttribution = /* GraphQL */ `mutation DeleteTransactionAttribution(
  $condition: ModelTransactionAttributionConditionInput
  $input: DeleteTransactionAttributionInput!
) {
  deleteTransactionAttribution(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteTransactionAttributionMutationVariables,
  APITypes.DeleteTransactionAttributionMutation
>;
export const deleteUnit = /* GraphQL */ `mutation DeleteUnit(
  $condition: ModelUnitConditionInput
  $input: DeleteUnitInput!
) {
  deleteUnit(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteUnitMutationVariables,
  APITypes.DeleteUnitMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $condition: ModelUserConditionInput
  $input: DeleteUserInput!
) {
  deleteUser(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const updateAuthorization = /* GraphQL */ `mutation UpdateAuthorization(
  $condition: ModelAuthorizationConditionInput
  $input: UpdateAuthorizationInput!
) {
  updateAuthorization(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateAuthorizationMutationVariables,
  APITypes.UpdateAuthorizationMutation
>;
export const updateBuilding = /* GraphQL */ `mutation UpdateBuilding(
  $condition: ModelBuildingConditionInput
  $input: UpdateBuildingInput!
) {
  updateBuilding(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateBuildingMutationVariables,
  APITypes.UpdateBuildingMutation
>;
export const updateCompany = /* GraphQL */ `mutation UpdateCompany(
  $condition: ModelCompanyConditionInput
  $input: UpdateCompanyInput!
) {
  updateCompany(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateCompanyMutationVariables,
  APITypes.UpdateCompanyMutation
>;
export const updateLease = /* GraphQL */ `mutation UpdateLease(
  $condition: ModelLeaseConditionInput
  $input: UpdateLeaseInput!
) {
  updateLease(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateLeaseMutationVariables,
  APITypes.UpdateLeaseMutation
>;
export const updateLeaseUnit = /* GraphQL */ `mutation UpdateLeaseUnit(
  $condition: ModelLeaseUnitConditionInput
  $input: UpdateLeaseUnitInput!
) {
  updateLeaseUnit(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateLeaseUnitMutationVariables,
  APITypes.UpdateLeaseUnitMutation
>;
export const updateLocation = /* GraphQL */ `mutation UpdateLocation(
  $condition: ModelLocationConditionInput
  $input: UpdateLocationInput!
) {
  updateLocation(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateLocationMutationVariables,
  APITypes.UpdateLocationMutation
>;
export const updateTransaction = /* GraphQL */ `mutation UpdateTransaction(
  $condition: ModelTransactionConditionInput
  $input: UpdateTransactionInput!
) {
  updateTransaction(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateTransactionMutationVariables,
  APITypes.UpdateTransactionMutation
>;
export const updateTransactionAttribution = /* GraphQL */ `mutation UpdateTransactionAttribution(
  $condition: ModelTransactionAttributionConditionInput
  $input: UpdateTransactionAttributionInput!
) {
  updateTransactionAttribution(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateTransactionAttributionMutationVariables,
  APITypes.UpdateTransactionAttributionMutation
>;
export const updateUnit = /* GraphQL */ `mutation UpdateUnit(
  $condition: ModelUnitConditionInput
  $input: UpdateUnitInput!
) {
  updateUnit(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateUnitMutationVariables,
  APITypes.UpdateUnitMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $condition: ModelUserConditionInput
  $input: UpdateUserInput!
) {
  updateUser(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
