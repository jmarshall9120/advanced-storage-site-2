/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getAuthorization = /* GraphQL */ `query GetAuthorization($id: ID!) {
  getAuthorization(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetAuthorizationQueryVariables,
  APITypes.GetAuthorizationQuery
>;
export const getBuilding = /* GraphQL */ `query GetBuilding($id: ID!) {
  getBuilding(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetBuildingQueryVariables,
  APITypes.GetBuildingQuery
>;
export const getCompany = /* GraphQL */ `query GetCompany($id: ID!) {
  getCompany(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetCompanyQueryVariables,
  APITypes.GetCompanyQuery
>;
export const getLease = /* GraphQL */ `query GetLease($id: ID!) {
  getLease(id: $id) {
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
` as GeneratedQuery<APITypes.GetLeaseQueryVariables, APITypes.GetLeaseQuery>;
export const getLeaseUnit = /* GraphQL */ `query GetLeaseUnit($id: ID!) {
  getLeaseUnit(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetLeaseUnitQueryVariables,
  APITypes.GetLeaseUnitQuery
>;
export const getLocation = /* GraphQL */ `query GetLocation($id: ID!) {
  getLocation(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetLocationQueryVariables,
  APITypes.GetLocationQuery
>;
export const getTransaction = /* GraphQL */ `query GetTransaction($id: ID!) {
  getTransaction(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetTransactionQueryVariables,
  APITypes.GetTransactionQuery
>;
export const getTransactionAttribution = /* GraphQL */ `query GetTransactionAttribution($id: ID!) {
  getTransactionAttribution(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetTransactionAttributionQueryVariables,
  APITypes.GetTransactionAttributionQuery
>;
export const getUnit = /* GraphQL */ `query GetUnit($id: ID!) {
  getUnit(id: $id) {
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
` as GeneratedQuery<APITypes.GetUnitQueryVariables, APITypes.GetUnitQuery>;
export const getUser = /* GraphQL */ `query GetUser($cognito_username: String!) {
  getUser(cognito_username: $cognito_username) {
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
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listAuthorizations = /* GraphQL */ `query ListAuthorizations(
  $filter: ModelAuthorizationFilterInput
  $limit: Int
  $nextToken: String
) {
  listAuthorizations(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      authority_id
      authority_type
      claim
      createdAt
      id
      issuer_id
      resource_id
      resource_type
      updatedAt
      user_id
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAuthorizationsQueryVariables,
  APITypes.ListAuthorizationsQuery
>;
export const listBuildings = /* GraphQL */ `query ListBuildings(
  $filter: ModelBuildingFilterInput
  $limit: Int
  $nextToken: String
) {
  listBuildings(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      createdAt
      id
      location_id
      name
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListBuildingsQueryVariables,
  APITypes.ListBuildingsQuery
>;
export const listCompanies = /* GraphQL */ `query ListCompanies(
  $filter: ModelCompanyFilterInput
  $limit: Int
  $nextToken: String
) {
  listCompanies(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCompaniesQueryVariables,
  APITypes.ListCompaniesQuery
>;
export const listLeaseUnits = /* GraphQL */ `query ListLeaseUnits(
  $filter: ModelLeaseUnitFilterInput
  $limit: Int
  $nextToken: String
) {
  listLeaseUnits(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      createdAt
      id
      lease_id
      unit_id
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListLeaseUnitsQueryVariables,
  APITypes.ListLeaseUnitsQuery
>;
export const listLeases = /* GraphQL */ `query ListLeases(
  $filter: ModelLeaseFilterInput
  $limit: Int
  $nextToken: String
) {
  listLeases(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      createdAt
      id
      owner_id
      price
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListLeasesQueryVariables,
  APITypes.ListLeasesQuery
>;
export const listLocations = /* GraphQL */ `query ListLocations(
  $filter: ModelLocationFilterInput
  $limit: Int
  $nextToken: String
) {
  listLocations(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListLocationsQueryVariables,
  APITypes.ListLocationsQuery
>;
export const listTransactionAttributions = /* GraphQL */ `query ListTransactionAttributions(
  $filter: ModelTransactionAttributionFilterInput
  $limit: Int
  $nextToken: String
) {
  listTransactionAttributions(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      amount
      attribution_id
      attribution_type
      createdAt
      description
      id
      transaction_id
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListTransactionAttributionsQueryVariables,
  APITypes.ListTransactionAttributionsQuery
>;
export const listTransactions = /* GraphQL */ `query ListTransactions(
  $filter: ModelTransactionFilterInput
  $limit: Int
  $nextToken: String
) {
  listTransactions(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListTransactionsQueryVariables,
  APITypes.ListTransactionsQuery
>;
export const listUnits = /* GraphQL */ `query ListUnits(
  $filter: ModelUnitFilterInput
  $limit: Int
  $nextToken: String
) {
  listUnits(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUnitsQueryVariables, APITypes.ListUnitsQuery>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $cognito_username: String
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listUsers(
    cognito_username: $cognito_username
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
