/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type Authorization = {
  __typename: "Authorization",
  authority_id: string,
  authority_type?: AuthorizationAuthority_type | null,
  claim: string,
  createdAt: string,
  id: string,
  issuer_id: string,
  resource_id: string,
  resource_type?: AuthorizationResource_type | null,
  updatedAt: string,
  user?: User | null,
  user_id: string,
};

export enum AuthorizationAuthority_type {
  ADMIN = "ADMIN",
  COMPANY = "COMPANY",
  LEASE = "LEASE",
}


export enum AuthorizationResource_type {
  COMPANY = "COMPANY",
  LEASE = "LEASE",
  UNIT = "UNIT",
}


export type User = {
  __typename: "User",
  address_1?: string | null,
  address_2?: string | null,
  authorizations?: ModelAuthorizationConnection | null,
  city?: string | null,
  cognito_username: string,
  companies?: ModelCompanyConnection | null,
  country?: string | null,
  createdAt: string,
  email_1?: string | null,
  email_2?: string | null,
  first_name?: string | null,
  last_name?: string | null,
  leases?: ModelLeaseConnection | null,
  phone_1?: string | null,
  phone_2?: string | null,
  postal_code?: string | null,
  state?: US_STATE | null,
  transactions?: ModelTransactionConnection | null,
  updatedAt: string,
};

export type ModelAuthorizationConnection = {
  __typename: "ModelAuthorizationConnection",
  items:  Array<Authorization | null >,
  nextToken?: string | null,
};

export type ModelCompanyConnection = {
  __typename: "ModelCompanyConnection",
  items:  Array<Company | null >,
  nextToken?: string | null,
};

export type Company = {
  __typename: "Company",
  createdAt: string,
  id: string,
  locations?: ModelLocationConnection | null,
  name: string,
  owner?: User | null,
  owner_id: string,
  physical_address_address_1?: string | null,
  physical_address_address_2?: string | null,
  physical_address_city?: string | null,
  physical_address_country?: string | null,
  physical_address_postal_code?: string | null,
  physical_address_state?: US_STATE | null,
  postal_address_address_1?: string | null,
  postal_address_address_2?: string | null,
  postal_address_city?: string | null,
  postal_address_country?: string | null,
  postal_address_postal_code?: string | null,
  postal_address_state?: US_STATE | null,
  transactions?: ModelTransactionConnection | null,
  updatedAt: string,
};

export type ModelLocationConnection = {
  __typename: "ModelLocationConnection",
  items:  Array<Location | null >,
  nextToken?: string | null,
};

export type Location = {
  __typename: "Location",
  buildings?: ModelBuildingConnection | null,
  company?: Company | null,
  company_id: string,
  createdAt: string,
  id: string,
  name: string,
  physical_address_address_1?: string | null,
  physical_address_address_2?: string | null,
  physical_address_city?: string | null,
  physical_address_country?: string | null,
  physical_address_postal_code?: string | null,
  physical_address_state?: US_STATE | null,
  updatedAt: string,
};

export type ModelBuildingConnection = {
  __typename: "ModelBuildingConnection",
  items:  Array<Building | null >,
  nextToken?: string | null,
};

export type Building = {
  __typename: "Building",
  createdAt: string,
  id: string,
  location?: Location | null,
  location_id: string,
  name: string,
  units?: ModelUnitConnection | null,
  updatedAt: string,
};

export type ModelUnitConnection = {
  __typename: "ModelUnitConnection",
  items:  Array<Unit | null >,
  nextToken?: string | null,
};

export type Unit = {
  __typename: "Unit",
  basis_price?: number | null,
  building?: Building | null,
  building_id: string,
  createdAt: string,
  currency?: CURRENCY | null,
  depth?: number | null,
  height?: number | null,
  id: string,
  leases?: ModelLeaseUnitConnection | null,
  name: string,
  uom?: UOM | null,
  updatedAt: string,
  width?: number | null,
};

export enum CURRENCY {
  US = "US",
}


export type ModelLeaseUnitConnection = {
  __typename: "ModelLeaseUnitConnection",
  items:  Array<LeaseUnit | null >,
  nextToken?: string | null,
};

export type LeaseUnit = {
  __typename: "LeaseUnit",
  createdAt: string,
  id: string,
  lease?: Lease | null,
  lease_id: string,
  unit?: Unit | null,
  unit_id: string,
  updatedAt: string,
};

export type Lease = {
  __typename: "Lease",
  createdAt: string,
  id: string,
  owner?: User | null,
  owner_id: string,
  price?: number | null,
  units?: ModelLeaseUnitConnection | null,
  updatedAt: string,
};

export enum UOM {
  FT = "FT",
  IN = "IN",
  YD = "YD",
}


export enum US_STATE {
  AK = "AK",
  AL = "AL",
  AR = "AR",
  AS = "AS",
  AZ = "AZ",
  CA = "CA",
  CO = "CO",
  CT = "CT",
  DC = "DC",
  DE = "DE",
  FL = "FL",
  FM = "FM",
  GA = "GA",
  GU = "GU",
  HI = "HI",
  IA = "IA",
  ID = "ID",
  IL = "IL",
  IN = "IN",
  KS = "KS",
  KY = "KY",
  LA = "LA",
  MA = "MA",
  MD = "MD",
  ME = "ME",
  MH = "MH",
  MI = "MI",
  MN = "MN",
  MO = "MO",
  MP = "MP",
  MS = "MS",
  MT = "MT",
  NC = "NC",
  ND = "ND",
  NE = "NE",
  NH = "NH",
  NJ = "NJ",
  NM = "NM",
  NV = "NV",
  NY = "NY",
  OH = "OH",
  OK = "OK",
  OR = "OR",
  PA = "PA",
  PR = "PR",
  PW = "PW",
  RI = "RI",
  SC = "SC",
  SD = "SD",
  TN = "TN",
  TX = "TX",
  UT = "UT",
  VA = "VA",
  VI = "VI",
  VT = "VT",
  WA = "WA",
  WI = "WI",
  WV = "WV",
  WY = "WY",
}


export type ModelTransactionConnection = {
  __typename: "ModelTransactionConnection",
  items:  Array<Transaction | null >,
  nextToken?: string | null,
};

export type Transaction = {
  __typename: "Transaction",
  amount: number,
  company?: Company | null,
  company_id: string,
  createdAt: string,
  currency?: CURRENCY | null,
  date: string,
  id: string,
  memo?: string | null,
  owner?: User | null,
  owner_id: string,
  reference?: string | null,
  transaction_attributions?: ModelTransactionAttributionConnection | null,
  updatedAt: string,
};

export type ModelTransactionAttributionConnection = {
  __typename: "ModelTransactionAttributionConnection",
  items:  Array<TransactionAttribution | null >,
  nextToken?: string | null,
};

export type TransactionAttribution = {
  __typename: "TransactionAttribution",
  amount: number,
  attribution_id: string,
  attribution_type: ATTRIBUTION_TYPE,
  createdAt: string,
  description?: string | null,
  id: string,
  transaction?: Transaction | null,
  transaction_id: string,
  updatedAt: string,
};

export enum ATTRIBUTION_TYPE {
  LEASE = "LEASE",
}


export type ModelLeaseConnection = {
  __typename: "ModelLeaseConnection",
  items:  Array<Lease | null >,
  nextToken?: string | null,
};

export type ModelAuthorizationFilterInput = {
  and?: Array< ModelAuthorizationFilterInput | null > | null,
  authority_id?: ModelStringInput | null,
  authority_type?: ModelAuthorizationAuthority_typeInput | null,
  claim?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  issuer_id?: ModelStringInput | null,
  not?: ModelAuthorizationFilterInput | null,
  or?: Array< ModelAuthorizationFilterInput | null > | null,
  resource_id?: ModelStringInput | null,
  resource_type?: ModelAuthorizationResource_typeInput | null,
  updatedAt?: ModelStringInput | null,
  user_id?: ModelIDInput | null,
};

export type ModelStringInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  _null = "_null",
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
}


export type ModelSizeInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export type ModelAuthorizationAuthority_typeInput = {
  eq?: AuthorizationAuthority_type | null,
  ne?: AuthorizationAuthority_type | null,
};

export type ModelIDInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export type ModelAuthorizationResource_typeInput = {
  eq?: AuthorizationResource_type | null,
  ne?: AuthorizationResource_type | null,
};

export type ModelBuildingFilterInput = {
  and?: Array< ModelBuildingFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  location_id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  not?: ModelBuildingFilterInput | null,
  or?: Array< ModelBuildingFilterInput | null > | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelCompanyFilterInput = {
  and?: Array< ModelCompanyFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  not?: ModelCompanyFilterInput | null,
  or?: Array< ModelCompanyFilterInput | null > | null,
  owner_id?: ModelStringInput | null,
  physical_address_address_1?: ModelStringInput | null,
  physical_address_address_2?: ModelStringInput | null,
  physical_address_city?: ModelStringInput | null,
  physical_address_country?: ModelStringInput | null,
  physical_address_postal_code?: ModelStringInput | null,
  physical_address_state?: ModelUS_STATEInput | null,
  postal_address_address_1?: ModelStringInput | null,
  postal_address_address_2?: ModelStringInput | null,
  postal_address_city?: ModelStringInput | null,
  postal_address_country?: ModelStringInput | null,
  postal_address_postal_code?: ModelStringInput | null,
  postal_address_state?: ModelUS_STATEInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelUS_STATEInput = {
  eq?: US_STATE | null,
  ne?: US_STATE | null,
};

export type ModelLeaseUnitFilterInput = {
  and?: Array< ModelLeaseUnitFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  lease_id?: ModelIDInput | null,
  not?: ModelLeaseUnitFilterInput | null,
  or?: Array< ModelLeaseUnitFilterInput | null > | null,
  unit_id?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelLeaseFilterInput = {
  and?: Array< ModelLeaseFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelLeaseFilterInput | null,
  or?: Array< ModelLeaseFilterInput | null > | null,
  owner_id?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelFloatInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export type ModelLocationFilterInput = {
  and?: Array< ModelLocationFilterInput | null > | null,
  company_id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  not?: ModelLocationFilterInput | null,
  or?: Array< ModelLocationFilterInput | null > | null,
  physical_address_address_1?: ModelStringInput | null,
  physical_address_address_2?: ModelStringInput | null,
  physical_address_city?: ModelStringInput | null,
  physical_address_country?: ModelStringInput | null,
  physical_address_postal_code?: ModelStringInput | null,
  physical_address_state?: ModelUS_STATEInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelTransactionAttributionFilterInput = {
  amount?: ModelFloatInput | null,
  and?: Array< ModelTransactionAttributionFilterInput | null > | null,
  attribution_id?: ModelStringInput | null,
  attribution_type?: ModelATTRIBUTION_TYPEInput | null,
  createdAt?: ModelStringInput | null,
  description?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelTransactionAttributionFilterInput | null,
  or?: Array< ModelTransactionAttributionFilterInput | null > | null,
  transaction_id?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelATTRIBUTION_TYPEInput = {
  eq?: ATTRIBUTION_TYPE | null,
  ne?: ATTRIBUTION_TYPE | null,
};

export type ModelTransactionFilterInput = {
  amount?: ModelFloatInput | null,
  and?: Array< ModelTransactionFilterInput | null > | null,
  company_id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  currency?: ModelCURRENCYInput | null,
  date?: ModelStringInput | null,
  id?: ModelIDInput | null,
  memo?: ModelStringInput | null,
  not?: ModelTransactionFilterInput | null,
  or?: Array< ModelTransactionFilterInput | null > | null,
  owner_id?: ModelStringInput | null,
  reference?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelCURRENCYInput = {
  eq?: CURRENCY | null,
  ne?: CURRENCY | null,
};

export type ModelUnitFilterInput = {
  and?: Array< ModelUnitFilterInput | null > | null,
  basis_price?: ModelFloatInput | null,
  building_id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  currency?: ModelCURRENCYInput | null,
  depth?: ModelFloatInput | null,
  height?: ModelFloatInput | null,
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  not?: ModelUnitFilterInput | null,
  or?: Array< ModelUnitFilterInput | null > | null,
  uom?: ModelUOMInput | null,
  updatedAt?: ModelStringInput | null,
  width?: ModelFloatInput | null,
};

export type ModelUOMInput = {
  eq?: UOM | null,
  ne?: UOM | null,
};

export type ModelUserFilterInput = {
  address_1?: ModelStringInput | null,
  address_2?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  city?: ModelStringInput | null,
  cognito_username?: ModelStringInput | null,
  country?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  email_1?: ModelStringInput | null,
  email_2?: ModelStringInput | null,
  first_name?: ModelStringInput | null,
  id?: ModelIDInput | null,
  last_name?: ModelStringInput | null,
  not?: ModelUserFilterInput | null,
  or?: Array< ModelUserFilterInput | null > | null,
  phone_1?: ModelStringInput | null,
  phone_2?: ModelStringInput | null,
  postal_code?: ModelStringInput | null,
  state?: ModelUS_STATEInput | null,
  updatedAt?: ModelStringInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelAuthorizationConditionInput = {
  and?: Array< ModelAuthorizationConditionInput | null > | null,
  authority_id?: ModelStringInput | null,
  authority_type?: ModelAuthorizationAuthority_typeInput | null,
  claim?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  issuer_id?: ModelStringInput | null,
  not?: ModelAuthorizationConditionInput | null,
  or?: Array< ModelAuthorizationConditionInput | null > | null,
  resource_id?: ModelStringInput | null,
  resource_type?: ModelAuthorizationResource_typeInput | null,
  updatedAt?: ModelStringInput | null,
  user_id?: ModelIDInput | null,
};

export type CreateAuthorizationInput = {
  authority_id: string,
  authority_type?: AuthorizationAuthority_type | null,
  claim: string,
  id?: string | null,
  issuer_id: string,
  resource_id: string,
  resource_type?: AuthorizationResource_type | null,
  user_id: string,
};

export type ModelBuildingConditionInput = {
  and?: Array< ModelBuildingConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  location_id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  not?: ModelBuildingConditionInput | null,
  or?: Array< ModelBuildingConditionInput | null > | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateBuildingInput = {
  id?: string | null,
  location_id: string,
  name: string,
};

export type ModelCompanyConditionInput = {
  and?: Array< ModelCompanyConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  name?: ModelStringInput | null,
  not?: ModelCompanyConditionInput | null,
  or?: Array< ModelCompanyConditionInput | null > | null,
  owner_id?: ModelStringInput | null,
  physical_address_address_1?: ModelStringInput | null,
  physical_address_address_2?: ModelStringInput | null,
  physical_address_city?: ModelStringInput | null,
  physical_address_country?: ModelStringInput | null,
  physical_address_postal_code?: ModelStringInput | null,
  physical_address_state?: ModelUS_STATEInput | null,
  postal_address_address_1?: ModelStringInput | null,
  postal_address_address_2?: ModelStringInput | null,
  postal_address_city?: ModelStringInput | null,
  postal_address_country?: ModelStringInput | null,
  postal_address_postal_code?: ModelStringInput | null,
  postal_address_state?: ModelUS_STATEInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateCompanyInput = {
  id?: string | null,
  name: string,
  owner_id: string,
  physical_address_address_1?: string | null,
  physical_address_address_2?: string | null,
  physical_address_city?: string | null,
  physical_address_country?: string | null,
  physical_address_postal_code?: string | null,
  physical_address_state?: US_STATE | null,
  postal_address_address_1?: string | null,
  postal_address_address_2?: string | null,
  postal_address_city?: string | null,
  postal_address_country?: string | null,
  postal_address_postal_code?: string | null,
  postal_address_state?: US_STATE | null,
};

export type ModelLeaseConditionInput = {
  and?: Array< ModelLeaseConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  not?: ModelLeaseConditionInput | null,
  or?: Array< ModelLeaseConditionInput | null > | null,
  owner_id?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateLeaseInput = {
  id?: string | null,
  owner_id: string,
  price?: number | null,
};

export type ModelLeaseUnitConditionInput = {
  and?: Array< ModelLeaseUnitConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  lease_id?: ModelIDInput | null,
  not?: ModelLeaseUnitConditionInput | null,
  or?: Array< ModelLeaseUnitConditionInput | null > | null,
  unit_id?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateLeaseUnitInput = {
  id?: string | null,
  lease_id: string,
  unit_id: string,
};

export type ModelLocationConditionInput = {
  and?: Array< ModelLocationConditionInput | null > | null,
  company_id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  name?: ModelStringInput | null,
  not?: ModelLocationConditionInput | null,
  or?: Array< ModelLocationConditionInput | null > | null,
  physical_address_address_1?: ModelStringInput | null,
  physical_address_address_2?: ModelStringInput | null,
  physical_address_city?: ModelStringInput | null,
  physical_address_country?: ModelStringInput | null,
  physical_address_postal_code?: ModelStringInput | null,
  physical_address_state?: ModelUS_STATEInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateLocationInput = {
  company_id: string,
  id?: string | null,
  name: string,
  physical_address_address_1?: string | null,
  physical_address_address_2?: string | null,
  physical_address_city?: string | null,
  physical_address_country?: string | null,
  physical_address_postal_code?: string | null,
  physical_address_state?: US_STATE | null,
};

export type ModelTransactionConditionInput = {
  amount?: ModelFloatInput | null,
  and?: Array< ModelTransactionConditionInput | null > | null,
  company_id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  currency?: ModelCURRENCYInput | null,
  date?: ModelStringInput | null,
  memo?: ModelStringInput | null,
  not?: ModelTransactionConditionInput | null,
  or?: Array< ModelTransactionConditionInput | null > | null,
  owner_id?: ModelStringInput | null,
  reference?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateTransactionInput = {
  amount: number,
  company_id: string,
  currency?: CURRENCY | null,
  date: string,
  id?: string | null,
  memo?: string | null,
  owner_id: string,
  reference?: string | null,
};

export type ModelTransactionAttributionConditionInput = {
  amount?: ModelFloatInput | null,
  and?: Array< ModelTransactionAttributionConditionInput | null > | null,
  attribution_id?: ModelStringInput | null,
  attribution_type?: ModelATTRIBUTION_TYPEInput | null,
  createdAt?: ModelStringInput | null,
  description?: ModelStringInput | null,
  not?: ModelTransactionAttributionConditionInput | null,
  or?: Array< ModelTransactionAttributionConditionInput | null > | null,
  transaction_id?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateTransactionAttributionInput = {
  amount: number,
  attribution_id: string,
  attribution_type: ATTRIBUTION_TYPE,
  description?: string | null,
  id?: string | null,
  transaction_id: string,
};

export type ModelUnitConditionInput = {
  and?: Array< ModelUnitConditionInput | null > | null,
  basis_price?: ModelFloatInput | null,
  building_id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  currency?: ModelCURRENCYInput | null,
  depth?: ModelFloatInput | null,
  height?: ModelFloatInput | null,
  name?: ModelStringInput | null,
  not?: ModelUnitConditionInput | null,
  or?: Array< ModelUnitConditionInput | null > | null,
  uom?: ModelUOMInput | null,
  updatedAt?: ModelStringInput | null,
  width?: ModelFloatInput | null,
};

export type CreateUnitInput = {
  basis_price?: number | null,
  building_id: string,
  currency?: CURRENCY | null,
  depth?: number | null,
  height?: number | null,
  id?: string | null,
  name: string,
  uom?: UOM | null,
  width?: number | null,
};

export type ModelUserConditionInput = {
  address_1?: ModelStringInput | null,
  address_2?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  city?: ModelStringInput | null,
  country?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  email_1?: ModelStringInput | null,
  email_2?: ModelStringInput | null,
  first_name?: ModelStringInput | null,
  last_name?: ModelStringInput | null,
  not?: ModelUserConditionInput | null,
  or?: Array< ModelUserConditionInput | null > | null,
  phone_1?: ModelStringInput | null,
  phone_2?: ModelStringInput | null,
  postal_code?: ModelStringInput | null,
  state?: ModelUS_STATEInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateUserInput = {
  address_1?: string | null,
  address_2?: string | null,
  city?: string | null,
  cognito_username: string,
  country?: string | null,
  email_1?: string | null,
  email_2?: string | null,
  first_name?: string | null,
  last_name?: string | null,
  phone_1?: string | null,
  phone_2?: string | null,
  postal_code?: string | null,
  state?: US_STATE | null,
};

export type DeleteAuthorizationInput = {
  id: string,
};

export type DeleteBuildingInput = {
  id: string,
};

export type DeleteCompanyInput = {
  id: string,
};

export type DeleteLeaseInput = {
  id: string,
};

export type DeleteLeaseUnitInput = {
  id: string,
};

export type DeleteLocationInput = {
  id: string,
};

export type DeleteTransactionInput = {
  id: string,
};

export type DeleteTransactionAttributionInput = {
  id: string,
};

export type DeleteUnitInput = {
  id: string,
};

export type DeleteUserInput = {
  cognito_username: string,
};

export type UpdateAuthorizationInput = {
  authority_id?: string | null,
  authority_type?: AuthorizationAuthority_type | null,
  claim?: string | null,
  id: string,
  issuer_id?: string | null,
  resource_id?: string | null,
  resource_type?: AuthorizationResource_type | null,
  user_id?: string | null,
};

export type UpdateBuildingInput = {
  id: string,
  location_id?: string | null,
  name?: string | null,
};

export type UpdateCompanyInput = {
  id: string,
  name?: string | null,
  owner_id?: string | null,
  physical_address_address_1?: string | null,
  physical_address_address_2?: string | null,
  physical_address_city?: string | null,
  physical_address_country?: string | null,
  physical_address_postal_code?: string | null,
  physical_address_state?: US_STATE | null,
  postal_address_address_1?: string | null,
  postal_address_address_2?: string | null,
  postal_address_city?: string | null,
  postal_address_country?: string | null,
  postal_address_postal_code?: string | null,
  postal_address_state?: US_STATE | null,
};

export type UpdateLeaseInput = {
  id: string,
  owner_id?: string | null,
  price?: number | null,
};

export type UpdateLeaseUnitInput = {
  id: string,
  lease_id?: string | null,
  unit_id?: string | null,
};

export type UpdateLocationInput = {
  company_id?: string | null,
  id: string,
  name?: string | null,
  physical_address_address_1?: string | null,
  physical_address_address_2?: string | null,
  physical_address_city?: string | null,
  physical_address_country?: string | null,
  physical_address_postal_code?: string | null,
  physical_address_state?: US_STATE | null,
};

export type UpdateTransactionInput = {
  amount?: number | null,
  company_id?: string | null,
  currency?: CURRENCY | null,
  date?: string | null,
  id: string,
  memo?: string | null,
  owner_id?: string | null,
  reference?: string | null,
};

export type UpdateTransactionAttributionInput = {
  amount?: number | null,
  attribution_id?: string | null,
  attribution_type?: ATTRIBUTION_TYPE | null,
  description?: string | null,
  id: string,
  transaction_id?: string | null,
};

export type UpdateUnitInput = {
  basis_price?: number | null,
  building_id?: string | null,
  currency?: CURRENCY | null,
  depth?: number | null,
  height?: number | null,
  id: string,
  name?: string | null,
  uom?: UOM | null,
  width?: number | null,
};

export type UpdateUserInput = {
  address_1?: string | null,
  address_2?: string | null,
  city?: string | null,
  cognito_username: string,
  country?: string | null,
  email_1?: string | null,
  email_2?: string | null,
  first_name?: string | null,
  last_name?: string | null,
  phone_1?: string | null,
  phone_2?: string | null,
  postal_code?: string | null,
  state?: US_STATE | null,
};

export type ModelSubscriptionAuthorizationFilterInput = {
  and?: Array< ModelSubscriptionAuthorizationFilterInput | null > | null,
  authority_id?: ModelSubscriptionStringInput | null,
  authority_type?: ModelSubscriptionStringInput | null,
  claim?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  issuer_id?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionAuthorizationFilterInput | null > | null,
  resource_id?: ModelSubscriptionStringInput | null,
  resource_type?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  user_id?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionStringInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIDInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionBuildingFilterInput = {
  and?: Array< ModelSubscriptionBuildingFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  location_id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionBuildingFilterInput | null > | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionCompanyFilterInput = {
  and?: Array< ModelSubscriptionCompanyFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionCompanyFilterInput | null > | null,
  owner_id?: ModelSubscriptionStringInput | null,
  physical_address_address_1?: ModelSubscriptionStringInput | null,
  physical_address_address_2?: ModelSubscriptionStringInput | null,
  physical_address_city?: ModelSubscriptionStringInput | null,
  physical_address_country?: ModelSubscriptionStringInput | null,
  physical_address_postal_code?: ModelSubscriptionStringInput | null,
  physical_address_state?: ModelSubscriptionStringInput | null,
  postal_address_address_1?: ModelSubscriptionStringInput | null,
  postal_address_address_2?: ModelSubscriptionStringInput | null,
  postal_address_city?: ModelSubscriptionStringInput | null,
  postal_address_country?: ModelSubscriptionStringInput | null,
  postal_address_postal_code?: ModelSubscriptionStringInput | null,
  postal_address_state?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionLeaseFilterInput = {
  and?: Array< ModelSubscriptionLeaseFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionLeaseFilterInput | null > | null,
  owner_id?: ModelSubscriptionStringInput | null,
  price?: ModelSubscriptionFloatInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionFloatInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  in?: Array< number | null > | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionLeaseUnitFilterInput = {
  and?: Array< ModelSubscriptionLeaseUnitFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  lease_id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionLeaseUnitFilterInput | null > | null,
  unit_id?: ModelSubscriptionIDInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionLocationFilterInput = {
  and?: Array< ModelSubscriptionLocationFilterInput | null > | null,
  company_id?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionLocationFilterInput | null > | null,
  physical_address_address_1?: ModelSubscriptionStringInput | null,
  physical_address_address_2?: ModelSubscriptionStringInput | null,
  physical_address_city?: ModelSubscriptionStringInput | null,
  physical_address_country?: ModelSubscriptionStringInput | null,
  physical_address_postal_code?: ModelSubscriptionStringInput | null,
  physical_address_state?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionTransactionFilterInput = {
  amount?: ModelSubscriptionFloatInput | null,
  and?: Array< ModelSubscriptionTransactionFilterInput | null > | null,
  company_id?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  currency?: ModelSubscriptionStringInput | null,
  date?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  memo?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionTransactionFilterInput | null > | null,
  owner_id?: ModelSubscriptionStringInput | null,
  reference?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionTransactionAttributionFilterInput = {
  amount?: ModelSubscriptionFloatInput | null,
  and?: Array< ModelSubscriptionTransactionAttributionFilterInput | null > | null,
  attribution_id?: ModelSubscriptionStringInput | null,
  attribution_type?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionTransactionAttributionFilterInput | null > | null,
  transaction_id?: ModelSubscriptionIDInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionUnitFilterInput = {
  and?: Array< ModelSubscriptionUnitFilterInput | null > | null,
  basis_price?: ModelSubscriptionFloatInput | null,
  building_id?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  currency?: ModelSubscriptionStringInput | null,
  depth?: ModelSubscriptionFloatInput | null,
  height?: ModelSubscriptionFloatInput | null,
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionUnitFilterInput | null > | null,
  uom?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  width?: ModelSubscriptionFloatInput | null,
};

export type ModelSubscriptionUserFilterInput = {
  address_1?: ModelSubscriptionStringInput | null,
  address_2?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  city?: ModelSubscriptionStringInput | null,
  cognito_username?: ModelSubscriptionStringInput | null,
  country?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  email_1?: ModelSubscriptionStringInput | null,
  email_2?: ModelSubscriptionStringInput | null,
  first_name?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  last_name?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
  phone_1?: ModelSubscriptionStringInput | null,
  phone_2?: ModelSubscriptionStringInput | null,
  postal_code?: ModelSubscriptionStringInput | null,
  state?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type GetAuthorizationQueryVariables = {
  id: string,
};

export type GetAuthorizationQuery = {
  getAuthorization?:  {
    __typename: "Authorization",
    authority_id: string,
    authority_type?: AuthorizationAuthority_type | null,
    claim: string,
    createdAt: string,
    id: string,
    issuer_id: string,
    resource_id: string,
    resource_type?: AuthorizationResource_type | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      address_1?: string | null,
      address_2?: string | null,
      city?: string | null,
      cognito_username: string,
      country?: string | null,
      createdAt: string,
      email_1?: string | null,
      email_2?: string | null,
      first_name?: string | null,
      last_name?: string | null,
      phone_1?: string | null,
      phone_2?: string | null,
      postal_code?: string | null,
      state?: US_STATE | null,
      updatedAt: string,
    } | null,
    user_id: string,
  } | null,
};

export type GetBuildingQueryVariables = {
  id: string,
};

export type GetBuildingQuery = {
  getBuilding?:  {
    __typename: "Building",
    createdAt: string,
    id: string,
    location?:  {
      __typename: "Location",
      company_id: string,
      createdAt: string,
      id: string,
      name: string,
      physical_address_address_1?: string | null,
      physical_address_address_2?: string | null,
      physical_address_city?: string | null,
      physical_address_country?: string | null,
      physical_address_postal_code?: string | null,
      physical_address_state?: US_STATE | null,
      updatedAt: string,
    } | null,
    location_id: string,
    name: string,
    units?:  {
      __typename: "ModelUnitConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type GetCompanyQueryVariables = {
  id: string,
};

export type GetCompanyQuery = {
  getCompany?:  {
    __typename: "Company",
    createdAt: string,
    id: string,
    locations?:  {
      __typename: "ModelLocationConnection",
      nextToken?: string | null,
    } | null,
    name: string,
    owner?:  {
      __typename: "User",
      address_1?: string | null,
      address_2?: string | null,
      city?: string | null,
      cognito_username: string,
      country?: string | null,
      createdAt: string,
      email_1?: string | null,
      email_2?: string | null,
      first_name?: string | null,
      last_name?: string | null,
      phone_1?: string | null,
      phone_2?: string | null,
      postal_code?: string | null,
      state?: US_STATE | null,
      updatedAt: string,
    } | null,
    owner_id: string,
    physical_address_address_1?: string | null,
    physical_address_address_2?: string | null,
    physical_address_city?: string | null,
    physical_address_country?: string | null,
    physical_address_postal_code?: string | null,
    physical_address_state?: US_STATE | null,
    postal_address_address_1?: string | null,
    postal_address_address_2?: string | null,
    postal_address_city?: string | null,
    postal_address_country?: string | null,
    postal_address_postal_code?: string | null,
    postal_address_state?: US_STATE | null,
    transactions?:  {
      __typename: "ModelTransactionConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type GetLeaseQueryVariables = {
  id: string,
};

export type GetLeaseQuery = {
  getLease?:  {
    __typename: "Lease",
    createdAt: string,
    id: string,
    owner?:  {
      __typename: "User",
      address_1?: string | null,
      address_2?: string | null,
      city?: string | null,
      cognito_username: string,
      country?: string | null,
      createdAt: string,
      email_1?: string | null,
      email_2?: string | null,
      first_name?: string | null,
      last_name?: string | null,
      phone_1?: string | null,
      phone_2?: string | null,
      postal_code?: string | null,
      state?: US_STATE | null,
      updatedAt: string,
    } | null,
    owner_id: string,
    price?: number | null,
    units?:  {
      __typename: "ModelLeaseUnitConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type GetLeaseUnitQueryVariables = {
  id: string,
};

export type GetLeaseUnitQuery = {
  getLeaseUnit?:  {
    __typename: "LeaseUnit",
    createdAt: string,
    id: string,
    lease?:  {
      __typename: "Lease",
      createdAt: string,
      id: string,
      owner_id: string,
      price?: number | null,
      updatedAt: string,
    } | null,
    lease_id: string,
    unit?:  {
      __typename: "Unit",
      basis_price?: number | null,
      building_id: string,
      createdAt: string,
      currency?: CURRENCY | null,
      depth?: number | null,
      height?: number | null,
      id: string,
      name: string,
      uom?: UOM | null,
      updatedAt: string,
      width?: number | null,
    } | null,
    unit_id: string,
    updatedAt: string,
  } | null,
};

export type GetLocationQueryVariables = {
  id: string,
};

export type GetLocationQuery = {
  getLocation?:  {
    __typename: "Location",
    buildings?:  {
      __typename: "ModelBuildingConnection",
      nextToken?: string | null,
    } | null,
    company?:  {
      __typename: "Company",
      createdAt: string,
      id: string,
      name: string,
      owner_id: string,
      physical_address_address_1?: string | null,
      physical_address_address_2?: string | null,
      physical_address_city?: string | null,
      physical_address_country?: string | null,
      physical_address_postal_code?: string | null,
      physical_address_state?: US_STATE | null,
      postal_address_address_1?: string | null,
      postal_address_address_2?: string | null,
      postal_address_city?: string | null,
      postal_address_country?: string | null,
      postal_address_postal_code?: string | null,
      postal_address_state?: US_STATE | null,
      updatedAt: string,
    } | null,
    company_id: string,
    createdAt: string,
    id: string,
    name: string,
    physical_address_address_1?: string | null,
    physical_address_address_2?: string | null,
    physical_address_city?: string | null,
    physical_address_country?: string | null,
    physical_address_postal_code?: string | null,
    physical_address_state?: US_STATE | null,
    updatedAt: string,
  } | null,
};

export type GetTransactionQueryVariables = {
  id: string,
};

export type GetTransactionQuery = {
  getTransaction?:  {
    __typename: "Transaction",
    amount: number,
    company?:  {
      __typename: "Company",
      createdAt: string,
      id: string,
      name: string,
      owner_id: string,
      physical_address_address_1?: string | null,
      physical_address_address_2?: string | null,
      physical_address_city?: string | null,
      physical_address_country?: string | null,
      physical_address_postal_code?: string | null,
      physical_address_state?: US_STATE | null,
      postal_address_address_1?: string | null,
      postal_address_address_2?: string | null,
      postal_address_city?: string | null,
      postal_address_country?: string | null,
      postal_address_postal_code?: string | null,
      postal_address_state?: US_STATE | null,
      updatedAt: string,
    } | null,
    company_id: string,
    createdAt: string,
    currency?: CURRENCY | null,
    date: string,
    id: string,
    memo?: string | null,
    owner?:  {
      __typename: "User",
      address_1?: string | null,
      address_2?: string | null,
      city?: string | null,
      cognito_username: string,
      country?: string | null,
      createdAt: string,
      email_1?: string | null,
      email_2?: string | null,
      first_name?: string | null,
      last_name?: string | null,
      phone_1?: string | null,
      phone_2?: string | null,
      postal_code?: string | null,
      state?: US_STATE | null,
      updatedAt: string,
    } | null,
    owner_id: string,
    reference?: string | null,
    transaction_attributions?:  {
      __typename: "ModelTransactionAttributionConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type GetTransactionAttributionQueryVariables = {
  id: string,
};

export type GetTransactionAttributionQuery = {
  getTransactionAttribution?:  {
    __typename: "TransactionAttribution",
    amount: number,
    attribution_id: string,
    attribution_type: ATTRIBUTION_TYPE,
    createdAt: string,
    description?: string | null,
    id: string,
    transaction?:  {
      __typename: "Transaction",
      amount: number,
      company_id: string,
      createdAt: string,
      currency?: CURRENCY | null,
      date: string,
      id: string,
      memo?: string | null,
      owner_id: string,
      reference?: string | null,
      updatedAt: string,
    } | null,
    transaction_id: string,
    updatedAt: string,
  } | null,
};

export type GetUnitQueryVariables = {
  id: string,
};

export type GetUnitQuery = {
  getUnit?:  {
    __typename: "Unit",
    basis_price?: number | null,
    building?:  {
      __typename: "Building",
      createdAt: string,
      id: string,
      location_id: string,
      name: string,
      updatedAt: string,
    } | null,
    building_id: string,
    createdAt: string,
    currency?: CURRENCY | null,
    depth?: number | null,
    height?: number | null,
    id: string,
    leases?:  {
      __typename: "ModelLeaseUnitConnection",
      nextToken?: string | null,
    } | null,
    name: string,
    uom?: UOM | null,
    updatedAt: string,
    width?: number | null,
  } | null,
};

export type GetUserQueryVariables = {
  cognito_username: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    address_1?: string | null,
    address_2?: string | null,
    authorizations?:  {
      __typename: "ModelAuthorizationConnection",
      nextToken?: string | null,
    } | null,
    city?: string | null,
    cognito_username: string,
    companies?:  {
      __typename: "ModelCompanyConnection",
      nextToken?: string | null,
    } | null,
    country?: string | null,
    createdAt: string,
    email_1?: string | null,
    email_2?: string | null,
    first_name?: string | null,
    last_name?: string | null,
    leases?:  {
      __typename: "ModelLeaseConnection",
      nextToken?: string | null,
    } | null,
    phone_1?: string | null,
    phone_2?: string | null,
    postal_code?: string | null,
    state?: US_STATE | null,
    transactions?:  {
      __typename: "ModelTransactionConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type ListAuthorizationsQueryVariables = {
  filter?: ModelAuthorizationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAuthorizationsQuery = {
  listAuthorizations?:  {
    __typename: "ModelAuthorizationConnection",
    items:  Array< {
      __typename: "Authorization",
      authority_id: string,
      authority_type?: AuthorizationAuthority_type | null,
      claim: string,
      createdAt: string,
      id: string,
      issuer_id: string,
      resource_id: string,
      resource_type?: AuthorizationResource_type | null,
      updatedAt: string,
      user_id: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListBuildingsQueryVariables = {
  filter?: ModelBuildingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBuildingsQuery = {
  listBuildings?:  {
    __typename: "ModelBuildingConnection",
    items:  Array< {
      __typename: "Building",
      createdAt: string,
      id: string,
      location_id: string,
      name: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListCompaniesQueryVariables = {
  filter?: ModelCompanyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCompaniesQuery = {
  listCompanies?:  {
    __typename: "ModelCompanyConnection",
    items:  Array< {
      __typename: "Company",
      createdAt: string,
      id: string,
      name: string,
      owner_id: string,
      physical_address_address_1?: string | null,
      physical_address_address_2?: string | null,
      physical_address_city?: string | null,
      physical_address_country?: string | null,
      physical_address_postal_code?: string | null,
      physical_address_state?: US_STATE | null,
      postal_address_address_1?: string | null,
      postal_address_address_2?: string | null,
      postal_address_city?: string | null,
      postal_address_country?: string | null,
      postal_address_postal_code?: string | null,
      postal_address_state?: US_STATE | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListLeaseUnitsQueryVariables = {
  filter?: ModelLeaseUnitFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLeaseUnitsQuery = {
  listLeaseUnits?:  {
    __typename: "ModelLeaseUnitConnection",
    items:  Array< {
      __typename: "LeaseUnit",
      createdAt: string,
      id: string,
      lease_id: string,
      unit_id: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListLeasesQueryVariables = {
  filter?: ModelLeaseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLeasesQuery = {
  listLeases?:  {
    __typename: "ModelLeaseConnection",
    items:  Array< {
      __typename: "Lease",
      createdAt: string,
      id: string,
      owner_id: string,
      price?: number | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListLocationsQueryVariables = {
  filter?: ModelLocationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLocationsQuery = {
  listLocations?:  {
    __typename: "ModelLocationConnection",
    items:  Array< {
      __typename: "Location",
      company_id: string,
      createdAt: string,
      id: string,
      name: string,
      physical_address_address_1?: string | null,
      physical_address_address_2?: string | null,
      physical_address_city?: string | null,
      physical_address_country?: string | null,
      physical_address_postal_code?: string | null,
      physical_address_state?: US_STATE | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListTransactionAttributionsQueryVariables = {
  filter?: ModelTransactionAttributionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTransactionAttributionsQuery = {
  listTransactionAttributions?:  {
    __typename: "ModelTransactionAttributionConnection",
    items:  Array< {
      __typename: "TransactionAttribution",
      amount: number,
      attribution_id: string,
      attribution_type: ATTRIBUTION_TYPE,
      createdAt: string,
      description?: string | null,
      id: string,
      transaction_id: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListTransactionsQueryVariables = {
  filter?: ModelTransactionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTransactionsQuery = {
  listTransactions?:  {
    __typename: "ModelTransactionConnection",
    items:  Array< {
      __typename: "Transaction",
      amount: number,
      company_id: string,
      createdAt: string,
      currency?: CURRENCY | null,
      date: string,
      id: string,
      memo?: string | null,
      owner_id: string,
      reference?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListUnitsQueryVariables = {
  filter?: ModelUnitFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUnitsQuery = {
  listUnits?:  {
    __typename: "ModelUnitConnection",
    items:  Array< {
      __typename: "Unit",
      basis_price?: number | null,
      building_id: string,
      createdAt: string,
      currency?: CURRENCY | null,
      depth?: number | null,
      height?: number | null,
      id: string,
      name: string,
      uom?: UOM | null,
      updatedAt: string,
      width?: number | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  cognito_username?: string | null,
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      address_1?: string | null,
      address_2?: string | null,
      city?: string | null,
      cognito_username: string,
      country?: string | null,
      createdAt: string,
      email_1?: string | null,
      email_2?: string | null,
      first_name?: string | null,
      last_name?: string | null,
      phone_1?: string | null,
      phone_2?: string | null,
      postal_code?: string | null,
      state?: US_STATE | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CreateAuthorizationMutationVariables = {
  condition?: ModelAuthorizationConditionInput | null,
  input: CreateAuthorizationInput,
};

export type CreateAuthorizationMutation = {
  createAuthorization?:  {
    __typename: "Authorization",
    authority_id: string,
    authority_type?: AuthorizationAuthority_type | null,
    claim: string,
    createdAt: string,
    id: string,
    issuer_id: string,
    resource_id: string,
    resource_type?: AuthorizationResource_type | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      address_1?: string | null,
      address_2?: string | null,
      city?: string | null,
      cognito_username: string,
      country?: string | null,
      createdAt: string,
      email_1?: string | null,
      email_2?: string | null,
      first_name?: string | null,
      last_name?: string | null,
      phone_1?: string | null,
      phone_2?: string | null,
      postal_code?: string | null,
      state?: US_STATE | null,
      updatedAt: string,
    } | null,
    user_id: string,
  } | null,
};

export type CreateBuildingMutationVariables = {
  condition?: ModelBuildingConditionInput | null,
  input: CreateBuildingInput,
};

export type CreateBuildingMutation = {
  createBuilding?:  {
    __typename: "Building",
    createdAt: string,
    id: string,
    location?:  {
      __typename: "Location",
      company_id: string,
      createdAt: string,
      id: string,
      name: string,
      physical_address_address_1?: string | null,
      physical_address_address_2?: string | null,
      physical_address_city?: string | null,
      physical_address_country?: string | null,
      physical_address_postal_code?: string | null,
      physical_address_state?: US_STATE | null,
      updatedAt: string,
    } | null,
    location_id: string,
    name: string,
    units?:  {
      __typename: "ModelUnitConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type CreateCompanyMutationVariables = {
  condition?: ModelCompanyConditionInput | null,
  input: CreateCompanyInput,
};

export type CreateCompanyMutation = {
  createCompany?:  {
    __typename: "Company",
    createdAt: string,
    id: string,
    locations?:  {
      __typename: "ModelLocationConnection",
      nextToken?: string | null,
    } | null,
    name: string,
    owner?:  {
      __typename: "User",
      address_1?: string | null,
      address_2?: string | null,
      city?: string | null,
      cognito_username: string,
      country?: string | null,
      createdAt: string,
      email_1?: string | null,
      email_2?: string | null,
      first_name?: string | null,
      last_name?: string | null,
      phone_1?: string | null,
      phone_2?: string | null,
      postal_code?: string | null,
      state?: US_STATE | null,
      updatedAt: string,
    } | null,
    owner_id: string,
    physical_address_address_1?: string | null,
    physical_address_address_2?: string | null,
    physical_address_city?: string | null,
    physical_address_country?: string | null,
    physical_address_postal_code?: string | null,
    physical_address_state?: US_STATE | null,
    postal_address_address_1?: string | null,
    postal_address_address_2?: string | null,
    postal_address_city?: string | null,
    postal_address_country?: string | null,
    postal_address_postal_code?: string | null,
    postal_address_state?: US_STATE | null,
    transactions?:  {
      __typename: "ModelTransactionConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type CreateLeaseMutationVariables = {
  condition?: ModelLeaseConditionInput | null,
  input: CreateLeaseInput,
};

export type CreateLeaseMutation = {
  createLease?:  {
    __typename: "Lease",
    createdAt: string,
    id: string,
    owner?:  {
      __typename: "User",
      address_1?: string | null,
      address_2?: string | null,
      city?: string | null,
      cognito_username: string,
      country?: string | null,
      createdAt: string,
      email_1?: string | null,
      email_2?: string | null,
      first_name?: string | null,
      last_name?: string | null,
      phone_1?: string | null,
      phone_2?: string | null,
      postal_code?: string | null,
      state?: US_STATE | null,
      updatedAt: string,
    } | null,
    owner_id: string,
    price?: number | null,
    units?:  {
      __typename: "ModelLeaseUnitConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type CreateLeaseUnitMutationVariables = {
  condition?: ModelLeaseUnitConditionInput | null,
  input: CreateLeaseUnitInput,
};

export type CreateLeaseUnitMutation = {
  createLeaseUnit?:  {
    __typename: "LeaseUnit",
    createdAt: string,
    id: string,
    lease?:  {
      __typename: "Lease",
      createdAt: string,
      id: string,
      owner_id: string,
      price?: number | null,
      updatedAt: string,
    } | null,
    lease_id: string,
    unit?:  {
      __typename: "Unit",
      basis_price?: number | null,
      building_id: string,
      createdAt: string,
      currency?: CURRENCY | null,
      depth?: number | null,
      height?: number | null,
      id: string,
      name: string,
      uom?: UOM | null,
      updatedAt: string,
      width?: number | null,
    } | null,
    unit_id: string,
    updatedAt: string,
  } | null,
};

export type CreateLocationMutationVariables = {
  condition?: ModelLocationConditionInput | null,
  input: CreateLocationInput,
};

export type CreateLocationMutation = {
  createLocation?:  {
    __typename: "Location",
    buildings?:  {
      __typename: "ModelBuildingConnection",
      nextToken?: string | null,
    } | null,
    company?:  {
      __typename: "Company",
      createdAt: string,
      id: string,
      name: string,
      owner_id: string,
      physical_address_address_1?: string | null,
      physical_address_address_2?: string | null,
      physical_address_city?: string | null,
      physical_address_country?: string | null,
      physical_address_postal_code?: string | null,
      physical_address_state?: US_STATE | null,
      postal_address_address_1?: string | null,
      postal_address_address_2?: string | null,
      postal_address_city?: string | null,
      postal_address_country?: string | null,
      postal_address_postal_code?: string | null,
      postal_address_state?: US_STATE | null,
      updatedAt: string,
    } | null,
    company_id: string,
    createdAt: string,
    id: string,
    name: string,
    physical_address_address_1?: string | null,
    physical_address_address_2?: string | null,
    physical_address_city?: string | null,
    physical_address_country?: string | null,
    physical_address_postal_code?: string | null,
    physical_address_state?: US_STATE | null,
    updatedAt: string,
  } | null,
};

export type CreateTransactionMutationVariables = {
  condition?: ModelTransactionConditionInput | null,
  input: CreateTransactionInput,
};

export type CreateTransactionMutation = {
  createTransaction?:  {
    __typename: "Transaction",
    amount: number,
    company?:  {
      __typename: "Company",
      createdAt: string,
      id: string,
      name: string,
      owner_id: string,
      physical_address_address_1?: string | null,
      physical_address_address_2?: string | null,
      physical_address_city?: string | null,
      physical_address_country?: string | null,
      physical_address_postal_code?: string | null,
      physical_address_state?: US_STATE | null,
      postal_address_address_1?: string | null,
      postal_address_address_2?: string | null,
      postal_address_city?: string | null,
      postal_address_country?: string | null,
      postal_address_postal_code?: string | null,
      postal_address_state?: US_STATE | null,
      updatedAt: string,
    } | null,
    company_id: string,
    createdAt: string,
    currency?: CURRENCY | null,
    date: string,
    id: string,
    memo?: string | null,
    owner?:  {
      __typename: "User",
      address_1?: string | null,
      address_2?: string | null,
      city?: string | null,
      cognito_username: string,
      country?: string | null,
      createdAt: string,
      email_1?: string | null,
      email_2?: string | null,
      first_name?: string | null,
      last_name?: string | null,
      phone_1?: string | null,
      phone_2?: string | null,
      postal_code?: string | null,
      state?: US_STATE | null,
      updatedAt: string,
    } | null,
    owner_id: string,
    reference?: string | null,
    transaction_attributions?:  {
      __typename: "ModelTransactionAttributionConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type CreateTransactionAttributionMutationVariables = {
  condition?: ModelTransactionAttributionConditionInput | null,
  input: CreateTransactionAttributionInput,
};

export type CreateTransactionAttributionMutation = {
  createTransactionAttribution?:  {
    __typename: "TransactionAttribution",
    amount: number,
    attribution_id: string,
    attribution_type: ATTRIBUTION_TYPE,
    createdAt: string,
    description?: string | null,
    id: string,
    transaction?:  {
      __typename: "Transaction",
      amount: number,
      company_id: string,
      createdAt: string,
      currency?: CURRENCY | null,
      date: string,
      id: string,
      memo?: string | null,
      owner_id: string,
      reference?: string | null,
      updatedAt: string,
    } | null,
    transaction_id: string,
    updatedAt: string,
  } | null,
};

export type CreateUnitMutationVariables = {
  condition?: ModelUnitConditionInput | null,
  input: CreateUnitInput,
};

export type CreateUnitMutation = {
  createUnit?:  {
    __typename: "Unit",
    basis_price?: number | null,
    building?:  {
      __typename: "Building",
      createdAt: string,
      id: string,
      location_id: string,
      name: string,
      updatedAt: string,
    } | null,
    building_id: string,
    createdAt: string,
    currency?: CURRENCY | null,
    depth?: number | null,
    height?: number | null,
    id: string,
    leases?:  {
      __typename: "ModelLeaseUnitConnection",
      nextToken?: string | null,
    } | null,
    name: string,
    uom?: UOM | null,
    updatedAt: string,
    width?: number | null,
  } | null,
};

export type CreateUserMutationVariables = {
  condition?: ModelUserConditionInput | null,
  input: CreateUserInput,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    address_1?: string | null,
    address_2?: string | null,
    authorizations?:  {
      __typename: "ModelAuthorizationConnection",
      nextToken?: string | null,
    } | null,
    city?: string | null,
    cognito_username: string,
    companies?:  {
      __typename: "ModelCompanyConnection",
      nextToken?: string | null,
    } | null,
    country?: string | null,
    createdAt: string,
    email_1?: string | null,
    email_2?: string | null,
    first_name?: string | null,
    last_name?: string | null,
    leases?:  {
      __typename: "ModelLeaseConnection",
      nextToken?: string | null,
    } | null,
    phone_1?: string | null,
    phone_2?: string | null,
    postal_code?: string | null,
    state?: US_STATE | null,
    transactions?:  {
      __typename: "ModelTransactionConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type DeleteAuthorizationMutationVariables = {
  condition?: ModelAuthorizationConditionInput | null,
  input: DeleteAuthorizationInput,
};

export type DeleteAuthorizationMutation = {
  deleteAuthorization?:  {
    __typename: "Authorization",
    authority_id: string,
    authority_type?: AuthorizationAuthority_type | null,
    claim: string,
    createdAt: string,
    id: string,
    issuer_id: string,
    resource_id: string,
    resource_type?: AuthorizationResource_type | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      address_1?: string | null,
      address_2?: string | null,
      city?: string | null,
      cognito_username: string,
      country?: string | null,
      createdAt: string,
      email_1?: string | null,
      email_2?: string | null,
      first_name?: string | null,
      last_name?: string | null,
      phone_1?: string | null,
      phone_2?: string | null,
      postal_code?: string | null,
      state?: US_STATE | null,
      updatedAt: string,
    } | null,
    user_id: string,
  } | null,
};

export type DeleteBuildingMutationVariables = {
  condition?: ModelBuildingConditionInput | null,
  input: DeleteBuildingInput,
};

export type DeleteBuildingMutation = {
  deleteBuilding?:  {
    __typename: "Building",
    createdAt: string,
    id: string,
    location?:  {
      __typename: "Location",
      company_id: string,
      createdAt: string,
      id: string,
      name: string,
      physical_address_address_1?: string | null,
      physical_address_address_2?: string | null,
      physical_address_city?: string | null,
      physical_address_country?: string | null,
      physical_address_postal_code?: string | null,
      physical_address_state?: US_STATE | null,
      updatedAt: string,
    } | null,
    location_id: string,
    name: string,
    units?:  {
      __typename: "ModelUnitConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type DeleteCompanyMutationVariables = {
  condition?: ModelCompanyConditionInput | null,
  input: DeleteCompanyInput,
};

export type DeleteCompanyMutation = {
  deleteCompany?:  {
    __typename: "Company",
    createdAt: string,
    id: string,
    locations?:  {
      __typename: "ModelLocationConnection",
      nextToken?: string | null,
    } | null,
    name: string,
    owner?:  {
      __typename: "User",
      address_1?: string | null,
      address_2?: string | null,
      city?: string | null,
      cognito_username: string,
      country?: string | null,
      createdAt: string,
      email_1?: string | null,
      email_2?: string | null,
      first_name?: string | null,
      last_name?: string | null,
      phone_1?: string | null,
      phone_2?: string | null,
      postal_code?: string | null,
      state?: US_STATE | null,
      updatedAt: string,
    } | null,
    owner_id: string,
    physical_address_address_1?: string | null,
    physical_address_address_2?: string | null,
    physical_address_city?: string | null,
    physical_address_country?: string | null,
    physical_address_postal_code?: string | null,
    physical_address_state?: US_STATE | null,
    postal_address_address_1?: string | null,
    postal_address_address_2?: string | null,
    postal_address_city?: string | null,
    postal_address_country?: string | null,
    postal_address_postal_code?: string | null,
    postal_address_state?: US_STATE | null,
    transactions?:  {
      __typename: "ModelTransactionConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type DeleteLeaseMutationVariables = {
  condition?: ModelLeaseConditionInput | null,
  input: DeleteLeaseInput,
};

export type DeleteLeaseMutation = {
  deleteLease?:  {
    __typename: "Lease",
    createdAt: string,
    id: string,
    owner?:  {
      __typename: "User",
      address_1?: string | null,
      address_2?: string | null,
      city?: string | null,
      cognito_username: string,
      country?: string | null,
      createdAt: string,
      email_1?: string | null,
      email_2?: string | null,
      first_name?: string | null,
      last_name?: string | null,
      phone_1?: string | null,
      phone_2?: string | null,
      postal_code?: string | null,
      state?: US_STATE | null,
      updatedAt: string,
    } | null,
    owner_id: string,
    price?: number | null,
    units?:  {
      __typename: "ModelLeaseUnitConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type DeleteLeaseUnitMutationVariables = {
  condition?: ModelLeaseUnitConditionInput | null,
  input: DeleteLeaseUnitInput,
};

export type DeleteLeaseUnitMutation = {
  deleteLeaseUnit?:  {
    __typename: "LeaseUnit",
    createdAt: string,
    id: string,
    lease?:  {
      __typename: "Lease",
      createdAt: string,
      id: string,
      owner_id: string,
      price?: number | null,
      updatedAt: string,
    } | null,
    lease_id: string,
    unit?:  {
      __typename: "Unit",
      basis_price?: number | null,
      building_id: string,
      createdAt: string,
      currency?: CURRENCY | null,
      depth?: number | null,
      height?: number | null,
      id: string,
      name: string,
      uom?: UOM | null,
      updatedAt: string,
      width?: number | null,
    } | null,
    unit_id: string,
    updatedAt: string,
  } | null,
};

export type DeleteLocationMutationVariables = {
  condition?: ModelLocationConditionInput | null,
  input: DeleteLocationInput,
};

export type DeleteLocationMutation = {
  deleteLocation?:  {
    __typename: "Location",
    buildings?:  {
      __typename: "ModelBuildingConnection",
      nextToken?: string | null,
    } | null,
    company?:  {
      __typename: "Company",
      createdAt: string,
      id: string,
      name: string,
      owner_id: string,
      physical_address_address_1?: string | null,
      physical_address_address_2?: string | null,
      physical_address_city?: string | null,
      physical_address_country?: string | null,
      physical_address_postal_code?: string | null,
      physical_address_state?: US_STATE | null,
      postal_address_address_1?: string | null,
      postal_address_address_2?: string | null,
      postal_address_city?: string | null,
      postal_address_country?: string | null,
      postal_address_postal_code?: string | null,
      postal_address_state?: US_STATE | null,
      updatedAt: string,
    } | null,
    company_id: string,
    createdAt: string,
    id: string,
    name: string,
    physical_address_address_1?: string | null,
    physical_address_address_2?: string | null,
    physical_address_city?: string | null,
    physical_address_country?: string | null,
    physical_address_postal_code?: string | null,
    physical_address_state?: US_STATE | null,
    updatedAt: string,
  } | null,
};

export type DeleteTransactionMutationVariables = {
  condition?: ModelTransactionConditionInput | null,
  input: DeleteTransactionInput,
};

export type DeleteTransactionMutation = {
  deleteTransaction?:  {
    __typename: "Transaction",
    amount: number,
    company?:  {
      __typename: "Company",
      createdAt: string,
      id: string,
      name: string,
      owner_id: string,
      physical_address_address_1?: string | null,
      physical_address_address_2?: string | null,
      physical_address_city?: string | null,
      physical_address_country?: string | null,
      physical_address_postal_code?: string | null,
      physical_address_state?: US_STATE | null,
      postal_address_address_1?: string | null,
      postal_address_address_2?: string | null,
      postal_address_city?: string | null,
      postal_address_country?: string | null,
      postal_address_postal_code?: string | null,
      postal_address_state?: US_STATE | null,
      updatedAt: string,
    } | null,
    company_id: string,
    createdAt: string,
    currency?: CURRENCY | null,
    date: string,
    id: string,
    memo?: string | null,
    owner?:  {
      __typename: "User",
      address_1?: string | null,
      address_2?: string | null,
      city?: string | null,
      cognito_username: string,
      country?: string | null,
      createdAt: string,
      email_1?: string | null,
      email_2?: string | null,
      first_name?: string | null,
      last_name?: string | null,
      phone_1?: string | null,
      phone_2?: string | null,
      postal_code?: string | null,
      state?: US_STATE | null,
      updatedAt: string,
    } | null,
    owner_id: string,
    reference?: string | null,
    transaction_attributions?:  {
      __typename: "ModelTransactionAttributionConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type DeleteTransactionAttributionMutationVariables = {
  condition?: ModelTransactionAttributionConditionInput | null,
  input: DeleteTransactionAttributionInput,
};

export type DeleteTransactionAttributionMutation = {
  deleteTransactionAttribution?:  {
    __typename: "TransactionAttribution",
    amount: number,
    attribution_id: string,
    attribution_type: ATTRIBUTION_TYPE,
    createdAt: string,
    description?: string | null,
    id: string,
    transaction?:  {
      __typename: "Transaction",
      amount: number,
      company_id: string,
      createdAt: string,
      currency?: CURRENCY | null,
      date: string,
      id: string,
      memo?: string | null,
      owner_id: string,
      reference?: string | null,
      updatedAt: string,
    } | null,
    transaction_id: string,
    updatedAt: string,
  } | null,
};

export type DeleteUnitMutationVariables = {
  condition?: ModelUnitConditionInput | null,
  input: DeleteUnitInput,
};

export type DeleteUnitMutation = {
  deleteUnit?:  {
    __typename: "Unit",
    basis_price?: number | null,
    building?:  {
      __typename: "Building",
      createdAt: string,
      id: string,
      location_id: string,
      name: string,
      updatedAt: string,
    } | null,
    building_id: string,
    createdAt: string,
    currency?: CURRENCY | null,
    depth?: number | null,
    height?: number | null,
    id: string,
    leases?:  {
      __typename: "ModelLeaseUnitConnection",
      nextToken?: string | null,
    } | null,
    name: string,
    uom?: UOM | null,
    updatedAt: string,
    width?: number | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  condition?: ModelUserConditionInput | null,
  input: DeleteUserInput,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    address_1?: string | null,
    address_2?: string | null,
    authorizations?:  {
      __typename: "ModelAuthorizationConnection",
      nextToken?: string | null,
    } | null,
    city?: string | null,
    cognito_username: string,
    companies?:  {
      __typename: "ModelCompanyConnection",
      nextToken?: string | null,
    } | null,
    country?: string | null,
    createdAt: string,
    email_1?: string | null,
    email_2?: string | null,
    first_name?: string | null,
    last_name?: string | null,
    leases?:  {
      __typename: "ModelLeaseConnection",
      nextToken?: string | null,
    } | null,
    phone_1?: string | null,
    phone_2?: string | null,
    postal_code?: string | null,
    state?: US_STATE | null,
    transactions?:  {
      __typename: "ModelTransactionConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type UpdateAuthorizationMutationVariables = {
  condition?: ModelAuthorizationConditionInput | null,
  input: UpdateAuthorizationInput,
};

export type UpdateAuthorizationMutation = {
  updateAuthorization?:  {
    __typename: "Authorization",
    authority_id: string,
    authority_type?: AuthorizationAuthority_type | null,
    claim: string,
    createdAt: string,
    id: string,
    issuer_id: string,
    resource_id: string,
    resource_type?: AuthorizationResource_type | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      address_1?: string | null,
      address_2?: string | null,
      city?: string | null,
      cognito_username: string,
      country?: string | null,
      createdAt: string,
      email_1?: string | null,
      email_2?: string | null,
      first_name?: string | null,
      last_name?: string | null,
      phone_1?: string | null,
      phone_2?: string | null,
      postal_code?: string | null,
      state?: US_STATE | null,
      updatedAt: string,
    } | null,
    user_id: string,
  } | null,
};

export type UpdateBuildingMutationVariables = {
  condition?: ModelBuildingConditionInput | null,
  input: UpdateBuildingInput,
};

export type UpdateBuildingMutation = {
  updateBuilding?:  {
    __typename: "Building",
    createdAt: string,
    id: string,
    location?:  {
      __typename: "Location",
      company_id: string,
      createdAt: string,
      id: string,
      name: string,
      physical_address_address_1?: string | null,
      physical_address_address_2?: string | null,
      physical_address_city?: string | null,
      physical_address_country?: string | null,
      physical_address_postal_code?: string | null,
      physical_address_state?: US_STATE | null,
      updatedAt: string,
    } | null,
    location_id: string,
    name: string,
    units?:  {
      __typename: "ModelUnitConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type UpdateCompanyMutationVariables = {
  condition?: ModelCompanyConditionInput | null,
  input: UpdateCompanyInput,
};

export type UpdateCompanyMutation = {
  updateCompany?:  {
    __typename: "Company",
    createdAt: string,
    id: string,
    locations?:  {
      __typename: "ModelLocationConnection",
      nextToken?: string | null,
    } | null,
    name: string,
    owner?:  {
      __typename: "User",
      address_1?: string | null,
      address_2?: string | null,
      city?: string | null,
      cognito_username: string,
      country?: string | null,
      createdAt: string,
      email_1?: string | null,
      email_2?: string | null,
      first_name?: string | null,
      last_name?: string | null,
      phone_1?: string | null,
      phone_2?: string | null,
      postal_code?: string | null,
      state?: US_STATE | null,
      updatedAt: string,
    } | null,
    owner_id: string,
    physical_address_address_1?: string | null,
    physical_address_address_2?: string | null,
    physical_address_city?: string | null,
    physical_address_country?: string | null,
    physical_address_postal_code?: string | null,
    physical_address_state?: US_STATE | null,
    postal_address_address_1?: string | null,
    postal_address_address_2?: string | null,
    postal_address_city?: string | null,
    postal_address_country?: string | null,
    postal_address_postal_code?: string | null,
    postal_address_state?: US_STATE | null,
    transactions?:  {
      __typename: "ModelTransactionConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type UpdateLeaseMutationVariables = {
  condition?: ModelLeaseConditionInput | null,
  input: UpdateLeaseInput,
};

export type UpdateLeaseMutation = {
  updateLease?:  {
    __typename: "Lease",
    createdAt: string,
    id: string,
    owner?:  {
      __typename: "User",
      address_1?: string | null,
      address_2?: string | null,
      city?: string | null,
      cognito_username: string,
      country?: string | null,
      createdAt: string,
      email_1?: string | null,
      email_2?: string | null,
      first_name?: string | null,
      last_name?: string | null,
      phone_1?: string | null,
      phone_2?: string | null,
      postal_code?: string | null,
      state?: US_STATE | null,
      updatedAt: string,
    } | null,
    owner_id: string,
    price?: number | null,
    units?:  {
      __typename: "ModelLeaseUnitConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type UpdateLeaseUnitMutationVariables = {
  condition?: ModelLeaseUnitConditionInput | null,
  input: UpdateLeaseUnitInput,
};

export type UpdateLeaseUnitMutation = {
  updateLeaseUnit?:  {
    __typename: "LeaseUnit",
    createdAt: string,
    id: string,
    lease?:  {
      __typename: "Lease",
      createdAt: string,
      id: string,
      owner_id: string,
      price?: number | null,
      updatedAt: string,
    } | null,
    lease_id: string,
    unit?:  {
      __typename: "Unit",
      basis_price?: number | null,
      building_id: string,
      createdAt: string,
      currency?: CURRENCY | null,
      depth?: number | null,
      height?: number | null,
      id: string,
      name: string,
      uom?: UOM | null,
      updatedAt: string,
      width?: number | null,
    } | null,
    unit_id: string,
    updatedAt: string,
  } | null,
};

export type UpdateLocationMutationVariables = {
  condition?: ModelLocationConditionInput | null,
  input: UpdateLocationInput,
};

export type UpdateLocationMutation = {
  updateLocation?:  {
    __typename: "Location",
    buildings?:  {
      __typename: "ModelBuildingConnection",
      nextToken?: string | null,
    } | null,
    company?:  {
      __typename: "Company",
      createdAt: string,
      id: string,
      name: string,
      owner_id: string,
      physical_address_address_1?: string | null,
      physical_address_address_2?: string | null,
      physical_address_city?: string | null,
      physical_address_country?: string | null,
      physical_address_postal_code?: string | null,
      physical_address_state?: US_STATE | null,
      postal_address_address_1?: string | null,
      postal_address_address_2?: string | null,
      postal_address_city?: string | null,
      postal_address_country?: string | null,
      postal_address_postal_code?: string | null,
      postal_address_state?: US_STATE | null,
      updatedAt: string,
    } | null,
    company_id: string,
    createdAt: string,
    id: string,
    name: string,
    physical_address_address_1?: string | null,
    physical_address_address_2?: string | null,
    physical_address_city?: string | null,
    physical_address_country?: string | null,
    physical_address_postal_code?: string | null,
    physical_address_state?: US_STATE | null,
    updatedAt: string,
  } | null,
};

export type UpdateTransactionMutationVariables = {
  condition?: ModelTransactionConditionInput | null,
  input: UpdateTransactionInput,
};

export type UpdateTransactionMutation = {
  updateTransaction?:  {
    __typename: "Transaction",
    amount: number,
    company?:  {
      __typename: "Company",
      createdAt: string,
      id: string,
      name: string,
      owner_id: string,
      physical_address_address_1?: string | null,
      physical_address_address_2?: string | null,
      physical_address_city?: string | null,
      physical_address_country?: string | null,
      physical_address_postal_code?: string | null,
      physical_address_state?: US_STATE | null,
      postal_address_address_1?: string | null,
      postal_address_address_2?: string | null,
      postal_address_city?: string | null,
      postal_address_country?: string | null,
      postal_address_postal_code?: string | null,
      postal_address_state?: US_STATE | null,
      updatedAt: string,
    } | null,
    company_id: string,
    createdAt: string,
    currency?: CURRENCY | null,
    date: string,
    id: string,
    memo?: string | null,
    owner?:  {
      __typename: "User",
      address_1?: string | null,
      address_2?: string | null,
      city?: string | null,
      cognito_username: string,
      country?: string | null,
      createdAt: string,
      email_1?: string | null,
      email_2?: string | null,
      first_name?: string | null,
      last_name?: string | null,
      phone_1?: string | null,
      phone_2?: string | null,
      postal_code?: string | null,
      state?: US_STATE | null,
      updatedAt: string,
    } | null,
    owner_id: string,
    reference?: string | null,
    transaction_attributions?:  {
      __typename: "ModelTransactionAttributionConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type UpdateTransactionAttributionMutationVariables = {
  condition?: ModelTransactionAttributionConditionInput | null,
  input: UpdateTransactionAttributionInput,
};

export type UpdateTransactionAttributionMutation = {
  updateTransactionAttribution?:  {
    __typename: "TransactionAttribution",
    amount: number,
    attribution_id: string,
    attribution_type: ATTRIBUTION_TYPE,
    createdAt: string,
    description?: string | null,
    id: string,
    transaction?:  {
      __typename: "Transaction",
      amount: number,
      company_id: string,
      createdAt: string,
      currency?: CURRENCY | null,
      date: string,
      id: string,
      memo?: string | null,
      owner_id: string,
      reference?: string | null,
      updatedAt: string,
    } | null,
    transaction_id: string,
    updatedAt: string,
  } | null,
};

export type UpdateUnitMutationVariables = {
  condition?: ModelUnitConditionInput | null,
  input: UpdateUnitInput,
};

export type UpdateUnitMutation = {
  updateUnit?:  {
    __typename: "Unit",
    basis_price?: number | null,
    building?:  {
      __typename: "Building",
      createdAt: string,
      id: string,
      location_id: string,
      name: string,
      updatedAt: string,
    } | null,
    building_id: string,
    createdAt: string,
    currency?: CURRENCY | null,
    depth?: number | null,
    height?: number | null,
    id: string,
    leases?:  {
      __typename: "ModelLeaseUnitConnection",
      nextToken?: string | null,
    } | null,
    name: string,
    uom?: UOM | null,
    updatedAt: string,
    width?: number | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  condition?: ModelUserConditionInput | null,
  input: UpdateUserInput,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    address_1?: string | null,
    address_2?: string | null,
    authorizations?:  {
      __typename: "ModelAuthorizationConnection",
      nextToken?: string | null,
    } | null,
    city?: string | null,
    cognito_username: string,
    companies?:  {
      __typename: "ModelCompanyConnection",
      nextToken?: string | null,
    } | null,
    country?: string | null,
    createdAt: string,
    email_1?: string | null,
    email_2?: string | null,
    first_name?: string | null,
    last_name?: string | null,
    leases?:  {
      __typename: "ModelLeaseConnection",
      nextToken?: string | null,
    } | null,
    phone_1?: string | null,
    phone_2?: string | null,
    postal_code?: string | null,
    state?: US_STATE | null,
    transactions?:  {
      __typename: "ModelTransactionConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnCreateAuthorizationSubscriptionVariables = {
  filter?: ModelSubscriptionAuthorizationFilterInput | null,
};

export type OnCreateAuthorizationSubscription = {
  onCreateAuthorization?:  {
    __typename: "Authorization",
    authority_id: string,
    authority_type?: AuthorizationAuthority_type | null,
    claim: string,
    createdAt: string,
    id: string,
    issuer_id: string,
    resource_id: string,
    resource_type?: AuthorizationResource_type | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      address_1?: string | null,
      address_2?: string | null,
      city?: string | null,
      cognito_username: string,
      country?: string | null,
      createdAt: string,
      email_1?: string | null,
      email_2?: string | null,
      first_name?: string | null,
      last_name?: string | null,
      phone_1?: string | null,
      phone_2?: string | null,
      postal_code?: string | null,
      state?: US_STATE | null,
      updatedAt: string,
    } | null,
    user_id: string,
  } | null,
};

export type OnCreateBuildingSubscriptionVariables = {
  filter?: ModelSubscriptionBuildingFilterInput | null,
};

export type OnCreateBuildingSubscription = {
  onCreateBuilding?:  {
    __typename: "Building",
    createdAt: string,
    id: string,
    location?:  {
      __typename: "Location",
      company_id: string,
      createdAt: string,
      id: string,
      name: string,
      physical_address_address_1?: string | null,
      physical_address_address_2?: string | null,
      physical_address_city?: string | null,
      physical_address_country?: string | null,
      physical_address_postal_code?: string | null,
      physical_address_state?: US_STATE | null,
      updatedAt: string,
    } | null,
    location_id: string,
    name: string,
    units?:  {
      __typename: "ModelUnitConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnCreateCompanySubscriptionVariables = {
  filter?: ModelSubscriptionCompanyFilterInput | null,
};

export type OnCreateCompanySubscription = {
  onCreateCompany?:  {
    __typename: "Company",
    createdAt: string,
    id: string,
    locations?:  {
      __typename: "ModelLocationConnection",
      nextToken?: string | null,
    } | null,
    name: string,
    owner?:  {
      __typename: "User",
      address_1?: string | null,
      address_2?: string | null,
      city?: string | null,
      cognito_username: string,
      country?: string | null,
      createdAt: string,
      email_1?: string | null,
      email_2?: string | null,
      first_name?: string | null,
      last_name?: string | null,
      phone_1?: string | null,
      phone_2?: string | null,
      postal_code?: string | null,
      state?: US_STATE | null,
      updatedAt: string,
    } | null,
    owner_id: string,
    physical_address_address_1?: string | null,
    physical_address_address_2?: string | null,
    physical_address_city?: string | null,
    physical_address_country?: string | null,
    physical_address_postal_code?: string | null,
    physical_address_state?: US_STATE | null,
    postal_address_address_1?: string | null,
    postal_address_address_2?: string | null,
    postal_address_city?: string | null,
    postal_address_country?: string | null,
    postal_address_postal_code?: string | null,
    postal_address_state?: US_STATE | null,
    transactions?:  {
      __typename: "ModelTransactionConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnCreateLeaseSubscriptionVariables = {
  filter?: ModelSubscriptionLeaseFilterInput | null,
};

export type OnCreateLeaseSubscription = {
  onCreateLease?:  {
    __typename: "Lease",
    createdAt: string,
    id: string,
    owner?:  {
      __typename: "User",
      address_1?: string | null,
      address_2?: string | null,
      city?: string | null,
      cognito_username: string,
      country?: string | null,
      createdAt: string,
      email_1?: string | null,
      email_2?: string | null,
      first_name?: string | null,
      last_name?: string | null,
      phone_1?: string | null,
      phone_2?: string | null,
      postal_code?: string | null,
      state?: US_STATE | null,
      updatedAt: string,
    } | null,
    owner_id: string,
    price?: number | null,
    units?:  {
      __typename: "ModelLeaseUnitConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnCreateLeaseUnitSubscriptionVariables = {
  filter?: ModelSubscriptionLeaseUnitFilterInput | null,
};

export type OnCreateLeaseUnitSubscription = {
  onCreateLeaseUnit?:  {
    __typename: "LeaseUnit",
    createdAt: string,
    id: string,
    lease?:  {
      __typename: "Lease",
      createdAt: string,
      id: string,
      owner_id: string,
      price?: number | null,
      updatedAt: string,
    } | null,
    lease_id: string,
    unit?:  {
      __typename: "Unit",
      basis_price?: number | null,
      building_id: string,
      createdAt: string,
      currency?: CURRENCY | null,
      depth?: number | null,
      height?: number | null,
      id: string,
      name: string,
      uom?: UOM | null,
      updatedAt: string,
      width?: number | null,
    } | null,
    unit_id: string,
    updatedAt: string,
  } | null,
};

export type OnCreateLocationSubscriptionVariables = {
  filter?: ModelSubscriptionLocationFilterInput | null,
};

export type OnCreateLocationSubscription = {
  onCreateLocation?:  {
    __typename: "Location",
    buildings?:  {
      __typename: "ModelBuildingConnection",
      nextToken?: string | null,
    } | null,
    company?:  {
      __typename: "Company",
      createdAt: string,
      id: string,
      name: string,
      owner_id: string,
      physical_address_address_1?: string | null,
      physical_address_address_2?: string | null,
      physical_address_city?: string | null,
      physical_address_country?: string | null,
      physical_address_postal_code?: string | null,
      physical_address_state?: US_STATE | null,
      postal_address_address_1?: string | null,
      postal_address_address_2?: string | null,
      postal_address_city?: string | null,
      postal_address_country?: string | null,
      postal_address_postal_code?: string | null,
      postal_address_state?: US_STATE | null,
      updatedAt: string,
    } | null,
    company_id: string,
    createdAt: string,
    id: string,
    name: string,
    physical_address_address_1?: string | null,
    physical_address_address_2?: string | null,
    physical_address_city?: string | null,
    physical_address_country?: string | null,
    physical_address_postal_code?: string | null,
    physical_address_state?: US_STATE | null,
    updatedAt: string,
  } | null,
};

export type OnCreateTransactionSubscriptionVariables = {
  filter?: ModelSubscriptionTransactionFilterInput | null,
};

export type OnCreateTransactionSubscription = {
  onCreateTransaction?:  {
    __typename: "Transaction",
    amount: number,
    company?:  {
      __typename: "Company",
      createdAt: string,
      id: string,
      name: string,
      owner_id: string,
      physical_address_address_1?: string | null,
      physical_address_address_2?: string | null,
      physical_address_city?: string | null,
      physical_address_country?: string | null,
      physical_address_postal_code?: string | null,
      physical_address_state?: US_STATE | null,
      postal_address_address_1?: string | null,
      postal_address_address_2?: string | null,
      postal_address_city?: string | null,
      postal_address_country?: string | null,
      postal_address_postal_code?: string | null,
      postal_address_state?: US_STATE | null,
      updatedAt: string,
    } | null,
    company_id: string,
    createdAt: string,
    currency?: CURRENCY | null,
    date: string,
    id: string,
    memo?: string | null,
    owner?:  {
      __typename: "User",
      address_1?: string | null,
      address_2?: string | null,
      city?: string | null,
      cognito_username: string,
      country?: string | null,
      createdAt: string,
      email_1?: string | null,
      email_2?: string | null,
      first_name?: string | null,
      last_name?: string | null,
      phone_1?: string | null,
      phone_2?: string | null,
      postal_code?: string | null,
      state?: US_STATE | null,
      updatedAt: string,
    } | null,
    owner_id: string,
    reference?: string | null,
    transaction_attributions?:  {
      __typename: "ModelTransactionAttributionConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnCreateTransactionAttributionSubscriptionVariables = {
  filter?: ModelSubscriptionTransactionAttributionFilterInput | null,
};

export type OnCreateTransactionAttributionSubscription = {
  onCreateTransactionAttribution?:  {
    __typename: "TransactionAttribution",
    amount: number,
    attribution_id: string,
    attribution_type: ATTRIBUTION_TYPE,
    createdAt: string,
    description?: string | null,
    id: string,
    transaction?:  {
      __typename: "Transaction",
      amount: number,
      company_id: string,
      createdAt: string,
      currency?: CURRENCY | null,
      date: string,
      id: string,
      memo?: string | null,
      owner_id: string,
      reference?: string | null,
      updatedAt: string,
    } | null,
    transaction_id: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUnitSubscriptionVariables = {
  filter?: ModelSubscriptionUnitFilterInput | null,
};

export type OnCreateUnitSubscription = {
  onCreateUnit?:  {
    __typename: "Unit",
    basis_price?: number | null,
    building?:  {
      __typename: "Building",
      createdAt: string,
      id: string,
      location_id: string,
      name: string,
      updatedAt: string,
    } | null,
    building_id: string,
    createdAt: string,
    currency?: CURRENCY | null,
    depth?: number | null,
    height?: number | null,
    id: string,
    leases?:  {
      __typename: "ModelLeaseUnitConnection",
      nextToken?: string | null,
    } | null,
    name: string,
    uom?: UOM | null,
    updatedAt: string,
    width?: number | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    address_1?: string | null,
    address_2?: string | null,
    authorizations?:  {
      __typename: "ModelAuthorizationConnection",
      nextToken?: string | null,
    } | null,
    city?: string | null,
    cognito_username: string,
    companies?:  {
      __typename: "ModelCompanyConnection",
      nextToken?: string | null,
    } | null,
    country?: string | null,
    createdAt: string,
    email_1?: string | null,
    email_2?: string | null,
    first_name?: string | null,
    last_name?: string | null,
    leases?:  {
      __typename: "ModelLeaseConnection",
      nextToken?: string | null,
    } | null,
    phone_1?: string | null,
    phone_2?: string | null,
    postal_code?: string | null,
    state?: US_STATE | null,
    transactions?:  {
      __typename: "ModelTransactionConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteAuthorizationSubscriptionVariables = {
  filter?: ModelSubscriptionAuthorizationFilterInput | null,
};

export type OnDeleteAuthorizationSubscription = {
  onDeleteAuthorization?:  {
    __typename: "Authorization",
    authority_id: string,
    authority_type?: AuthorizationAuthority_type | null,
    claim: string,
    createdAt: string,
    id: string,
    issuer_id: string,
    resource_id: string,
    resource_type?: AuthorizationResource_type | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      address_1?: string | null,
      address_2?: string | null,
      city?: string | null,
      cognito_username: string,
      country?: string | null,
      createdAt: string,
      email_1?: string | null,
      email_2?: string | null,
      first_name?: string | null,
      last_name?: string | null,
      phone_1?: string | null,
      phone_2?: string | null,
      postal_code?: string | null,
      state?: US_STATE | null,
      updatedAt: string,
    } | null,
    user_id: string,
  } | null,
};

export type OnDeleteBuildingSubscriptionVariables = {
  filter?: ModelSubscriptionBuildingFilterInput | null,
};

export type OnDeleteBuildingSubscription = {
  onDeleteBuilding?:  {
    __typename: "Building",
    createdAt: string,
    id: string,
    location?:  {
      __typename: "Location",
      company_id: string,
      createdAt: string,
      id: string,
      name: string,
      physical_address_address_1?: string | null,
      physical_address_address_2?: string | null,
      physical_address_city?: string | null,
      physical_address_country?: string | null,
      physical_address_postal_code?: string | null,
      physical_address_state?: US_STATE | null,
      updatedAt: string,
    } | null,
    location_id: string,
    name: string,
    units?:  {
      __typename: "ModelUnitConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteCompanySubscriptionVariables = {
  filter?: ModelSubscriptionCompanyFilterInput | null,
};

export type OnDeleteCompanySubscription = {
  onDeleteCompany?:  {
    __typename: "Company",
    createdAt: string,
    id: string,
    locations?:  {
      __typename: "ModelLocationConnection",
      nextToken?: string | null,
    } | null,
    name: string,
    owner?:  {
      __typename: "User",
      address_1?: string | null,
      address_2?: string | null,
      city?: string | null,
      cognito_username: string,
      country?: string | null,
      createdAt: string,
      email_1?: string | null,
      email_2?: string | null,
      first_name?: string | null,
      last_name?: string | null,
      phone_1?: string | null,
      phone_2?: string | null,
      postal_code?: string | null,
      state?: US_STATE | null,
      updatedAt: string,
    } | null,
    owner_id: string,
    physical_address_address_1?: string | null,
    physical_address_address_2?: string | null,
    physical_address_city?: string | null,
    physical_address_country?: string | null,
    physical_address_postal_code?: string | null,
    physical_address_state?: US_STATE | null,
    postal_address_address_1?: string | null,
    postal_address_address_2?: string | null,
    postal_address_city?: string | null,
    postal_address_country?: string | null,
    postal_address_postal_code?: string | null,
    postal_address_state?: US_STATE | null,
    transactions?:  {
      __typename: "ModelTransactionConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteLeaseSubscriptionVariables = {
  filter?: ModelSubscriptionLeaseFilterInput | null,
};

export type OnDeleteLeaseSubscription = {
  onDeleteLease?:  {
    __typename: "Lease",
    createdAt: string,
    id: string,
    owner?:  {
      __typename: "User",
      address_1?: string | null,
      address_2?: string | null,
      city?: string | null,
      cognito_username: string,
      country?: string | null,
      createdAt: string,
      email_1?: string | null,
      email_2?: string | null,
      first_name?: string | null,
      last_name?: string | null,
      phone_1?: string | null,
      phone_2?: string | null,
      postal_code?: string | null,
      state?: US_STATE | null,
      updatedAt: string,
    } | null,
    owner_id: string,
    price?: number | null,
    units?:  {
      __typename: "ModelLeaseUnitConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteLeaseUnitSubscriptionVariables = {
  filter?: ModelSubscriptionLeaseUnitFilterInput | null,
};

export type OnDeleteLeaseUnitSubscription = {
  onDeleteLeaseUnit?:  {
    __typename: "LeaseUnit",
    createdAt: string,
    id: string,
    lease?:  {
      __typename: "Lease",
      createdAt: string,
      id: string,
      owner_id: string,
      price?: number | null,
      updatedAt: string,
    } | null,
    lease_id: string,
    unit?:  {
      __typename: "Unit",
      basis_price?: number | null,
      building_id: string,
      createdAt: string,
      currency?: CURRENCY | null,
      depth?: number | null,
      height?: number | null,
      id: string,
      name: string,
      uom?: UOM | null,
      updatedAt: string,
      width?: number | null,
    } | null,
    unit_id: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteLocationSubscriptionVariables = {
  filter?: ModelSubscriptionLocationFilterInput | null,
};

export type OnDeleteLocationSubscription = {
  onDeleteLocation?:  {
    __typename: "Location",
    buildings?:  {
      __typename: "ModelBuildingConnection",
      nextToken?: string | null,
    } | null,
    company?:  {
      __typename: "Company",
      createdAt: string,
      id: string,
      name: string,
      owner_id: string,
      physical_address_address_1?: string | null,
      physical_address_address_2?: string | null,
      physical_address_city?: string | null,
      physical_address_country?: string | null,
      physical_address_postal_code?: string | null,
      physical_address_state?: US_STATE | null,
      postal_address_address_1?: string | null,
      postal_address_address_2?: string | null,
      postal_address_city?: string | null,
      postal_address_country?: string | null,
      postal_address_postal_code?: string | null,
      postal_address_state?: US_STATE | null,
      updatedAt: string,
    } | null,
    company_id: string,
    createdAt: string,
    id: string,
    name: string,
    physical_address_address_1?: string | null,
    physical_address_address_2?: string | null,
    physical_address_city?: string | null,
    physical_address_country?: string | null,
    physical_address_postal_code?: string | null,
    physical_address_state?: US_STATE | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteTransactionSubscriptionVariables = {
  filter?: ModelSubscriptionTransactionFilterInput | null,
};

export type OnDeleteTransactionSubscription = {
  onDeleteTransaction?:  {
    __typename: "Transaction",
    amount: number,
    company?:  {
      __typename: "Company",
      createdAt: string,
      id: string,
      name: string,
      owner_id: string,
      physical_address_address_1?: string | null,
      physical_address_address_2?: string | null,
      physical_address_city?: string | null,
      physical_address_country?: string | null,
      physical_address_postal_code?: string | null,
      physical_address_state?: US_STATE | null,
      postal_address_address_1?: string | null,
      postal_address_address_2?: string | null,
      postal_address_city?: string | null,
      postal_address_country?: string | null,
      postal_address_postal_code?: string | null,
      postal_address_state?: US_STATE | null,
      updatedAt: string,
    } | null,
    company_id: string,
    createdAt: string,
    currency?: CURRENCY | null,
    date: string,
    id: string,
    memo?: string | null,
    owner?:  {
      __typename: "User",
      address_1?: string | null,
      address_2?: string | null,
      city?: string | null,
      cognito_username: string,
      country?: string | null,
      createdAt: string,
      email_1?: string | null,
      email_2?: string | null,
      first_name?: string | null,
      last_name?: string | null,
      phone_1?: string | null,
      phone_2?: string | null,
      postal_code?: string | null,
      state?: US_STATE | null,
      updatedAt: string,
    } | null,
    owner_id: string,
    reference?: string | null,
    transaction_attributions?:  {
      __typename: "ModelTransactionAttributionConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteTransactionAttributionSubscriptionVariables = {
  filter?: ModelSubscriptionTransactionAttributionFilterInput | null,
};

export type OnDeleteTransactionAttributionSubscription = {
  onDeleteTransactionAttribution?:  {
    __typename: "TransactionAttribution",
    amount: number,
    attribution_id: string,
    attribution_type: ATTRIBUTION_TYPE,
    createdAt: string,
    description?: string | null,
    id: string,
    transaction?:  {
      __typename: "Transaction",
      amount: number,
      company_id: string,
      createdAt: string,
      currency?: CURRENCY | null,
      date: string,
      id: string,
      memo?: string | null,
      owner_id: string,
      reference?: string | null,
      updatedAt: string,
    } | null,
    transaction_id: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUnitSubscriptionVariables = {
  filter?: ModelSubscriptionUnitFilterInput | null,
};

export type OnDeleteUnitSubscription = {
  onDeleteUnit?:  {
    __typename: "Unit",
    basis_price?: number | null,
    building?:  {
      __typename: "Building",
      createdAt: string,
      id: string,
      location_id: string,
      name: string,
      updatedAt: string,
    } | null,
    building_id: string,
    createdAt: string,
    currency?: CURRENCY | null,
    depth?: number | null,
    height?: number | null,
    id: string,
    leases?:  {
      __typename: "ModelLeaseUnitConnection",
      nextToken?: string | null,
    } | null,
    name: string,
    uom?: UOM | null,
    updatedAt: string,
    width?: number | null,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    address_1?: string | null,
    address_2?: string | null,
    authorizations?:  {
      __typename: "ModelAuthorizationConnection",
      nextToken?: string | null,
    } | null,
    city?: string | null,
    cognito_username: string,
    companies?:  {
      __typename: "ModelCompanyConnection",
      nextToken?: string | null,
    } | null,
    country?: string | null,
    createdAt: string,
    email_1?: string | null,
    email_2?: string | null,
    first_name?: string | null,
    last_name?: string | null,
    leases?:  {
      __typename: "ModelLeaseConnection",
      nextToken?: string | null,
    } | null,
    phone_1?: string | null,
    phone_2?: string | null,
    postal_code?: string | null,
    state?: US_STATE | null,
    transactions?:  {
      __typename: "ModelTransactionConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateAuthorizationSubscriptionVariables = {
  filter?: ModelSubscriptionAuthorizationFilterInput | null,
};

export type OnUpdateAuthorizationSubscription = {
  onUpdateAuthorization?:  {
    __typename: "Authorization",
    authority_id: string,
    authority_type?: AuthorizationAuthority_type | null,
    claim: string,
    createdAt: string,
    id: string,
    issuer_id: string,
    resource_id: string,
    resource_type?: AuthorizationResource_type | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      address_1?: string | null,
      address_2?: string | null,
      city?: string | null,
      cognito_username: string,
      country?: string | null,
      createdAt: string,
      email_1?: string | null,
      email_2?: string | null,
      first_name?: string | null,
      last_name?: string | null,
      phone_1?: string | null,
      phone_2?: string | null,
      postal_code?: string | null,
      state?: US_STATE | null,
      updatedAt: string,
    } | null,
    user_id: string,
  } | null,
};

export type OnUpdateBuildingSubscriptionVariables = {
  filter?: ModelSubscriptionBuildingFilterInput | null,
};

export type OnUpdateBuildingSubscription = {
  onUpdateBuilding?:  {
    __typename: "Building",
    createdAt: string,
    id: string,
    location?:  {
      __typename: "Location",
      company_id: string,
      createdAt: string,
      id: string,
      name: string,
      physical_address_address_1?: string | null,
      physical_address_address_2?: string | null,
      physical_address_city?: string | null,
      physical_address_country?: string | null,
      physical_address_postal_code?: string | null,
      physical_address_state?: US_STATE | null,
      updatedAt: string,
    } | null,
    location_id: string,
    name: string,
    units?:  {
      __typename: "ModelUnitConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateCompanySubscriptionVariables = {
  filter?: ModelSubscriptionCompanyFilterInput | null,
};

export type OnUpdateCompanySubscription = {
  onUpdateCompany?:  {
    __typename: "Company",
    createdAt: string,
    id: string,
    locations?:  {
      __typename: "ModelLocationConnection",
      nextToken?: string | null,
    } | null,
    name: string,
    owner?:  {
      __typename: "User",
      address_1?: string | null,
      address_2?: string | null,
      city?: string | null,
      cognito_username: string,
      country?: string | null,
      createdAt: string,
      email_1?: string | null,
      email_2?: string | null,
      first_name?: string | null,
      last_name?: string | null,
      phone_1?: string | null,
      phone_2?: string | null,
      postal_code?: string | null,
      state?: US_STATE | null,
      updatedAt: string,
    } | null,
    owner_id: string,
    physical_address_address_1?: string | null,
    physical_address_address_2?: string | null,
    physical_address_city?: string | null,
    physical_address_country?: string | null,
    physical_address_postal_code?: string | null,
    physical_address_state?: US_STATE | null,
    postal_address_address_1?: string | null,
    postal_address_address_2?: string | null,
    postal_address_city?: string | null,
    postal_address_country?: string | null,
    postal_address_postal_code?: string | null,
    postal_address_state?: US_STATE | null,
    transactions?:  {
      __typename: "ModelTransactionConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateLeaseSubscriptionVariables = {
  filter?: ModelSubscriptionLeaseFilterInput | null,
};

export type OnUpdateLeaseSubscription = {
  onUpdateLease?:  {
    __typename: "Lease",
    createdAt: string,
    id: string,
    owner?:  {
      __typename: "User",
      address_1?: string | null,
      address_2?: string | null,
      city?: string | null,
      cognito_username: string,
      country?: string | null,
      createdAt: string,
      email_1?: string | null,
      email_2?: string | null,
      first_name?: string | null,
      last_name?: string | null,
      phone_1?: string | null,
      phone_2?: string | null,
      postal_code?: string | null,
      state?: US_STATE | null,
      updatedAt: string,
    } | null,
    owner_id: string,
    price?: number | null,
    units?:  {
      __typename: "ModelLeaseUnitConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateLeaseUnitSubscriptionVariables = {
  filter?: ModelSubscriptionLeaseUnitFilterInput | null,
};

export type OnUpdateLeaseUnitSubscription = {
  onUpdateLeaseUnit?:  {
    __typename: "LeaseUnit",
    createdAt: string,
    id: string,
    lease?:  {
      __typename: "Lease",
      createdAt: string,
      id: string,
      owner_id: string,
      price?: number | null,
      updatedAt: string,
    } | null,
    lease_id: string,
    unit?:  {
      __typename: "Unit",
      basis_price?: number | null,
      building_id: string,
      createdAt: string,
      currency?: CURRENCY | null,
      depth?: number | null,
      height?: number | null,
      id: string,
      name: string,
      uom?: UOM | null,
      updatedAt: string,
      width?: number | null,
    } | null,
    unit_id: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateLocationSubscriptionVariables = {
  filter?: ModelSubscriptionLocationFilterInput | null,
};

export type OnUpdateLocationSubscription = {
  onUpdateLocation?:  {
    __typename: "Location",
    buildings?:  {
      __typename: "ModelBuildingConnection",
      nextToken?: string | null,
    } | null,
    company?:  {
      __typename: "Company",
      createdAt: string,
      id: string,
      name: string,
      owner_id: string,
      physical_address_address_1?: string | null,
      physical_address_address_2?: string | null,
      physical_address_city?: string | null,
      physical_address_country?: string | null,
      physical_address_postal_code?: string | null,
      physical_address_state?: US_STATE | null,
      postal_address_address_1?: string | null,
      postal_address_address_2?: string | null,
      postal_address_city?: string | null,
      postal_address_country?: string | null,
      postal_address_postal_code?: string | null,
      postal_address_state?: US_STATE | null,
      updatedAt: string,
    } | null,
    company_id: string,
    createdAt: string,
    id: string,
    name: string,
    physical_address_address_1?: string | null,
    physical_address_address_2?: string | null,
    physical_address_city?: string | null,
    physical_address_country?: string | null,
    physical_address_postal_code?: string | null,
    physical_address_state?: US_STATE | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateTransactionSubscriptionVariables = {
  filter?: ModelSubscriptionTransactionFilterInput | null,
};

export type OnUpdateTransactionSubscription = {
  onUpdateTransaction?:  {
    __typename: "Transaction",
    amount: number,
    company?:  {
      __typename: "Company",
      createdAt: string,
      id: string,
      name: string,
      owner_id: string,
      physical_address_address_1?: string | null,
      physical_address_address_2?: string | null,
      physical_address_city?: string | null,
      physical_address_country?: string | null,
      physical_address_postal_code?: string | null,
      physical_address_state?: US_STATE | null,
      postal_address_address_1?: string | null,
      postal_address_address_2?: string | null,
      postal_address_city?: string | null,
      postal_address_country?: string | null,
      postal_address_postal_code?: string | null,
      postal_address_state?: US_STATE | null,
      updatedAt: string,
    } | null,
    company_id: string,
    createdAt: string,
    currency?: CURRENCY | null,
    date: string,
    id: string,
    memo?: string | null,
    owner?:  {
      __typename: "User",
      address_1?: string | null,
      address_2?: string | null,
      city?: string | null,
      cognito_username: string,
      country?: string | null,
      createdAt: string,
      email_1?: string | null,
      email_2?: string | null,
      first_name?: string | null,
      last_name?: string | null,
      phone_1?: string | null,
      phone_2?: string | null,
      postal_code?: string | null,
      state?: US_STATE | null,
      updatedAt: string,
    } | null,
    owner_id: string,
    reference?: string | null,
    transaction_attributions?:  {
      __typename: "ModelTransactionAttributionConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateTransactionAttributionSubscriptionVariables = {
  filter?: ModelSubscriptionTransactionAttributionFilterInput | null,
};

export type OnUpdateTransactionAttributionSubscription = {
  onUpdateTransactionAttribution?:  {
    __typename: "TransactionAttribution",
    amount: number,
    attribution_id: string,
    attribution_type: ATTRIBUTION_TYPE,
    createdAt: string,
    description?: string | null,
    id: string,
    transaction?:  {
      __typename: "Transaction",
      amount: number,
      company_id: string,
      createdAt: string,
      currency?: CURRENCY | null,
      date: string,
      id: string,
      memo?: string | null,
      owner_id: string,
      reference?: string | null,
      updatedAt: string,
    } | null,
    transaction_id: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUnitSubscriptionVariables = {
  filter?: ModelSubscriptionUnitFilterInput | null,
};

export type OnUpdateUnitSubscription = {
  onUpdateUnit?:  {
    __typename: "Unit",
    basis_price?: number | null,
    building?:  {
      __typename: "Building",
      createdAt: string,
      id: string,
      location_id: string,
      name: string,
      updatedAt: string,
    } | null,
    building_id: string,
    createdAt: string,
    currency?: CURRENCY | null,
    depth?: number | null,
    height?: number | null,
    id: string,
    leases?:  {
      __typename: "ModelLeaseUnitConnection",
      nextToken?: string | null,
    } | null,
    name: string,
    uom?: UOM | null,
    updatedAt: string,
    width?: number | null,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    address_1?: string | null,
    address_2?: string | null,
    authorizations?:  {
      __typename: "ModelAuthorizationConnection",
      nextToken?: string | null,
    } | null,
    city?: string | null,
    cognito_username: string,
    companies?:  {
      __typename: "ModelCompanyConnection",
      nextToken?: string | null,
    } | null,
    country?: string | null,
    createdAt: string,
    email_1?: string | null,
    email_2?: string | null,
    first_name?: string | null,
    last_name?: string | null,
    leases?:  {
      __typename: "ModelLeaseConnection",
      nextToken?: string | null,
    } | null,
    phone_1?: string | null,
    phone_2?: string | null,
    postal_code?: string | null,
    state?: US_STATE | null,
    transactions?:  {
      __typename: "ModelTransactionConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};
