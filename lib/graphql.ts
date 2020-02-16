import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  Cursor: any,
  UUID: any,
  Datetime: string,
  BigFloat: any,
};

export type Account = Node & {
   __typename?: 'Account',
  nodeId: Scalars['ID'],
  id: Scalars['UUID'],
  created: Scalars['Datetime'],
  modified: Scalars['Datetime'],
  name?: Maybe<Scalars['String']>,
  institution?: Maybe<Scalars['String']>,
  details?: Maybe<Scalars['String']>,
  transactions: TransactionsConnection,
  transactionImportBatches: TransactionImportBatchesConnection,
};


export type AccountTransactionsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<TransactionsOrderBy>>,
  condition?: Maybe<TransactionCondition>,
  filter?: Maybe<TransactionFilter>
};


export type AccountTransactionImportBatchesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<TransactionImportBatchesOrderBy>>,
  condition?: Maybe<TransactionImportBatchCondition>,
  filter?: Maybe<TransactionImportBatchFilter>
};

export type AccountCondition = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  institution?: Maybe<Scalars['String']>,
  details?: Maybe<Scalars['String']>,
};

export type AccountFilter = {
  id?: Maybe<UuidFilter>,
  created?: Maybe<DatetimeFilter>,
  modified?: Maybe<DatetimeFilter>,
  name?: Maybe<StringFilter>,
  institution?: Maybe<StringFilter>,
  details?: Maybe<StringFilter>,
  transactions?: Maybe<AccountToManyTransactionFilter>,
  transactionsExist?: Maybe<Scalars['Boolean']>,
  transactionImportBatches?: Maybe<AccountToManyTransactionImportBatchFilter>,
  transactionImportBatchesExist?: Maybe<Scalars['Boolean']>,
  and?: Maybe<Array<AccountFilter>>,
  or?: Maybe<Array<AccountFilter>>,
  not?: Maybe<AccountFilter>,
};

export type AccountInput = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  institution?: Maybe<Scalars['String']>,
  details?: Maybe<Scalars['String']>,
  transactionsUsingId?: Maybe<FkTransactionAccountAccountIdInverseInput>,
  transactionImportBatchesUsingId?: Maybe<FkTransactionImportBatchAccountAccountIdInverseInput>,
};

export type AccountNodeIdConnect = {
  nodeId: Scalars['ID'],
};

export type AccountNodeIdDelete = {
  nodeId: Scalars['ID'],
};

export type AccountOnTransactionForFkTransactionAccountAccountIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: TransactionPatch,
};

export type AccountOnTransactionForFkTransactionAccountAccountIdUsingPkAccountUpdate = {
  patch: UpdateAccountOnTransactionForFkTransactionAccountAccountIdPatch,
  id: Scalars['UUID'],
};

export type AccountOnTransactionImportBatchForFkTransactionImportBatchAccountAccountIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: TransactionImportBatchPatch,
};

export type AccountOnTransactionImportBatchForFkTransactionImportBatchAccountAccountIdUsingPkAccountUpdate = {
  patch: UpdateAccountOnTransactionImportBatchForFkTransactionImportBatchAccountAccountIdPatch,
  id: Scalars['UUID'],
};

export type AccountPatch = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  institution?: Maybe<Scalars['String']>,
  details?: Maybe<Scalars['String']>,
  transactionsUsingId?: Maybe<FkTransactionAccountAccountIdInverseInput>,
  transactionImportBatchesUsingId?: Maybe<FkTransactionImportBatchAccountAccountIdInverseInput>,
};

export type AccountPkAccountConnect = {
  id: Scalars['UUID'],
};

export type AccountPkAccountDelete = {
  id: Scalars['UUID'],
};

export type AccountsConnection = {
   __typename?: 'AccountsConnection',
  nodes: Array<Maybe<Account>>,
  edges: Array<AccountsEdge>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
};

export type AccountsEdge = {
   __typename?: 'AccountsEdge',
  cursor?: Maybe<Scalars['Cursor']>,
  node?: Maybe<Account>,
};

export enum AccountsOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  InstitutionAsc = 'INSTITUTION_ASC',
  InstitutionDesc = 'INSTITUTION_DESC',
  DetailsAsc = 'DETAILS_ASC',
  DetailsDesc = 'DETAILS_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type AccountToManyTransactionFilter = {
  every?: Maybe<TransactionFilter>,
  some?: Maybe<TransactionFilter>,
  none?: Maybe<TransactionFilter>,
};

export type AccountToManyTransactionImportBatchFilter = {
  every?: Maybe<TransactionImportBatchFilter>,
  some?: Maybe<TransactionImportBatchFilter>,
  none?: Maybe<TransactionImportBatchFilter>,
};

export type AgenciesConnection = {
   __typename?: 'AgenciesConnection',
  nodes: Array<Maybe<Agency>>,
  edges: Array<AgenciesEdge>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
};

export type AgenciesEdge = {
   __typename?: 'AgenciesEdge',
  cursor?: Maybe<Scalars['Cursor']>,
  node?: Maybe<Agency>,
};

export enum AgenciesOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC',
  LogoIdAsc = 'LOGO_ID_ASC',
  LogoIdDesc = 'LOGO_ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type Agency = Node & {
   __typename?: 'Agency',
  nodeId: Scalars['ID'],
  id: Scalars['UUID'],
  created: Scalars['Datetime'],
  modified: Scalars['Datetime'],
  logoId: Scalars['UUID'],
  name?: Maybe<Scalars['String']>,
  logo?: Maybe<MediaItem>,
  agencyMembers: AgencyMembersConnection,
  trips: TripsConnection,
};


export type AgencyAgencyMembersArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<AgencyMembersOrderBy>>,
  condition?: Maybe<AgencyMemberCondition>,
  filter?: Maybe<AgencyMemberFilter>
};


export type AgencyTripsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<TripsOrderBy>>,
  condition?: Maybe<TripCondition>,
  filter?: Maybe<TripFilter>
};

export type AgencyCondition = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  logoId?: Maybe<Scalars['UUID']>,
  name?: Maybe<Scalars['String']>,
};

export type AgencyFilter = {
  id?: Maybe<UuidFilter>,
  created?: Maybe<DatetimeFilter>,
  modified?: Maybe<DatetimeFilter>,
  logoId?: Maybe<UuidFilter>,
  name?: Maybe<StringFilter>,
  agencyMembers?: Maybe<AgencyToManyAgencyMemberFilter>,
  agencyMembersExist?: Maybe<Scalars['Boolean']>,
  trips?: Maybe<AgencyToManyTripFilter>,
  tripsExist?: Maybe<Scalars['Boolean']>,
  logo?: Maybe<MediaItemFilter>,
  and?: Maybe<Array<AgencyFilter>>,
  or?: Maybe<Array<AgencyFilter>>,
  not?: Maybe<AgencyFilter>,
};

export type AgencyInput = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  logoId?: Maybe<Scalars['UUID']>,
  name?: Maybe<Scalars['String']>,
  mediaItemToLogoId?: Maybe<FkAgencyMediaItemLogoIdInput>,
  agencyMembersUsingId?: Maybe<FkAgencyMemberAgencyAgencyIdInverseInput>,
  tripsUsingId?: Maybe<FkTripAgencyAgencyIdInverseInput>,
};

export type AgencyMember = Node & {
   __typename?: 'AgencyMember',
  nodeId: Scalars['ID'],
  id: Scalars['UUID'],
  created: Scalars['Datetime'],
  modified: Scalars['Datetime'],
  firstName?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  skype?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  genderPreposition?: Maybe<Scalars['String']>,
  agencyId: Scalars['UUID'],
  agency?: Maybe<Agency>,
  trips: TripsConnection,
};


export type AgencyMemberTripsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<TripsOrderBy>>,
  condition?: Maybe<TripCondition>,
  filter?: Maybe<TripFilter>
};

export type AgencyMemberCondition = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  firstName?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  skype?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  genderPreposition?: Maybe<Scalars['String']>,
  agencyId?: Maybe<Scalars['UUID']>,
};

export type AgencyMemberFilter = {
  id?: Maybe<UuidFilter>,
  created?: Maybe<DatetimeFilter>,
  modified?: Maybe<DatetimeFilter>,
  firstName?: Maybe<StringFilter>,
  lastName?: Maybe<StringFilter>,
  email?: Maybe<StringFilter>,
  phone?: Maybe<StringFilter>,
  skype?: Maybe<StringFilter>,
  title?: Maybe<StringFilter>,
  genderPreposition?: Maybe<StringFilter>,
  agencyId?: Maybe<UuidFilter>,
  trips?: Maybe<AgencyMemberToManyTripFilter>,
  tripsExist?: Maybe<Scalars['Boolean']>,
  agency?: Maybe<AgencyFilter>,
  and?: Maybe<Array<AgencyMemberFilter>>,
  or?: Maybe<Array<AgencyMemberFilter>>,
  not?: Maybe<AgencyMemberFilter>,
};

export type AgencyMemberInput = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  firstName?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  skype?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  genderPreposition?: Maybe<Scalars['String']>,
  agencyId?: Maybe<Scalars['UUID']>,
  agencyToAgencyId?: Maybe<FkAgencyMemberAgencyAgencyIdInput>,
  tripsUsingId?: Maybe<FkTripAgencyMemberAgencyMemberIdInverseInput>,
};

export type AgencyMemberNodeIdConnect = {
  nodeId: Scalars['ID'],
};

export type AgencyMemberNodeIdDelete = {
  nodeId: Scalars['ID'],
};

export type AgencyMemberOnAgencyMemberForFkAgencyMemberAgencyAgencyIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: AgencyPatch,
};

export type AgencyMemberOnAgencyMemberForFkAgencyMemberAgencyAgencyIdUsingPkAgencyMemberUpdate = {
  patch: UpdateAgencyMemberOnAgencyMemberForFkAgencyMemberAgencyAgencyIdPatch,
  id: Scalars['UUID'],
};

export type AgencyMemberOnTripForFkTripAgencyMemberAgencyMemberIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: TripPatch,
};

export type AgencyMemberOnTripForFkTripAgencyMemberAgencyMemberIdUsingPkAgencyMemberUpdate = {
  patch: UpdateAgencyMemberOnTripForFkTripAgencyMemberAgencyMemberIdPatch,
  id: Scalars['UUID'],
};

export type AgencyMemberPatch = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  firstName?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  skype?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  genderPreposition?: Maybe<Scalars['String']>,
  agencyId?: Maybe<Scalars['UUID']>,
  agencyToAgencyId?: Maybe<FkAgencyMemberAgencyAgencyIdInput>,
  tripsUsingId?: Maybe<FkTripAgencyMemberAgencyMemberIdInverseInput>,
};

export type AgencyMemberPkAgencyMemberConnect = {
  id: Scalars['UUID'],
};

export type AgencyMemberPkAgencyMemberDelete = {
  id: Scalars['UUID'],
};

export type AgencyMembersConnection = {
   __typename?: 'AgencyMembersConnection',
  nodes: Array<Maybe<AgencyMember>>,
  edges: Array<AgencyMembersEdge>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
};

export type AgencyMembersEdge = {
   __typename?: 'AgencyMembersEdge',
  cursor?: Maybe<Scalars['Cursor']>,
  node?: Maybe<AgencyMember>,
};

export enum AgencyMembersOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC',
  FirstNameAsc = 'FIRST_NAME_ASC',
  FirstNameDesc = 'FIRST_NAME_DESC',
  LastNameAsc = 'LAST_NAME_ASC',
  LastNameDesc = 'LAST_NAME_DESC',
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC',
  PhoneAsc = 'PHONE_ASC',
  PhoneDesc = 'PHONE_DESC',
  SkypeAsc = 'SKYPE_ASC',
  SkypeDesc = 'SKYPE_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC',
  GenderPrepositionAsc = 'GENDER_PREPOSITION_ASC',
  GenderPrepositionDesc = 'GENDER_PREPOSITION_DESC',
  AgencyIdAsc = 'AGENCY_ID_ASC',
  AgencyIdDesc = 'AGENCY_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type AgencyMemberToManyTripFilter = {
  every?: Maybe<TripFilter>,
  some?: Maybe<TripFilter>,
  none?: Maybe<TripFilter>,
};

export type AgencyNodeIdConnect = {
  nodeId: Scalars['ID'],
};

export type AgencyNodeIdDelete = {
  nodeId: Scalars['ID'],
};

export type AgencyOnAgencyForFkAgencyMediaItemLogoIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: MediaItemPatch,
};

export type AgencyOnAgencyForFkAgencyMediaItemLogoIdUsingPkAgencyUpdate = {
  patch: UpdateAgencyOnAgencyForFkAgencyMediaItemLogoIdPatch,
  id: Scalars['UUID'],
};

export type AgencyOnAgencyMemberForFkAgencyMemberAgencyAgencyIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: AgencyMemberPatch,
};

export type AgencyOnAgencyMemberForFkAgencyMemberAgencyAgencyIdUsingPkAgencyUpdate = {
  patch: UpdateAgencyOnAgencyMemberForFkAgencyMemberAgencyAgencyIdPatch,
  id: Scalars['UUID'],
};

export type AgencyOnTripForFkTripAgencyAgencyIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: TripPatch,
};

export type AgencyOnTripForFkTripAgencyAgencyIdUsingPkAgencyUpdate = {
  patch: UpdateAgencyOnTripForFkTripAgencyAgencyIdPatch,
  id: Scalars['UUID'],
};

export type AgencyPatch = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  logoId?: Maybe<Scalars['UUID']>,
  name?: Maybe<Scalars['String']>,
  mediaItemToLogoId?: Maybe<FkAgencyMediaItemLogoIdInput>,
  agencyMembersUsingId?: Maybe<FkAgencyMemberAgencyAgencyIdInverseInput>,
  tripsUsingId?: Maybe<FkTripAgencyAgencyIdInverseInput>,
};

export type AgencyPkAgencyConnect = {
  id: Scalars['UUID'],
};

export type AgencyPkAgencyDelete = {
  id: Scalars['UUID'],
};

export type AgencyToManyAgencyMemberFilter = {
  every?: Maybe<AgencyMemberFilter>,
  some?: Maybe<AgencyMemberFilter>,
  none?: Maybe<AgencyMemberFilter>,
};

export type AgencyToManyTripFilter = {
  every?: Maybe<TripFilter>,
  some?: Maybe<TripFilter>,
  none?: Maybe<TripFilter>,
};

export type Airport = Node & {
   __typename?: 'Airport',
  nodeId: Scalars['ID'],
  id: Scalars['UUID'],
  created: Scalars['Datetime'],
  modified: Scalars['Datetime'],
  iata?: Maybe<Scalars['String']>,
  icao?: Maybe<Scalars['String']>,
  latitude: Scalars['Float'],
  longitude: Scalars['Float'],
  countryId: Scalars['UUID'],
  city?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  displayName?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>,
  country?: Maybe<Country>,
  tripFlightsByDepartureAirport: TripFlightsConnection,
  tripFlightsByArrivalAirport: TripFlightsConnection,
};


export type AirportTripFlightsByDepartureAirportArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<TripFlightsOrderBy>>,
  condition?: Maybe<TripFlightCondition>,
  filter?: Maybe<TripFlightFilter>
};


export type AirportTripFlightsByArrivalAirportArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<TripFlightsOrderBy>>,
  condition?: Maybe<TripFlightCondition>,
  filter?: Maybe<TripFlightFilter>
};

export type AirportCondition = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  iata?: Maybe<Scalars['String']>,
  icao?: Maybe<Scalars['String']>,
  latitude?: Maybe<Scalars['Float']>,
  longitude?: Maybe<Scalars['Float']>,
  countryId?: Maybe<Scalars['UUID']>,
  city?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  displayName?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>,
};

export type AirportFilter = {
  id?: Maybe<UuidFilter>,
  created?: Maybe<DatetimeFilter>,
  modified?: Maybe<DatetimeFilter>,
  iata?: Maybe<StringFilter>,
  icao?: Maybe<StringFilter>,
  latitude?: Maybe<FloatFilter>,
  longitude?: Maybe<FloatFilter>,
  countryId?: Maybe<UuidFilter>,
  city?: Maybe<StringFilter>,
  name?: Maybe<StringFilter>,
  displayName?: Maybe<StringFilter>,
  timezone?: Maybe<StringFilter>,
  tripFlightsByDepartureAirport?: Maybe<AirportToManyTripFlightFilter>,
  tripFlightsByDepartureAirportExist?: Maybe<Scalars['Boolean']>,
  tripFlightsByArrivalAirport?: Maybe<AirportToManyTripFlightFilter>,
  tripFlightsByArrivalAirportExist?: Maybe<Scalars['Boolean']>,
  country?: Maybe<CountryFilter>,
  and?: Maybe<Array<AirportFilter>>,
  or?: Maybe<Array<AirportFilter>>,
  not?: Maybe<AirportFilter>,
};

export type AirportInput = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  iata?: Maybe<Scalars['String']>,
  icao?: Maybe<Scalars['String']>,
  latitude: Scalars['Float'],
  longitude: Scalars['Float'],
  countryId?: Maybe<Scalars['UUID']>,
  city?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  displayName?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>,
  countryToCountryId?: Maybe<FkAirportCountryCountryIdInput>,
  tripFlightsToDepartureAirportUsingIata?: Maybe<FakePublicTripFlightForeignKey0InverseInput>,
  tripFlightsToArrivalAirportUsingIata?: Maybe<FakePublicTripFlightForeignKey1InverseInput>,
};

export type AirportNodeIdConnect = {
  nodeId: Scalars['ID'],
};

export type AirportNodeIdDelete = {
  nodeId: Scalars['ID'],
};

export type AirportOnAirportForFkAirportCountryCountryIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: CountryPatch,
};

export type AirportOnAirportForFkAirportCountryCountryIdUsingPkAirportUpdate = {
  patch: UpdateAirportOnAirportForFkAirportCountryCountryIdPatch,
  id: Scalars['UUID'],
};

export type AirportOnTripFlightForFakePublicTripFlightForeignKey0NodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: TripFlightPatch,
};

export type AirportOnTripFlightForFakePublicTripFlightForeignKey0UsingPkAirportUpdate = {
  patch: UpdateAirportOnTripFlightForFakePublicTripFlightForeignKey0Patch,
  id: Scalars['UUID'],
};

export type AirportOnTripFlightForFakePublicTripFlightForeignKey1NodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: TripFlightPatch,
};

export type AirportOnTripFlightForFakePublicTripFlightForeignKey1UsingPkAirportUpdate = {
  patch: UpdateAirportOnTripFlightForFakePublicTripFlightForeignKey1Patch,
  id: Scalars['UUID'],
};

export type AirportPatch = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  iata?: Maybe<Scalars['String']>,
  icao?: Maybe<Scalars['String']>,
  latitude?: Maybe<Scalars['Float']>,
  longitude?: Maybe<Scalars['Float']>,
  countryId?: Maybe<Scalars['UUID']>,
  city?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  displayName?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>,
  countryToCountryId?: Maybe<FkAirportCountryCountryIdInput>,
  tripFlightsToDepartureAirportUsingIata?: Maybe<FakePublicTripFlightForeignKey0InverseInput>,
  tripFlightsToArrivalAirportUsingIata?: Maybe<FakePublicTripFlightForeignKey1InverseInput>,
};

export type AirportPkAirportConnect = {
  id: Scalars['UUID'],
};

export type AirportPkAirportDelete = {
  id: Scalars['UUID'],
};

export type AirportsConnection = {
   __typename?: 'AirportsConnection',
  nodes: Array<Maybe<Airport>>,
  edges: Array<AirportsEdge>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
};

export type AirportsEdge = {
   __typename?: 'AirportsEdge',
  cursor?: Maybe<Scalars['Cursor']>,
  node?: Maybe<Airport>,
};

export enum AirportsOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC',
  IataAsc = 'IATA_ASC',
  IataDesc = 'IATA_DESC',
  IcaoAsc = 'ICAO_ASC',
  IcaoDesc = 'ICAO_DESC',
  LatitudeAsc = 'LATITUDE_ASC',
  LatitudeDesc = 'LATITUDE_DESC',
  LongitudeAsc = 'LONGITUDE_ASC',
  LongitudeDesc = 'LONGITUDE_DESC',
  CountryIdAsc = 'COUNTRY_ID_ASC',
  CountryIdDesc = 'COUNTRY_ID_DESC',
  CityAsc = 'CITY_ASC',
  CityDesc = 'CITY_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  DisplayNameAsc = 'DISPLAY_NAME_ASC',
  DisplayNameDesc = 'DISPLAY_NAME_DESC',
  TimezoneAsc = 'TIMEZONE_ASC',
  TimezoneDesc = 'TIMEZONE_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type AirportToManyTripFlightFilter = {
  every?: Maybe<TripFlightFilter>,
  some?: Maybe<TripFlightFilter>,
  none?: Maybe<TripFlightFilter>,
};


export type BigFloatFilter = {
  isNull?: Maybe<Scalars['Boolean']>,
  equalTo?: Maybe<Scalars['BigFloat']>,
  notEqualTo?: Maybe<Scalars['BigFloat']>,
  distinctFrom?: Maybe<Scalars['BigFloat']>,
  notDistinctFrom?: Maybe<Scalars['BigFloat']>,
  in?: Maybe<Array<Scalars['BigFloat']>>,
  notIn?: Maybe<Array<Scalars['BigFloat']>>,
  lessThan?: Maybe<Scalars['BigFloat']>,
  lessThanOrEqualTo?: Maybe<Scalars['BigFloat']>,
  greaterThan?: Maybe<Scalars['BigFloat']>,
  greaterThanOrEqualTo?: Maybe<Scalars['BigFloat']>,
};

export type BooleanFilter = {
  isNull?: Maybe<Scalars['Boolean']>,
  equalTo?: Maybe<Scalars['Boolean']>,
  notEqualTo?: Maybe<Scalars['Boolean']>,
  distinctFrom?: Maybe<Scalars['Boolean']>,
  notDistinctFrom?: Maybe<Scalars['Boolean']>,
  in?: Maybe<Array<Scalars['Boolean']>>,
  notIn?: Maybe<Array<Scalars['Boolean']>>,
  lessThan?: Maybe<Scalars['Boolean']>,
  lessThanOrEqualTo?: Maybe<Scalars['Boolean']>,
  greaterThan?: Maybe<Scalars['Boolean']>,
  greaterThanOrEqualTo?: Maybe<Scalars['Boolean']>,
};

export type CombinedTransaction = {
   __typename?: 'CombinedTransaction',
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  accountId?: Maybe<Scalars['UUID']>,
  amount?: Maybe<Scalars['BigFloat']>,
  externalId?: Maybe<Scalars['String']>,
  date?: Maybe<Scalars['Datetime']>,
  description?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['Int']>,
  reverseTransactionId?: Maybe<Scalars['UUID']>,
  source?: Maybe<Scalars['String']>,
  transactionImportBatchId?: Maybe<Scalars['UUID']>,
  balance?: Maybe<Scalars['BigFloat']>,
  currency?: Maybe<Scalars['String']>,
  categoryId?: Maybe<Scalars['UUID']>,
};

export type CombinedTransactionCondition = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  accountId?: Maybe<Scalars['UUID']>,
  amount?: Maybe<Scalars['BigFloat']>,
  externalId?: Maybe<Scalars['String']>,
  date?: Maybe<Scalars['Datetime']>,
  description?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['Int']>,
  reverseTransactionId?: Maybe<Scalars['UUID']>,
  source?: Maybe<Scalars['String']>,
  transactionImportBatchId?: Maybe<Scalars['UUID']>,
  balance?: Maybe<Scalars['BigFloat']>,
  currency?: Maybe<Scalars['String']>,
  categoryId?: Maybe<Scalars['UUID']>,
};

export type CombinedTransactionFilter = {
  id?: Maybe<UuidFilter>,
  created?: Maybe<DatetimeFilter>,
  modified?: Maybe<DatetimeFilter>,
  accountId?: Maybe<UuidFilter>,
  amount?: Maybe<BigFloatFilter>,
  externalId?: Maybe<StringFilter>,
  date?: Maybe<DatetimeFilter>,
  description?: Maybe<StringFilter>,
  status?: Maybe<IntFilter>,
  reverseTransactionId?: Maybe<UuidFilter>,
  source?: Maybe<StringFilter>,
  transactionImportBatchId?: Maybe<UuidFilter>,
  balance?: Maybe<BigFloatFilter>,
  currency?: Maybe<StringFilter>,
  categoryId?: Maybe<UuidFilter>,
  and?: Maybe<Array<CombinedTransactionFilter>>,
  or?: Maybe<Array<CombinedTransactionFilter>>,
  not?: Maybe<CombinedTransactionFilter>,
};

export type CombinedTransactionsConnection = {
   __typename?: 'CombinedTransactionsConnection',
  nodes: Array<Maybe<CombinedTransaction>>,
  edges: Array<CombinedTransactionsEdge>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
};

export type CombinedTransactionsEdge = {
   __typename?: 'CombinedTransactionsEdge',
  cursor?: Maybe<Scalars['Cursor']>,
  node?: Maybe<CombinedTransaction>,
};

export enum CombinedTransactionsOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC',
  AccountIdAsc = 'ACCOUNT_ID_ASC',
  AccountIdDesc = 'ACCOUNT_ID_DESC',
  AmountAsc = 'AMOUNT_ASC',
  AmountDesc = 'AMOUNT_DESC',
  ExternalIdAsc = 'EXTERNAL_ID_ASC',
  ExternalIdDesc = 'EXTERNAL_ID_DESC',
  DateAsc = 'DATE_ASC',
  DateDesc = 'DATE_DESC',
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  StatusAsc = 'STATUS_ASC',
  StatusDesc = 'STATUS_DESC',
  ReverseTransactionIdAsc = 'REVERSE_TRANSACTION_ID_ASC',
  ReverseTransactionIdDesc = 'REVERSE_TRANSACTION_ID_DESC',
  SourceAsc = 'SOURCE_ASC',
  SourceDesc = 'SOURCE_DESC',
  TransactionImportBatchIdAsc = 'TRANSACTION_IMPORT_BATCH_ID_ASC',
  TransactionImportBatchIdDesc = 'TRANSACTION_IMPORT_BATCH_ID_DESC',
  BalanceAsc = 'BALANCE_ASC',
  BalanceDesc = 'BALANCE_DESC',
  CurrencyAsc = 'CURRENCY_ASC',
  CurrencyDesc = 'CURRENCY_DESC',
  CategoryIdAsc = 'CATEGORY_ID_ASC',
  CategoryIdDesc = 'CATEGORY_ID_DESC'
}

export type CountriesConnection = {
   __typename?: 'CountriesConnection',
  nodes: Array<Maybe<Country>>,
  edges: Array<CountriesEdge>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
};

export type CountriesEdge = {
   __typename?: 'CountriesEdge',
  cursor?: Maybe<Scalars['Cursor']>,
  node?: Maybe<Country>,
};

export enum CountriesOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC',
  Iso2Asc = 'ISO2_ASC',
  Iso2Desc = 'ISO2_DESC',
  Iso3Asc = 'ISO3_ASC',
  Iso3Desc = 'ISO3_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type Country = Node & {
   __typename?: 'Country',
  nodeId: Scalars['ID'],
  id: Scalars['UUID'],
  created: Scalars['Datetime'],
  modified: Scalars['Datetime'],
  iso2?: Maybe<Scalars['String']>,
  iso3?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  airports: AirportsConnection,
  destinations: DestinationsConnection,
  properties: PropertiesConnection,
};


export type CountryAirportsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<AirportsOrderBy>>,
  condition?: Maybe<AirportCondition>,
  filter?: Maybe<AirportFilter>
};


export type CountryDestinationsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<DestinationsOrderBy>>,
  condition?: Maybe<DestinationCondition>,
  filter?: Maybe<DestinationFilter>
};


export type CountryPropertiesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<PropertiesOrderBy>>,
  condition?: Maybe<PropertyCondition>,
  filter?: Maybe<PropertyFilter>
};

export type CountryCondition = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  iso2?: Maybe<Scalars['String']>,
  iso3?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
};

export type CountryFilter = {
  id?: Maybe<UuidFilter>,
  created?: Maybe<DatetimeFilter>,
  modified?: Maybe<DatetimeFilter>,
  iso2?: Maybe<StringFilter>,
  iso3?: Maybe<StringFilter>,
  name?: Maybe<StringFilter>,
  airports?: Maybe<CountryToManyAirportFilter>,
  airportsExist?: Maybe<Scalars['Boolean']>,
  destinations?: Maybe<CountryToManyDestinationFilter>,
  destinationsExist?: Maybe<Scalars['Boolean']>,
  properties?: Maybe<CountryToManyPropertyFilter>,
  propertiesExist?: Maybe<Scalars['Boolean']>,
  and?: Maybe<Array<CountryFilter>>,
  or?: Maybe<Array<CountryFilter>>,
  not?: Maybe<CountryFilter>,
};

export type CountryInput = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  iso2?: Maybe<Scalars['String']>,
  iso3?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  airportsUsingId?: Maybe<FkAirportCountryCountryIdInverseInput>,
  destinationsUsingId?: Maybe<FkDestinationCountryCountryIdInverseInput>,
  propertiesUsingId?: Maybe<FkPropertyCountryCountryIdInverseInput>,
};

export type CountryNodeIdConnect = {
  nodeId: Scalars['ID'],
};

export type CountryNodeIdDelete = {
  nodeId: Scalars['ID'],
};

export type CountryOnAirportForFkAirportCountryCountryIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: AirportPatch,
};

export type CountryOnAirportForFkAirportCountryCountryIdUsingPkCountryUpdate = {
  patch: UpdateCountryOnAirportForFkAirportCountryCountryIdPatch,
  id: Scalars['UUID'],
};

export type CountryOnDestinationForFkDestinationCountryCountryIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: DestinationPatch,
};

export type CountryOnDestinationForFkDestinationCountryCountryIdUsingPkCountryUpdate = {
  patch: UpdateCountryOnDestinationForFkDestinationCountryCountryIdPatch,
  id: Scalars['UUID'],
};

export type CountryOnPropertyForFkPropertyCountryCountryIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: PropertyPatch,
};

export type CountryOnPropertyForFkPropertyCountryCountryIdUsingPkCountryUpdate = {
  patch: UpdateCountryOnPropertyForFkPropertyCountryCountryIdPatch,
  id: Scalars['UUID'],
};

export type CountryPatch = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  iso2?: Maybe<Scalars['String']>,
  iso3?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  airportsUsingId?: Maybe<FkAirportCountryCountryIdInverseInput>,
  destinationsUsingId?: Maybe<FkDestinationCountryCountryIdInverseInput>,
  propertiesUsingId?: Maybe<FkPropertyCountryCountryIdInverseInput>,
};

export type CountryPkCountryConnect = {
  id: Scalars['UUID'],
};

export type CountryPkCountryDelete = {
  id: Scalars['UUID'],
};

export type CountryToManyAirportFilter = {
  every?: Maybe<AirportFilter>,
  some?: Maybe<AirportFilter>,
  none?: Maybe<AirportFilter>,
};

export type CountryToManyDestinationFilter = {
  every?: Maybe<DestinationFilter>,
  some?: Maybe<DestinationFilter>,
  none?: Maybe<DestinationFilter>,
};

export type CountryToManyPropertyFilter = {
  every?: Maybe<PropertyFilter>,
  some?: Maybe<PropertyFilter>,
  none?: Maybe<PropertyFilter>,
};

export type CreateAccountInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  account: AccountInput,
};

export type CreateAccountPayload = {
   __typename?: 'CreateAccountPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  account?: Maybe<Account>,
  query?: Maybe<Query>,
  accountEdge?: Maybe<AccountsEdge>,
};


export type CreateAccountPayloadAccountEdgeArgs = {
  orderBy?: Maybe<Array<AccountsOrderBy>>
};

export type CreateAgencyInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  agency: AgencyInput,
};

export type CreateAgencyMemberInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  agencyMember: AgencyMemberInput,
};

export type CreateAgencyMemberPayload = {
   __typename?: 'CreateAgencyMemberPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  agencyMember?: Maybe<AgencyMember>,
  query?: Maybe<Query>,
  agency?: Maybe<Agency>,
  agencyMemberEdge?: Maybe<AgencyMembersEdge>,
};


export type CreateAgencyMemberPayloadAgencyMemberEdgeArgs = {
  orderBy?: Maybe<Array<AgencyMembersOrderBy>>
};

export type CreateAgencyPayload = {
   __typename?: 'CreateAgencyPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  agency?: Maybe<Agency>,
  query?: Maybe<Query>,
  logo?: Maybe<MediaItem>,
  agencyEdge?: Maybe<AgenciesEdge>,
};


export type CreateAgencyPayloadAgencyEdgeArgs = {
  orderBy?: Maybe<Array<AgenciesOrderBy>>
};

export type CreateAirportInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  airport: AirportInput,
};

export type CreateAirportPayload = {
   __typename?: 'CreateAirportPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  airport?: Maybe<Airport>,
  query?: Maybe<Query>,
  country?: Maybe<Country>,
  airportEdge?: Maybe<AirportsEdge>,
};


export type CreateAirportPayloadAirportEdgeArgs = {
  orderBy?: Maybe<Array<AirportsOrderBy>>
};

export type CreateCountryInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  country: CountryInput,
};

export type CreateCountryPayload = {
   __typename?: 'CreateCountryPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  country?: Maybe<Country>,
  query?: Maybe<Query>,
  countryEdge?: Maybe<CountriesEdge>,
};


export type CreateCountryPayloadCountryEdgeArgs = {
  orderBy?: Maybe<Array<CountriesOrderBy>>
};

export type CreateCustomerInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  customer: CustomerInput,
};

export type CreateCustomerPayload = {
   __typename?: 'CreateCustomerPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  customer?: Maybe<Customer>,
  query?: Maybe<Query>,
  customerEdge?: Maybe<CustomersEdge>,
};


export type CreateCustomerPayloadCustomerEdgeArgs = {
  orderBy?: Maybe<Array<CustomersOrderBy>>
};

export type CreateCustomerTravellerInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  customerTraveller: CustomerTravellerInput,
};

export type CreateCustomerTravellerPayload = {
   __typename?: 'CreateCustomerTravellerPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  customerTraveller?: Maybe<CustomerTraveller>,
  query?: Maybe<Query>,
  customer?: Maybe<Customer>,
  traveller?: Maybe<Traveller>,
  customerTravellerEdge?: Maybe<CustomerTravellersEdge>,
};


export type CreateCustomerTravellerPayloadCustomerTravellerEdgeArgs = {
  orderBy?: Maybe<Array<CustomerTravellersOrderBy>>
};

export type CreateDestinationFeatureInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  destinationFeature: DestinationFeatureInput,
};

export type CreateDestinationFeaturePayload = {
   __typename?: 'CreateDestinationFeaturePayload',
  clientMutationId?: Maybe<Scalars['String']>,
  destinationFeature?: Maybe<DestinationFeature>,
  query?: Maybe<Query>,
  destination?: Maybe<Destination>,
  gallery?: Maybe<MediaGallery>,
  destinationFeatureEdge?: Maybe<DestinationFeaturesEdge>,
};


export type CreateDestinationFeaturePayloadDestinationFeatureEdgeArgs = {
  orderBy?: Maybe<Array<DestinationFeaturesOrderBy>>
};

export type CreateDestinationGuideInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  destinationGuide: DestinationGuideInput,
};

export type CreateDestinationGuidePayload = {
   __typename?: 'CreateDestinationGuidePayload',
  clientMutationId?: Maybe<Scalars['String']>,
  destinationGuide?: Maybe<DestinationGuide>,
  query?: Maybe<Query>,
  destination?: Maybe<Destination>,
  destinationGuideEdge?: Maybe<DestinationGuidesEdge>,
};


export type CreateDestinationGuidePayloadDestinationGuideEdgeArgs = {
  orderBy?: Maybe<Array<DestinationGuidesOrderBy>>
};

export type CreateDestinationInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  destination: DestinationInput,
};

export type CreateDestinationPayload = {
   __typename?: 'CreateDestinationPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  destination?: Maybe<Destination>,
  query?: Maybe<Query>,
  gallery?: Maybe<MediaGallery>,
  parent?: Maybe<Destination>,
  country?: Maybe<Country>,
  destinationEdge?: Maybe<DestinationsEdge>,
};


export type CreateDestinationPayloadDestinationEdgeArgs = {
  orderBy?: Maybe<Array<DestinationsOrderBy>>
};

export type CreateEmailInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  email: EmailInput,
};

export type CreateEmailPayload = {
   __typename?: 'CreateEmailPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  email?: Maybe<Email>,
  query?: Maybe<Query>,
  trip?: Maybe<Trip>,
  user?: Maybe<User>,
  customer?: Maybe<Customer>,
  quote?: Maybe<Quote>,
  emailEdge?: Maybe<EmailsEdge>,
};


export type CreateEmailPayloadEmailEdgeArgs = {
  orderBy?: Maybe<Array<EmailsOrderBy>>
};

export type CreateEnquiryInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  enquiry: EnquiryInput,
};

export type CreateEnquiryPayload = {
   __typename?: 'CreateEnquiryPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  enquiry?: Maybe<Enquiry>,
  query?: Maybe<Query>,
  customer?: Maybe<Customer>,
  trip?: Maybe<Trip>,
  enquiryEdge?: Maybe<EnquiriesEdge>,
};


export type CreateEnquiryPayloadEnquiryEdgeArgs = {
  orderBy?: Maybe<Array<EnquiriesOrderBy>>
};

export type CreateExpenseInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  expense: ExpenseInput,
};

export type CreateExpensePayload = {
   __typename?: 'CreateExpensePayload',
  clientMutationId?: Maybe<Scalars['String']>,
  expense?: Maybe<Expense>,
  query?: Maybe<Query>,
  invoice?: Maybe<Invoice>,
  supplier?: Maybe<Supplier>,
  category?: Maybe<FinanceCategory>,
  supplierInvoice?: Maybe<SupplierInvoice>,
  trip?: Maybe<Trip>,
  expenseEdge?: Maybe<ExpensesEdge>,
};


export type CreateExpensePayloadExpenseEdgeArgs = {
  orderBy?: Maybe<Array<ExpensesOrderBy>>
};

export type CreateFeatureInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  feature: FeatureInput,
};

export type CreateFeaturePayload = {
   __typename?: 'CreateFeaturePayload',
  clientMutationId?: Maybe<Scalars['String']>,
  feature?: Maybe<Feature>,
  query?: Maybe<Query>,
  gallery?: Maybe<MediaGallery>,
  featureEdge?: Maybe<FeaturesEdge>,
};


export type CreateFeaturePayloadFeatureEdgeArgs = {
  orderBy?: Maybe<Array<FeaturesOrderBy>>
};

export type CreateFinanceCategoryInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  financeCategory: FinanceCategoryInput,
};

export type CreateFinanceCategoryPayload = {
   __typename?: 'CreateFinanceCategoryPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  financeCategory?: Maybe<FinanceCategory>,
  query?: Maybe<Query>,
  financeCategoryEdge?: Maybe<FinanceCategoriesEdge>,
};


export type CreateFinanceCategoryPayloadFinanceCategoryEdgeArgs = {
  orderBy?: Maybe<Array<FinanceCategoriesOrderBy>>
};

export type CreateInvoiceInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  invoice: InvoiceInput,
};

export type CreateInvoicePayload = {
   __typename?: 'CreateInvoicePayload',
  clientMutationId?: Maybe<Scalars['String']>,
  invoice?: Maybe<Invoice>,
  query?: Maybe<Query>,
  quote?: Maybe<Quote>,
  category?: Maybe<FinanceCategory>,
  trip?: Maybe<Trip>,
  invoiceEdge?: Maybe<InvoicesEdge>,
};


export type CreateInvoicePayloadInvoiceEdgeArgs = {
  orderBy?: Maybe<Array<InvoicesOrderBy>>
};

export type CreateMapPointInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  mapPoint: MapPointInput,
};

export type CreateMapPointPayload = {
   __typename?: 'CreateMapPointPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  mapPoint?: Maybe<MapPoint>,
  query?: Maybe<Query>,
  mapPointEdge?: Maybe<MapPointsEdge>,
};


export type CreateMapPointPayloadMapPointEdgeArgs = {
  orderBy?: Maybe<Array<MapPointsOrderBy>>
};

export type CreateMediaGalleryInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  mediaGallery: MediaGalleryInput,
};

export type CreateMediaGalleryItemInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  mediaGalleryItem: MediaGalleryItemInput,
};

export type CreateMediaGalleryItemPayload = {
   __typename?: 'CreateMediaGalleryItemPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  mediaGalleryItem?: Maybe<MediaGalleryItem>,
  query?: Maybe<Query>,
  mediaGallery?: Maybe<MediaGallery>,
  mediaItem?: Maybe<MediaItem>,
  mediaGalleryItemEdge?: Maybe<MediaGalleryItemsEdge>,
};


export type CreateMediaGalleryItemPayloadMediaGalleryItemEdgeArgs = {
  orderBy?: Maybe<Array<MediaGalleryItemsOrderBy>>
};

export type CreateMediaGalleryPayload = {
   __typename?: 'CreateMediaGalleryPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  mediaGallery?: Maybe<MediaGallery>,
  query?: Maybe<Query>,
  parent?: Maybe<MediaGallery>,
  mediaGalleryEdge?: Maybe<MediaGalleriesEdge>,
};


export type CreateMediaGalleryPayloadMediaGalleryEdgeArgs = {
  orderBy?: Maybe<Array<MediaGalleriesOrderBy>>
};

export type CreateMediaItemInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  mediaItem: MediaItemInput,
};

export type CreateMediaItemPayload = {
   __typename?: 'CreateMediaItemPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  mediaItem?: Maybe<MediaItem>,
  query?: Maybe<Query>,
  mediaItemEdge?: Maybe<MediaItemsEdge>,
};


export type CreateMediaItemPayloadMediaItemEdgeArgs = {
  orderBy?: Maybe<Array<MediaItemsOrderBy>>
};

export type CreateNoteInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  note: NoteInput,
};

export type CreateNotePayload = {
   __typename?: 'CreateNotePayload',
  clientMutationId?: Maybe<Scalars['String']>,
  note?: Maybe<Note>,
  query?: Maybe<Query>,
  trip?: Maybe<Trip>,
  user?: Maybe<User>,
  noteEdge?: Maybe<NotesEdge>,
};


export type CreateNotePayloadNoteEdgeArgs = {
  orderBy?: Maybe<Array<NotesOrderBy>>
};

export type CreateOutstandingInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  outstanding: OutstandingInput,
};

export type CreateOutstandingPayload = {
   __typename?: 'CreateOutstandingPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  outstanding?: Maybe<Outstanding>,
  query?: Maybe<Query>,
  outstandingEdge?: Maybe<OutstandingsEdge>,
};


export type CreateOutstandingPayloadOutstandingEdgeArgs = {
  orderBy?: Maybe<Array<OutstandingsOrderBy>>
};

export type CreatePassportInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  passport: PassportInput,
};

export type CreatePassportPayload = {
   __typename?: 'CreatePassportPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  passport?: Maybe<Passport>,
  query?: Maybe<Query>,
  traveller?: Maybe<Traveller>,
  passportEdge?: Maybe<PassportsEdge>,
};


export type CreatePassportPayloadPassportEdgeArgs = {
  orderBy?: Maybe<Array<PassportsOrderBy>>
};

export type CreatePaymentInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  payment: PaymentInput,
};

export type CreatePaymentPayload = {
   __typename?: 'CreatePaymentPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  payment?: Maybe<Payment>,
  query?: Maybe<Query>,
  invoice?: Maybe<Invoice>,
  category?: Maybe<FinanceCategory>,
  trip?: Maybe<Trip>,
  paymentEdge?: Maybe<PaymentsEdge>,
};


export type CreatePaymentPayloadPaymentEdgeArgs = {
  orderBy?: Maybe<Array<PaymentsOrderBy>>
};

export type CreatePropertyInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  property: PropertyInput,
};

export type CreatePropertyPayload = {
   __typename?: 'CreatePropertyPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  property?: Maybe<Property>,
  query?: Maybe<Query>,
  gallery?: Maybe<MediaGallery>,
  heroMedia?: Maybe<MediaItem>,
  mapPoint?: Maybe<MapPoint>,
  country?: Maybe<Country>,
  propertyEdge?: Maybe<PropertiesEdge>,
};


export type CreatePropertyPayloadPropertyEdgeArgs = {
  orderBy?: Maybe<Array<PropertiesOrderBy>>
};

export type CreateQuoteAccommodationDetailInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  quoteAccommodationDetail: QuoteAccommodationDetailInput,
};

export type CreateQuoteAccommodationDetailPayload = {
   __typename?: 'CreateQuoteAccommodationDetailPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  quoteAccommodationDetail?: Maybe<QuoteAccommodationDetail>,
  query?: Maybe<Query>,
  property?: Maybe<Property>,
  quote?: Maybe<Quote>,
  quotePublic?: Maybe<QuotePublic>,
  quoteAccommodationDetailEdge?: Maybe<QuoteAccommodationDetailsEdge>,
};


export type CreateQuoteAccommodationDetailPayloadQuoteAccommodationDetailEdgeArgs = {
  orderBy?: Maybe<Array<QuoteAccommodationDetailsOrderBy>>
};

export type CreateQuoteCurrencyInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  quoteCurrency: QuoteCurrencyInput,
};

export type CreateQuoteCurrencyPayload = {
   __typename?: 'CreateQuoteCurrencyPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  quoteCurrency?: Maybe<QuoteCurrency>,
  query?: Maybe<Query>,
  quote?: Maybe<Quote>,
  quoteCurrencyEdge?: Maybe<QuoteCurrenciesEdge>,
};


export type CreateQuoteCurrencyPayloadQuoteCurrencyEdgeArgs = {
  orderBy?: Maybe<Array<QuoteCurrenciesOrderBy>>
};

export type CreateQuoteDayDestinationInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  quoteDayDestination: QuoteDayDestinationInput,
};

export type CreateQuoteDayDestinationPayload = {
   __typename?: 'CreateQuoteDayDestinationPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  quoteDayDestination?: Maybe<QuoteDayDestination>,
  query?: Maybe<Query>,
  destination?: Maybe<Destination>,
  day?: Maybe<QuoteDay>,
  quoteDayDestinationEdge?: Maybe<QuoteDayDestinationsEdge>,
};


export type CreateQuoteDayDestinationPayloadQuoteDayDestinationEdgeArgs = {
  orderBy?: Maybe<Array<QuoteDayDestinationsOrderBy>>
};

export type CreateQuoteDayInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  quoteDay: QuoteDayInput,
};

export type CreateQuoteDayPayload = {
   __typename?: 'CreateQuoteDayPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  quoteDay?: Maybe<QuoteDay>,
  query?: Maybe<Query>,
  accommodation?: Maybe<QuoteAccommodationDetail>,
  quote?: Maybe<Quote>,
  property?: Maybe<Property>,
  quotePublic?: Maybe<QuotePublic>,
  quoteDayEdge?: Maybe<QuoteDaysEdge>,
};


export type CreateQuoteDayPayloadQuoteDayEdgeArgs = {
  orderBy?: Maybe<Array<QuoteDaysOrderBy>>
};

export type CreateQuoteFinanceLineItemInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  quoteFinanceLineItem: QuoteFinanceLineItemInput,
};

export type CreateQuoteFinanceLineItemPayload = {
   __typename?: 'CreateQuoteFinanceLineItemPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  quoteFinanceLineItem?: Maybe<QuoteFinanceLineItem>,
  query?: Maybe<Query>,
  quote?: Maybe<Quote>,
  supplier?: Maybe<Supplier>,
  quoteFinanceLineItemEdge?: Maybe<QuoteFinanceLineItemsEdge>,
};


export type CreateQuoteFinanceLineItemPayloadQuoteFinanceLineItemEdgeArgs = {
  orderBy?: Maybe<Array<QuoteFinanceLineItemsOrderBy>>
};

export type CreateQuoteHeroInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  quoteHero: QuoteHeroInput,
};

export type CreateQuoteHeroPayload = {
   __typename?: 'CreateQuoteHeroPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  quoteHero?: Maybe<QuoteHero>,
  query?: Maybe<Query>,
  image?: Maybe<MediaItem>,
  quoteHeroEdge?: Maybe<QuoteHeroesEdge>,
};


export type CreateQuoteHeroPayloadQuoteHeroEdgeArgs = {
  orderBy?: Maybe<Array<QuoteHeroesOrderBy>>
};

export type CreateQuoteInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  quote: QuoteInput,
};

export type CreateQuotePayload = {
   __typename?: 'CreateQuotePayload',
  clientMutationId?: Maybe<Scalars['String']>,
  quote?: Maybe<Quote>,
  query?: Maybe<Query>,
  trip?: Maybe<Trip>,
  heroImage?: Maybe<MediaItem>,
  hero?: Maybe<QuoteHero>,
  user?: Maybe<User>,
  quoteEdge?: Maybe<QuotesEdge>,
};


export type CreateQuotePayloadQuoteEdgeArgs = {
  orderBy?: Maybe<Array<QuotesOrderBy>>
};

export type CreateQuotePublicInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  quotePublic: QuotePublicInput,
};

export type CreateQuotePublicPayload = {
   __typename?: 'CreateQuotePublicPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  quotePublic?: Maybe<QuotePublic>,
  query?: Maybe<Query>,
  trip?: Maybe<Trip>,
  hero?: Maybe<QuoteHero>,
  user?: Maybe<User>,
  quotePublicEdge?: Maybe<QuotePublicsEdge>,
};


export type CreateQuotePublicPayloadQuotePublicEdgeArgs = {
  orderBy?: Maybe<Array<QuotePublicsOrderBy>>
};

export type CreateQuoteViewInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  quoteView: QuoteViewInput,
};

export type CreateQuoteViewPayload = {
   __typename?: 'CreateQuoteViewPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  quoteView?: Maybe<QuoteView>,
  query?: Maybe<Query>,
  quote?: Maybe<Quote>,
  quoteViewEdge?: Maybe<QuoteViewsEdge>,
};


export type CreateQuoteViewPayloadQuoteViewEdgeArgs = {
  orderBy?: Maybe<Array<QuoteViewsOrderBy>>
};

export type CreateReminderInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  reminder: ReminderInput,
};

export type CreateReminderPayload = {
   __typename?: 'CreateReminderPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  reminder?: Maybe<Reminder>,
  query?: Maybe<Query>,
  user?: Maybe<User>,
  reminderEdge?: Maybe<RemindersEdge>,
};


export type CreateReminderPayloadReminderEdgeArgs = {
  orderBy?: Maybe<Array<RemindersOrderBy>>
};

export type CreateSupplierInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  supplier: SupplierInput,
};

export type CreateSupplierInvoiceInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  supplierInvoice: SupplierInvoiceInput,
};

export type CreateSupplierInvoicePayload = {
   __typename?: 'CreateSupplierInvoicePayload',
  clientMutationId?: Maybe<Scalars['String']>,
  supplierInvoice?: Maybe<SupplierInvoice>,
  query?: Maybe<Query>,
  category?: Maybe<FinanceCategory>,
  supplier?: Maybe<Supplier>,
  trip?: Maybe<Trip>,
  mediaItem?: Maybe<MediaItem>,
  supplierInvoiceEdge?: Maybe<SupplierInvoicesEdge>,
};


export type CreateSupplierInvoicePayloadSupplierInvoiceEdgeArgs = {
  orderBy?: Maybe<Array<SupplierInvoicesOrderBy>>
};

export type CreateSupplierPayload = {
   __typename?: 'CreateSupplierPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  supplier?: Maybe<Supplier>,
  query?: Maybe<Query>,
  gallery?: Maybe<MediaGallery>,
  supplierEdge?: Maybe<SuppliersEdge>,
};


export type CreateSupplierPayloadSupplierEdgeArgs = {
  orderBy?: Maybe<Array<SuppliersOrderBy>>
};

export type CreateTestimonialInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  testimonial: TestimonialInput,
};

export type CreateTestimonialPayload = {
   __typename?: 'CreateTestimonialPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  testimonial?: Maybe<Testimonial>,
  query?: Maybe<Query>,
  trip?: Maybe<Trip>,
  testimonialEdge?: Maybe<TestimonialsEdge>,
};


export type CreateTestimonialPayloadTestimonialEdgeArgs = {
  orderBy?: Maybe<Array<TestimonialsOrderBy>>
};

export type CreateTransactionImportBatchInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  transactionImportBatch: TransactionImportBatchInput,
};

export type CreateTransactionImportBatchPayload = {
   __typename?: 'CreateTransactionImportBatchPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  transactionImportBatch?: Maybe<TransactionImportBatch>,
  query?: Maybe<Query>,
  account?: Maybe<Account>,
  transactionImportBatchEdge?: Maybe<TransactionImportBatchesEdge>,
};


export type CreateTransactionImportBatchPayloadTransactionImportBatchEdgeArgs = {
  orderBy?: Maybe<Array<TransactionImportBatchesOrderBy>>
};

export type CreateTransactionInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  transaction: TransactionInput,
};

export type CreateTransactionLinkInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  transactionLink: TransactionLinkInput,
};

export type CreateTransactionLinkPayload = {
   __typename?: 'CreateTransactionLinkPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  transactionLink?: Maybe<TransactionLink>,
  query?: Maybe<Query>,
  transaction?: Maybe<Transaction>,
  invoice?: Maybe<Invoice>,
  supplierInvoice?: Maybe<SupplierInvoice>,
  payment?: Maybe<Payment>,
  expense?: Maybe<Expense>,
  transactionLinkEdge?: Maybe<TransactionLinksEdge>,
};


export type CreateTransactionLinkPayloadTransactionLinkEdgeArgs = {
  orderBy?: Maybe<Array<TransactionLinksOrderBy>>
};

export type CreateTransactionNoteInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  transactionNote: TransactionNoteInput,
};

export type CreateTransactionNotePayload = {
   __typename?: 'CreateTransactionNotePayload',
  clientMutationId?: Maybe<Scalars['String']>,
  transactionNote?: Maybe<TransactionNote>,
  query?: Maybe<Query>,
  user?: Maybe<User>,
  transaction?: Maybe<Transaction>,
  transactionNoteEdge?: Maybe<TransactionNotesEdge>,
};


export type CreateTransactionNotePayloadTransactionNoteEdgeArgs = {
  orderBy?: Maybe<Array<TransactionNotesOrderBy>>
};

export type CreateTransactionPayload = {
   __typename?: 'CreateTransactionPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  transaction?: Maybe<Transaction>,
  query?: Maybe<Query>,
  account?: Maybe<Account>,
  reverseTransaction?: Maybe<Transaction>,
  transactionImportBatch?: Maybe<TransactionImportBatch>,
  category?: Maybe<FinanceCategory>,
  transactionEdge?: Maybe<TransactionsEdge>,
};


export type CreateTransactionPayloadTransactionEdgeArgs = {
  orderBy?: Maybe<Array<TransactionsOrderBy>>
};

export type CreateTravellerInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  traveller: TravellerInput,
};

export type CreateTravellerPayload = {
   __typename?: 'CreateTravellerPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  traveller?: Maybe<Traveller>,
  query?: Maybe<Query>,
  travellerEdge?: Maybe<TravellersEdge>,
};


export type CreateTravellerPayloadTravellerEdgeArgs = {
  orderBy?: Maybe<Array<TravellersOrderBy>>
};

export type CreateTripFlightInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  tripFlight: TripFlightInput,
};

export type CreateTripFlightPayload = {
   __typename?: 'CreateTripFlightPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  tripFlight?: Maybe<TripFlight>,
  query?: Maybe<Query>,
  trip?: Maybe<Trip>,
  airportByDepartureAirport?: Maybe<Airport>,
  airportByArrivalAirport?: Maybe<Airport>,
  tripFlightEdge?: Maybe<TripFlightsEdge>,
};


export type CreateTripFlightPayloadTripFlightEdgeArgs = {
  orderBy?: Maybe<Array<TripFlightsOrderBy>>
};

export type CreateTripInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  trip: TripInput,
};

export type CreateTripPayload = {
   __typename?: 'CreateTripPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  trip?: Maybe<Trip>,
  query?: Maybe<Query>,
  customer?: Maybe<Customer>,
  user?: Maybe<User>,
  mediaGallery?: Maybe<MediaGallery>,
  activeQuote?: Maybe<Quote>,
  agency?: Maybe<Agency>,
  agencyMember?: Maybe<AgencyMember>,
  tripEdge?: Maybe<TripsEdge>,
};


export type CreateTripPayloadTripEdgeArgs = {
  orderBy?: Maybe<Array<TripsOrderBy>>
};

export type CreateTripTravellerInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  tripTraveller: TripTravellerInput,
};

export type CreateTripTravellerPayload = {
   __typename?: 'CreateTripTravellerPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  tripTraveller?: Maybe<TripTraveller>,
  query?: Maybe<Query>,
  traveller?: Maybe<Traveller>,
  trip?: Maybe<Trip>,
  tripTravellerEdge?: Maybe<TripTravellersEdge>,
};


export type CreateTripTravellerPayloadTripTravellerEdgeArgs = {
  orderBy?: Maybe<Array<TripTravellersOrderBy>>
};

export type CreateUserInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  user: UserInput,
};

export type CreateUserPayload = {
   __typename?: 'CreateUserPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  user?: Maybe<User>,
  query?: Maybe<Query>,
  userEdge?: Maybe<UsersEdge>,
};


export type CreateUserPayloadUserEdgeArgs = {
  orderBy?: Maybe<Array<UsersOrderBy>>
};

export type CreateVisaRequirementInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  visaRequirement: VisaRequirementInput,
};

export type CreateVisaRequirementPayload = {
   __typename?: 'CreateVisaRequirementPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  visaRequirement?: Maybe<VisaRequirement>,
  query?: Maybe<Query>,
  visaRequirementEdge?: Maybe<VisaRequirementsEdge>,
};


export type CreateVisaRequirementPayloadVisaRequirementEdgeArgs = {
  orderBy?: Maybe<Array<VisaRequirementsOrderBy>>
};


export type Customer = Node & {
   __typename?: 'Customer',
  nodeId: Scalars['ID'],
  id: Scalars['UUID'],
  created: Scalars['Datetime'],
  email?: Maybe<Scalars['String']>,
  modified: Scalars['Datetime'],
  name?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  customerTravellers: CustomerTravellersConnection,
  trips: TripsConnection,
  emails: EmailsConnection,
  enquiries: EnquiriesConnection,
};


export type CustomerCustomerTravellersArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<CustomerTravellersOrderBy>>,
  condition?: Maybe<CustomerTravellerCondition>,
  filter?: Maybe<CustomerTravellerFilter>
};


export type CustomerTripsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<TripsOrderBy>>,
  condition?: Maybe<TripCondition>,
  filter?: Maybe<TripFilter>
};


export type CustomerEmailsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<EmailsOrderBy>>,
  condition?: Maybe<EmailCondition>,
  filter?: Maybe<EmailFilter>
};


export type CustomerEnquiriesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<EnquiriesOrderBy>>,
  condition?: Maybe<EnquiryCondition>,
  filter?: Maybe<EnquiryFilter>
};

export type CustomerCondition = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  email?: Maybe<Scalars['String']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
};

export type CustomerFilter = {
  id?: Maybe<UuidFilter>,
  created?: Maybe<DatetimeFilter>,
  email?: Maybe<StringFilter>,
  modified?: Maybe<DatetimeFilter>,
  name?: Maybe<StringFilter>,
  phone?: Maybe<StringFilter>,
  customerTravellers?: Maybe<CustomerToManyCustomerTravellerFilter>,
  customerTravellersExist?: Maybe<Scalars['Boolean']>,
  trips?: Maybe<CustomerToManyTripFilter>,
  tripsExist?: Maybe<Scalars['Boolean']>,
  emails?: Maybe<CustomerToManyEmailFilter>,
  emailsExist?: Maybe<Scalars['Boolean']>,
  enquiries?: Maybe<CustomerToManyEnquiryFilter>,
  enquiriesExist?: Maybe<Scalars['Boolean']>,
  and?: Maybe<Array<CustomerFilter>>,
  or?: Maybe<Array<CustomerFilter>>,
  not?: Maybe<CustomerFilter>,
};

export type CustomerInput = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  email?: Maybe<Scalars['String']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  customerTravellersUsingId?: Maybe<FkCustomerTravellerCustomerCustomerIdInverseInput>,
  tripsUsingId?: Maybe<FkTripCustomerCustomerIdInverseInput>,
  emailsUsingId?: Maybe<FkEmailCustomerCustomerIdInverseInput>,
  enquiriesUsingId?: Maybe<FkEnquiryCustomerCustomerIdInverseInput>,
};

export type CustomerNodeIdConnect = {
  nodeId: Scalars['ID'],
};

export type CustomerNodeIdDelete = {
  nodeId: Scalars['ID'],
};

export type CustomerOnCustomerTravellerForFkCustomerTravellerCustomerCustomerIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: CustomerTravellerPatch,
};

export type CustomerOnCustomerTravellerForFkCustomerTravellerCustomerCustomerIdUsingPkCustomerUpdate = {
  patch: UpdateCustomerOnCustomerTravellerForFkCustomerTravellerCustomerCustomerIdPatch,
  id: Scalars['UUID'],
};

export type CustomerOnEmailForFkEmailCustomerCustomerIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: EmailPatch,
};

export type CustomerOnEmailForFkEmailCustomerCustomerIdUsingPkCustomerUpdate = {
  patch: UpdateCustomerOnEmailForFkEmailCustomerCustomerIdPatch,
  id: Scalars['UUID'],
};

export type CustomerOnEnquiryForFkEnquiryCustomerCustomerIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: EnquiryPatch,
};

export type CustomerOnEnquiryForFkEnquiryCustomerCustomerIdUsingPkCustomerUpdate = {
  patch: UpdateCustomerOnEnquiryForFkEnquiryCustomerCustomerIdPatch,
  id: Scalars['UUID'],
};

export type CustomerOnTripForFkTripCustomerCustomerIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: TripPatch,
};

export type CustomerOnTripForFkTripCustomerCustomerIdUsingPkCustomerUpdate = {
  patch: UpdateCustomerOnTripForFkTripCustomerCustomerIdPatch,
  id: Scalars['UUID'],
};

export type CustomerPatch = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  email?: Maybe<Scalars['String']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  customerTravellersUsingId?: Maybe<FkCustomerTravellerCustomerCustomerIdInverseInput>,
  tripsUsingId?: Maybe<FkTripCustomerCustomerIdInverseInput>,
  emailsUsingId?: Maybe<FkEmailCustomerCustomerIdInverseInput>,
  enquiriesUsingId?: Maybe<FkEnquiryCustomerCustomerIdInverseInput>,
};

export type CustomerPkCustomerConnect = {
  id: Scalars['UUID'],
};

export type CustomerPkCustomerDelete = {
  id: Scalars['UUID'],
};

export type CustomersConnection = {
   __typename?: 'CustomersConnection',
  nodes: Array<Maybe<Customer>>,
  edges: Array<CustomersEdge>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
};

export type CustomersEdge = {
   __typename?: 'CustomersEdge',
  cursor?: Maybe<Scalars['Cursor']>,
  node?: Maybe<Customer>,
};

export enum CustomersOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  PhoneAsc = 'PHONE_ASC',
  PhoneDesc = 'PHONE_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type CustomerToManyCustomerTravellerFilter = {
  every?: Maybe<CustomerTravellerFilter>,
  some?: Maybe<CustomerTravellerFilter>,
  none?: Maybe<CustomerTravellerFilter>,
};

export type CustomerToManyEmailFilter = {
  every?: Maybe<EmailFilter>,
  some?: Maybe<EmailFilter>,
  none?: Maybe<EmailFilter>,
};

export type CustomerToManyEnquiryFilter = {
  every?: Maybe<EnquiryFilter>,
  some?: Maybe<EnquiryFilter>,
  none?: Maybe<EnquiryFilter>,
};

export type CustomerToManyTripFilter = {
  every?: Maybe<TripFilter>,
  some?: Maybe<TripFilter>,
  none?: Maybe<TripFilter>,
};

export type CustomerTraveller = Node & {
   __typename?: 'CustomerTraveller',
  nodeId: Scalars['ID'],
  id: Scalars['UUID'],
  created: Scalars['Datetime'],
  customerId: Scalars['UUID'],
  modified: Scalars['Datetime'],
  travellerId: Scalars['UUID'],
  customer?: Maybe<Customer>,
  traveller?: Maybe<Traveller>,
};

export type CustomerTravellerCondition = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  customerId?: Maybe<Scalars['UUID']>,
  modified?: Maybe<Scalars['Datetime']>,
  travellerId?: Maybe<Scalars['UUID']>,
};

export type CustomerTravellerFilter = {
  id?: Maybe<UuidFilter>,
  created?: Maybe<DatetimeFilter>,
  customerId?: Maybe<UuidFilter>,
  modified?: Maybe<DatetimeFilter>,
  travellerId?: Maybe<UuidFilter>,
  customer?: Maybe<CustomerFilter>,
  traveller?: Maybe<TravellerFilter>,
  and?: Maybe<Array<CustomerTravellerFilter>>,
  or?: Maybe<Array<CustomerTravellerFilter>>,
  not?: Maybe<CustomerTravellerFilter>,
};

export type CustomerTravellerInput = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  customerId?: Maybe<Scalars['UUID']>,
  modified?: Maybe<Scalars['Datetime']>,
  travellerId?: Maybe<Scalars['UUID']>,
  customerToCustomerId?: Maybe<FkCustomerTravellerCustomerCustomerIdInput>,
  travellerToTravellerId?: Maybe<FkCustomerTravellerTravellerTravellerIdInput>,
};

export type CustomerTravellerNodeIdConnect = {
  nodeId: Scalars['ID'],
};

export type CustomerTravellerNodeIdDelete = {
  nodeId: Scalars['ID'],
};

export type CustomerTravellerOnCustomerTravellerForFkCustomerTravellerCustomerCustomerIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: CustomerPatch,
};

export type CustomerTravellerOnCustomerTravellerForFkCustomerTravellerCustomerCustomerIdUsingPkCustomerTravellerUpdate = {
  patch: UpdateCustomerTravellerOnCustomerTravellerForFkCustomerTravellerCustomerCustomerIdPatch,
  id: Scalars['UUID'],
};

export type CustomerTravellerOnCustomerTravellerForFkCustomerTravellerTravellerTravellerIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: TravellerPatch,
};

export type CustomerTravellerOnCustomerTravellerForFkCustomerTravellerTravellerTravellerIdUsingPkCustomerTravellerUpdate = {
  patch: UpdateCustomerTravellerOnCustomerTravellerForFkCustomerTravellerTravellerTravellerIdPatch,
  id: Scalars['UUID'],
};

export type CustomerTravellerPatch = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  customerId?: Maybe<Scalars['UUID']>,
  modified?: Maybe<Scalars['Datetime']>,
  travellerId?: Maybe<Scalars['UUID']>,
  customerToCustomerId?: Maybe<FkCustomerTravellerCustomerCustomerIdInput>,
  travellerToTravellerId?: Maybe<FkCustomerTravellerTravellerTravellerIdInput>,
};

export type CustomerTravellerPkCustomerTravellerConnect = {
  id: Scalars['UUID'],
};

export type CustomerTravellerPkCustomerTravellerDelete = {
  id: Scalars['UUID'],
};

export type CustomerTravellersConnection = {
   __typename?: 'CustomerTravellersConnection',
  nodes: Array<Maybe<CustomerTraveller>>,
  edges: Array<CustomerTravellersEdge>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
};

export type CustomerTravellersEdge = {
   __typename?: 'CustomerTravellersEdge',
  cursor?: Maybe<Scalars['Cursor']>,
  node?: Maybe<CustomerTraveller>,
};

export enum CustomerTravellersOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  CustomerIdAsc = 'CUSTOMER_ID_ASC',
  CustomerIdDesc = 'CUSTOMER_ID_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC',
  TravellerIdAsc = 'TRAVELLER_ID_ASC',
  TravellerIdDesc = 'TRAVELLER_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type DashboardSummariesConnection = {
   __typename?: 'DashboardSummariesConnection',
  nodes: Array<Maybe<DashboardSummary>>,
  edges: Array<DashboardSummariesEdge>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
};

export type DashboardSummariesEdge = {
   __typename?: 'DashboardSummariesEdge',
  cursor?: Maybe<Scalars['Cursor']>,
  node?: Maybe<DashboardSummary>,
};

export enum DashboardSummariesOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  DateAsc = 'DATE_ASC',
  DateDesc = 'DATE_DESC',
  TypeAsc = 'TYPE_ASC',
  TypeDesc = 'TYPE_DESC',
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  ValueAsc = 'VALUE_ASC',
  ValueDesc = 'VALUE_DESC',
  ActionedAsc = 'ACTIONED_ASC',
  ActionedDesc = 'ACTIONED_DESC'
}

export type DashboardSummary = {
   __typename?: 'DashboardSummary',
  id?: Maybe<Scalars['UUID']>,
  date?: Maybe<Scalars['Datetime']>,
  type?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  value?: Maybe<Scalars['BigFloat']>,
  actioned?: Maybe<Scalars['Boolean']>,
};

export type DashboardSummaryCondition = {
  id?: Maybe<Scalars['UUID']>,
  date?: Maybe<Scalars['Datetime']>,
  type?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  value?: Maybe<Scalars['BigFloat']>,
  actioned?: Maybe<Scalars['Boolean']>,
};

export type DashboardSummaryFilter = {
  id?: Maybe<UuidFilter>,
  date?: Maybe<DatetimeFilter>,
  type?: Maybe<StringFilter>,
  description?: Maybe<StringFilter>,
  value?: Maybe<BigFloatFilter>,
  actioned?: Maybe<BooleanFilter>,
  and?: Maybe<Array<DashboardSummaryFilter>>,
  or?: Maybe<Array<DashboardSummaryFilter>>,
  not?: Maybe<DashboardSummaryFilter>,
};


export type DatetimeFilter = {
  isNull?: Maybe<Scalars['Boolean']>,
  equalTo?: Maybe<Scalars['Datetime']>,
  notEqualTo?: Maybe<Scalars['Datetime']>,
  distinctFrom?: Maybe<Scalars['Datetime']>,
  notDistinctFrom?: Maybe<Scalars['Datetime']>,
  in?: Maybe<Array<Scalars['Datetime']>>,
  notIn?: Maybe<Array<Scalars['Datetime']>>,
  lessThan?: Maybe<Scalars['Datetime']>,
  lessThanOrEqualTo?: Maybe<Scalars['Datetime']>,
  greaterThan?: Maybe<Scalars['Datetime']>,
  greaterThanOrEqualTo?: Maybe<Scalars['Datetime']>,
};

export type DateWeekInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  date?: Maybe<Scalars['Datetime']>,
};

export type DateWeekPayload = {
   __typename?: 'DateWeekPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  string?: Maybe<Scalars['String']>,
  query?: Maybe<Query>,
};

export type DeleteAccountByNodeIdInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
};

export type DeleteAccountInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  id: Scalars['UUID'],
};

export type DeleteAccountPayload = {
   __typename?: 'DeleteAccountPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  account?: Maybe<Account>,
  deletedAccountNodeId?: Maybe<Scalars['ID']>,
  query?: Maybe<Query>,
  accountEdge?: Maybe<AccountsEdge>,
};


export type DeleteAccountPayloadAccountEdgeArgs = {
  orderBy?: Maybe<Array<AccountsOrderBy>>
};

export type DeleteAgencyByNodeIdInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
};

export type DeleteAgencyInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  id: Scalars['UUID'],
};

export type DeleteAgencyMemberByNodeIdInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
};

export type DeleteAgencyMemberInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  id: Scalars['UUID'],
};

export type DeleteAgencyMemberPayload = {
   __typename?: 'DeleteAgencyMemberPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  agencyMember?: Maybe<AgencyMember>,
  deletedAgencyMemberNodeId?: Maybe<Scalars['ID']>,
  query?: Maybe<Query>,
  agency?: Maybe<Agency>,
  agencyMemberEdge?: Maybe<AgencyMembersEdge>,
};


export type DeleteAgencyMemberPayloadAgencyMemberEdgeArgs = {
  orderBy?: Maybe<Array<AgencyMembersOrderBy>>
};

export type DeleteAgencyPayload = {
   __typename?: 'DeleteAgencyPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  agency?: Maybe<Agency>,
  deletedAgencyNodeId?: Maybe<Scalars['ID']>,
  query?: Maybe<Query>,
  logo?: Maybe<MediaItem>,
  agencyEdge?: Maybe<AgenciesEdge>,
};


export type DeleteAgencyPayloadAgencyEdgeArgs = {
  orderBy?: Maybe<Array<AgenciesOrderBy>>
};

export type DeleteAirportByNodeIdInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
};

export type DeleteAirportInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  id: Scalars['UUID'],
};

export type DeleteAirportPayload = {
   __typename?: 'DeleteAirportPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  airport?: Maybe<Airport>,
  deletedAirportNodeId?: Maybe<Scalars['ID']>,
  query?: Maybe<Query>,
  country?: Maybe<Country>,
  airportEdge?: Maybe<AirportsEdge>,
};


export type DeleteAirportPayloadAirportEdgeArgs = {
  orderBy?: Maybe<Array<AirportsOrderBy>>
};

export type DeleteCountryByNodeIdInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
};

export type DeleteCountryInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  id: Scalars['UUID'],
};

export type DeleteCountryPayload = {
   __typename?: 'DeleteCountryPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  country?: Maybe<Country>,
  deletedCountryNodeId?: Maybe<Scalars['ID']>,
  query?: Maybe<Query>,
  countryEdge?: Maybe<CountriesEdge>,
};


export type DeleteCountryPayloadCountryEdgeArgs = {
  orderBy?: Maybe<Array<CountriesOrderBy>>
};

export type DeleteCustomerByNodeIdInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
};

export type DeleteCustomerInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  id: Scalars['UUID'],
};

export type DeleteCustomerPayload = {
   __typename?: 'DeleteCustomerPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  customer?: Maybe<Customer>,
  deletedCustomerNodeId?: Maybe<Scalars['ID']>,
  query?: Maybe<Query>,
  customerEdge?: Maybe<CustomersEdge>,
};


export type DeleteCustomerPayloadCustomerEdgeArgs = {
  orderBy?: Maybe<Array<CustomersOrderBy>>
};

export type DeleteCustomerTravellerByNodeIdInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
};

export type DeleteCustomerTravellerInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  id: Scalars['UUID'],
};

export type DeleteCustomerTravellerPayload = {
   __typename?: 'DeleteCustomerTravellerPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  customerTraveller?: Maybe<CustomerTraveller>,
  deletedCustomerTravellerNodeId?: Maybe<Scalars['ID']>,
  query?: Maybe<Query>,
  customer?: Maybe<Customer>,
  traveller?: Maybe<Traveller>,
  customerTravellerEdge?: Maybe<CustomerTravellersEdge>,
};


export type DeleteCustomerTravellerPayloadCustomerTravellerEdgeArgs = {
  orderBy?: Maybe<Array<CustomerTravellersOrderBy>>
};

export type DeleteDestinationByNodeIdInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
};

export type DeleteDestinationFeatureByNodeIdInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
};

export type DeleteDestinationFeatureInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  id: Scalars['UUID'],
};

export type DeleteDestinationFeaturePayload = {
   __typename?: 'DeleteDestinationFeaturePayload',
  clientMutationId?: Maybe<Scalars['String']>,
  destinationFeature?: Maybe<DestinationFeature>,
  deletedDestinationFeatureNodeId?: Maybe<Scalars['ID']>,
  query?: Maybe<Query>,
  destination?: Maybe<Destination>,
  gallery?: Maybe<MediaGallery>,
  destinationFeatureEdge?: Maybe<DestinationFeaturesEdge>,
};


export type DeleteDestinationFeaturePayloadDestinationFeatureEdgeArgs = {
  orderBy?: Maybe<Array<DestinationFeaturesOrderBy>>
};

export type DeleteDestinationGuideByNodeIdInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
};

export type DeleteDestinationGuideInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  id: Scalars['UUID'],
};

export type DeleteDestinationGuidePayload = {
   __typename?: 'DeleteDestinationGuidePayload',
  clientMutationId?: Maybe<Scalars['String']>,
  destinationGuide?: Maybe<DestinationGuide>,
  deletedDestinationGuideNodeId?: Maybe<Scalars['ID']>,
  query?: Maybe<Query>,
  destination?: Maybe<Destination>,
  destinationGuideEdge?: Maybe<DestinationGuidesEdge>,
};


export type DeleteDestinationGuidePayloadDestinationGuideEdgeArgs = {
  orderBy?: Maybe<Array<DestinationGuidesOrderBy>>
};

export type DeleteDestinationInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  id: Scalars['UUID'],
};

export type DeleteDestinationPayload = {
   __typename?: 'DeleteDestinationPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  destination?: Maybe<Destination>,
  deletedDestinationNodeId?: Maybe<Scalars['ID']>,
  query?: Maybe<Query>,
  gallery?: Maybe<MediaGallery>,
  parent?: Maybe<Destination>,
  country?: Maybe<Country>,
  destinationEdge?: Maybe<DestinationsEdge>,
};


export type DeleteDestinationPayloadDestinationEdgeArgs = {
  orderBy?: Maybe<Array<DestinationsOrderBy>>
};

export type DeleteEmailByNodeIdInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
};

export type DeleteEmailInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  id: Scalars['UUID'],
};

export type DeleteEmailPayload = {
   __typename?: 'DeleteEmailPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  email?: Maybe<Email>,
  deletedEmailNodeId?: Maybe<Scalars['ID']>,
  query?: Maybe<Query>,
  trip?: Maybe<Trip>,
  user?: Maybe<User>,
  customer?: Maybe<Customer>,
  quote?: Maybe<Quote>,
  emailEdge?: Maybe<EmailsEdge>,
};


export type DeleteEmailPayloadEmailEdgeArgs = {
  orderBy?: Maybe<Array<EmailsOrderBy>>
};

export type DeleteEnquiryByNodeIdInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
};

export type DeleteEnquiryInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  id: Scalars['UUID'],
};

export type DeleteEnquiryPayload = {
   __typename?: 'DeleteEnquiryPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  enquiry?: Maybe<Enquiry>,
  deletedEnquiryNodeId?: Maybe<Scalars['ID']>,
  query?: Maybe<Query>,
  customer?: Maybe<Customer>,
  trip?: Maybe<Trip>,
  enquiryEdge?: Maybe<EnquiriesEdge>,
};


export type DeleteEnquiryPayloadEnquiryEdgeArgs = {
  orderBy?: Maybe<Array<EnquiriesOrderBy>>
};

export type DeleteExpenseByNodeIdInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
};

export type DeleteExpenseInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  id: Scalars['UUID'],
};

export type DeleteExpensePayload = {
   __typename?: 'DeleteExpensePayload',
  clientMutationId?: Maybe<Scalars['String']>,
  expense?: Maybe<Expense>,
  deletedExpenseNodeId?: Maybe<Scalars['ID']>,
  query?: Maybe<Query>,
  invoice?: Maybe<Invoice>,
  supplier?: Maybe<Supplier>,
  category?: Maybe<FinanceCategory>,
  supplierInvoice?: Maybe<SupplierInvoice>,
  trip?: Maybe<Trip>,
  expenseEdge?: Maybe<ExpensesEdge>,
};


export type DeleteExpensePayloadExpenseEdgeArgs = {
  orderBy?: Maybe<Array<ExpensesOrderBy>>
};

export type DeleteFeatureByNodeIdInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
};

export type DeleteFeatureInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  id: Scalars['UUID'],
};

export type DeleteFeaturePayload = {
   __typename?: 'DeleteFeaturePayload',
  clientMutationId?: Maybe<Scalars['String']>,
  feature?: Maybe<Feature>,
  deletedFeatureNodeId?: Maybe<Scalars['ID']>,
  query?: Maybe<Query>,
  gallery?: Maybe<MediaGallery>,
  featureEdge?: Maybe<FeaturesEdge>,
};


export type DeleteFeaturePayloadFeatureEdgeArgs = {
  orderBy?: Maybe<Array<FeaturesOrderBy>>
};

export type DeleteFinanceCategoryByNodeIdInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
};

export type DeleteFinanceCategoryInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  id: Scalars['UUID'],
};

export type DeleteFinanceCategoryPayload = {
   __typename?: 'DeleteFinanceCategoryPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  financeCategory?: Maybe<FinanceCategory>,
  deletedFinanceCategoryNodeId?: Maybe<Scalars['ID']>,
  query?: Maybe<Query>,
  financeCategoryEdge?: Maybe<FinanceCategoriesEdge>,
};


export type DeleteFinanceCategoryPayloadFinanceCategoryEdgeArgs = {
  orderBy?: Maybe<Array<FinanceCategoriesOrderBy>>
};

export type DeleteInvoiceByNodeIdInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
};

export type DeleteInvoiceInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  id: Scalars['UUID'],
};

export type DeleteInvoicePayload = {
   __typename?: 'DeleteInvoicePayload',
  clientMutationId?: Maybe<Scalars['String']>,
  invoice?: Maybe<Invoice>,
  deletedInvoiceNodeId?: Maybe<Scalars['ID']>,
  query?: Maybe<Query>,
  quote?: Maybe<Quote>,
  category?: Maybe<FinanceCategory>,
  trip?: Maybe<Trip>,
  invoiceEdge?: Maybe<InvoicesEdge>,
};


export type DeleteInvoicePayloadInvoiceEdgeArgs = {
  orderBy?: Maybe<Array<InvoicesOrderBy>>
};

export type DeleteMapPointByNodeIdInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
};

export type DeleteMapPointInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  id: Scalars['UUID'],
};

export type DeleteMapPointPayload = {
   __typename?: 'DeleteMapPointPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  mapPoint?: Maybe<MapPoint>,
  deletedMapPointNodeId?: Maybe<Scalars['ID']>,
  query?: Maybe<Query>,
  mapPointEdge?: Maybe<MapPointsEdge>,
};


export type DeleteMapPointPayloadMapPointEdgeArgs = {
  orderBy?: Maybe<Array<MapPointsOrderBy>>
};

export type DeleteMediaGalleryByNodeIdInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
};

export type DeleteMediaGalleryInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  id: Scalars['UUID'],
};

export type DeleteMediaGalleryItemByNodeIdInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
};

export type DeleteMediaGalleryItemInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  id: Scalars['UUID'],
};

export type DeleteMediaGalleryItemPayload = {
   __typename?: 'DeleteMediaGalleryItemPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  mediaGalleryItem?: Maybe<MediaGalleryItem>,
  deletedMediaGalleryItemNodeId?: Maybe<Scalars['ID']>,
  query?: Maybe<Query>,
  mediaGallery?: Maybe<MediaGallery>,
  mediaItem?: Maybe<MediaItem>,
  mediaGalleryItemEdge?: Maybe<MediaGalleryItemsEdge>,
};


export type DeleteMediaGalleryItemPayloadMediaGalleryItemEdgeArgs = {
  orderBy?: Maybe<Array<MediaGalleryItemsOrderBy>>
};

export type DeleteMediaGalleryPayload = {
   __typename?: 'DeleteMediaGalleryPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  mediaGallery?: Maybe<MediaGallery>,
  deletedMediaGalleryNodeId?: Maybe<Scalars['ID']>,
  query?: Maybe<Query>,
  parent?: Maybe<MediaGallery>,
  mediaGalleryEdge?: Maybe<MediaGalleriesEdge>,
};


export type DeleteMediaGalleryPayloadMediaGalleryEdgeArgs = {
  orderBy?: Maybe<Array<MediaGalleriesOrderBy>>
};

export type DeleteMediaItemByNodeIdInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
};

export type DeleteMediaItemInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  id: Scalars['UUID'],
};

export type DeleteMediaItemPayload = {
   __typename?: 'DeleteMediaItemPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  mediaItem?: Maybe<MediaItem>,
  deletedMediaItemNodeId?: Maybe<Scalars['ID']>,
  query?: Maybe<Query>,
  mediaItemEdge?: Maybe<MediaItemsEdge>,
};


export type DeleteMediaItemPayloadMediaItemEdgeArgs = {
  orderBy?: Maybe<Array<MediaItemsOrderBy>>
};

export type DeleteNoteByNodeIdInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
};

export type DeleteNoteInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  id: Scalars['UUID'],
};

export type DeleteNotePayload = {
   __typename?: 'DeleteNotePayload',
  clientMutationId?: Maybe<Scalars['String']>,
  note?: Maybe<Note>,
  deletedNoteNodeId?: Maybe<Scalars['ID']>,
  query?: Maybe<Query>,
  trip?: Maybe<Trip>,
  user?: Maybe<User>,
  noteEdge?: Maybe<NotesEdge>,
};


export type DeleteNotePayloadNoteEdgeArgs = {
  orderBy?: Maybe<Array<NotesOrderBy>>
};

export type DeletePassportByNodeIdInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
};

export type DeletePassportInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  id: Scalars['UUID'],
};

export type DeletePassportPayload = {
   __typename?: 'DeletePassportPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  passport?: Maybe<Passport>,
  deletedPassportNodeId?: Maybe<Scalars['ID']>,
  query?: Maybe<Query>,
  traveller?: Maybe<Traveller>,
  passportEdge?: Maybe<PassportsEdge>,
};


export type DeletePassportPayloadPassportEdgeArgs = {
  orderBy?: Maybe<Array<PassportsOrderBy>>
};

export type DeletePaymentByNodeIdInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
};

export type DeletePaymentInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  id: Scalars['UUID'],
};

export type DeletePaymentPayload = {
   __typename?: 'DeletePaymentPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  payment?: Maybe<Payment>,
  deletedPaymentNodeId?: Maybe<Scalars['ID']>,
  query?: Maybe<Query>,
  invoice?: Maybe<Invoice>,
  category?: Maybe<FinanceCategory>,
  trip?: Maybe<Trip>,
  paymentEdge?: Maybe<PaymentsEdge>,
};


export type DeletePaymentPayloadPaymentEdgeArgs = {
  orderBy?: Maybe<Array<PaymentsOrderBy>>
};

export type DeletePropertyByNodeIdInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
};

export type DeletePropertyInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  id: Scalars['UUID'],
};

export type DeletePropertyPayload = {
   __typename?: 'DeletePropertyPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  property?: Maybe<Property>,
  deletedPropertyNodeId?: Maybe<Scalars['ID']>,
  query?: Maybe<Query>,
  gallery?: Maybe<MediaGallery>,
  heroMedia?: Maybe<MediaItem>,
  mapPoint?: Maybe<MapPoint>,
  country?: Maybe<Country>,
  propertyEdge?: Maybe<PropertiesEdge>,
};


export type DeletePropertyPayloadPropertyEdgeArgs = {
  orderBy?: Maybe<Array<PropertiesOrderBy>>
};

export type DeleteQuoteAccommodationDetailByNodeIdInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
};

export type DeleteQuoteAccommodationDetailInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  id: Scalars['UUID'],
};

export type DeleteQuoteAccommodationDetailPayload = {
   __typename?: 'DeleteQuoteAccommodationDetailPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  quoteAccommodationDetail?: Maybe<QuoteAccommodationDetail>,
  deletedQuoteAccommodationDetailNodeId?: Maybe<Scalars['ID']>,
  query?: Maybe<Query>,
  property?: Maybe<Property>,
  quote?: Maybe<Quote>,
  quotePublic?: Maybe<QuotePublic>,
  quoteAccommodationDetailEdge?: Maybe<QuoteAccommodationDetailsEdge>,
};


export type DeleteQuoteAccommodationDetailPayloadQuoteAccommodationDetailEdgeArgs = {
  orderBy?: Maybe<Array<QuoteAccommodationDetailsOrderBy>>
};

export type DeleteQuoteByNodeIdInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
};

export type DeleteQuoteCurrencyByNodeIdInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
};

export type DeleteQuoteCurrencyInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  id: Scalars['UUID'],
};

export type DeleteQuoteCurrencyPayload = {
   __typename?: 'DeleteQuoteCurrencyPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  quoteCurrency?: Maybe<QuoteCurrency>,
  deletedQuoteCurrencyNodeId?: Maybe<Scalars['ID']>,
  query?: Maybe<Query>,
  quote?: Maybe<Quote>,
  quoteCurrencyEdge?: Maybe<QuoteCurrenciesEdge>,
};


export type DeleteQuoteCurrencyPayloadQuoteCurrencyEdgeArgs = {
  orderBy?: Maybe<Array<QuoteCurrenciesOrderBy>>
};

export type DeleteQuoteDayByNodeIdInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
};

export type DeleteQuoteDayDestinationByNodeIdInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
};

export type DeleteQuoteDayDestinationInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  id: Scalars['UUID'],
};

export type DeleteQuoteDayDestinationPayload = {
   __typename?: 'DeleteQuoteDayDestinationPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  quoteDayDestination?: Maybe<QuoteDayDestination>,
  deletedQuoteDayDestinationNodeId?: Maybe<Scalars['ID']>,
  query?: Maybe<Query>,
  destination?: Maybe<Destination>,
  day?: Maybe<QuoteDay>,
  quoteDayDestinationEdge?: Maybe<QuoteDayDestinationsEdge>,
};


export type DeleteQuoteDayDestinationPayloadQuoteDayDestinationEdgeArgs = {
  orderBy?: Maybe<Array<QuoteDayDestinationsOrderBy>>
};

export type DeleteQuoteDayInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  id: Scalars['UUID'],
};

export type DeleteQuoteDayPayload = {
   __typename?: 'DeleteQuoteDayPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  quoteDay?: Maybe<QuoteDay>,
  deletedQuoteDayNodeId?: Maybe<Scalars['ID']>,
  query?: Maybe<Query>,
  accommodation?: Maybe<QuoteAccommodationDetail>,
  quote?: Maybe<Quote>,
  property?: Maybe<Property>,
  quotePublic?: Maybe<QuotePublic>,
  quoteDayEdge?: Maybe<QuoteDaysEdge>,
};


export type DeleteQuoteDayPayloadQuoteDayEdgeArgs = {
  orderBy?: Maybe<Array<QuoteDaysOrderBy>>
};

export type DeleteQuoteFinanceLineItemByNodeIdInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
};

export type DeleteQuoteFinanceLineItemInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  id: Scalars['UUID'],
};

export type DeleteQuoteFinanceLineItemPayload = {
   __typename?: 'DeleteQuoteFinanceLineItemPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  quoteFinanceLineItem?: Maybe<QuoteFinanceLineItem>,
  deletedQuoteFinanceLineItemNodeId?: Maybe<Scalars['ID']>,
  query?: Maybe<Query>,
  quote?: Maybe<Quote>,
  supplier?: Maybe<Supplier>,
  quoteFinanceLineItemEdge?: Maybe<QuoteFinanceLineItemsEdge>,
};


export type DeleteQuoteFinanceLineItemPayloadQuoteFinanceLineItemEdgeArgs = {
  orderBy?: Maybe<Array<QuoteFinanceLineItemsOrderBy>>
};

export type DeleteQuoteHeroByNodeIdInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
};

export type DeleteQuoteHeroInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  id: Scalars['UUID'],
};

export type DeleteQuoteHeroPayload = {
   __typename?: 'DeleteQuoteHeroPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  quoteHero?: Maybe<QuoteHero>,
  deletedQuoteHeroNodeId?: Maybe<Scalars['ID']>,
  query?: Maybe<Query>,
  image?: Maybe<MediaItem>,
  quoteHeroEdge?: Maybe<QuoteHeroesEdge>,
};


export type DeleteQuoteHeroPayloadQuoteHeroEdgeArgs = {
  orderBy?: Maybe<Array<QuoteHeroesOrderBy>>
};

export type DeleteQuoteInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  id: Scalars['UUID'],
};

export type DeleteQuotePayload = {
   __typename?: 'DeleteQuotePayload',
  clientMutationId?: Maybe<Scalars['String']>,
  quote?: Maybe<Quote>,
  deletedQuoteNodeId?: Maybe<Scalars['ID']>,
  query?: Maybe<Query>,
  trip?: Maybe<Trip>,
  heroImage?: Maybe<MediaItem>,
  hero?: Maybe<QuoteHero>,
  user?: Maybe<User>,
  quoteEdge?: Maybe<QuotesEdge>,
};


export type DeleteQuotePayloadQuoteEdgeArgs = {
  orderBy?: Maybe<Array<QuotesOrderBy>>
};

export type DeleteQuotePublicByNodeIdInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
};

export type DeleteQuotePublicInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  key: Scalars['String'],
};

export type DeleteQuotePublicPayload = {
   __typename?: 'DeleteQuotePublicPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  quotePublic?: Maybe<QuotePublic>,
  deletedQuotePublicNodeId?: Maybe<Scalars['ID']>,
  query?: Maybe<Query>,
  trip?: Maybe<Trip>,
  hero?: Maybe<QuoteHero>,
  user?: Maybe<User>,
  quotePublicEdge?: Maybe<QuotePublicsEdge>,
};


export type DeleteQuotePublicPayloadQuotePublicEdgeArgs = {
  orderBy?: Maybe<Array<QuotePublicsOrderBy>>
};

export type DeleteQuoteViewByNodeIdInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
};

export type DeleteQuoteViewInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  id: Scalars['UUID'],
};

export type DeleteQuoteViewPayload = {
   __typename?: 'DeleteQuoteViewPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  quoteView?: Maybe<QuoteView>,
  deletedQuoteViewNodeId?: Maybe<Scalars['ID']>,
  query?: Maybe<Query>,
  quote?: Maybe<Quote>,
  quoteViewEdge?: Maybe<QuoteViewsEdge>,
};


export type DeleteQuoteViewPayloadQuoteViewEdgeArgs = {
  orderBy?: Maybe<Array<QuoteViewsOrderBy>>
};

export type DeleteReminderByNodeIdInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
};

export type DeleteReminderInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  id: Scalars['UUID'],
};

export type DeleteReminderPayload = {
   __typename?: 'DeleteReminderPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  reminder?: Maybe<Reminder>,
  deletedReminderNodeId?: Maybe<Scalars['ID']>,
  query?: Maybe<Query>,
  user?: Maybe<User>,
  reminderEdge?: Maybe<RemindersEdge>,
};


export type DeleteReminderPayloadReminderEdgeArgs = {
  orderBy?: Maybe<Array<RemindersOrderBy>>
};

export type DeleteSupplierByNodeIdInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
};

export type DeleteSupplierInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  id: Scalars['UUID'],
};

export type DeleteSupplierInvoiceByNodeIdInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
};

export type DeleteSupplierInvoiceInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  id: Scalars['UUID'],
};

export type DeleteSupplierInvoicePayload = {
   __typename?: 'DeleteSupplierInvoicePayload',
  clientMutationId?: Maybe<Scalars['String']>,
  supplierInvoice?: Maybe<SupplierInvoice>,
  deletedSupplierInvoiceNodeId?: Maybe<Scalars['ID']>,
  query?: Maybe<Query>,
  category?: Maybe<FinanceCategory>,
  supplier?: Maybe<Supplier>,
  trip?: Maybe<Trip>,
  mediaItem?: Maybe<MediaItem>,
  supplierInvoiceEdge?: Maybe<SupplierInvoicesEdge>,
};


export type DeleteSupplierInvoicePayloadSupplierInvoiceEdgeArgs = {
  orderBy?: Maybe<Array<SupplierInvoicesOrderBy>>
};

export type DeleteSupplierPayload = {
   __typename?: 'DeleteSupplierPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  supplier?: Maybe<Supplier>,
  deletedSupplierNodeId?: Maybe<Scalars['ID']>,
  query?: Maybe<Query>,
  gallery?: Maybe<MediaGallery>,
  supplierEdge?: Maybe<SuppliersEdge>,
};


export type DeleteSupplierPayloadSupplierEdgeArgs = {
  orderBy?: Maybe<Array<SuppliersOrderBy>>
};

export type DeleteTestimonialByNodeIdInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
};

export type DeleteTestimonialInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  id: Scalars['UUID'],
};

export type DeleteTestimonialPayload = {
   __typename?: 'DeleteTestimonialPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  testimonial?: Maybe<Testimonial>,
  deletedTestimonialNodeId?: Maybe<Scalars['ID']>,
  query?: Maybe<Query>,
  trip?: Maybe<Trip>,
  testimonialEdge?: Maybe<TestimonialsEdge>,
};


export type DeleteTestimonialPayloadTestimonialEdgeArgs = {
  orderBy?: Maybe<Array<TestimonialsOrderBy>>
};

export type DeleteTransactionByNodeIdInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
};

export type DeleteTransactionImportBatchByNodeIdInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
};

export type DeleteTransactionImportBatchInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  id: Scalars['UUID'],
};

export type DeleteTransactionImportBatchPayload = {
   __typename?: 'DeleteTransactionImportBatchPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  transactionImportBatch?: Maybe<TransactionImportBatch>,
  deletedTransactionImportBatchNodeId?: Maybe<Scalars['ID']>,
  query?: Maybe<Query>,
  account?: Maybe<Account>,
  transactionImportBatchEdge?: Maybe<TransactionImportBatchesEdge>,
};


export type DeleteTransactionImportBatchPayloadTransactionImportBatchEdgeArgs = {
  orderBy?: Maybe<Array<TransactionImportBatchesOrderBy>>
};

export type DeleteTransactionInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  id: Scalars['UUID'],
};

export type DeleteTransactionLinkByNodeIdInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
};

export type DeleteTransactionLinkInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  id: Scalars['UUID'],
};

export type DeleteTransactionLinkPayload = {
   __typename?: 'DeleteTransactionLinkPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  transactionLink?: Maybe<TransactionLink>,
  deletedTransactionLinkNodeId?: Maybe<Scalars['ID']>,
  query?: Maybe<Query>,
  transaction?: Maybe<Transaction>,
  invoice?: Maybe<Invoice>,
  supplierInvoice?: Maybe<SupplierInvoice>,
  payment?: Maybe<Payment>,
  expense?: Maybe<Expense>,
  transactionLinkEdge?: Maybe<TransactionLinksEdge>,
};


export type DeleteTransactionLinkPayloadTransactionLinkEdgeArgs = {
  orderBy?: Maybe<Array<TransactionLinksOrderBy>>
};

export type DeleteTransactionNoteByNodeIdInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
};

export type DeleteTransactionNoteInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  id: Scalars['UUID'],
};

export type DeleteTransactionNotePayload = {
   __typename?: 'DeleteTransactionNotePayload',
  clientMutationId?: Maybe<Scalars['String']>,
  transactionNote?: Maybe<TransactionNote>,
  deletedTransactionNoteNodeId?: Maybe<Scalars['ID']>,
  query?: Maybe<Query>,
  user?: Maybe<User>,
  transaction?: Maybe<Transaction>,
  transactionNoteEdge?: Maybe<TransactionNotesEdge>,
};


export type DeleteTransactionNotePayloadTransactionNoteEdgeArgs = {
  orderBy?: Maybe<Array<TransactionNotesOrderBy>>
};

export type DeleteTransactionPayload = {
   __typename?: 'DeleteTransactionPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  transaction?: Maybe<Transaction>,
  deletedTransactionNodeId?: Maybe<Scalars['ID']>,
  query?: Maybe<Query>,
  account?: Maybe<Account>,
  reverseTransaction?: Maybe<Transaction>,
  transactionImportBatch?: Maybe<TransactionImportBatch>,
  category?: Maybe<FinanceCategory>,
  transactionEdge?: Maybe<TransactionsEdge>,
};


export type DeleteTransactionPayloadTransactionEdgeArgs = {
  orderBy?: Maybe<Array<TransactionsOrderBy>>
};

export type DeleteTravellerByNodeIdInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
};

export type DeleteTravellerInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  id: Scalars['UUID'],
};

export type DeleteTravellerPayload = {
   __typename?: 'DeleteTravellerPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  traveller?: Maybe<Traveller>,
  deletedTravellerNodeId?: Maybe<Scalars['ID']>,
  query?: Maybe<Query>,
  travellerEdge?: Maybe<TravellersEdge>,
};


export type DeleteTravellerPayloadTravellerEdgeArgs = {
  orderBy?: Maybe<Array<TravellersOrderBy>>
};

export type DeleteTripByNodeIdInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
};

export type DeleteTripFlightByNodeIdInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
};

export type DeleteTripFlightInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  id: Scalars['UUID'],
};

export type DeleteTripFlightPayload = {
   __typename?: 'DeleteTripFlightPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  tripFlight?: Maybe<TripFlight>,
  deletedTripFlightNodeId?: Maybe<Scalars['ID']>,
  query?: Maybe<Query>,
  trip?: Maybe<Trip>,
  airportByDepartureAirport?: Maybe<Airport>,
  airportByArrivalAirport?: Maybe<Airport>,
  tripFlightEdge?: Maybe<TripFlightsEdge>,
};


export type DeleteTripFlightPayloadTripFlightEdgeArgs = {
  orderBy?: Maybe<Array<TripFlightsOrderBy>>
};

export type DeleteTripInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  id: Scalars['UUID'],
};

export type DeleteTripPayload = {
   __typename?: 'DeleteTripPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  trip?: Maybe<Trip>,
  deletedTripNodeId?: Maybe<Scalars['ID']>,
  query?: Maybe<Query>,
  customer?: Maybe<Customer>,
  user?: Maybe<User>,
  mediaGallery?: Maybe<MediaGallery>,
  activeQuote?: Maybe<Quote>,
  agency?: Maybe<Agency>,
  agencyMember?: Maybe<AgencyMember>,
  tripEdge?: Maybe<TripsEdge>,
};


export type DeleteTripPayloadTripEdgeArgs = {
  orderBy?: Maybe<Array<TripsOrderBy>>
};

export type DeleteTripTravellerByNodeIdInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
};

export type DeleteTripTravellerInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  id: Scalars['UUID'],
};

export type DeleteTripTravellerPayload = {
   __typename?: 'DeleteTripTravellerPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  tripTraveller?: Maybe<TripTraveller>,
  deletedTripTravellerNodeId?: Maybe<Scalars['ID']>,
  query?: Maybe<Query>,
  traveller?: Maybe<Traveller>,
  trip?: Maybe<Trip>,
  tripTravellerEdge?: Maybe<TripTravellersEdge>,
};


export type DeleteTripTravellerPayloadTripTravellerEdgeArgs = {
  orderBy?: Maybe<Array<TripTravellersOrderBy>>
};

export type DeleteUserByNodeIdInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
};

export type DeleteUserInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  id: Scalars['UUID'],
};

export type DeleteUserPayload = {
   __typename?: 'DeleteUserPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  user?: Maybe<User>,
  deletedUserNodeId?: Maybe<Scalars['ID']>,
  query?: Maybe<Query>,
  userEdge?: Maybe<UsersEdge>,
};


export type DeleteUserPayloadUserEdgeArgs = {
  orderBy?: Maybe<Array<UsersOrderBy>>
};

export type DeleteVisaRequirementByNodeIdInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
};

export type DeleteVisaRequirementInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  id: Scalars['UUID'],
};

export type DeleteVisaRequirementPayload = {
   __typename?: 'DeleteVisaRequirementPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  visaRequirement?: Maybe<VisaRequirement>,
  deletedVisaRequirementNodeId?: Maybe<Scalars['ID']>,
  query?: Maybe<Query>,
  visaRequirementEdge?: Maybe<VisaRequirementsEdge>,
};


export type DeleteVisaRequirementPayloadVisaRequirementEdgeArgs = {
  orderBy?: Maybe<Array<VisaRequirementsOrderBy>>
};

export type Destination = Node & {
   __typename?: 'Destination',
  nodeId: Scalars['ID'],
  id: Scalars['UUID'],
  created: Scalars['Datetime'],
  modified: Scalars['Datetime'],
  name?: Maybe<Scalars['String']>,
  body?: Maybe<Scalars['String']>,
  galleryId?: Maybe<Scalars['UUID']>,
  parentId?: Maybe<Scalars['UUID']>,
  countryId: Scalars['UUID'],
  gallery?: Maybe<MediaGallery>,
  parent?: Maybe<Destination>,
  country?: Maybe<Country>,
  destinationsByParentId: DestinationsConnection,
  destinationFeatures: DestinationFeaturesConnection,
  destinationGuides: DestinationGuidesConnection,
  quoteDayDestinations: QuoteDayDestinationsConnection,
};


export type DestinationDestinationsByParentIdArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<DestinationsOrderBy>>,
  condition?: Maybe<DestinationCondition>,
  filter?: Maybe<DestinationFilter>
};


export type DestinationDestinationFeaturesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<DestinationFeaturesOrderBy>>,
  condition?: Maybe<DestinationFeatureCondition>,
  filter?: Maybe<DestinationFeatureFilter>
};


export type DestinationDestinationGuidesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<DestinationGuidesOrderBy>>,
  condition?: Maybe<DestinationGuideCondition>,
  filter?: Maybe<DestinationGuideFilter>
};


export type DestinationQuoteDayDestinationsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<QuoteDayDestinationsOrderBy>>,
  condition?: Maybe<QuoteDayDestinationCondition>,
  filter?: Maybe<QuoteDayDestinationFilter>
};

export type DestinationCondition = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  body?: Maybe<Scalars['String']>,
  galleryId?: Maybe<Scalars['UUID']>,
  parentId?: Maybe<Scalars['UUID']>,
  countryId?: Maybe<Scalars['UUID']>,
};

export type DestinationFeature = Node & {
   __typename?: 'DestinationFeature',
  nodeId: Scalars['ID'],
  id: Scalars['UUID'],
  body?: Maybe<Scalars['String']>,
  created: Scalars['Datetime'],
  destinationId: Scalars['UUID'],
  galleryId?: Maybe<Scalars['UUID']>,
  modified: Scalars['Datetime'],
  title?: Maybe<Scalars['String']>,
  destination?: Maybe<Destination>,
  gallery?: Maybe<MediaGallery>,
};

export type DestinationFeatureCondition = {
  id?: Maybe<Scalars['UUID']>,
  body?: Maybe<Scalars['String']>,
  created?: Maybe<Scalars['Datetime']>,
  destinationId?: Maybe<Scalars['UUID']>,
  galleryId?: Maybe<Scalars['UUID']>,
  modified?: Maybe<Scalars['Datetime']>,
  title?: Maybe<Scalars['String']>,
};

export type DestinationFeatureFilter = {
  id?: Maybe<UuidFilter>,
  body?: Maybe<StringFilter>,
  created?: Maybe<DatetimeFilter>,
  destinationId?: Maybe<UuidFilter>,
  galleryId?: Maybe<UuidFilter>,
  modified?: Maybe<DatetimeFilter>,
  title?: Maybe<StringFilter>,
  destination?: Maybe<DestinationFilter>,
  gallery?: Maybe<MediaGalleryFilter>,
  galleryExists?: Maybe<Scalars['Boolean']>,
  and?: Maybe<Array<DestinationFeatureFilter>>,
  or?: Maybe<Array<DestinationFeatureFilter>>,
  not?: Maybe<DestinationFeatureFilter>,
};

export type DestinationFeatureInput = {
  id?: Maybe<Scalars['UUID']>,
  body?: Maybe<Scalars['String']>,
  created?: Maybe<Scalars['Datetime']>,
  destinationId?: Maybe<Scalars['UUID']>,
  galleryId?: Maybe<Scalars['UUID']>,
  modified?: Maybe<Scalars['Datetime']>,
  title?: Maybe<Scalars['String']>,
  destinationToDestinationId?: Maybe<FkDestinationFeatureDestinationDestinationIdInput>,
  mediaGalleryToGalleryId?: Maybe<FkDestinationFeatureMediaGalleryGalleryIdInput>,
};

export type DestinationFeatureNodeIdConnect = {
  nodeId: Scalars['ID'],
};

export type DestinationFeatureNodeIdDelete = {
  nodeId: Scalars['ID'],
};

export type DestinationFeatureOnDestinationFeatureForFkDestinationFeatureDestinationDestinationIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: DestinationPatch,
};

export type DestinationFeatureOnDestinationFeatureForFkDestinationFeatureDestinationDestinationIdUsingPkDestinationFeatureUpdate = {
  patch: UpdateDestinationFeatureOnDestinationFeatureForFkDestinationFeatureDestinationDestinationIdPatch,
  id: Scalars['UUID'],
};

export type DestinationFeatureOnDestinationFeatureForFkDestinationFeatureMediaGalleryGalleryIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: MediaGalleryPatch,
};

export type DestinationFeatureOnDestinationFeatureForFkDestinationFeatureMediaGalleryGalleryIdUsingPkDestinationFeatureUpdate = {
  patch: UpdateDestinationFeatureOnDestinationFeatureForFkDestinationFeatureMediaGalleryGalleryIdPatch,
  id: Scalars['UUID'],
};

export type DestinationFeaturePatch = {
  id?: Maybe<Scalars['UUID']>,
  body?: Maybe<Scalars['String']>,
  created?: Maybe<Scalars['Datetime']>,
  destinationId?: Maybe<Scalars['UUID']>,
  galleryId?: Maybe<Scalars['UUID']>,
  modified?: Maybe<Scalars['Datetime']>,
  title?: Maybe<Scalars['String']>,
  destinationToDestinationId?: Maybe<FkDestinationFeatureDestinationDestinationIdInput>,
  mediaGalleryToGalleryId?: Maybe<FkDestinationFeatureMediaGalleryGalleryIdInput>,
};

export type DestinationFeaturePkDestinationFeatureConnect = {
  id: Scalars['UUID'],
};

export type DestinationFeaturePkDestinationFeatureDelete = {
  id: Scalars['UUID'],
};

export type DestinationFeaturesConnection = {
   __typename?: 'DestinationFeaturesConnection',
  nodes: Array<Maybe<DestinationFeature>>,
  edges: Array<DestinationFeaturesEdge>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
};

export type DestinationFeaturesEdge = {
   __typename?: 'DestinationFeaturesEdge',
  cursor?: Maybe<Scalars['Cursor']>,
  node?: Maybe<DestinationFeature>,
};

export enum DestinationFeaturesOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  BodyAsc = 'BODY_ASC',
  BodyDesc = 'BODY_DESC',
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  DestinationIdAsc = 'DESTINATION_ID_ASC',
  DestinationIdDesc = 'DESTINATION_ID_DESC',
  GalleryIdAsc = 'GALLERY_ID_ASC',
  GalleryIdDesc = 'GALLERY_ID_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type DestinationFilter = {
  id?: Maybe<UuidFilter>,
  created?: Maybe<DatetimeFilter>,
  modified?: Maybe<DatetimeFilter>,
  name?: Maybe<StringFilter>,
  body?: Maybe<StringFilter>,
  galleryId?: Maybe<UuidFilter>,
  parentId?: Maybe<UuidFilter>,
  countryId?: Maybe<UuidFilter>,
  destinationsByParentId?: Maybe<DestinationToManyDestinationFilter>,
  destinationsByParentIdExist?: Maybe<Scalars['Boolean']>,
  destinationFeatures?: Maybe<DestinationToManyDestinationFeatureFilter>,
  destinationFeaturesExist?: Maybe<Scalars['Boolean']>,
  destinationGuides?: Maybe<DestinationToManyDestinationGuideFilter>,
  destinationGuidesExist?: Maybe<Scalars['Boolean']>,
  quoteDayDestinations?: Maybe<DestinationToManyQuoteDayDestinationFilter>,
  quoteDayDestinationsExist?: Maybe<Scalars['Boolean']>,
  gallery?: Maybe<MediaGalleryFilter>,
  galleryExists?: Maybe<Scalars['Boolean']>,
  parent?: Maybe<DestinationFilter>,
  parentExists?: Maybe<Scalars['Boolean']>,
  country?: Maybe<CountryFilter>,
  and?: Maybe<Array<DestinationFilter>>,
  or?: Maybe<Array<DestinationFilter>>,
  not?: Maybe<DestinationFilter>,
};

export type DestinationGuide = Node & {
   __typename?: 'DestinationGuide',
  nodeId: Scalars['ID'],
  id: Scalars['UUID'],
  body?: Maybe<Scalars['String']>,
  created: Scalars['Datetime'],
  destinationId: Scalars['UUID'],
  modified: Scalars['Datetime'],
  title?: Maybe<Scalars['String']>,
  destination?: Maybe<Destination>,
};

export type DestinationGuideCondition = {
  id?: Maybe<Scalars['UUID']>,
  body?: Maybe<Scalars['String']>,
  created?: Maybe<Scalars['Datetime']>,
  destinationId?: Maybe<Scalars['UUID']>,
  modified?: Maybe<Scalars['Datetime']>,
  title?: Maybe<Scalars['String']>,
};

export type DestinationGuideFilter = {
  id?: Maybe<UuidFilter>,
  body?: Maybe<StringFilter>,
  created?: Maybe<DatetimeFilter>,
  destinationId?: Maybe<UuidFilter>,
  modified?: Maybe<DatetimeFilter>,
  title?: Maybe<StringFilter>,
  destination?: Maybe<DestinationFilter>,
  and?: Maybe<Array<DestinationGuideFilter>>,
  or?: Maybe<Array<DestinationGuideFilter>>,
  not?: Maybe<DestinationGuideFilter>,
};

export type DestinationGuideInput = {
  id?: Maybe<Scalars['UUID']>,
  body?: Maybe<Scalars['String']>,
  created?: Maybe<Scalars['Datetime']>,
  destinationId?: Maybe<Scalars['UUID']>,
  modified?: Maybe<Scalars['Datetime']>,
  title?: Maybe<Scalars['String']>,
  destinationToDestinationId?: Maybe<FkDestinationGuideDestinationDestinationIdInput>,
};

export type DestinationGuideNodeIdConnect = {
  nodeId: Scalars['ID'],
};

export type DestinationGuideNodeIdDelete = {
  nodeId: Scalars['ID'],
};

export type DestinationGuideOnDestinationGuideForFkDestinationGuideDestinationDestinationIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: DestinationPatch,
};

export type DestinationGuideOnDestinationGuideForFkDestinationGuideDestinationDestinationIdUsingPkDestinationGuideUpdate = {
  patch: UpdateDestinationGuideOnDestinationGuideForFkDestinationGuideDestinationDestinationIdPatch,
  id: Scalars['UUID'],
};

export type DestinationGuidePatch = {
  id?: Maybe<Scalars['UUID']>,
  body?: Maybe<Scalars['String']>,
  created?: Maybe<Scalars['Datetime']>,
  destinationId?: Maybe<Scalars['UUID']>,
  modified?: Maybe<Scalars['Datetime']>,
  title?: Maybe<Scalars['String']>,
  destinationToDestinationId?: Maybe<FkDestinationGuideDestinationDestinationIdInput>,
};

export type DestinationGuidePkDestinationGuideConnect = {
  id: Scalars['UUID'],
};

export type DestinationGuidePkDestinationGuideDelete = {
  id: Scalars['UUID'],
};

export type DestinationGuidesConnection = {
   __typename?: 'DestinationGuidesConnection',
  nodes: Array<Maybe<DestinationGuide>>,
  edges: Array<DestinationGuidesEdge>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
};

export type DestinationGuidesEdge = {
   __typename?: 'DestinationGuidesEdge',
  cursor?: Maybe<Scalars['Cursor']>,
  node?: Maybe<DestinationGuide>,
};

export enum DestinationGuidesOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  BodyAsc = 'BODY_ASC',
  BodyDesc = 'BODY_DESC',
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  DestinationIdAsc = 'DESTINATION_ID_ASC',
  DestinationIdDesc = 'DESTINATION_ID_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type DestinationInput = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  body?: Maybe<Scalars['String']>,
  galleryId?: Maybe<Scalars['UUID']>,
  parentId?: Maybe<Scalars['UUID']>,
  countryId?: Maybe<Scalars['UUID']>,
  mediaGalleryToGalleryId?: Maybe<FkDestinationMediaGalleryGalleryIdInput>,
  destinationToParentId?: Maybe<FkDestinationDestinationParentIdInput>,
  countryToCountryId?: Maybe<FkDestinationCountryCountryIdInput>,
  destinationFeaturesUsingId?: Maybe<FkDestinationFeatureDestinationDestinationIdInverseInput>,
  destinationGuidesUsingId?: Maybe<FkDestinationGuideDestinationDestinationIdInverseInput>,
  quoteDayDestinationsUsingId?: Maybe<FkQuoteDayDestinationDestinationDestinationIdInverseInput>,
};

export type DestinationNodeIdConnect = {
  nodeId: Scalars['ID'],
};

export type DestinationNodeIdDelete = {
  nodeId: Scalars['ID'],
};

export type DestinationOnDestinationFeatureForFkDestinationFeatureDestinationDestinationIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: DestinationFeaturePatch,
};

export type DestinationOnDestinationFeatureForFkDestinationFeatureDestinationDestinationIdUsingPkDestinationUpdate = {
  patch: UpdateDestinationOnDestinationFeatureForFkDestinationFeatureDestinationDestinationIdPatch,
  id: Scalars['UUID'],
};

export type DestinationOnDestinationForFkDestinationCountryCountryIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: CountryPatch,
};

export type DestinationOnDestinationForFkDestinationCountryCountryIdUsingPkDestinationUpdate = {
  patch: UpdateDestinationOnDestinationForFkDestinationCountryCountryIdPatch,
  id: Scalars['UUID'],
};

export type DestinationOnDestinationForFkDestinationDestinationParentIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: DestinationPatch,
};

export type DestinationOnDestinationForFkDestinationDestinationParentIdUsingPkDestinationUpdate = {
  patch: UpdateDestinationOnDestinationForFkDestinationDestinationParentIdPatch,
  id: Scalars['UUID'],
};

export type DestinationOnDestinationForFkDestinationMediaGalleryGalleryIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: MediaGalleryPatch,
};

export type DestinationOnDestinationForFkDestinationMediaGalleryGalleryIdUsingPkDestinationUpdate = {
  patch: UpdateDestinationOnDestinationForFkDestinationMediaGalleryGalleryIdPatch,
  id: Scalars['UUID'],
};

export type DestinationOnDestinationGuideForFkDestinationGuideDestinationDestinationIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: DestinationGuidePatch,
};

export type DestinationOnDestinationGuideForFkDestinationGuideDestinationDestinationIdUsingPkDestinationUpdate = {
  patch: UpdateDestinationOnDestinationGuideForFkDestinationGuideDestinationDestinationIdPatch,
  id: Scalars['UUID'],
};

export type DestinationOnQuoteDayDestinationForFkQuoteDayDestinationDestinationDestinationIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: QuoteDayDestinationPatch,
};

export type DestinationOnQuoteDayDestinationForFkQuoteDayDestinationDestinationDestinationIdUsingPkDestinationUpdate = {
  patch: UpdateDestinationOnQuoteDayDestinationForFkQuoteDayDestinationDestinationDestinationIdPatch,
  id: Scalars['UUID'],
};

export type DestinationPatch = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  body?: Maybe<Scalars['String']>,
  galleryId?: Maybe<Scalars['UUID']>,
  parentId?: Maybe<Scalars['UUID']>,
  countryId?: Maybe<Scalars['UUID']>,
  mediaGalleryToGalleryId?: Maybe<FkDestinationMediaGalleryGalleryIdInput>,
  destinationToParentId?: Maybe<FkDestinationDestinationParentIdInput>,
  countryToCountryId?: Maybe<FkDestinationCountryCountryIdInput>,
  destinationFeaturesUsingId?: Maybe<FkDestinationFeatureDestinationDestinationIdInverseInput>,
  destinationGuidesUsingId?: Maybe<FkDestinationGuideDestinationDestinationIdInverseInput>,
  quoteDayDestinationsUsingId?: Maybe<FkQuoteDayDestinationDestinationDestinationIdInverseInput>,
};

export type DestinationPkDestinationConnect = {
  id: Scalars['UUID'],
};

export type DestinationPkDestinationDelete = {
  id: Scalars['UUID'],
};

export type DestinationsConnection = {
   __typename?: 'DestinationsConnection',
  nodes: Array<Maybe<Destination>>,
  edges: Array<DestinationsEdge>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
};

export type DestinationsEdge = {
   __typename?: 'DestinationsEdge',
  cursor?: Maybe<Scalars['Cursor']>,
  node?: Maybe<Destination>,
};

export enum DestinationsOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  BodyAsc = 'BODY_ASC',
  BodyDesc = 'BODY_DESC',
  GalleryIdAsc = 'GALLERY_ID_ASC',
  GalleryIdDesc = 'GALLERY_ID_DESC',
  ParentIdAsc = 'PARENT_ID_ASC',
  ParentIdDesc = 'PARENT_ID_DESC',
  CountryIdAsc = 'COUNTRY_ID_ASC',
  CountryIdDesc = 'COUNTRY_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type DestinationToManyDestinationFeatureFilter = {
  every?: Maybe<DestinationFeatureFilter>,
  some?: Maybe<DestinationFeatureFilter>,
  none?: Maybe<DestinationFeatureFilter>,
};

export type DestinationToManyDestinationFilter = {
  every?: Maybe<DestinationFilter>,
  some?: Maybe<DestinationFilter>,
  none?: Maybe<DestinationFilter>,
};

export type DestinationToManyDestinationGuideFilter = {
  every?: Maybe<DestinationGuideFilter>,
  some?: Maybe<DestinationGuideFilter>,
  none?: Maybe<DestinationGuideFilter>,
};

export type DestinationToManyQuoteDayDestinationFilter = {
  every?: Maybe<QuoteDayDestinationFilter>,
  some?: Maybe<QuoteDayDestinationFilter>,
  none?: Maybe<QuoteDayDestinationFilter>,
};

export type Email = Node & {
   __typename?: 'Email',
  nodeId: Scalars['ID'],
  id: Scalars['UUID'],
  body?: Maybe<Scalars['String']>,
  created: Scalars['Datetime'],
  notes?: Maybe<Scalars['String']>,
  recipients?: Maybe<Scalars['String']>,
  subject?: Maybe<Scalars['String']>,
  tripId?: Maybe<Scalars['UUID']>,
  userId: Scalars['UUID'],
  customerId: Scalars['UUID'],
  quoteId?: Maybe<Scalars['UUID']>,
  trip?: Maybe<Trip>,
  user?: Maybe<User>,
  customer?: Maybe<Customer>,
  quote?: Maybe<Quote>,
};

export type EmailCondition = {
  id?: Maybe<Scalars['UUID']>,
  body?: Maybe<Scalars['String']>,
  created?: Maybe<Scalars['Datetime']>,
  notes?: Maybe<Scalars['String']>,
  recipients?: Maybe<Scalars['String']>,
  subject?: Maybe<Scalars['String']>,
  tripId?: Maybe<Scalars['UUID']>,
  userId?: Maybe<Scalars['UUID']>,
  customerId?: Maybe<Scalars['UUID']>,
  quoteId?: Maybe<Scalars['UUID']>,
};

export type EmailFilter = {
  id?: Maybe<UuidFilter>,
  body?: Maybe<StringFilter>,
  created?: Maybe<DatetimeFilter>,
  notes?: Maybe<StringFilter>,
  recipients?: Maybe<StringFilter>,
  subject?: Maybe<StringFilter>,
  tripId?: Maybe<UuidFilter>,
  userId?: Maybe<UuidFilter>,
  customerId?: Maybe<UuidFilter>,
  quoteId?: Maybe<UuidFilter>,
  trip?: Maybe<TripFilter>,
  tripExists?: Maybe<Scalars['Boolean']>,
  user?: Maybe<UserFilter>,
  customer?: Maybe<CustomerFilter>,
  quote?: Maybe<QuoteFilter>,
  quoteExists?: Maybe<Scalars['Boolean']>,
  and?: Maybe<Array<EmailFilter>>,
  or?: Maybe<Array<EmailFilter>>,
  not?: Maybe<EmailFilter>,
};

export type EmailInput = {
  id?: Maybe<Scalars['UUID']>,
  body?: Maybe<Scalars['String']>,
  created?: Maybe<Scalars['Datetime']>,
  notes?: Maybe<Scalars['String']>,
  recipients?: Maybe<Scalars['String']>,
  subject?: Maybe<Scalars['String']>,
  tripId?: Maybe<Scalars['UUID']>,
  userId?: Maybe<Scalars['UUID']>,
  customerId?: Maybe<Scalars['UUID']>,
  quoteId?: Maybe<Scalars['UUID']>,
  tripToTripId?: Maybe<FkEmailTripTripIdInput>,
  userToUserId?: Maybe<FkEmailUserUserIdInput>,
  customerToCustomerId?: Maybe<FkEmailCustomerCustomerIdInput>,
  quoteToQuoteId?: Maybe<FkEmailQuoteQuoteIdInput>,
};

export type EmailNodeIdConnect = {
  nodeId: Scalars['ID'],
};

export type EmailNodeIdDelete = {
  nodeId: Scalars['ID'],
};

export type EmailOnEmailForFkEmailCustomerCustomerIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: CustomerPatch,
};

export type EmailOnEmailForFkEmailCustomerCustomerIdUsingPkEmailUpdate = {
  patch: UpdateEmailOnEmailForFkEmailCustomerCustomerIdPatch,
  id: Scalars['UUID'],
};

export type EmailOnEmailForFkEmailQuoteQuoteIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: QuotePatch,
};

export type EmailOnEmailForFkEmailQuoteQuoteIdUsingPkEmailUpdate = {
  patch: UpdateEmailOnEmailForFkEmailQuoteQuoteIdPatch,
  id: Scalars['UUID'],
};

export type EmailOnEmailForFkEmailTripTripIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: TripPatch,
};

export type EmailOnEmailForFkEmailTripTripIdUsingPkEmailUpdate = {
  patch: UpdateEmailOnEmailForFkEmailTripTripIdPatch,
  id: Scalars['UUID'],
};

export type EmailOnEmailForFkEmailUserUserIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: UserPatch,
};

export type EmailOnEmailForFkEmailUserUserIdUsingPkEmailUpdate = {
  patch: UpdateEmailOnEmailForFkEmailUserUserIdPatch,
  id: Scalars['UUID'],
};

export type EmailPatch = {
  id?: Maybe<Scalars['UUID']>,
  body?: Maybe<Scalars['String']>,
  created?: Maybe<Scalars['Datetime']>,
  notes?: Maybe<Scalars['String']>,
  recipients?: Maybe<Scalars['String']>,
  subject?: Maybe<Scalars['String']>,
  tripId?: Maybe<Scalars['UUID']>,
  userId?: Maybe<Scalars['UUID']>,
  customerId?: Maybe<Scalars['UUID']>,
  quoteId?: Maybe<Scalars['UUID']>,
  tripToTripId?: Maybe<FkEmailTripTripIdInput>,
  userToUserId?: Maybe<FkEmailUserUserIdInput>,
  customerToCustomerId?: Maybe<FkEmailCustomerCustomerIdInput>,
  quoteToQuoteId?: Maybe<FkEmailQuoteQuoteIdInput>,
};

export type EmailPkEmailConnect = {
  id: Scalars['UUID'],
};

export type EmailPkEmailDelete = {
  id: Scalars['UUID'],
};

export type EmailsConnection = {
   __typename?: 'EmailsConnection',
  nodes: Array<Maybe<Email>>,
  edges: Array<EmailsEdge>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
};

export type EmailsEdge = {
   __typename?: 'EmailsEdge',
  cursor?: Maybe<Scalars['Cursor']>,
  node?: Maybe<Email>,
};

export enum EmailsOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  BodyAsc = 'BODY_ASC',
  BodyDesc = 'BODY_DESC',
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  NotesAsc = 'NOTES_ASC',
  NotesDesc = 'NOTES_DESC',
  RecipientsAsc = 'RECIPIENTS_ASC',
  RecipientsDesc = 'RECIPIENTS_DESC',
  SubjectAsc = 'SUBJECT_ASC',
  SubjectDesc = 'SUBJECT_DESC',
  TripIdAsc = 'TRIP_ID_ASC',
  TripIdDesc = 'TRIP_ID_DESC',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC',
  CustomerIdAsc = 'CUSTOMER_ID_ASC',
  CustomerIdDesc = 'CUSTOMER_ID_DESC',
  QuoteIdAsc = 'QUOTE_ID_ASC',
  QuoteIdDesc = 'QUOTE_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type EnquiriesConnection = {
   __typename?: 'EnquiriesConnection',
  nodes: Array<Maybe<Enquiry>>,
  edges: Array<EnquiriesEdge>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
};

export type EnquiriesEdge = {
   __typename?: 'EnquiriesEdge',
  cursor?: Maybe<Scalars['Cursor']>,
  node?: Maybe<Enquiry>,
};

export enum EnquiriesOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  CommentsAsc = 'COMMENTS_ASC',
  CommentsDesc = 'COMMENTS_DESC',
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  CustomerIdAsc = 'CUSTOMER_ID_ASC',
  CustomerIdDesc = 'CUSTOMER_ID_DESC',
  DatesAsc = 'DATES_ASC',
  DatesDesc = 'DATES_DESC',
  DestinationAsc = 'DESTINATION_ASC',
  DestinationDesc = 'DESTINATION_DESC',
  SourceAsc = 'SOURCE_ASC',
  SourceDesc = 'SOURCE_DESC',
  StatusAsc = 'STATUS_ASC',
  StatusDesc = 'STATUS_DESC',
  TravellersAsc = 'TRAVELLERS_ASC',
  TravellersDesc = 'TRAVELLERS_DESC',
  TripIdAsc = 'TRIP_ID_ASC',
  TripIdDesc = 'TRIP_ID_DESC',
  ArchivedAsc = 'ARCHIVED_ASC',
  ArchivedDesc = 'ARCHIVED_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type Enquiry = Node & {
   __typename?: 'Enquiry',
  nodeId: Scalars['ID'],
  id: Scalars['UUID'],
  comments?: Maybe<Scalars['String']>,
  created: Scalars['Datetime'],
  customerId: Scalars['UUID'],
  dates?: Maybe<Scalars['String']>,
  destination?: Maybe<Scalars['String']>,
  source?: Maybe<Scalars['String']>,
  status: Scalars['Int'],
  travellers?: Maybe<Scalars['String']>,
  tripId?: Maybe<Scalars['UUID']>,
  archived?: Maybe<Scalars['Datetime']>,
  customer?: Maybe<Customer>,
  trip?: Maybe<Trip>,
};

export type EnquiryCondition = {
  id?: Maybe<Scalars['UUID']>,
  comments?: Maybe<Scalars['String']>,
  created?: Maybe<Scalars['Datetime']>,
  customerId?: Maybe<Scalars['UUID']>,
  dates?: Maybe<Scalars['String']>,
  destination?: Maybe<Scalars['String']>,
  source?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['Int']>,
  travellers?: Maybe<Scalars['String']>,
  tripId?: Maybe<Scalars['UUID']>,
  archived?: Maybe<Scalars['Datetime']>,
};

export type EnquiryFilter = {
  id?: Maybe<UuidFilter>,
  comments?: Maybe<StringFilter>,
  created?: Maybe<DatetimeFilter>,
  customerId?: Maybe<UuidFilter>,
  dates?: Maybe<StringFilter>,
  destination?: Maybe<StringFilter>,
  source?: Maybe<StringFilter>,
  status?: Maybe<IntFilter>,
  travellers?: Maybe<StringFilter>,
  tripId?: Maybe<UuidFilter>,
  archived?: Maybe<DatetimeFilter>,
  customer?: Maybe<CustomerFilter>,
  trip?: Maybe<TripFilter>,
  tripExists?: Maybe<Scalars['Boolean']>,
  and?: Maybe<Array<EnquiryFilter>>,
  or?: Maybe<Array<EnquiryFilter>>,
  not?: Maybe<EnquiryFilter>,
};

export type EnquiryInput = {
  id?: Maybe<Scalars['UUID']>,
  comments?: Maybe<Scalars['String']>,
  created?: Maybe<Scalars['Datetime']>,
  customerId?: Maybe<Scalars['UUID']>,
  dates?: Maybe<Scalars['String']>,
  destination?: Maybe<Scalars['String']>,
  source?: Maybe<Scalars['String']>,
  status: Scalars['Int'],
  travellers?: Maybe<Scalars['String']>,
  tripId?: Maybe<Scalars['UUID']>,
  archived?: Maybe<Scalars['Datetime']>,
  customerToCustomerId?: Maybe<FkEnquiryCustomerCustomerIdInput>,
  tripToTripId?: Maybe<FkEnquiryTripTripIdInput>,
};

export type EnquiryNodeIdConnect = {
  nodeId: Scalars['ID'],
};

export type EnquiryNodeIdDelete = {
  nodeId: Scalars['ID'],
};

export type EnquiryOnEnquiryForFkEnquiryCustomerCustomerIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: CustomerPatch,
};

export type EnquiryOnEnquiryForFkEnquiryCustomerCustomerIdUsingPkEnquiryUpdate = {
  patch: UpdateEnquiryOnEnquiryForFkEnquiryCustomerCustomerIdPatch,
  id: Scalars['UUID'],
};

export type EnquiryOnEnquiryForFkEnquiryTripTripIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: TripPatch,
};

export type EnquiryOnEnquiryForFkEnquiryTripTripIdUsingPkEnquiryUpdate = {
  patch: UpdateEnquiryOnEnquiryForFkEnquiryTripTripIdPatch,
  id: Scalars['UUID'],
};

export type EnquiryPatch = {
  id?: Maybe<Scalars['UUID']>,
  comments?: Maybe<Scalars['String']>,
  created?: Maybe<Scalars['Datetime']>,
  customerId?: Maybe<Scalars['UUID']>,
  dates?: Maybe<Scalars['String']>,
  destination?: Maybe<Scalars['String']>,
  source?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['Int']>,
  travellers?: Maybe<Scalars['String']>,
  tripId?: Maybe<Scalars['UUID']>,
  archived?: Maybe<Scalars['Datetime']>,
  customerToCustomerId?: Maybe<FkEnquiryCustomerCustomerIdInput>,
  tripToTripId?: Maybe<FkEnquiryTripTripIdInput>,
};

export type EnquiryPkEnquiryConnect = {
  id: Scalars['UUID'],
};

export type EnquiryPkEnquiryDelete = {
  id: Scalars['UUID'],
};

export type ExecutePaymentInput = {
  token: Scalars['String'],
  invoice: Scalars['UUID'],
  amount?: Maybe<Scalars['BigFloat']>,
};

export type Expense = Node & {
   __typename?: 'Expense',
  nodeId: Scalars['ID'],
  id: Scalars['UUID'],
  amount: Scalars['BigFloat'],
  amountActual: Scalars['BigFloat'],
  created: Scalars['Datetime'],
  currency?: Maybe<Scalars['String']>,
  invoiceId?: Maybe<Scalars['UUID']>,
  modified: Scalars['Datetime'],
  paid: Scalars['Datetime'],
  summary?: Maybe<Scalars['String']>,
  supplierId: Scalars['UUID'],
  reference?: Maybe<Scalars['String']>,
  categoryId?: Maybe<Scalars['UUID']>,
  supplierInvoiceId?: Maybe<Scalars['UUID']>,
  tripId?: Maybe<Scalars['UUID']>,
  invoice?: Maybe<Invoice>,
  supplier?: Maybe<Supplier>,
  category?: Maybe<FinanceCategory>,
  supplierInvoice?: Maybe<SupplierInvoice>,
  trip?: Maybe<Trip>,
  transactionLinks: TransactionLinksConnection,
};


export type ExpenseTransactionLinksArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<TransactionLinksOrderBy>>,
  condition?: Maybe<TransactionLinkCondition>,
  filter?: Maybe<TransactionLinkFilter>
};

export type ExpenseCondition = {
  id?: Maybe<Scalars['UUID']>,
  amount?: Maybe<Scalars['BigFloat']>,
  amountActual?: Maybe<Scalars['BigFloat']>,
  created?: Maybe<Scalars['Datetime']>,
  currency?: Maybe<Scalars['String']>,
  invoiceId?: Maybe<Scalars['UUID']>,
  modified?: Maybe<Scalars['Datetime']>,
  paid?: Maybe<Scalars['Datetime']>,
  summary?: Maybe<Scalars['String']>,
  supplierId?: Maybe<Scalars['UUID']>,
  reference?: Maybe<Scalars['String']>,
  categoryId?: Maybe<Scalars['UUID']>,
  supplierInvoiceId?: Maybe<Scalars['UUID']>,
  tripId?: Maybe<Scalars['UUID']>,
};

export type ExpenseFilter = {
  id?: Maybe<UuidFilter>,
  amount?: Maybe<BigFloatFilter>,
  amountActual?: Maybe<BigFloatFilter>,
  created?: Maybe<DatetimeFilter>,
  currency?: Maybe<StringFilter>,
  invoiceId?: Maybe<UuidFilter>,
  modified?: Maybe<DatetimeFilter>,
  paid?: Maybe<DatetimeFilter>,
  summary?: Maybe<StringFilter>,
  supplierId?: Maybe<UuidFilter>,
  reference?: Maybe<StringFilter>,
  categoryId?: Maybe<UuidFilter>,
  supplierInvoiceId?: Maybe<UuidFilter>,
  tripId?: Maybe<UuidFilter>,
  transactionLinks?: Maybe<ExpenseToManyTransactionLinkFilter>,
  transactionLinksExist?: Maybe<Scalars['Boolean']>,
  invoice?: Maybe<InvoiceFilter>,
  invoiceExists?: Maybe<Scalars['Boolean']>,
  supplier?: Maybe<SupplierFilter>,
  category?: Maybe<FinanceCategoryFilter>,
  categoryExists?: Maybe<Scalars['Boolean']>,
  supplierInvoice?: Maybe<SupplierInvoiceFilter>,
  supplierInvoiceExists?: Maybe<Scalars['Boolean']>,
  trip?: Maybe<TripFilter>,
  tripExists?: Maybe<Scalars['Boolean']>,
  and?: Maybe<Array<ExpenseFilter>>,
  or?: Maybe<Array<ExpenseFilter>>,
  not?: Maybe<ExpenseFilter>,
};

export type ExpenseInput = {
  id?: Maybe<Scalars['UUID']>,
  amount: Scalars['BigFloat'],
  amountActual: Scalars['BigFloat'],
  created?: Maybe<Scalars['Datetime']>,
  currency?: Maybe<Scalars['String']>,
  invoiceId?: Maybe<Scalars['UUID']>,
  modified?: Maybe<Scalars['Datetime']>,
  paid: Scalars['Datetime'],
  summary?: Maybe<Scalars['String']>,
  supplierId?: Maybe<Scalars['UUID']>,
  reference?: Maybe<Scalars['String']>,
  categoryId?: Maybe<Scalars['UUID']>,
  supplierInvoiceId?: Maybe<Scalars['UUID']>,
  tripId?: Maybe<Scalars['UUID']>,
  invoiceToInvoiceId?: Maybe<FkExpenseInvoiceInvoiceIdInput>,
  supplierToSupplierId?: Maybe<FkExpenseSupplierSupplierIdInput>,
  financeCategoryToCategoryId?: Maybe<FkExpenseFinanceCategoryCategoryIdInput>,
  supplierInvoiceToSupplierInvoiceId?: Maybe<FkExpenseSupplierInvoiceSupplierInvoiceIdInput>,
  tripToTripId?: Maybe<FkExpenseTripTripIdInput>,
  transactionLinksUsingId?: Maybe<FkTransactionLinkExpenseExpenseIdInverseInput>,
};

export type ExpenseNodeIdConnect = {
  nodeId: Scalars['ID'],
};

export type ExpenseNodeIdDelete = {
  nodeId: Scalars['ID'],
};

export type ExpenseOnExpenseForFkExpenseFinanceCategoryCategoryIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: FinanceCategoryPatch,
};

export type ExpenseOnExpenseForFkExpenseFinanceCategoryCategoryIdUsingPkExpenseUpdate = {
  patch: UpdateExpenseOnExpenseForFkExpenseFinanceCategoryCategoryIdPatch,
  id: Scalars['UUID'],
};

export type ExpenseOnExpenseForFkExpenseInvoiceInvoiceIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: InvoicePatch,
};

export type ExpenseOnExpenseForFkExpenseInvoiceInvoiceIdUsingPkExpenseUpdate = {
  patch: UpdateExpenseOnExpenseForFkExpenseInvoiceInvoiceIdPatch,
  id: Scalars['UUID'],
};

export type ExpenseOnExpenseForFkExpenseSupplierInvoiceSupplierInvoiceIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: SupplierInvoicePatch,
};

export type ExpenseOnExpenseForFkExpenseSupplierInvoiceSupplierInvoiceIdUsingPkExpenseUpdate = {
  patch: UpdateExpenseOnExpenseForFkExpenseSupplierInvoiceSupplierInvoiceIdPatch,
  id: Scalars['UUID'],
};

export type ExpenseOnExpenseForFkExpenseSupplierSupplierIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: SupplierPatch,
};

export type ExpenseOnExpenseForFkExpenseSupplierSupplierIdUsingPkExpenseUpdate = {
  patch: UpdateExpenseOnExpenseForFkExpenseSupplierSupplierIdPatch,
  id: Scalars['UUID'],
};

export type ExpenseOnExpenseForFkExpenseTripTripIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: TripPatch,
};

export type ExpenseOnExpenseForFkExpenseTripTripIdUsingPkExpenseUpdate = {
  patch: UpdateExpenseOnExpenseForFkExpenseTripTripIdPatch,
  id: Scalars['UUID'],
};

export type ExpenseOnTransactionLinkForFkTransactionLinkExpenseExpenseIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: TransactionLinkPatch,
};

export type ExpenseOnTransactionLinkForFkTransactionLinkExpenseExpenseIdUsingPkExpenseUpdate = {
  patch: UpdateExpenseOnTransactionLinkForFkTransactionLinkExpenseExpenseIdPatch,
  id: Scalars['UUID'],
};

export type ExpensePatch = {
  id?: Maybe<Scalars['UUID']>,
  amount?: Maybe<Scalars['BigFloat']>,
  amountActual?: Maybe<Scalars['BigFloat']>,
  created?: Maybe<Scalars['Datetime']>,
  currency?: Maybe<Scalars['String']>,
  invoiceId?: Maybe<Scalars['UUID']>,
  modified?: Maybe<Scalars['Datetime']>,
  paid?: Maybe<Scalars['Datetime']>,
  summary?: Maybe<Scalars['String']>,
  supplierId?: Maybe<Scalars['UUID']>,
  reference?: Maybe<Scalars['String']>,
  categoryId?: Maybe<Scalars['UUID']>,
  supplierInvoiceId?: Maybe<Scalars['UUID']>,
  tripId?: Maybe<Scalars['UUID']>,
  invoiceToInvoiceId?: Maybe<FkExpenseInvoiceInvoiceIdInput>,
  supplierToSupplierId?: Maybe<FkExpenseSupplierSupplierIdInput>,
  financeCategoryToCategoryId?: Maybe<FkExpenseFinanceCategoryCategoryIdInput>,
  supplierInvoiceToSupplierInvoiceId?: Maybe<FkExpenseSupplierInvoiceSupplierInvoiceIdInput>,
  tripToTripId?: Maybe<FkExpenseTripTripIdInput>,
  transactionLinksUsingId?: Maybe<FkTransactionLinkExpenseExpenseIdInverseInput>,
};

export type ExpensePkExpenseConnect = {
  id: Scalars['UUID'],
};

export type ExpensePkExpenseDelete = {
  id: Scalars['UUID'],
};

export type ExpensesConnection = {
   __typename?: 'ExpensesConnection',
  nodes: Array<Maybe<Expense>>,
  edges: Array<ExpensesEdge>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
};

export type ExpensesEdge = {
   __typename?: 'ExpensesEdge',
  cursor?: Maybe<Scalars['Cursor']>,
  node?: Maybe<Expense>,
};

export enum ExpensesOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  AmountAsc = 'AMOUNT_ASC',
  AmountDesc = 'AMOUNT_DESC',
  AmountActualAsc = 'AMOUNT_ACTUAL_ASC',
  AmountActualDesc = 'AMOUNT_ACTUAL_DESC',
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  CurrencyAsc = 'CURRENCY_ASC',
  CurrencyDesc = 'CURRENCY_DESC',
  InvoiceIdAsc = 'INVOICE_ID_ASC',
  InvoiceIdDesc = 'INVOICE_ID_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC',
  PaidAsc = 'PAID_ASC',
  PaidDesc = 'PAID_DESC',
  SummaryAsc = 'SUMMARY_ASC',
  SummaryDesc = 'SUMMARY_DESC',
  SupplierIdAsc = 'SUPPLIER_ID_ASC',
  SupplierIdDesc = 'SUPPLIER_ID_DESC',
  ReferenceAsc = 'REFERENCE_ASC',
  ReferenceDesc = 'REFERENCE_DESC',
  CategoryIdAsc = 'CATEGORY_ID_ASC',
  CategoryIdDesc = 'CATEGORY_ID_DESC',
  SupplierInvoiceIdAsc = 'SUPPLIER_INVOICE_ID_ASC',
  SupplierInvoiceIdDesc = 'SUPPLIER_INVOICE_ID_DESC',
  TripIdAsc = 'TRIP_ID_ASC',
  TripIdDesc = 'TRIP_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type ExpenseToManyTransactionLinkFilter = {
  every?: Maybe<TransactionLinkFilter>,
  some?: Maybe<TransactionLinkFilter>,
  none?: Maybe<TransactionLinkFilter>,
};

export type FakePublicQuoteAccommodationDetailForeignKey0Input = {
  connectByKey?: Maybe<QuotePublicFakePublicQuotePublicPrimaryKeyConnect>,
  connectByNodeId?: Maybe<QuotePublicNodeIdConnect>,
  deleteByKey?: Maybe<QuotePublicFakePublicQuotePublicPrimaryKeyDelete>,
  deleteByNodeId?: Maybe<QuotePublicNodeIdDelete>,
  updateByKey?: Maybe<QuotePublicOnQuoteAccommodationDetailForFakePublicQuoteAccommodationDetailForeignKey0UsingFakePublicQuotePublicPrimaryKeyUpdate>,
  updateByNodeId?: Maybe<QuoteAccommodationDetailOnQuoteAccommodationDetailForFakePublicQuoteAccommodationDetailForeignKey0NodeIdUpdate>,
  create?: Maybe<FakePublicQuoteAccommodationDetailForeignKey0QuotePublicCreateInput>,
};

export type FakePublicQuoteAccommodationDetailForeignKey0InverseInput = {
  deleteOthers?: Maybe<Scalars['Boolean']>,
  connectById?: Maybe<Array<QuoteAccommodationDetailPkQuoteAccommodationDetailConnect>>,
  connectByNodeId?: Maybe<Array<QuoteAccommodationDetailNodeIdConnect>>,
  deleteById?: Maybe<Array<QuoteAccommodationDetailPkQuoteAccommodationDetailDelete>>,
  deleteByNodeId?: Maybe<Array<QuoteAccommodationDetailNodeIdDelete>>,
  updateById?: Maybe<Array<QuoteAccommodationDetailOnQuoteAccommodationDetailForFakePublicQuoteAccommodationDetailForeignKey0UsingPkQuoteAccommodationDetailUpdate>>,
  updateByNodeId?: Maybe<Array<QuotePublicOnQuoteAccommodationDetailForFakePublicQuoteAccommodationDetailForeignKey0NodeIdUpdate>>,
  create?: Maybe<Array<FakePublicQuoteAccommodationDetailForeignKey0QuoteAccommodationDetailCreateInput>>,
};

export type FakePublicQuoteAccommodationDetailForeignKey0QuoteAccommodationDetailCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  order: Scalars['Int'],
  nights: Scalars['Int'],
  notes?: Maybe<Scalars['String']>,
  propertyId?: Maybe<Scalars['UUID']>,
  basis?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  confirmation?: Maybe<Scalars['String']>,
  beverageInclusions?: Maybe<Array<Maybe<Scalars['String']>>>,
  foodInclusions?: Maybe<Array<Maybe<Scalars['String']>>>,
  roomType?: Maybe<Scalars['String']>,
  propertyToPropertyId?: Maybe<FkQuoteAccommodationDetailPropertyPropertyIdInput>,
  quoteToQuoteId?: Maybe<FkQuoteAccommodationDetailQuoteQuoteIdInput>,
  quotePublic?: Maybe<FakePublicQuoteAccommodationDetailForeignKey0Input>,
  quoteDaysUsingId?: Maybe<FkQuoteDayQuoteAccommodationDetailAccommodationIdInverseInput>,
};

export type FakePublicQuoteAccommodationDetailForeignKey0QuotePublicCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  key: Scalars['String'],
  status?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['Datetime']>,
  duration?: Maybe<Scalars['Int']>,
  travellerCount?: Maybe<Scalars['Int']>,
  total?: Maybe<Scalars['BigFloat']>,
  heroId?: Maybe<Scalars['UUID']>,
  tripId?: Maybe<Scalars['UUID']>,
  locked?: Maybe<Scalars['Datetime']>,
  baseCurrency?: Maybe<Scalars['String']>,
  inclusions?: Maybe<Scalars['String']>,
  exclusions?: Maybe<Scalars['String']>,
  expires?: Maybe<Scalars['Datetime']>,
  userId?: Maybe<Scalars['UUID']>,
  tripToTripId?: Maybe<FakePublicQuotePublicForeignKey0Input>,
  quoteHeroToHeroId?: Maybe<FakePublicQuotePublicForeignKey1Input>,
  userToUserId?: Maybe<FakePublicQuotePublicForeignKey2Input>,
  quoteAccommodationDetailsUsingId?: Maybe<FakePublicQuoteAccommodationDetailForeignKey0InverseInput>,
  quoteDaysUsingId?: Maybe<FakePublicQuoteDayForeignKey0InverseInput>,
};

export type FakePublicQuoteDayForeignKey0Input = {
  connectByKey?: Maybe<QuotePublicFakePublicQuotePublicPrimaryKeyConnect>,
  connectByNodeId?: Maybe<QuotePublicNodeIdConnect>,
  deleteByKey?: Maybe<QuotePublicFakePublicQuotePublicPrimaryKeyDelete>,
  deleteByNodeId?: Maybe<QuotePublicNodeIdDelete>,
  updateByKey?: Maybe<QuotePublicOnQuoteDayForFakePublicQuoteDayForeignKey0UsingFakePublicQuotePublicPrimaryKeyUpdate>,
  updateByNodeId?: Maybe<QuoteDayOnQuoteDayForFakePublicQuoteDayForeignKey0NodeIdUpdate>,
  create?: Maybe<FakePublicQuoteDayForeignKey0QuotePublicCreateInput>,
};

export type FakePublicQuoteDayForeignKey0InverseInput = {
  deleteOthers?: Maybe<Scalars['Boolean']>,
  connectById?: Maybe<Array<QuoteDayPkQuoteDayConnect>>,
  connectByNodeId?: Maybe<Array<QuoteDayNodeIdConnect>>,
  deleteById?: Maybe<Array<QuoteDayPkQuoteDayDelete>>,
  deleteByNodeId?: Maybe<Array<QuoteDayNodeIdDelete>>,
  updateById?: Maybe<Array<QuoteDayOnQuoteDayForFakePublicQuoteDayForeignKey0UsingPkQuoteDayUpdate>>,
  updateByNodeId?: Maybe<Array<QuotePublicOnQuoteDayForFakePublicQuoteDayForeignKey0NodeIdUpdate>>,
  create?: Maybe<Array<FakePublicQuoteDayForeignKey0QuoteDayCreateInput>>,
};

export type FakePublicQuoteDayForeignKey0QuoteDayCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  order: Scalars['Int'],
  date?: Maybe<Scalars['Datetime']>,
  activitySummary?: Maybe<Scalars['String']>,
  activityDetail?: Maybe<Scalars['String']>,
  accommodationId?: Maybe<Scalars['UUID']>,
  propertyId?: Maybe<Scalars['UUID']>,
  quoteAccommodationDetailToAccommodationId?: Maybe<FkQuoteDayQuoteAccommodationDetailAccommodationIdInput>,
  quoteToQuoteId?: Maybe<FkQuoteDayQuoteQuoteIdInput>,
  propertyToPropertyId?: Maybe<QuoteDayPropertyIdFkeyInput>,
  quotePublic?: Maybe<FakePublicQuoteDayForeignKey0Input>,
  quoteDayDestinationsUsingId?: Maybe<FkQuoteDayDestinationQuoteDayDayIdInverseInput>,
};

export type FakePublicQuoteDayForeignKey0QuotePublicCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  key: Scalars['String'],
  status?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['Datetime']>,
  duration?: Maybe<Scalars['Int']>,
  travellerCount?: Maybe<Scalars['Int']>,
  total?: Maybe<Scalars['BigFloat']>,
  heroId?: Maybe<Scalars['UUID']>,
  tripId?: Maybe<Scalars['UUID']>,
  locked?: Maybe<Scalars['Datetime']>,
  baseCurrency?: Maybe<Scalars['String']>,
  inclusions?: Maybe<Scalars['String']>,
  exclusions?: Maybe<Scalars['String']>,
  expires?: Maybe<Scalars['Datetime']>,
  userId?: Maybe<Scalars['UUID']>,
  tripToTripId?: Maybe<FakePublicQuotePublicForeignKey0Input>,
  quoteHeroToHeroId?: Maybe<FakePublicQuotePublicForeignKey1Input>,
  userToUserId?: Maybe<FakePublicQuotePublicForeignKey2Input>,
  quoteAccommodationDetailsUsingId?: Maybe<FakePublicQuoteAccommodationDetailForeignKey0InverseInput>,
  quoteDaysUsingId?: Maybe<FakePublicQuoteDayForeignKey0InverseInput>,
};

export type FakePublicQuotePublicForeignKey0Input = {
  connectById?: Maybe<TripPkTripConnect>,
  connectByNodeId?: Maybe<TripNodeIdConnect>,
  deleteById?: Maybe<TripPkTripDelete>,
  deleteByNodeId?: Maybe<TripNodeIdDelete>,
  updateById?: Maybe<TripOnQuotePublicForFakePublicQuotePublicForeignKey0UsingPkTripUpdate>,
  updateByNodeId?: Maybe<QuotePublicOnQuotePublicForFakePublicQuotePublicForeignKey0NodeIdUpdate>,
  create?: Maybe<FakePublicQuotePublicForeignKey0TripCreateInput>,
};

export type FakePublicQuotePublicForeignKey0InverseInput = {
  deleteOthers?: Maybe<Scalars['Boolean']>,
  connectByKey?: Maybe<Array<QuotePublicFakePublicQuotePublicPrimaryKeyConnect>>,
  connectByNodeId?: Maybe<Array<QuotePublicNodeIdConnect>>,
  deleteByKey?: Maybe<Array<QuotePublicFakePublicQuotePublicPrimaryKeyDelete>>,
  deleteByNodeId?: Maybe<Array<QuotePublicNodeIdDelete>>,
  updateByKey?: Maybe<Array<QuotePublicOnQuotePublicForFakePublicQuotePublicForeignKey0UsingFakePublicQuotePublicPrimaryKeyUpdate>>,
  updateByNodeId?: Maybe<Array<TripOnQuotePublicForFakePublicQuotePublicForeignKey0NodeIdUpdate>>,
  create?: Maybe<Array<FakePublicQuotePublicForeignKey0QuotePublicCreateInput>>,
};

export type FakePublicQuotePublicForeignKey0QuotePublicCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  key: Scalars['String'],
  status?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['Datetime']>,
  duration?: Maybe<Scalars['Int']>,
  travellerCount?: Maybe<Scalars['Int']>,
  total?: Maybe<Scalars['BigFloat']>,
  heroId?: Maybe<Scalars['UUID']>,
  locked?: Maybe<Scalars['Datetime']>,
  baseCurrency?: Maybe<Scalars['String']>,
  inclusions?: Maybe<Scalars['String']>,
  exclusions?: Maybe<Scalars['String']>,
  expires?: Maybe<Scalars['Datetime']>,
  userId?: Maybe<Scalars['UUID']>,
  tripToTripId?: Maybe<FakePublicQuotePublicForeignKey0Input>,
  quoteHeroToHeroId?: Maybe<FakePublicQuotePublicForeignKey1Input>,
  userToUserId?: Maybe<FakePublicQuotePublicForeignKey2Input>,
  quoteAccommodationDetailsUsingId?: Maybe<FakePublicQuoteAccommodationDetailForeignKey0InverseInput>,
  quoteDaysUsingId?: Maybe<FakePublicQuoteDayForeignKey0InverseInput>,
};

export type FakePublicQuotePublicForeignKey0TripCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  customerId?: Maybe<Scalars['UUID']>,
  userId?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  destination?: Maybe<Scalars['String']>,
  dates?: Maybe<Scalars['String']>,
  archived?: Maybe<Scalars['Datetime']>,
  mediaGalleryId?: Maybe<Scalars['UUID']>,
  activeQuoteId?: Maybe<Scalars['UUID']>,
  baseCurrency?: Maybe<Scalars['String']>,
  duration?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['Datetime']>,
  status?: Maybe<Scalars['Int']>,
  agencyId?: Maybe<Scalars['UUID']>,
  agencyMemberId?: Maybe<Scalars['UUID']>,
  customerToCustomerId?: Maybe<FkTripCustomerCustomerIdInput>,
  userToUserId?: Maybe<FkTripUserUserIdInput>,
  mediaGalleryToMediaGalleryId?: Maybe<FkTripMediaGalleryMediaGalleryIdInput>,
  quoteToActiveQuoteId?: Maybe<FkTripQuoteActiveQuoteIdInput>,
  agencyToAgencyId?: Maybe<FkTripAgencyAgencyIdInput>,
  agencyMemberToAgencyMemberId?: Maybe<FkTripAgencyMemberAgencyMemberIdInput>,
  expensesUsingId?: Maybe<FkExpenseTripTripIdInverseInput>,
  invoicesUsingId?: Maybe<FkInvoiceTripTripIdInverseInput>,
  paymentsUsingId?: Maybe<FkPaymentTripTripIdInverseInput>,
  supplierInvoicesUsingId?: Maybe<FkSupplierInvoiceTripTripIdInverseInput>,
  emailsUsingId?: Maybe<FkEmailTripTripIdInverseInput>,
  enquiriesUsingId?: Maybe<FkEnquiryTripTripIdInverseInput>,
  notesUsingId?: Maybe<FkNoteTripTripIdInverseInput>,
  quotesUsingId?: Maybe<FkQuoteTripTripIdInverseInput>,
  testimonialsUsingId?: Maybe<FkTestimonialTripTripIdInverseInput>,
  tripTravellersUsingId?: Maybe<FkTripTravellerTripTripIdInverseInput>,
  tripFlightsUsingId?: Maybe<FkTripFlightTripTripIdInverseInput>,
  quotePublicsUsingId?: Maybe<FakePublicQuotePublicForeignKey0InverseInput>,
};

export type FakePublicQuotePublicForeignKey1Input = {
  connectById?: Maybe<QuoteHeroPkQuoteHeroConnect>,
  connectByNodeId?: Maybe<QuoteHeroNodeIdConnect>,
  deleteById?: Maybe<QuoteHeroPkQuoteHeroDelete>,
  deleteByNodeId?: Maybe<QuoteHeroNodeIdDelete>,
  updateById?: Maybe<QuoteHeroOnQuotePublicForFakePublicQuotePublicForeignKey1UsingPkQuoteHeroUpdate>,
  updateByNodeId?: Maybe<QuotePublicOnQuotePublicForFakePublicQuotePublicForeignKey1NodeIdUpdate>,
  create?: Maybe<FakePublicQuotePublicForeignKey1QuoteHeroCreateInput>,
};

export type FakePublicQuotePublicForeignKey1InverseInput = {
  deleteOthers?: Maybe<Scalars['Boolean']>,
  connectByKey?: Maybe<Array<QuotePublicFakePublicQuotePublicPrimaryKeyConnect>>,
  connectByNodeId?: Maybe<Array<QuotePublicNodeIdConnect>>,
  deleteByKey?: Maybe<Array<QuotePublicFakePublicQuotePublicPrimaryKeyDelete>>,
  deleteByNodeId?: Maybe<Array<QuotePublicNodeIdDelete>>,
  updateByKey?: Maybe<Array<QuotePublicOnQuotePublicForFakePublicQuotePublicForeignKey1UsingFakePublicQuotePublicPrimaryKeyUpdate>>,
  updateByNodeId?: Maybe<Array<QuoteHeroOnQuotePublicForFakePublicQuotePublicForeignKey1NodeIdUpdate>>,
  create?: Maybe<Array<FakePublicQuotePublicForeignKey1QuotePublicCreateInput>>,
};

export type FakePublicQuotePublicForeignKey1QuoteHeroCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  title?: Maybe<Scalars['String']>,
  subtitle?: Maybe<Scalars['String']>,
  imageId?: Maybe<Scalars['UUID']>,
  style?: Maybe<Scalars['String']>,
  mediaItemToImageId?: Maybe<FkQuoteHeroMediaItemImageIdInput>,
  quotesUsingId?: Maybe<FkQuoteQuoteHeroHeroIdInverseInput>,
  quotePublicsUsingId?: Maybe<FakePublicQuotePublicForeignKey1InverseInput>,
};

export type FakePublicQuotePublicForeignKey1QuotePublicCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  key: Scalars['String'],
  status?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['Datetime']>,
  duration?: Maybe<Scalars['Int']>,
  travellerCount?: Maybe<Scalars['Int']>,
  total?: Maybe<Scalars['BigFloat']>,
  tripId?: Maybe<Scalars['UUID']>,
  locked?: Maybe<Scalars['Datetime']>,
  baseCurrency?: Maybe<Scalars['String']>,
  inclusions?: Maybe<Scalars['String']>,
  exclusions?: Maybe<Scalars['String']>,
  expires?: Maybe<Scalars['Datetime']>,
  userId?: Maybe<Scalars['UUID']>,
  tripToTripId?: Maybe<FakePublicQuotePublicForeignKey0Input>,
  quoteHeroToHeroId?: Maybe<FakePublicQuotePublicForeignKey1Input>,
  userToUserId?: Maybe<FakePublicQuotePublicForeignKey2Input>,
  quoteAccommodationDetailsUsingId?: Maybe<FakePublicQuoteAccommodationDetailForeignKey0InverseInput>,
  quoteDaysUsingId?: Maybe<FakePublicQuoteDayForeignKey0InverseInput>,
};

export type FakePublicQuotePublicForeignKey2Input = {
  connectById?: Maybe<UserPkUserConnect>,
  connectByNodeId?: Maybe<UserNodeIdConnect>,
  deleteById?: Maybe<UserPkUserDelete>,
  deleteByNodeId?: Maybe<UserNodeIdDelete>,
  updateById?: Maybe<UserOnQuotePublicForFakePublicQuotePublicForeignKey2UsingPkUserUpdate>,
  updateByNodeId?: Maybe<QuotePublicOnQuotePublicForFakePublicQuotePublicForeignKey2NodeIdUpdate>,
  create?: Maybe<FakePublicQuotePublicForeignKey2UserCreateInput>,
};

export type FakePublicQuotePublicForeignKey2InverseInput = {
  deleteOthers?: Maybe<Scalars['Boolean']>,
  connectByKey?: Maybe<Array<QuotePublicFakePublicQuotePublicPrimaryKeyConnect>>,
  connectByNodeId?: Maybe<Array<QuotePublicNodeIdConnect>>,
  deleteByKey?: Maybe<Array<QuotePublicFakePublicQuotePublicPrimaryKeyDelete>>,
  deleteByNodeId?: Maybe<Array<QuotePublicNodeIdDelete>>,
  updateByKey?: Maybe<Array<QuotePublicOnQuotePublicForFakePublicQuotePublicForeignKey2UsingFakePublicQuotePublicPrimaryKeyUpdate>>,
  updateByNodeId?: Maybe<Array<UserOnQuotePublicForFakePublicQuotePublicForeignKey2NodeIdUpdate>>,
  create?: Maybe<Array<FakePublicQuotePublicForeignKey2QuotePublicCreateInput>>,
};

export type FakePublicQuotePublicForeignKey2QuotePublicCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  key: Scalars['String'],
  status?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['Datetime']>,
  duration?: Maybe<Scalars['Int']>,
  travellerCount?: Maybe<Scalars['Int']>,
  total?: Maybe<Scalars['BigFloat']>,
  heroId?: Maybe<Scalars['UUID']>,
  tripId?: Maybe<Scalars['UUID']>,
  locked?: Maybe<Scalars['Datetime']>,
  baseCurrency?: Maybe<Scalars['String']>,
  inclusions?: Maybe<Scalars['String']>,
  exclusions?: Maybe<Scalars['String']>,
  expires?: Maybe<Scalars['Datetime']>,
  tripToTripId?: Maybe<FakePublicQuotePublicForeignKey0Input>,
  quoteHeroToHeroId?: Maybe<FakePublicQuotePublicForeignKey1Input>,
  userToUserId?: Maybe<FakePublicQuotePublicForeignKey2Input>,
  quoteAccommodationDetailsUsingId?: Maybe<FakePublicQuoteAccommodationDetailForeignKey0InverseInput>,
  quoteDaysUsingId?: Maybe<FakePublicQuoteDayForeignKey0InverseInput>,
};

export type FakePublicQuotePublicForeignKey2UserCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  email?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  skype?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  genderPreposition?: Maybe<Scalars['String']>,
  externalId?: Maybe<Scalars['String']>,
  name: Scalars['String'],
  tripsUsingId?: Maybe<FkTripUserUserIdInverseInput>,
  emailsUsingId?: Maybe<FkEmailUserUserIdInverseInput>,
  notesUsingId?: Maybe<FkNoteUserUserIdInverseInput>,
  quotesUsingId?: Maybe<FkQuoteUserUserIdInverseInput>,
  remindersUsingId?: Maybe<FkReminderUserUserIdInverseInput>,
  transactionNotesUsingId?: Maybe<FkTransactionNoteUserUserIdInverseInput>,
  quotePublicsUsingId?: Maybe<FakePublicQuotePublicForeignKey2InverseInput>,
};

export type FakePublicTripFlightForeignKey0AirportCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  iata?: Maybe<Scalars['String']>,
  icao?: Maybe<Scalars['String']>,
  latitude: Scalars['Float'],
  longitude: Scalars['Float'],
  countryId?: Maybe<Scalars['UUID']>,
  city?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  displayName?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>,
  countryToCountryId?: Maybe<FkAirportCountryCountryIdInput>,
  tripFlightsToDepartureAirportUsingIata?: Maybe<FakePublicTripFlightForeignKey0InverseInput>,
  tripFlightsToArrivalAirportUsingIata?: Maybe<FakePublicTripFlightForeignKey1InverseInput>,
};

export type FakePublicTripFlightForeignKey0Input = {
  connectById?: Maybe<AirportPkAirportConnect>,
  connectByNodeId?: Maybe<AirportNodeIdConnect>,
  deleteById?: Maybe<AirportPkAirportDelete>,
  deleteByNodeId?: Maybe<AirportNodeIdDelete>,
  updateById?: Maybe<AirportOnTripFlightForFakePublicTripFlightForeignKey0UsingPkAirportUpdate>,
  updateByNodeId?: Maybe<TripFlightOnTripFlightForFakePublicTripFlightForeignKey0NodeIdUpdate>,
  create?: Maybe<FakePublicTripFlightForeignKey0AirportCreateInput>,
};

export type FakePublicTripFlightForeignKey0InverseInput = {
  deleteOthers?: Maybe<Scalars['Boolean']>,
  connectById?: Maybe<Array<TripFlightPkTripFlightConnect>>,
  connectByNodeId?: Maybe<Array<TripFlightNodeIdConnect>>,
  deleteById?: Maybe<Array<TripFlightPkTripFlightDelete>>,
  deleteByNodeId?: Maybe<Array<TripFlightNodeIdDelete>>,
  updateById?: Maybe<Array<TripFlightOnTripFlightForFakePublicTripFlightForeignKey0UsingPkTripFlightUpdate>>,
  updateByNodeId?: Maybe<Array<AirportOnTripFlightForFakePublicTripFlightForeignKey0NodeIdUpdate>>,
  create?: Maybe<Array<FakePublicTripFlightForeignKey0TripFlightCreateInput>>,
};

export type FakePublicTripFlightForeignKey0TripFlightCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  arrival: Scalars['Datetime'],
  arrivalAirport?: Maybe<Scalars['String']>,
  carrier?: Maybe<Scalars['String']>,
  departure: Scalars['Datetime'],
  notes?: Maybe<Scalars['String']>,
  number?: Maybe<Scalars['String']>,
  tripId?: Maybe<Scalars['UUID']>,
  tripToTripId?: Maybe<FkTripFlightTripTripIdInput>,
  airportToDepartureAirport?: Maybe<FakePublicTripFlightForeignKey0Input>,
  airportToArrivalAirport?: Maybe<FakePublicTripFlightForeignKey1Input>,
};

export type FakePublicTripFlightForeignKey1AirportCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  iata?: Maybe<Scalars['String']>,
  icao?: Maybe<Scalars['String']>,
  latitude: Scalars['Float'],
  longitude: Scalars['Float'],
  countryId?: Maybe<Scalars['UUID']>,
  city?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  displayName?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>,
  countryToCountryId?: Maybe<FkAirportCountryCountryIdInput>,
  tripFlightsToDepartureAirportUsingIata?: Maybe<FakePublicTripFlightForeignKey0InverseInput>,
  tripFlightsToArrivalAirportUsingIata?: Maybe<FakePublicTripFlightForeignKey1InverseInput>,
};

export type FakePublicTripFlightForeignKey1Input = {
  connectById?: Maybe<AirportPkAirportConnect>,
  connectByNodeId?: Maybe<AirportNodeIdConnect>,
  deleteById?: Maybe<AirportPkAirportDelete>,
  deleteByNodeId?: Maybe<AirportNodeIdDelete>,
  updateById?: Maybe<AirportOnTripFlightForFakePublicTripFlightForeignKey1UsingPkAirportUpdate>,
  updateByNodeId?: Maybe<TripFlightOnTripFlightForFakePublicTripFlightForeignKey1NodeIdUpdate>,
  create?: Maybe<FakePublicTripFlightForeignKey1AirportCreateInput>,
};

export type FakePublicTripFlightForeignKey1InverseInput = {
  deleteOthers?: Maybe<Scalars['Boolean']>,
  connectById?: Maybe<Array<TripFlightPkTripFlightConnect>>,
  connectByNodeId?: Maybe<Array<TripFlightNodeIdConnect>>,
  deleteById?: Maybe<Array<TripFlightPkTripFlightDelete>>,
  deleteByNodeId?: Maybe<Array<TripFlightNodeIdDelete>>,
  updateById?: Maybe<Array<TripFlightOnTripFlightForFakePublicTripFlightForeignKey1UsingPkTripFlightUpdate>>,
  updateByNodeId?: Maybe<Array<AirportOnTripFlightForFakePublicTripFlightForeignKey1NodeIdUpdate>>,
  create?: Maybe<Array<FakePublicTripFlightForeignKey1TripFlightCreateInput>>,
};

export type FakePublicTripFlightForeignKey1TripFlightCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  arrival: Scalars['Datetime'],
  carrier?: Maybe<Scalars['String']>,
  departure: Scalars['Datetime'],
  departureAirport?: Maybe<Scalars['String']>,
  notes?: Maybe<Scalars['String']>,
  number?: Maybe<Scalars['String']>,
  tripId?: Maybe<Scalars['UUID']>,
  tripToTripId?: Maybe<FkTripFlightTripTripIdInput>,
  airportToDepartureAirport?: Maybe<FakePublicTripFlightForeignKey0Input>,
  airportToArrivalAirport?: Maybe<FakePublicTripFlightForeignKey1Input>,
};

export type Feature = Node & {
   __typename?: 'Feature',
  nodeId: Scalars['ID'],
  id: Scalars['UUID'],
  body?: Maybe<Scalars['String']>,
  created: Scalars['Datetime'],
  modified: Scalars['Datetime'],
  name?: Maybe<Scalars['String']>,
  galleryId?: Maybe<Scalars['UUID']>,
  gallery?: Maybe<MediaGallery>,
};

export type FeatureCondition = {
  id?: Maybe<Scalars['UUID']>,
  body?: Maybe<Scalars['String']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  galleryId?: Maybe<Scalars['UUID']>,
};

export type FeatureFilter = {
  id?: Maybe<UuidFilter>,
  body?: Maybe<StringFilter>,
  created?: Maybe<DatetimeFilter>,
  modified?: Maybe<DatetimeFilter>,
  name?: Maybe<StringFilter>,
  galleryId?: Maybe<UuidFilter>,
  gallery?: Maybe<MediaGalleryFilter>,
  galleryExists?: Maybe<Scalars['Boolean']>,
  and?: Maybe<Array<FeatureFilter>>,
  or?: Maybe<Array<FeatureFilter>>,
  not?: Maybe<FeatureFilter>,
};

export type FeatureInput = {
  id?: Maybe<Scalars['UUID']>,
  body?: Maybe<Scalars['String']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  galleryId?: Maybe<Scalars['UUID']>,
  mediaGalleryToGalleryId?: Maybe<FkFeatureMediaGalleryGalleryIdInput>,
};

export type FeatureNodeIdConnect = {
  nodeId: Scalars['ID'],
};

export type FeatureNodeIdDelete = {
  nodeId: Scalars['ID'],
};

export type FeatureOnFeatureForFkFeatureMediaGalleryGalleryIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: MediaGalleryPatch,
};

export type FeatureOnFeatureForFkFeatureMediaGalleryGalleryIdUsingPkFeatureUpdate = {
  patch: UpdateFeatureOnFeatureForFkFeatureMediaGalleryGalleryIdPatch,
  id: Scalars['UUID'],
};

export type FeaturePatch = {
  id?: Maybe<Scalars['UUID']>,
  body?: Maybe<Scalars['String']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  galleryId?: Maybe<Scalars['UUID']>,
  mediaGalleryToGalleryId?: Maybe<FkFeatureMediaGalleryGalleryIdInput>,
};

export type FeaturePkFeatureConnect = {
  id: Scalars['UUID'],
};

export type FeaturePkFeatureDelete = {
  id: Scalars['UUID'],
};

export type FeaturesConnection = {
   __typename?: 'FeaturesConnection',
  nodes: Array<Maybe<Feature>>,
  edges: Array<FeaturesEdge>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
};

export type FeaturesEdge = {
   __typename?: 'FeaturesEdge',
  cursor?: Maybe<Scalars['Cursor']>,
  node?: Maybe<Feature>,
};

export enum FeaturesOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  BodyAsc = 'BODY_ASC',
  BodyDesc = 'BODY_DESC',
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  GalleryIdAsc = 'GALLERY_ID_ASC',
  GalleryIdDesc = 'GALLERY_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type FinanceCategoriesConnection = {
   __typename?: 'FinanceCategoriesConnection',
  nodes: Array<Maybe<FinanceCategory>>,
  edges: Array<FinanceCategoriesEdge>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
};

export type FinanceCategoriesEdge = {
   __typename?: 'FinanceCategoriesEdge',
  cursor?: Maybe<Scalars['Cursor']>,
  node?: Maybe<FinanceCategory>,
};

export enum FinanceCategoriesOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  SummaryAsc = 'SUMMARY_ASC',
  SummaryDesc = 'SUMMARY_DESC',
  TypeAsc = 'TYPE_ASC',
  TypeDesc = 'TYPE_DESC',
  CodeAsc = 'CODE_ASC',
  CodeDesc = 'CODE_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type FinanceCategory = Node & {
   __typename?: 'FinanceCategory',
  nodeId: Scalars['ID'],
  id: Scalars['UUID'],
  created: Scalars['Datetime'],
  modified: Scalars['Datetime'],
  name?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  type: Scalars['Int'],
  code?: Maybe<Scalars['String']>,
  expensesByCategoryId: ExpensesConnection,
  invoicesByCategoryId: InvoicesConnection,
  paymentsByCategoryId: PaymentsConnection,
  supplierInvoicesByCategoryId: SupplierInvoicesConnection,
  transactionsByCategoryId: TransactionsConnection,
};


export type FinanceCategoryExpensesByCategoryIdArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<ExpensesOrderBy>>,
  condition?: Maybe<ExpenseCondition>,
  filter?: Maybe<ExpenseFilter>
};


export type FinanceCategoryInvoicesByCategoryIdArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<InvoicesOrderBy>>,
  condition?: Maybe<InvoiceCondition>,
  filter?: Maybe<InvoiceFilter>
};


export type FinanceCategoryPaymentsByCategoryIdArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<PaymentsOrderBy>>,
  condition?: Maybe<PaymentCondition>,
  filter?: Maybe<PaymentFilter>
};


export type FinanceCategorySupplierInvoicesByCategoryIdArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<SupplierInvoicesOrderBy>>,
  condition?: Maybe<SupplierInvoiceCondition>,
  filter?: Maybe<SupplierInvoiceFilter>
};


export type FinanceCategoryTransactionsByCategoryIdArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<TransactionsOrderBy>>,
  condition?: Maybe<TransactionCondition>,
  filter?: Maybe<TransactionFilter>
};

export type FinanceCategoryCondition = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['Int']>,
  code?: Maybe<Scalars['String']>,
};

export type FinanceCategoryFilter = {
  id?: Maybe<UuidFilter>,
  created?: Maybe<DatetimeFilter>,
  modified?: Maybe<DatetimeFilter>,
  name?: Maybe<StringFilter>,
  summary?: Maybe<StringFilter>,
  type?: Maybe<IntFilter>,
  code?: Maybe<StringFilter>,
  expensesByCategoryId?: Maybe<FinanceCategoryToManyExpenseFilter>,
  expensesByCategoryIdExist?: Maybe<Scalars['Boolean']>,
  invoicesByCategoryId?: Maybe<FinanceCategoryToManyInvoiceFilter>,
  invoicesByCategoryIdExist?: Maybe<Scalars['Boolean']>,
  paymentsByCategoryId?: Maybe<FinanceCategoryToManyPaymentFilter>,
  paymentsByCategoryIdExist?: Maybe<Scalars['Boolean']>,
  supplierInvoicesByCategoryId?: Maybe<FinanceCategoryToManySupplierInvoiceFilter>,
  supplierInvoicesByCategoryIdExist?: Maybe<Scalars['Boolean']>,
  transactionsByCategoryId?: Maybe<FinanceCategoryToManyTransactionFilter>,
  transactionsByCategoryIdExist?: Maybe<Scalars['Boolean']>,
  and?: Maybe<Array<FinanceCategoryFilter>>,
  or?: Maybe<Array<FinanceCategoryFilter>>,
  not?: Maybe<FinanceCategoryFilter>,
};

export type FinanceCategoryInput = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['Int']>,
  code?: Maybe<Scalars['String']>,
  expensesUsingId?: Maybe<FkExpenseFinanceCategoryCategoryIdInverseInput>,
  invoicesUsingId?: Maybe<FkInvoiceFinanceCategoryCategoryIdInverseInput>,
  paymentsUsingId?: Maybe<FkPaymentFinanceCategoryCategoryIdInverseInput>,
  supplierInvoicesUsingId?: Maybe<FkSupplierInvoiceFinanceCategoryCategoryIdInverseInput>,
  transactionsUsingId?: Maybe<FkTransactionFinanceCategoryCategoryIdInverseInput>,
};

export type FinanceCategoryNodeIdConnect = {
  nodeId: Scalars['ID'],
};

export type FinanceCategoryNodeIdDelete = {
  nodeId: Scalars['ID'],
};

export type FinanceCategoryOnExpenseForFkExpenseFinanceCategoryCategoryIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: ExpensePatch,
};

export type FinanceCategoryOnExpenseForFkExpenseFinanceCategoryCategoryIdUsingPkFinanceCategoryUpdate = {
  patch: UpdateFinanceCategoryOnExpenseForFkExpenseFinanceCategoryCategoryIdPatch,
  id: Scalars['UUID'],
};

export type FinanceCategoryOnInvoiceForFkInvoiceFinanceCategoryCategoryIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: InvoicePatch,
};

export type FinanceCategoryOnInvoiceForFkInvoiceFinanceCategoryCategoryIdUsingPkFinanceCategoryUpdate = {
  patch: UpdateFinanceCategoryOnInvoiceForFkInvoiceFinanceCategoryCategoryIdPatch,
  id: Scalars['UUID'],
};

export type FinanceCategoryOnPaymentForFkPaymentFinanceCategoryCategoryIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: PaymentPatch,
};

export type FinanceCategoryOnPaymentForFkPaymentFinanceCategoryCategoryIdUsingPkFinanceCategoryUpdate = {
  patch: UpdateFinanceCategoryOnPaymentForFkPaymentFinanceCategoryCategoryIdPatch,
  id: Scalars['UUID'],
};

export type FinanceCategoryOnSupplierInvoiceForFkSupplierInvoiceFinanceCategoryCategoryIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: SupplierInvoicePatch,
};

export type FinanceCategoryOnSupplierInvoiceForFkSupplierInvoiceFinanceCategoryCategoryIdUsingPkFinanceCategoryUpdate = {
  patch: UpdateFinanceCategoryOnSupplierInvoiceForFkSupplierInvoiceFinanceCategoryCategoryIdPatch,
  id: Scalars['UUID'],
};

export type FinanceCategoryOnTransactionForFkTransactionFinanceCategoryCategoryIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: TransactionPatch,
};

export type FinanceCategoryOnTransactionForFkTransactionFinanceCategoryCategoryIdUsingPkFinanceCategoryUpdate = {
  patch: UpdateFinanceCategoryOnTransactionForFkTransactionFinanceCategoryCategoryIdPatch,
  id: Scalars['UUID'],
};

export type FinanceCategoryPatch = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['Int']>,
  code?: Maybe<Scalars['String']>,
  expensesUsingId?: Maybe<FkExpenseFinanceCategoryCategoryIdInverseInput>,
  invoicesUsingId?: Maybe<FkInvoiceFinanceCategoryCategoryIdInverseInput>,
  paymentsUsingId?: Maybe<FkPaymentFinanceCategoryCategoryIdInverseInput>,
  supplierInvoicesUsingId?: Maybe<FkSupplierInvoiceFinanceCategoryCategoryIdInverseInput>,
  transactionsUsingId?: Maybe<FkTransactionFinanceCategoryCategoryIdInverseInput>,
};

export type FinanceCategoryPkFinanceCategoryConnect = {
  id: Scalars['UUID'],
};

export type FinanceCategoryPkFinanceCategoryDelete = {
  id: Scalars['UUID'],
};

export type FinanceCategoryToManyExpenseFilter = {
  every?: Maybe<ExpenseFilter>,
  some?: Maybe<ExpenseFilter>,
  none?: Maybe<ExpenseFilter>,
};

export type FinanceCategoryToManyInvoiceFilter = {
  every?: Maybe<InvoiceFilter>,
  some?: Maybe<InvoiceFilter>,
  none?: Maybe<InvoiceFilter>,
};

export type FinanceCategoryToManyPaymentFilter = {
  every?: Maybe<PaymentFilter>,
  some?: Maybe<PaymentFilter>,
  none?: Maybe<PaymentFilter>,
};

export type FinanceCategoryToManySupplierInvoiceFilter = {
  every?: Maybe<SupplierInvoiceFilter>,
  some?: Maybe<SupplierInvoiceFilter>,
  none?: Maybe<SupplierInvoiceFilter>,
};

export type FinanceCategoryToManyTransactionFilter = {
  every?: Maybe<TransactionFilter>,
  some?: Maybe<TransactionFilter>,
  none?: Maybe<TransactionFilter>,
};

export type FkAgencyMediaItemLogoIdAgencyCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  mediaItemToLogoId?: Maybe<FkAgencyMediaItemLogoIdInput>,
  agencyMembersUsingId?: Maybe<FkAgencyMemberAgencyAgencyIdInverseInput>,
  tripsUsingId?: Maybe<FkTripAgencyAgencyIdInverseInput>,
};

export type FkAgencyMediaItemLogoIdInput = {
  connectById?: Maybe<MediaItemPkMediaItemConnect>,
  connectByNodeId?: Maybe<MediaItemNodeIdConnect>,
  deleteById?: Maybe<MediaItemPkMediaItemDelete>,
  deleteByNodeId?: Maybe<MediaItemNodeIdDelete>,
  updateById?: Maybe<MediaItemOnAgencyForFkAgencyMediaItemLogoIdUsingPkMediaItemUpdate>,
  updateByNodeId?: Maybe<AgencyOnAgencyForFkAgencyMediaItemLogoIdNodeIdUpdate>,
  create?: Maybe<FkAgencyMediaItemLogoIdMediaItemCreateInput>,
};

export type FkAgencyMediaItemLogoIdInverseInput = {
  deleteOthers?: Maybe<Scalars['Boolean']>,
  connectById?: Maybe<Array<AgencyPkAgencyConnect>>,
  connectByNodeId?: Maybe<Array<AgencyNodeIdConnect>>,
  deleteById?: Maybe<Array<AgencyPkAgencyDelete>>,
  deleteByNodeId?: Maybe<Array<AgencyNodeIdDelete>>,
  updateById?: Maybe<Array<AgencyOnAgencyForFkAgencyMediaItemLogoIdUsingPkAgencyUpdate>>,
  updateByNodeId?: Maybe<Array<MediaItemOnAgencyForFkAgencyMediaItemLogoIdNodeIdUpdate>>,
  create?: Maybe<Array<FkAgencyMediaItemLogoIdAgencyCreateInput>>,
};

export type FkAgencyMediaItemLogoIdMediaItemCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  contentType?: Maybe<Scalars['String']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  fileName?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  hash?: Maybe<Scalars['String']>,
  agenciesUsingId?: Maybe<FkAgencyMediaItemLogoIdInverseInput>,
  supplierInvoicesUsingId?: Maybe<FkSupplierInvoiceMediaItemMediaItemIdInverseInput>,
  mediaGalleryItemsUsingId?: Maybe<FkMediaGalleryItemMediaItemMediaItemIdInverseInput>,
  propertiesUsingId?: Maybe<FkPropertyMediaItemHeroMediaIdInverseInput>,
  quotesUsingId?: Maybe<FkQuoteMediaItemHeroImageIdInverseInput>,
  quoteHeroesUsingId?: Maybe<FkQuoteHeroMediaItemImageIdInverseInput>,
};

export type FkAgencyMemberAgencyAgencyIdAgencyCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  logoId?: Maybe<Scalars['UUID']>,
  name?: Maybe<Scalars['String']>,
  mediaItemToLogoId?: Maybe<FkAgencyMediaItemLogoIdInput>,
  agencyMembersUsingId?: Maybe<FkAgencyMemberAgencyAgencyIdInverseInput>,
  tripsUsingId?: Maybe<FkTripAgencyAgencyIdInverseInput>,
};

export type FkAgencyMemberAgencyAgencyIdAgencyMemberCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  firstName?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  skype?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  genderPreposition?: Maybe<Scalars['String']>,
  agencyToAgencyId?: Maybe<FkAgencyMemberAgencyAgencyIdInput>,
  tripsUsingId?: Maybe<FkTripAgencyMemberAgencyMemberIdInverseInput>,
};

export type FkAgencyMemberAgencyAgencyIdInput = {
  connectById?: Maybe<AgencyPkAgencyConnect>,
  connectByNodeId?: Maybe<AgencyNodeIdConnect>,
  deleteById?: Maybe<AgencyPkAgencyDelete>,
  deleteByNodeId?: Maybe<AgencyNodeIdDelete>,
  updateById?: Maybe<AgencyOnAgencyMemberForFkAgencyMemberAgencyAgencyIdUsingPkAgencyUpdate>,
  updateByNodeId?: Maybe<AgencyMemberOnAgencyMemberForFkAgencyMemberAgencyAgencyIdNodeIdUpdate>,
  create?: Maybe<FkAgencyMemberAgencyAgencyIdAgencyCreateInput>,
};

export type FkAgencyMemberAgencyAgencyIdInverseInput = {
  deleteOthers?: Maybe<Scalars['Boolean']>,
  connectById?: Maybe<Array<AgencyMemberPkAgencyMemberConnect>>,
  connectByNodeId?: Maybe<Array<AgencyMemberNodeIdConnect>>,
  deleteById?: Maybe<Array<AgencyMemberPkAgencyMemberDelete>>,
  deleteByNodeId?: Maybe<Array<AgencyMemberNodeIdDelete>>,
  updateById?: Maybe<Array<AgencyMemberOnAgencyMemberForFkAgencyMemberAgencyAgencyIdUsingPkAgencyMemberUpdate>>,
  updateByNodeId?: Maybe<Array<AgencyOnAgencyMemberForFkAgencyMemberAgencyAgencyIdNodeIdUpdate>>,
  create?: Maybe<Array<FkAgencyMemberAgencyAgencyIdAgencyMemberCreateInput>>,
};

export type FkAirportCountryCountryIdAirportCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  iata?: Maybe<Scalars['String']>,
  icao?: Maybe<Scalars['String']>,
  latitude: Scalars['Float'],
  longitude: Scalars['Float'],
  city?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  displayName?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>,
  countryToCountryId?: Maybe<FkAirportCountryCountryIdInput>,
  tripFlightsToDepartureAirportUsingIata?: Maybe<FakePublicTripFlightForeignKey0InverseInput>,
  tripFlightsToArrivalAirportUsingIata?: Maybe<FakePublicTripFlightForeignKey1InverseInput>,
};

export type FkAirportCountryCountryIdCountryCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  iso2?: Maybe<Scalars['String']>,
  iso3?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  airportsUsingId?: Maybe<FkAirportCountryCountryIdInverseInput>,
  destinationsUsingId?: Maybe<FkDestinationCountryCountryIdInverseInput>,
  propertiesUsingId?: Maybe<FkPropertyCountryCountryIdInverseInput>,
};

export type FkAirportCountryCountryIdInput = {
  connectById?: Maybe<CountryPkCountryConnect>,
  connectByNodeId?: Maybe<CountryNodeIdConnect>,
  deleteById?: Maybe<CountryPkCountryDelete>,
  deleteByNodeId?: Maybe<CountryNodeIdDelete>,
  updateById?: Maybe<CountryOnAirportForFkAirportCountryCountryIdUsingPkCountryUpdate>,
  updateByNodeId?: Maybe<AirportOnAirportForFkAirportCountryCountryIdNodeIdUpdate>,
  create?: Maybe<FkAirportCountryCountryIdCountryCreateInput>,
};

export type FkAirportCountryCountryIdInverseInput = {
  deleteOthers?: Maybe<Scalars['Boolean']>,
  connectById?: Maybe<Array<AirportPkAirportConnect>>,
  connectByNodeId?: Maybe<Array<AirportNodeIdConnect>>,
  deleteById?: Maybe<Array<AirportPkAirportDelete>>,
  deleteByNodeId?: Maybe<Array<AirportNodeIdDelete>>,
  updateById?: Maybe<Array<AirportOnAirportForFkAirportCountryCountryIdUsingPkAirportUpdate>>,
  updateByNodeId?: Maybe<Array<CountryOnAirportForFkAirportCountryCountryIdNodeIdUpdate>>,
  create?: Maybe<Array<FkAirportCountryCountryIdAirportCreateInput>>,
};

export type FkCustomerTravellerCustomerCustomerIdCustomerCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  email?: Maybe<Scalars['String']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  customerTravellersUsingId?: Maybe<FkCustomerTravellerCustomerCustomerIdInverseInput>,
  tripsUsingId?: Maybe<FkTripCustomerCustomerIdInverseInput>,
  emailsUsingId?: Maybe<FkEmailCustomerCustomerIdInverseInput>,
  enquiriesUsingId?: Maybe<FkEnquiryCustomerCustomerIdInverseInput>,
};

export type FkCustomerTravellerCustomerCustomerIdCustomerTravellerCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  travellerId?: Maybe<Scalars['UUID']>,
  customerToCustomerId?: Maybe<FkCustomerTravellerCustomerCustomerIdInput>,
  travellerToTravellerId?: Maybe<FkCustomerTravellerTravellerTravellerIdInput>,
};

export type FkCustomerTravellerCustomerCustomerIdInput = {
  connectById?: Maybe<CustomerPkCustomerConnect>,
  connectByNodeId?: Maybe<CustomerNodeIdConnect>,
  deleteById?: Maybe<CustomerPkCustomerDelete>,
  deleteByNodeId?: Maybe<CustomerNodeIdDelete>,
  updateById?: Maybe<CustomerOnCustomerTravellerForFkCustomerTravellerCustomerCustomerIdUsingPkCustomerUpdate>,
  updateByNodeId?: Maybe<CustomerTravellerOnCustomerTravellerForFkCustomerTravellerCustomerCustomerIdNodeIdUpdate>,
  create?: Maybe<FkCustomerTravellerCustomerCustomerIdCustomerCreateInput>,
};

export type FkCustomerTravellerCustomerCustomerIdInverseInput = {
  deleteOthers?: Maybe<Scalars['Boolean']>,
  connectById?: Maybe<Array<CustomerTravellerPkCustomerTravellerConnect>>,
  connectByNodeId?: Maybe<Array<CustomerTravellerNodeIdConnect>>,
  deleteById?: Maybe<Array<CustomerTravellerPkCustomerTravellerDelete>>,
  deleteByNodeId?: Maybe<Array<CustomerTravellerNodeIdDelete>>,
  updateById?: Maybe<Array<CustomerTravellerOnCustomerTravellerForFkCustomerTravellerCustomerCustomerIdUsingPkCustomerTravellerUpdate>>,
  updateByNodeId?: Maybe<Array<CustomerOnCustomerTravellerForFkCustomerTravellerCustomerCustomerIdNodeIdUpdate>>,
  create?: Maybe<Array<FkCustomerTravellerCustomerCustomerIdCustomerTravellerCreateInput>>,
};

export type FkCustomerTravellerTravellerTravellerIdCustomerTravellerCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  customerId?: Maybe<Scalars['UUID']>,
  modified?: Maybe<Scalars['Datetime']>,
  customerToCustomerId?: Maybe<FkCustomerTravellerCustomerCustomerIdInput>,
  travellerToTravellerId?: Maybe<FkCustomerTravellerTravellerTravellerIdInput>,
};

export type FkCustomerTravellerTravellerTravellerIdInput = {
  connectById?: Maybe<TravellerPkTravellerConnect>,
  connectByNodeId?: Maybe<TravellerNodeIdConnect>,
  deleteById?: Maybe<TravellerPkTravellerDelete>,
  deleteByNodeId?: Maybe<TravellerNodeIdDelete>,
  updateById?: Maybe<TravellerOnCustomerTravellerForFkCustomerTravellerTravellerTravellerIdUsingPkTravellerUpdate>,
  updateByNodeId?: Maybe<CustomerTravellerOnCustomerTravellerForFkCustomerTravellerTravellerTravellerIdNodeIdUpdate>,
  create?: Maybe<FkCustomerTravellerTravellerTravellerIdTravellerCreateInput>,
};

export type FkCustomerTravellerTravellerTravellerIdInverseInput = {
  deleteOthers?: Maybe<Scalars['Boolean']>,
  connectById?: Maybe<Array<CustomerTravellerPkCustomerTravellerConnect>>,
  connectByNodeId?: Maybe<Array<CustomerTravellerNodeIdConnect>>,
  deleteById?: Maybe<Array<CustomerTravellerPkCustomerTravellerDelete>>,
  deleteByNodeId?: Maybe<Array<CustomerTravellerNodeIdDelete>>,
  updateById?: Maybe<Array<CustomerTravellerOnCustomerTravellerForFkCustomerTravellerTravellerTravellerIdUsingPkCustomerTravellerUpdate>>,
  updateByNodeId?: Maybe<Array<TravellerOnCustomerTravellerForFkCustomerTravellerTravellerTravellerIdNodeIdUpdate>>,
  create?: Maybe<Array<FkCustomerTravellerTravellerTravellerIdCustomerTravellerCreateInput>>,
};

export type FkCustomerTravellerTravellerTravellerIdTravellerCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  dateOfBirth: Scalars['Datetime'],
  dietaryRequirements?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  height: Scalars['Int'],
  lastName?: Maybe<Scalars['String']>,
  medicalConditions?: Maybe<Scalars['String']>,
  middleName?: Maybe<Scalars['String']>,
  modified?: Maybe<Scalars['Datetime']>,
  nationality?: Maybe<Scalars['String']>,
  notes?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  weight: Scalars['Int'],
  emergencyContact?: Maybe<Scalars['String']>,
  insuranceDetails?: Maybe<Scalars['String']>,
  customerTravellersUsingId?: Maybe<FkCustomerTravellerTravellerTravellerIdInverseInput>,
  passportsUsingId?: Maybe<FkPassportTravellerTravellerIdInverseInput>,
  tripTravellersUsingId?: Maybe<FkTripTravellerTravellerTravellerIdInverseInput>,
};

export type FkDestinationCountryCountryIdCountryCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  iso2?: Maybe<Scalars['String']>,
  iso3?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  airportsUsingId?: Maybe<FkAirportCountryCountryIdInverseInput>,
  destinationsUsingId?: Maybe<FkDestinationCountryCountryIdInverseInput>,
  propertiesUsingId?: Maybe<FkPropertyCountryCountryIdInverseInput>,
};

export type FkDestinationCountryCountryIdDestinationCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  body?: Maybe<Scalars['String']>,
  galleryId?: Maybe<Scalars['UUID']>,
  parentId?: Maybe<Scalars['UUID']>,
  mediaGalleryToGalleryId?: Maybe<FkDestinationMediaGalleryGalleryIdInput>,
  destinationToParentId?: Maybe<FkDestinationDestinationParentIdInput>,
  countryToCountryId?: Maybe<FkDestinationCountryCountryIdInput>,
  destinationFeaturesUsingId?: Maybe<FkDestinationFeatureDestinationDestinationIdInverseInput>,
  destinationGuidesUsingId?: Maybe<FkDestinationGuideDestinationDestinationIdInverseInput>,
  quoteDayDestinationsUsingId?: Maybe<FkQuoteDayDestinationDestinationDestinationIdInverseInput>,
};

export type FkDestinationCountryCountryIdInput = {
  connectById?: Maybe<CountryPkCountryConnect>,
  connectByNodeId?: Maybe<CountryNodeIdConnect>,
  deleteById?: Maybe<CountryPkCountryDelete>,
  deleteByNodeId?: Maybe<CountryNodeIdDelete>,
  updateById?: Maybe<CountryOnDestinationForFkDestinationCountryCountryIdUsingPkCountryUpdate>,
  updateByNodeId?: Maybe<DestinationOnDestinationForFkDestinationCountryCountryIdNodeIdUpdate>,
  create?: Maybe<FkDestinationCountryCountryIdCountryCreateInput>,
};

export type FkDestinationCountryCountryIdInverseInput = {
  deleteOthers?: Maybe<Scalars['Boolean']>,
  connectById?: Maybe<Array<DestinationPkDestinationConnect>>,
  connectByNodeId?: Maybe<Array<DestinationNodeIdConnect>>,
  deleteById?: Maybe<Array<DestinationPkDestinationDelete>>,
  deleteByNodeId?: Maybe<Array<DestinationNodeIdDelete>>,
  updateById?: Maybe<Array<DestinationOnDestinationForFkDestinationCountryCountryIdUsingPkDestinationUpdate>>,
  updateByNodeId?: Maybe<Array<CountryOnDestinationForFkDestinationCountryCountryIdNodeIdUpdate>>,
  create?: Maybe<Array<FkDestinationCountryCountryIdDestinationCreateInput>>,
};

export type FkDestinationDestinationParentIdDestinationCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  body?: Maybe<Scalars['String']>,
  galleryId?: Maybe<Scalars['UUID']>,
  countryId?: Maybe<Scalars['UUID']>,
  mediaGalleryToGalleryId?: Maybe<FkDestinationMediaGalleryGalleryIdInput>,
  destinationToParentId?: Maybe<FkDestinationDestinationParentIdInput>,
  countryToCountryId?: Maybe<FkDestinationCountryCountryIdInput>,
  destinationFeaturesUsingId?: Maybe<FkDestinationFeatureDestinationDestinationIdInverseInput>,
  destinationGuidesUsingId?: Maybe<FkDestinationGuideDestinationDestinationIdInverseInput>,
  quoteDayDestinationsUsingId?: Maybe<FkQuoteDayDestinationDestinationDestinationIdInverseInput>,
};

export type FkDestinationDestinationParentIdInput = {
  connectById?: Maybe<DestinationPkDestinationConnect>,
  connectByNodeId?: Maybe<DestinationNodeIdConnect>,
  deleteById?: Maybe<DestinationPkDestinationDelete>,
  deleteByNodeId?: Maybe<DestinationNodeIdDelete>,
  updateById?: Maybe<DestinationOnDestinationForFkDestinationDestinationParentIdUsingPkDestinationUpdate>,
  updateByNodeId?: Maybe<DestinationOnDestinationForFkDestinationDestinationParentIdNodeIdUpdate>,
  create?: Maybe<FkDestinationDestinationParentIdDestinationCreateInput>,
};

export type FkDestinationFeatureDestinationDestinationIdDestinationCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  body?: Maybe<Scalars['String']>,
  galleryId?: Maybe<Scalars['UUID']>,
  parentId?: Maybe<Scalars['UUID']>,
  countryId?: Maybe<Scalars['UUID']>,
  mediaGalleryToGalleryId?: Maybe<FkDestinationMediaGalleryGalleryIdInput>,
  destinationToParentId?: Maybe<FkDestinationDestinationParentIdInput>,
  countryToCountryId?: Maybe<FkDestinationCountryCountryIdInput>,
  destinationFeaturesUsingId?: Maybe<FkDestinationFeatureDestinationDestinationIdInverseInput>,
  destinationGuidesUsingId?: Maybe<FkDestinationGuideDestinationDestinationIdInverseInput>,
  quoteDayDestinationsUsingId?: Maybe<FkQuoteDayDestinationDestinationDestinationIdInverseInput>,
};

export type FkDestinationFeatureDestinationDestinationIdDestinationFeatureCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  body?: Maybe<Scalars['String']>,
  created?: Maybe<Scalars['Datetime']>,
  galleryId?: Maybe<Scalars['UUID']>,
  modified?: Maybe<Scalars['Datetime']>,
  title?: Maybe<Scalars['String']>,
  destinationToDestinationId?: Maybe<FkDestinationFeatureDestinationDestinationIdInput>,
  mediaGalleryToGalleryId?: Maybe<FkDestinationFeatureMediaGalleryGalleryIdInput>,
};

export type FkDestinationFeatureDestinationDestinationIdInput = {
  connectById?: Maybe<DestinationPkDestinationConnect>,
  connectByNodeId?: Maybe<DestinationNodeIdConnect>,
  deleteById?: Maybe<DestinationPkDestinationDelete>,
  deleteByNodeId?: Maybe<DestinationNodeIdDelete>,
  updateById?: Maybe<DestinationOnDestinationFeatureForFkDestinationFeatureDestinationDestinationIdUsingPkDestinationUpdate>,
  updateByNodeId?: Maybe<DestinationFeatureOnDestinationFeatureForFkDestinationFeatureDestinationDestinationIdNodeIdUpdate>,
  create?: Maybe<FkDestinationFeatureDestinationDestinationIdDestinationCreateInput>,
};

export type FkDestinationFeatureDestinationDestinationIdInverseInput = {
  deleteOthers?: Maybe<Scalars['Boolean']>,
  connectById?: Maybe<Array<DestinationFeaturePkDestinationFeatureConnect>>,
  connectByNodeId?: Maybe<Array<DestinationFeatureNodeIdConnect>>,
  deleteById?: Maybe<Array<DestinationFeaturePkDestinationFeatureDelete>>,
  deleteByNodeId?: Maybe<Array<DestinationFeatureNodeIdDelete>>,
  updateById?: Maybe<Array<DestinationFeatureOnDestinationFeatureForFkDestinationFeatureDestinationDestinationIdUsingPkDestinationFeatureUpdate>>,
  updateByNodeId?: Maybe<Array<DestinationOnDestinationFeatureForFkDestinationFeatureDestinationDestinationIdNodeIdUpdate>>,
  create?: Maybe<Array<FkDestinationFeatureDestinationDestinationIdDestinationFeatureCreateInput>>,
};

export type FkDestinationFeatureMediaGalleryGalleryIdDestinationFeatureCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  body?: Maybe<Scalars['String']>,
  created?: Maybe<Scalars['Datetime']>,
  destinationId?: Maybe<Scalars['UUID']>,
  modified?: Maybe<Scalars['Datetime']>,
  title?: Maybe<Scalars['String']>,
  destinationToDestinationId?: Maybe<FkDestinationFeatureDestinationDestinationIdInput>,
  mediaGalleryToGalleryId?: Maybe<FkDestinationFeatureMediaGalleryGalleryIdInput>,
};

export type FkDestinationFeatureMediaGalleryGalleryIdInput = {
  connectById?: Maybe<MediaGalleryPkMediaGalleryConnect>,
  connectByNodeId?: Maybe<MediaGalleryNodeIdConnect>,
  deleteById?: Maybe<MediaGalleryPkMediaGalleryDelete>,
  deleteByNodeId?: Maybe<MediaGalleryNodeIdDelete>,
  updateById?: Maybe<MediaGalleryOnDestinationFeatureForFkDestinationFeatureMediaGalleryGalleryIdUsingPkMediaGalleryUpdate>,
  updateByNodeId?: Maybe<DestinationFeatureOnDestinationFeatureForFkDestinationFeatureMediaGalleryGalleryIdNodeIdUpdate>,
  create?: Maybe<FkDestinationFeatureMediaGalleryGalleryIdMediaGalleryCreateInput>,
};

export type FkDestinationFeatureMediaGalleryGalleryIdInverseInput = {
  deleteOthers?: Maybe<Scalars['Boolean']>,
  connectById?: Maybe<Array<DestinationFeaturePkDestinationFeatureConnect>>,
  connectByNodeId?: Maybe<Array<DestinationFeatureNodeIdConnect>>,
  deleteById?: Maybe<Array<DestinationFeaturePkDestinationFeatureDelete>>,
  deleteByNodeId?: Maybe<Array<DestinationFeatureNodeIdDelete>>,
  updateById?: Maybe<Array<DestinationFeatureOnDestinationFeatureForFkDestinationFeatureMediaGalleryGalleryIdUsingPkDestinationFeatureUpdate>>,
  updateByNodeId?: Maybe<Array<MediaGalleryOnDestinationFeatureForFkDestinationFeatureMediaGalleryGalleryIdNodeIdUpdate>>,
  create?: Maybe<Array<FkDestinationFeatureMediaGalleryGalleryIdDestinationFeatureCreateInput>>,
};

export type FkDestinationFeatureMediaGalleryGalleryIdMediaGalleryCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  parentId?: Maybe<Scalars['UUID']>,
  isProtected?: Maybe<Scalars['Boolean']>,
  mediaGalleryToParentId?: Maybe<FkMediaGalleryMediaGalleryParentIdInput>,
  tripsUsingId?: Maybe<FkTripMediaGalleryMediaGalleryIdInverseInput>,
  destinationsUsingId?: Maybe<FkDestinationMediaGalleryGalleryIdInverseInput>,
  destinationFeaturesUsingId?: Maybe<FkDestinationFeatureMediaGalleryGalleryIdInverseInput>,
  featuresUsingId?: Maybe<FkFeatureMediaGalleryGalleryIdInverseInput>,
  mediaGalleryItemsUsingId?: Maybe<FkMediaGalleryItemMediaGalleryMediaGalleryIdInverseInput>,
  propertiesUsingId?: Maybe<FkPropertyMediaGalleryGalleryIdInverseInput>,
  suppliersUsingId?: Maybe<FkSupplierMediaGalleryGalleryIdInverseInput>,
};

export type FkDestinationGuideDestinationDestinationIdDestinationCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  body?: Maybe<Scalars['String']>,
  galleryId?: Maybe<Scalars['UUID']>,
  parentId?: Maybe<Scalars['UUID']>,
  countryId?: Maybe<Scalars['UUID']>,
  mediaGalleryToGalleryId?: Maybe<FkDestinationMediaGalleryGalleryIdInput>,
  destinationToParentId?: Maybe<FkDestinationDestinationParentIdInput>,
  countryToCountryId?: Maybe<FkDestinationCountryCountryIdInput>,
  destinationFeaturesUsingId?: Maybe<FkDestinationFeatureDestinationDestinationIdInverseInput>,
  destinationGuidesUsingId?: Maybe<FkDestinationGuideDestinationDestinationIdInverseInput>,
  quoteDayDestinationsUsingId?: Maybe<FkQuoteDayDestinationDestinationDestinationIdInverseInput>,
};

export type FkDestinationGuideDestinationDestinationIdDestinationGuideCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  body?: Maybe<Scalars['String']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  title?: Maybe<Scalars['String']>,
  destinationToDestinationId?: Maybe<FkDestinationGuideDestinationDestinationIdInput>,
};

export type FkDestinationGuideDestinationDestinationIdInput = {
  connectById?: Maybe<DestinationPkDestinationConnect>,
  connectByNodeId?: Maybe<DestinationNodeIdConnect>,
  deleteById?: Maybe<DestinationPkDestinationDelete>,
  deleteByNodeId?: Maybe<DestinationNodeIdDelete>,
  updateById?: Maybe<DestinationOnDestinationGuideForFkDestinationGuideDestinationDestinationIdUsingPkDestinationUpdate>,
  updateByNodeId?: Maybe<DestinationGuideOnDestinationGuideForFkDestinationGuideDestinationDestinationIdNodeIdUpdate>,
  create?: Maybe<FkDestinationGuideDestinationDestinationIdDestinationCreateInput>,
};

export type FkDestinationGuideDestinationDestinationIdInverseInput = {
  deleteOthers?: Maybe<Scalars['Boolean']>,
  connectById?: Maybe<Array<DestinationGuidePkDestinationGuideConnect>>,
  connectByNodeId?: Maybe<Array<DestinationGuideNodeIdConnect>>,
  deleteById?: Maybe<Array<DestinationGuidePkDestinationGuideDelete>>,
  deleteByNodeId?: Maybe<Array<DestinationGuideNodeIdDelete>>,
  updateById?: Maybe<Array<DestinationGuideOnDestinationGuideForFkDestinationGuideDestinationDestinationIdUsingPkDestinationGuideUpdate>>,
  updateByNodeId?: Maybe<Array<DestinationOnDestinationGuideForFkDestinationGuideDestinationDestinationIdNodeIdUpdate>>,
  create?: Maybe<Array<FkDestinationGuideDestinationDestinationIdDestinationGuideCreateInput>>,
};

export type FkDestinationMediaGalleryGalleryIdDestinationCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  body?: Maybe<Scalars['String']>,
  parentId?: Maybe<Scalars['UUID']>,
  countryId?: Maybe<Scalars['UUID']>,
  mediaGalleryToGalleryId?: Maybe<FkDestinationMediaGalleryGalleryIdInput>,
  destinationToParentId?: Maybe<FkDestinationDestinationParentIdInput>,
  countryToCountryId?: Maybe<FkDestinationCountryCountryIdInput>,
  destinationFeaturesUsingId?: Maybe<FkDestinationFeatureDestinationDestinationIdInverseInput>,
  destinationGuidesUsingId?: Maybe<FkDestinationGuideDestinationDestinationIdInverseInput>,
  quoteDayDestinationsUsingId?: Maybe<FkQuoteDayDestinationDestinationDestinationIdInverseInput>,
};

export type FkDestinationMediaGalleryGalleryIdInput = {
  connectById?: Maybe<MediaGalleryPkMediaGalleryConnect>,
  connectByNodeId?: Maybe<MediaGalleryNodeIdConnect>,
  deleteById?: Maybe<MediaGalleryPkMediaGalleryDelete>,
  deleteByNodeId?: Maybe<MediaGalleryNodeIdDelete>,
  updateById?: Maybe<MediaGalleryOnDestinationForFkDestinationMediaGalleryGalleryIdUsingPkMediaGalleryUpdate>,
  updateByNodeId?: Maybe<DestinationOnDestinationForFkDestinationMediaGalleryGalleryIdNodeIdUpdate>,
  create?: Maybe<FkDestinationMediaGalleryGalleryIdMediaGalleryCreateInput>,
};

export type FkDestinationMediaGalleryGalleryIdInverseInput = {
  deleteOthers?: Maybe<Scalars['Boolean']>,
  connectById?: Maybe<Array<DestinationPkDestinationConnect>>,
  connectByNodeId?: Maybe<Array<DestinationNodeIdConnect>>,
  deleteById?: Maybe<Array<DestinationPkDestinationDelete>>,
  deleteByNodeId?: Maybe<Array<DestinationNodeIdDelete>>,
  updateById?: Maybe<Array<DestinationOnDestinationForFkDestinationMediaGalleryGalleryIdUsingPkDestinationUpdate>>,
  updateByNodeId?: Maybe<Array<MediaGalleryOnDestinationForFkDestinationMediaGalleryGalleryIdNodeIdUpdate>>,
  create?: Maybe<Array<FkDestinationMediaGalleryGalleryIdDestinationCreateInput>>,
};

export type FkDestinationMediaGalleryGalleryIdMediaGalleryCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  parentId?: Maybe<Scalars['UUID']>,
  isProtected?: Maybe<Scalars['Boolean']>,
  mediaGalleryToParentId?: Maybe<FkMediaGalleryMediaGalleryParentIdInput>,
  tripsUsingId?: Maybe<FkTripMediaGalleryMediaGalleryIdInverseInput>,
  destinationsUsingId?: Maybe<FkDestinationMediaGalleryGalleryIdInverseInput>,
  destinationFeaturesUsingId?: Maybe<FkDestinationFeatureMediaGalleryGalleryIdInverseInput>,
  featuresUsingId?: Maybe<FkFeatureMediaGalleryGalleryIdInverseInput>,
  mediaGalleryItemsUsingId?: Maybe<FkMediaGalleryItemMediaGalleryMediaGalleryIdInverseInput>,
  propertiesUsingId?: Maybe<FkPropertyMediaGalleryGalleryIdInverseInput>,
  suppliersUsingId?: Maybe<FkSupplierMediaGalleryGalleryIdInverseInput>,
};

export type FkEmailCustomerCustomerIdCustomerCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  email?: Maybe<Scalars['String']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  customerTravellersUsingId?: Maybe<FkCustomerTravellerCustomerCustomerIdInverseInput>,
  tripsUsingId?: Maybe<FkTripCustomerCustomerIdInverseInput>,
  emailsUsingId?: Maybe<FkEmailCustomerCustomerIdInverseInput>,
  enquiriesUsingId?: Maybe<FkEnquiryCustomerCustomerIdInverseInput>,
};

export type FkEmailCustomerCustomerIdEmailCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  body?: Maybe<Scalars['String']>,
  created?: Maybe<Scalars['Datetime']>,
  notes?: Maybe<Scalars['String']>,
  recipients?: Maybe<Scalars['String']>,
  subject?: Maybe<Scalars['String']>,
  tripId?: Maybe<Scalars['UUID']>,
  userId?: Maybe<Scalars['UUID']>,
  quoteId?: Maybe<Scalars['UUID']>,
  tripToTripId?: Maybe<FkEmailTripTripIdInput>,
  userToUserId?: Maybe<FkEmailUserUserIdInput>,
  customerToCustomerId?: Maybe<FkEmailCustomerCustomerIdInput>,
  quoteToQuoteId?: Maybe<FkEmailQuoteQuoteIdInput>,
};

export type FkEmailCustomerCustomerIdInput = {
  connectById?: Maybe<CustomerPkCustomerConnect>,
  connectByNodeId?: Maybe<CustomerNodeIdConnect>,
  deleteById?: Maybe<CustomerPkCustomerDelete>,
  deleteByNodeId?: Maybe<CustomerNodeIdDelete>,
  updateById?: Maybe<CustomerOnEmailForFkEmailCustomerCustomerIdUsingPkCustomerUpdate>,
  updateByNodeId?: Maybe<EmailOnEmailForFkEmailCustomerCustomerIdNodeIdUpdate>,
  create?: Maybe<FkEmailCustomerCustomerIdCustomerCreateInput>,
};

export type FkEmailCustomerCustomerIdInverseInput = {
  deleteOthers?: Maybe<Scalars['Boolean']>,
  connectById?: Maybe<Array<EmailPkEmailConnect>>,
  connectByNodeId?: Maybe<Array<EmailNodeIdConnect>>,
  deleteById?: Maybe<Array<EmailPkEmailDelete>>,
  deleteByNodeId?: Maybe<Array<EmailNodeIdDelete>>,
  updateById?: Maybe<Array<EmailOnEmailForFkEmailCustomerCustomerIdUsingPkEmailUpdate>>,
  updateByNodeId?: Maybe<Array<CustomerOnEmailForFkEmailCustomerCustomerIdNodeIdUpdate>>,
  create?: Maybe<Array<FkEmailCustomerCustomerIdEmailCreateInput>>,
};

export type FkEmailQuoteQuoteIdEmailCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  body?: Maybe<Scalars['String']>,
  created?: Maybe<Scalars['Datetime']>,
  notes?: Maybe<Scalars['String']>,
  recipients?: Maybe<Scalars['String']>,
  subject?: Maybe<Scalars['String']>,
  tripId?: Maybe<Scalars['UUID']>,
  userId?: Maybe<Scalars['UUID']>,
  customerId?: Maybe<Scalars['UUID']>,
  tripToTripId?: Maybe<FkEmailTripTripIdInput>,
  userToUserId?: Maybe<FkEmailUserUserIdInput>,
  customerToCustomerId?: Maybe<FkEmailCustomerCustomerIdInput>,
  quoteToQuoteId?: Maybe<FkEmailQuoteQuoteIdInput>,
};

export type FkEmailQuoteQuoteIdInput = {
  connectById?: Maybe<QuotePkQuoteConnect>,
  connectByNodeId?: Maybe<QuoteNodeIdConnect>,
  deleteById?: Maybe<QuotePkQuoteDelete>,
  deleteByNodeId?: Maybe<QuoteNodeIdDelete>,
  updateById?: Maybe<QuoteOnEmailForFkEmailQuoteQuoteIdUsingPkQuoteUpdate>,
  updateByNodeId?: Maybe<EmailOnEmailForFkEmailQuoteQuoteIdNodeIdUpdate>,
  create?: Maybe<FkEmailQuoteQuoteIdQuoteCreateInput>,
};

export type FkEmailQuoteQuoteIdInverseInput = {
  deleteOthers?: Maybe<Scalars['Boolean']>,
  connectById?: Maybe<Array<EmailPkEmailConnect>>,
  connectByNodeId?: Maybe<Array<EmailNodeIdConnect>>,
  deleteById?: Maybe<Array<EmailPkEmailDelete>>,
  deleteByNodeId?: Maybe<Array<EmailNodeIdDelete>>,
  updateById?: Maybe<Array<EmailOnEmailForFkEmailQuoteQuoteIdUsingPkEmailUpdate>>,
  updateByNodeId?: Maybe<Array<QuoteOnEmailForFkEmailQuoteQuoteIdNodeIdUpdate>>,
  create?: Maybe<Array<FkEmailQuoteQuoteIdEmailCreateInput>>,
};

export type FkEmailQuoteQuoteIdQuoteCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  duration: Scalars['Int'],
  modified?: Maybe<Scalars['Datetime']>,
  start?: Maybe<Scalars['Datetime']>,
  tripId?: Maybe<Scalars['UUID']>,
  deposit?: Maybe<Scalars['BigFloat']>,
  margin?: Maybe<Scalars['BigFloat']>,
  key?: Maybe<Scalars['String']>,
  expires?: Maybe<Scalars['Datetime']>,
  total?: Maybe<Scalars['BigFloat']>,
  adjustment?: Maybe<Scalars['BigFloat']>,
  baseCurrency?: Maybe<Scalars['String']>,
  shortDescription?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  heroImageId?: Maybe<Scalars['UUID']>,
  exclusions?: Maybe<Scalars['String']>,
  inclusions?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['Int']>,
  agentMargin?: Maybe<Scalars['BigFloat']>,
  travellerCount?: Maybe<Scalars['Int']>,
  archived?: Maybe<Scalars['Datetime']>,
  lastViewed?: Maybe<Scalars['Datetime']>,
  heroId?: Maybe<Scalars['UUID']>,
  userId?: Maybe<Scalars['UUID']>,
  locked?: Maybe<Scalars['Datetime']>,
  tripToTripId?: Maybe<FkQuoteTripTripIdInput>,
  mediaItemToHeroImageId?: Maybe<FkQuoteMediaItemHeroImageIdInput>,
  quoteHeroToHeroId?: Maybe<FkQuoteQuoteHeroHeroIdInput>,
  userToUserId?: Maybe<FkQuoteUserUserIdInput>,
  invoicesUsingId?: Maybe<FkInvoiceQuoteQuoteIdInverseInput>,
  tripsUsingId?: Maybe<FkTripQuoteActiveQuoteIdInverseInput>,
  emailsUsingId?: Maybe<FkEmailQuoteQuoteIdInverseInput>,
  quoteViewsUsingId?: Maybe<FkQuoteViewQuoteQuoteIdInverseInput>,
  quoteAccommodationDetailsUsingId?: Maybe<FkQuoteAccommodationDetailQuoteQuoteIdInverseInput>,
  quoteCurrenciesUsingId?: Maybe<FkQuoteCurrencyQuoteQuoteIdInverseInput>,
  quoteDaysUsingId?: Maybe<FkQuoteDayQuoteQuoteIdInverseInput>,
  quoteFinanceLineItemsUsingId?: Maybe<FkQuoteFinanceLineItemQuoteQuoteIdInverseInput>,
};

export type FkEmailTripTripIdEmailCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  body?: Maybe<Scalars['String']>,
  created?: Maybe<Scalars['Datetime']>,
  notes?: Maybe<Scalars['String']>,
  recipients?: Maybe<Scalars['String']>,
  subject?: Maybe<Scalars['String']>,
  userId?: Maybe<Scalars['UUID']>,
  customerId?: Maybe<Scalars['UUID']>,
  quoteId?: Maybe<Scalars['UUID']>,
  tripToTripId?: Maybe<FkEmailTripTripIdInput>,
  userToUserId?: Maybe<FkEmailUserUserIdInput>,
  customerToCustomerId?: Maybe<FkEmailCustomerCustomerIdInput>,
  quoteToQuoteId?: Maybe<FkEmailQuoteQuoteIdInput>,
};

export type FkEmailTripTripIdInput = {
  connectById?: Maybe<TripPkTripConnect>,
  connectByNodeId?: Maybe<TripNodeIdConnect>,
  deleteById?: Maybe<TripPkTripDelete>,
  deleteByNodeId?: Maybe<TripNodeIdDelete>,
  updateById?: Maybe<TripOnEmailForFkEmailTripTripIdUsingPkTripUpdate>,
  updateByNodeId?: Maybe<EmailOnEmailForFkEmailTripTripIdNodeIdUpdate>,
  create?: Maybe<FkEmailTripTripIdTripCreateInput>,
};

export type FkEmailTripTripIdInverseInput = {
  deleteOthers?: Maybe<Scalars['Boolean']>,
  connectById?: Maybe<Array<EmailPkEmailConnect>>,
  connectByNodeId?: Maybe<Array<EmailNodeIdConnect>>,
  deleteById?: Maybe<Array<EmailPkEmailDelete>>,
  deleteByNodeId?: Maybe<Array<EmailNodeIdDelete>>,
  updateById?: Maybe<Array<EmailOnEmailForFkEmailTripTripIdUsingPkEmailUpdate>>,
  updateByNodeId?: Maybe<Array<TripOnEmailForFkEmailTripTripIdNodeIdUpdate>>,
  create?: Maybe<Array<FkEmailTripTripIdEmailCreateInput>>,
};

export type FkEmailTripTripIdTripCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  customerId?: Maybe<Scalars['UUID']>,
  userId?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  destination?: Maybe<Scalars['String']>,
  dates?: Maybe<Scalars['String']>,
  archived?: Maybe<Scalars['Datetime']>,
  mediaGalleryId?: Maybe<Scalars['UUID']>,
  activeQuoteId?: Maybe<Scalars['UUID']>,
  baseCurrency?: Maybe<Scalars['String']>,
  duration?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['Datetime']>,
  status?: Maybe<Scalars['Int']>,
  agencyId?: Maybe<Scalars['UUID']>,
  agencyMemberId?: Maybe<Scalars['UUID']>,
  customerToCustomerId?: Maybe<FkTripCustomerCustomerIdInput>,
  userToUserId?: Maybe<FkTripUserUserIdInput>,
  mediaGalleryToMediaGalleryId?: Maybe<FkTripMediaGalleryMediaGalleryIdInput>,
  quoteToActiveQuoteId?: Maybe<FkTripQuoteActiveQuoteIdInput>,
  agencyToAgencyId?: Maybe<FkTripAgencyAgencyIdInput>,
  agencyMemberToAgencyMemberId?: Maybe<FkTripAgencyMemberAgencyMemberIdInput>,
  expensesUsingId?: Maybe<FkExpenseTripTripIdInverseInput>,
  invoicesUsingId?: Maybe<FkInvoiceTripTripIdInverseInput>,
  paymentsUsingId?: Maybe<FkPaymentTripTripIdInverseInput>,
  supplierInvoicesUsingId?: Maybe<FkSupplierInvoiceTripTripIdInverseInput>,
  emailsUsingId?: Maybe<FkEmailTripTripIdInverseInput>,
  enquiriesUsingId?: Maybe<FkEnquiryTripTripIdInverseInput>,
  notesUsingId?: Maybe<FkNoteTripTripIdInverseInput>,
  quotesUsingId?: Maybe<FkQuoteTripTripIdInverseInput>,
  testimonialsUsingId?: Maybe<FkTestimonialTripTripIdInverseInput>,
  tripTravellersUsingId?: Maybe<FkTripTravellerTripTripIdInverseInput>,
  tripFlightsUsingId?: Maybe<FkTripFlightTripTripIdInverseInput>,
  quotePublicsUsingId?: Maybe<FakePublicQuotePublicForeignKey0InverseInput>,
};

export type FkEmailUserUserIdEmailCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  body?: Maybe<Scalars['String']>,
  created?: Maybe<Scalars['Datetime']>,
  notes?: Maybe<Scalars['String']>,
  recipients?: Maybe<Scalars['String']>,
  subject?: Maybe<Scalars['String']>,
  tripId?: Maybe<Scalars['UUID']>,
  customerId?: Maybe<Scalars['UUID']>,
  quoteId?: Maybe<Scalars['UUID']>,
  tripToTripId?: Maybe<FkEmailTripTripIdInput>,
  userToUserId?: Maybe<FkEmailUserUserIdInput>,
  customerToCustomerId?: Maybe<FkEmailCustomerCustomerIdInput>,
  quoteToQuoteId?: Maybe<FkEmailQuoteQuoteIdInput>,
};

export type FkEmailUserUserIdInput = {
  connectById?: Maybe<UserPkUserConnect>,
  connectByNodeId?: Maybe<UserNodeIdConnect>,
  deleteById?: Maybe<UserPkUserDelete>,
  deleteByNodeId?: Maybe<UserNodeIdDelete>,
  updateById?: Maybe<UserOnEmailForFkEmailUserUserIdUsingPkUserUpdate>,
  updateByNodeId?: Maybe<EmailOnEmailForFkEmailUserUserIdNodeIdUpdate>,
  create?: Maybe<FkEmailUserUserIdUserCreateInput>,
};

export type FkEmailUserUserIdInverseInput = {
  deleteOthers?: Maybe<Scalars['Boolean']>,
  connectById?: Maybe<Array<EmailPkEmailConnect>>,
  connectByNodeId?: Maybe<Array<EmailNodeIdConnect>>,
  deleteById?: Maybe<Array<EmailPkEmailDelete>>,
  deleteByNodeId?: Maybe<Array<EmailNodeIdDelete>>,
  updateById?: Maybe<Array<EmailOnEmailForFkEmailUserUserIdUsingPkEmailUpdate>>,
  updateByNodeId?: Maybe<Array<UserOnEmailForFkEmailUserUserIdNodeIdUpdate>>,
  create?: Maybe<Array<FkEmailUserUserIdEmailCreateInput>>,
};

export type FkEmailUserUserIdUserCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  email?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  skype?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  genderPreposition?: Maybe<Scalars['String']>,
  externalId?: Maybe<Scalars['String']>,
  name: Scalars['String'],
  tripsUsingId?: Maybe<FkTripUserUserIdInverseInput>,
  emailsUsingId?: Maybe<FkEmailUserUserIdInverseInput>,
  notesUsingId?: Maybe<FkNoteUserUserIdInverseInput>,
  quotesUsingId?: Maybe<FkQuoteUserUserIdInverseInput>,
  remindersUsingId?: Maybe<FkReminderUserUserIdInverseInput>,
  transactionNotesUsingId?: Maybe<FkTransactionNoteUserUserIdInverseInput>,
  quotePublicsUsingId?: Maybe<FakePublicQuotePublicForeignKey2InverseInput>,
};

export type FkEnquiryCustomerCustomerIdCustomerCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  email?: Maybe<Scalars['String']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  customerTravellersUsingId?: Maybe<FkCustomerTravellerCustomerCustomerIdInverseInput>,
  tripsUsingId?: Maybe<FkTripCustomerCustomerIdInverseInput>,
  emailsUsingId?: Maybe<FkEmailCustomerCustomerIdInverseInput>,
  enquiriesUsingId?: Maybe<FkEnquiryCustomerCustomerIdInverseInput>,
};

export type FkEnquiryCustomerCustomerIdEnquiryCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  comments?: Maybe<Scalars['String']>,
  created?: Maybe<Scalars['Datetime']>,
  dates?: Maybe<Scalars['String']>,
  destination?: Maybe<Scalars['String']>,
  source?: Maybe<Scalars['String']>,
  status: Scalars['Int'],
  travellers?: Maybe<Scalars['String']>,
  tripId?: Maybe<Scalars['UUID']>,
  archived?: Maybe<Scalars['Datetime']>,
  customerToCustomerId?: Maybe<FkEnquiryCustomerCustomerIdInput>,
  tripToTripId?: Maybe<FkEnquiryTripTripIdInput>,
};

export type FkEnquiryCustomerCustomerIdInput = {
  connectById?: Maybe<CustomerPkCustomerConnect>,
  connectByNodeId?: Maybe<CustomerNodeIdConnect>,
  deleteById?: Maybe<CustomerPkCustomerDelete>,
  deleteByNodeId?: Maybe<CustomerNodeIdDelete>,
  updateById?: Maybe<CustomerOnEnquiryForFkEnquiryCustomerCustomerIdUsingPkCustomerUpdate>,
  updateByNodeId?: Maybe<EnquiryOnEnquiryForFkEnquiryCustomerCustomerIdNodeIdUpdate>,
  create?: Maybe<FkEnquiryCustomerCustomerIdCustomerCreateInput>,
};

export type FkEnquiryCustomerCustomerIdInverseInput = {
  deleteOthers?: Maybe<Scalars['Boolean']>,
  connectById?: Maybe<Array<EnquiryPkEnquiryConnect>>,
  connectByNodeId?: Maybe<Array<EnquiryNodeIdConnect>>,
  deleteById?: Maybe<Array<EnquiryPkEnquiryDelete>>,
  deleteByNodeId?: Maybe<Array<EnquiryNodeIdDelete>>,
  updateById?: Maybe<Array<EnquiryOnEnquiryForFkEnquiryCustomerCustomerIdUsingPkEnquiryUpdate>>,
  updateByNodeId?: Maybe<Array<CustomerOnEnquiryForFkEnquiryCustomerCustomerIdNodeIdUpdate>>,
  create?: Maybe<Array<FkEnquiryCustomerCustomerIdEnquiryCreateInput>>,
};

export type FkEnquiryTripTripIdEnquiryCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  comments?: Maybe<Scalars['String']>,
  created?: Maybe<Scalars['Datetime']>,
  customerId?: Maybe<Scalars['UUID']>,
  dates?: Maybe<Scalars['String']>,
  destination?: Maybe<Scalars['String']>,
  source?: Maybe<Scalars['String']>,
  status: Scalars['Int'],
  travellers?: Maybe<Scalars['String']>,
  archived?: Maybe<Scalars['Datetime']>,
  customerToCustomerId?: Maybe<FkEnquiryCustomerCustomerIdInput>,
  tripToTripId?: Maybe<FkEnquiryTripTripIdInput>,
};

export type FkEnquiryTripTripIdInput = {
  connectById?: Maybe<TripPkTripConnect>,
  connectByNodeId?: Maybe<TripNodeIdConnect>,
  deleteById?: Maybe<TripPkTripDelete>,
  deleteByNodeId?: Maybe<TripNodeIdDelete>,
  updateById?: Maybe<TripOnEnquiryForFkEnquiryTripTripIdUsingPkTripUpdate>,
  updateByNodeId?: Maybe<EnquiryOnEnquiryForFkEnquiryTripTripIdNodeIdUpdate>,
  create?: Maybe<FkEnquiryTripTripIdTripCreateInput>,
};

export type FkEnquiryTripTripIdInverseInput = {
  deleteOthers?: Maybe<Scalars['Boolean']>,
  connectById?: Maybe<Array<EnquiryPkEnquiryConnect>>,
  connectByNodeId?: Maybe<Array<EnquiryNodeIdConnect>>,
  deleteById?: Maybe<Array<EnquiryPkEnquiryDelete>>,
  deleteByNodeId?: Maybe<Array<EnquiryNodeIdDelete>>,
  updateById?: Maybe<Array<EnquiryOnEnquiryForFkEnquiryTripTripIdUsingPkEnquiryUpdate>>,
  updateByNodeId?: Maybe<Array<TripOnEnquiryForFkEnquiryTripTripIdNodeIdUpdate>>,
  create?: Maybe<Array<FkEnquiryTripTripIdEnquiryCreateInput>>,
};

export type FkEnquiryTripTripIdTripCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  customerId?: Maybe<Scalars['UUID']>,
  userId?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  destination?: Maybe<Scalars['String']>,
  dates?: Maybe<Scalars['String']>,
  archived?: Maybe<Scalars['Datetime']>,
  mediaGalleryId?: Maybe<Scalars['UUID']>,
  activeQuoteId?: Maybe<Scalars['UUID']>,
  baseCurrency?: Maybe<Scalars['String']>,
  duration?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['Datetime']>,
  status?: Maybe<Scalars['Int']>,
  agencyId?: Maybe<Scalars['UUID']>,
  agencyMemberId?: Maybe<Scalars['UUID']>,
  customerToCustomerId?: Maybe<FkTripCustomerCustomerIdInput>,
  userToUserId?: Maybe<FkTripUserUserIdInput>,
  mediaGalleryToMediaGalleryId?: Maybe<FkTripMediaGalleryMediaGalleryIdInput>,
  quoteToActiveQuoteId?: Maybe<FkTripQuoteActiveQuoteIdInput>,
  agencyToAgencyId?: Maybe<FkTripAgencyAgencyIdInput>,
  agencyMemberToAgencyMemberId?: Maybe<FkTripAgencyMemberAgencyMemberIdInput>,
  expensesUsingId?: Maybe<FkExpenseTripTripIdInverseInput>,
  invoicesUsingId?: Maybe<FkInvoiceTripTripIdInverseInput>,
  paymentsUsingId?: Maybe<FkPaymentTripTripIdInverseInput>,
  supplierInvoicesUsingId?: Maybe<FkSupplierInvoiceTripTripIdInverseInput>,
  emailsUsingId?: Maybe<FkEmailTripTripIdInverseInput>,
  enquiriesUsingId?: Maybe<FkEnquiryTripTripIdInverseInput>,
  notesUsingId?: Maybe<FkNoteTripTripIdInverseInput>,
  quotesUsingId?: Maybe<FkQuoteTripTripIdInverseInput>,
  testimonialsUsingId?: Maybe<FkTestimonialTripTripIdInverseInput>,
  tripTravellersUsingId?: Maybe<FkTripTravellerTripTripIdInverseInput>,
  tripFlightsUsingId?: Maybe<FkTripFlightTripTripIdInverseInput>,
  quotePublicsUsingId?: Maybe<FakePublicQuotePublicForeignKey0InverseInput>,
};

export type FkExpenseFinanceCategoryCategoryIdExpenseCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  amount: Scalars['BigFloat'],
  amountActual: Scalars['BigFloat'],
  created?: Maybe<Scalars['Datetime']>,
  currency?: Maybe<Scalars['String']>,
  invoiceId?: Maybe<Scalars['UUID']>,
  modified?: Maybe<Scalars['Datetime']>,
  paid: Scalars['Datetime'],
  summary?: Maybe<Scalars['String']>,
  supplierId?: Maybe<Scalars['UUID']>,
  reference?: Maybe<Scalars['String']>,
  supplierInvoiceId?: Maybe<Scalars['UUID']>,
  tripId?: Maybe<Scalars['UUID']>,
  invoiceToInvoiceId?: Maybe<FkExpenseInvoiceInvoiceIdInput>,
  supplierToSupplierId?: Maybe<FkExpenseSupplierSupplierIdInput>,
  financeCategoryToCategoryId?: Maybe<FkExpenseFinanceCategoryCategoryIdInput>,
  supplierInvoiceToSupplierInvoiceId?: Maybe<FkExpenseSupplierInvoiceSupplierInvoiceIdInput>,
  tripToTripId?: Maybe<FkExpenseTripTripIdInput>,
  transactionLinksUsingId?: Maybe<FkTransactionLinkExpenseExpenseIdInverseInput>,
};

export type FkExpenseFinanceCategoryCategoryIdFinanceCategoryCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['Int']>,
  code?: Maybe<Scalars['String']>,
  expensesUsingId?: Maybe<FkExpenseFinanceCategoryCategoryIdInverseInput>,
  invoicesUsingId?: Maybe<FkInvoiceFinanceCategoryCategoryIdInverseInput>,
  paymentsUsingId?: Maybe<FkPaymentFinanceCategoryCategoryIdInverseInput>,
  supplierInvoicesUsingId?: Maybe<FkSupplierInvoiceFinanceCategoryCategoryIdInverseInput>,
  transactionsUsingId?: Maybe<FkTransactionFinanceCategoryCategoryIdInverseInput>,
};

export type FkExpenseFinanceCategoryCategoryIdInput = {
  connectById?: Maybe<FinanceCategoryPkFinanceCategoryConnect>,
  connectByNodeId?: Maybe<FinanceCategoryNodeIdConnect>,
  deleteById?: Maybe<FinanceCategoryPkFinanceCategoryDelete>,
  deleteByNodeId?: Maybe<FinanceCategoryNodeIdDelete>,
  updateById?: Maybe<FinanceCategoryOnExpenseForFkExpenseFinanceCategoryCategoryIdUsingPkFinanceCategoryUpdate>,
  updateByNodeId?: Maybe<ExpenseOnExpenseForFkExpenseFinanceCategoryCategoryIdNodeIdUpdate>,
  create?: Maybe<FkExpenseFinanceCategoryCategoryIdFinanceCategoryCreateInput>,
};

export type FkExpenseFinanceCategoryCategoryIdInverseInput = {
  deleteOthers?: Maybe<Scalars['Boolean']>,
  connectById?: Maybe<Array<ExpensePkExpenseConnect>>,
  connectByNodeId?: Maybe<Array<ExpenseNodeIdConnect>>,
  deleteById?: Maybe<Array<ExpensePkExpenseDelete>>,
  deleteByNodeId?: Maybe<Array<ExpenseNodeIdDelete>>,
  updateById?: Maybe<Array<ExpenseOnExpenseForFkExpenseFinanceCategoryCategoryIdUsingPkExpenseUpdate>>,
  updateByNodeId?: Maybe<Array<FinanceCategoryOnExpenseForFkExpenseFinanceCategoryCategoryIdNodeIdUpdate>>,
  create?: Maybe<Array<FkExpenseFinanceCategoryCategoryIdExpenseCreateInput>>,
};

export type FkExpenseInvoiceInvoiceIdExpenseCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  amount: Scalars['BigFloat'],
  amountActual: Scalars['BigFloat'],
  created?: Maybe<Scalars['Datetime']>,
  currency?: Maybe<Scalars['String']>,
  modified?: Maybe<Scalars['Datetime']>,
  paid: Scalars['Datetime'],
  summary?: Maybe<Scalars['String']>,
  supplierId?: Maybe<Scalars['UUID']>,
  reference?: Maybe<Scalars['String']>,
  categoryId?: Maybe<Scalars['UUID']>,
  supplierInvoiceId?: Maybe<Scalars['UUID']>,
  tripId?: Maybe<Scalars['UUID']>,
  invoiceToInvoiceId?: Maybe<FkExpenseInvoiceInvoiceIdInput>,
  supplierToSupplierId?: Maybe<FkExpenseSupplierSupplierIdInput>,
  financeCategoryToCategoryId?: Maybe<FkExpenseFinanceCategoryCategoryIdInput>,
  supplierInvoiceToSupplierInvoiceId?: Maybe<FkExpenseSupplierInvoiceSupplierInvoiceIdInput>,
  tripToTripId?: Maybe<FkExpenseTripTripIdInput>,
  transactionLinksUsingId?: Maybe<FkTransactionLinkExpenseExpenseIdInverseInput>,
};

export type FkExpenseInvoiceInvoiceIdInput = {
  connectById?: Maybe<InvoicePkInvoiceConnect>,
  connectByNodeId?: Maybe<InvoiceNodeIdConnect>,
  deleteById?: Maybe<InvoicePkInvoiceDelete>,
  deleteByNodeId?: Maybe<InvoiceNodeIdDelete>,
  updateById?: Maybe<InvoiceOnExpenseForFkExpenseInvoiceInvoiceIdUsingPkInvoiceUpdate>,
  updateByNodeId?: Maybe<ExpenseOnExpenseForFkExpenseInvoiceInvoiceIdNodeIdUpdate>,
  create?: Maybe<FkExpenseInvoiceInvoiceIdInvoiceCreateInput>,
};

export type FkExpenseInvoiceInvoiceIdInverseInput = {
  deleteOthers?: Maybe<Scalars['Boolean']>,
  connectById?: Maybe<Array<ExpensePkExpenseConnect>>,
  connectByNodeId?: Maybe<Array<ExpenseNodeIdConnect>>,
  deleteById?: Maybe<Array<ExpensePkExpenseDelete>>,
  deleteByNodeId?: Maybe<Array<ExpenseNodeIdDelete>>,
  updateById?: Maybe<Array<ExpenseOnExpenseForFkExpenseInvoiceInvoiceIdUsingPkExpenseUpdate>>,
  updateByNodeId?: Maybe<Array<InvoiceOnExpenseForFkExpenseInvoiceInvoiceIdNodeIdUpdate>>,
  create?: Maybe<Array<FkExpenseInvoiceInvoiceIdExpenseCreateInput>>,
};

export type FkExpenseInvoiceInvoiceIdInvoiceCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  amount: Scalars['BigFloat'],
  created?: Maybe<Scalars['Datetime']>,
  currency?: Maybe<Scalars['String']>,
  due: Scalars['Datetime'],
  key?: Maybe<Scalars['String']>,
  modified?: Maybe<Scalars['Datetime']>,
  summary?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>,
  number?: Maybe<Scalars['Int']>,
  quoteId?: Maybe<Scalars['UUID']>,
  voided?: Maybe<Scalars['Datetime']>,
  categoryId?: Maybe<Scalars['UUID']>,
  tripId?: Maybe<Scalars['UUID']>,
  paid?: Maybe<Scalars['Datetime']>,
  note?: Maybe<Scalars['String']>,
  invoiced?: Maybe<Scalars['Datetime']>,
  locked?: Maybe<Scalars['Datetime']>,
  quoteToQuoteId?: Maybe<FkInvoiceQuoteQuoteIdInput>,
  financeCategoryToCategoryId?: Maybe<FkInvoiceFinanceCategoryCategoryIdInput>,
  tripToTripId?: Maybe<FkInvoiceTripTripIdInput>,
  expensesUsingId?: Maybe<FkExpenseInvoiceInvoiceIdInverseInput>,
  paymentsUsingId?: Maybe<FkPaymentInvoiceInvoiceIdInverseInput>,
  transactionLinksUsingId?: Maybe<FkTransactionLinkInvoiceInvoiceIdInverseInput>,
};

export type FkExpenseSupplierInvoiceSupplierInvoiceIdExpenseCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  amount: Scalars['BigFloat'],
  amountActual: Scalars['BigFloat'],
  created?: Maybe<Scalars['Datetime']>,
  currency?: Maybe<Scalars['String']>,
  invoiceId?: Maybe<Scalars['UUID']>,
  modified?: Maybe<Scalars['Datetime']>,
  paid: Scalars['Datetime'],
  summary?: Maybe<Scalars['String']>,
  supplierId?: Maybe<Scalars['UUID']>,
  reference?: Maybe<Scalars['String']>,
  categoryId?: Maybe<Scalars['UUID']>,
  tripId?: Maybe<Scalars['UUID']>,
  invoiceToInvoiceId?: Maybe<FkExpenseInvoiceInvoiceIdInput>,
  supplierToSupplierId?: Maybe<FkExpenseSupplierSupplierIdInput>,
  financeCategoryToCategoryId?: Maybe<FkExpenseFinanceCategoryCategoryIdInput>,
  supplierInvoiceToSupplierInvoiceId?: Maybe<FkExpenseSupplierInvoiceSupplierInvoiceIdInput>,
  tripToTripId?: Maybe<FkExpenseTripTripIdInput>,
  transactionLinksUsingId?: Maybe<FkTransactionLinkExpenseExpenseIdInverseInput>,
};

export type FkExpenseSupplierInvoiceSupplierInvoiceIdInput = {
  connectById?: Maybe<SupplierInvoicePkSupplierInvoiceConnect>,
  connectByNodeId?: Maybe<SupplierInvoiceNodeIdConnect>,
  deleteById?: Maybe<SupplierInvoicePkSupplierInvoiceDelete>,
  deleteByNodeId?: Maybe<SupplierInvoiceNodeIdDelete>,
  updateById?: Maybe<SupplierInvoiceOnExpenseForFkExpenseSupplierInvoiceSupplierInvoiceIdUsingPkSupplierInvoiceUpdate>,
  updateByNodeId?: Maybe<ExpenseOnExpenseForFkExpenseSupplierInvoiceSupplierInvoiceIdNodeIdUpdate>,
  create?: Maybe<FkExpenseSupplierInvoiceSupplierInvoiceIdSupplierInvoiceCreateInput>,
};

export type FkExpenseSupplierInvoiceSupplierInvoiceIdInverseInput = {
  deleteOthers?: Maybe<Scalars['Boolean']>,
  connectById?: Maybe<Array<ExpensePkExpenseConnect>>,
  connectByNodeId?: Maybe<Array<ExpenseNodeIdConnect>>,
  deleteById?: Maybe<Array<ExpensePkExpenseDelete>>,
  deleteByNodeId?: Maybe<Array<ExpenseNodeIdDelete>>,
  updateById?: Maybe<Array<ExpenseOnExpenseForFkExpenseSupplierInvoiceSupplierInvoiceIdUsingPkExpenseUpdate>>,
  updateByNodeId?: Maybe<Array<SupplierInvoiceOnExpenseForFkExpenseSupplierInvoiceSupplierInvoiceIdNodeIdUpdate>>,
  create?: Maybe<Array<FkExpenseSupplierInvoiceSupplierInvoiceIdExpenseCreateInput>>,
};

export type FkExpenseSupplierInvoiceSupplierInvoiceIdSupplierInvoiceCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  amount: Scalars['BigFloat'],
  categoryId?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  currency?: Maybe<Scalars['String']>,
  due: Scalars['Datetime'],
  key?: Maybe<Scalars['String']>,
  modified?: Maybe<Scalars['Datetime']>,
  number: Scalars['Int'],
  summary?: Maybe<Scalars['String']>,
  supplierId?: Maybe<Scalars['UUID']>,
  tripId?: Maybe<Scalars['UUID']>,
  type?: Maybe<Scalars['String']>,
  voided?: Maybe<Scalars['Datetime']>,
  amountActual?: Maybe<Scalars['BigFloat']>,
  paid?: Maybe<Scalars['Datetime']>,
  mediaItemId?: Maybe<Scalars['UUID']>,
  financeCategoryToCategoryId?: Maybe<FkSupplierInvoiceFinanceCategoryCategoryIdInput>,
  supplierToSupplierId?: Maybe<FkSupplierInvoiceSupplierSupplierIdInput>,
  tripToTripId?: Maybe<FkSupplierInvoiceTripTripIdInput>,
  mediaItemToMediaItemId?: Maybe<FkSupplierInvoiceMediaItemMediaItemIdInput>,
  expensesUsingId?: Maybe<FkExpenseSupplierInvoiceSupplierInvoiceIdInverseInput>,
  transactionLinksUsingId?: Maybe<FkTransactionLinkSupplierInvoiceSupplierInvoiceIdInverseInput>,
};

export type FkExpenseSupplierSupplierIdExpenseCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  amount: Scalars['BigFloat'],
  amountActual: Scalars['BigFloat'],
  created?: Maybe<Scalars['Datetime']>,
  currency?: Maybe<Scalars['String']>,
  invoiceId?: Maybe<Scalars['UUID']>,
  modified?: Maybe<Scalars['Datetime']>,
  paid: Scalars['Datetime'],
  summary?: Maybe<Scalars['String']>,
  reference?: Maybe<Scalars['String']>,
  categoryId?: Maybe<Scalars['UUID']>,
  supplierInvoiceId?: Maybe<Scalars['UUID']>,
  tripId?: Maybe<Scalars['UUID']>,
  invoiceToInvoiceId?: Maybe<FkExpenseInvoiceInvoiceIdInput>,
  supplierToSupplierId?: Maybe<FkExpenseSupplierSupplierIdInput>,
  financeCategoryToCategoryId?: Maybe<FkExpenseFinanceCategoryCategoryIdInput>,
  supplierInvoiceToSupplierInvoiceId?: Maybe<FkExpenseSupplierInvoiceSupplierInvoiceIdInput>,
  tripToTripId?: Maybe<FkExpenseTripTripIdInput>,
  transactionLinksUsingId?: Maybe<FkTransactionLinkExpenseExpenseIdInverseInput>,
};

export type FkExpenseSupplierSupplierIdInput = {
  connectById?: Maybe<SupplierPkSupplierConnect>,
  connectByNodeId?: Maybe<SupplierNodeIdConnect>,
  deleteById?: Maybe<SupplierPkSupplierDelete>,
  deleteByNodeId?: Maybe<SupplierNodeIdDelete>,
  updateById?: Maybe<SupplierOnExpenseForFkExpenseSupplierSupplierIdUsingPkSupplierUpdate>,
  updateByNodeId?: Maybe<ExpenseOnExpenseForFkExpenseSupplierSupplierIdNodeIdUpdate>,
  create?: Maybe<FkExpenseSupplierSupplierIdSupplierCreateInput>,
};

export type FkExpenseSupplierSupplierIdInverseInput = {
  deleteOthers?: Maybe<Scalars['Boolean']>,
  connectById?: Maybe<Array<ExpensePkExpenseConnect>>,
  connectByNodeId?: Maybe<Array<ExpenseNodeIdConnect>>,
  deleteById?: Maybe<Array<ExpensePkExpenseDelete>>,
  deleteByNodeId?: Maybe<Array<ExpenseNodeIdDelete>>,
  updateById?: Maybe<Array<ExpenseOnExpenseForFkExpenseSupplierSupplierIdUsingPkExpenseUpdate>>,
  updateByNodeId?: Maybe<Array<SupplierOnExpenseForFkExpenseSupplierSupplierIdNodeIdUpdate>>,
  create?: Maybe<Array<FkExpenseSupplierSupplierIdExpenseCreateInput>>,
};

export type FkExpenseSupplierSupplierIdSupplierCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  contactEmail?: Maybe<Scalars['String']>,
  contactNumber?: Maybe<Scalars['String']>,
  region?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
  bankDetails?: Maybe<Scalars['String']>,
  galleryId?: Maybe<Scalars['UUID']>,
  mediaGalleryToGalleryId?: Maybe<FkSupplierMediaGalleryGalleryIdInput>,
  expensesUsingId?: Maybe<FkExpenseSupplierSupplierIdInverseInput>,
  supplierInvoicesUsingId?: Maybe<FkSupplierInvoiceSupplierSupplierIdInverseInput>,
  quoteFinanceLineItemsUsingId?: Maybe<FkQuoteFinanceLineItemSupplierSupplierIdInverseInput>,
};

export type FkExpenseTripTripIdExpenseCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  amount: Scalars['BigFloat'],
  amountActual: Scalars['BigFloat'],
  created?: Maybe<Scalars['Datetime']>,
  currency?: Maybe<Scalars['String']>,
  invoiceId?: Maybe<Scalars['UUID']>,
  modified?: Maybe<Scalars['Datetime']>,
  paid: Scalars['Datetime'],
  summary?: Maybe<Scalars['String']>,
  supplierId?: Maybe<Scalars['UUID']>,
  reference?: Maybe<Scalars['String']>,
  categoryId?: Maybe<Scalars['UUID']>,
  supplierInvoiceId?: Maybe<Scalars['UUID']>,
  invoiceToInvoiceId?: Maybe<FkExpenseInvoiceInvoiceIdInput>,
  supplierToSupplierId?: Maybe<FkExpenseSupplierSupplierIdInput>,
  financeCategoryToCategoryId?: Maybe<FkExpenseFinanceCategoryCategoryIdInput>,
  supplierInvoiceToSupplierInvoiceId?: Maybe<FkExpenseSupplierInvoiceSupplierInvoiceIdInput>,
  tripToTripId?: Maybe<FkExpenseTripTripIdInput>,
  transactionLinksUsingId?: Maybe<FkTransactionLinkExpenseExpenseIdInverseInput>,
};

export type FkExpenseTripTripIdInput = {
  connectById?: Maybe<TripPkTripConnect>,
  connectByNodeId?: Maybe<TripNodeIdConnect>,
  deleteById?: Maybe<TripPkTripDelete>,
  deleteByNodeId?: Maybe<TripNodeIdDelete>,
  updateById?: Maybe<TripOnExpenseForFkExpenseTripTripIdUsingPkTripUpdate>,
  updateByNodeId?: Maybe<ExpenseOnExpenseForFkExpenseTripTripIdNodeIdUpdate>,
  create?: Maybe<FkExpenseTripTripIdTripCreateInput>,
};

export type FkExpenseTripTripIdInverseInput = {
  deleteOthers?: Maybe<Scalars['Boolean']>,
  connectById?: Maybe<Array<ExpensePkExpenseConnect>>,
  connectByNodeId?: Maybe<Array<ExpenseNodeIdConnect>>,
  deleteById?: Maybe<Array<ExpensePkExpenseDelete>>,
  deleteByNodeId?: Maybe<Array<ExpenseNodeIdDelete>>,
  updateById?: Maybe<Array<ExpenseOnExpenseForFkExpenseTripTripIdUsingPkExpenseUpdate>>,
  updateByNodeId?: Maybe<Array<TripOnExpenseForFkExpenseTripTripIdNodeIdUpdate>>,
  create?: Maybe<Array<FkExpenseTripTripIdExpenseCreateInput>>,
};

export type FkExpenseTripTripIdTripCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  customerId?: Maybe<Scalars['UUID']>,
  userId?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  destination?: Maybe<Scalars['String']>,
  dates?: Maybe<Scalars['String']>,
  archived?: Maybe<Scalars['Datetime']>,
  mediaGalleryId?: Maybe<Scalars['UUID']>,
  activeQuoteId?: Maybe<Scalars['UUID']>,
  baseCurrency?: Maybe<Scalars['String']>,
  duration?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['Datetime']>,
  status?: Maybe<Scalars['Int']>,
  agencyId?: Maybe<Scalars['UUID']>,
  agencyMemberId?: Maybe<Scalars['UUID']>,
  customerToCustomerId?: Maybe<FkTripCustomerCustomerIdInput>,
  userToUserId?: Maybe<FkTripUserUserIdInput>,
  mediaGalleryToMediaGalleryId?: Maybe<FkTripMediaGalleryMediaGalleryIdInput>,
  quoteToActiveQuoteId?: Maybe<FkTripQuoteActiveQuoteIdInput>,
  agencyToAgencyId?: Maybe<FkTripAgencyAgencyIdInput>,
  agencyMemberToAgencyMemberId?: Maybe<FkTripAgencyMemberAgencyMemberIdInput>,
  expensesUsingId?: Maybe<FkExpenseTripTripIdInverseInput>,
  invoicesUsingId?: Maybe<FkInvoiceTripTripIdInverseInput>,
  paymentsUsingId?: Maybe<FkPaymentTripTripIdInverseInput>,
  supplierInvoicesUsingId?: Maybe<FkSupplierInvoiceTripTripIdInverseInput>,
  emailsUsingId?: Maybe<FkEmailTripTripIdInverseInput>,
  enquiriesUsingId?: Maybe<FkEnquiryTripTripIdInverseInput>,
  notesUsingId?: Maybe<FkNoteTripTripIdInverseInput>,
  quotesUsingId?: Maybe<FkQuoteTripTripIdInverseInput>,
  testimonialsUsingId?: Maybe<FkTestimonialTripTripIdInverseInput>,
  tripTravellersUsingId?: Maybe<FkTripTravellerTripTripIdInverseInput>,
  tripFlightsUsingId?: Maybe<FkTripFlightTripTripIdInverseInput>,
  quotePublicsUsingId?: Maybe<FakePublicQuotePublicForeignKey0InverseInput>,
};

export type FkFeatureMediaGalleryGalleryIdFeatureCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  body?: Maybe<Scalars['String']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  mediaGalleryToGalleryId?: Maybe<FkFeatureMediaGalleryGalleryIdInput>,
};

export type FkFeatureMediaGalleryGalleryIdInput = {
  connectById?: Maybe<MediaGalleryPkMediaGalleryConnect>,
  connectByNodeId?: Maybe<MediaGalleryNodeIdConnect>,
  deleteById?: Maybe<MediaGalleryPkMediaGalleryDelete>,
  deleteByNodeId?: Maybe<MediaGalleryNodeIdDelete>,
  updateById?: Maybe<MediaGalleryOnFeatureForFkFeatureMediaGalleryGalleryIdUsingPkMediaGalleryUpdate>,
  updateByNodeId?: Maybe<FeatureOnFeatureForFkFeatureMediaGalleryGalleryIdNodeIdUpdate>,
  create?: Maybe<FkFeatureMediaGalleryGalleryIdMediaGalleryCreateInput>,
};

export type FkFeatureMediaGalleryGalleryIdInverseInput = {
  deleteOthers?: Maybe<Scalars['Boolean']>,
  connectById?: Maybe<Array<FeaturePkFeatureConnect>>,
  connectByNodeId?: Maybe<Array<FeatureNodeIdConnect>>,
  deleteById?: Maybe<Array<FeaturePkFeatureDelete>>,
  deleteByNodeId?: Maybe<Array<FeatureNodeIdDelete>>,
  updateById?: Maybe<Array<FeatureOnFeatureForFkFeatureMediaGalleryGalleryIdUsingPkFeatureUpdate>>,
  updateByNodeId?: Maybe<Array<MediaGalleryOnFeatureForFkFeatureMediaGalleryGalleryIdNodeIdUpdate>>,
  create?: Maybe<Array<FkFeatureMediaGalleryGalleryIdFeatureCreateInput>>,
};

export type FkFeatureMediaGalleryGalleryIdMediaGalleryCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  parentId?: Maybe<Scalars['UUID']>,
  isProtected?: Maybe<Scalars['Boolean']>,
  mediaGalleryToParentId?: Maybe<FkMediaGalleryMediaGalleryParentIdInput>,
  tripsUsingId?: Maybe<FkTripMediaGalleryMediaGalleryIdInverseInput>,
  destinationsUsingId?: Maybe<FkDestinationMediaGalleryGalleryIdInverseInput>,
  destinationFeaturesUsingId?: Maybe<FkDestinationFeatureMediaGalleryGalleryIdInverseInput>,
  featuresUsingId?: Maybe<FkFeatureMediaGalleryGalleryIdInverseInput>,
  mediaGalleryItemsUsingId?: Maybe<FkMediaGalleryItemMediaGalleryMediaGalleryIdInverseInput>,
  propertiesUsingId?: Maybe<FkPropertyMediaGalleryGalleryIdInverseInput>,
  suppliersUsingId?: Maybe<FkSupplierMediaGalleryGalleryIdInverseInput>,
};

export type FkInvoiceFinanceCategoryCategoryIdFinanceCategoryCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['Int']>,
  code?: Maybe<Scalars['String']>,
  expensesUsingId?: Maybe<FkExpenseFinanceCategoryCategoryIdInverseInput>,
  invoicesUsingId?: Maybe<FkInvoiceFinanceCategoryCategoryIdInverseInput>,
  paymentsUsingId?: Maybe<FkPaymentFinanceCategoryCategoryIdInverseInput>,
  supplierInvoicesUsingId?: Maybe<FkSupplierInvoiceFinanceCategoryCategoryIdInverseInput>,
  transactionsUsingId?: Maybe<FkTransactionFinanceCategoryCategoryIdInverseInput>,
};

export type FkInvoiceFinanceCategoryCategoryIdInput = {
  connectById?: Maybe<FinanceCategoryPkFinanceCategoryConnect>,
  connectByNodeId?: Maybe<FinanceCategoryNodeIdConnect>,
  deleteById?: Maybe<FinanceCategoryPkFinanceCategoryDelete>,
  deleteByNodeId?: Maybe<FinanceCategoryNodeIdDelete>,
  updateById?: Maybe<FinanceCategoryOnInvoiceForFkInvoiceFinanceCategoryCategoryIdUsingPkFinanceCategoryUpdate>,
  updateByNodeId?: Maybe<InvoiceOnInvoiceForFkInvoiceFinanceCategoryCategoryIdNodeIdUpdate>,
  create?: Maybe<FkInvoiceFinanceCategoryCategoryIdFinanceCategoryCreateInput>,
};

export type FkInvoiceFinanceCategoryCategoryIdInverseInput = {
  deleteOthers?: Maybe<Scalars['Boolean']>,
  connectById?: Maybe<Array<InvoicePkInvoiceConnect>>,
  connectByNodeId?: Maybe<Array<InvoiceNodeIdConnect>>,
  deleteById?: Maybe<Array<InvoicePkInvoiceDelete>>,
  deleteByNodeId?: Maybe<Array<InvoiceNodeIdDelete>>,
  updateById?: Maybe<Array<InvoiceOnInvoiceForFkInvoiceFinanceCategoryCategoryIdUsingPkInvoiceUpdate>>,
  updateByNodeId?: Maybe<Array<FinanceCategoryOnInvoiceForFkInvoiceFinanceCategoryCategoryIdNodeIdUpdate>>,
  create?: Maybe<Array<FkInvoiceFinanceCategoryCategoryIdInvoiceCreateInput>>,
};

export type FkInvoiceFinanceCategoryCategoryIdInvoiceCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  amount: Scalars['BigFloat'],
  created?: Maybe<Scalars['Datetime']>,
  currency?: Maybe<Scalars['String']>,
  due: Scalars['Datetime'],
  key?: Maybe<Scalars['String']>,
  modified?: Maybe<Scalars['Datetime']>,
  summary?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>,
  number?: Maybe<Scalars['Int']>,
  quoteId?: Maybe<Scalars['UUID']>,
  voided?: Maybe<Scalars['Datetime']>,
  tripId?: Maybe<Scalars['UUID']>,
  paid?: Maybe<Scalars['Datetime']>,
  note?: Maybe<Scalars['String']>,
  invoiced?: Maybe<Scalars['Datetime']>,
  locked?: Maybe<Scalars['Datetime']>,
  quoteToQuoteId?: Maybe<FkInvoiceQuoteQuoteIdInput>,
  financeCategoryToCategoryId?: Maybe<FkInvoiceFinanceCategoryCategoryIdInput>,
  tripToTripId?: Maybe<FkInvoiceTripTripIdInput>,
  expensesUsingId?: Maybe<FkExpenseInvoiceInvoiceIdInverseInput>,
  paymentsUsingId?: Maybe<FkPaymentInvoiceInvoiceIdInverseInput>,
  transactionLinksUsingId?: Maybe<FkTransactionLinkInvoiceInvoiceIdInverseInput>,
};

export type FkInvoiceQuoteQuoteIdInput = {
  connectById?: Maybe<QuotePkQuoteConnect>,
  connectByNodeId?: Maybe<QuoteNodeIdConnect>,
  deleteById?: Maybe<QuotePkQuoteDelete>,
  deleteByNodeId?: Maybe<QuoteNodeIdDelete>,
  updateById?: Maybe<QuoteOnInvoiceForFkInvoiceQuoteQuoteIdUsingPkQuoteUpdate>,
  updateByNodeId?: Maybe<InvoiceOnInvoiceForFkInvoiceQuoteQuoteIdNodeIdUpdate>,
  create?: Maybe<FkInvoiceQuoteQuoteIdQuoteCreateInput>,
};

export type FkInvoiceQuoteQuoteIdInverseInput = {
  deleteOthers?: Maybe<Scalars['Boolean']>,
  connectById?: Maybe<Array<InvoicePkInvoiceConnect>>,
  connectByNodeId?: Maybe<Array<InvoiceNodeIdConnect>>,
  deleteById?: Maybe<Array<InvoicePkInvoiceDelete>>,
  deleteByNodeId?: Maybe<Array<InvoiceNodeIdDelete>>,
  updateById?: Maybe<Array<InvoiceOnInvoiceForFkInvoiceQuoteQuoteIdUsingPkInvoiceUpdate>>,
  updateByNodeId?: Maybe<Array<QuoteOnInvoiceForFkInvoiceQuoteQuoteIdNodeIdUpdate>>,
  create?: Maybe<Array<FkInvoiceQuoteQuoteIdInvoiceCreateInput>>,
};

export type FkInvoiceQuoteQuoteIdInvoiceCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  amount: Scalars['BigFloat'],
  created?: Maybe<Scalars['Datetime']>,
  currency?: Maybe<Scalars['String']>,
  due: Scalars['Datetime'],
  key?: Maybe<Scalars['String']>,
  modified?: Maybe<Scalars['Datetime']>,
  summary?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>,
  number?: Maybe<Scalars['Int']>,
  voided?: Maybe<Scalars['Datetime']>,
  categoryId?: Maybe<Scalars['UUID']>,
  tripId?: Maybe<Scalars['UUID']>,
  paid?: Maybe<Scalars['Datetime']>,
  note?: Maybe<Scalars['String']>,
  invoiced?: Maybe<Scalars['Datetime']>,
  locked?: Maybe<Scalars['Datetime']>,
  quoteToQuoteId?: Maybe<FkInvoiceQuoteQuoteIdInput>,
  financeCategoryToCategoryId?: Maybe<FkInvoiceFinanceCategoryCategoryIdInput>,
  tripToTripId?: Maybe<FkInvoiceTripTripIdInput>,
  expensesUsingId?: Maybe<FkExpenseInvoiceInvoiceIdInverseInput>,
  paymentsUsingId?: Maybe<FkPaymentInvoiceInvoiceIdInverseInput>,
  transactionLinksUsingId?: Maybe<FkTransactionLinkInvoiceInvoiceIdInverseInput>,
};

export type FkInvoiceQuoteQuoteIdQuoteCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  duration: Scalars['Int'],
  modified?: Maybe<Scalars['Datetime']>,
  start?: Maybe<Scalars['Datetime']>,
  tripId?: Maybe<Scalars['UUID']>,
  deposit?: Maybe<Scalars['BigFloat']>,
  margin?: Maybe<Scalars['BigFloat']>,
  key?: Maybe<Scalars['String']>,
  expires?: Maybe<Scalars['Datetime']>,
  total?: Maybe<Scalars['BigFloat']>,
  adjustment?: Maybe<Scalars['BigFloat']>,
  baseCurrency?: Maybe<Scalars['String']>,
  shortDescription?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  heroImageId?: Maybe<Scalars['UUID']>,
  exclusions?: Maybe<Scalars['String']>,
  inclusions?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['Int']>,
  agentMargin?: Maybe<Scalars['BigFloat']>,
  travellerCount?: Maybe<Scalars['Int']>,
  archived?: Maybe<Scalars['Datetime']>,
  lastViewed?: Maybe<Scalars['Datetime']>,
  heroId?: Maybe<Scalars['UUID']>,
  userId?: Maybe<Scalars['UUID']>,
  locked?: Maybe<Scalars['Datetime']>,
  tripToTripId?: Maybe<FkQuoteTripTripIdInput>,
  mediaItemToHeroImageId?: Maybe<FkQuoteMediaItemHeroImageIdInput>,
  quoteHeroToHeroId?: Maybe<FkQuoteQuoteHeroHeroIdInput>,
  userToUserId?: Maybe<FkQuoteUserUserIdInput>,
  invoicesUsingId?: Maybe<FkInvoiceQuoteQuoteIdInverseInput>,
  tripsUsingId?: Maybe<FkTripQuoteActiveQuoteIdInverseInput>,
  emailsUsingId?: Maybe<FkEmailQuoteQuoteIdInverseInput>,
  quoteViewsUsingId?: Maybe<FkQuoteViewQuoteQuoteIdInverseInput>,
  quoteAccommodationDetailsUsingId?: Maybe<FkQuoteAccommodationDetailQuoteQuoteIdInverseInput>,
  quoteCurrenciesUsingId?: Maybe<FkQuoteCurrencyQuoteQuoteIdInverseInput>,
  quoteDaysUsingId?: Maybe<FkQuoteDayQuoteQuoteIdInverseInput>,
  quoteFinanceLineItemsUsingId?: Maybe<FkQuoteFinanceLineItemQuoteQuoteIdInverseInput>,
};

export type FkInvoiceTripTripIdInput = {
  connectById?: Maybe<TripPkTripConnect>,
  connectByNodeId?: Maybe<TripNodeIdConnect>,
  deleteById?: Maybe<TripPkTripDelete>,
  deleteByNodeId?: Maybe<TripNodeIdDelete>,
  updateById?: Maybe<TripOnInvoiceForFkInvoiceTripTripIdUsingPkTripUpdate>,
  updateByNodeId?: Maybe<InvoiceOnInvoiceForFkInvoiceTripTripIdNodeIdUpdate>,
  create?: Maybe<FkInvoiceTripTripIdTripCreateInput>,
};

export type FkInvoiceTripTripIdInverseInput = {
  deleteOthers?: Maybe<Scalars['Boolean']>,
  connectById?: Maybe<Array<InvoicePkInvoiceConnect>>,
  connectByNodeId?: Maybe<Array<InvoiceNodeIdConnect>>,
  deleteById?: Maybe<Array<InvoicePkInvoiceDelete>>,
  deleteByNodeId?: Maybe<Array<InvoiceNodeIdDelete>>,
  updateById?: Maybe<Array<InvoiceOnInvoiceForFkInvoiceTripTripIdUsingPkInvoiceUpdate>>,
  updateByNodeId?: Maybe<Array<TripOnInvoiceForFkInvoiceTripTripIdNodeIdUpdate>>,
  create?: Maybe<Array<FkInvoiceTripTripIdInvoiceCreateInput>>,
};

export type FkInvoiceTripTripIdInvoiceCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  amount: Scalars['BigFloat'],
  created?: Maybe<Scalars['Datetime']>,
  currency?: Maybe<Scalars['String']>,
  due: Scalars['Datetime'],
  key?: Maybe<Scalars['String']>,
  modified?: Maybe<Scalars['Datetime']>,
  summary?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>,
  number?: Maybe<Scalars['Int']>,
  quoteId?: Maybe<Scalars['UUID']>,
  voided?: Maybe<Scalars['Datetime']>,
  categoryId?: Maybe<Scalars['UUID']>,
  paid?: Maybe<Scalars['Datetime']>,
  note?: Maybe<Scalars['String']>,
  invoiced?: Maybe<Scalars['Datetime']>,
  locked?: Maybe<Scalars['Datetime']>,
  quoteToQuoteId?: Maybe<FkInvoiceQuoteQuoteIdInput>,
  financeCategoryToCategoryId?: Maybe<FkInvoiceFinanceCategoryCategoryIdInput>,
  tripToTripId?: Maybe<FkInvoiceTripTripIdInput>,
  expensesUsingId?: Maybe<FkExpenseInvoiceInvoiceIdInverseInput>,
  paymentsUsingId?: Maybe<FkPaymentInvoiceInvoiceIdInverseInput>,
  transactionLinksUsingId?: Maybe<FkTransactionLinkInvoiceInvoiceIdInverseInput>,
};

export type FkInvoiceTripTripIdTripCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  customerId?: Maybe<Scalars['UUID']>,
  userId?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  destination?: Maybe<Scalars['String']>,
  dates?: Maybe<Scalars['String']>,
  archived?: Maybe<Scalars['Datetime']>,
  mediaGalleryId?: Maybe<Scalars['UUID']>,
  activeQuoteId?: Maybe<Scalars['UUID']>,
  baseCurrency?: Maybe<Scalars['String']>,
  duration?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['Datetime']>,
  status?: Maybe<Scalars['Int']>,
  agencyId?: Maybe<Scalars['UUID']>,
  agencyMemberId?: Maybe<Scalars['UUID']>,
  customerToCustomerId?: Maybe<FkTripCustomerCustomerIdInput>,
  userToUserId?: Maybe<FkTripUserUserIdInput>,
  mediaGalleryToMediaGalleryId?: Maybe<FkTripMediaGalleryMediaGalleryIdInput>,
  quoteToActiveQuoteId?: Maybe<FkTripQuoteActiveQuoteIdInput>,
  agencyToAgencyId?: Maybe<FkTripAgencyAgencyIdInput>,
  agencyMemberToAgencyMemberId?: Maybe<FkTripAgencyMemberAgencyMemberIdInput>,
  expensesUsingId?: Maybe<FkExpenseTripTripIdInverseInput>,
  invoicesUsingId?: Maybe<FkInvoiceTripTripIdInverseInput>,
  paymentsUsingId?: Maybe<FkPaymentTripTripIdInverseInput>,
  supplierInvoicesUsingId?: Maybe<FkSupplierInvoiceTripTripIdInverseInput>,
  emailsUsingId?: Maybe<FkEmailTripTripIdInverseInput>,
  enquiriesUsingId?: Maybe<FkEnquiryTripTripIdInverseInput>,
  notesUsingId?: Maybe<FkNoteTripTripIdInverseInput>,
  quotesUsingId?: Maybe<FkQuoteTripTripIdInverseInput>,
  testimonialsUsingId?: Maybe<FkTestimonialTripTripIdInverseInput>,
  tripTravellersUsingId?: Maybe<FkTripTravellerTripTripIdInverseInput>,
  tripFlightsUsingId?: Maybe<FkTripFlightTripTripIdInverseInput>,
  quotePublicsUsingId?: Maybe<FakePublicQuotePublicForeignKey0InverseInput>,
};

export type FkMediaGalleryItemMediaGalleryMediaGalleryIdInput = {
  connectById?: Maybe<MediaGalleryPkMediaGalleryConnect>,
  connectByNodeId?: Maybe<MediaGalleryNodeIdConnect>,
  deleteById?: Maybe<MediaGalleryPkMediaGalleryDelete>,
  deleteByNodeId?: Maybe<MediaGalleryNodeIdDelete>,
  updateById?: Maybe<MediaGalleryOnMediaGalleryItemForFkMediaGalleryItemMediaGalleryMediaGalleryIdUsingPkMediaGalleryUpdate>,
  updateByNodeId?: Maybe<MediaGalleryItemOnMediaGalleryItemForFkMediaGalleryItemMediaGalleryMediaGalleryIdNodeIdUpdate>,
  create?: Maybe<FkMediaGalleryItemMediaGalleryMediaGalleryIdMediaGalleryCreateInput>,
};

export type FkMediaGalleryItemMediaGalleryMediaGalleryIdInverseInput = {
  deleteOthers?: Maybe<Scalars['Boolean']>,
  connectById?: Maybe<Array<MediaGalleryItemPkMediaGalleryItemConnect>>,
  connectByNodeId?: Maybe<Array<MediaGalleryItemNodeIdConnect>>,
  deleteById?: Maybe<Array<MediaGalleryItemPkMediaGalleryItemDelete>>,
  deleteByNodeId?: Maybe<Array<MediaGalleryItemNodeIdDelete>>,
  updateById?: Maybe<Array<MediaGalleryItemOnMediaGalleryItemForFkMediaGalleryItemMediaGalleryMediaGalleryIdUsingPkMediaGalleryItemUpdate>>,
  updateByNodeId?: Maybe<Array<MediaGalleryOnMediaGalleryItemForFkMediaGalleryItemMediaGalleryMediaGalleryIdNodeIdUpdate>>,
  create?: Maybe<Array<FkMediaGalleryItemMediaGalleryMediaGalleryIdMediaGalleryItemCreateInput>>,
};

export type FkMediaGalleryItemMediaGalleryMediaGalleryIdMediaGalleryCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  parentId?: Maybe<Scalars['UUID']>,
  isProtected?: Maybe<Scalars['Boolean']>,
  mediaGalleryToParentId?: Maybe<FkMediaGalleryMediaGalleryParentIdInput>,
  tripsUsingId?: Maybe<FkTripMediaGalleryMediaGalleryIdInverseInput>,
  destinationsUsingId?: Maybe<FkDestinationMediaGalleryGalleryIdInverseInput>,
  destinationFeaturesUsingId?: Maybe<FkDestinationFeatureMediaGalleryGalleryIdInverseInput>,
  featuresUsingId?: Maybe<FkFeatureMediaGalleryGalleryIdInverseInput>,
  mediaGalleryItemsUsingId?: Maybe<FkMediaGalleryItemMediaGalleryMediaGalleryIdInverseInput>,
  propertiesUsingId?: Maybe<FkPropertyMediaGalleryGalleryIdInverseInput>,
  suppliersUsingId?: Maybe<FkSupplierMediaGalleryGalleryIdInverseInput>,
};

export type FkMediaGalleryItemMediaGalleryMediaGalleryIdMediaGalleryItemCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  mediaItemId?: Maybe<Scalars['UUID']>,
  modified?: Maybe<Scalars['Datetime']>,
  isHero?: Maybe<Scalars['Boolean']>,
  mediaGalleryToMediaGalleryId?: Maybe<FkMediaGalleryItemMediaGalleryMediaGalleryIdInput>,
  mediaItemToMediaItemId?: Maybe<FkMediaGalleryItemMediaItemMediaItemIdInput>,
};

export type FkMediaGalleryItemMediaItemMediaItemIdInput = {
  connectById?: Maybe<MediaItemPkMediaItemConnect>,
  connectByNodeId?: Maybe<MediaItemNodeIdConnect>,
  deleteById?: Maybe<MediaItemPkMediaItemDelete>,
  deleteByNodeId?: Maybe<MediaItemNodeIdDelete>,
  updateById?: Maybe<MediaItemOnMediaGalleryItemForFkMediaGalleryItemMediaItemMediaItemIdUsingPkMediaItemUpdate>,
  updateByNodeId?: Maybe<MediaGalleryItemOnMediaGalleryItemForFkMediaGalleryItemMediaItemMediaItemIdNodeIdUpdate>,
  create?: Maybe<FkMediaGalleryItemMediaItemMediaItemIdMediaItemCreateInput>,
};

export type FkMediaGalleryItemMediaItemMediaItemIdInverseInput = {
  deleteOthers?: Maybe<Scalars['Boolean']>,
  connectById?: Maybe<Array<MediaGalleryItemPkMediaGalleryItemConnect>>,
  connectByNodeId?: Maybe<Array<MediaGalleryItemNodeIdConnect>>,
  deleteById?: Maybe<Array<MediaGalleryItemPkMediaGalleryItemDelete>>,
  deleteByNodeId?: Maybe<Array<MediaGalleryItemNodeIdDelete>>,
  updateById?: Maybe<Array<MediaGalleryItemOnMediaGalleryItemForFkMediaGalleryItemMediaItemMediaItemIdUsingPkMediaGalleryItemUpdate>>,
  updateByNodeId?: Maybe<Array<MediaItemOnMediaGalleryItemForFkMediaGalleryItemMediaItemMediaItemIdNodeIdUpdate>>,
  create?: Maybe<Array<FkMediaGalleryItemMediaItemMediaItemIdMediaGalleryItemCreateInput>>,
};

export type FkMediaGalleryItemMediaItemMediaItemIdMediaGalleryItemCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  mediaGalleryId?: Maybe<Scalars['UUID']>,
  modified?: Maybe<Scalars['Datetime']>,
  isHero?: Maybe<Scalars['Boolean']>,
  mediaGalleryToMediaGalleryId?: Maybe<FkMediaGalleryItemMediaGalleryMediaGalleryIdInput>,
  mediaItemToMediaItemId?: Maybe<FkMediaGalleryItemMediaItemMediaItemIdInput>,
};

export type FkMediaGalleryItemMediaItemMediaItemIdMediaItemCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  contentType?: Maybe<Scalars['String']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  fileName?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  hash?: Maybe<Scalars['String']>,
  agenciesUsingId?: Maybe<FkAgencyMediaItemLogoIdInverseInput>,
  supplierInvoicesUsingId?: Maybe<FkSupplierInvoiceMediaItemMediaItemIdInverseInput>,
  mediaGalleryItemsUsingId?: Maybe<FkMediaGalleryItemMediaItemMediaItemIdInverseInput>,
  propertiesUsingId?: Maybe<FkPropertyMediaItemHeroMediaIdInverseInput>,
  quotesUsingId?: Maybe<FkQuoteMediaItemHeroImageIdInverseInput>,
  quoteHeroesUsingId?: Maybe<FkQuoteHeroMediaItemImageIdInverseInput>,
};

export type FkMediaGalleryMediaGalleryParentIdInput = {
  connectById?: Maybe<MediaGalleryPkMediaGalleryConnect>,
  connectByNodeId?: Maybe<MediaGalleryNodeIdConnect>,
  deleteById?: Maybe<MediaGalleryPkMediaGalleryDelete>,
  deleteByNodeId?: Maybe<MediaGalleryNodeIdDelete>,
  updateById?: Maybe<MediaGalleryOnMediaGalleryForFkMediaGalleryMediaGalleryParentIdUsingPkMediaGalleryUpdate>,
  updateByNodeId?: Maybe<MediaGalleryOnMediaGalleryForFkMediaGalleryMediaGalleryParentIdNodeIdUpdate>,
  create?: Maybe<FkMediaGalleryMediaGalleryParentIdMediaGalleryCreateInput>,
};

export type FkMediaGalleryMediaGalleryParentIdMediaGalleryCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  isProtected?: Maybe<Scalars['Boolean']>,
  mediaGalleryToParentId?: Maybe<FkMediaGalleryMediaGalleryParentIdInput>,
  tripsUsingId?: Maybe<FkTripMediaGalleryMediaGalleryIdInverseInput>,
  destinationsUsingId?: Maybe<FkDestinationMediaGalleryGalleryIdInverseInput>,
  destinationFeaturesUsingId?: Maybe<FkDestinationFeatureMediaGalleryGalleryIdInverseInput>,
  featuresUsingId?: Maybe<FkFeatureMediaGalleryGalleryIdInverseInput>,
  mediaGalleryItemsUsingId?: Maybe<FkMediaGalleryItemMediaGalleryMediaGalleryIdInverseInput>,
  propertiesUsingId?: Maybe<FkPropertyMediaGalleryGalleryIdInverseInput>,
  suppliersUsingId?: Maybe<FkSupplierMediaGalleryGalleryIdInverseInput>,
};

export type FkNoteTripTripIdInput = {
  connectById?: Maybe<TripPkTripConnect>,
  connectByNodeId?: Maybe<TripNodeIdConnect>,
  deleteById?: Maybe<TripPkTripDelete>,
  deleteByNodeId?: Maybe<TripNodeIdDelete>,
  updateById?: Maybe<TripOnNoteForFkNoteTripTripIdUsingPkTripUpdate>,
  updateByNodeId?: Maybe<NoteOnNoteForFkNoteTripTripIdNodeIdUpdate>,
  create?: Maybe<FkNoteTripTripIdTripCreateInput>,
};

export type FkNoteTripTripIdInverseInput = {
  deleteOthers?: Maybe<Scalars['Boolean']>,
  connectById?: Maybe<Array<NotePkNoteConnect>>,
  connectByNodeId?: Maybe<Array<NoteNodeIdConnect>>,
  deleteById?: Maybe<Array<NotePkNoteDelete>>,
  deleteByNodeId?: Maybe<Array<NoteNodeIdDelete>>,
  updateById?: Maybe<Array<NoteOnNoteForFkNoteTripTripIdUsingPkNoteUpdate>>,
  updateByNodeId?: Maybe<Array<TripOnNoteForFkNoteTripTripIdNodeIdUpdate>>,
  create?: Maybe<Array<FkNoteTripTripIdNoteCreateInput>>,
};

export type FkNoteTripTripIdNoteCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  body?: Maybe<Scalars['String']>,
  created?: Maybe<Scalars['Datetime']>,
  userId?: Maybe<Scalars['UUID']>,
  modified?: Maybe<Scalars['Datetime']>,
  title?: Maybe<Scalars['String']>,
  tripToTripId?: Maybe<FkNoteTripTripIdInput>,
  userToUserId?: Maybe<FkNoteUserUserIdInput>,
};

export type FkNoteTripTripIdTripCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  customerId?: Maybe<Scalars['UUID']>,
  userId?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  destination?: Maybe<Scalars['String']>,
  dates?: Maybe<Scalars['String']>,
  archived?: Maybe<Scalars['Datetime']>,
  mediaGalleryId?: Maybe<Scalars['UUID']>,
  activeQuoteId?: Maybe<Scalars['UUID']>,
  baseCurrency?: Maybe<Scalars['String']>,
  duration?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['Datetime']>,
  status?: Maybe<Scalars['Int']>,
  agencyId?: Maybe<Scalars['UUID']>,
  agencyMemberId?: Maybe<Scalars['UUID']>,
  customerToCustomerId?: Maybe<FkTripCustomerCustomerIdInput>,
  userToUserId?: Maybe<FkTripUserUserIdInput>,
  mediaGalleryToMediaGalleryId?: Maybe<FkTripMediaGalleryMediaGalleryIdInput>,
  quoteToActiveQuoteId?: Maybe<FkTripQuoteActiveQuoteIdInput>,
  agencyToAgencyId?: Maybe<FkTripAgencyAgencyIdInput>,
  agencyMemberToAgencyMemberId?: Maybe<FkTripAgencyMemberAgencyMemberIdInput>,
  expensesUsingId?: Maybe<FkExpenseTripTripIdInverseInput>,
  invoicesUsingId?: Maybe<FkInvoiceTripTripIdInverseInput>,
  paymentsUsingId?: Maybe<FkPaymentTripTripIdInverseInput>,
  supplierInvoicesUsingId?: Maybe<FkSupplierInvoiceTripTripIdInverseInput>,
  emailsUsingId?: Maybe<FkEmailTripTripIdInverseInput>,
  enquiriesUsingId?: Maybe<FkEnquiryTripTripIdInverseInput>,
  notesUsingId?: Maybe<FkNoteTripTripIdInverseInput>,
  quotesUsingId?: Maybe<FkQuoteTripTripIdInverseInput>,
  testimonialsUsingId?: Maybe<FkTestimonialTripTripIdInverseInput>,
  tripTravellersUsingId?: Maybe<FkTripTravellerTripTripIdInverseInput>,
  tripFlightsUsingId?: Maybe<FkTripFlightTripTripIdInverseInput>,
  quotePublicsUsingId?: Maybe<FakePublicQuotePublicForeignKey0InverseInput>,
};

export type FkNoteUserUserIdInput = {
  connectById?: Maybe<UserPkUserConnect>,
  connectByNodeId?: Maybe<UserNodeIdConnect>,
  deleteById?: Maybe<UserPkUserDelete>,
  deleteByNodeId?: Maybe<UserNodeIdDelete>,
  updateById?: Maybe<UserOnNoteForFkNoteUserUserIdUsingPkUserUpdate>,
  updateByNodeId?: Maybe<NoteOnNoteForFkNoteUserUserIdNodeIdUpdate>,
  create?: Maybe<FkNoteUserUserIdUserCreateInput>,
};

export type FkNoteUserUserIdInverseInput = {
  deleteOthers?: Maybe<Scalars['Boolean']>,
  connectById?: Maybe<Array<NotePkNoteConnect>>,
  connectByNodeId?: Maybe<Array<NoteNodeIdConnect>>,
  deleteById?: Maybe<Array<NotePkNoteDelete>>,
  deleteByNodeId?: Maybe<Array<NoteNodeIdDelete>>,
  updateById?: Maybe<Array<NoteOnNoteForFkNoteUserUserIdUsingPkNoteUpdate>>,
  updateByNodeId?: Maybe<Array<UserOnNoteForFkNoteUserUserIdNodeIdUpdate>>,
  create?: Maybe<Array<FkNoteUserUserIdNoteCreateInput>>,
};

export type FkNoteUserUserIdNoteCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  body?: Maybe<Scalars['String']>,
  created?: Maybe<Scalars['Datetime']>,
  tripId?: Maybe<Scalars['UUID']>,
  modified?: Maybe<Scalars['Datetime']>,
  title?: Maybe<Scalars['String']>,
  tripToTripId?: Maybe<FkNoteTripTripIdInput>,
  userToUserId?: Maybe<FkNoteUserUserIdInput>,
};

export type FkNoteUserUserIdUserCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  email?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  skype?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  genderPreposition?: Maybe<Scalars['String']>,
  externalId?: Maybe<Scalars['String']>,
  name: Scalars['String'],
  tripsUsingId?: Maybe<FkTripUserUserIdInverseInput>,
  emailsUsingId?: Maybe<FkEmailUserUserIdInverseInput>,
  notesUsingId?: Maybe<FkNoteUserUserIdInverseInput>,
  quotesUsingId?: Maybe<FkQuoteUserUserIdInverseInput>,
  remindersUsingId?: Maybe<FkReminderUserUserIdInverseInput>,
  transactionNotesUsingId?: Maybe<FkTransactionNoteUserUserIdInverseInput>,
  quotePublicsUsingId?: Maybe<FakePublicQuotePublicForeignKey2InverseInput>,
};

export type FkPassportTravellerTravellerIdInput = {
  connectById?: Maybe<TravellerPkTravellerConnect>,
  connectByNodeId?: Maybe<TravellerNodeIdConnect>,
  deleteById?: Maybe<TravellerPkTravellerDelete>,
  deleteByNodeId?: Maybe<TravellerNodeIdDelete>,
  updateById?: Maybe<TravellerOnPassportForFkPassportTravellerTravellerIdUsingPkTravellerUpdate>,
  updateByNodeId?: Maybe<PassportOnPassportForFkPassportTravellerTravellerIdNodeIdUpdate>,
  create?: Maybe<FkPassportTravellerTravellerIdTravellerCreateInput>,
};

export type FkPassportTravellerTravellerIdInverseInput = {
  deleteOthers?: Maybe<Scalars['Boolean']>,
  connectById?: Maybe<Array<PassportPkPassportConnect>>,
  connectByNodeId?: Maybe<Array<PassportNodeIdConnect>>,
  deleteById?: Maybe<Array<PassportPkPassportDelete>>,
  deleteByNodeId?: Maybe<Array<PassportNodeIdDelete>>,
  updateById?: Maybe<Array<PassportOnPassportForFkPassportTravellerTravellerIdUsingPkPassportUpdate>>,
  updateByNodeId?: Maybe<Array<TravellerOnPassportForFkPassportTravellerTravellerIdNodeIdUpdate>>,
  create?: Maybe<Array<FkPassportTravellerTravellerIdPassportCreateInput>>,
};

export type FkPassportTravellerTravellerIdPassportCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  countryOfIssue?: Maybe<Scalars['String']>,
  created?: Maybe<Scalars['Datetime']>,
  expiry: Scalars['Datetime'],
  modified?: Maybe<Scalars['Datetime']>,
  number?: Maybe<Scalars['String']>,
  travellerToTravellerId?: Maybe<FkPassportTravellerTravellerIdInput>,
};

export type FkPassportTravellerTravellerIdTravellerCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  dateOfBirth: Scalars['Datetime'],
  dietaryRequirements?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  height: Scalars['Int'],
  lastName?: Maybe<Scalars['String']>,
  medicalConditions?: Maybe<Scalars['String']>,
  middleName?: Maybe<Scalars['String']>,
  modified?: Maybe<Scalars['Datetime']>,
  nationality?: Maybe<Scalars['String']>,
  notes?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  weight: Scalars['Int'],
  emergencyContact?: Maybe<Scalars['String']>,
  insuranceDetails?: Maybe<Scalars['String']>,
  customerTravellersUsingId?: Maybe<FkCustomerTravellerTravellerTravellerIdInverseInput>,
  passportsUsingId?: Maybe<FkPassportTravellerTravellerIdInverseInput>,
  tripTravellersUsingId?: Maybe<FkTripTravellerTravellerTravellerIdInverseInput>,
};

export type FkPaymentFinanceCategoryCategoryIdFinanceCategoryCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['Int']>,
  code?: Maybe<Scalars['String']>,
  expensesUsingId?: Maybe<FkExpenseFinanceCategoryCategoryIdInverseInput>,
  invoicesUsingId?: Maybe<FkInvoiceFinanceCategoryCategoryIdInverseInput>,
  paymentsUsingId?: Maybe<FkPaymentFinanceCategoryCategoryIdInverseInput>,
  supplierInvoicesUsingId?: Maybe<FkSupplierInvoiceFinanceCategoryCategoryIdInverseInput>,
  transactionsUsingId?: Maybe<FkTransactionFinanceCategoryCategoryIdInverseInput>,
};

export type FkPaymentFinanceCategoryCategoryIdInput = {
  connectById?: Maybe<FinanceCategoryPkFinanceCategoryConnect>,
  connectByNodeId?: Maybe<FinanceCategoryNodeIdConnect>,
  deleteById?: Maybe<FinanceCategoryPkFinanceCategoryDelete>,
  deleteByNodeId?: Maybe<FinanceCategoryNodeIdDelete>,
  updateById?: Maybe<FinanceCategoryOnPaymentForFkPaymentFinanceCategoryCategoryIdUsingPkFinanceCategoryUpdate>,
  updateByNodeId?: Maybe<PaymentOnPaymentForFkPaymentFinanceCategoryCategoryIdNodeIdUpdate>,
  create?: Maybe<FkPaymentFinanceCategoryCategoryIdFinanceCategoryCreateInput>,
};

export type FkPaymentFinanceCategoryCategoryIdInverseInput = {
  deleteOthers?: Maybe<Scalars['Boolean']>,
  connectById?: Maybe<Array<PaymentPkPaymentConnect>>,
  connectByNodeId?: Maybe<Array<PaymentNodeIdConnect>>,
  deleteById?: Maybe<Array<PaymentPkPaymentDelete>>,
  deleteByNodeId?: Maybe<Array<PaymentNodeIdDelete>>,
  updateById?: Maybe<Array<PaymentOnPaymentForFkPaymentFinanceCategoryCategoryIdUsingPkPaymentUpdate>>,
  updateByNodeId?: Maybe<Array<FinanceCategoryOnPaymentForFkPaymentFinanceCategoryCategoryIdNodeIdUpdate>>,
  create?: Maybe<Array<FkPaymentFinanceCategoryCategoryIdPaymentCreateInput>>,
};

export type FkPaymentFinanceCategoryCategoryIdPaymentCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  amount: Scalars['BigFloat'],
  amountActual: Scalars['BigFloat'],
  created?: Maybe<Scalars['Datetime']>,
  currency?: Maybe<Scalars['String']>,
  invoiceId?: Maybe<Scalars['UUID']>,
  modified?: Maybe<Scalars['Datetime']>,
  paid: Scalars['Datetime'],
  reference?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  tripId?: Maybe<Scalars['UUID']>,
  type?: Maybe<Scalars['Int']>,
  invoiceToInvoiceId?: Maybe<FkPaymentInvoiceInvoiceIdInput>,
  financeCategoryToCategoryId?: Maybe<FkPaymentFinanceCategoryCategoryIdInput>,
  tripToTripId?: Maybe<FkPaymentTripTripIdInput>,
  transactionLinksUsingId?: Maybe<FkTransactionLinkPaymentPaymentIdInverseInput>,
};

export type FkPaymentInvoiceInvoiceIdInput = {
  connectById?: Maybe<InvoicePkInvoiceConnect>,
  connectByNodeId?: Maybe<InvoiceNodeIdConnect>,
  deleteById?: Maybe<InvoicePkInvoiceDelete>,
  deleteByNodeId?: Maybe<InvoiceNodeIdDelete>,
  updateById?: Maybe<InvoiceOnPaymentForFkPaymentInvoiceInvoiceIdUsingPkInvoiceUpdate>,
  updateByNodeId?: Maybe<PaymentOnPaymentForFkPaymentInvoiceInvoiceIdNodeIdUpdate>,
  create?: Maybe<FkPaymentInvoiceInvoiceIdInvoiceCreateInput>,
};

export type FkPaymentInvoiceInvoiceIdInverseInput = {
  deleteOthers?: Maybe<Scalars['Boolean']>,
  connectById?: Maybe<Array<PaymentPkPaymentConnect>>,
  connectByNodeId?: Maybe<Array<PaymentNodeIdConnect>>,
  deleteById?: Maybe<Array<PaymentPkPaymentDelete>>,
  deleteByNodeId?: Maybe<Array<PaymentNodeIdDelete>>,
  updateById?: Maybe<Array<PaymentOnPaymentForFkPaymentInvoiceInvoiceIdUsingPkPaymentUpdate>>,
  updateByNodeId?: Maybe<Array<InvoiceOnPaymentForFkPaymentInvoiceInvoiceIdNodeIdUpdate>>,
  create?: Maybe<Array<FkPaymentInvoiceInvoiceIdPaymentCreateInput>>,
};

export type FkPaymentInvoiceInvoiceIdInvoiceCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  amount: Scalars['BigFloat'],
  created?: Maybe<Scalars['Datetime']>,
  currency?: Maybe<Scalars['String']>,
  due: Scalars['Datetime'],
  key?: Maybe<Scalars['String']>,
  modified?: Maybe<Scalars['Datetime']>,
  summary?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>,
  number?: Maybe<Scalars['Int']>,
  quoteId?: Maybe<Scalars['UUID']>,
  voided?: Maybe<Scalars['Datetime']>,
  categoryId?: Maybe<Scalars['UUID']>,
  tripId?: Maybe<Scalars['UUID']>,
  paid?: Maybe<Scalars['Datetime']>,
  note?: Maybe<Scalars['String']>,
  invoiced?: Maybe<Scalars['Datetime']>,
  locked?: Maybe<Scalars['Datetime']>,
  quoteToQuoteId?: Maybe<FkInvoiceQuoteQuoteIdInput>,
  financeCategoryToCategoryId?: Maybe<FkInvoiceFinanceCategoryCategoryIdInput>,
  tripToTripId?: Maybe<FkInvoiceTripTripIdInput>,
  expensesUsingId?: Maybe<FkExpenseInvoiceInvoiceIdInverseInput>,
  paymentsUsingId?: Maybe<FkPaymentInvoiceInvoiceIdInverseInput>,
  transactionLinksUsingId?: Maybe<FkTransactionLinkInvoiceInvoiceIdInverseInput>,
};

export type FkPaymentInvoiceInvoiceIdPaymentCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  amount: Scalars['BigFloat'],
  amountActual: Scalars['BigFloat'],
  created?: Maybe<Scalars['Datetime']>,
  currency?: Maybe<Scalars['String']>,
  modified?: Maybe<Scalars['Datetime']>,
  paid: Scalars['Datetime'],
  reference?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  categoryId?: Maybe<Scalars['UUID']>,
  tripId?: Maybe<Scalars['UUID']>,
  type?: Maybe<Scalars['Int']>,
  invoiceToInvoiceId?: Maybe<FkPaymentInvoiceInvoiceIdInput>,
  financeCategoryToCategoryId?: Maybe<FkPaymentFinanceCategoryCategoryIdInput>,
  tripToTripId?: Maybe<FkPaymentTripTripIdInput>,
  transactionLinksUsingId?: Maybe<FkTransactionLinkPaymentPaymentIdInverseInput>,
};

export type FkPaymentTripTripIdInput = {
  connectById?: Maybe<TripPkTripConnect>,
  connectByNodeId?: Maybe<TripNodeIdConnect>,
  deleteById?: Maybe<TripPkTripDelete>,
  deleteByNodeId?: Maybe<TripNodeIdDelete>,
  updateById?: Maybe<TripOnPaymentForFkPaymentTripTripIdUsingPkTripUpdate>,
  updateByNodeId?: Maybe<PaymentOnPaymentForFkPaymentTripTripIdNodeIdUpdate>,
  create?: Maybe<FkPaymentTripTripIdTripCreateInput>,
};

export type FkPaymentTripTripIdInverseInput = {
  deleteOthers?: Maybe<Scalars['Boolean']>,
  connectById?: Maybe<Array<PaymentPkPaymentConnect>>,
  connectByNodeId?: Maybe<Array<PaymentNodeIdConnect>>,
  deleteById?: Maybe<Array<PaymentPkPaymentDelete>>,
  deleteByNodeId?: Maybe<Array<PaymentNodeIdDelete>>,
  updateById?: Maybe<Array<PaymentOnPaymentForFkPaymentTripTripIdUsingPkPaymentUpdate>>,
  updateByNodeId?: Maybe<Array<TripOnPaymentForFkPaymentTripTripIdNodeIdUpdate>>,
  create?: Maybe<Array<FkPaymentTripTripIdPaymentCreateInput>>,
};

export type FkPaymentTripTripIdPaymentCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  amount: Scalars['BigFloat'],
  amountActual: Scalars['BigFloat'],
  created?: Maybe<Scalars['Datetime']>,
  currency?: Maybe<Scalars['String']>,
  invoiceId?: Maybe<Scalars['UUID']>,
  modified?: Maybe<Scalars['Datetime']>,
  paid: Scalars['Datetime'],
  reference?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  categoryId?: Maybe<Scalars['UUID']>,
  type?: Maybe<Scalars['Int']>,
  invoiceToInvoiceId?: Maybe<FkPaymentInvoiceInvoiceIdInput>,
  financeCategoryToCategoryId?: Maybe<FkPaymentFinanceCategoryCategoryIdInput>,
  tripToTripId?: Maybe<FkPaymentTripTripIdInput>,
  transactionLinksUsingId?: Maybe<FkTransactionLinkPaymentPaymentIdInverseInput>,
};

export type FkPaymentTripTripIdTripCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  customerId?: Maybe<Scalars['UUID']>,
  userId?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  destination?: Maybe<Scalars['String']>,
  dates?: Maybe<Scalars['String']>,
  archived?: Maybe<Scalars['Datetime']>,
  mediaGalleryId?: Maybe<Scalars['UUID']>,
  activeQuoteId?: Maybe<Scalars['UUID']>,
  baseCurrency?: Maybe<Scalars['String']>,
  duration?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['Datetime']>,
  status?: Maybe<Scalars['Int']>,
  agencyId?: Maybe<Scalars['UUID']>,
  agencyMemberId?: Maybe<Scalars['UUID']>,
  customerToCustomerId?: Maybe<FkTripCustomerCustomerIdInput>,
  userToUserId?: Maybe<FkTripUserUserIdInput>,
  mediaGalleryToMediaGalleryId?: Maybe<FkTripMediaGalleryMediaGalleryIdInput>,
  quoteToActiveQuoteId?: Maybe<FkTripQuoteActiveQuoteIdInput>,
  agencyToAgencyId?: Maybe<FkTripAgencyAgencyIdInput>,
  agencyMemberToAgencyMemberId?: Maybe<FkTripAgencyMemberAgencyMemberIdInput>,
  expensesUsingId?: Maybe<FkExpenseTripTripIdInverseInput>,
  invoicesUsingId?: Maybe<FkInvoiceTripTripIdInverseInput>,
  paymentsUsingId?: Maybe<FkPaymentTripTripIdInverseInput>,
  supplierInvoicesUsingId?: Maybe<FkSupplierInvoiceTripTripIdInverseInput>,
  emailsUsingId?: Maybe<FkEmailTripTripIdInverseInput>,
  enquiriesUsingId?: Maybe<FkEnquiryTripTripIdInverseInput>,
  notesUsingId?: Maybe<FkNoteTripTripIdInverseInput>,
  quotesUsingId?: Maybe<FkQuoteTripTripIdInverseInput>,
  testimonialsUsingId?: Maybe<FkTestimonialTripTripIdInverseInput>,
  tripTravellersUsingId?: Maybe<FkTripTravellerTripTripIdInverseInput>,
  tripFlightsUsingId?: Maybe<FkTripFlightTripTripIdInverseInput>,
  quotePublicsUsingId?: Maybe<FakePublicQuotePublicForeignKey0InverseInput>,
};

export type FkPropertyCountryCountryIdCountryCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  iso2?: Maybe<Scalars['String']>,
  iso3?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  airportsUsingId?: Maybe<FkAirportCountryCountryIdInverseInput>,
  destinationsUsingId?: Maybe<FkDestinationCountryCountryIdInverseInput>,
  propertiesUsingId?: Maybe<FkPropertyCountryCountryIdInverseInput>,
};

export type FkPropertyCountryCountryIdInput = {
  connectById?: Maybe<CountryPkCountryConnect>,
  connectByNodeId?: Maybe<CountryNodeIdConnect>,
  deleteById?: Maybe<CountryPkCountryDelete>,
  deleteByNodeId?: Maybe<CountryNodeIdDelete>,
  updateById?: Maybe<CountryOnPropertyForFkPropertyCountryCountryIdUsingPkCountryUpdate>,
  updateByNodeId?: Maybe<PropertyOnPropertyForFkPropertyCountryCountryIdNodeIdUpdate>,
  create?: Maybe<FkPropertyCountryCountryIdCountryCreateInput>,
};

export type FkPropertyCountryCountryIdInverseInput = {
  deleteOthers?: Maybe<Scalars['Boolean']>,
  connectById?: Maybe<Array<PropertyPkPropertyConnect>>,
  connectByNodeId?: Maybe<Array<PropertyNodeIdConnect>>,
  deleteById?: Maybe<Array<PropertyPkPropertyDelete>>,
  deleteByNodeId?: Maybe<Array<PropertyNodeIdDelete>>,
  updateById?: Maybe<Array<PropertyOnPropertyForFkPropertyCountryCountryIdUsingPkPropertyUpdate>>,
  updateByNodeId?: Maybe<Array<CountryOnPropertyForFkPropertyCountryCountryIdNodeIdUpdate>>,
  create?: Maybe<Array<FkPropertyCountryCountryIdPropertyCreateInput>>,
};

export type FkPropertyCountryCountryIdPropertyCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  city?: Maybe<Scalars['String']>,
  contactEmail?: Maybe<Scalars['String']>,
  contactNumber?: Maybe<Scalars['String']>,
  latitude?: Maybe<Scalars['Float']>,
  longitude?: Maybe<Scalars['Float']>,
  nearestAirport?: Maybe<Scalars['String']>,
  region?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  externalReference?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
  galleryId?: Maybe<Scalars['UUID']>,
  heroMediaId?: Maybe<Scalars['UUID']>,
  notes?: Maybe<Scalars['String']>,
  archived?: Maybe<Scalars['Datetime']>,
  mapPointId?: Maybe<Scalars['UUID']>,
  plusCode?: Maybe<Scalars['String']>,
  mediaGalleryToGalleryId?: Maybe<FkPropertyMediaGalleryGalleryIdInput>,
  mediaItemToHeroMediaId?: Maybe<FkPropertyMediaItemHeroMediaIdInput>,
  mapPointToMapPointId?: Maybe<FkPropertyMapPointMapPointIdInput>,
  countryToCountryId?: Maybe<FkPropertyCountryCountryIdInput>,
  quoteAccommodationDetailsUsingId?: Maybe<FkQuoteAccommodationDetailPropertyPropertyIdInverseInput>,
  quoteDaysUsingId?: Maybe<QuoteDayPropertyIdFkeyInverseInput>,
};

export type FkPropertyMapPointMapPointIdInput = {
  connectById?: Maybe<MapPointPkMapPointConnect>,
  connectByNodeId?: Maybe<MapPointNodeIdConnect>,
  deleteById?: Maybe<MapPointPkMapPointDelete>,
  deleteByNodeId?: Maybe<MapPointNodeIdDelete>,
  updateById?: Maybe<MapPointOnPropertyForFkPropertyMapPointMapPointIdUsingPkMapPointUpdate>,
  updateByNodeId?: Maybe<PropertyOnPropertyForFkPropertyMapPointMapPointIdNodeIdUpdate>,
  create?: Maybe<FkPropertyMapPointMapPointIdMapPointCreateInput>,
};

export type FkPropertyMapPointMapPointIdInverseInput = {
  deleteOthers?: Maybe<Scalars['Boolean']>,
  connectById?: Maybe<Array<PropertyPkPropertyConnect>>,
  connectByNodeId?: Maybe<Array<PropertyNodeIdConnect>>,
  deleteById?: Maybe<Array<PropertyPkPropertyDelete>>,
  deleteByNodeId?: Maybe<Array<PropertyNodeIdDelete>>,
  updateById?: Maybe<Array<PropertyOnPropertyForFkPropertyMapPointMapPointIdUsingPkPropertyUpdate>>,
  updateByNodeId?: Maybe<Array<MapPointOnPropertyForFkPropertyMapPointMapPointIdNodeIdUpdate>>,
  create?: Maybe<Array<FkPropertyMapPointMapPointIdPropertyCreateInput>>,
};

export type FkPropertyMapPointMapPointIdMapPointCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  latitude: Scalars['Float'],
  longitude: Scalars['Float'],
  propertiesUsingId?: Maybe<FkPropertyMapPointMapPointIdInverseInput>,
};

export type FkPropertyMapPointMapPointIdPropertyCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  city?: Maybe<Scalars['String']>,
  contactEmail?: Maybe<Scalars['String']>,
  contactNumber?: Maybe<Scalars['String']>,
  latitude?: Maybe<Scalars['Float']>,
  longitude?: Maybe<Scalars['Float']>,
  nearestAirport?: Maybe<Scalars['String']>,
  region?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  externalReference?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
  galleryId?: Maybe<Scalars['UUID']>,
  heroMediaId?: Maybe<Scalars['UUID']>,
  notes?: Maybe<Scalars['String']>,
  archived?: Maybe<Scalars['Datetime']>,
  plusCode?: Maybe<Scalars['String']>,
  countryId?: Maybe<Scalars['UUID']>,
  mediaGalleryToGalleryId?: Maybe<FkPropertyMediaGalleryGalleryIdInput>,
  mediaItemToHeroMediaId?: Maybe<FkPropertyMediaItemHeroMediaIdInput>,
  mapPointToMapPointId?: Maybe<FkPropertyMapPointMapPointIdInput>,
  countryToCountryId?: Maybe<FkPropertyCountryCountryIdInput>,
  quoteAccommodationDetailsUsingId?: Maybe<FkQuoteAccommodationDetailPropertyPropertyIdInverseInput>,
  quoteDaysUsingId?: Maybe<QuoteDayPropertyIdFkeyInverseInput>,
};

export type FkPropertyMediaGalleryGalleryIdInput = {
  connectById?: Maybe<MediaGalleryPkMediaGalleryConnect>,
  connectByNodeId?: Maybe<MediaGalleryNodeIdConnect>,
  deleteById?: Maybe<MediaGalleryPkMediaGalleryDelete>,
  deleteByNodeId?: Maybe<MediaGalleryNodeIdDelete>,
  updateById?: Maybe<MediaGalleryOnPropertyForFkPropertyMediaGalleryGalleryIdUsingPkMediaGalleryUpdate>,
  updateByNodeId?: Maybe<PropertyOnPropertyForFkPropertyMediaGalleryGalleryIdNodeIdUpdate>,
  create?: Maybe<FkPropertyMediaGalleryGalleryIdMediaGalleryCreateInput>,
};

export type FkPropertyMediaGalleryGalleryIdInverseInput = {
  deleteOthers?: Maybe<Scalars['Boolean']>,
  connectById?: Maybe<Array<PropertyPkPropertyConnect>>,
  connectByNodeId?: Maybe<Array<PropertyNodeIdConnect>>,
  deleteById?: Maybe<Array<PropertyPkPropertyDelete>>,
  deleteByNodeId?: Maybe<Array<PropertyNodeIdDelete>>,
  updateById?: Maybe<Array<PropertyOnPropertyForFkPropertyMediaGalleryGalleryIdUsingPkPropertyUpdate>>,
  updateByNodeId?: Maybe<Array<MediaGalleryOnPropertyForFkPropertyMediaGalleryGalleryIdNodeIdUpdate>>,
  create?: Maybe<Array<FkPropertyMediaGalleryGalleryIdPropertyCreateInput>>,
};

export type FkPropertyMediaGalleryGalleryIdMediaGalleryCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  parentId?: Maybe<Scalars['UUID']>,
  isProtected?: Maybe<Scalars['Boolean']>,
  mediaGalleryToParentId?: Maybe<FkMediaGalleryMediaGalleryParentIdInput>,
  tripsUsingId?: Maybe<FkTripMediaGalleryMediaGalleryIdInverseInput>,
  destinationsUsingId?: Maybe<FkDestinationMediaGalleryGalleryIdInverseInput>,
  destinationFeaturesUsingId?: Maybe<FkDestinationFeatureMediaGalleryGalleryIdInverseInput>,
  featuresUsingId?: Maybe<FkFeatureMediaGalleryGalleryIdInverseInput>,
  mediaGalleryItemsUsingId?: Maybe<FkMediaGalleryItemMediaGalleryMediaGalleryIdInverseInput>,
  propertiesUsingId?: Maybe<FkPropertyMediaGalleryGalleryIdInverseInput>,
  suppliersUsingId?: Maybe<FkSupplierMediaGalleryGalleryIdInverseInput>,
};

export type FkPropertyMediaGalleryGalleryIdPropertyCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  city?: Maybe<Scalars['String']>,
  contactEmail?: Maybe<Scalars['String']>,
  contactNumber?: Maybe<Scalars['String']>,
  latitude?: Maybe<Scalars['Float']>,
  longitude?: Maybe<Scalars['Float']>,
  nearestAirport?: Maybe<Scalars['String']>,
  region?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  externalReference?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
  heroMediaId?: Maybe<Scalars['UUID']>,
  notes?: Maybe<Scalars['String']>,
  archived?: Maybe<Scalars['Datetime']>,
  mapPointId?: Maybe<Scalars['UUID']>,
  plusCode?: Maybe<Scalars['String']>,
  countryId?: Maybe<Scalars['UUID']>,
  mediaGalleryToGalleryId?: Maybe<FkPropertyMediaGalleryGalleryIdInput>,
  mediaItemToHeroMediaId?: Maybe<FkPropertyMediaItemHeroMediaIdInput>,
  mapPointToMapPointId?: Maybe<FkPropertyMapPointMapPointIdInput>,
  countryToCountryId?: Maybe<FkPropertyCountryCountryIdInput>,
  quoteAccommodationDetailsUsingId?: Maybe<FkQuoteAccommodationDetailPropertyPropertyIdInverseInput>,
  quoteDaysUsingId?: Maybe<QuoteDayPropertyIdFkeyInverseInput>,
};

export type FkPropertyMediaItemHeroMediaIdInput = {
  connectById?: Maybe<MediaItemPkMediaItemConnect>,
  connectByNodeId?: Maybe<MediaItemNodeIdConnect>,
  deleteById?: Maybe<MediaItemPkMediaItemDelete>,
  deleteByNodeId?: Maybe<MediaItemNodeIdDelete>,
  updateById?: Maybe<MediaItemOnPropertyForFkPropertyMediaItemHeroMediaIdUsingPkMediaItemUpdate>,
  updateByNodeId?: Maybe<PropertyOnPropertyForFkPropertyMediaItemHeroMediaIdNodeIdUpdate>,
  create?: Maybe<FkPropertyMediaItemHeroMediaIdMediaItemCreateInput>,
};

export type FkPropertyMediaItemHeroMediaIdInverseInput = {
  deleteOthers?: Maybe<Scalars['Boolean']>,
  connectById?: Maybe<Array<PropertyPkPropertyConnect>>,
  connectByNodeId?: Maybe<Array<PropertyNodeIdConnect>>,
  deleteById?: Maybe<Array<PropertyPkPropertyDelete>>,
  deleteByNodeId?: Maybe<Array<PropertyNodeIdDelete>>,
  updateById?: Maybe<Array<PropertyOnPropertyForFkPropertyMediaItemHeroMediaIdUsingPkPropertyUpdate>>,
  updateByNodeId?: Maybe<Array<MediaItemOnPropertyForFkPropertyMediaItemHeroMediaIdNodeIdUpdate>>,
  create?: Maybe<Array<FkPropertyMediaItemHeroMediaIdPropertyCreateInput>>,
};

export type FkPropertyMediaItemHeroMediaIdMediaItemCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  contentType?: Maybe<Scalars['String']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  fileName?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  hash?: Maybe<Scalars['String']>,
  agenciesUsingId?: Maybe<FkAgencyMediaItemLogoIdInverseInput>,
  supplierInvoicesUsingId?: Maybe<FkSupplierInvoiceMediaItemMediaItemIdInverseInput>,
  mediaGalleryItemsUsingId?: Maybe<FkMediaGalleryItemMediaItemMediaItemIdInverseInput>,
  propertiesUsingId?: Maybe<FkPropertyMediaItemHeroMediaIdInverseInput>,
  quotesUsingId?: Maybe<FkQuoteMediaItemHeroImageIdInverseInput>,
  quoteHeroesUsingId?: Maybe<FkQuoteHeroMediaItemImageIdInverseInput>,
};

export type FkPropertyMediaItemHeroMediaIdPropertyCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  city?: Maybe<Scalars['String']>,
  contactEmail?: Maybe<Scalars['String']>,
  contactNumber?: Maybe<Scalars['String']>,
  latitude?: Maybe<Scalars['Float']>,
  longitude?: Maybe<Scalars['Float']>,
  nearestAirport?: Maybe<Scalars['String']>,
  region?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  externalReference?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
  galleryId?: Maybe<Scalars['UUID']>,
  notes?: Maybe<Scalars['String']>,
  archived?: Maybe<Scalars['Datetime']>,
  mapPointId?: Maybe<Scalars['UUID']>,
  plusCode?: Maybe<Scalars['String']>,
  countryId?: Maybe<Scalars['UUID']>,
  mediaGalleryToGalleryId?: Maybe<FkPropertyMediaGalleryGalleryIdInput>,
  mediaItemToHeroMediaId?: Maybe<FkPropertyMediaItemHeroMediaIdInput>,
  mapPointToMapPointId?: Maybe<FkPropertyMapPointMapPointIdInput>,
  countryToCountryId?: Maybe<FkPropertyCountryCountryIdInput>,
  quoteAccommodationDetailsUsingId?: Maybe<FkQuoteAccommodationDetailPropertyPropertyIdInverseInput>,
  quoteDaysUsingId?: Maybe<QuoteDayPropertyIdFkeyInverseInput>,
};

export type FkQuoteAccommodationDetailPropertyPropertyIdInput = {
  connectById?: Maybe<PropertyPkPropertyConnect>,
  connectByNodeId?: Maybe<PropertyNodeIdConnect>,
  deleteById?: Maybe<PropertyPkPropertyDelete>,
  deleteByNodeId?: Maybe<PropertyNodeIdDelete>,
  updateById?: Maybe<PropertyOnQuoteAccommodationDetailForFkQuoteAccommodationDetailPropertyPropertyIdUsingPkPropertyUpdate>,
  updateByNodeId?: Maybe<QuoteAccommodationDetailOnQuoteAccommodationDetailForFkQuoteAccommodationDetailPropertyPropertyIdNodeIdUpdate>,
  create?: Maybe<FkQuoteAccommodationDetailPropertyPropertyIdPropertyCreateInput>,
};

export type FkQuoteAccommodationDetailPropertyPropertyIdInverseInput = {
  deleteOthers?: Maybe<Scalars['Boolean']>,
  connectById?: Maybe<Array<QuoteAccommodationDetailPkQuoteAccommodationDetailConnect>>,
  connectByNodeId?: Maybe<Array<QuoteAccommodationDetailNodeIdConnect>>,
  deleteById?: Maybe<Array<QuoteAccommodationDetailPkQuoteAccommodationDetailDelete>>,
  deleteByNodeId?: Maybe<Array<QuoteAccommodationDetailNodeIdDelete>>,
  updateById?: Maybe<Array<QuoteAccommodationDetailOnQuoteAccommodationDetailForFkQuoteAccommodationDetailPropertyPropertyIdUsingPkQuoteAccommodationDetailUpdate>>,
  updateByNodeId?: Maybe<Array<PropertyOnQuoteAccommodationDetailForFkQuoteAccommodationDetailPropertyPropertyIdNodeIdUpdate>>,
  create?: Maybe<Array<FkQuoteAccommodationDetailPropertyPropertyIdQuoteAccommodationDetailCreateInput>>,
};

export type FkQuoteAccommodationDetailPropertyPropertyIdPropertyCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  city?: Maybe<Scalars['String']>,
  contactEmail?: Maybe<Scalars['String']>,
  contactNumber?: Maybe<Scalars['String']>,
  latitude?: Maybe<Scalars['Float']>,
  longitude?: Maybe<Scalars['Float']>,
  nearestAirport?: Maybe<Scalars['String']>,
  region?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  externalReference?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
  galleryId?: Maybe<Scalars['UUID']>,
  heroMediaId?: Maybe<Scalars['UUID']>,
  notes?: Maybe<Scalars['String']>,
  archived?: Maybe<Scalars['Datetime']>,
  mapPointId?: Maybe<Scalars['UUID']>,
  plusCode?: Maybe<Scalars['String']>,
  countryId?: Maybe<Scalars['UUID']>,
  mediaGalleryToGalleryId?: Maybe<FkPropertyMediaGalleryGalleryIdInput>,
  mediaItemToHeroMediaId?: Maybe<FkPropertyMediaItemHeroMediaIdInput>,
  mapPointToMapPointId?: Maybe<FkPropertyMapPointMapPointIdInput>,
  countryToCountryId?: Maybe<FkPropertyCountryCountryIdInput>,
  quoteAccommodationDetailsUsingId?: Maybe<FkQuoteAccommodationDetailPropertyPropertyIdInverseInput>,
  quoteDaysUsingId?: Maybe<QuoteDayPropertyIdFkeyInverseInput>,
};

export type FkQuoteAccommodationDetailPropertyPropertyIdQuoteAccommodationDetailCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  order: Scalars['Int'],
  nights: Scalars['Int'],
  notes?: Maybe<Scalars['String']>,
  quoteId?: Maybe<Scalars['UUID']>,
  basis?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  confirmation?: Maybe<Scalars['String']>,
  beverageInclusions?: Maybe<Array<Maybe<Scalars['String']>>>,
  foodInclusions?: Maybe<Array<Maybe<Scalars['String']>>>,
  roomType?: Maybe<Scalars['String']>,
  propertyToPropertyId?: Maybe<FkQuoteAccommodationDetailPropertyPropertyIdInput>,
  quoteToQuoteId?: Maybe<FkQuoteAccommodationDetailQuoteQuoteIdInput>,
  quotePublic?: Maybe<FakePublicQuoteAccommodationDetailForeignKey0Input>,
  quoteDaysUsingId?: Maybe<FkQuoteDayQuoteAccommodationDetailAccommodationIdInverseInput>,
};

export type FkQuoteAccommodationDetailQuoteQuoteIdInput = {
  connectById?: Maybe<QuotePkQuoteConnect>,
  connectByNodeId?: Maybe<QuoteNodeIdConnect>,
  deleteById?: Maybe<QuotePkQuoteDelete>,
  deleteByNodeId?: Maybe<QuoteNodeIdDelete>,
  updateById?: Maybe<QuoteOnQuoteAccommodationDetailForFkQuoteAccommodationDetailQuoteQuoteIdUsingPkQuoteUpdate>,
  updateByNodeId?: Maybe<QuoteAccommodationDetailOnQuoteAccommodationDetailForFkQuoteAccommodationDetailQuoteQuoteIdNodeIdUpdate>,
  create?: Maybe<FkQuoteAccommodationDetailQuoteQuoteIdQuoteCreateInput>,
};

export type FkQuoteAccommodationDetailQuoteQuoteIdInverseInput = {
  deleteOthers?: Maybe<Scalars['Boolean']>,
  connectById?: Maybe<Array<QuoteAccommodationDetailPkQuoteAccommodationDetailConnect>>,
  connectByNodeId?: Maybe<Array<QuoteAccommodationDetailNodeIdConnect>>,
  deleteById?: Maybe<Array<QuoteAccommodationDetailPkQuoteAccommodationDetailDelete>>,
  deleteByNodeId?: Maybe<Array<QuoteAccommodationDetailNodeIdDelete>>,
  updateById?: Maybe<Array<QuoteAccommodationDetailOnQuoteAccommodationDetailForFkQuoteAccommodationDetailQuoteQuoteIdUsingPkQuoteAccommodationDetailUpdate>>,
  updateByNodeId?: Maybe<Array<QuoteOnQuoteAccommodationDetailForFkQuoteAccommodationDetailQuoteQuoteIdNodeIdUpdate>>,
  create?: Maybe<Array<FkQuoteAccommodationDetailQuoteQuoteIdQuoteAccommodationDetailCreateInput>>,
};

export type FkQuoteAccommodationDetailQuoteQuoteIdQuoteAccommodationDetailCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  order: Scalars['Int'],
  nights: Scalars['Int'],
  notes?: Maybe<Scalars['String']>,
  propertyId?: Maybe<Scalars['UUID']>,
  basis?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  confirmation?: Maybe<Scalars['String']>,
  beverageInclusions?: Maybe<Array<Maybe<Scalars['String']>>>,
  foodInclusions?: Maybe<Array<Maybe<Scalars['String']>>>,
  roomType?: Maybe<Scalars['String']>,
  propertyToPropertyId?: Maybe<FkQuoteAccommodationDetailPropertyPropertyIdInput>,
  quoteToQuoteId?: Maybe<FkQuoteAccommodationDetailQuoteQuoteIdInput>,
  quotePublic?: Maybe<FakePublicQuoteAccommodationDetailForeignKey0Input>,
  quoteDaysUsingId?: Maybe<FkQuoteDayQuoteAccommodationDetailAccommodationIdInverseInput>,
};

export type FkQuoteAccommodationDetailQuoteQuoteIdQuoteCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  duration: Scalars['Int'],
  modified?: Maybe<Scalars['Datetime']>,
  start?: Maybe<Scalars['Datetime']>,
  tripId?: Maybe<Scalars['UUID']>,
  deposit?: Maybe<Scalars['BigFloat']>,
  margin?: Maybe<Scalars['BigFloat']>,
  key?: Maybe<Scalars['String']>,
  expires?: Maybe<Scalars['Datetime']>,
  total?: Maybe<Scalars['BigFloat']>,
  adjustment?: Maybe<Scalars['BigFloat']>,
  baseCurrency?: Maybe<Scalars['String']>,
  shortDescription?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  heroImageId?: Maybe<Scalars['UUID']>,
  exclusions?: Maybe<Scalars['String']>,
  inclusions?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['Int']>,
  agentMargin?: Maybe<Scalars['BigFloat']>,
  travellerCount?: Maybe<Scalars['Int']>,
  archived?: Maybe<Scalars['Datetime']>,
  lastViewed?: Maybe<Scalars['Datetime']>,
  heroId?: Maybe<Scalars['UUID']>,
  userId?: Maybe<Scalars['UUID']>,
  locked?: Maybe<Scalars['Datetime']>,
  tripToTripId?: Maybe<FkQuoteTripTripIdInput>,
  mediaItemToHeroImageId?: Maybe<FkQuoteMediaItemHeroImageIdInput>,
  quoteHeroToHeroId?: Maybe<FkQuoteQuoteHeroHeroIdInput>,
  userToUserId?: Maybe<FkQuoteUserUserIdInput>,
  invoicesUsingId?: Maybe<FkInvoiceQuoteQuoteIdInverseInput>,
  tripsUsingId?: Maybe<FkTripQuoteActiveQuoteIdInverseInput>,
  emailsUsingId?: Maybe<FkEmailQuoteQuoteIdInverseInput>,
  quoteViewsUsingId?: Maybe<FkQuoteViewQuoteQuoteIdInverseInput>,
  quoteAccommodationDetailsUsingId?: Maybe<FkQuoteAccommodationDetailQuoteQuoteIdInverseInput>,
  quoteCurrenciesUsingId?: Maybe<FkQuoteCurrencyQuoteQuoteIdInverseInput>,
  quoteDaysUsingId?: Maybe<FkQuoteDayQuoteQuoteIdInverseInput>,
  quoteFinanceLineItemsUsingId?: Maybe<FkQuoteFinanceLineItemQuoteQuoteIdInverseInput>,
};

export type FkQuoteCurrencyQuoteQuoteIdInput = {
  connectById?: Maybe<QuotePkQuoteConnect>,
  connectByNodeId?: Maybe<QuoteNodeIdConnect>,
  deleteById?: Maybe<QuotePkQuoteDelete>,
  deleteByNodeId?: Maybe<QuoteNodeIdDelete>,
  updateById?: Maybe<QuoteOnQuoteCurrencyForFkQuoteCurrencyQuoteQuoteIdUsingPkQuoteUpdate>,
  updateByNodeId?: Maybe<QuoteCurrencyOnQuoteCurrencyForFkQuoteCurrencyQuoteQuoteIdNodeIdUpdate>,
  create?: Maybe<FkQuoteCurrencyQuoteQuoteIdQuoteCreateInput>,
};

export type FkQuoteCurrencyQuoteQuoteIdInverseInput = {
  deleteOthers?: Maybe<Scalars['Boolean']>,
  connectById?: Maybe<Array<QuoteCurrencyPkQuoteCurrencyConnect>>,
  connectByNodeId?: Maybe<Array<QuoteCurrencyNodeIdConnect>>,
  deleteById?: Maybe<Array<QuoteCurrencyPkQuoteCurrencyDelete>>,
  deleteByNodeId?: Maybe<Array<QuoteCurrencyNodeIdDelete>>,
  updateById?: Maybe<Array<QuoteCurrencyOnQuoteCurrencyForFkQuoteCurrencyQuoteQuoteIdUsingPkQuoteCurrencyUpdate>>,
  updateByNodeId?: Maybe<Array<QuoteOnQuoteCurrencyForFkQuoteCurrencyQuoteQuoteIdNodeIdUpdate>>,
  create?: Maybe<Array<FkQuoteCurrencyQuoteQuoteIdQuoteCurrencyCreateInput>>,
};

export type FkQuoteCurrencyQuoteQuoteIdQuoteCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  duration: Scalars['Int'],
  modified?: Maybe<Scalars['Datetime']>,
  start?: Maybe<Scalars['Datetime']>,
  tripId?: Maybe<Scalars['UUID']>,
  deposit?: Maybe<Scalars['BigFloat']>,
  margin?: Maybe<Scalars['BigFloat']>,
  key?: Maybe<Scalars['String']>,
  expires?: Maybe<Scalars['Datetime']>,
  total?: Maybe<Scalars['BigFloat']>,
  adjustment?: Maybe<Scalars['BigFloat']>,
  baseCurrency?: Maybe<Scalars['String']>,
  shortDescription?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  heroImageId?: Maybe<Scalars['UUID']>,
  exclusions?: Maybe<Scalars['String']>,
  inclusions?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['Int']>,
  agentMargin?: Maybe<Scalars['BigFloat']>,
  travellerCount?: Maybe<Scalars['Int']>,
  archived?: Maybe<Scalars['Datetime']>,
  lastViewed?: Maybe<Scalars['Datetime']>,
  heroId?: Maybe<Scalars['UUID']>,
  userId?: Maybe<Scalars['UUID']>,
  locked?: Maybe<Scalars['Datetime']>,
  tripToTripId?: Maybe<FkQuoteTripTripIdInput>,
  mediaItemToHeroImageId?: Maybe<FkQuoteMediaItemHeroImageIdInput>,
  quoteHeroToHeroId?: Maybe<FkQuoteQuoteHeroHeroIdInput>,
  userToUserId?: Maybe<FkQuoteUserUserIdInput>,
  invoicesUsingId?: Maybe<FkInvoiceQuoteQuoteIdInverseInput>,
  tripsUsingId?: Maybe<FkTripQuoteActiveQuoteIdInverseInput>,
  emailsUsingId?: Maybe<FkEmailQuoteQuoteIdInverseInput>,
  quoteViewsUsingId?: Maybe<FkQuoteViewQuoteQuoteIdInverseInput>,
  quoteAccommodationDetailsUsingId?: Maybe<FkQuoteAccommodationDetailQuoteQuoteIdInverseInput>,
  quoteCurrenciesUsingId?: Maybe<FkQuoteCurrencyQuoteQuoteIdInverseInput>,
  quoteDaysUsingId?: Maybe<FkQuoteDayQuoteQuoteIdInverseInput>,
  quoteFinanceLineItemsUsingId?: Maybe<FkQuoteFinanceLineItemQuoteQuoteIdInverseInput>,
};

export type FkQuoteCurrencyQuoteQuoteIdQuoteCurrencyCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  code?: Maybe<Scalars['String']>,
  rate: Scalars['BigFloat'],
  quoteToQuoteId?: Maybe<FkQuoteCurrencyQuoteQuoteIdInput>,
};

export type FkQuoteDayDestinationDestinationDestinationIdDestinationCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  body?: Maybe<Scalars['String']>,
  galleryId?: Maybe<Scalars['UUID']>,
  parentId?: Maybe<Scalars['UUID']>,
  countryId?: Maybe<Scalars['UUID']>,
  mediaGalleryToGalleryId?: Maybe<FkDestinationMediaGalleryGalleryIdInput>,
  destinationToParentId?: Maybe<FkDestinationDestinationParentIdInput>,
  countryToCountryId?: Maybe<FkDestinationCountryCountryIdInput>,
  destinationFeaturesUsingId?: Maybe<FkDestinationFeatureDestinationDestinationIdInverseInput>,
  destinationGuidesUsingId?: Maybe<FkDestinationGuideDestinationDestinationIdInverseInput>,
  quoteDayDestinationsUsingId?: Maybe<FkQuoteDayDestinationDestinationDestinationIdInverseInput>,
};

export type FkQuoteDayDestinationDestinationDestinationIdInput = {
  connectById?: Maybe<DestinationPkDestinationConnect>,
  connectByNodeId?: Maybe<DestinationNodeIdConnect>,
  deleteById?: Maybe<DestinationPkDestinationDelete>,
  deleteByNodeId?: Maybe<DestinationNodeIdDelete>,
  updateById?: Maybe<DestinationOnQuoteDayDestinationForFkQuoteDayDestinationDestinationDestinationIdUsingPkDestinationUpdate>,
  updateByNodeId?: Maybe<QuoteDayDestinationOnQuoteDayDestinationForFkQuoteDayDestinationDestinationDestinationIdNodeIdUpdate>,
  create?: Maybe<FkQuoteDayDestinationDestinationDestinationIdDestinationCreateInput>,
};

export type FkQuoteDayDestinationDestinationDestinationIdInverseInput = {
  deleteOthers?: Maybe<Scalars['Boolean']>,
  connectById?: Maybe<Array<QuoteDayDestinationPkQuoteDayDestinationConnect>>,
  connectByNodeId?: Maybe<Array<QuoteDayDestinationNodeIdConnect>>,
  deleteById?: Maybe<Array<QuoteDayDestinationPkQuoteDayDestinationDelete>>,
  deleteByNodeId?: Maybe<Array<QuoteDayDestinationNodeIdDelete>>,
  updateById?: Maybe<Array<QuoteDayDestinationOnQuoteDayDestinationForFkQuoteDayDestinationDestinationDestinationIdUsingPkQuoteDayDestinationUpdate>>,
  updateByNodeId?: Maybe<Array<DestinationOnQuoteDayDestinationForFkQuoteDayDestinationDestinationDestinationIdNodeIdUpdate>>,
  create?: Maybe<Array<FkQuoteDayDestinationDestinationDestinationIdQuoteDayDestinationCreateInput>>,
};

export type FkQuoteDayDestinationDestinationDestinationIdQuoteDayDestinationCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  dayId?: Maybe<Scalars['UUID']>,
  order: Scalars['Int'],
  destinationToDestinationId?: Maybe<FkQuoteDayDestinationDestinationDestinationIdInput>,
  quoteDayToDayId?: Maybe<FkQuoteDayDestinationQuoteDayDayIdInput>,
};

export type FkQuoteDayDestinationQuoteDayDayIdInput = {
  connectById?: Maybe<QuoteDayPkQuoteDayConnect>,
  connectByNodeId?: Maybe<QuoteDayNodeIdConnect>,
  deleteById?: Maybe<QuoteDayPkQuoteDayDelete>,
  deleteByNodeId?: Maybe<QuoteDayNodeIdDelete>,
  updateById?: Maybe<QuoteDayOnQuoteDayDestinationForFkQuoteDayDestinationQuoteDayDayIdUsingPkQuoteDayUpdate>,
  updateByNodeId?: Maybe<QuoteDayDestinationOnQuoteDayDestinationForFkQuoteDayDestinationQuoteDayDayIdNodeIdUpdate>,
  create?: Maybe<FkQuoteDayDestinationQuoteDayDayIdQuoteDayCreateInput>,
};

export type FkQuoteDayDestinationQuoteDayDayIdInverseInput = {
  deleteOthers?: Maybe<Scalars['Boolean']>,
  connectById?: Maybe<Array<QuoteDayDestinationPkQuoteDayDestinationConnect>>,
  connectByNodeId?: Maybe<Array<QuoteDayDestinationNodeIdConnect>>,
  deleteById?: Maybe<Array<QuoteDayDestinationPkQuoteDayDestinationDelete>>,
  deleteByNodeId?: Maybe<Array<QuoteDayDestinationNodeIdDelete>>,
  updateById?: Maybe<Array<QuoteDayDestinationOnQuoteDayDestinationForFkQuoteDayDestinationQuoteDayDayIdUsingPkQuoteDayDestinationUpdate>>,
  updateByNodeId?: Maybe<Array<QuoteDayOnQuoteDayDestinationForFkQuoteDayDestinationQuoteDayDayIdNodeIdUpdate>>,
  create?: Maybe<Array<FkQuoteDayDestinationQuoteDayDayIdQuoteDayDestinationCreateInput>>,
};

export type FkQuoteDayDestinationQuoteDayDayIdQuoteDayCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  order: Scalars['Int'],
  date?: Maybe<Scalars['Datetime']>,
  activitySummary?: Maybe<Scalars['String']>,
  activityDetail?: Maybe<Scalars['String']>,
  accommodationId?: Maybe<Scalars['UUID']>,
  quoteId?: Maybe<Scalars['UUID']>,
  propertyId?: Maybe<Scalars['UUID']>,
  quoteAccommodationDetailToAccommodationId?: Maybe<FkQuoteDayQuoteAccommodationDetailAccommodationIdInput>,
  quoteToQuoteId?: Maybe<FkQuoteDayQuoteQuoteIdInput>,
  propertyToPropertyId?: Maybe<QuoteDayPropertyIdFkeyInput>,
  quotePublic?: Maybe<FakePublicQuoteDayForeignKey0Input>,
  quoteDayDestinationsUsingId?: Maybe<FkQuoteDayDestinationQuoteDayDayIdInverseInput>,
};

export type FkQuoteDayDestinationQuoteDayDayIdQuoteDayDestinationCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  destinationId?: Maybe<Scalars['UUID']>,
  order: Scalars['Int'],
  destinationToDestinationId?: Maybe<FkQuoteDayDestinationDestinationDestinationIdInput>,
  quoteDayToDayId?: Maybe<FkQuoteDayDestinationQuoteDayDayIdInput>,
};

export type FkQuoteDayQuoteAccommodationDetailAccommodationIdInput = {
  connectById?: Maybe<QuoteAccommodationDetailPkQuoteAccommodationDetailConnect>,
  connectByNodeId?: Maybe<QuoteAccommodationDetailNodeIdConnect>,
  deleteById?: Maybe<QuoteAccommodationDetailPkQuoteAccommodationDetailDelete>,
  deleteByNodeId?: Maybe<QuoteAccommodationDetailNodeIdDelete>,
  updateById?: Maybe<QuoteAccommodationDetailOnQuoteDayForFkQuoteDayQuoteAccommodationDetailAccommodationIdUsingPkQuoteAccommodationDetailUpdate>,
  updateByNodeId?: Maybe<QuoteDayOnQuoteDayForFkQuoteDayQuoteAccommodationDetailAccommodationIdNodeIdUpdate>,
  create?: Maybe<FkQuoteDayQuoteAccommodationDetailAccommodationIdQuoteAccommodationDetailCreateInput>,
};

export type FkQuoteDayQuoteAccommodationDetailAccommodationIdInverseInput = {
  deleteOthers?: Maybe<Scalars['Boolean']>,
  connectById?: Maybe<Array<QuoteDayPkQuoteDayConnect>>,
  connectByNodeId?: Maybe<Array<QuoteDayNodeIdConnect>>,
  deleteById?: Maybe<Array<QuoteDayPkQuoteDayDelete>>,
  deleteByNodeId?: Maybe<Array<QuoteDayNodeIdDelete>>,
  updateById?: Maybe<Array<QuoteDayOnQuoteDayForFkQuoteDayQuoteAccommodationDetailAccommodationIdUsingPkQuoteDayUpdate>>,
  updateByNodeId?: Maybe<Array<QuoteAccommodationDetailOnQuoteDayForFkQuoteDayQuoteAccommodationDetailAccommodationIdNodeIdUpdate>>,
  create?: Maybe<Array<FkQuoteDayQuoteAccommodationDetailAccommodationIdQuoteDayCreateInput>>,
};

export type FkQuoteDayQuoteAccommodationDetailAccommodationIdQuoteAccommodationDetailCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  order: Scalars['Int'],
  nights: Scalars['Int'],
  notes?: Maybe<Scalars['String']>,
  propertyId?: Maybe<Scalars['UUID']>,
  quoteId?: Maybe<Scalars['UUID']>,
  basis?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  confirmation?: Maybe<Scalars['String']>,
  beverageInclusions?: Maybe<Array<Maybe<Scalars['String']>>>,
  foodInclusions?: Maybe<Array<Maybe<Scalars['String']>>>,
  roomType?: Maybe<Scalars['String']>,
  propertyToPropertyId?: Maybe<FkQuoteAccommodationDetailPropertyPropertyIdInput>,
  quoteToQuoteId?: Maybe<FkQuoteAccommodationDetailQuoteQuoteIdInput>,
  quotePublic?: Maybe<FakePublicQuoteAccommodationDetailForeignKey0Input>,
  quoteDaysUsingId?: Maybe<FkQuoteDayQuoteAccommodationDetailAccommodationIdInverseInput>,
};

export type FkQuoteDayQuoteAccommodationDetailAccommodationIdQuoteDayCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  order: Scalars['Int'],
  date?: Maybe<Scalars['Datetime']>,
  activitySummary?: Maybe<Scalars['String']>,
  activityDetail?: Maybe<Scalars['String']>,
  quoteId?: Maybe<Scalars['UUID']>,
  propertyId?: Maybe<Scalars['UUID']>,
  quoteAccommodationDetailToAccommodationId?: Maybe<FkQuoteDayQuoteAccommodationDetailAccommodationIdInput>,
  quoteToQuoteId?: Maybe<FkQuoteDayQuoteQuoteIdInput>,
  propertyToPropertyId?: Maybe<QuoteDayPropertyIdFkeyInput>,
  quotePublic?: Maybe<FakePublicQuoteDayForeignKey0Input>,
  quoteDayDestinationsUsingId?: Maybe<FkQuoteDayDestinationQuoteDayDayIdInverseInput>,
};

export type FkQuoteDayQuoteQuoteIdInput = {
  connectById?: Maybe<QuotePkQuoteConnect>,
  connectByNodeId?: Maybe<QuoteNodeIdConnect>,
  deleteById?: Maybe<QuotePkQuoteDelete>,
  deleteByNodeId?: Maybe<QuoteNodeIdDelete>,
  updateById?: Maybe<QuoteOnQuoteDayForFkQuoteDayQuoteQuoteIdUsingPkQuoteUpdate>,
  updateByNodeId?: Maybe<QuoteDayOnQuoteDayForFkQuoteDayQuoteQuoteIdNodeIdUpdate>,
  create?: Maybe<FkQuoteDayQuoteQuoteIdQuoteCreateInput>,
};

export type FkQuoteDayQuoteQuoteIdInverseInput = {
  deleteOthers?: Maybe<Scalars['Boolean']>,
  connectById?: Maybe<Array<QuoteDayPkQuoteDayConnect>>,
  connectByNodeId?: Maybe<Array<QuoteDayNodeIdConnect>>,
  deleteById?: Maybe<Array<QuoteDayPkQuoteDayDelete>>,
  deleteByNodeId?: Maybe<Array<QuoteDayNodeIdDelete>>,
  updateById?: Maybe<Array<QuoteDayOnQuoteDayForFkQuoteDayQuoteQuoteIdUsingPkQuoteDayUpdate>>,
  updateByNodeId?: Maybe<Array<QuoteOnQuoteDayForFkQuoteDayQuoteQuoteIdNodeIdUpdate>>,
  create?: Maybe<Array<FkQuoteDayQuoteQuoteIdQuoteDayCreateInput>>,
};

export type FkQuoteDayQuoteQuoteIdQuoteCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  duration: Scalars['Int'],
  modified?: Maybe<Scalars['Datetime']>,
  start?: Maybe<Scalars['Datetime']>,
  tripId?: Maybe<Scalars['UUID']>,
  deposit?: Maybe<Scalars['BigFloat']>,
  margin?: Maybe<Scalars['BigFloat']>,
  key?: Maybe<Scalars['String']>,
  expires?: Maybe<Scalars['Datetime']>,
  total?: Maybe<Scalars['BigFloat']>,
  adjustment?: Maybe<Scalars['BigFloat']>,
  baseCurrency?: Maybe<Scalars['String']>,
  shortDescription?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  heroImageId?: Maybe<Scalars['UUID']>,
  exclusions?: Maybe<Scalars['String']>,
  inclusions?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['Int']>,
  agentMargin?: Maybe<Scalars['BigFloat']>,
  travellerCount?: Maybe<Scalars['Int']>,
  archived?: Maybe<Scalars['Datetime']>,
  lastViewed?: Maybe<Scalars['Datetime']>,
  heroId?: Maybe<Scalars['UUID']>,
  userId?: Maybe<Scalars['UUID']>,
  locked?: Maybe<Scalars['Datetime']>,
  tripToTripId?: Maybe<FkQuoteTripTripIdInput>,
  mediaItemToHeroImageId?: Maybe<FkQuoteMediaItemHeroImageIdInput>,
  quoteHeroToHeroId?: Maybe<FkQuoteQuoteHeroHeroIdInput>,
  userToUserId?: Maybe<FkQuoteUserUserIdInput>,
  invoicesUsingId?: Maybe<FkInvoiceQuoteQuoteIdInverseInput>,
  tripsUsingId?: Maybe<FkTripQuoteActiveQuoteIdInverseInput>,
  emailsUsingId?: Maybe<FkEmailQuoteQuoteIdInverseInput>,
  quoteViewsUsingId?: Maybe<FkQuoteViewQuoteQuoteIdInverseInput>,
  quoteAccommodationDetailsUsingId?: Maybe<FkQuoteAccommodationDetailQuoteQuoteIdInverseInput>,
  quoteCurrenciesUsingId?: Maybe<FkQuoteCurrencyQuoteQuoteIdInverseInput>,
  quoteDaysUsingId?: Maybe<FkQuoteDayQuoteQuoteIdInverseInput>,
  quoteFinanceLineItemsUsingId?: Maybe<FkQuoteFinanceLineItemQuoteQuoteIdInverseInput>,
};

export type FkQuoteDayQuoteQuoteIdQuoteDayCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  order: Scalars['Int'],
  date?: Maybe<Scalars['Datetime']>,
  activitySummary?: Maybe<Scalars['String']>,
  activityDetail?: Maybe<Scalars['String']>,
  accommodationId?: Maybe<Scalars['UUID']>,
  propertyId?: Maybe<Scalars['UUID']>,
  quoteAccommodationDetailToAccommodationId?: Maybe<FkQuoteDayQuoteAccommodationDetailAccommodationIdInput>,
  quoteToQuoteId?: Maybe<FkQuoteDayQuoteQuoteIdInput>,
  propertyToPropertyId?: Maybe<QuoteDayPropertyIdFkeyInput>,
  quotePublic?: Maybe<FakePublicQuoteDayForeignKey0Input>,
  quoteDayDestinationsUsingId?: Maybe<FkQuoteDayDestinationQuoteDayDayIdInverseInput>,
};

export type FkQuoteFinanceLineItemQuoteQuoteIdInput = {
  connectById?: Maybe<QuotePkQuoteConnect>,
  connectByNodeId?: Maybe<QuoteNodeIdConnect>,
  deleteById?: Maybe<QuotePkQuoteDelete>,
  deleteByNodeId?: Maybe<QuoteNodeIdDelete>,
  updateById?: Maybe<QuoteOnQuoteFinanceLineItemForFkQuoteFinanceLineItemQuoteQuoteIdUsingPkQuoteUpdate>,
  updateByNodeId?: Maybe<QuoteFinanceLineItemOnQuoteFinanceLineItemForFkQuoteFinanceLineItemQuoteQuoteIdNodeIdUpdate>,
  create?: Maybe<FkQuoteFinanceLineItemQuoteQuoteIdQuoteCreateInput>,
};

export type FkQuoteFinanceLineItemQuoteQuoteIdInverseInput = {
  deleteOthers?: Maybe<Scalars['Boolean']>,
  connectById?: Maybe<Array<QuoteFinanceLineItemPkQuoteFinanceLineItemConnect>>,
  connectByNodeId?: Maybe<Array<QuoteFinanceLineItemNodeIdConnect>>,
  deleteById?: Maybe<Array<QuoteFinanceLineItemPkQuoteFinanceLineItemDelete>>,
  deleteByNodeId?: Maybe<Array<QuoteFinanceLineItemNodeIdDelete>>,
  updateById?: Maybe<Array<QuoteFinanceLineItemOnQuoteFinanceLineItemForFkQuoteFinanceLineItemQuoteQuoteIdUsingPkQuoteFinanceLineItemUpdate>>,
  updateByNodeId?: Maybe<Array<QuoteOnQuoteFinanceLineItemForFkQuoteFinanceLineItemQuoteQuoteIdNodeIdUpdate>>,
  create?: Maybe<Array<FkQuoteFinanceLineItemQuoteQuoteIdQuoteFinanceLineItemCreateInput>>,
};

export type FkQuoteFinanceLineItemQuoteQuoteIdQuoteCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  duration: Scalars['Int'],
  modified?: Maybe<Scalars['Datetime']>,
  start?: Maybe<Scalars['Datetime']>,
  tripId?: Maybe<Scalars['UUID']>,
  deposit?: Maybe<Scalars['BigFloat']>,
  margin?: Maybe<Scalars['BigFloat']>,
  key?: Maybe<Scalars['String']>,
  expires?: Maybe<Scalars['Datetime']>,
  total?: Maybe<Scalars['BigFloat']>,
  adjustment?: Maybe<Scalars['BigFloat']>,
  baseCurrency?: Maybe<Scalars['String']>,
  shortDescription?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  heroImageId?: Maybe<Scalars['UUID']>,
  exclusions?: Maybe<Scalars['String']>,
  inclusions?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['Int']>,
  agentMargin?: Maybe<Scalars['BigFloat']>,
  travellerCount?: Maybe<Scalars['Int']>,
  archived?: Maybe<Scalars['Datetime']>,
  lastViewed?: Maybe<Scalars['Datetime']>,
  heroId?: Maybe<Scalars['UUID']>,
  userId?: Maybe<Scalars['UUID']>,
  locked?: Maybe<Scalars['Datetime']>,
  tripToTripId?: Maybe<FkQuoteTripTripIdInput>,
  mediaItemToHeroImageId?: Maybe<FkQuoteMediaItemHeroImageIdInput>,
  quoteHeroToHeroId?: Maybe<FkQuoteQuoteHeroHeroIdInput>,
  userToUserId?: Maybe<FkQuoteUserUserIdInput>,
  invoicesUsingId?: Maybe<FkInvoiceQuoteQuoteIdInverseInput>,
  tripsUsingId?: Maybe<FkTripQuoteActiveQuoteIdInverseInput>,
  emailsUsingId?: Maybe<FkEmailQuoteQuoteIdInverseInput>,
  quoteViewsUsingId?: Maybe<FkQuoteViewQuoteQuoteIdInverseInput>,
  quoteAccommodationDetailsUsingId?: Maybe<FkQuoteAccommodationDetailQuoteQuoteIdInverseInput>,
  quoteCurrenciesUsingId?: Maybe<FkQuoteCurrencyQuoteQuoteIdInverseInput>,
  quoteDaysUsingId?: Maybe<FkQuoteDayQuoteQuoteIdInverseInput>,
  quoteFinanceLineItemsUsingId?: Maybe<FkQuoteFinanceLineItemQuoteQuoteIdInverseInput>,
};

export type FkQuoteFinanceLineItemQuoteQuoteIdQuoteFinanceLineItemCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  amount: Scalars['BigFloat'],
  currency?: Maybe<Scalars['String']>,
  supplierId?: Maybe<Scalars['UUID']>,
  confirmation?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  excludeMargin?: Maybe<Scalars['Boolean']>,
  notes?: Maybe<Scalars['String']>,
  quantity: Scalars['Int'],
  order: Scalars['Int'],
  marginOverride?: Maybe<Scalars['BigFloat']>,
  quoteToQuoteId?: Maybe<FkQuoteFinanceLineItemQuoteQuoteIdInput>,
  supplierToSupplierId?: Maybe<FkQuoteFinanceLineItemSupplierSupplierIdInput>,
};

export type FkQuoteFinanceLineItemSupplierSupplierIdInput = {
  connectById?: Maybe<SupplierPkSupplierConnect>,
  connectByNodeId?: Maybe<SupplierNodeIdConnect>,
  deleteById?: Maybe<SupplierPkSupplierDelete>,
  deleteByNodeId?: Maybe<SupplierNodeIdDelete>,
  updateById?: Maybe<SupplierOnQuoteFinanceLineItemForFkQuoteFinanceLineItemSupplierSupplierIdUsingPkSupplierUpdate>,
  updateByNodeId?: Maybe<QuoteFinanceLineItemOnQuoteFinanceLineItemForFkQuoteFinanceLineItemSupplierSupplierIdNodeIdUpdate>,
  create?: Maybe<FkQuoteFinanceLineItemSupplierSupplierIdSupplierCreateInput>,
};

export type FkQuoteFinanceLineItemSupplierSupplierIdInverseInput = {
  deleteOthers?: Maybe<Scalars['Boolean']>,
  connectById?: Maybe<Array<QuoteFinanceLineItemPkQuoteFinanceLineItemConnect>>,
  connectByNodeId?: Maybe<Array<QuoteFinanceLineItemNodeIdConnect>>,
  deleteById?: Maybe<Array<QuoteFinanceLineItemPkQuoteFinanceLineItemDelete>>,
  deleteByNodeId?: Maybe<Array<QuoteFinanceLineItemNodeIdDelete>>,
  updateById?: Maybe<Array<QuoteFinanceLineItemOnQuoteFinanceLineItemForFkQuoteFinanceLineItemSupplierSupplierIdUsingPkQuoteFinanceLineItemUpdate>>,
  updateByNodeId?: Maybe<Array<SupplierOnQuoteFinanceLineItemForFkQuoteFinanceLineItemSupplierSupplierIdNodeIdUpdate>>,
  create?: Maybe<Array<FkQuoteFinanceLineItemSupplierSupplierIdQuoteFinanceLineItemCreateInput>>,
};

export type FkQuoteFinanceLineItemSupplierSupplierIdQuoteFinanceLineItemCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  amount: Scalars['BigFloat'],
  currency?: Maybe<Scalars['String']>,
  quoteId?: Maybe<Scalars['UUID']>,
  confirmation?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  excludeMargin?: Maybe<Scalars['Boolean']>,
  notes?: Maybe<Scalars['String']>,
  quantity: Scalars['Int'],
  order: Scalars['Int'],
  marginOverride?: Maybe<Scalars['BigFloat']>,
  quoteToQuoteId?: Maybe<FkQuoteFinanceLineItemQuoteQuoteIdInput>,
  supplierToSupplierId?: Maybe<FkQuoteFinanceLineItemSupplierSupplierIdInput>,
};

export type FkQuoteFinanceLineItemSupplierSupplierIdSupplierCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  contactEmail?: Maybe<Scalars['String']>,
  contactNumber?: Maybe<Scalars['String']>,
  region?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
  bankDetails?: Maybe<Scalars['String']>,
  galleryId?: Maybe<Scalars['UUID']>,
  mediaGalleryToGalleryId?: Maybe<FkSupplierMediaGalleryGalleryIdInput>,
  expensesUsingId?: Maybe<FkExpenseSupplierSupplierIdInverseInput>,
  supplierInvoicesUsingId?: Maybe<FkSupplierInvoiceSupplierSupplierIdInverseInput>,
  quoteFinanceLineItemsUsingId?: Maybe<FkQuoteFinanceLineItemSupplierSupplierIdInverseInput>,
};

export type FkQuoteHeroMediaItemImageIdInput = {
  connectById?: Maybe<MediaItemPkMediaItemConnect>,
  connectByNodeId?: Maybe<MediaItemNodeIdConnect>,
  deleteById?: Maybe<MediaItemPkMediaItemDelete>,
  deleteByNodeId?: Maybe<MediaItemNodeIdDelete>,
  updateById?: Maybe<MediaItemOnQuoteHeroForFkQuoteHeroMediaItemImageIdUsingPkMediaItemUpdate>,
  updateByNodeId?: Maybe<QuoteHeroOnQuoteHeroForFkQuoteHeroMediaItemImageIdNodeIdUpdate>,
  create?: Maybe<FkQuoteHeroMediaItemImageIdMediaItemCreateInput>,
};

export type FkQuoteHeroMediaItemImageIdInverseInput = {
  deleteOthers?: Maybe<Scalars['Boolean']>,
  connectById?: Maybe<Array<QuoteHeroPkQuoteHeroConnect>>,
  connectByNodeId?: Maybe<Array<QuoteHeroNodeIdConnect>>,
  deleteById?: Maybe<Array<QuoteHeroPkQuoteHeroDelete>>,
  deleteByNodeId?: Maybe<Array<QuoteHeroNodeIdDelete>>,
  updateById?: Maybe<Array<QuoteHeroOnQuoteHeroForFkQuoteHeroMediaItemImageIdUsingPkQuoteHeroUpdate>>,
  updateByNodeId?: Maybe<Array<MediaItemOnQuoteHeroForFkQuoteHeroMediaItemImageIdNodeIdUpdate>>,
  create?: Maybe<Array<FkQuoteHeroMediaItemImageIdQuoteHeroCreateInput>>,
};

export type FkQuoteHeroMediaItemImageIdMediaItemCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  contentType?: Maybe<Scalars['String']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  fileName?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  hash?: Maybe<Scalars['String']>,
  agenciesUsingId?: Maybe<FkAgencyMediaItemLogoIdInverseInput>,
  supplierInvoicesUsingId?: Maybe<FkSupplierInvoiceMediaItemMediaItemIdInverseInput>,
  mediaGalleryItemsUsingId?: Maybe<FkMediaGalleryItemMediaItemMediaItemIdInverseInput>,
  propertiesUsingId?: Maybe<FkPropertyMediaItemHeroMediaIdInverseInput>,
  quotesUsingId?: Maybe<FkQuoteMediaItemHeroImageIdInverseInput>,
  quoteHeroesUsingId?: Maybe<FkQuoteHeroMediaItemImageIdInverseInput>,
};

export type FkQuoteHeroMediaItemImageIdQuoteHeroCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  title?: Maybe<Scalars['String']>,
  subtitle?: Maybe<Scalars['String']>,
  style?: Maybe<Scalars['String']>,
  mediaItemToImageId?: Maybe<FkQuoteHeroMediaItemImageIdInput>,
  quotesUsingId?: Maybe<FkQuoteQuoteHeroHeroIdInverseInput>,
  quotePublicsUsingId?: Maybe<FakePublicQuotePublicForeignKey1InverseInput>,
};

export type FkQuoteMediaItemHeroImageIdInput = {
  connectById?: Maybe<MediaItemPkMediaItemConnect>,
  connectByNodeId?: Maybe<MediaItemNodeIdConnect>,
  deleteById?: Maybe<MediaItemPkMediaItemDelete>,
  deleteByNodeId?: Maybe<MediaItemNodeIdDelete>,
  updateById?: Maybe<MediaItemOnQuoteForFkQuoteMediaItemHeroImageIdUsingPkMediaItemUpdate>,
  updateByNodeId?: Maybe<QuoteOnQuoteForFkQuoteMediaItemHeroImageIdNodeIdUpdate>,
  create?: Maybe<FkQuoteMediaItemHeroImageIdMediaItemCreateInput>,
};

export type FkQuoteMediaItemHeroImageIdInverseInput = {
  deleteOthers?: Maybe<Scalars['Boolean']>,
  connectById?: Maybe<Array<QuotePkQuoteConnect>>,
  connectByNodeId?: Maybe<Array<QuoteNodeIdConnect>>,
  deleteById?: Maybe<Array<QuotePkQuoteDelete>>,
  deleteByNodeId?: Maybe<Array<QuoteNodeIdDelete>>,
  updateById?: Maybe<Array<QuoteOnQuoteForFkQuoteMediaItemHeroImageIdUsingPkQuoteUpdate>>,
  updateByNodeId?: Maybe<Array<MediaItemOnQuoteForFkQuoteMediaItemHeroImageIdNodeIdUpdate>>,
  create?: Maybe<Array<FkQuoteMediaItemHeroImageIdQuoteCreateInput>>,
};

export type FkQuoteMediaItemHeroImageIdMediaItemCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  contentType?: Maybe<Scalars['String']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  fileName?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  hash?: Maybe<Scalars['String']>,
  agenciesUsingId?: Maybe<FkAgencyMediaItemLogoIdInverseInput>,
  supplierInvoicesUsingId?: Maybe<FkSupplierInvoiceMediaItemMediaItemIdInverseInput>,
  mediaGalleryItemsUsingId?: Maybe<FkMediaGalleryItemMediaItemMediaItemIdInverseInput>,
  propertiesUsingId?: Maybe<FkPropertyMediaItemHeroMediaIdInverseInput>,
  quotesUsingId?: Maybe<FkQuoteMediaItemHeroImageIdInverseInput>,
  quoteHeroesUsingId?: Maybe<FkQuoteHeroMediaItemImageIdInverseInput>,
};

export type FkQuoteMediaItemHeroImageIdQuoteCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  duration: Scalars['Int'],
  modified?: Maybe<Scalars['Datetime']>,
  start?: Maybe<Scalars['Datetime']>,
  tripId?: Maybe<Scalars['UUID']>,
  deposit?: Maybe<Scalars['BigFloat']>,
  margin?: Maybe<Scalars['BigFloat']>,
  key?: Maybe<Scalars['String']>,
  expires?: Maybe<Scalars['Datetime']>,
  total?: Maybe<Scalars['BigFloat']>,
  adjustment?: Maybe<Scalars['BigFloat']>,
  baseCurrency?: Maybe<Scalars['String']>,
  shortDescription?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  exclusions?: Maybe<Scalars['String']>,
  inclusions?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['Int']>,
  agentMargin?: Maybe<Scalars['BigFloat']>,
  travellerCount?: Maybe<Scalars['Int']>,
  archived?: Maybe<Scalars['Datetime']>,
  lastViewed?: Maybe<Scalars['Datetime']>,
  heroId?: Maybe<Scalars['UUID']>,
  userId?: Maybe<Scalars['UUID']>,
  locked?: Maybe<Scalars['Datetime']>,
  tripToTripId?: Maybe<FkQuoteTripTripIdInput>,
  mediaItemToHeroImageId?: Maybe<FkQuoteMediaItemHeroImageIdInput>,
  quoteHeroToHeroId?: Maybe<FkQuoteQuoteHeroHeroIdInput>,
  userToUserId?: Maybe<FkQuoteUserUserIdInput>,
  invoicesUsingId?: Maybe<FkInvoiceQuoteQuoteIdInverseInput>,
  tripsUsingId?: Maybe<FkTripQuoteActiveQuoteIdInverseInput>,
  emailsUsingId?: Maybe<FkEmailQuoteQuoteIdInverseInput>,
  quoteViewsUsingId?: Maybe<FkQuoteViewQuoteQuoteIdInverseInput>,
  quoteAccommodationDetailsUsingId?: Maybe<FkQuoteAccommodationDetailQuoteQuoteIdInverseInput>,
  quoteCurrenciesUsingId?: Maybe<FkQuoteCurrencyQuoteQuoteIdInverseInput>,
  quoteDaysUsingId?: Maybe<FkQuoteDayQuoteQuoteIdInverseInput>,
  quoteFinanceLineItemsUsingId?: Maybe<FkQuoteFinanceLineItemQuoteQuoteIdInverseInput>,
};

export type FkQuoteQuoteHeroHeroIdInput = {
  connectById?: Maybe<QuoteHeroPkQuoteHeroConnect>,
  connectByNodeId?: Maybe<QuoteHeroNodeIdConnect>,
  deleteById?: Maybe<QuoteHeroPkQuoteHeroDelete>,
  deleteByNodeId?: Maybe<QuoteHeroNodeIdDelete>,
  updateById?: Maybe<QuoteHeroOnQuoteForFkQuoteQuoteHeroHeroIdUsingPkQuoteHeroUpdate>,
  updateByNodeId?: Maybe<QuoteOnQuoteForFkQuoteQuoteHeroHeroIdNodeIdUpdate>,
  create?: Maybe<FkQuoteQuoteHeroHeroIdQuoteHeroCreateInput>,
};

export type FkQuoteQuoteHeroHeroIdInverseInput = {
  deleteOthers?: Maybe<Scalars['Boolean']>,
  connectById?: Maybe<Array<QuotePkQuoteConnect>>,
  connectByNodeId?: Maybe<Array<QuoteNodeIdConnect>>,
  deleteById?: Maybe<Array<QuotePkQuoteDelete>>,
  deleteByNodeId?: Maybe<Array<QuoteNodeIdDelete>>,
  updateById?: Maybe<Array<QuoteOnQuoteForFkQuoteQuoteHeroHeroIdUsingPkQuoteUpdate>>,
  updateByNodeId?: Maybe<Array<QuoteHeroOnQuoteForFkQuoteQuoteHeroHeroIdNodeIdUpdate>>,
  create?: Maybe<Array<FkQuoteQuoteHeroHeroIdQuoteCreateInput>>,
};

export type FkQuoteQuoteHeroHeroIdQuoteCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  duration: Scalars['Int'],
  modified?: Maybe<Scalars['Datetime']>,
  start?: Maybe<Scalars['Datetime']>,
  tripId?: Maybe<Scalars['UUID']>,
  deposit?: Maybe<Scalars['BigFloat']>,
  margin?: Maybe<Scalars['BigFloat']>,
  key?: Maybe<Scalars['String']>,
  expires?: Maybe<Scalars['Datetime']>,
  total?: Maybe<Scalars['BigFloat']>,
  adjustment?: Maybe<Scalars['BigFloat']>,
  baseCurrency?: Maybe<Scalars['String']>,
  shortDescription?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  heroImageId?: Maybe<Scalars['UUID']>,
  exclusions?: Maybe<Scalars['String']>,
  inclusions?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['Int']>,
  agentMargin?: Maybe<Scalars['BigFloat']>,
  travellerCount?: Maybe<Scalars['Int']>,
  archived?: Maybe<Scalars['Datetime']>,
  lastViewed?: Maybe<Scalars['Datetime']>,
  userId?: Maybe<Scalars['UUID']>,
  locked?: Maybe<Scalars['Datetime']>,
  tripToTripId?: Maybe<FkQuoteTripTripIdInput>,
  mediaItemToHeroImageId?: Maybe<FkQuoteMediaItemHeroImageIdInput>,
  quoteHeroToHeroId?: Maybe<FkQuoteQuoteHeroHeroIdInput>,
  userToUserId?: Maybe<FkQuoteUserUserIdInput>,
  invoicesUsingId?: Maybe<FkInvoiceQuoteQuoteIdInverseInput>,
  tripsUsingId?: Maybe<FkTripQuoteActiveQuoteIdInverseInput>,
  emailsUsingId?: Maybe<FkEmailQuoteQuoteIdInverseInput>,
  quoteViewsUsingId?: Maybe<FkQuoteViewQuoteQuoteIdInverseInput>,
  quoteAccommodationDetailsUsingId?: Maybe<FkQuoteAccommodationDetailQuoteQuoteIdInverseInput>,
  quoteCurrenciesUsingId?: Maybe<FkQuoteCurrencyQuoteQuoteIdInverseInput>,
  quoteDaysUsingId?: Maybe<FkQuoteDayQuoteQuoteIdInverseInput>,
  quoteFinanceLineItemsUsingId?: Maybe<FkQuoteFinanceLineItemQuoteQuoteIdInverseInput>,
};

export type FkQuoteQuoteHeroHeroIdQuoteHeroCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  title?: Maybe<Scalars['String']>,
  subtitle?: Maybe<Scalars['String']>,
  imageId?: Maybe<Scalars['UUID']>,
  style?: Maybe<Scalars['String']>,
  mediaItemToImageId?: Maybe<FkQuoteHeroMediaItemImageIdInput>,
  quotesUsingId?: Maybe<FkQuoteQuoteHeroHeroIdInverseInput>,
  quotePublicsUsingId?: Maybe<FakePublicQuotePublicForeignKey1InverseInput>,
};

export type FkQuoteTripTripIdInput = {
  connectById?: Maybe<TripPkTripConnect>,
  connectByNodeId?: Maybe<TripNodeIdConnect>,
  deleteById?: Maybe<TripPkTripDelete>,
  deleteByNodeId?: Maybe<TripNodeIdDelete>,
  updateById?: Maybe<TripOnQuoteForFkQuoteTripTripIdUsingPkTripUpdate>,
  updateByNodeId?: Maybe<QuoteOnQuoteForFkQuoteTripTripIdNodeIdUpdate>,
  create?: Maybe<FkQuoteTripTripIdTripCreateInput>,
};

export type FkQuoteTripTripIdInverseInput = {
  deleteOthers?: Maybe<Scalars['Boolean']>,
  connectById?: Maybe<Array<QuotePkQuoteConnect>>,
  connectByNodeId?: Maybe<Array<QuoteNodeIdConnect>>,
  deleteById?: Maybe<Array<QuotePkQuoteDelete>>,
  deleteByNodeId?: Maybe<Array<QuoteNodeIdDelete>>,
  updateById?: Maybe<Array<QuoteOnQuoteForFkQuoteTripTripIdUsingPkQuoteUpdate>>,
  updateByNodeId?: Maybe<Array<TripOnQuoteForFkQuoteTripTripIdNodeIdUpdate>>,
  create?: Maybe<Array<FkQuoteTripTripIdQuoteCreateInput>>,
};

export type FkQuoteTripTripIdQuoteCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  duration: Scalars['Int'],
  modified?: Maybe<Scalars['Datetime']>,
  start?: Maybe<Scalars['Datetime']>,
  deposit?: Maybe<Scalars['BigFloat']>,
  margin?: Maybe<Scalars['BigFloat']>,
  key?: Maybe<Scalars['String']>,
  expires?: Maybe<Scalars['Datetime']>,
  total?: Maybe<Scalars['BigFloat']>,
  adjustment?: Maybe<Scalars['BigFloat']>,
  baseCurrency?: Maybe<Scalars['String']>,
  shortDescription?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  heroImageId?: Maybe<Scalars['UUID']>,
  exclusions?: Maybe<Scalars['String']>,
  inclusions?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['Int']>,
  agentMargin?: Maybe<Scalars['BigFloat']>,
  travellerCount?: Maybe<Scalars['Int']>,
  archived?: Maybe<Scalars['Datetime']>,
  lastViewed?: Maybe<Scalars['Datetime']>,
  heroId?: Maybe<Scalars['UUID']>,
  userId?: Maybe<Scalars['UUID']>,
  locked?: Maybe<Scalars['Datetime']>,
  tripToTripId?: Maybe<FkQuoteTripTripIdInput>,
  mediaItemToHeroImageId?: Maybe<FkQuoteMediaItemHeroImageIdInput>,
  quoteHeroToHeroId?: Maybe<FkQuoteQuoteHeroHeroIdInput>,
  userToUserId?: Maybe<FkQuoteUserUserIdInput>,
  invoicesUsingId?: Maybe<FkInvoiceQuoteQuoteIdInverseInput>,
  tripsUsingId?: Maybe<FkTripQuoteActiveQuoteIdInverseInput>,
  emailsUsingId?: Maybe<FkEmailQuoteQuoteIdInverseInput>,
  quoteViewsUsingId?: Maybe<FkQuoteViewQuoteQuoteIdInverseInput>,
  quoteAccommodationDetailsUsingId?: Maybe<FkQuoteAccommodationDetailQuoteQuoteIdInverseInput>,
  quoteCurrenciesUsingId?: Maybe<FkQuoteCurrencyQuoteQuoteIdInverseInput>,
  quoteDaysUsingId?: Maybe<FkQuoteDayQuoteQuoteIdInverseInput>,
  quoteFinanceLineItemsUsingId?: Maybe<FkQuoteFinanceLineItemQuoteQuoteIdInverseInput>,
};

export type FkQuoteTripTripIdTripCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  customerId?: Maybe<Scalars['UUID']>,
  userId?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  destination?: Maybe<Scalars['String']>,
  dates?: Maybe<Scalars['String']>,
  archived?: Maybe<Scalars['Datetime']>,
  mediaGalleryId?: Maybe<Scalars['UUID']>,
  activeQuoteId?: Maybe<Scalars['UUID']>,
  baseCurrency?: Maybe<Scalars['String']>,
  duration?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['Datetime']>,
  status?: Maybe<Scalars['Int']>,
  agencyId?: Maybe<Scalars['UUID']>,
  agencyMemberId?: Maybe<Scalars['UUID']>,
  customerToCustomerId?: Maybe<FkTripCustomerCustomerIdInput>,
  userToUserId?: Maybe<FkTripUserUserIdInput>,
  mediaGalleryToMediaGalleryId?: Maybe<FkTripMediaGalleryMediaGalleryIdInput>,
  quoteToActiveQuoteId?: Maybe<FkTripQuoteActiveQuoteIdInput>,
  agencyToAgencyId?: Maybe<FkTripAgencyAgencyIdInput>,
  agencyMemberToAgencyMemberId?: Maybe<FkTripAgencyMemberAgencyMemberIdInput>,
  expensesUsingId?: Maybe<FkExpenseTripTripIdInverseInput>,
  invoicesUsingId?: Maybe<FkInvoiceTripTripIdInverseInput>,
  paymentsUsingId?: Maybe<FkPaymentTripTripIdInverseInput>,
  supplierInvoicesUsingId?: Maybe<FkSupplierInvoiceTripTripIdInverseInput>,
  emailsUsingId?: Maybe<FkEmailTripTripIdInverseInput>,
  enquiriesUsingId?: Maybe<FkEnquiryTripTripIdInverseInput>,
  notesUsingId?: Maybe<FkNoteTripTripIdInverseInput>,
  quotesUsingId?: Maybe<FkQuoteTripTripIdInverseInput>,
  testimonialsUsingId?: Maybe<FkTestimonialTripTripIdInverseInput>,
  tripTravellersUsingId?: Maybe<FkTripTravellerTripTripIdInverseInput>,
  tripFlightsUsingId?: Maybe<FkTripFlightTripTripIdInverseInput>,
  quotePublicsUsingId?: Maybe<FakePublicQuotePublicForeignKey0InverseInput>,
};

export type FkQuoteUserUserIdInput = {
  connectById?: Maybe<UserPkUserConnect>,
  connectByNodeId?: Maybe<UserNodeIdConnect>,
  deleteById?: Maybe<UserPkUserDelete>,
  deleteByNodeId?: Maybe<UserNodeIdDelete>,
  updateById?: Maybe<UserOnQuoteForFkQuoteUserUserIdUsingPkUserUpdate>,
  updateByNodeId?: Maybe<QuoteOnQuoteForFkQuoteUserUserIdNodeIdUpdate>,
  create?: Maybe<FkQuoteUserUserIdUserCreateInput>,
};

export type FkQuoteUserUserIdInverseInput = {
  deleteOthers?: Maybe<Scalars['Boolean']>,
  connectById?: Maybe<Array<QuotePkQuoteConnect>>,
  connectByNodeId?: Maybe<Array<QuoteNodeIdConnect>>,
  deleteById?: Maybe<Array<QuotePkQuoteDelete>>,
  deleteByNodeId?: Maybe<Array<QuoteNodeIdDelete>>,
  updateById?: Maybe<Array<QuoteOnQuoteForFkQuoteUserUserIdUsingPkQuoteUpdate>>,
  updateByNodeId?: Maybe<Array<UserOnQuoteForFkQuoteUserUserIdNodeIdUpdate>>,
  create?: Maybe<Array<FkQuoteUserUserIdQuoteCreateInput>>,
};

export type FkQuoteUserUserIdQuoteCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  duration: Scalars['Int'],
  modified?: Maybe<Scalars['Datetime']>,
  start?: Maybe<Scalars['Datetime']>,
  tripId?: Maybe<Scalars['UUID']>,
  deposit?: Maybe<Scalars['BigFloat']>,
  margin?: Maybe<Scalars['BigFloat']>,
  key?: Maybe<Scalars['String']>,
  expires?: Maybe<Scalars['Datetime']>,
  total?: Maybe<Scalars['BigFloat']>,
  adjustment?: Maybe<Scalars['BigFloat']>,
  baseCurrency?: Maybe<Scalars['String']>,
  shortDescription?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  heroImageId?: Maybe<Scalars['UUID']>,
  exclusions?: Maybe<Scalars['String']>,
  inclusions?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['Int']>,
  agentMargin?: Maybe<Scalars['BigFloat']>,
  travellerCount?: Maybe<Scalars['Int']>,
  archived?: Maybe<Scalars['Datetime']>,
  lastViewed?: Maybe<Scalars['Datetime']>,
  heroId?: Maybe<Scalars['UUID']>,
  locked?: Maybe<Scalars['Datetime']>,
  tripToTripId?: Maybe<FkQuoteTripTripIdInput>,
  mediaItemToHeroImageId?: Maybe<FkQuoteMediaItemHeroImageIdInput>,
  quoteHeroToHeroId?: Maybe<FkQuoteQuoteHeroHeroIdInput>,
  userToUserId?: Maybe<FkQuoteUserUserIdInput>,
  invoicesUsingId?: Maybe<FkInvoiceQuoteQuoteIdInverseInput>,
  tripsUsingId?: Maybe<FkTripQuoteActiveQuoteIdInverseInput>,
  emailsUsingId?: Maybe<FkEmailQuoteQuoteIdInverseInput>,
  quoteViewsUsingId?: Maybe<FkQuoteViewQuoteQuoteIdInverseInput>,
  quoteAccommodationDetailsUsingId?: Maybe<FkQuoteAccommodationDetailQuoteQuoteIdInverseInput>,
  quoteCurrenciesUsingId?: Maybe<FkQuoteCurrencyQuoteQuoteIdInverseInput>,
  quoteDaysUsingId?: Maybe<FkQuoteDayQuoteQuoteIdInverseInput>,
  quoteFinanceLineItemsUsingId?: Maybe<FkQuoteFinanceLineItemQuoteQuoteIdInverseInput>,
};

export type FkQuoteUserUserIdUserCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  email?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  skype?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  genderPreposition?: Maybe<Scalars['String']>,
  externalId?: Maybe<Scalars['String']>,
  name: Scalars['String'],
  tripsUsingId?: Maybe<FkTripUserUserIdInverseInput>,
  emailsUsingId?: Maybe<FkEmailUserUserIdInverseInput>,
  notesUsingId?: Maybe<FkNoteUserUserIdInverseInput>,
  quotesUsingId?: Maybe<FkQuoteUserUserIdInverseInput>,
  remindersUsingId?: Maybe<FkReminderUserUserIdInverseInput>,
  transactionNotesUsingId?: Maybe<FkTransactionNoteUserUserIdInverseInput>,
  quotePublicsUsingId?: Maybe<FakePublicQuotePublicForeignKey2InverseInput>,
};

export type FkQuoteViewQuoteQuoteIdInput = {
  connectById?: Maybe<QuotePkQuoteConnect>,
  connectByNodeId?: Maybe<QuoteNodeIdConnect>,
  deleteById?: Maybe<QuotePkQuoteDelete>,
  deleteByNodeId?: Maybe<QuoteNodeIdDelete>,
  updateById?: Maybe<QuoteOnQuoteViewForFkQuoteViewQuoteQuoteIdUsingPkQuoteUpdate>,
  updateByNodeId?: Maybe<QuoteViewOnQuoteViewForFkQuoteViewQuoteQuoteIdNodeIdUpdate>,
  create?: Maybe<FkQuoteViewQuoteQuoteIdQuoteCreateInput>,
};

export type FkQuoteViewQuoteQuoteIdInverseInput = {
  deleteOthers?: Maybe<Scalars['Boolean']>,
  connectById?: Maybe<Array<QuoteViewPkQuoteViewConnect>>,
  connectByNodeId?: Maybe<Array<QuoteViewNodeIdConnect>>,
  deleteById?: Maybe<Array<QuoteViewPkQuoteViewDelete>>,
  deleteByNodeId?: Maybe<Array<QuoteViewNodeIdDelete>>,
  updateById?: Maybe<Array<QuoteViewOnQuoteViewForFkQuoteViewQuoteQuoteIdUsingPkQuoteViewUpdate>>,
  updateByNodeId?: Maybe<Array<QuoteOnQuoteViewForFkQuoteViewQuoteQuoteIdNodeIdUpdate>>,
  create?: Maybe<Array<FkQuoteViewQuoteQuoteIdQuoteViewCreateInput>>,
};

export type FkQuoteViewQuoteQuoteIdQuoteCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  duration: Scalars['Int'],
  modified?: Maybe<Scalars['Datetime']>,
  start?: Maybe<Scalars['Datetime']>,
  tripId?: Maybe<Scalars['UUID']>,
  deposit?: Maybe<Scalars['BigFloat']>,
  margin?: Maybe<Scalars['BigFloat']>,
  key?: Maybe<Scalars['String']>,
  expires?: Maybe<Scalars['Datetime']>,
  total?: Maybe<Scalars['BigFloat']>,
  adjustment?: Maybe<Scalars['BigFloat']>,
  baseCurrency?: Maybe<Scalars['String']>,
  shortDescription?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  heroImageId?: Maybe<Scalars['UUID']>,
  exclusions?: Maybe<Scalars['String']>,
  inclusions?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['Int']>,
  agentMargin?: Maybe<Scalars['BigFloat']>,
  travellerCount?: Maybe<Scalars['Int']>,
  archived?: Maybe<Scalars['Datetime']>,
  lastViewed?: Maybe<Scalars['Datetime']>,
  heroId?: Maybe<Scalars['UUID']>,
  userId?: Maybe<Scalars['UUID']>,
  locked?: Maybe<Scalars['Datetime']>,
  tripToTripId?: Maybe<FkQuoteTripTripIdInput>,
  mediaItemToHeroImageId?: Maybe<FkQuoteMediaItemHeroImageIdInput>,
  quoteHeroToHeroId?: Maybe<FkQuoteQuoteHeroHeroIdInput>,
  userToUserId?: Maybe<FkQuoteUserUserIdInput>,
  invoicesUsingId?: Maybe<FkInvoiceQuoteQuoteIdInverseInput>,
  tripsUsingId?: Maybe<FkTripQuoteActiveQuoteIdInverseInput>,
  emailsUsingId?: Maybe<FkEmailQuoteQuoteIdInverseInput>,
  quoteViewsUsingId?: Maybe<FkQuoteViewQuoteQuoteIdInverseInput>,
  quoteAccommodationDetailsUsingId?: Maybe<FkQuoteAccommodationDetailQuoteQuoteIdInverseInput>,
  quoteCurrenciesUsingId?: Maybe<FkQuoteCurrencyQuoteQuoteIdInverseInput>,
  quoteDaysUsingId?: Maybe<FkQuoteDayQuoteQuoteIdInverseInput>,
  quoteFinanceLineItemsUsingId?: Maybe<FkQuoteFinanceLineItemQuoteQuoteIdInverseInput>,
};

export type FkQuoteViewQuoteQuoteIdQuoteViewCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  city?: Maybe<Scalars['String']>,
  country?: Maybe<Scalars['String']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  timezone?: Maybe<Scalars['String']>,
  userIp?: Maybe<Scalars['String']>,
  viewType?: Maybe<Scalars['String']>,
  quoteToQuoteId?: Maybe<FkQuoteViewQuoteQuoteIdInput>,
};

export type FkReminderUserUserIdInput = {
  connectById?: Maybe<UserPkUserConnect>,
  connectByNodeId?: Maybe<UserNodeIdConnect>,
  deleteById?: Maybe<UserPkUserDelete>,
  deleteByNodeId?: Maybe<UserNodeIdDelete>,
  updateById?: Maybe<UserOnReminderForFkReminderUserUserIdUsingPkUserUpdate>,
  updateByNodeId?: Maybe<ReminderOnReminderForFkReminderUserUserIdNodeIdUpdate>,
  create?: Maybe<FkReminderUserUserIdUserCreateInput>,
};

export type FkReminderUserUserIdInverseInput = {
  deleteOthers?: Maybe<Scalars['Boolean']>,
  connectById?: Maybe<Array<ReminderPkReminderConnect>>,
  connectByNodeId?: Maybe<Array<ReminderNodeIdConnect>>,
  deleteById?: Maybe<Array<ReminderPkReminderDelete>>,
  deleteByNodeId?: Maybe<Array<ReminderNodeIdDelete>>,
  updateById?: Maybe<Array<ReminderOnReminderForFkReminderUserUserIdUsingPkReminderUpdate>>,
  updateByNodeId?: Maybe<Array<UserOnReminderForFkReminderUserUserIdNodeIdUpdate>>,
  create?: Maybe<Array<FkReminderUserUserIdReminderCreateInput>>,
};

export type FkReminderUserUserIdReminderCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  body?: Maybe<Scalars['String']>,
  date: Scalars['Datetime'],
  userToUserId?: Maybe<FkReminderUserUserIdInput>,
};

export type FkReminderUserUserIdUserCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  email?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  skype?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  genderPreposition?: Maybe<Scalars['String']>,
  externalId?: Maybe<Scalars['String']>,
  name: Scalars['String'],
  tripsUsingId?: Maybe<FkTripUserUserIdInverseInput>,
  emailsUsingId?: Maybe<FkEmailUserUserIdInverseInput>,
  notesUsingId?: Maybe<FkNoteUserUserIdInverseInput>,
  quotesUsingId?: Maybe<FkQuoteUserUserIdInverseInput>,
  remindersUsingId?: Maybe<FkReminderUserUserIdInverseInput>,
  transactionNotesUsingId?: Maybe<FkTransactionNoteUserUserIdInverseInput>,
  quotePublicsUsingId?: Maybe<FakePublicQuotePublicForeignKey2InverseInput>,
};

export type FkSupplierInvoiceFinanceCategoryCategoryIdFinanceCategoryCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['Int']>,
  code?: Maybe<Scalars['String']>,
  expensesUsingId?: Maybe<FkExpenseFinanceCategoryCategoryIdInverseInput>,
  invoicesUsingId?: Maybe<FkInvoiceFinanceCategoryCategoryIdInverseInput>,
  paymentsUsingId?: Maybe<FkPaymentFinanceCategoryCategoryIdInverseInput>,
  supplierInvoicesUsingId?: Maybe<FkSupplierInvoiceFinanceCategoryCategoryIdInverseInput>,
  transactionsUsingId?: Maybe<FkTransactionFinanceCategoryCategoryIdInverseInput>,
};

export type FkSupplierInvoiceFinanceCategoryCategoryIdInput = {
  connectById?: Maybe<FinanceCategoryPkFinanceCategoryConnect>,
  connectByNodeId?: Maybe<FinanceCategoryNodeIdConnect>,
  deleteById?: Maybe<FinanceCategoryPkFinanceCategoryDelete>,
  deleteByNodeId?: Maybe<FinanceCategoryNodeIdDelete>,
  updateById?: Maybe<FinanceCategoryOnSupplierInvoiceForFkSupplierInvoiceFinanceCategoryCategoryIdUsingPkFinanceCategoryUpdate>,
  updateByNodeId?: Maybe<SupplierInvoiceOnSupplierInvoiceForFkSupplierInvoiceFinanceCategoryCategoryIdNodeIdUpdate>,
  create?: Maybe<FkSupplierInvoiceFinanceCategoryCategoryIdFinanceCategoryCreateInput>,
};

export type FkSupplierInvoiceFinanceCategoryCategoryIdInverseInput = {
  deleteOthers?: Maybe<Scalars['Boolean']>,
  connectById?: Maybe<Array<SupplierInvoicePkSupplierInvoiceConnect>>,
  connectByNodeId?: Maybe<Array<SupplierInvoiceNodeIdConnect>>,
  deleteById?: Maybe<Array<SupplierInvoicePkSupplierInvoiceDelete>>,
  deleteByNodeId?: Maybe<Array<SupplierInvoiceNodeIdDelete>>,
  updateById?: Maybe<Array<SupplierInvoiceOnSupplierInvoiceForFkSupplierInvoiceFinanceCategoryCategoryIdUsingPkSupplierInvoiceUpdate>>,
  updateByNodeId?: Maybe<Array<FinanceCategoryOnSupplierInvoiceForFkSupplierInvoiceFinanceCategoryCategoryIdNodeIdUpdate>>,
  create?: Maybe<Array<FkSupplierInvoiceFinanceCategoryCategoryIdSupplierInvoiceCreateInput>>,
};

export type FkSupplierInvoiceFinanceCategoryCategoryIdSupplierInvoiceCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  amount: Scalars['BigFloat'],
  created?: Maybe<Scalars['Datetime']>,
  currency?: Maybe<Scalars['String']>,
  due: Scalars['Datetime'],
  key?: Maybe<Scalars['String']>,
  modified?: Maybe<Scalars['Datetime']>,
  number: Scalars['Int'],
  summary?: Maybe<Scalars['String']>,
  supplierId?: Maybe<Scalars['UUID']>,
  tripId?: Maybe<Scalars['UUID']>,
  type?: Maybe<Scalars['String']>,
  voided?: Maybe<Scalars['Datetime']>,
  amountActual?: Maybe<Scalars['BigFloat']>,
  paid?: Maybe<Scalars['Datetime']>,
  mediaItemId?: Maybe<Scalars['UUID']>,
  financeCategoryToCategoryId?: Maybe<FkSupplierInvoiceFinanceCategoryCategoryIdInput>,
  supplierToSupplierId?: Maybe<FkSupplierInvoiceSupplierSupplierIdInput>,
  tripToTripId?: Maybe<FkSupplierInvoiceTripTripIdInput>,
  mediaItemToMediaItemId?: Maybe<FkSupplierInvoiceMediaItemMediaItemIdInput>,
  expensesUsingId?: Maybe<FkExpenseSupplierInvoiceSupplierInvoiceIdInverseInput>,
  transactionLinksUsingId?: Maybe<FkTransactionLinkSupplierInvoiceSupplierInvoiceIdInverseInput>,
};

export type FkSupplierInvoiceMediaItemMediaItemIdInput = {
  connectById?: Maybe<MediaItemPkMediaItemConnect>,
  connectByNodeId?: Maybe<MediaItemNodeIdConnect>,
  deleteById?: Maybe<MediaItemPkMediaItemDelete>,
  deleteByNodeId?: Maybe<MediaItemNodeIdDelete>,
  updateById?: Maybe<MediaItemOnSupplierInvoiceForFkSupplierInvoiceMediaItemMediaItemIdUsingPkMediaItemUpdate>,
  updateByNodeId?: Maybe<SupplierInvoiceOnSupplierInvoiceForFkSupplierInvoiceMediaItemMediaItemIdNodeIdUpdate>,
  create?: Maybe<FkSupplierInvoiceMediaItemMediaItemIdMediaItemCreateInput>,
};

export type FkSupplierInvoiceMediaItemMediaItemIdInverseInput = {
  deleteOthers?: Maybe<Scalars['Boolean']>,
  connectById?: Maybe<Array<SupplierInvoicePkSupplierInvoiceConnect>>,
  connectByNodeId?: Maybe<Array<SupplierInvoiceNodeIdConnect>>,
  deleteById?: Maybe<Array<SupplierInvoicePkSupplierInvoiceDelete>>,
  deleteByNodeId?: Maybe<Array<SupplierInvoiceNodeIdDelete>>,
  updateById?: Maybe<Array<SupplierInvoiceOnSupplierInvoiceForFkSupplierInvoiceMediaItemMediaItemIdUsingPkSupplierInvoiceUpdate>>,
  updateByNodeId?: Maybe<Array<MediaItemOnSupplierInvoiceForFkSupplierInvoiceMediaItemMediaItemIdNodeIdUpdate>>,
  create?: Maybe<Array<FkSupplierInvoiceMediaItemMediaItemIdSupplierInvoiceCreateInput>>,
};

export type FkSupplierInvoiceMediaItemMediaItemIdMediaItemCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  contentType?: Maybe<Scalars['String']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  fileName?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  hash?: Maybe<Scalars['String']>,
  agenciesUsingId?: Maybe<FkAgencyMediaItemLogoIdInverseInput>,
  supplierInvoicesUsingId?: Maybe<FkSupplierInvoiceMediaItemMediaItemIdInverseInput>,
  mediaGalleryItemsUsingId?: Maybe<FkMediaGalleryItemMediaItemMediaItemIdInverseInput>,
  propertiesUsingId?: Maybe<FkPropertyMediaItemHeroMediaIdInverseInput>,
  quotesUsingId?: Maybe<FkQuoteMediaItemHeroImageIdInverseInput>,
  quoteHeroesUsingId?: Maybe<FkQuoteHeroMediaItemImageIdInverseInput>,
};

export type FkSupplierInvoiceMediaItemMediaItemIdSupplierInvoiceCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  amount: Scalars['BigFloat'],
  categoryId?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  currency?: Maybe<Scalars['String']>,
  due: Scalars['Datetime'],
  key?: Maybe<Scalars['String']>,
  modified?: Maybe<Scalars['Datetime']>,
  number: Scalars['Int'],
  summary?: Maybe<Scalars['String']>,
  supplierId?: Maybe<Scalars['UUID']>,
  tripId?: Maybe<Scalars['UUID']>,
  type?: Maybe<Scalars['String']>,
  voided?: Maybe<Scalars['Datetime']>,
  amountActual?: Maybe<Scalars['BigFloat']>,
  paid?: Maybe<Scalars['Datetime']>,
  financeCategoryToCategoryId?: Maybe<FkSupplierInvoiceFinanceCategoryCategoryIdInput>,
  supplierToSupplierId?: Maybe<FkSupplierInvoiceSupplierSupplierIdInput>,
  tripToTripId?: Maybe<FkSupplierInvoiceTripTripIdInput>,
  mediaItemToMediaItemId?: Maybe<FkSupplierInvoiceMediaItemMediaItemIdInput>,
  expensesUsingId?: Maybe<FkExpenseSupplierInvoiceSupplierInvoiceIdInverseInput>,
  transactionLinksUsingId?: Maybe<FkTransactionLinkSupplierInvoiceSupplierInvoiceIdInverseInput>,
};

export type FkSupplierInvoiceSupplierSupplierIdInput = {
  connectById?: Maybe<SupplierPkSupplierConnect>,
  connectByNodeId?: Maybe<SupplierNodeIdConnect>,
  deleteById?: Maybe<SupplierPkSupplierDelete>,
  deleteByNodeId?: Maybe<SupplierNodeIdDelete>,
  updateById?: Maybe<SupplierOnSupplierInvoiceForFkSupplierInvoiceSupplierSupplierIdUsingPkSupplierUpdate>,
  updateByNodeId?: Maybe<SupplierInvoiceOnSupplierInvoiceForFkSupplierInvoiceSupplierSupplierIdNodeIdUpdate>,
  create?: Maybe<FkSupplierInvoiceSupplierSupplierIdSupplierCreateInput>,
};

export type FkSupplierInvoiceSupplierSupplierIdInverseInput = {
  deleteOthers?: Maybe<Scalars['Boolean']>,
  connectById?: Maybe<Array<SupplierInvoicePkSupplierInvoiceConnect>>,
  connectByNodeId?: Maybe<Array<SupplierInvoiceNodeIdConnect>>,
  deleteById?: Maybe<Array<SupplierInvoicePkSupplierInvoiceDelete>>,
  deleteByNodeId?: Maybe<Array<SupplierInvoiceNodeIdDelete>>,
  updateById?: Maybe<Array<SupplierInvoiceOnSupplierInvoiceForFkSupplierInvoiceSupplierSupplierIdUsingPkSupplierInvoiceUpdate>>,
  updateByNodeId?: Maybe<Array<SupplierOnSupplierInvoiceForFkSupplierInvoiceSupplierSupplierIdNodeIdUpdate>>,
  create?: Maybe<Array<FkSupplierInvoiceSupplierSupplierIdSupplierInvoiceCreateInput>>,
};

export type FkSupplierInvoiceSupplierSupplierIdSupplierCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  contactEmail?: Maybe<Scalars['String']>,
  contactNumber?: Maybe<Scalars['String']>,
  region?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
  bankDetails?: Maybe<Scalars['String']>,
  galleryId?: Maybe<Scalars['UUID']>,
  mediaGalleryToGalleryId?: Maybe<FkSupplierMediaGalleryGalleryIdInput>,
  expensesUsingId?: Maybe<FkExpenseSupplierSupplierIdInverseInput>,
  supplierInvoicesUsingId?: Maybe<FkSupplierInvoiceSupplierSupplierIdInverseInput>,
  quoteFinanceLineItemsUsingId?: Maybe<FkQuoteFinanceLineItemSupplierSupplierIdInverseInput>,
};

export type FkSupplierInvoiceSupplierSupplierIdSupplierInvoiceCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  amount: Scalars['BigFloat'],
  categoryId?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  currency?: Maybe<Scalars['String']>,
  due: Scalars['Datetime'],
  key?: Maybe<Scalars['String']>,
  modified?: Maybe<Scalars['Datetime']>,
  number: Scalars['Int'],
  summary?: Maybe<Scalars['String']>,
  tripId?: Maybe<Scalars['UUID']>,
  type?: Maybe<Scalars['String']>,
  voided?: Maybe<Scalars['Datetime']>,
  amountActual?: Maybe<Scalars['BigFloat']>,
  paid?: Maybe<Scalars['Datetime']>,
  mediaItemId?: Maybe<Scalars['UUID']>,
  financeCategoryToCategoryId?: Maybe<FkSupplierInvoiceFinanceCategoryCategoryIdInput>,
  supplierToSupplierId?: Maybe<FkSupplierInvoiceSupplierSupplierIdInput>,
  tripToTripId?: Maybe<FkSupplierInvoiceTripTripIdInput>,
  mediaItemToMediaItemId?: Maybe<FkSupplierInvoiceMediaItemMediaItemIdInput>,
  expensesUsingId?: Maybe<FkExpenseSupplierInvoiceSupplierInvoiceIdInverseInput>,
  transactionLinksUsingId?: Maybe<FkTransactionLinkSupplierInvoiceSupplierInvoiceIdInverseInput>,
};

export type FkSupplierInvoiceTripTripIdInput = {
  connectById?: Maybe<TripPkTripConnect>,
  connectByNodeId?: Maybe<TripNodeIdConnect>,
  deleteById?: Maybe<TripPkTripDelete>,
  deleteByNodeId?: Maybe<TripNodeIdDelete>,
  updateById?: Maybe<TripOnSupplierInvoiceForFkSupplierInvoiceTripTripIdUsingPkTripUpdate>,
  updateByNodeId?: Maybe<SupplierInvoiceOnSupplierInvoiceForFkSupplierInvoiceTripTripIdNodeIdUpdate>,
  create?: Maybe<FkSupplierInvoiceTripTripIdTripCreateInput>,
};

export type FkSupplierInvoiceTripTripIdInverseInput = {
  deleteOthers?: Maybe<Scalars['Boolean']>,
  connectById?: Maybe<Array<SupplierInvoicePkSupplierInvoiceConnect>>,
  connectByNodeId?: Maybe<Array<SupplierInvoiceNodeIdConnect>>,
  deleteById?: Maybe<Array<SupplierInvoicePkSupplierInvoiceDelete>>,
  deleteByNodeId?: Maybe<Array<SupplierInvoiceNodeIdDelete>>,
  updateById?: Maybe<Array<SupplierInvoiceOnSupplierInvoiceForFkSupplierInvoiceTripTripIdUsingPkSupplierInvoiceUpdate>>,
  updateByNodeId?: Maybe<Array<TripOnSupplierInvoiceForFkSupplierInvoiceTripTripIdNodeIdUpdate>>,
  create?: Maybe<Array<FkSupplierInvoiceTripTripIdSupplierInvoiceCreateInput>>,
};

export type FkSupplierInvoiceTripTripIdSupplierInvoiceCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  amount: Scalars['BigFloat'],
  categoryId?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  currency?: Maybe<Scalars['String']>,
  due: Scalars['Datetime'],
  key?: Maybe<Scalars['String']>,
  modified?: Maybe<Scalars['Datetime']>,
  number: Scalars['Int'],
  summary?: Maybe<Scalars['String']>,
  supplierId?: Maybe<Scalars['UUID']>,
  type?: Maybe<Scalars['String']>,
  voided?: Maybe<Scalars['Datetime']>,
  amountActual?: Maybe<Scalars['BigFloat']>,
  paid?: Maybe<Scalars['Datetime']>,
  mediaItemId?: Maybe<Scalars['UUID']>,
  financeCategoryToCategoryId?: Maybe<FkSupplierInvoiceFinanceCategoryCategoryIdInput>,
  supplierToSupplierId?: Maybe<FkSupplierInvoiceSupplierSupplierIdInput>,
  tripToTripId?: Maybe<FkSupplierInvoiceTripTripIdInput>,
  mediaItemToMediaItemId?: Maybe<FkSupplierInvoiceMediaItemMediaItemIdInput>,
  expensesUsingId?: Maybe<FkExpenseSupplierInvoiceSupplierInvoiceIdInverseInput>,
  transactionLinksUsingId?: Maybe<FkTransactionLinkSupplierInvoiceSupplierInvoiceIdInverseInput>,
};

export type FkSupplierInvoiceTripTripIdTripCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  customerId?: Maybe<Scalars['UUID']>,
  userId?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  destination?: Maybe<Scalars['String']>,
  dates?: Maybe<Scalars['String']>,
  archived?: Maybe<Scalars['Datetime']>,
  mediaGalleryId?: Maybe<Scalars['UUID']>,
  activeQuoteId?: Maybe<Scalars['UUID']>,
  baseCurrency?: Maybe<Scalars['String']>,
  duration?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['Datetime']>,
  status?: Maybe<Scalars['Int']>,
  agencyId?: Maybe<Scalars['UUID']>,
  agencyMemberId?: Maybe<Scalars['UUID']>,
  customerToCustomerId?: Maybe<FkTripCustomerCustomerIdInput>,
  userToUserId?: Maybe<FkTripUserUserIdInput>,
  mediaGalleryToMediaGalleryId?: Maybe<FkTripMediaGalleryMediaGalleryIdInput>,
  quoteToActiveQuoteId?: Maybe<FkTripQuoteActiveQuoteIdInput>,
  agencyToAgencyId?: Maybe<FkTripAgencyAgencyIdInput>,
  agencyMemberToAgencyMemberId?: Maybe<FkTripAgencyMemberAgencyMemberIdInput>,
  expensesUsingId?: Maybe<FkExpenseTripTripIdInverseInput>,
  invoicesUsingId?: Maybe<FkInvoiceTripTripIdInverseInput>,
  paymentsUsingId?: Maybe<FkPaymentTripTripIdInverseInput>,
  supplierInvoicesUsingId?: Maybe<FkSupplierInvoiceTripTripIdInverseInput>,
  emailsUsingId?: Maybe<FkEmailTripTripIdInverseInput>,
  enquiriesUsingId?: Maybe<FkEnquiryTripTripIdInverseInput>,
  notesUsingId?: Maybe<FkNoteTripTripIdInverseInput>,
  quotesUsingId?: Maybe<FkQuoteTripTripIdInverseInput>,
  testimonialsUsingId?: Maybe<FkTestimonialTripTripIdInverseInput>,
  tripTravellersUsingId?: Maybe<FkTripTravellerTripTripIdInverseInput>,
  tripFlightsUsingId?: Maybe<FkTripFlightTripTripIdInverseInput>,
  quotePublicsUsingId?: Maybe<FakePublicQuotePublicForeignKey0InverseInput>,
};

export type FkSupplierMediaGalleryGalleryIdInput = {
  connectById?: Maybe<MediaGalleryPkMediaGalleryConnect>,
  connectByNodeId?: Maybe<MediaGalleryNodeIdConnect>,
  deleteById?: Maybe<MediaGalleryPkMediaGalleryDelete>,
  deleteByNodeId?: Maybe<MediaGalleryNodeIdDelete>,
  updateById?: Maybe<MediaGalleryOnSupplierForFkSupplierMediaGalleryGalleryIdUsingPkMediaGalleryUpdate>,
  updateByNodeId?: Maybe<SupplierOnSupplierForFkSupplierMediaGalleryGalleryIdNodeIdUpdate>,
  create?: Maybe<FkSupplierMediaGalleryGalleryIdMediaGalleryCreateInput>,
};

export type FkSupplierMediaGalleryGalleryIdInverseInput = {
  deleteOthers?: Maybe<Scalars['Boolean']>,
  connectById?: Maybe<Array<SupplierPkSupplierConnect>>,
  connectByNodeId?: Maybe<Array<SupplierNodeIdConnect>>,
  deleteById?: Maybe<Array<SupplierPkSupplierDelete>>,
  deleteByNodeId?: Maybe<Array<SupplierNodeIdDelete>>,
  updateById?: Maybe<Array<SupplierOnSupplierForFkSupplierMediaGalleryGalleryIdUsingPkSupplierUpdate>>,
  updateByNodeId?: Maybe<Array<MediaGalleryOnSupplierForFkSupplierMediaGalleryGalleryIdNodeIdUpdate>>,
  create?: Maybe<Array<FkSupplierMediaGalleryGalleryIdSupplierCreateInput>>,
};

export type FkSupplierMediaGalleryGalleryIdMediaGalleryCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  parentId?: Maybe<Scalars['UUID']>,
  isProtected?: Maybe<Scalars['Boolean']>,
  mediaGalleryToParentId?: Maybe<FkMediaGalleryMediaGalleryParentIdInput>,
  tripsUsingId?: Maybe<FkTripMediaGalleryMediaGalleryIdInverseInput>,
  destinationsUsingId?: Maybe<FkDestinationMediaGalleryGalleryIdInverseInput>,
  destinationFeaturesUsingId?: Maybe<FkDestinationFeatureMediaGalleryGalleryIdInverseInput>,
  featuresUsingId?: Maybe<FkFeatureMediaGalleryGalleryIdInverseInput>,
  mediaGalleryItemsUsingId?: Maybe<FkMediaGalleryItemMediaGalleryMediaGalleryIdInverseInput>,
  propertiesUsingId?: Maybe<FkPropertyMediaGalleryGalleryIdInverseInput>,
  suppliersUsingId?: Maybe<FkSupplierMediaGalleryGalleryIdInverseInput>,
};

export type FkSupplierMediaGalleryGalleryIdSupplierCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  contactEmail?: Maybe<Scalars['String']>,
  contactNumber?: Maybe<Scalars['String']>,
  region?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
  bankDetails?: Maybe<Scalars['String']>,
  mediaGalleryToGalleryId?: Maybe<FkSupplierMediaGalleryGalleryIdInput>,
  expensesUsingId?: Maybe<FkExpenseSupplierSupplierIdInverseInput>,
  supplierInvoicesUsingId?: Maybe<FkSupplierInvoiceSupplierSupplierIdInverseInput>,
  quoteFinanceLineItemsUsingId?: Maybe<FkQuoteFinanceLineItemSupplierSupplierIdInverseInput>,
};

export type FkTestimonialTripTripIdInput = {
  connectById?: Maybe<TripPkTripConnect>,
  connectByNodeId?: Maybe<TripNodeIdConnect>,
  deleteById?: Maybe<TripPkTripDelete>,
  deleteByNodeId?: Maybe<TripNodeIdDelete>,
  updateById?: Maybe<TripOnTestimonialForFkTestimonialTripTripIdUsingPkTripUpdate>,
  updateByNodeId?: Maybe<TestimonialOnTestimonialForFkTestimonialTripTripIdNodeIdUpdate>,
  create?: Maybe<FkTestimonialTripTripIdTripCreateInput>,
};

export type FkTestimonialTripTripIdInverseInput = {
  deleteOthers?: Maybe<Scalars['Boolean']>,
  connectById?: Maybe<Array<TestimonialPkTestimonialConnect>>,
  connectByNodeId?: Maybe<Array<TestimonialNodeIdConnect>>,
  deleteById?: Maybe<Array<TestimonialPkTestimonialDelete>>,
  deleteByNodeId?: Maybe<Array<TestimonialNodeIdDelete>>,
  updateById?: Maybe<Array<TestimonialOnTestimonialForFkTestimonialTripTripIdUsingPkTestimonialUpdate>>,
  updateByNodeId?: Maybe<Array<TripOnTestimonialForFkTestimonialTripTripIdNodeIdUpdate>>,
  create?: Maybe<Array<FkTestimonialTripTripIdTestimonialCreateInput>>,
};

export type FkTestimonialTripTripIdTestimonialCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  body?: Maybe<Scalars['String']>,
  created?: Maybe<Scalars['Datetime']>,
  guestName?: Maybe<Scalars['String']>,
  modified?: Maybe<Scalars['Datetime']>,
  tripToTripId?: Maybe<FkTestimonialTripTripIdInput>,
};

export type FkTestimonialTripTripIdTripCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  customerId?: Maybe<Scalars['UUID']>,
  userId?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  destination?: Maybe<Scalars['String']>,
  dates?: Maybe<Scalars['String']>,
  archived?: Maybe<Scalars['Datetime']>,
  mediaGalleryId?: Maybe<Scalars['UUID']>,
  activeQuoteId?: Maybe<Scalars['UUID']>,
  baseCurrency?: Maybe<Scalars['String']>,
  duration?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['Datetime']>,
  status?: Maybe<Scalars['Int']>,
  agencyId?: Maybe<Scalars['UUID']>,
  agencyMemberId?: Maybe<Scalars['UUID']>,
  customerToCustomerId?: Maybe<FkTripCustomerCustomerIdInput>,
  userToUserId?: Maybe<FkTripUserUserIdInput>,
  mediaGalleryToMediaGalleryId?: Maybe<FkTripMediaGalleryMediaGalleryIdInput>,
  quoteToActiveQuoteId?: Maybe<FkTripQuoteActiveQuoteIdInput>,
  agencyToAgencyId?: Maybe<FkTripAgencyAgencyIdInput>,
  agencyMemberToAgencyMemberId?: Maybe<FkTripAgencyMemberAgencyMemberIdInput>,
  expensesUsingId?: Maybe<FkExpenseTripTripIdInverseInput>,
  invoicesUsingId?: Maybe<FkInvoiceTripTripIdInverseInput>,
  paymentsUsingId?: Maybe<FkPaymentTripTripIdInverseInput>,
  supplierInvoicesUsingId?: Maybe<FkSupplierInvoiceTripTripIdInverseInput>,
  emailsUsingId?: Maybe<FkEmailTripTripIdInverseInput>,
  enquiriesUsingId?: Maybe<FkEnquiryTripTripIdInverseInput>,
  notesUsingId?: Maybe<FkNoteTripTripIdInverseInput>,
  quotesUsingId?: Maybe<FkQuoteTripTripIdInverseInput>,
  testimonialsUsingId?: Maybe<FkTestimonialTripTripIdInverseInput>,
  tripTravellersUsingId?: Maybe<FkTripTravellerTripTripIdInverseInput>,
  tripFlightsUsingId?: Maybe<FkTripFlightTripTripIdInverseInput>,
  quotePublicsUsingId?: Maybe<FakePublicQuotePublicForeignKey0InverseInput>,
};

export type FkTransactionAccountAccountIdAccountCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  institution?: Maybe<Scalars['String']>,
  details?: Maybe<Scalars['String']>,
  transactionsUsingId?: Maybe<FkTransactionAccountAccountIdInverseInput>,
  transactionImportBatchesUsingId?: Maybe<FkTransactionImportBatchAccountAccountIdInverseInput>,
};

export type FkTransactionAccountAccountIdInput = {
  connectById?: Maybe<AccountPkAccountConnect>,
  connectByNodeId?: Maybe<AccountNodeIdConnect>,
  deleteById?: Maybe<AccountPkAccountDelete>,
  deleteByNodeId?: Maybe<AccountNodeIdDelete>,
  updateById?: Maybe<AccountOnTransactionForFkTransactionAccountAccountIdUsingPkAccountUpdate>,
  updateByNodeId?: Maybe<TransactionOnTransactionForFkTransactionAccountAccountIdNodeIdUpdate>,
  create?: Maybe<FkTransactionAccountAccountIdAccountCreateInput>,
};

export type FkTransactionAccountAccountIdInverseInput = {
  deleteOthers?: Maybe<Scalars['Boolean']>,
  connectById?: Maybe<Array<TransactionPkTransactionConnect>>,
  connectByNodeId?: Maybe<Array<TransactionNodeIdConnect>>,
  deleteById?: Maybe<Array<TransactionPkTransactionDelete>>,
  deleteByNodeId?: Maybe<Array<TransactionNodeIdDelete>>,
  updateById?: Maybe<Array<TransactionOnTransactionForFkTransactionAccountAccountIdUsingPkTransactionUpdate>>,
  updateByNodeId?: Maybe<Array<AccountOnTransactionForFkTransactionAccountAccountIdNodeIdUpdate>>,
  create?: Maybe<Array<FkTransactionAccountAccountIdTransactionCreateInput>>,
};

export type FkTransactionAccountAccountIdTransactionCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  amount: Scalars['BigFloat'],
  externalId?: Maybe<Scalars['String']>,
  date: Scalars['Datetime'],
  description?: Maybe<Scalars['String']>,
  status: Scalars['Int'],
  reverseTransactionId?: Maybe<Scalars['UUID']>,
  source?: Maybe<Scalars['String']>,
  transactionImportBatchId?: Maybe<Scalars['UUID']>,
  balance?: Maybe<Scalars['BigFloat']>,
  currency?: Maybe<Scalars['String']>,
  categoryId?: Maybe<Scalars['UUID']>,
  accountToAccountId?: Maybe<FkTransactionAccountAccountIdInput>,
  transactionToReverseTransactionId?: Maybe<FkTransactionTransactionReverseTransactionIdInput>,
  transactionImportBatchToTransactionImportBatchId?: Maybe<FkTransactionTransactionImportBatchTransactionImportBatchIdInput>,
  financeCategoryToCategoryId?: Maybe<FkTransactionFinanceCategoryCategoryIdInput>,
  transactionLinksUsingId?: Maybe<FkTransactionLinkTransactionTransactionIdInverseInput>,
  transactionNotesUsingId?: Maybe<FkTransactionNoteTransactionTransactionIdInverseInput>,
};

export type FkTransactionFinanceCategoryCategoryIdFinanceCategoryCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['Int']>,
  code?: Maybe<Scalars['String']>,
  expensesUsingId?: Maybe<FkExpenseFinanceCategoryCategoryIdInverseInput>,
  invoicesUsingId?: Maybe<FkInvoiceFinanceCategoryCategoryIdInverseInput>,
  paymentsUsingId?: Maybe<FkPaymentFinanceCategoryCategoryIdInverseInput>,
  supplierInvoicesUsingId?: Maybe<FkSupplierInvoiceFinanceCategoryCategoryIdInverseInput>,
  transactionsUsingId?: Maybe<FkTransactionFinanceCategoryCategoryIdInverseInput>,
};

export type FkTransactionFinanceCategoryCategoryIdInput = {
  connectById?: Maybe<FinanceCategoryPkFinanceCategoryConnect>,
  connectByNodeId?: Maybe<FinanceCategoryNodeIdConnect>,
  deleteById?: Maybe<FinanceCategoryPkFinanceCategoryDelete>,
  deleteByNodeId?: Maybe<FinanceCategoryNodeIdDelete>,
  updateById?: Maybe<FinanceCategoryOnTransactionForFkTransactionFinanceCategoryCategoryIdUsingPkFinanceCategoryUpdate>,
  updateByNodeId?: Maybe<TransactionOnTransactionForFkTransactionFinanceCategoryCategoryIdNodeIdUpdate>,
  create?: Maybe<FkTransactionFinanceCategoryCategoryIdFinanceCategoryCreateInput>,
};

export type FkTransactionFinanceCategoryCategoryIdInverseInput = {
  deleteOthers?: Maybe<Scalars['Boolean']>,
  connectById?: Maybe<Array<TransactionPkTransactionConnect>>,
  connectByNodeId?: Maybe<Array<TransactionNodeIdConnect>>,
  deleteById?: Maybe<Array<TransactionPkTransactionDelete>>,
  deleteByNodeId?: Maybe<Array<TransactionNodeIdDelete>>,
  updateById?: Maybe<Array<TransactionOnTransactionForFkTransactionFinanceCategoryCategoryIdUsingPkTransactionUpdate>>,
  updateByNodeId?: Maybe<Array<FinanceCategoryOnTransactionForFkTransactionFinanceCategoryCategoryIdNodeIdUpdate>>,
  create?: Maybe<Array<FkTransactionFinanceCategoryCategoryIdTransactionCreateInput>>,
};

export type FkTransactionFinanceCategoryCategoryIdTransactionCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  accountId?: Maybe<Scalars['UUID']>,
  amount: Scalars['BigFloat'],
  externalId?: Maybe<Scalars['String']>,
  date: Scalars['Datetime'],
  description?: Maybe<Scalars['String']>,
  status: Scalars['Int'],
  reverseTransactionId?: Maybe<Scalars['UUID']>,
  source?: Maybe<Scalars['String']>,
  transactionImportBatchId?: Maybe<Scalars['UUID']>,
  balance?: Maybe<Scalars['BigFloat']>,
  currency?: Maybe<Scalars['String']>,
  accountToAccountId?: Maybe<FkTransactionAccountAccountIdInput>,
  transactionToReverseTransactionId?: Maybe<FkTransactionTransactionReverseTransactionIdInput>,
  transactionImportBatchToTransactionImportBatchId?: Maybe<FkTransactionTransactionImportBatchTransactionImportBatchIdInput>,
  financeCategoryToCategoryId?: Maybe<FkTransactionFinanceCategoryCategoryIdInput>,
  transactionLinksUsingId?: Maybe<FkTransactionLinkTransactionTransactionIdInverseInput>,
  transactionNotesUsingId?: Maybe<FkTransactionNoteTransactionTransactionIdInverseInput>,
};

export type FkTransactionImportBatchAccountAccountIdAccountCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  institution?: Maybe<Scalars['String']>,
  details?: Maybe<Scalars['String']>,
  transactionsUsingId?: Maybe<FkTransactionAccountAccountIdInverseInput>,
  transactionImportBatchesUsingId?: Maybe<FkTransactionImportBatchAccountAccountIdInverseInput>,
};

export type FkTransactionImportBatchAccountAccountIdInput = {
  connectById?: Maybe<AccountPkAccountConnect>,
  connectByNodeId?: Maybe<AccountNodeIdConnect>,
  deleteById?: Maybe<AccountPkAccountDelete>,
  deleteByNodeId?: Maybe<AccountNodeIdDelete>,
  updateById?: Maybe<AccountOnTransactionImportBatchForFkTransactionImportBatchAccountAccountIdUsingPkAccountUpdate>,
  updateByNodeId?: Maybe<TransactionImportBatchOnTransactionImportBatchForFkTransactionImportBatchAccountAccountIdNodeIdUpdate>,
  create?: Maybe<FkTransactionImportBatchAccountAccountIdAccountCreateInput>,
};

export type FkTransactionImportBatchAccountAccountIdInverseInput = {
  deleteOthers?: Maybe<Scalars['Boolean']>,
  connectById?: Maybe<Array<TransactionImportBatchPkTransactionImportBatchConnect>>,
  connectByNodeId?: Maybe<Array<TransactionImportBatchNodeIdConnect>>,
  deleteById?: Maybe<Array<TransactionImportBatchPkTransactionImportBatchDelete>>,
  deleteByNodeId?: Maybe<Array<TransactionImportBatchNodeIdDelete>>,
  updateById?: Maybe<Array<TransactionImportBatchOnTransactionImportBatchForFkTransactionImportBatchAccountAccountIdUsingPkTransactionImportBatchUpdate>>,
  updateByNodeId?: Maybe<Array<AccountOnTransactionImportBatchForFkTransactionImportBatchAccountAccountIdNodeIdUpdate>>,
  create?: Maybe<Array<FkTransactionImportBatchAccountAccountIdTransactionImportBatchCreateInput>>,
};

export type FkTransactionImportBatchAccountAccountIdTransactionImportBatchCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  dateRangeMin: Scalars['Datetime'],
  dateRangeMax: Scalars['Datetime'],
  key?: Maybe<Scalars['String']>,
  accountToAccountId?: Maybe<FkTransactionImportBatchAccountAccountIdInput>,
  transactionsUsingId?: Maybe<FkTransactionTransactionImportBatchTransactionImportBatchIdInverseInput>,
};

export type FkTransactionLinkExpenseExpenseIdExpenseCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  amount: Scalars['BigFloat'],
  amountActual: Scalars['BigFloat'],
  created?: Maybe<Scalars['Datetime']>,
  currency?: Maybe<Scalars['String']>,
  invoiceId?: Maybe<Scalars['UUID']>,
  modified?: Maybe<Scalars['Datetime']>,
  paid: Scalars['Datetime'],
  summary?: Maybe<Scalars['String']>,
  supplierId?: Maybe<Scalars['UUID']>,
  reference?: Maybe<Scalars['String']>,
  categoryId?: Maybe<Scalars['UUID']>,
  supplierInvoiceId?: Maybe<Scalars['UUID']>,
  tripId?: Maybe<Scalars['UUID']>,
  invoiceToInvoiceId?: Maybe<FkExpenseInvoiceInvoiceIdInput>,
  supplierToSupplierId?: Maybe<FkExpenseSupplierSupplierIdInput>,
  financeCategoryToCategoryId?: Maybe<FkExpenseFinanceCategoryCategoryIdInput>,
  supplierInvoiceToSupplierInvoiceId?: Maybe<FkExpenseSupplierInvoiceSupplierInvoiceIdInput>,
  tripToTripId?: Maybe<FkExpenseTripTripIdInput>,
  transactionLinksUsingId?: Maybe<FkTransactionLinkExpenseExpenseIdInverseInput>,
};

export type FkTransactionLinkExpenseExpenseIdInput = {
  connectById?: Maybe<ExpensePkExpenseConnect>,
  connectByNodeId?: Maybe<ExpenseNodeIdConnect>,
  deleteById?: Maybe<ExpensePkExpenseDelete>,
  deleteByNodeId?: Maybe<ExpenseNodeIdDelete>,
  updateById?: Maybe<ExpenseOnTransactionLinkForFkTransactionLinkExpenseExpenseIdUsingPkExpenseUpdate>,
  updateByNodeId?: Maybe<TransactionLinkOnTransactionLinkForFkTransactionLinkExpenseExpenseIdNodeIdUpdate>,
  create?: Maybe<FkTransactionLinkExpenseExpenseIdExpenseCreateInput>,
};

export type FkTransactionLinkExpenseExpenseIdInverseInput = {
  deleteOthers?: Maybe<Scalars['Boolean']>,
  connectById?: Maybe<Array<TransactionLinkPkTransactionLinkConnect>>,
  connectByNodeId?: Maybe<Array<TransactionLinkNodeIdConnect>>,
  deleteById?: Maybe<Array<TransactionLinkPkTransactionLinkDelete>>,
  deleteByNodeId?: Maybe<Array<TransactionLinkNodeIdDelete>>,
  updateById?: Maybe<Array<TransactionLinkOnTransactionLinkForFkTransactionLinkExpenseExpenseIdUsingPkTransactionLinkUpdate>>,
  updateByNodeId?: Maybe<Array<ExpenseOnTransactionLinkForFkTransactionLinkExpenseExpenseIdNodeIdUpdate>>,
  create?: Maybe<Array<FkTransactionLinkExpenseExpenseIdTransactionLinkCreateInput>>,
};

export type FkTransactionLinkExpenseExpenseIdTransactionLinkCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  transactionId?: Maybe<Scalars['UUID']>,
  invoiceId?: Maybe<Scalars['UUID']>,
  supplierInvoiceId?: Maybe<Scalars['UUID']>,
  paymentId?: Maybe<Scalars['UUID']>,
  status?: Maybe<Scalars['Int']>,
  transactionToTransactionId?: Maybe<FkTransactionLinkTransactionTransactionIdInput>,
  invoiceToInvoiceId?: Maybe<FkTransactionLinkInvoiceInvoiceIdInput>,
  supplierInvoiceToSupplierInvoiceId?: Maybe<FkTransactionLinkSupplierInvoiceSupplierInvoiceIdInput>,
  paymentToPaymentId?: Maybe<FkTransactionLinkPaymentPaymentIdInput>,
  expenseToExpenseId?: Maybe<FkTransactionLinkExpenseExpenseIdInput>,
};

export type FkTransactionLinkInvoiceInvoiceIdInput = {
  connectById?: Maybe<InvoicePkInvoiceConnect>,
  connectByNodeId?: Maybe<InvoiceNodeIdConnect>,
  deleteById?: Maybe<InvoicePkInvoiceDelete>,
  deleteByNodeId?: Maybe<InvoiceNodeIdDelete>,
  updateById?: Maybe<InvoiceOnTransactionLinkForFkTransactionLinkInvoiceInvoiceIdUsingPkInvoiceUpdate>,
  updateByNodeId?: Maybe<TransactionLinkOnTransactionLinkForFkTransactionLinkInvoiceInvoiceIdNodeIdUpdate>,
  create?: Maybe<FkTransactionLinkInvoiceInvoiceIdInvoiceCreateInput>,
};

export type FkTransactionLinkInvoiceInvoiceIdInverseInput = {
  deleteOthers?: Maybe<Scalars['Boolean']>,
  connectById?: Maybe<Array<TransactionLinkPkTransactionLinkConnect>>,
  connectByNodeId?: Maybe<Array<TransactionLinkNodeIdConnect>>,
  deleteById?: Maybe<Array<TransactionLinkPkTransactionLinkDelete>>,
  deleteByNodeId?: Maybe<Array<TransactionLinkNodeIdDelete>>,
  updateById?: Maybe<Array<TransactionLinkOnTransactionLinkForFkTransactionLinkInvoiceInvoiceIdUsingPkTransactionLinkUpdate>>,
  updateByNodeId?: Maybe<Array<InvoiceOnTransactionLinkForFkTransactionLinkInvoiceInvoiceIdNodeIdUpdate>>,
  create?: Maybe<Array<FkTransactionLinkInvoiceInvoiceIdTransactionLinkCreateInput>>,
};

export type FkTransactionLinkInvoiceInvoiceIdInvoiceCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  amount: Scalars['BigFloat'],
  created?: Maybe<Scalars['Datetime']>,
  currency?: Maybe<Scalars['String']>,
  due: Scalars['Datetime'],
  key?: Maybe<Scalars['String']>,
  modified?: Maybe<Scalars['Datetime']>,
  summary?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>,
  number?: Maybe<Scalars['Int']>,
  quoteId?: Maybe<Scalars['UUID']>,
  voided?: Maybe<Scalars['Datetime']>,
  categoryId?: Maybe<Scalars['UUID']>,
  tripId?: Maybe<Scalars['UUID']>,
  paid?: Maybe<Scalars['Datetime']>,
  note?: Maybe<Scalars['String']>,
  invoiced?: Maybe<Scalars['Datetime']>,
  locked?: Maybe<Scalars['Datetime']>,
  quoteToQuoteId?: Maybe<FkInvoiceQuoteQuoteIdInput>,
  financeCategoryToCategoryId?: Maybe<FkInvoiceFinanceCategoryCategoryIdInput>,
  tripToTripId?: Maybe<FkInvoiceTripTripIdInput>,
  expensesUsingId?: Maybe<FkExpenseInvoiceInvoiceIdInverseInput>,
  paymentsUsingId?: Maybe<FkPaymentInvoiceInvoiceIdInverseInput>,
  transactionLinksUsingId?: Maybe<FkTransactionLinkInvoiceInvoiceIdInverseInput>,
};

export type FkTransactionLinkInvoiceInvoiceIdTransactionLinkCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  transactionId?: Maybe<Scalars['UUID']>,
  supplierInvoiceId?: Maybe<Scalars['UUID']>,
  paymentId?: Maybe<Scalars['UUID']>,
  expenseId?: Maybe<Scalars['UUID']>,
  status?: Maybe<Scalars['Int']>,
  transactionToTransactionId?: Maybe<FkTransactionLinkTransactionTransactionIdInput>,
  invoiceToInvoiceId?: Maybe<FkTransactionLinkInvoiceInvoiceIdInput>,
  supplierInvoiceToSupplierInvoiceId?: Maybe<FkTransactionLinkSupplierInvoiceSupplierInvoiceIdInput>,
  paymentToPaymentId?: Maybe<FkTransactionLinkPaymentPaymentIdInput>,
  expenseToExpenseId?: Maybe<FkTransactionLinkExpenseExpenseIdInput>,
};

export type FkTransactionLinkPaymentPaymentIdInput = {
  connectById?: Maybe<PaymentPkPaymentConnect>,
  connectByNodeId?: Maybe<PaymentNodeIdConnect>,
  deleteById?: Maybe<PaymentPkPaymentDelete>,
  deleteByNodeId?: Maybe<PaymentNodeIdDelete>,
  updateById?: Maybe<PaymentOnTransactionLinkForFkTransactionLinkPaymentPaymentIdUsingPkPaymentUpdate>,
  updateByNodeId?: Maybe<TransactionLinkOnTransactionLinkForFkTransactionLinkPaymentPaymentIdNodeIdUpdate>,
  create?: Maybe<FkTransactionLinkPaymentPaymentIdPaymentCreateInput>,
};

export type FkTransactionLinkPaymentPaymentIdInverseInput = {
  deleteOthers?: Maybe<Scalars['Boolean']>,
  connectById?: Maybe<Array<TransactionLinkPkTransactionLinkConnect>>,
  connectByNodeId?: Maybe<Array<TransactionLinkNodeIdConnect>>,
  deleteById?: Maybe<Array<TransactionLinkPkTransactionLinkDelete>>,
  deleteByNodeId?: Maybe<Array<TransactionLinkNodeIdDelete>>,
  updateById?: Maybe<Array<TransactionLinkOnTransactionLinkForFkTransactionLinkPaymentPaymentIdUsingPkTransactionLinkUpdate>>,
  updateByNodeId?: Maybe<Array<PaymentOnTransactionLinkForFkTransactionLinkPaymentPaymentIdNodeIdUpdate>>,
  create?: Maybe<Array<FkTransactionLinkPaymentPaymentIdTransactionLinkCreateInput>>,
};

export type FkTransactionLinkPaymentPaymentIdPaymentCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  amount: Scalars['BigFloat'],
  amountActual: Scalars['BigFloat'],
  created?: Maybe<Scalars['Datetime']>,
  currency?: Maybe<Scalars['String']>,
  invoiceId?: Maybe<Scalars['UUID']>,
  modified?: Maybe<Scalars['Datetime']>,
  paid: Scalars['Datetime'],
  reference?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  categoryId?: Maybe<Scalars['UUID']>,
  tripId?: Maybe<Scalars['UUID']>,
  type?: Maybe<Scalars['Int']>,
  invoiceToInvoiceId?: Maybe<FkPaymentInvoiceInvoiceIdInput>,
  financeCategoryToCategoryId?: Maybe<FkPaymentFinanceCategoryCategoryIdInput>,
  tripToTripId?: Maybe<FkPaymentTripTripIdInput>,
  transactionLinksUsingId?: Maybe<FkTransactionLinkPaymentPaymentIdInverseInput>,
};

export type FkTransactionLinkPaymentPaymentIdTransactionLinkCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  transactionId?: Maybe<Scalars['UUID']>,
  invoiceId?: Maybe<Scalars['UUID']>,
  supplierInvoiceId?: Maybe<Scalars['UUID']>,
  expenseId?: Maybe<Scalars['UUID']>,
  status?: Maybe<Scalars['Int']>,
  transactionToTransactionId?: Maybe<FkTransactionLinkTransactionTransactionIdInput>,
  invoiceToInvoiceId?: Maybe<FkTransactionLinkInvoiceInvoiceIdInput>,
  supplierInvoiceToSupplierInvoiceId?: Maybe<FkTransactionLinkSupplierInvoiceSupplierInvoiceIdInput>,
  paymentToPaymentId?: Maybe<FkTransactionLinkPaymentPaymentIdInput>,
  expenseToExpenseId?: Maybe<FkTransactionLinkExpenseExpenseIdInput>,
};

export type FkTransactionLinkSupplierInvoiceSupplierInvoiceIdInput = {
  connectById?: Maybe<SupplierInvoicePkSupplierInvoiceConnect>,
  connectByNodeId?: Maybe<SupplierInvoiceNodeIdConnect>,
  deleteById?: Maybe<SupplierInvoicePkSupplierInvoiceDelete>,
  deleteByNodeId?: Maybe<SupplierInvoiceNodeIdDelete>,
  updateById?: Maybe<SupplierInvoiceOnTransactionLinkForFkTransactionLinkSupplierInvoiceSupplierInvoiceIdUsingPkSupplierInvoiceUpdate>,
  updateByNodeId?: Maybe<TransactionLinkOnTransactionLinkForFkTransactionLinkSupplierInvoiceSupplierInvoiceIdNodeIdUpdate>,
  create?: Maybe<FkTransactionLinkSupplierInvoiceSupplierInvoiceIdSupplierInvoiceCreateInput>,
};

export type FkTransactionLinkSupplierInvoiceSupplierInvoiceIdInverseInput = {
  deleteOthers?: Maybe<Scalars['Boolean']>,
  connectById?: Maybe<Array<TransactionLinkPkTransactionLinkConnect>>,
  connectByNodeId?: Maybe<Array<TransactionLinkNodeIdConnect>>,
  deleteById?: Maybe<Array<TransactionLinkPkTransactionLinkDelete>>,
  deleteByNodeId?: Maybe<Array<TransactionLinkNodeIdDelete>>,
  updateById?: Maybe<Array<TransactionLinkOnTransactionLinkForFkTransactionLinkSupplierInvoiceSupplierInvoiceIdUsingPkTransactionLinkUpdate>>,
  updateByNodeId?: Maybe<Array<SupplierInvoiceOnTransactionLinkForFkTransactionLinkSupplierInvoiceSupplierInvoiceIdNodeIdUpdate>>,
  create?: Maybe<Array<FkTransactionLinkSupplierInvoiceSupplierInvoiceIdTransactionLinkCreateInput>>,
};

export type FkTransactionLinkSupplierInvoiceSupplierInvoiceIdSupplierInvoiceCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  amount: Scalars['BigFloat'],
  categoryId?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  currency?: Maybe<Scalars['String']>,
  due: Scalars['Datetime'],
  key?: Maybe<Scalars['String']>,
  modified?: Maybe<Scalars['Datetime']>,
  number: Scalars['Int'],
  summary?: Maybe<Scalars['String']>,
  supplierId?: Maybe<Scalars['UUID']>,
  tripId?: Maybe<Scalars['UUID']>,
  type?: Maybe<Scalars['String']>,
  voided?: Maybe<Scalars['Datetime']>,
  amountActual?: Maybe<Scalars['BigFloat']>,
  paid?: Maybe<Scalars['Datetime']>,
  mediaItemId?: Maybe<Scalars['UUID']>,
  financeCategoryToCategoryId?: Maybe<FkSupplierInvoiceFinanceCategoryCategoryIdInput>,
  supplierToSupplierId?: Maybe<FkSupplierInvoiceSupplierSupplierIdInput>,
  tripToTripId?: Maybe<FkSupplierInvoiceTripTripIdInput>,
  mediaItemToMediaItemId?: Maybe<FkSupplierInvoiceMediaItemMediaItemIdInput>,
  expensesUsingId?: Maybe<FkExpenseSupplierInvoiceSupplierInvoiceIdInverseInput>,
  transactionLinksUsingId?: Maybe<FkTransactionLinkSupplierInvoiceSupplierInvoiceIdInverseInput>,
};

export type FkTransactionLinkSupplierInvoiceSupplierInvoiceIdTransactionLinkCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  transactionId?: Maybe<Scalars['UUID']>,
  invoiceId?: Maybe<Scalars['UUID']>,
  paymentId?: Maybe<Scalars['UUID']>,
  expenseId?: Maybe<Scalars['UUID']>,
  status?: Maybe<Scalars['Int']>,
  transactionToTransactionId?: Maybe<FkTransactionLinkTransactionTransactionIdInput>,
  invoiceToInvoiceId?: Maybe<FkTransactionLinkInvoiceInvoiceIdInput>,
  supplierInvoiceToSupplierInvoiceId?: Maybe<FkTransactionLinkSupplierInvoiceSupplierInvoiceIdInput>,
  paymentToPaymentId?: Maybe<FkTransactionLinkPaymentPaymentIdInput>,
  expenseToExpenseId?: Maybe<FkTransactionLinkExpenseExpenseIdInput>,
};

export type FkTransactionLinkTransactionTransactionIdInput = {
  connectById?: Maybe<TransactionPkTransactionConnect>,
  connectByNodeId?: Maybe<TransactionNodeIdConnect>,
  deleteById?: Maybe<TransactionPkTransactionDelete>,
  deleteByNodeId?: Maybe<TransactionNodeIdDelete>,
  updateById?: Maybe<TransactionOnTransactionLinkForFkTransactionLinkTransactionTransactionIdUsingPkTransactionUpdate>,
  updateByNodeId?: Maybe<TransactionLinkOnTransactionLinkForFkTransactionLinkTransactionTransactionIdNodeIdUpdate>,
  create?: Maybe<FkTransactionLinkTransactionTransactionIdTransactionCreateInput>,
};

export type FkTransactionLinkTransactionTransactionIdInverseInput = {
  deleteOthers?: Maybe<Scalars['Boolean']>,
  connectById?: Maybe<Array<TransactionLinkPkTransactionLinkConnect>>,
  connectByNodeId?: Maybe<Array<TransactionLinkNodeIdConnect>>,
  deleteById?: Maybe<Array<TransactionLinkPkTransactionLinkDelete>>,
  deleteByNodeId?: Maybe<Array<TransactionLinkNodeIdDelete>>,
  updateById?: Maybe<Array<TransactionLinkOnTransactionLinkForFkTransactionLinkTransactionTransactionIdUsingPkTransactionLinkUpdate>>,
  updateByNodeId?: Maybe<Array<TransactionOnTransactionLinkForFkTransactionLinkTransactionTransactionIdNodeIdUpdate>>,
  create?: Maybe<Array<FkTransactionLinkTransactionTransactionIdTransactionLinkCreateInput>>,
};

export type FkTransactionLinkTransactionTransactionIdTransactionCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  accountId?: Maybe<Scalars['UUID']>,
  amount: Scalars['BigFloat'],
  externalId?: Maybe<Scalars['String']>,
  date: Scalars['Datetime'],
  description?: Maybe<Scalars['String']>,
  status: Scalars['Int'],
  reverseTransactionId?: Maybe<Scalars['UUID']>,
  source?: Maybe<Scalars['String']>,
  transactionImportBatchId?: Maybe<Scalars['UUID']>,
  balance?: Maybe<Scalars['BigFloat']>,
  currency?: Maybe<Scalars['String']>,
  categoryId?: Maybe<Scalars['UUID']>,
  accountToAccountId?: Maybe<FkTransactionAccountAccountIdInput>,
  transactionToReverseTransactionId?: Maybe<FkTransactionTransactionReverseTransactionIdInput>,
  transactionImportBatchToTransactionImportBatchId?: Maybe<FkTransactionTransactionImportBatchTransactionImportBatchIdInput>,
  financeCategoryToCategoryId?: Maybe<FkTransactionFinanceCategoryCategoryIdInput>,
  transactionLinksUsingId?: Maybe<FkTransactionLinkTransactionTransactionIdInverseInput>,
  transactionNotesUsingId?: Maybe<FkTransactionNoteTransactionTransactionIdInverseInput>,
};

export type FkTransactionLinkTransactionTransactionIdTransactionLinkCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  invoiceId?: Maybe<Scalars['UUID']>,
  supplierInvoiceId?: Maybe<Scalars['UUID']>,
  paymentId?: Maybe<Scalars['UUID']>,
  expenseId?: Maybe<Scalars['UUID']>,
  status?: Maybe<Scalars['Int']>,
  transactionToTransactionId?: Maybe<FkTransactionLinkTransactionTransactionIdInput>,
  invoiceToInvoiceId?: Maybe<FkTransactionLinkInvoiceInvoiceIdInput>,
  supplierInvoiceToSupplierInvoiceId?: Maybe<FkTransactionLinkSupplierInvoiceSupplierInvoiceIdInput>,
  paymentToPaymentId?: Maybe<FkTransactionLinkPaymentPaymentIdInput>,
  expenseToExpenseId?: Maybe<FkTransactionLinkExpenseExpenseIdInput>,
};

export type FkTransactionNoteTransactionTransactionIdInput = {
  connectById?: Maybe<TransactionPkTransactionConnect>,
  connectByNodeId?: Maybe<TransactionNodeIdConnect>,
  deleteById?: Maybe<TransactionPkTransactionDelete>,
  deleteByNodeId?: Maybe<TransactionNodeIdDelete>,
  updateById?: Maybe<TransactionOnTransactionNoteForFkTransactionNoteTransactionTransactionIdUsingPkTransactionUpdate>,
  updateByNodeId?: Maybe<TransactionNoteOnTransactionNoteForFkTransactionNoteTransactionTransactionIdNodeIdUpdate>,
  create?: Maybe<FkTransactionNoteTransactionTransactionIdTransactionCreateInput>,
};

export type FkTransactionNoteTransactionTransactionIdInverseInput = {
  deleteOthers?: Maybe<Scalars['Boolean']>,
  connectById?: Maybe<Array<TransactionNotePkTransactionNoteConnect>>,
  connectByNodeId?: Maybe<Array<TransactionNoteNodeIdConnect>>,
  deleteById?: Maybe<Array<TransactionNotePkTransactionNoteDelete>>,
  deleteByNodeId?: Maybe<Array<TransactionNoteNodeIdDelete>>,
  updateById?: Maybe<Array<TransactionNoteOnTransactionNoteForFkTransactionNoteTransactionTransactionIdUsingPkTransactionNoteUpdate>>,
  updateByNodeId?: Maybe<Array<TransactionOnTransactionNoteForFkTransactionNoteTransactionTransactionIdNodeIdUpdate>>,
  create?: Maybe<Array<FkTransactionNoteTransactionTransactionIdTransactionNoteCreateInput>>,
};

export type FkTransactionNoteTransactionTransactionIdTransactionCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  accountId?: Maybe<Scalars['UUID']>,
  amount: Scalars['BigFloat'],
  externalId?: Maybe<Scalars['String']>,
  date: Scalars['Datetime'],
  description?: Maybe<Scalars['String']>,
  status: Scalars['Int'],
  reverseTransactionId?: Maybe<Scalars['UUID']>,
  source?: Maybe<Scalars['String']>,
  transactionImportBatchId?: Maybe<Scalars['UUID']>,
  balance?: Maybe<Scalars['BigFloat']>,
  currency?: Maybe<Scalars['String']>,
  categoryId?: Maybe<Scalars['UUID']>,
  accountToAccountId?: Maybe<FkTransactionAccountAccountIdInput>,
  transactionToReverseTransactionId?: Maybe<FkTransactionTransactionReverseTransactionIdInput>,
  transactionImportBatchToTransactionImportBatchId?: Maybe<FkTransactionTransactionImportBatchTransactionImportBatchIdInput>,
  financeCategoryToCategoryId?: Maybe<FkTransactionFinanceCategoryCategoryIdInput>,
  transactionLinksUsingId?: Maybe<FkTransactionLinkTransactionTransactionIdInverseInput>,
  transactionNotesUsingId?: Maybe<FkTransactionNoteTransactionTransactionIdInverseInput>,
};

export type FkTransactionNoteTransactionTransactionIdTransactionNoteCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  userId?: Maybe<Scalars['UUID']>,
  message?: Maybe<Scalars['String']>,
  userToUserId?: Maybe<FkTransactionNoteUserUserIdInput>,
  transactionToTransactionId?: Maybe<FkTransactionNoteTransactionTransactionIdInput>,
};

export type FkTransactionNoteUserUserIdInput = {
  connectById?: Maybe<UserPkUserConnect>,
  connectByNodeId?: Maybe<UserNodeIdConnect>,
  deleteById?: Maybe<UserPkUserDelete>,
  deleteByNodeId?: Maybe<UserNodeIdDelete>,
  updateById?: Maybe<UserOnTransactionNoteForFkTransactionNoteUserUserIdUsingPkUserUpdate>,
  updateByNodeId?: Maybe<TransactionNoteOnTransactionNoteForFkTransactionNoteUserUserIdNodeIdUpdate>,
  create?: Maybe<FkTransactionNoteUserUserIdUserCreateInput>,
};

export type FkTransactionNoteUserUserIdInverseInput = {
  deleteOthers?: Maybe<Scalars['Boolean']>,
  connectById?: Maybe<Array<TransactionNotePkTransactionNoteConnect>>,
  connectByNodeId?: Maybe<Array<TransactionNoteNodeIdConnect>>,
  deleteById?: Maybe<Array<TransactionNotePkTransactionNoteDelete>>,
  deleteByNodeId?: Maybe<Array<TransactionNoteNodeIdDelete>>,
  updateById?: Maybe<Array<TransactionNoteOnTransactionNoteForFkTransactionNoteUserUserIdUsingPkTransactionNoteUpdate>>,
  updateByNodeId?: Maybe<Array<UserOnTransactionNoteForFkTransactionNoteUserUserIdNodeIdUpdate>>,
  create?: Maybe<Array<FkTransactionNoteUserUserIdTransactionNoteCreateInput>>,
};

export type FkTransactionNoteUserUserIdTransactionNoteCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  message?: Maybe<Scalars['String']>,
  transactionId?: Maybe<Scalars['UUID']>,
  userToUserId?: Maybe<FkTransactionNoteUserUserIdInput>,
  transactionToTransactionId?: Maybe<FkTransactionNoteTransactionTransactionIdInput>,
};

export type FkTransactionNoteUserUserIdUserCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  email?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  skype?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  genderPreposition?: Maybe<Scalars['String']>,
  externalId?: Maybe<Scalars['String']>,
  name: Scalars['String'],
  tripsUsingId?: Maybe<FkTripUserUserIdInverseInput>,
  emailsUsingId?: Maybe<FkEmailUserUserIdInverseInput>,
  notesUsingId?: Maybe<FkNoteUserUserIdInverseInput>,
  quotesUsingId?: Maybe<FkQuoteUserUserIdInverseInput>,
  remindersUsingId?: Maybe<FkReminderUserUserIdInverseInput>,
  transactionNotesUsingId?: Maybe<FkTransactionNoteUserUserIdInverseInput>,
  quotePublicsUsingId?: Maybe<FakePublicQuotePublicForeignKey2InverseInput>,
};

export type FkTransactionTransactionImportBatchTransactionImportBatchIdInput = {
  connectById?: Maybe<TransactionImportBatchPkTransactionImportBatchConnect>,
  connectByNodeId?: Maybe<TransactionImportBatchNodeIdConnect>,
  deleteById?: Maybe<TransactionImportBatchPkTransactionImportBatchDelete>,
  deleteByNodeId?: Maybe<TransactionImportBatchNodeIdDelete>,
  updateById?: Maybe<TransactionImportBatchOnTransactionForFkTransactionTransactionImportBatchTransactionImportBatchIdUsingPkTransactionImportBatchUpdate>,
  updateByNodeId?: Maybe<TransactionOnTransactionForFkTransactionTransactionImportBatchTransactionImportBatchIdNodeIdUpdate>,
  create?: Maybe<FkTransactionTransactionImportBatchTransactionImportBatchIdTransactionImportBatchCreateInput>,
};

export type FkTransactionTransactionImportBatchTransactionImportBatchIdInverseInput = {
  deleteOthers?: Maybe<Scalars['Boolean']>,
  connectById?: Maybe<Array<TransactionPkTransactionConnect>>,
  connectByNodeId?: Maybe<Array<TransactionNodeIdConnect>>,
  deleteById?: Maybe<Array<TransactionPkTransactionDelete>>,
  deleteByNodeId?: Maybe<Array<TransactionNodeIdDelete>>,
  updateById?: Maybe<Array<TransactionOnTransactionForFkTransactionTransactionImportBatchTransactionImportBatchIdUsingPkTransactionUpdate>>,
  updateByNodeId?: Maybe<Array<TransactionImportBatchOnTransactionForFkTransactionTransactionImportBatchTransactionImportBatchIdNodeIdUpdate>>,
  create?: Maybe<Array<FkTransactionTransactionImportBatchTransactionImportBatchIdTransactionCreateInput>>,
};

export type FkTransactionTransactionImportBatchTransactionImportBatchIdTransactionCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  accountId?: Maybe<Scalars['UUID']>,
  amount: Scalars['BigFloat'],
  externalId?: Maybe<Scalars['String']>,
  date: Scalars['Datetime'],
  description?: Maybe<Scalars['String']>,
  status: Scalars['Int'],
  reverseTransactionId?: Maybe<Scalars['UUID']>,
  source?: Maybe<Scalars['String']>,
  balance?: Maybe<Scalars['BigFloat']>,
  currency?: Maybe<Scalars['String']>,
  categoryId?: Maybe<Scalars['UUID']>,
  accountToAccountId?: Maybe<FkTransactionAccountAccountIdInput>,
  transactionToReverseTransactionId?: Maybe<FkTransactionTransactionReverseTransactionIdInput>,
  transactionImportBatchToTransactionImportBatchId?: Maybe<FkTransactionTransactionImportBatchTransactionImportBatchIdInput>,
  financeCategoryToCategoryId?: Maybe<FkTransactionFinanceCategoryCategoryIdInput>,
  transactionLinksUsingId?: Maybe<FkTransactionLinkTransactionTransactionIdInverseInput>,
  transactionNotesUsingId?: Maybe<FkTransactionNoteTransactionTransactionIdInverseInput>,
};

export type FkTransactionTransactionImportBatchTransactionImportBatchIdTransactionImportBatchCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  accountId?: Maybe<Scalars['UUID']>,
  dateRangeMin: Scalars['Datetime'],
  dateRangeMax: Scalars['Datetime'],
  key?: Maybe<Scalars['String']>,
  accountToAccountId?: Maybe<FkTransactionImportBatchAccountAccountIdInput>,
  transactionsUsingId?: Maybe<FkTransactionTransactionImportBatchTransactionImportBatchIdInverseInput>,
};

export type FkTransactionTransactionReverseTransactionIdInput = {
  connectById?: Maybe<TransactionPkTransactionConnect>,
  connectByNodeId?: Maybe<TransactionNodeIdConnect>,
  deleteById?: Maybe<TransactionPkTransactionDelete>,
  deleteByNodeId?: Maybe<TransactionNodeIdDelete>,
  updateById?: Maybe<TransactionOnTransactionForFkTransactionTransactionReverseTransactionIdUsingPkTransactionUpdate>,
  updateByNodeId?: Maybe<TransactionOnTransactionForFkTransactionTransactionReverseTransactionIdNodeIdUpdate>,
  create?: Maybe<FkTransactionTransactionReverseTransactionIdTransactionCreateInput>,
};

export type FkTransactionTransactionReverseTransactionIdTransactionCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  accountId?: Maybe<Scalars['UUID']>,
  amount: Scalars['BigFloat'],
  externalId?: Maybe<Scalars['String']>,
  date: Scalars['Datetime'],
  description?: Maybe<Scalars['String']>,
  status: Scalars['Int'],
  source?: Maybe<Scalars['String']>,
  transactionImportBatchId?: Maybe<Scalars['UUID']>,
  balance?: Maybe<Scalars['BigFloat']>,
  currency?: Maybe<Scalars['String']>,
  categoryId?: Maybe<Scalars['UUID']>,
  accountToAccountId?: Maybe<FkTransactionAccountAccountIdInput>,
  transactionToReverseTransactionId?: Maybe<FkTransactionTransactionReverseTransactionIdInput>,
  transactionImportBatchToTransactionImportBatchId?: Maybe<FkTransactionTransactionImportBatchTransactionImportBatchIdInput>,
  financeCategoryToCategoryId?: Maybe<FkTransactionFinanceCategoryCategoryIdInput>,
  transactionLinksUsingId?: Maybe<FkTransactionLinkTransactionTransactionIdInverseInput>,
  transactionNotesUsingId?: Maybe<FkTransactionNoteTransactionTransactionIdInverseInput>,
};

export type FkTripAgencyAgencyIdAgencyCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  logoId?: Maybe<Scalars['UUID']>,
  name?: Maybe<Scalars['String']>,
  mediaItemToLogoId?: Maybe<FkAgencyMediaItemLogoIdInput>,
  agencyMembersUsingId?: Maybe<FkAgencyMemberAgencyAgencyIdInverseInput>,
  tripsUsingId?: Maybe<FkTripAgencyAgencyIdInverseInput>,
};

export type FkTripAgencyAgencyIdInput = {
  connectById?: Maybe<AgencyPkAgencyConnect>,
  connectByNodeId?: Maybe<AgencyNodeIdConnect>,
  deleteById?: Maybe<AgencyPkAgencyDelete>,
  deleteByNodeId?: Maybe<AgencyNodeIdDelete>,
  updateById?: Maybe<AgencyOnTripForFkTripAgencyAgencyIdUsingPkAgencyUpdate>,
  updateByNodeId?: Maybe<TripOnTripForFkTripAgencyAgencyIdNodeIdUpdate>,
  create?: Maybe<FkTripAgencyAgencyIdAgencyCreateInput>,
};

export type FkTripAgencyAgencyIdInverseInput = {
  deleteOthers?: Maybe<Scalars['Boolean']>,
  connectById?: Maybe<Array<TripPkTripConnect>>,
  connectByNodeId?: Maybe<Array<TripNodeIdConnect>>,
  deleteById?: Maybe<Array<TripPkTripDelete>>,
  deleteByNodeId?: Maybe<Array<TripNodeIdDelete>>,
  updateById?: Maybe<Array<TripOnTripForFkTripAgencyAgencyIdUsingPkTripUpdate>>,
  updateByNodeId?: Maybe<Array<AgencyOnTripForFkTripAgencyAgencyIdNodeIdUpdate>>,
  create?: Maybe<Array<FkTripAgencyAgencyIdTripCreateInput>>,
};

export type FkTripAgencyAgencyIdTripCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  customerId?: Maybe<Scalars['UUID']>,
  userId?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  destination?: Maybe<Scalars['String']>,
  dates?: Maybe<Scalars['String']>,
  archived?: Maybe<Scalars['Datetime']>,
  mediaGalleryId?: Maybe<Scalars['UUID']>,
  activeQuoteId?: Maybe<Scalars['UUID']>,
  baseCurrency?: Maybe<Scalars['String']>,
  duration?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['Datetime']>,
  status?: Maybe<Scalars['Int']>,
  agencyMemberId?: Maybe<Scalars['UUID']>,
  customerToCustomerId?: Maybe<FkTripCustomerCustomerIdInput>,
  userToUserId?: Maybe<FkTripUserUserIdInput>,
  mediaGalleryToMediaGalleryId?: Maybe<FkTripMediaGalleryMediaGalleryIdInput>,
  quoteToActiveQuoteId?: Maybe<FkTripQuoteActiveQuoteIdInput>,
  agencyToAgencyId?: Maybe<FkTripAgencyAgencyIdInput>,
  agencyMemberToAgencyMemberId?: Maybe<FkTripAgencyMemberAgencyMemberIdInput>,
  expensesUsingId?: Maybe<FkExpenseTripTripIdInverseInput>,
  invoicesUsingId?: Maybe<FkInvoiceTripTripIdInverseInput>,
  paymentsUsingId?: Maybe<FkPaymentTripTripIdInverseInput>,
  supplierInvoicesUsingId?: Maybe<FkSupplierInvoiceTripTripIdInverseInput>,
  emailsUsingId?: Maybe<FkEmailTripTripIdInverseInput>,
  enquiriesUsingId?: Maybe<FkEnquiryTripTripIdInverseInput>,
  notesUsingId?: Maybe<FkNoteTripTripIdInverseInput>,
  quotesUsingId?: Maybe<FkQuoteTripTripIdInverseInput>,
  testimonialsUsingId?: Maybe<FkTestimonialTripTripIdInverseInput>,
  tripTravellersUsingId?: Maybe<FkTripTravellerTripTripIdInverseInput>,
  tripFlightsUsingId?: Maybe<FkTripFlightTripTripIdInverseInput>,
  quotePublicsUsingId?: Maybe<FakePublicQuotePublicForeignKey0InverseInput>,
};

export type FkTripAgencyMemberAgencyMemberIdAgencyMemberCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  firstName?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  skype?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  genderPreposition?: Maybe<Scalars['String']>,
  agencyId?: Maybe<Scalars['UUID']>,
  agencyToAgencyId?: Maybe<FkAgencyMemberAgencyAgencyIdInput>,
  tripsUsingId?: Maybe<FkTripAgencyMemberAgencyMemberIdInverseInput>,
};

export type FkTripAgencyMemberAgencyMemberIdInput = {
  connectById?: Maybe<AgencyMemberPkAgencyMemberConnect>,
  connectByNodeId?: Maybe<AgencyMemberNodeIdConnect>,
  deleteById?: Maybe<AgencyMemberPkAgencyMemberDelete>,
  deleteByNodeId?: Maybe<AgencyMemberNodeIdDelete>,
  updateById?: Maybe<AgencyMemberOnTripForFkTripAgencyMemberAgencyMemberIdUsingPkAgencyMemberUpdate>,
  updateByNodeId?: Maybe<TripOnTripForFkTripAgencyMemberAgencyMemberIdNodeIdUpdate>,
  create?: Maybe<FkTripAgencyMemberAgencyMemberIdAgencyMemberCreateInput>,
};

export type FkTripAgencyMemberAgencyMemberIdInverseInput = {
  deleteOthers?: Maybe<Scalars['Boolean']>,
  connectById?: Maybe<Array<TripPkTripConnect>>,
  connectByNodeId?: Maybe<Array<TripNodeIdConnect>>,
  deleteById?: Maybe<Array<TripPkTripDelete>>,
  deleteByNodeId?: Maybe<Array<TripNodeIdDelete>>,
  updateById?: Maybe<Array<TripOnTripForFkTripAgencyMemberAgencyMemberIdUsingPkTripUpdate>>,
  updateByNodeId?: Maybe<Array<AgencyMemberOnTripForFkTripAgencyMemberAgencyMemberIdNodeIdUpdate>>,
  create?: Maybe<Array<FkTripAgencyMemberAgencyMemberIdTripCreateInput>>,
};

export type FkTripAgencyMemberAgencyMemberIdTripCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  customerId?: Maybe<Scalars['UUID']>,
  userId?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  destination?: Maybe<Scalars['String']>,
  dates?: Maybe<Scalars['String']>,
  archived?: Maybe<Scalars['Datetime']>,
  mediaGalleryId?: Maybe<Scalars['UUID']>,
  activeQuoteId?: Maybe<Scalars['UUID']>,
  baseCurrency?: Maybe<Scalars['String']>,
  duration?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['Datetime']>,
  status?: Maybe<Scalars['Int']>,
  agencyId?: Maybe<Scalars['UUID']>,
  customerToCustomerId?: Maybe<FkTripCustomerCustomerIdInput>,
  userToUserId?: Maybe<FkTripUserUserIdInput>,
  mediaGalleryToMediaGalleryId?: Maybe<FkTripMediaGalleryMediaGalleryIdInput>,
  quoteToActiveQuoteId?: Maybe<FkTripQuoteActiveQuoteIdInput>,
  agencyToAgencyId?: Maybe<FkTripAgencyAgencyIdInput>,
  agencyMemberToAgencyMemberId?: Maybe<FkTripAgencyMemberAgencyMemberIdInput>,
  expensesUsingId?: Maybe<FkExpenseTripTripIdInverseInput>,
  invoicesUsingId?: Maybe<FkInvoiceTripTripIdInverseInput>,
  paymentsUsingId?: Maybe<FkPaymentTripTripIdInverseInput>,
  supplierInvoicesUsingId?: Maybe<FkSupplierInvoiceTripTripIdInverseInput>,
  emailsUsingId?: Maybe<FkEmailTripTripIdInverseInput>,
  enquiriesUsingId?: Maybe<FkEnquiryTripTripIdInverseInput>,
  notesUsingId?: Maybe<FkNoteTripTripIdInverseInput>,
  quotesUsingId?: Maybe<FkQuoteTripTripIdInverseInput>,
  testimonialsUsingId?: Maybe<FkTestimonialTripTripIdInverseInput>,
  tripTravellersUsingId?: Maybe<FkTripTravellerTripTripIdInverseInput>,
  tripFlightsUsingId?: Maybe<FkTripFlightTripTripIdInverseInput>,
  quotePublicsUsingId?: Maybe<FakePublicQuotePublicForeignKey0InverseInput>,
};

export type FkTripCustomerCustomerIdCustomerCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  email?: Maybe<Scalars['String']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  customerTravellersUsingId?: Maybe<FkCustomerTravellerCustomerCustomerIdInverseInput>,
  tripsUsingId?: Maybe<FkTripCustomerCustomerIdInverseInput>,
  emailsUsingId?: Maybe<FkEmailCustomerCustomerIdInverseInput>,
  enquiriesUsingId?: Maybe<FkEnquiryCustomerCustomerIdInverseInput>,
};

export type FkTripCustomerCustomerIdInput = {
  connectById?: Maybe<CustomerPkCustomerConnect>,
  connectByNodeId?: Maybe<CustomerNodeIdConnect>,
  deleteById?: Maybe<CustomerPkCustomerDelete>,
  deleteByNodeId?: Maybe<CustomerNodeIdDelete>,
  updateById?: Maybe<CustomerOnTripForFkTripCustomerCustomerIdUsingPkCustomerUpdate>,
  updateByNodeId?: Maybe<TripOnTripForFkTripCustomerCustomerIdNodeIdUpdate>,
  create?: Maybe<FkTripCustomerCustomerIdCustomerCreateInput>,
};

export type FkTripCustomerCustomerIdInverseInput = {
  deleteOthers?: Maybe<Scalars['Boolean']>,
  connectById?: Maybe<Array<TripPkTripConnect>>,
  connectByNodeId?: Maybe<Array<TripNodeIdConnect>>,
  deleteById?: Maybe<Array<TripPkTripDelete>>,
  deleteByNodeId?: Maybe<Array<TripNodeIdDelete>>,
  updateById?: Maybe<Array<TripOnTripForFkTripCustomerCustomerIdUsingPkTripUpdate>>,
  updateByNodeId?: Maybe<Array<CustomerOnTripForFkTripCustomerCustomerIdNodeIdUpdate>>,
  create?: Maybe<Array<FkTripCustomerCustomerIdTripCreateInput>>,
};

export type FkTripCustomerCustomerIdTripCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  userId?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  destination?: Maybe<Scalars['String']>,
  dates?: Maybe<Scalars['String']>,
  archived?: Maybe<Scalars['Datetime']>,
  mediaGalleryId?: Maybe<Scalars['UUID']>,
  activeQuoteId?: Maybe<Scalars['UUID']>,
  baseCurrency?: Maybe<Scalars['String']>,
  duration?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['Datetime']>,
  status?: Maybe<Scalars['Int']>,
  agencyId?: Maybe<Scalars['UUID']>,
  agencyMemberId?: Maybe<Scalars['UUID']>,
  customerToCustomerId?: Maybe<FkTripCustomerCustomerIdInput>,
  userToUserId?: Maybe<FkTripUserUserIdInput>,
  mediaGalleryToMediaGalleryId?: Maybe<FkTripMediaGalleryMediaGalleryIdInput>,
  quoteToActiveQuoteId?: Maybe<FkTripQuoteActiveQuoteIdInput>,
  agencyToAgencyId?: Maybe<FkTripAgencyAgencyIdInput>,
  agencyMemberToAgencyMemberId?: Maybe<FkTripAgencyMemberAgencyMemberIdInput>,
  expensesUsingId?: Maybe<FkExpenseTripTripIdInverseInput>,
  invoicesUsingId?: Maybe<FkInvoiceTripTripIdInverseInput>,
  paymentsUsingId?: Maybe<FkPaymentTripTripIdInverseInput>,
  supplierInvoicesUsingId?: Maybe<FkSupplierInvoiceTripTripIdInverseInput>,
  emailsUsingId?: Maybe<FkEmailTripTripIdInverseInput>,
  enquiriesUsingId?: Maybe<FkEnquiryTripTripIdInverseInput>,
  notesUsingId?: Maybe<FkNoteTripTripIdInverseInput>,
  quotesUsingId?: Maybe<FkQuoteTripTripIdInverseInput>,
  testimonialsUsingId?: Maybe<FkTestimonialTripTripIdInverseInput>,
  tripTravellersUsingId?: Maybe<FkTripTravellerTripTripIdInverseInput>,
  tripFlightsUsingId?: Maybe<FkTripFlightTripTripIdInverseInput>,
  quotePublicsUsingId?: Maybe<FakePublicQuotePublicForeignKey0InverseInput>,
};

export type FkTripFlightTripTripIdInput = {
  connectById?: Maybe<TripPkTripConnect>,
  connectByNodeId?: Maybe<TripNodeIdConnect>,
  deleteById?: Maybe<TripPkTripDelete>,
  deleteByNodeId?: Maybe<TripNodeIdDelete>,
  updateById?: Maybe<TripOnTripFlightForFkTripFlightTripTripIdUsingPkTripUpdate>,
  updateByNodeId?: Maybe<TripFlightOnTripFlightForFkTripFlightTripTripIdNodeIdUpdate>,
  create?: Maybe<FkTripFlightTripTripIdTripCreateInput>,
};

export type FkTripFlightTripTripIdInverseInput = {
  deleteOthers?: Maybe<Scalars['Boolean']>,
  connectById?: Maybe<Array<TripFlightPkTripFlightConnect>>,
  connectByNodeId?: Maybe<Array<TripFlightNodeIdConnect>>,
  deleteById?: Maybe<Array<TripFlightPkTripFlightDelete>>,
  deleteByNodeId?: Maybe<Array<TripFlightNodeIdDelete>>,
  updateById?: Maybe<Array<TripFlightOnTripFlightForFkTripFlightTripTripIdUsingPkTripFlightUpdate>>,
  updateByNodeId?: Maybe<Array<TripOnTripFlightForFkTripFlightTripTripIdNodeIdUpdate>>,
  create?: Maybe<Array<FkTripFlightTripTripIdTripFlightCreateInput>>,
};

export type FkTripFlightTripTripIdTripCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  customerId?: Maybe<Scalars['UUID']>,
  userId?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  destination?: Maybe<Scalars['String']>,
  dates?: Maybe<Scalars['String']>,
  archived?: Maybe<Scalars['Datetime']>,
  mediaGalleryId?: Maybe<Scalars['UUID']>,
  activeQuoteId?: Maybe<Scalars['UUID']>,
  baseCurrency?: Maybe<Scalars['String']>,
  duration?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['Datetime']>,
  status?: Maybe<Scalars['Int']>,
  agencyId?: Maybe<Scalars['UUID']>,
  agencyMemberId?: Maybe<Scalars['UUID']>,
  customerToCustomerId?: Maybe<FkTripCustomerCustomerIdInput>,
  userToUserId?: Maybe<FkTripUserUserIdInput>,
  mediaGalleryToMediaGalleryId?: Maybe<FkTripMediaGalleryMediaGalleryIdInput>,
  quoteToActiveQuoteId?: Maybe<FkTripQuoteActiveQuoteIdInput>,
  agencyToAgencyId?: Maybe<FkTripAgencyAgencyIdInput>,
  agencyMemberToAgencyMemberId?: Maybe<FkTripAgencyMemberAgencyMemberIdInput>,
  expensesUsingId?: Maybe<FkExpenseTripTripIdInverseInput>,
  invoicesUsingId?: Maybe<FkInvoiceTripTripIdInverseInput>,
  paymentsUsingId?: Maybe<FkPaymentTripTripIdInverseInput>,
  supplierInvoicesUsingId?: Maybe<FkSupplierInvoiceTripTripIdInverseInput>,
  emailsUsingId?: Maybe<FkEmailTripTripIdInverseInput>,
  enquiriesUsingId?: Maybe<FkEnquiryTripTripIdInverseInput>,
  notesUsingId?: Maybe<FkNoteTripTripIdInverseInput>,
  quotesUsingId?: Maybe<FkQuoteTripTripIdInverseInput>,
  testimonialsUsingId?: Maybe<FkTestimonialTripTripIdInverseInput>,
  tripTravellersUsingId?: Maybe<FkTripTravellerTripTripIdInverseInput>,
  tripFlightsUsingId?: Maybe<FkTripFlightTripTripIdInverseInput>,
  quotePublicsUsingId?: Maybe<FakePublicQuotePublicForeignKey0InverseInput>,
};

export type FkTripFlightTripTripIdTripFlightCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  arrival: Scalars['Datetime'],
  arrivalAirport?: Maybe<Scalars['String']>,
  carrier?: Maybe<Scalars['String']>,
  departure: Scalars['Datetime'],
  departureAirport?: Maybe<Scalars['String']>,
  notes?: Maybe<Scalars['String']>,
  number?: Maybe<Scalars['String']>,
  tripToTripId?: Maybe<FkTripFlightTripTripIdInput>,
  airportToDepartureAirport?: Maybe<FakePublicTripFlightForeignKey0Input>,
  airportToArrivalAirport?: Maybe<FakePublicTripFlightForeignKey1Input>,
};

export type FkTripMediaGalleryMediaGalleryIdInput = {
  connectById?: Maybe<MediaGalleryPkMediaGalleryConnect>,
  connectByNodeId?: Maybe<MediaGalleryNodeIdConnect>,
  deleteById?: Maybe<MediaGalleryPkMediaGalleryDelete>,
  deleteByNodeId?: Maybe<MediaGalleryNodeIdDelete>,
  updateById?: Maybe<MediaGalleryOnTripForFkTripMediaGalleryMediaGalleryIdUsingPkMediaGalleryUpdate>,
  updateByNodeId?: Maybe<TripOnTripForFkTripMediaGalleryMediaGalleryIdNodeIdUpdate>,
  create?: Maybe<FkTripMediaGalleryMediaGalleryIdMediaGalleryCreateInput>,
};

export type FkTripMediaGalleryMediaGalleryIdInverseInput = {
  deleteOthers?: Maybe<Scalars['Boolean']>,
  connectById?: Maybe<Array<TripPkTripConnect>>,
  connectByNodeId?: Maybe<Array<TripNodeIdConnect>>,
  deleteById?: Maybe<Array<TripPkTripDelete>>,
  deleteByNodeId?: Maybe<Array<TripNodeIdDelete>>,
  updateById?: Maybe<Array<TripOnTripForFkTripMediaGalleryMediaGalleryIdUsingPkTripUpdate>>,
  updateByNodeId?: Maybe<Array<MediaGalleryOnTripForFkTripMediaGalleryMediaGalleryIdNodeIdUpdate>>,
  create?: Maybe<Array<FkTripMediaGalleryMediaGalleryIdTripCreateInput>>,
};

export type FkTripMediaGalleryMediaGalleryIdMediaGalleryCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  parentId?: Maybe<Scalars['UUID']>,
  isProtected?: Maybe<Scalars['Boolean']>,
  mediaGalleryToParentId?: Maybe<FkMediaGalleryMediaGalleryParentIdInput>,
  tripsUsingId?: Maybe<FkTripMediaGalleryMediaGalleryIdInverseInput>,
  destinationsUsingId?: Maybe<FkDestinationMediaGalleryGalleryIdInverseInput>,
  destinationFeaturesUsingId?: Maybe<FkDestinationFeatureMediaGalleryGalleryIdInverseInput>,
  featuresUsingId?: Maybe<FkFeatureMediaGalleryGalleryIdInverseInput>,
  mediaGalleryItemsUsingId?: Maybe<FkMediaGalleryItemMediaGalleryMediaGalleryIdInverseInput>,
  propertiesUsingId?: Maybe<FkPropertyMediaGalleryGalleryIdInverseInput>,
  suppliersUsingId?: Maybe<FkSupplierMediaGalleryGalleryIdInverseInput>,
};

export type FkTripMediaGalleryMediaGalleryIdTripCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  customerId?: Maybe<Scalars['UUID']>,
  userId?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  destination?: Maybe<Scalars['String']>,
  dates?: Maybe<Scalars['String']>,
  archived?: Maybe<Scalars['Datetime']>,
  activeQuoteId?: Maybe<Scalars['UUID']>,
  baseCurrency?: Maybe<Scalars['String']>,
  duration?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['Datetime']>,
  status?: Maybe<Scalars['Int']>,
  agencyId?: Maybe<Scalars['UUID']>,
  agencyMemberId?: Maybe<Scalars['UUID']>,
  customerToCustomerId?: Maybe<FkTripCustomerCustomerIdInput>,
  userToUserId?: Maybe<FkTripUserUserIdInput>,
  mediaGalleryToMediaGalleryId?: Maybe<FkTripMediaGalleryMediaGalleryIdInput>,
  quoteToActiveQuoteId?: Maybe<FkTripQuoteActiveQuoteIdInput>,
  agencyToAgencyId?: Maybe<FkTripAgencyAgencyIdInput>,
  agencyMemberToAgencyMemberId?: Maybe<FkTripAgencyMemberAgencyMemberIdInput>,
  expensesUsingId?: Maybe<FkExpenseTripTripIdInverseInput>,
  invoicesUsingId?: Maybe<FkInvoiceTripTripIdInverseInput>,
  paymentsUsingId?: Maybe<FkPaymentTripTripIdInverseInput>,
  supplierInvoicesUsingId?: Maybe<FkSupplierInvoiceTripTripIdInverseInput>,
  emailsUsingId?: Maybe<FkEmailTripTripIdInverseInput>,
  enquiriesUsingId?: Maybe<FkEnquiryTripTripIdInverseInput>,
  notesUsingId?: Maybe<FkNoteTripTripIdInverseInput>,
  quotesUsingId?: Maybe<FkQuoteTripTripIdInverseInput>,
  testimonialsUsingId?: Maybe<FkTestimonialTripTripIdInverseInput>,
  tripTravellersUsingId?: Maybe<FkTripTravellerTripTripIdInverseInput>,
  tripFlightsUsingId?: Maybe<FkTripFlightTripTripIdInverseInput>,
  quotePublicsUsingId?: Maybe<FakePublicQuotePublicForeignKey0InverseInput>,
};

export type FkTripQuoteActiveQuoteIdInput = {
  connectById?: Maybe<QuotePkQuoteConnect>,
  connectByNodeId?: Maybe<QuoteNodeIdConnect>,
  deleteById?: Maybe<QuotePkQuoteDelete>,
  deleteByNodeId?: Maybe<QuoteNodeIdDelete>,
  updateById?: Maybe<QuoteOnTripForFkTripQuoteActiveQuoteIdUsingPkQuoteUpdate>,
  updateByNodeId?: Maybe<TripOnTripForFkTripQuoteActiveQuoteIdNodeIdUpdate>,
  create?: Maybe<FkTripQuoteActiveQuoteIdQuoteCreateInput>,
};

export type FkTripQuoteActiveQuoteIdInverseInput = {
  deleteOthers?: Maybe<Scalars['Boolean']>,
  connectById?: Maybe<Array<TripPkTripConnect>>,
  connectByNodeId?: Maybe<Array<TripNodeIdConnect>>,
  deleteById?: Maybe<Array<TripPkTripDelete>>,
  deleteByNodeId?: Maybe<Array<TripNodeIdDelete>>,
  updateById?: Maybe<Array<TripOnTripForFkTripQuoteActiveQuoteIdUsingPkTripUpdate>>,
  updateByNodeId?: Maybe<Array<QuoteOnTripForFkTripQuoteActiveQuoteIdNodeIdUpdate>>,
  create?: Maybe<Array<FkTripQuoteActiveQuoteIdTripCreateInput>>,
};

export type FkTripQuoteActiveQuoteIdQuoteCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  duration: Scalars['Int'],
  modified?: Maybe<Scalars['Datetime']>,
  start?: Maybe<Scalars['Datetime']>,
  tripId?: Maybe<Scalars['UUID']>,
  deposit?: Maybe<Scalars['BigFloat']>,
  margin?: Maybe<Scalars['BigFloat']>,
  key?: Maybe<Scalars['String']>,
  expires?: Maybe<Scalars['Datetime']>,
  total?: Maybe<Scalars['BigFloat']>,
  adjustment?: Maybe<Scalars['BigFloat']>,
  baseCurrency?: Maybe<Scalars['String']>,
  shortDescription?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  heroImageId?: Maybe<Scalars['UUID']>,
  exclusions?: Maybe<Scalars['String']>,
  inclusions?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['Int']>,
  agentMargin?: Maybe<Scalars['BigFloat']>,
  travellerCount?: Maybe<Scalars['Int']>,
  archived?: Maybe<Scalars['Datetime']>,
  lastViewed?: Maybe<Scalars['Datetime']>,
  heroId?: Maybe<Scalars['UUID']>,
  userId?: Maybe<Scalars['UUID']>,
  locked?: Maybe<Scalars['Datetime']>,
  tripToTripId?: Maybe<FkQuoteTripTripIdInput>,
  mediaItemToHeroImageId?: Maybe<FkQuoteMediaItemHeroImageIdInput>,
  quoteHeroToHeroId?: Maybe<FkQuoteQuoteHeroHeroIdInput>,
  userToUserId?: Maybe<FkQuoteUserUserIdInput>,
  invoicesUsingId?: Maybe<FkInvoiceQuoteQuoteIdInverseInput>,
  tripsUsingId?: Maybe<FkTripQuoteActiveQuoteIdInverseInput>,
  emailsUsingId?: Maybe<FkEmailQuoteQuoteIdInverseInput>,
  quoteViewsUsingId?: Maybe<FkQuoteViewQuoteQuoteIdInverseInput>,
  quoteAccommodationDetailsUsingId?: Maybe<FkQuoteAccommodationDetailQuoteQuoteIdInverseInput>,
  quoteCurrenciesUsingId?: Maybe<FkQuoteCurrencyQuoteQuoteIdInverseInput>,
  quoteDaysUsingId?: Maybe<FkQuoteDayQuoteQuoteIdInverseInput>,
  quoteFinanceLineItemsUsingId?: Maybe<FkQuoteFinanceLineItemQuoteQuoteIdInverseInput>,
};

export type FkTripQuoteActiveQuoteIdTripCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  customerId?: Maybe<Scalars['UUID']>,
  userId?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  destination?: Maybe<Scalars['String']>,
  dates?: Maybe<Scalars['String']>,
  archived?: Maybe<Scalars['Datetime']>,
  mediaGalleryId?: Maybe<Scalars['UUID']>,
  baseCurrency?: Maybe<Scalars['String']>,
  duration?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['Datetime']>,
  status?: Maybe<Scalars['Int']>,
  agencyId?: Maybe<Scalars['UUID']>,
  agencyMemberId?: Maybe<Scalars['UUID']>,
  customerToCustomerId?: Maybe<FkTripCustomerCustomerIdInput>,
  userToUserId?: Maybe<FkTripUserUserIdInput>,
  mediaGalleryToMediaGalleryId?: Maybe<FkTripMediaGalleryMediaGalleryIdInput>,
  quoteToActiveQuoteId?: Maybe<FkTripQuoteActiveQuoteIdInput>,
  agencyToAgencyId?: Maybe<FkTripAgencyAgencyIdInput>,
  agencyMemberToAgencyMemberId?: Maybe<FkTripAgencyMemberAgencyMemberIdInput>,
  expensesUsingId?: Maybe<FkExpenseTripTripIdInverseInput>,
  invoicesUsingId?: Maybe<FkInvoiceTripTripIdInverseInput>,
  paymentsUsingId?: Maybe<FkPaymentTripTripIdInverseInput>,
  supplierInvoicesUsingId?: Maybe<FkSupplierInvoiceTripTripIdInverseInput>,
  emailsUsingId?: Maybe<FkEmailTripTripIdInverseInput>,
  enquiriesUsingId?: Maybe<FkEnquiryTripTripIdInverseInput>,
  notesUsingId?: Maybe<FkNoteTripTripIdInverseInput>,
  quotesUsingId?: Maybe<FkQuoteTripTripIdInverseInput>,
  testimonialsUsingId?: Maybe<FkTestimonialTripTripIdInverseInput>,
  tripTravellersUsingId?: Maybe<FkTripTravellerTripTripIdInverseInput>,
  tripFlightsUsingId?: Maybe<FkTripFlightTripTripIdInverseInput>,
  quotePublicsUsingId?: Maybe<FakePublicQuotePublicForeignKey0InverseInput>,
};

export type FkTripTravellerTravellerTravellerIdInput = {
  connectById?: Maybe<TravellerPkTravellerConnect>,
  connectByNodeId?: Maybe<TravellerNodeIdConnect>,
  deleteById?: Maybe<TravellerPkTravellerDelete>,
  deleteByNodeId?: Maybe<TravellerNodeIdDelete>,
  updateById?: Maybe<TravellerOnTripTravellerForFkTripTravellerTravellerTravellerIdUsingPkTravellerUpdate>,
  updateByNodeId?: Maybe<TripTravellerOnTripTravellerForFkTripTravellerTravellerTravellerIdNodeIdUpdate>,
  create?: Maybe<FkTripTravellerTravellerTravellerIdTravellerCreateInput>,
};

export type FkTripTravellerTravellerTravellerIdInverseInput = {
  deleteOthers?: Maybe<Scalars['Boolean']>,
  connectById?: Maybe<Array<TripTravellerPkTripTravellerConnect>>,
  connectByNodeId?: Maybe<Array<TripTravellerNodeIdConnect>>,
  deleteById?: Maybe<Array<TripTravellerPkTripTravellerDelete>>,
  deleteByNodeId?: Maybe<Array<TripTravellerNodeIdDelete>>,
  updateById?: Maybe<Array<TripTravellerOnTripTravellerForFkTripTravellerTravellerTravellerIdUsingPkTripTravellerUpdate>>,
  updateByNodeId?: Maybe<Array<TravellerOnTripTravellerForFkTripTravellerTravellerTravellerIdNodeIdUpdate>>,
  create?: Maybe<Array<FkTripTravellerTravellerTravellerIdTripTravellerCreateInput>>,
};

export type FkTripTravellerTravellerTravellerIdTravellerCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  dateOfBirth: Scalars['Datetime'],
  dietaryRequirements?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  height: Scalars['Int'],
  lastName?: Maybe<Scalars['String']>,
  medicalConditions?: Maybe<Scalars['String']>,
  middleName?: Maybe<Scalars['String']>,
  modified?: Maybe<Scalars['Datetime']>,
  nationality?: Maybe<Scalars['String']>,
  notes?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  weight: Scalars['Int'],
  emergencyContact?: Maybe<Scalars['String']>,
  insuranceDetails?: Maybe<Scalars['String']>,
  customerTravellersUsingId?: Maybe<FkCustomerTravellerTravellerTravellerIdInverseInput>,
  passportsUsingId?: Maybe<FkPassportTravellerTravellerIdInverseInput>,
  tripTravellersUsingId?: Maybe<FkTripTravellerTravellerTravellerIdInverseInput>,
};

export type FkTripTravellerTravellerTravellerIdTripTravellerCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  tripId?: Maybe<Scalars['UUID']>,
  travellerToTravellerId?: Maybe<FkTripTravellerTravellerTravellerIdInput>,
  tripToTripId?: Maybe<FkTripTravellerTripTripIdInput>,
};

export type FkTripTravellerTripTripIdInput = {
  connectById?: Maybe<TripPkTripConnect>,
  connectByNodeId?: Maybe<TripNodeIdConnect>,
  deleteById?: Maybe<TripPkTripDelete>,
  deleteByNodeId?: Maybe<TripNodeIdDelete>,
  updateById?: Maybe<TripOnTripTravellerForFkTripTravellerTripTripIdUsingPkTripUpdate>,
  updateByNodeId?: Maybe<TripTravellerOnTripTravellerForFkTripTravellerTripTripIdNodeIdUpdate>,
  create?: Maybe<FkTripTravellerTripTripIdTripCreateInput>,
};

export type FkTripTravellerTripTripIdInverseInput = {
  deleteOthers?: Maybe<Scalars['Boolean']>,
  connectById?: Maybe<Array<TripTravellerPkTripTravellerConnect>>,
  connectByNodeId?: Maybe<Array<TripTravellerNodeIdConnect>>,
  deleteById?: Maybe<Array<TripTravellerPkTripTravellerDelete>>,
  deleteByNodeId?: Maybe<Array<TripTravellerNodeIdDelete>>,
  updateById?: Maybe<Array<TripTravellerOnTripTravellerForFkTripTravellerTripTripIdUsingPkTripTravellerUpdate>>,
  updateByNodeId?: Maybe<Array<TripOnTripTravellerForFkTripTravellerTripTripIdNodeIdUpdate>>,
  create?: Maybe<Array<FkTripTravellerTripTripIdTripTravellerCreateInput>>,
};

export type FkTripTravellerTripTripIdTripCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  customerId?: Maybe<Scalars['UUID']>,
  userId?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  destination?: Maybe<Scalars['String']>,
  dates?: Maybe<Scalars['String']>,
  archived?: Maybe<Scalars['Datetime']>,
  mediaGalleryId?: Maybe<Scalars['UUID']>,
  activeQuoteId?: Maybe<Scalars['UUID']>,
  baseCurrency?: Maybe<Scalars['String']>,
  duration?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['Datetime']>,
  status?: Maybe<Scalars['Int']>,
  agencyId?: Maybe<Scalars['UUID']>,
  agencyMemberId?: Maybe<Scalars['UUID']>,
  customerToCustomerId?: Maybe<FkTripCustomerCustomerIdInput>,
  userToUserId?: Maybe<FkTripUserUserIdInput>,
  mediaGalleryToMediaGalleryId?: Maybe<FkTripMediaGalleryMediaGalleryIdInput>,
  quoteToActiveQuoteId?: Maybe<FkTripQuoteActiveQuoteIdInput>,
  agencyToAgencyId?: Maybe<FkTripAgencyAgencyIdInput>,
  agencyMemberToAgencyMemberId?: Maybe<FkTripAgencyMemberAgencyMemberIdInput>,
  expensesUsingId?: Maybe<FkExpenseTripTripIdInverseInput>,
  invoicesUsingId?: Maybe<FkInvoiceTripTripIdInverseInput>,
  paymentsUsingId?: Maybe<FkPaymentTripTripIdInverseInput>,
  supplierInvoicesUsingId?: Maybe<FkSupplierInvoiceTripTripIdInverseInput>,
  emailsUsingId?: Maybe<FkEmailTripTripIdInverseInput>,
  enquiriesUsingId?: Maybe<FkEnquiryTripTripIdInverseInput>,
  notesUsingId?: Maybe<FkNoteTripTripIdInverseInput>,
  quotesUsingId?: Maybe<FkQuoteTripTripIdInverseInput>,
  testimonialsUsingId?: Maybe<FkTestimonialTripTripIdInverseInput>,
  tripTravellersUsingId?: Maybe<FkTripTravellerTripTripIdInverseInput>,
  tripFlightsUsingId?: Maybe<FkTripFlightTripTripIdInverseInput>,
  quotePublicsUsingId?: Maybe<FakePublicQuotePublicForeignKey0InverseInput>,
};

export type FkTripTravellerTripTripIdTripTravellerCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  travellerId?: Maybe<Scalars['UUID']>,
  travellerToTravellerId?: Maybe<FkTripTravellerTravellerTravellerIdInput>,
  tripToTripId?: Maybe<FkTripTravellerTripTripIdInput>,
};

export type FkTripUserUserIdInput = {
  connectById?: Maybe<UserPkUserConnect>,
  connectByNodeId?: Maybe<UserNodeIdConnect>,
  deleteById?: Maybe<UserPkUserDelete>,
  deleteByNodeId?: Maybe<UserNodeIdDelete>,
  updateById?: Maybe<UserOnTripForFkTripUserUserIdUsingPkUserUpdate>,
  updateByNodeId?: Maybe<TripOnTripForFkTripUserUserIdNodeIdUpdate>,
  create?: Maybe<FkTripUserUserIdUserCreateInput>,
};

export type FkTripUserUserIdInverseInput = {
  deleteOthers?: Maybe<Scalars['Boolean']>,
  connectById?: Maybe<Array<TripPkTripConnect>>,
  connectByNodeId?: Maybe<Array<TripNodeIdConnect>>,
  deleteById?: Maybe<Array<TripPkTripDelete>>,
  deleteByNodeId?: Maybe<Array<TripNodeIdDelete>>,
  updateById?: Maybe<Array<TripOnTripForFkTripUserUserIdUsingPkTripUpdate>>,
  updateByNodeId?: Maybe<Array<UserOnTripForFkTripUserUserIdNodeIdUpdate>>,
  create?: Maybe<Array<FkTripUserUserIdTripCreateInput>>,
};

export type FkTripUserUserIdTripCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  customerId?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  destination?: Maybe<Scalars['String']>,
  dates?: Maybe<Scalars['String']>,
  archived?: Maybe<Scalars['Datetime']>,
  mediaGalleryId?: Maybe<Scalars['UUID']>,
  activeQuoteId?: Maybe<Scalars['UUID']>,
  baseCurrency?: Maybe<Scalars['String']>,
  duration?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['Datetime']>,
  status?: Maybe<Scalars['Int']>,
  agencyId?: Maybe<Scalars['UUID']>,
  agencyMemberId?: Maybe<Scalars['UUID']>,
  customerToCustomerId?: Maybe<FkTripCustomerCustomerIdInput>,
  userToUserId?: Maybe<FkTripUserUserIdInput>,
  mediaGalleryToMediaGalleryId?: Maybe<FkTripMediaGalleryMediaGalleryIdInput>,
  quoteToActiveQuoteId?: Maybe<FkTripQuoteActiveQuoteIdInput>,
  agencyToAgencyId?: Maybe<FkTripAgencyAgencyIdInput>,
  agencyMemberToAgencyMemberId?: Maybe<FkTripAgencyMemberAgencyMemberIdInput>,
  expensesUsingId?: Maybe<FkExpenseTripTripIdInverseInput>,
  invoicesUsingId?: Maybe<FkInvoiceTripTripIdInverseInput>,
  paymentsUsingId?: Maybe<FkPaymentTripTripIdInverseInput>,
  supplierInvoicesUsingId?: Maybe<FkSupplierInvoiceTripTripIdInverseInput>,
  emailsUsingId?: Maybe<FkEmailTripTripIdInverseInput>,
  enquiriesUsingId?: Maybe<FkEnquiryTripTripIdInverseInput>,
  notesUsingId?: Maybe<FkNoteTripTripIdInverseInput>,
  quotesUsingId?: Maybe<FkQuoteTripTripIdInverseInput>,
  testimonialsUsingId?: Maybe<FkTestimonialTripTripIdInverseInput>,
  tripTravellersUsingId?: Maybe<FkTripTravellerTripTripIdInverseInput>,
  tripFlightsUsingId?: Maybe<FkTripFlightTripTripIdInverseInput>,
  quotePublicsUsingId?: Maybe<FakePublicQuotePublicForeignKey0InverseInput>,
};

export type FkTripUserUserIdUserCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  email?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  skype?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  genderPreposition?: Maybe<Scalars['String']>,
  externalId?: Maybe<Scalars['String']>,
  name: Scalars['String'],
  tripsUsingId?: Maybe<FkTripUserUserIdInverseInput>,
  emailsUsingId?: Maybe<FkEmailUserUserIdInverseInput>,
  notesUsingId?: Maybe<FkNoteUserUserIdInverseInput>,
  quotesUsingId?: Maybe<FkQuoteUserUserIdInverseInput>,
  remindersUsingId?: Maybe<FkReminderUserUserIdInverseInput>,
  transactionNotesUsingId?: Maybe<FkTransactionNoteUserUserIdInverseInput>,
  quotePublicsUsingId?: Maybe<FakePublicQuotePublicForeignKey2InverseInput>,
};

export type FloatFilter = {
  isNull?: Maybe<Scalars['Boolean']>,
  equalTo?: Maybe<Scalars['Float']>,
  notEqualTo?: Maybe<Scalars['Float']>,
  distinctFrom?: Maybe<Scalars['Float']>,
  notDistinctFrom?: Maybe<Scalars['Float']>,
  in?: Maybe<Array<Scalars['Float']>>,
  notIn?: Maybe<Array<Scalars['Float']>>,
  lessThan?: Maybe<Scalars['Float']>,
  lessThanOrEqualTo?: Maybe<Scalars['Float']>,
  greaterThan?: Maybe<Scalars['Float']>,
  greaterThanOrEqualTo?: Maybe<Scalars['Float']>,
};

export type GenericResponse = {
   __typename?: 'GenericResponse',
  success: Scalars['Boolean'],
  message?: Maybe<Scalars['String']>,
};

export type IntFilter = {
  isNull?: Maybe<Scalars['Boolean']>,
  equalTo?: Maybe<Scalars['Int']>,
  notEqualTo?: Maybe<Scalars['Int']>,
  distinctFrom?: Maybe<Scalars['Int']>,
  notDistinctFrom?: Maybe<Scalars['Int']>,
  in?: Maybe<Array<Scalars['Int']>>,
  notIn?: Maybe<Array<Scalars['Int']>>,
  lessThan?: Maybe<Scalars['Int']>,
  lessThanOrEqualTo?: Maybe<Scalars['Int']>,
  greaterThan?: Maybe<Scalars['Int']>,
  greaterThanOrEqualTo?: Maybe<Scalars['Int']>,
};

export type Invoice = Node & {
   __typename?: 'Invoice',
  nodeId: Scalars['ID'],
  id: Scalars['UUID'],
  amount: Scalars['BigFloat'],
  created: Scalars['Datetime'],
  currency?: Maybe<Scalars['String']>,
  due: Scalars['Datetime'],
  key?: Maybe<Scalars['String']>,
  modified: Scalars['Datetime'],
  summary?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>,
  number: Scalars['Int'],
  quoteId?: Maybe<Scalars['UUID']>,
  voided?: Maybe<Scalars['Datetime']>,
  categoryId?: Maybe<Scalars['UUID']>,
  tripId?: Maybe<Scalars['UUID']>,
  paid?: Maybe<Scalars['Datetime']>,
  note?: Maybe<Scalars['String']>,
  invoiced: Scalars['Datetime'],
  locked?: Maybe<Scalars['Datetime']>,
  quote?: Maybe<Quote>,
  category?: Maybe<FinanceCategory>,
  trip?: Maybe<Trip>,
  expenses: ExpensesConnection,
  payments: PaymentsConnection,
  transactionLinks: TransactionLinksConnection,
};


export type InvoiceExpensesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<ExpensesOrderBy>>,
  condition?: Maybe<ExpenseCondition>,
  filter?: Maybe<ExpenseFilter>
};


export type InvoicePaymentsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<PaymentsOrderBy>>,
  condition?: Maybe<PaymentCondition>,
  filter?: Maybe<PaymentFilter>
};


export type InvoiceTransactionLinksArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<TransactionLinksOrderBy>>,
  condition?: Maybe<TransactionLinkCondition>,
  filter?: Maybe<TransactionLinkFilter>
};

export type InvoiceCondition = {
  id?: Maybe<Scalars['UUID']>,
  amount?: Maybe<Scalars['BigFloat']>,
  created?: Maybe<Scalars['Datetime']>,
  currency?: Maybe<Scalars['String']>,
  due?: Maybe<Scalars['Datetime']>,
  key?: Maybe<Scalars['String']>,
  modified?: Maybe<Scalars['Datetime']>,
  summary?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>,
  number?: Maybe<Scalars['Int']>,
  quoteId?: Maybe<Scalars['UUID']>,
  voided?: Maybe<Scalars['Datetime']>,
  categoryId?: Maybe<Scalars['UUID']>,
  tripId?: Maybe<Scalars['UUID']>,
  paid?: Maybe<Scalars['Datetime']>,
  note?: Maybe<Scalars['String']>,
  invoiced?: Maybe<Scalars['Datetime']>,
  locked?: Maybe<Scalars['Datetime']>,
};

export type InvoiceFilter = {
  id?: Maybe<UuidFilter>,
  amount?: Maybe<BigFloatFilter>,
  created?: Maybe<DatetimeFilter>,
  currency?: Maybe<StringFilter>,
  due?: Maybe<DatetimeFilter>,
  key?: Maybe<StringFilter>,
  modified?: Maybe<DatetimeFilter>,
  summary?: Maybe<StringFilter>,
  type?: Maybe<StringFilter>,
  number?: Maybe<IntFilter>,
  quoteId?: Maybe<UuidFilter>,
  voided?: Maybe<DatetimeFilter>,
  categoryId?: Maybe<UuidFilter>,
  tripId?: Maybe<UuidFilter>,
  paid?: Maybe<DatetimeFilter>,
  note?: Maybe<StringFilter>,
  invoiced?: Maybe<DatetimeFilter>,
  locked?: Maybe<DatetimeFilter>,
  expenses?: Maybe<InvoiceToManyExpenseFilter>,
  expensesExist?: Maybe<Scalars['Boolean']>,
  payments?: Maybe<InvoiceToManyPaymentFilter>,
  paymentsExist?: Maybe<Scalars['Boolean']>,
  transactionLinks?: Maybe<InvoiceToManyTransactionLinkFilter>,
  transactionLinksExist?: Maybe<Scalars['Boolean']>,
  quote?: Maybe<QuoteFilter>,
  quoteExists?: Maybe<Scalars['Boolean']>,
  category?: Maybe<FinanceCategoryFilter>,
  categoryExists?: Maybe<Scalars['Boolean']>,
  trip?: Maybe<TripFilter>,
  tripExists?: Maybe<Scalars['Boolean']>,
  and?: Maybe<Array<InvoiceFilter>>,
  or?: Maybe<Array<InvoiceFilter>>,
  not?: Maybe<InvoiceFilter>,
};

export type InvoiceInput = {
  id?: Maybe<Scalars['UUID']>,
  amount: Scalars['BigFloat'],
  created?: Maybe<Scalars['Datetime']>,
  currency?: Maybe<Scalars['String']>,
  due: Scalars['Datetime'],
  key?: Maybe<Scalars['String']>,
  modified?: Maybe<Scalars['Datetime']>,
  summary?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>,
  number?: Maybe<Scalars['Int']>,
  quoteId?: Maybe<Scalars['UUID']>,
  voided?: Maybe<Scalars['Datetime']>,
  categoryId?: Maybe<Scalars['UUID']>,
  tripId?: Maybe<Scalars['UUID']>,
  paid?: Maybe<Scalars['Datetime']>,
  note?: Maybe<Scalars['String']>,
  invoiced?: Maybe<Scalars['Datetime']>,
  locked?: Maybe<Scalars['Datetime']>,
  quoteToQuoteId?: Maybe<FkInvoiceQuoteQuoteIdInput>,
  financeCategoryToCategoryId?: Maybe<FkInvoiceFinanceCategoryCategoryIdInput>,
  tripToTripId?: Maybe<FkInvoiceTripTripIdInput>,
  expensesUsingId?: Maybe<FkExpenseInvoiceInvoiceIdInverseInput>,
  paymentsUsingId?: Maybe<FkPaymentInvoiceInvoiceIdInverseInput>,
  transactionLinksUsingId?: Maybe<FkTransactionLinkInvoiceInvoiceIdInverseInput>,
};

export type InvoiceNodeIdConnect = {
  nodeId: Scalars['ID'],
};

export type InvoiceNodeIdDelete = {
  nodeId: Scalars['ID'],
};

export type InvoiceOnExpenseForFkExpenseInvoiceInvoiceIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: ExpensePatch,
};

export type InvoiceOnExpenseForFkExpenseInvoiceInvoiceIdUsingPkInvoiceUpdate = {
  patch: UpdateInvoiceOnExpenseForFkExpenseInvoiceInvoiceIdPatch,
  id: Scalars['UUID'],
};

export type InvoiceOnInvoiceForFkInvoiceFinanceCategoryCategoryIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: FinanceCategoryPatch,
};

export type InvoiceOnInvoiceForFkInvoiceFinanceCategoryCategoryIdUsingPkInvoiceUpdate = {
  patch: UpdateInvoiceOnInvoiceForFkInvoiceFinanceCategoryCategoryIdPatch,
  id: Scalars['UUID'],
};

export type InvoiceOnInvoiceForFkInvoiceQuoteQuoteIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: QuotePatch,
};

export type InvoiceOnInvoiceForFkInvoiceQuoteQuoteIdUsingPkInvoiceUpdate = {
  patch: UpdateInvoiceOnInvoiceForFkInvoiceQuoteQuoteIdPatch,
  id: Scalars['UUID'],
};

export type InvoiceOnInvoiceForFkInvoiceTripTripIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: TripPatch,
};

export type InvoiceOnInvoiceForFkInvoiceTripTripIdUsingPkInvoiceUpdate = {
  patch: UpdateInvoiceOnInvoiceForFkInvoiceTripTripIdPatch,
  id: Scalars['UUID'],
};

export type InvoiceOnPaymentForFkPaymentInvoiceInvoiceIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: PaymentPatch,
};

export type InvoiceOnPaymentForFkPaymentInvoiceInvoiceIdUsingPkInvoiceUpdate = {
  patch: UpdateInvoiceOnPaymentForFkPaymentInvoiceInvoiceIdPatch,
  id: Scalars['UUID'],
};

export type InvoiceOnTransactionLinkForFkTransactionLinkInvoiceInvoiceIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: TransactionLinkPatch,
};

export type InvoiceOnTransactionLinkForFkTransactionLinkInvoiceInvoiceIdUsingPkInvoiceUpdate = {
  patch: UpdateInvoiceOnTransactionLinkForFkTransactionLinkInvoiceInvoiceIdPatch,
  id: Scalars['UUID'],
};

export type InvoicePatch = {
  id?: Maybe<Scalars['UUID']>,
  amount?: Maybe<Scalars['BigFloat']>,
  created?: Maybe<Scalars['Datetime']>,
  currency?: Maybe<Scalars['String']>,
  due?: Maybe<Scalars['Datetime']>,
  key?: Maybe<Scalars['String']>,
  modified?: Maybe<Scalars['Datetime']>,
  summary?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>,
  number?: Maybe<Scalars['Int']>,
  quoteId?: Maybe<Scalars['UUID']>,
  voided?: Maybe<Scalars['Datetime']>,
  categoryId?: Maybe<Scalars['UUID']>,
  tripId?: Maybe<Scalars['UUID']>,
  paid?: Maybe<Scalars['Datetime']>,
  note?: Maybe<Scalars['String']>,
  invoiced?: Maybe<Scalars['Datetime']>,
  locked?: Maybe<Scalars['Datetime']>,
  quoteToQuoteId?: Maybe<FkInvoiceQuoteQuoteIdInput>,
  financeCategoryToCategoryId?: Maybe<FkInvoiceFinanceCategoryCategoryIdInput>,
  tripToTripId?: Maybe<FkInvoiceTripTripIdInput>,
  expensesUsingId?: Maybe<FkExpenseInvoiceInvoiceIdInverseInput>,
  paymentsUsingId?: Maybe<FkPaymentInvoiceInvoiceIdInverseInput>,
  transactionLinksUsingId?: Maybe<FkTransactionLinkInvoiceInvoiceIdInverseInput>,
};

export type InvoicePkInvoiceConnect = {
  id: Scalars['UUID'],
};

export type InvoicePkInvoiceDelete = {
  id: Scalars['UUID'],
};

export type InvoicePublic = Node & {
   __typename?: 'InvoicePublic',
  nodeId: Scalars['ID'],
  id: Scalars['UUID'],
  due?: Maybe<Scalars['Datetime']>,
  paid?: Maybe<Scalars['Datetime']>,
  number?: Maybe<Scalars['Int']>,
  amount?: Maybe<Scalars['BigFloat']>,
  currency?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  invoiced?: Maybe<Scalars['Datetime']>,
  amountPaid?: Maybe<Scalars['BigFloat']>,
  amountDue?: Maybe<Scalars['BigFloat']>,
  trip?: Maybe<Scalars['String']>,
  tripId?: Maybe<Scalars['UUID']>,
  categoryId?: Maybe<Scalars['UUID']>,
  key?: Maybe<Scalars['String']>,
};

export type InvoicePublicCondition = {
  id?: Maybe<Scalars['UUID']>,
  due?: Maybe<Scalars['Datetime']>,
  paid?: Maybe<Scalars['Datetime']>,
  number?: Maybe<Scalars['Int']>,
  amount?: Maybe<Scalars['BigFloat']>,
  currency?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  invoiced?: Maybe<Scalars['Datetime']>,
  amountPaid?: Maybe<Scalars['BigFloat']>,
  amountDue?: Maybe<Scalars['BigFloat']>,
  trip?: Maybe<Scalars['String']>,
  tripId?: Maybe<Scalars['UUID']>,
  categoryId?: Maybe<Scalars['UUID']>,
  key?: Maybe<Scalars['String']>,
};

export type InvoicePublicFilter = {
  id?: Maybe<UuidFilter>,
  due?: Maybe<DatetimeFilter>,
  paid?: Maybe<DatetimeFilter>,
  number?: Maybe<IntFilter>,
  amount?: Maybe<BigFloatFilter>,
  currency?: Maybe<StringFilter>,
  summary?: Maybe<StringFilter>,
  invoiced?: Maybe<DatetimeFilter>,
  amountPaid?: Maybe<BigFloatFilter>,
  amountDue?: Maybe<BigFloatFilter>,
  trip?: Maybe<StringFilter>,
  tripId?: Maybe<UuidFilter>,
  categoryId?: Maybe<UuidFilter>,
  key?: Maybe<StringFilter>,
  and?: Maybe<Array<InvoicePublicFilter>>,
  or?: Maybe<Array<InvoicePublicFilter>>,
  not?: Maybe<InvoicePublicFilter>,
};

export type InvoicePublicsConnection = {
   __typename?: 'InvoicePublicsConnection',
  nodes: Array<Maybe<InvoicePublic>>,
  edges: Array<InvoicePublicsEdge>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
};

export type InvoicePublicsEdge = {
   __typename?: 'InvoicePublicsEdge',
  cursor?: Maybe<Scalars['Cursor']>,
  node?: Maybe<InvoicePublic>,
};

export enum InvoicePublicsOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  DueAsc = 'DUE_ASC',
  DueDesc = 'DUE_DESC',
  PaidAsc = 'PAID_ASC',
  PaidDesc = 'PAID_DESC',
  NumberAsc = 'NUMBER_ASC',
  NumberDesc = 'NUMBER_DESC',
  AmountAsc = 'AMOUNT_ASC',
  AmountDesc = 'AMOUNT_DESC',
  CurrencyAsc = 'CURRENCY_ASC',
  CurrencyDesc = 'CURRENCY_DESC',
  SummaryAsc = 'SUMMARY_ASC',
  SummaryDesc = 'SUMMARY_DESC',
  InvoicedAsc = 'INVOICED_ASC',
  InvoicedDesc = 'INVOICED_DESC',
  AmountPaidAsc = 'AMOUNT_PAID_ASC',
  AmountPaidDesc = 'AMOUNT_PAID_DESC',
  AmountDueAsc = 'AMOUNT_DUE_ASC',
  AmountDueDesc = 'AMOUNT_DUE_DESC',
  TripAsc = 'TRIP_ASC',
  TripDesc = 'TRIP_DESC',
  TripIdAsc = 'TRIP_ID_ASC',
  TripIdDesc = 'TRIP_ID_DESC',
  CategoryIdAsc = 'CATEGORY_ID_ASC',
  CategoryIdDesc = 'CATEGORY_ID_DESC',
  KeyAsc = 'KEY_ASC',
  KeyDesc = 'KEY_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type InvoicesConnection = {
   __typename?: 'InvoicesConnection',
  nodes: Array<Maybe<Invoice>>,
  edges: Array<InvoicesEdge>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
};

export type InvoicesEdge = {
   __typename?: 'InvoicesEdge',
  cursor?: Maybe<Scalars['Cursor']>,
  node?: Maybe<Invoice>,
};

export enum InvoicesOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  AmountAsc = 'AMOUNT_ASC',
  AmountDesc = 'AMOUNT_DESC',
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  CurrencyAsc = 'CURRENCY_ASC',
  CurrencyDesc = 'CURRENCY_DESC',
  DueAsc = 'DUE_ASC',
  DueDesc = 'DUE_DESC',
  KeyAsc = 'KEY_ASC',
  KeyDesc = 'KEY_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC',
  SummaryAsc = 'SUMMARY_ASC',
  SummaryDesc = 'SUMMARY_DESC',
  TypeAsc = 'TYPE_ASC',
  TypeDesc = 'TYPE_DESC',
  NumberAsc = 'NUMBER_ASC',
  NumberDesc = 'NUMBER_DESC',
  QuoteIdAsc = 'QUOTE_ID_ASC',
  QuoteIdDesc = 'QUOTE_ID_DESC',
  VoidedAsc = 'VOIDED_ASC',
  VoidedDesc = 'VOIDED_DESC',
  CategoryIdAsc = 'CATEGORY_ID_ASC',
  CategoryIdDesc = 'CATEGORY_ID_DESC',
  TripIdAsc = 'TRIP_ID_ASC',
  TripIdDesc = 'TRIP_ID_DESC',
  PaidAsc = 'PAID_ASC',
  PaidDesc = 'PAID_DESC',
  NoteAsc = 'NOTE_ASC',
  NoteDesc = 'NOTE_DESC',
  InvoicedAsc = 'INVOICED_ASC',
  InvoicedDesc = 'INVOICED_DESC',
  LockedAsc = 'LOCKED_ASC',
  LockedDesc = 'LOCKED_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type InvoiceSummariesConnection = {
   __typename?: 'InvoiceSummariesConnection',
  nodes: Array<Maybe<InvoiceSummary>>,
  edges: Array<InvoiceSummariesEdge>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
};

export type InvoiceSummariesEdge = {
   __typename?: 'InvoiceSummariesEdge',
  cursor?: Maybe<Scalars['Cursor']>,
  node?: Maybe<InvoiceSummary>,
};

export enum InvoiceSummariesOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  PaidAsc = 'PAID_ASC',
  PaidDesc = 'PAID_DESC',
  PaidActualAsc = 'PAID_ACTUAL_ASC',
  PaidActualDesc = 'PAID_ACTUAL_DESC',
  OutstandingAsc = 'OUTSTANDING_ASC',
  OutstandingDesc = 'OUTSTANDING_DESC'
}

export type InvoiceSummary = {
   __typename?: 'InvoiceSummary',
  id?: Maybe<Scalars['UUID']>,
  paid?: Maybe<Scalars['BigFloat']>,
  paidActual?: Maybe<Scalars['BigFloat']>,
  outstanding?: Maybe<Scalars['BigFloat']>,
};

export type InvoiceSummaryCondition = {
  id?: Maybe<Scalars['UUID']>,
  paid?: Maybe<Scalars['BigFloat']>,
  paidActual?: Maybe<Scalars['BigFloat']>,
  outstanding?: Maybe<Scalars['BigFloat']>,
};

export type InvoiceSummaryFilter = {
  id?: Maybe<UuidFilter>,
  paid?: Maybe<BigFloatFilter>,
  paidActual?: Maybe<BigFloatFilter>,
  outstanding?: Maybe<BigFloatFilter>,
  and?: Maybe<Array<InvoiceSummaryFilter>>,
  or?: Maybe<Array<InvoiceSummaryFilter>>,
  not?: Maybe<InvoiceSummaryFilter>,
};

export type InvoiceToManyExpenseFilter = {
  every?: Maybe<ExpenseFilter>,
  some?: Maybe<ExpenseFilter>,
  none?: Maybe<ExpenseFilter>,
};

export type InvoiceToManyPaymentFilter = {
  every?: Maybe<PaymentFilter>,
  some?: Maybe<PaymentFilter>,
  none?: Maybe<PaymentFilter>,
};

export type InvoiceToManyTransactionLinkFilter = {
  every?: Maybe<TransactionLinkFilter>,
  some?: Maybe<TransactionLinkFilter>,
  none?: Maybe<TransactionLinkFilter>,
};

export type MapPoint = Node & {
   __typename?: 'MapPoint',
  nodeId: Scalars['ID'],
  id: Scalars['UUID'],
  created: Scalars['Datetime'],
  modified: Scalars['Datetime'],
  name?: Maybe<Scalars['String']>,
  latitude: Scalars['Float'],
  longitude: Scalars['Float'],
  properties: PropertiesConnection,
};


export type MapPointPropertiesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<PropertiesOrderBy>>,
  condition?: Maybe<PropertyCondition>,
  filter?: Maybe<PropertyFilter>
};

export type MapPointCondition = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  latitude?: Maybe<Scalars['Float']>,
  longitude?: Maybe<Scalars['Float']>,
};

export type MapPointFilter = {
  id?: Maybe<UuidFilter>,
  created?: Maybe<DatetimeFilter>,
  modified?: Maybe<DatetimeFilter>,
  name?: Maybe<StringFilter>,
  latitude?: Maybe<FloatFilter>,
  longitude?: Maybe<FloatFilter>,
  properties?: Maybe<MapPointToManyPropertyFilter>,
  propertiesExist?: Maybe<Scalars['Boolean']>,
  and?: Maybe<Array<MapPointFilter>>,
  or?: Maybe<Array<MapPointFilter>>,
  not?: Maybe<MapPointFilter>,
};

export type MapPointInput = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  latitude: Scalars['Float'],
  longitude: Scalars['Float'],
  propertiesUsingId?: Maybe<FkPropertyMapPointMapPointIdInverseInput>,
};

export type MapPointNodeIdConnect = {
  nodeId: Scalars['ID'],
};

export type MapPointNodeIdDelete = {
  nodeId: Scalars['ID'],
};

export type MapPointOnPropertyForFkPropertyMapPointMapPointIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: PropertyPatch,
};

export type MapPointOnPropertyForFkPropertyMapPointMapPointIdUsingPkMapPointUpdate = {
  patch: UpdateMapPointOnPropertyForFkPropertyMapPointMapPointIdPatch,
  id: Scalars['UUID'],
};

export type MapPointPatch = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  latitude?: Maybe<Scalars['Float']>,
  longitude?: Maybe<Scalars['Float']>,
  propertiesUsingId?: Maybe<FkPropertyMapPointMapPointIdInverseInput>,
};

export type MapPointPkMapPointConnect = {
  id: Scalars['UUID'],
};

export type MapPointPkMapPointDelete = {
  id: Scalars['UUID'],
};

export type MapPointsConnection = {
   __typename?: 'MapPointsConnection',
  nodes: Array<Maybe<MapPoint>>,
  edges: Array<MapPointsEdge>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
};

export type MapPointsEdge = {
   __typename?: 'MapPointsEdge',
  cursor?: Maybe<Scalars['Cursor']>,
  node?: Maybe<MapPoint>,
};

export enum MapPointsOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  LatitudeAsc = 'LATITUDE_ASC',
  LatitudeDesc = 'LATITUDE_DESC',
  LongitudeAsc = 'LONGITUDE_ASC',
  LongitudeDesc = 'LONGITUDE_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type MapPointToManyPropertyFilter = {
  every?: Maybe<PropertyFilter>,
  some?: Maybe<PropertyFilter>,
  none?: Maybe<PropertyFilter>,
};

export type MediaGalleriesConnection = {
   __typename?: 'MediaGalleriesConnection',
  nodes: Array<Maybe<MediaGallery>>,
  edges: Array<MediaGalleriesEdge>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
};

export type MediaGalleriesEdge = {
   __typename?: 'MediaGalleriesEdge',
  cursor?: Maybe<Scalars['Cursor']>,
  node?: Maybe<MediaGallery>,
};

export enum MediaGalleriesOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  ParentIdAsc = 'PARENT_ID_ASC',
  ParentIdDesc = 'PARENT_ID_DESC',
  IsProtectedAsc = 'IS_PROTECTED_ASC',
  IsProtectedDesc = 'IS_PROTECTED_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type MediaGallery = Node & {
   __typename?: 'MediaGallery',
  nodeId: Scalars['ID'],
  id: Scalars['UUID'],
  created: Scalars['Datetime'],
  modified: Scalars['Datetime'],
  name?: Maybe<Scalars['String']>,
  parentId?: Maybe<Scalars['UUID']>,
  isProtected: Scalars['Boolean'],
  parent?: Maybe<MediaGallery>,
  trips: TripsConnection,
  destinationsByGalleryId: DestinationsConnection,
  destinationFeaturesByGalleryId: DestinationFeaturesConnection,
  featuresByGalleryId: FeaturesConnection,
  mediaGalleriesByParentId: MediaGalleriesConnection,
  mediaGalleryItems: MediaGalleryItemsConnection,
  propertiesByGalleryId: PropertiesConnection,
  suppliersByGalleryId: SuppliersConnection,
};


export type MediaGalleryTripsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<TripsOrderBy>>,
  condition?: Maybe<TripCondition>,
  filter?: Maybe<TripFilter>
};


export type MediaGalleryDestinationsByGalleryIdArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<DestinationsOrderBy>>,
  condition?: Maybe<DestinationCondition>,
  filter?: Maybe<DestinationFilter>
};


export type MediaGalleryDestinationFeaturesByGalleryIdArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<DestinationFeaturesOrderBy>>,
  condition?: Maybe<DestinationFeatureCondition>,
  filter?: Maybe<DestinationFeatureFilter>
};


export type MediaGalleryFeaturesByGalleryIdArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<FeaturesOrderBy>>,
  condition?: Maybe<FeatureCondition>,
  filter?: Maybe<FeatureFilter>
};


export type MediaGalleryMediaGalleriesByParentIdArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<MediaGalleriesOrderBy>>,
  condition?: Maybe<MediaGalleryCondition>,
  filter?: Maybe<MediaGalleryFilter>
};


export type MediaGalleryMediaGalleryItemsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<MediaGalleryItemsOrderBy>>,
  condition?: Maybe<MediaGalleryItemCondition>,
  filter?: Maybe<MediaGalleryItemFilter>
};


export type MediaGalleryPropertiesByGalleryIdArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<PropertiesOrderBy>>,
  condition?: Maybe<PropertyCondition>,
  filter?: Maybe<PropertyFilter>
};


export type MediaGallerySuppliersByGalleryIdArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<SuppliersOrderBy>>,
  condition?: Maybe<SupplierCondition>,
  filter?: Maybe<SupplierFilter>
};

export type MediaGalleryCondition = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  parentId?: Maybe<Scalars['UUID']>,
  isProtected?: Maybe<Scalars['Boolean']>,
};

export type MediaGalleryFilter = {
  id?: Maybe<UuidFilter>,
  created?: Maybe<DatetimeFilter>,
  modified?: Maybe<DatetimeFilter>,
  name?: Maybe<StringFilter>,
  parentId?: Maybe<UuidFilter>,
  isProtected?: Maybe<BooleanFilter>,
  trips?: Maybe<MediaGalleryToManyTripFilter>,
  tripsExist?: Maybe<Scalars['Boolean']>,
  destinationsByGalleryId?: Maybe<MediaGalleryToManyDestinationFilter>,
  destinationsByGalleryIdExist?: Maybe<Scalars['Boolean']>,
  destinationFeaturesByGalleryId?: Maybe<MediaGalleryToManyDestinationFeatureFilter>,
  destinationFeaturesByGalleryIdExist?: Maybe<Scalars['Boolean']>,
  featuresByGalleryId?: Maybe<MediaGalleryToManyFeatureFilter>,
  featuresByGalleryIdExist?: Maybe<Scalars['Boolean']>,
  mediaGalleriesByParentId?: Maybe<MediaGalleryToManyMediaGalleryFilter>,
  mediaGalleriesByParentIdExist?: Maybe<Scalars['Boolean']>,
  mediaGalleryItems?: Maybe<MediaGalleryToManyMediaGalleryItemFilter>,
  mediaGalleryItemsExist?: Maybe<Scalars['Boolean']>,
  propertiesByGalleryId?: Maybe<MediaGalleryToManyPropertyFilter>,
  propertiesByGalleryIdExist?: Maybe<Scalars['Boolean']>,
  suppliersByGalleryId?: Maybe<MediaGalleryToManySupplierFilter>,
  suppliersByGalleryIdExist?: Maybe<Scalars['Boolean']>,
  parent?: Maybe<MediaGalleryFilter>,
  parentExists?: Maybe<Scalars['Boolean']>,
  and?: Maybe<Array<MediaGalleryFilter>>,
  or?: Maybe<Array<MediaGalleryFilter>>,
  not?: Maybe<MediaGalleryFilter>,
};

export type MediaGalleryInput = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  parentId?: Maybe<Scalars['UUID']>,
  isProtected?: Maybe<Scalars['Boolean']>,
  mediaGalleryToParentId?: Maybe<FkMediaGalleryMediaGalleryParentIdInput>,
  tripsUsingId?: Maybe<FkTripMediaGalleryMediaGalleryIdInverseInput>,
  destinationsUsingId?: Maybe<FkDestinationMediaGalleryGalleryIdInverseInput>,
  destinationFeaturesUsingId?: Maybe<FkDestinationFeatureMediaGalleryGalleryIdInverseInput>,
  featuresUsingId?: Maybe<FkFeatureMediaGalleryGalleryIdInverseInput>,
  mediaGalleryItemsUsingId?: Maybe<FkMediaGalleryItemMediaGalleryMediaGalleryIdInverseInput>,
  propertiesUsingId?: Maybe<FkPropertyMediaGalleryGalleryIdInverseInput>,
  suppliersUsingId?: Maybe<FkSupplierMediaGalleryGalleryIdInverseInput>,
};

export type MediaGalleryItem = Node & {
   __typename?: 'MediaGalleryItem',
  nodeId: Scalars['ID'],
  id: Scalars['UUID'],
  created: Scalars['Datetime'],
  mediaGalleryId: Scalars['UUID'],
  mediaItemId: Scalars['UUID'],
  modified: Scalars['Datetime'],
  isHero: Scalars['Boolean'],
  mediaGallery?: Maybe<MediaGallery>,
  mediaItem?: Maybe<MediaItem>,
};

export type MediaGalleryItemCondition = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  mediaGalleryId?: Maybe<Scalars['UUID']>,
  mediaItemId?: Maybe<Scalars['UUID']>,
  modified?: Maybe<Scalars['Datetime']>,
  isHero?: Maybe<Scalars['Boolean']>,
};

export type MediaGalleryItemFilter = {
  id?: Maybe<UuidFilter>,
  created?: Maybe<DatetimeFilter>,
  mediaGalleryId?: Maybe<UuidFilter>,
  mediaItemId?: Maybe<UuidFilter>,
  modified?: Maybe<DatetimeFilter>,
  isHero?: Maybe<BooleanFilter>,
  mediaGallery?: Maybe<MediaGalleryFilter>,
  mediaItem?: Maybe<MediaItemFilter>,
  and?: Maybe<Array<MediaGalleryItemFilter>>,
  or?: Maybe<Array<MediaGalleryItemFilter>>,
  not?: Maybe<MediaGalleryItemFilter>,
};

export type MediaGalleryItemInput = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  mediaGalleryId?: Maybe<Scalars['UUID']>,
  mediaItemId?: Maybe<Scalars['UUID']>,
  modified?: Maybe<Scalars['Datetime']>,
  isHero?: Maybe<Scalars['Boolean']>,
  mediaGalleryToMediaGalleryId?: Maybe<FkMediaGalleryItemMediaGalleryMediaGalleryIdInput>,
  mediaItemToMediaItemId?: Maybe<FkMediaGalleryItemMediaItemMediaItemIdInput>,
};

export type MediaGalleryItemNodeIdConnect = {
  nodeId: Scalars['ID'],
};

export type MediaGalleryItemNodeIdDelete = {
  nodeId: Scalars['ID'],
};

export type MediaGalleryItemOnMediaGalleryItemForFkMediaGalleryItemMediaGalleryMediaGalleryIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: MediaGalleryPatch,
};

export type MediaGalleryItemOnMediaGalleryItemForFkMediaGalleryItemMediaGalleryMediaGalleryIdUsingPkMediaGalleryItemUpdate = {
  patch: UpdateMediaGalleryItemOnMediaGalleryItemForFkMediaGalleryItemMediaGalleryMediaGalleryIdPatch,
  id: Scalars['UUID'],
};

export type MediaGalleryItemOnMediaGalleryItemForFkMediaGalleryItemMediaItemMediaItemIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: MediaItemPatch,
};

export type MediaGalleryItemOnMediaGalleryItemForFkMediaGalleryItemMediaItemMediaItemIdUsingPkMediaGalleryItemUpdate = {
  patch: UpdateMediaGalleryItemOnMediaGalleryItemForFkMediaGalleryItemMediaItemMediaItemIdPatch,
  id: Scalars['UUID'],
};

export type MediaGalleryItemPatch = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  mediaGalleryId?: Maybe<Scalars['UUID']>,
  mediaItemId?: Maybe<Scalars['UUID']>,
  modified?: Maybe<Scalars['Datetime']>,
  isHero?: Maybe<Scalars['Boolean']>,
  mediaGalleryToMediaGalleryId?: Maybe<FkMediaGalleryItemMediaGalleryMediaGalleryIdInput>,
  mediaItemToMediaItemId?: Maybe<FkMediaGalleryItemMediaItemMediaItemIdInput>,
};

export type MediaGalleryItemPkMediaGalleryItemConnect = {
  id: Scalars['UUID'],
};

export type MediaGalleryItemPkMediaGalleryItemDelete = {
  id: Scalars['UUID'],
};

export type MediaGalleryItemsConnection = {
   __typename?: 'MediaGalleryItemsConnection',
  nodes: Array<Maybe<MediaGalleryItem>>,
  edges: Array<MediaGalleryItemsEdge>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
};

export type MediaGalleryItemsEdge = {
   __typename?: 'MediaGalleryItemsEdge',
  cursor?: Maybe<Scalars['Cursor']>,
  node?: Maybe<MediaGalleryItem>,
};

export enum MediaGalleryItemsOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  MediaGalleryIdAsc = 'MEDIA_GALLERY_ID_ASC',
  MediaGalleryIdDesc = 'MEDIA_GALLERY_ID_DESC',
  MediaItemIdAsc = 'MEDIA_ITEM_ID_ASC',
  MediaItemIdDesc = 'MEDIA_ITEM_ID_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC',
  IsHeroAsc = 'IS_HERO_ASC',
  IsHeroDesc = 'IS_HERO_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type MediaGalleryNodeIdConnect = {
  nodeId: Scalars['ID'],
};

export type MediaGalleryNodeIdDelete = {
  nodeId: Scalars['ID'],
};

export type MediaGalleryOnDestinationFeatureForFkDestinationFeatureMediaGalleryGalleryIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: DestinationFeaturePatch,
};

export type MediaGalleryOnDestinationFeatureForFkDestinationFeatureMediaGalleryGalleryIdUsingPkMediaGalleryUpdate = {
  patch: UpdateMediaGalleryOnDestinationFeatureForFkDestinationFeatureMediaGalleryGalleryIdPatch,
  id: Scalars['UUID'],
};

export type MediaGalleryOnDestinationForFkDestinationMediaGalleryGalleryIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: DestinationPatch,
};

export type MediaGalleryOnDestinationForFkDestinationMediaGalleryGalleryIdUsingPkMediaGalleryUpdate = {
  patch: UpdateMediaGalleryOnDestinationForFkDestinationMediaGalleryGalleryIdPatch,
  id: Scalars['UUID'],
};

export type MediaGalleryOnFeatureForFkFeatureMediaGalleryGalleryIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: FeaturePatch,
};

export type MediaGalleryOnFeatureForFkFeatureMediaGalleryGalleryIdUsingPkMediaGalleryUpdate = {
  patch: UpdateMediaGalleryOnFeatureForFkFeatureMediaGalleryGalleryIdPatch,
  id: Scalars['UUID'],
};

export type MediaGalleryOnMediaGalleryForFkMediaGalleryMediaGalleryParentIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: MediaGalleryPatch,
};

export type MediaGalleryOnMediaGalleryForFkMediaGalleryMediaGalleryParentIdUsingPkMediaGalleryUpdate = {
  patch: UpdateMediaGalleryOnMediaGalleryForFkMediaGalleryMediaGalleryParentIdPatch,
  id: Scalars['UUID'],
};

export type MediaGalleryOnMediaGalleryItemForFkMediaGalleryItemMediaGalleryMediaGalleryIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: MediaGalleryItemPatch,
};

export type MediaGalleryOnMediaGalleryItemForFkMediaGalleryItemMediaGalleryMediaGalleryIdUsingPkMediaGalleryUpdate = {
  patch: UpdateMediaGalleryOnMediaGalleryItemForFkMediaGalleryItemMediaGalleryMediaGalleryIdPatch,
  id: Scalars['UUID'],
};

export type MediaGalleryOnPropertyForFkPropertyMediaGalleryGalleryIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: PropertyPatch,
};

export type MediaGalleryOnPropertyForFkPropertyMediaGalleryGalleryIdUsingPkMediaGalleryUpdate = {
  patch: UpdateMediaGalleryOnPropertyForFkPropertyMediaGalleryGalleryIdPatch,
  id: Scalars['UUID'],
};

export type MediaGalleryOnSupplierForFkSupplierMediaGalleryGalleryIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: SupplierPatch,
};

export type MediaGalleryOnSupplierForFkSupplierMediaGalleryGalleryIdUsingPkMediaGalleryUpdate = {
  patch: UpdateMediaGalleryOnSupplierForFkSupplierMediaGalleryGalleryIdPatch,
  id: Scalars['UUID'],
};

export type MediaGalleryOnTripForFkTripMediaGalleryMediaGalleryIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: TripPatch,
};

export type MediaGalleryOnTripForFkTripMediaGalleryMediaGalleryIdUsingPkMediaGalleryUpdate = {
  patch: UpdateMediaGalleryOnTripForFkTripMediaGalleryMediaGalleryIdPatch,
  id: Scalars['UUID'],
};

export type MediaGalleryPatch = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  parentId?: Maybe<Scalars['UUID']>,
  isProtected?: Maybe<Scalars['Boolean']>,
  mediaGalleryToParentId?: Maybe<FkMediaGalleryMediaGalleryParentIdInput>,
  tripsUsingId?: Maybe<FkTripMediaGalleryMediaGalleryIdInverseInput>,
  destinationsUsingId?: Maybe<FkDestinationMediaGalleryGalleryIdInverseInput>,
  destinationFeaturesUsingId?: Maybe<FkDestinationFeatureMediaGalleryGalleryIdInverseInput>,
  featuresUsingId?: Maybe<FkFeatureMediaGalleryGalleryIdInverseInput>,
  mediaGalleryItemsUsingId?: Maybe<FkMediaGalleryItemMediaGalleryMediaGalleryIdInverseInput>,
  propertiesUsingId?: Maybe<FkPropertyMediaGalleryGalleryIdInverseInput>,
  suppliersUsingId?: Maybe<FkSupplierMediaGalleryGalleryIdInverseInput>,
};

export type MediaGalleryPkMediaGalleryConnect = {
  id: Scalars['UUID'],
};

export type MediaGalleryPkMediaGalleryDelete = {
  id: Scalars['UUID'],
};

export type MediaGalleryToManyDestinationFeatureFilter = {
  every?: Maybe<DestinationFeatureFilter>,
  some?: Maybe<DestinationFeatureFilter>,
  none?: Maybe<DestinationFeatureFilter>,
};

export type MediaGalleryToManyDestinationFilter = {
  every?: Maybe<DestinationFilter>,
  some?: Maybe<DestinationFilter>,
  none?: Maybe<DestinationFilter>,
};

export type MediaGalleryToManyFeatureFilter = {
  every?: Maybe<FeatureFilter>,
  some?: Maybe<FeatureFilter>,
  none?: Maybe<FeatureFilter>,
};

export type MediaGalleryToManyMediaGalleryFilter = {
  every?: Maybe<MediaGalleryFilter>,
  some?: Maybe<MediaGalleryFilter>,
  none?: Maybe<MediaGalleryFilter>,
};

export type MediaGalleryToManyMediaGalleryItemFilter = {
  every?: Maybe<MediaGalleryItemFilter>,
  some?: Maybe<MediaGalleryItemFilter>,
  none?: Maybe<MediaGalleryItemFilter>,
};

export type MediaGalleryToManyPropertyFilter = {
  every?: Maybe<PropertyFilter>,
  some?: Maybe<PropertyFilter>,
  none?: Maybe<PropertyFilter>,
};

export type MediaGalleryToManySupplierFilter = {
  every?: Maybe<SupplierFilter>,
  some?: Maybe<SupplierFilter>,
  none?: Maybe<SupplierFilter>,
};

export type MediaGalleryToManyTripFilter = {
  every?: Maybe<TripFilter>,
  some?: Maybe<TripFilter>,
  none?: Maybe<TripFilter>,
};

export type MediaItem = Node & {
   __typename?: 'MediaItem',
  nodeId: Scalars['ID'],
  id: Scalars['UUID'],
  contentType?: Maybe<Scalars['String']>,
  created: Scalars['Datetime'],
  modified: Scalars['Datetime'],
  name?: Maybe<Scalars['String']>,
  fileName?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  hash?: Maybe<Scalars['String']>,
  agenciesByLogoId: AgenciesConnection,
  supplierInvoices: SupplierInvoicesConnection,
  mediaGalleryItems: MediaGalleryItemsConnection,
  propertiesByHeroMediaId: PropertiesConnection,
  quotesByHeroImageId: QuotesConnection,
  quoteHeroesByImageId: QuoteHeroesConnection,
};


export type MediaItemAgenciesByLogoIdArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<AgenciesOrderBy>>,
  condition?: Maybe<AgencyCondition>,
  filter?: Maybe<AgencyFilter>
};


export type MediaItemSupplierInvoicesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<SupplierInvoicesOrderBy>>,
  condition?: Maybe<SupplierInvoiceCondition>,
  filter?: Maybe<SupplierInvoiceFilter>
};


export type MediaItemMediaGalleryItemsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<MediaGalleryItemsOrderBy>>,
  condition?: Maybe<MediaGalleryItemCondition>,
  filter?: Maybe<MediaGalleryItemFilter>
};


export type MediaItemPropertiesByHeroMediaIdArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<PropertiesOrderBy>>,
  condition?: Maybe<PropertyCondition>,
  filter?: Maybe<PropertyFilter>
};


export type MediaItemQuotesByHeroImageIdArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<QuotesOrderBy>>,
  condition?: Maybe<QuoteCondition>,
  filter?: Maybe<QuoteFilter>
};


export type MediaItemQuoteHeroesByImageIdArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<QuoteHeroesOrderBy>>,
  condition?: Maybe<QuoteHeroCondition>,
  filter?: Maybe<QuoteHeroFilter>
};

export type MediaItemCondition = {
  id?: Maybe<Scalars['UUID']>,
  contentType?: Maybe<Scalars['String']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  fileName?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  hash?: Maybe<Scalars['String']>,
};

export type MediaItemFilter = {
  id?: Maybe<UuidFilter>,
  contentType?: Maybe<StringFilter>,
  created?: Maybe<DatetimeFilter>,
  modified?: Maybe<DatetimeFilter>,
  name?: Maybe<StringFilter>,
  fileName?: Maybe<StringFilter>,
  summary?: Maybe<StringFilter>,
  hash?: Maybe<StringFilter>,
  agenciesByLogoId?: Maybe<MediaItemToManyAgencyFilter>,
  agenciesByLogoIdExist?: Maybe<Scalars['Boolean']>,
  supplierInvoices?: Maybe<MediaItemToManySupplierInvoiceFilter>,
  supplierInvoicesExist?: Maybe<Scalars['Boolean']>,
  mediaGalleryItems?: Maybe<MediaItemToManyMediaGalleryItemFilter>,
  mediaGalleryItemsExist?: Maybe<Scalars['Boolean']>,
  propertiesByHeroMediaId?: Maybe<MediaItemToManyPropertyFilter>,
  propertiesByHeroMediaIdExist?: Maybe<Scalars['Boolean']>,
  quotesByHeroImageId?: Maybe<MediaItemToManyQuoteFilter>,
  quotesByHeroImageIdExist?: Maybe<Scalars['Boolean']>,
  quoteHeroesByImageId?: Maybe<MediaItemToManyQuoteHeroFilter>,
  quoteHeroesByImageIdExist?: Maybe<Scalars['Boolean']>,
  and?: Maybe<Array<MediaItemFilter>>,
  or?: Maybe<Array<MediaItemFilter>>,
  not?: Maybe<MediaItemFilter>,
};

export type MediaItemInput = {
  id?: Maybe<Scalars['UUID']>,
  contentType?: Maybe<Scalars['String']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  fileName?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  hash?: Maybe<Scalars['String']>,
  agenciesUsingId?: Maybe<FkAgencyMediaItemLogoIdInverseInput>,
  supplierInvoicesUsingId?: Maybe<FkSupplierInvoiceMediaItemMediaItemIdInverseInput>,
  mediaGalleryItemsUsingId?: Maybe<FkMediaGalleryItemMediaItemMediaItemIdInverseInput>,
  propertiesUsingId?: Maybe<FkPropertyMediaItemHeroMediaIdInverseInput>,
  quotesUsingId?: Maybe<FkQuoteMediaItemHeroImageIdInverseInput>,
  quoteHeroesUsingId?: Maybe<FkQuoteHeroMediaItemImageIdInverseInput>,
};

export type MediaItemNodeIdConnect = {
  nodeId: Scalars['ID'],
};

export type MediaItemNodeIdDelete = {
  nodeId: Scalars['ID'],
};

export type MediaItemOnAgencyForFkAgencyMediaItemLogoIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: AgencyPatch,
};

export type MediaItemOnAgencyForFkAgencyMediaItemLogoIdUsingPkMediaItemUpdate = {
  patch: UpdateMediaItemOnAgencyForFkAgencyMediaItemLogoIdPatch,
  id: Scalars['UUID'],
};

export type MediaItemOnMediaGalleryItemForFkMediaGalleryItemMediaItemMediaItemIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: MediaGalleryItemPatch,
};

export type MediaItemOnMediaGalleryItemForFkMediaGalleryItemMediaItemMediaItemIdUsingPkMediaItemUpdate = {
  patch: UpdateMediaItemOnMediaGalleryItemForFkMediaGalleryItemMediaItemMediaItemIdPatch,
  id: Scalars['UUID'],
};

export type MediaItemOnPropertyForFkPropertyMediaItemHeroMediaIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: PropertyPatch,
};

export type MediaItemOnPropertyForFkPropertyMediaItemHeroMediaIdUsingPkMediaItemUpdate = {
  patch: UpdateMediaItemOnPropertyForFkPropertyMediaItemHeroMediaIdPatch,
  id: Scalars['UUID'],
};

export type MediaItemOnQuoteForFkQuoteMediaItemHeroImageIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: QuotePatch,
};

export type MediaItemOnQuoteForFkQuoteMediaItemHeroImageIdUsingPkMediaItemUpdate = {
  patch: UpdateMediaItemOnQuoteForFkQuoteMediaItemHeroImageIdPatch,
  id: Scalars['UUID'],
};

export type MediaItemOnQuoteHeroForFkQuoteHeroMediaItemImageIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: QuoteHeroPatch,
};

export type MediaItemOnQuoteHeroForFkQuoteHeroMediaItemImageIdUsingPkMediaItemUpdate = {
  patch: UpdateMediaItemOnQuoteHeroForFkQuoteHeroMediaItemImageIdPatch,
  id: Scalars['UUID'],
};

export type MediaItemOnSupplierInvoiceForFkSupplierInvoiceMediaItemMediaItemIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: SupplierInvoicePatch,
};

export type MediaItemOnSupplierInvoiceForFkSupplierInvoiceMediaItemMediaItemIdUsingPkMediaItemUpdate = {
  patch: UpdateMediaItemOnSupplierInvoiceForFkSupplierInvoiceMediaItemMediaItemIdPatch,
  id: Scalars['UUID'],
};

export type MediaItemPatch = {
  id?: Maybe<Scalars['UUID']>,
  contentType?: Maybe<Scalars['String']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  fileName?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  hash?: Maybe<Scalars['String']>,
  agenciesUsingId?: Maybe<FkAgencyMediaItemLogoIdInverseInput>,
  supplierInvoicesUsingId?: Maybe<FkSupplierInvoiceMediaItemMediaItemIdInverseInput>,
  mediaGalleryItemsUsingId?: Maybe<FkMediaGalleryItemMediaItemMediaItemIdInverseInput>,
  propertiesUsingId?: Maybe<FkPropertyMediaItemHeroMediaIdInverseInput>,
  quotesUsingId?: Maybe<FkQuoteMediaItemHeroImageIdInverseInput>,
  quoteHeroesUsingId?: Maybe<FkQuoteHeroMediaItemImageIdInverseInput>,
};

export type MediaItemPkMediaItemConnect = {
  id: Scalars['UUID'],
};

export type MediaItemPkMediaItemDelete = {
  id: Scalars['UUID'],
};

export type MediaItemsConnection = {
   __typename?: 'MediaItemsConnection',
  nodes: Array<Maybe<MediaItem>>,
  edges: Array<MediaItemsEdge>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
};

export type MediaItemsEdge = {
   __typename?: 'MediaItemsEdge',
  cursor?: Maybe<Scalars['Cursor']>,
  node?: Maybe<MediaItem>,
};

export enum MediaItemsOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  ContentTypeAsc = 'CONTENT_TYPE_ASC',
  ContentTypeDesc = 'CONTENT_TYPE_DESC',
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  FileNameAsc = 'FILE_NAME_ASC',
  FileNameDesc = 'FILE_NAME_DESC',
  SummaryAsc = 'SUMMARY_ASC',
  SummaryDesc = 'SUMMARY_DESC',
  HashAsc = 'HASH_ASC',
  HashDesc = 'HASH_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type MediaItemToManyAgencyFilter = {
  every?: Maybe<AgencyFilter>,
  some?: Maybe<AgencyFilter>,
  none?: Maybe<AgencyFilter>,
};

export type MediaItemToManyMediaGalleryItemFilter = {
  every?: Maybe<MediaGalleryItemFilter>,
  some?: Maybe<MediaGalleryItemFilter>,
  none?: Maybe<MediaGalleryItemFilter>,
};

export type MediaItemToManyPropertyFilter = {
  every?: Maybe<PropertyFilter>,
  some?: Maybe<PropertyFilter>,
  none?: Maybe<PropertyFilter>,
};

export type MediaItemToManyQuoteFilter = {
  every?: Maybe<QuoteFilter>,
  some?: Maybe<QuoteFilter>,
  none?: Maybe<QuoteFilter>,
};

export type MediaItemToManyQuoteHeroFilter = {
  every?: Maybe<QuoteHeroFilter>,
  some?: Maybe<QuoteHeroFilter>,
  none?: Maybe<QuoteHeroFilter>,
};

export type MediaItemToManySupplierInvoiceFilter = {
  every?: Maybe<SupplierInvoiceFilter>,
  some?: Maybe<SupplierInvoiceFilter>,
  none?: Maybe<SupplierInvoiceFilter>,
};

export type Mutation = {
   __typename?: 'Mutation',
  createAccount?: Maybe<CreateAccountPayload>,
  createAgency?: Maybe<CreateAgencyPayload>,
  createAgencyMember?: Maybe<CreateAgencyMemberPayload>,
  createAirport?: Maybe<CreateAirportPayload>,
  createCountry?: Maybe<CreateCountryPayload>,
  createCustomer?: Maybe<CreateCustomerPayload>,
  createCustomerTraveller?: Maybe<CreateCustomerTravellerPayload>,
  createDestination?: Maybe<CreateDestinationPayload>,
  createDestinationFeature?: Maybe<CreateDestinationFeaturePayload>,
  createDestinationGuide?: Maybe<CreateDestinationGuidePayload>,
  createEmail?: Maybe<CreateEmailPayload>,
  createEnquiry?: Maybe<CreateEnquiryPayload>,
  createExpense?: Maybe<CreateExpensePayload>,
  createFeature?: Maybe<CreateFeaturePayload>,
  createFinanceCategory?: Maybe<CreateFinanceCategoryPayload>,
  createInvoice?: Maybe<CreateInvoicePayload>,
  createMapPoint?: Maybe<CreateMapPointPayload>,
  createMediaGallery?: Maybe<CreateMediaGalleryPayload>,
  createMediaGalleryItem?: Maybe<CreateMediaGalleryItemPayload>,
  createMediaItem?: Maybe<CreateMediaItemPayload>,
  createNote?: Maybe<CreateNotePayload>,
  createPassport?: Maybe<CreatePassportPayload>,
  createPayment?: Maybe<CreatePaymentPayload>,
  createProperty?: Maybe<CreatePropertyPayload>,
  createQuote?: Maybe<CreateQuotePayload>,
  createQuoteView?: Maybe<CreateQuoteViewPayload>,
  createQuoteAccommodationDetail?: Maybe<CreateQuoteAccommodationDetailPayload>,
  createQuoteCurrency?: Maybe<CreateQuoteCurrencyPayload>,
  createQuoteDay?: Maybe<CreateQuoteDayPayload>,
  createQuoteDayDestination?: Maybe<CreateQuoteDayDestinationPayload>,
  createQuoteFinanceLineItem?: Maybe<CreateQuoteFinanceLineItemPayload>,
  createQuoteHero?: Maybe<CreateQuoteHeroPayload>,
  createQuotePublic?: Maybe<CreateQuotePublicPayload>,
  createReminder?: Maybe<CreateReminderPayload>,
  createSupplier?: Maybe<CreateSupplierPayload>,
  createSupplierInvoice?: Maybe<CreateSupplierInvoicePayload>,
  createTestimonial?: Maybe<CreateTestimonialPayload>,
  createTransaction?: Maybe<CreateTransactionPayload>,
  createTransactionImportBatch?: Maybe<CreateTransactionImportBatchPayload>,
  createTransactionLink?: Maybe<CreateTransactionLinkPayload>,
  createTransactionNote?: Maybe<CreateTransactionNotePayload>,
  createTraveller?: Maybe<CreateTravellerPayload>,
  createTrip?: Maybe<CreateTripPayload>,
  createTripTraveller?: Maybe<CreateTripTravellerPayload>,
  createTripFlight?: Maybe<CreateTripFlightPayload>,
  createUser?: Maybe<CreateUserPayload>,
  createVisaRequirement?: Maybe<CreateVisaRequirementPayload>,
  createOutstanding?: Maybe<CreateOutstandingPayload>,
  updateAccountByNodeId?: Maybe<UpdateAccountPayload>,
  updateAccount?: Maybe<UpdateAccountPayload>,
  updateAgencyByNodeId?: Maybe<UpdateAgencyPayload>,
  updateAgency?: Maybe<UpdateAgencyPayload>,
  updateAgencyMemberByNodeId?: Maybe<UpdateAgencyMemberPayload>,
  updateAgencyMember?: Maybe<UpdateAgencyMemberPayload>,
  updateAirportByNodeId?: Maybe<UpdateAirportPayload>,
  updateAirport?: Maybe<UpdateAirportPayload>,
  updateCountryByNodeId?: Maybe<UpdateCountryPayload>,
  updateCountry?: Maybe<UpdateCountryPayload>,
  updateCustomerByNodeId?: Maybe<UpdateCustomerPayload>,
  updateCustomer?: Maybe<UpdateCustomerPayload>,
  updateCustomerTravellerByNodeId?: Maybe<UpdateCustomerTravellerPayload>,
  updateCustomerTraveller?: Maybe<UpdateCustomerTravellerPayload>,
  updateDestinationByNodeId?: Maybe<UpdateDestinationPayload>,
  updateDestination?: Maybe<UpdateDestinationPayload>,
  updateDestinationFeatureByNodeId?: Maybe<UpdateDestinationFeaturePayload>,
  updateDestinationFeature?: Maybe<UpdateDestinationFeaturePayload>,
  updateDestinationGuideByNodeId?: Maybe<UpdateDestinationGuidePayload>,
  updateDestinationGuide?: Maybe<UpdateDestinationGuidePayload>,
  updateEmailByNodeId?: Maybe<UpdateEmailPayload>,
  updateEmail?: Maybe<UpdateEmailPayload>,
  updateEnquiryByNodeId?: Maybe<UpdateEnquiryPayload>,
  updateEnquiry?: Maybe<UpdateEnquiryPayload>,
  updateExpenseByNodeId?: Maybe<UpdateExpensePayload>,
  updateExpense?: Maybe<UpdateExpensePayload>,
  updateFeatureByNodeId?: Maybe<UpdateFeaturePayload>,
  updateFeature?: Maybe<UpdateFeaturePayload>,
  updateFinanceCategoryByNodeId?: Maybe<UpdateFinanceCategoryPayload>,
  updateFinanceCategory?: Maybe<UpdateFinanceCategoryPayload>,
  updateInvoiceByNodeId?: Maybe<UpdateInvoicePayload>,
  updateInvoice?: Maybe<UpdateInvoicePayload>,
  updateMapPointByNodeId?: Maybe<UpdateMapPointPayload>,
  updateMapPoint?: Maybe<UpdateMapPointPayload>,
  updateMediaGalleryByNodeId?: Maybe<UpdateMediaGalleryPayload>,
  updateMediaGallery?: Maybe<UpdateMediaGalleryPayload>,
  updateMediaGalleryItemByNodeId?: Maybe<UpdateMediaGalleryItemPayload>,
  updateMediaGalleryItem?: Maybe<UpdateMediaGalleryItemPayload>,
  updateMediaItemByNodeId?: Maybe<UpdateMediaItemPayload>,
  updateMediaItem?: Maybe<UpdateMediaItemPayload>,
  updateNoteByNodeId?: Maybe<UpdateNotePayload>,
  updateNote?: Maybe<UpdateNotePayload>,
  updatePassportByNodeId?: Maybe<UpdatePassportPayload>,
  updatePassport?: Maybe<UpdatePassportPayload>,
  updatePaymentByNodeId?: Maybe<UpdatePaymentPayload>,
  updatePayment?: Maybe<UpdatePaymentPayload>,
  updatePropertyByNodeId?: Maybe<UpdatePropertyPayload>,
  updateProperty?: Maybe<UpdatePropertyPayload>,
  updateQuoteByNodeId?: Maybe<UpdateQuotePayload>,
  updateQuote?: Maybe<UpdateQuotePayload>,
  updateQuoteViewByNodeId?: Maybe<UpdateQuoteViewPayload>,
  updateQuoteView?: Maybe<UpdateQuoteViewPayload>,
  updateQuoteAccommodationDetailByNodeId?: Maybe<UpdateQuoteAccommodationDetailPayload>,
  updateQuoteAccommodationDetail?: Maybe<UpdateQuoteAccommodationDetailPayload>,
  updateQuoteCurrencyByNodeId?: Maybe<UpdateQuoteCurrencyPayload>,
  updateQuoteCurrency?: Maybe<UpdateQuoteCurrencyPayload>,
  updateQuoteDayByNodeId?: Maybe<UpdateQuoteDayPayload>,
  updateQuoteDay?: Maybe<UpdateQuoteDayPayload>,
  updateQuoteDayDestinationByNodeId?: Maybe<UpdateQuoteDayDestinationPayload>,
  updateQuoteDayDestination?: Maybe<UpdateQuoteDayDestinationPayload>,
  updateQuoteFinanceLineItemByNodeId?: Maybe<UpdateQuoteFinanceLineItemPayload>,
  updateQuoteFinanceLineItem?: Maybe<UpdateQuoteFinanceLineItemPayload>,
  updateQuoteHeroByNodeId?: Maybe<UpdateQuoteHeroPayload>,
  updateQuoteHero?: Maybe<UpdateQuoteHeroPayload>,
  updateQuotePublicByNodeId?: Maybe<UpdateQuotePublicPayload>,
  updateQuotePublic?: Maybe<UpdateQuotePublicPayload>,
  updateReminderByNodeId?: Maybe<UpdateReminderPayload>,
  updateReminder?: Maybe<UpdateReminderPayload>,
  updateSupplierByNodeId?: Maybe<UpdateSupplierPayload>,
  updateSupplier?: Maybe<UpdateSupplierPayload>,
  updateSupplierInvoiceByNodeId?: Maybe<UpdateSupplierInvoicePayload>,
  updateSupplierInvoice?: Maybe<UpdateSupplierInvoicePayload>,
  updateTestimonialByNodeId?: Maybe<UpdateTestimonialPayload>,
  updateTestimonial?: Maybe<UpdateTestimonialPayload>,
  updateTransactionByNodeId?: Maybe<UpdateTransactionPayload>,
  updateTransaction?: Maybe<UpdateTransactionPayload>,
  updateTransactionImportBatchByNodeId?: Maybe<UpdateTransactionImportBatchPayload>,
  updateTransactionImportBatch?: Maybe<UpdateTransactionImportBatchPayload>,
  updateTransactionLinkByNodeId?: Maybe<UpdateTransactionLinkPayload>,
  updateTransactionLink?: Maybe<UpdateTransactionLinkPayload>,
  updateTransactionNoteByNodeId?: Maybe<UpdateTransactionNotePayload>,
  updateTransactionNote?: Maybe<UpdateTransactionNotePayload>,
  updateTravellerByNodeId?: Maybe<UpdateTravellerPayload>,
  updateTraveller?: Maybe<UpdateTravellerPayload>,
  updateTripByNodeId?: Maybe<UpdateTripPayload>,
  updateTrip?: Maybe<UpdateTripPayload>,
  updateTripTravellerByNodeId?: Maybe<UpdateTripTravellerPayload>,
  updateTripTraveller?: Maybe<UpdateTripTravellerPayload>,
  updateTripFlightByNodeId?: Maybe<UpdateTripFlightPayload>,
  updateTripFlight?: Maybe<UpdateTripFlightPayload>,
  updateUserByNodeId?: Maybe<UpdateUserPayload>,
  updateUser?: Maybe<UpdateUserPayload>,
  updateVisaRequirementByNodeId?: Maybe<UpdateVisaRequirementPayload>,
  updateVisaRequirement?: Maybe<UpdateVisaRequirementPayload>,
  deleteAccountByNodeId?: Maybe<DeleteAccountPayload>,
  deleteAccount?: Maybe<DeleteAccountPayload>,
  deleteAgencyByNodeId?: Maybe<DeleteAgencyPayload>,
  deleteAgency?: Maybe<DeleteAgencyPayload>,
  deleteAgencyMemberByNodeId?: Maybe<DeleteAgencyMemberPayload>,
  deleteAgencyMember?: Maybe<DeleteAgencyMemberPayload>,
  deleteAirportByNodeId?: Maybe<DeleteAirportPayload>,
  deleteAirport?: Maybe<DeleteAirportPayload>,
  deleteCountryByNodeId?: Maybe<DeleteCountryPayload>,
  deleteCountry?: Maybe<DeleteCountryPayload>,
  deleteCustomerByNodeId?: Maybe<DeleteCustomerPayload>,
  deleteCustomer?: Maybe<DeleteCustomerPayload>,
  deleteCustomerTravellerByNodeId?: Maybe<DeleteCustomerTravellerPayload>,
  deleteCustomerTraveller?: Maybe<DeleteCustomerTravellerPayload>,
  deleteDestinationByNodeId?: Maybe<DeleteDestinationPayload>,
  deleteDestination?: Maybe<DeleteDestinationPayload>,
  deleteDestinationFeatureByNodeId?: Maybe<DeleteDestinationFeaturePayload>,
  deleteDestinationFeature?: Maybe<DeleteDestinationFeaturePayload>,
  deleteDestinationGuideByNodeId?: Maybe<DeleteDestinationGuidePayload>,
  deleteDestinationGuide?: Maybe<DeleteDestinationGuidePayload>,
  deleteEmailByNodeId?: Maybe<DeleteEmailPayload>,
  deleteEmail?: Maybe<DeleteEmailPayload>,
  deleteEnquiryByNodeId?: Maybe<DeleteEnquiryPayload>,
  deleteEnquiry?: Maybe<DeleteEnquiryPayload>,
  deleteExpenseByNodeId?: Maybe<DeleteExpensePayload>,
  deleteExpense?: Maybe<DeleteExpensePayload>,
  deleteFeatureByNodeId?: Maybe<DeleteFeaturePayload>,
  deleteFeature?: Maybe<DeleteFeaturePayload>,
  deleteFinanceCategoryByNodeId?: Maybe<DeleteFinanceCategoryPayload>,
  deleteFinanceCategory?: Maybe<DeleteFinanceCategoryPayload>,
  deleteInvoiceByNodeId?: Maybe<DeleteInvoicePayload>,
  deleteInvoice?: Maybe<DeleteInvoicePayload>,
  deleteMapPointByNodeId?: Maybe<DeleteMapPointPayload>,
  deleteMapPoint?: Maybe<DeleteMapPointPayload>,
  deleteMediaGalleryByNodeId?: Maybe<DeleteMediaGalleryPayload>,
  deleteMediaGallery?: Maybe<DeleteMediaGalleryPayload>,
  deleteMediaGalleryItemByNodeId?: Maybe<DeleteMediaGalleryItemPayload>,
  deleteMediaGalleryItem?: Maybe<DeleteMediaGalleryItemPayload>,
  deleteMediaItemByNodeId?: Maybe<DeleteMediaItemPayload>,
  deleteMediaItem?: Maybe<DeleteMediaItemPayload>,
  deleteNoteByNodeId?: Maybe<DeleteNotePayload>,
  deleteNote?: Maybe<DeleteNotePayload>,
  deletePassportByNodeId?: Maybe<DeletePassportPayload>,
  deletePassport?: Maybe<DeletePassportPayload>,
  deletePaymentByNodeId?: Maybe<DeletePaymentPayload>,
  deletePayment?: Maybe<DeletePaymentPayload>,
  deletePropertyByNodeId?: Maybe<DeletePropertyPayload>,
  deleteProperty?: Maybe<DeletePropertyPayload>,
  deleteQuoteByNodeId?: Maybe<DeleteQuotePayload>,
  deleteQuote?: Maybe<DeleteQuotePayload>,
  deleteQuoteViewByNodeId?: Maybe<DeleteQuoteViewPayload>,
  deleteQuoteView?: Maybe<DeleteQuoteViewPayload>,
  deleteQuoteAccommodationDetailByNodeId?: Maybe<DeleteQuoteAccommodationDetailPayload>,
  deleteQuoteAccommodationDetail?: Maybe<DeleteQuoteAccommodationDetailPayload>,
  deleteQuoteCurrencyByNodeId?: Maybe<DeleteQuoteCurrencyPayload>,
  deleteQuoteCurrency?: Maybe<DeleteQuoteCurrencyPayload>,
  deleteQuoteDayByNodeId?: Maybe<DeleteQuoteDayPayload>,
  deleteQuoteDay?: Maybe<DeleteQuoteDayPayload>,
  deleteQuoteDayDestinationByNodeId?: Maybe<DeleteQuoteDayDestinationPayload>,
  deleteQuoteDayDestination?: Maybe<DeleteQuoteDayDestinationPayload>,
  deleteQuoteFinanceLineItemByNodeId?: Maybe<DeleteQuoteFinanceLineItemPayload>,
  deleteQuoteFinanceLineItem?: Maybe<DeleteQuoteFinanceLineItemPayload>,
  deleteQuoteHeroByNodeId?: Maybe<DeleteQuoteHeroPayload>,
  deleteQuoteHero?: Maybe<DeleteQuoteHeroPayload>,
  deleteQuotePublicByNodeId?: Maybe<DeleteQuotePublicPayload>,
  deleteQuotePublic?: Maybe<DeleteQuotePublicPayload>,
  deleteReminderByNodeId?: Maybe<DeleteReminderPayload>,
  deleteReminder?: Maybe<DeleteReminderPayload>,
  deleteSupplierByNodeId?: Maybe<DeleteSupplierPayload>,
  deleteSupplier?: Maybe<DeleteSupplierPayload>,
  deleteSupplierInvoiceByNodeId?: Maybe<DeleteSupplierInvoicePayload>,
  deleteSupplierInvoice?: Maybe<DeleteSupplierInvoicePayload>,
  deleteTestimonialByNodeId?: Maybe<DeleteTestimonialPayload>,
  deleteTestimonial?: Maybe<DeleteTestimonialPayload>,
  deleteTransactionByNodeId?: Maybe<DeleteTransactionPayload>,
  deleteTransaction?: Maybe<DeleteTransactionPayload>,
  deleteTransactionImportBatchByNodeId?: Maybe<DeleteTransactionImportBatchPayload>,
  deleteTransactionImportBatch?: Maybe<DeleteTransactionImportBatchPayload>,
  deleteTransactionLinkByNodeId?: Maybe<DeleteTransactionLinkPayload>,
  deleteTransactionLink?: Maybe<DeleteTransactionLinkPayload>,
  deleteTransactionNoteByNodeId?: Maybe<DeleteTransactionNotePayload>,
  deleteTransactionNote?: Maybe<DeleteTransactionNotePayload>,
  deleteTravellerByNodeId?: Maybe<DeleteTravellerPayload>,
  deleteTraveller?: Maybe<DeleteTravellerPayload>,
  deleteTripByNodeId?: Maybe<DeleteTripPayload>,
  deleteTrip?: Maybe<DeleteTripPayload>,
  deleteTripTravellerByNodeId?: Maybe<DeleteTripTravellerPayload>,
  deleteTripTraveller?: Maybe<DeleteTripTravellerPayload>,
  deleteTripFlightByNodeId?: Maybe<DeleteTripFlightPayload>,
  deleteTripFlight?: Maybe<DeleteTripFlightPayload>,
  deleteUserByNodeId?: Maybe<DeleteUserPayload>,
  deleteUser?: Maybe<DeleteUserPayload>,
  deleteVisaRequirementByNodeId?: Maybe<DeleteVisaRequirementPayload>,
  deleteVisaRequirement?: Maybe<DeleteVisaRequirementPayload>,
  dateWeek?: Maybe<DateWeekPayload>,
  randomString?: Maybe<RandomStringPayload>,
  recordStripePayment?: Maybe<RecordStripePaymentPayload>,
  executePayment?: Maybe<GenericResponse>,
  trackQuoteView?: Maybe<GenericResponse>,
};


export type MutationCreateAccountArgs = {
  input: CreateAccountInput
};


export type MutationCreateAgencyArgs = {
  input: CreateAgencyInput
};


export type MutationCreateAgencyMemberArgs = {
  input: CreateAgencyMemberInput
};


export type MutationCreateAirportArgs = {
  input: CreateAirportInput
};


export type MutationCreateCountryArgs = {
  input: CreateCountryInput
};


export type MutationCreateCustomerArgs = {
  input: CreateCustomerInput
};


export type MutationCreateCustomerTravellerArgs = {
  input: CreateCustomerTravellerInput
};


export type MutationCreateDestinationArgs = {
  input: CreateDestinationInput
};


export type MutationCreateDestinationFeatureArgs = {
  input: CreateDestinationFeatureInput
};


export type MutationCreateDestinationGuideArgs = {
  input: CreateDestinationGuideInput
};


export type MutationCreateEmailArgs = {
  input: CreateEmailInput
};


export type MutationCreateEnquiryArgs = {
  input: CreateEnquiryInput
};


export type MutationCreateExpenseArgs = {
  input: CreateExpenseInput
};


export type MutationCreateFeatureArgs = {
  input: CreateFeatureInput
};


export type MutationCreateFinanceCategoryArgs = {
  input: CreateFinanceCategoryInput
};


export type MutationCreateInvoiceArgs = {
  input: CreateInvoiceInput
};


export type MutationCreateMapPointArgs = {
  input: CreateMapPointInput
};


export type MutationCreateMediaGalleryArgs = {
  input: CreateMediaGalleryInput
};


export type MutationCreateMediaGalleryItemArgs = {
  input: CreateMediaGalleryItemInput
};


export type MutationCreateMediaItemArgs = {
  input: CreateMediaItemInput
};


export type MutationCreateNoteArgs = {
  input: CreateNoteInput
};


export type MutationCreatePassportArgs = {
  input: CreatePassportInput
};


export type MutationCreatePaymentArgs = {
  input: CreatePaymentInput
};


export type MutationCreatePropertyArgs = {
  input: CreatePropertyInput
};


export type MutationCreateQuoteArgs = {
  input: CreateQuoteInput
};


export type MutationCreateQuoteViewArgs = {
  input: CreateQuoteViewInput
};


export type MutationCreateQuoteAccommodationDetailArgs = {
  input: CreateQuoteAccommodationDetailInput
};


export type MutationCreateQuoteCurrencyArgs = {
  input: CreateQuoteCurrencyInput
};


export type MutationCreateQuoteDayArgs = {
  input: CreateQuoteDayInput
};


export type MutationCreateQuoteDayDestinationArgs = {
  input: CreateQuoteDayDestinationInput
};


export type MutationCreateQuoteFinanceLineItemArgs = {
  input: CreateQuoteFinanceLineItemInput
};


export type MutationCreateQuoteHeroArgs = {
  input: CreateQuoteHeroInput
};


export type MutationCreateQuotePublicArgs = {
  input: CreateQuotePublicInput
};


export type MutationCreateReminderArgs = {
  input: CreateReminderInput
};


export type MutationCreateSupplierArgs = {
  input: CreateSupplierInput
};


export type MutationCreateSupplierInvoiceArgs = {
  input: CreateSupplierInvoiceInput
};


export type MutationCreateTestimonialArgs = {
  input: CreateTestimonialInput
};


export type MutationCreateTransactionArgs = {
  input: CreateTransactionInput
};


export type MutationCreateTransactionImportBatchArgs = {
  input: CreateTransactionImportBatchInput
};


export type MutationCreateTransactionLinkArgs = {
  input: CreateTransactionLinkInput
};


export type MutationCreateTransactionNoteArgs = {
  input: CreateTransactionNoteInput
};


export type MutationCreateTravellerArgs = {
  input: CreateTravellerInput
};


export type MutationCreateTripArgs = {
  input: CreateTripInput
};


export type MutationCreateTripTravellerArgs = {
  input: CreateTripTravellerInput
};


export type MutationCreateTripFlightArgs = {
  input: CreateTripFlightInput
};


export type MutationCreateUserArgs = {
  input: CreateUserInput
};


export type MutationCreateVisaRequirementArgs = {
  input: CreateVisaRequirementInput
};


export type MutationCreateOutstandingArgs = {
  input: CreateOutstandingInput
};


export type MutationUpdateAccountByNodeIdArgs = {
  input: UpdateAccountByNodeIdInput
};


export type MutationUpdateAccountArgs = {
  input: UpdateAccountInput
};


export type MutationUpdateAgencyByNodeIdArgs = {
  input: UpdateAgencyByNodeIdInput
};


export type MutationUpdateAgencyArgs = {
  input: UpdateAgencyInput
};


export type MutationUpdateAgencyMemberByNodeIdArgs = {
  input: UpdateAgencyMemberByNodeIdInput
};


export type MutationUpdateAgencyMemberArgs = {
  input: UpdateAgencyMemberInput
};


export type MutationUpdateAirportByNodeIdArgs = {
  input: UpdateAirportByNodeIdInput
};


export type MutationUpdateAirportArgs = {
  input: UpdateAirportInput
};


export type MutationUpdateCountryByNodeIdArgs = {
  input: UpdateCountryByNodeIdInput
};


export type MutationUpdateCountryArgs = {
  input: UpdateCountryInput
};


export type MutationUpdateCustomerByNodeIdArgs = {
  input: UpdateCustomerByNodeIdInput
};


export type MutationUpdateCustomerArgs = {
  input: UpdateCustomerInput
};


export type MutationUpdateCustomerTravellerByNodeIdArgs = {
  input: UpdateCustomerTravellerByNodeIdInput
};


export type MutationUpdateCustomerTravellerArgs = {
  input: UpdateCustomerTravellerInput
};


export type MutationUpdateDestinationByNodeIdArgs = {
  input: UpdateDestinationByNodeIdInput
};


export type MutationUpdateDestinationArgs = {
  input: UpdateDestinationInput
};


export type MutationUpdateDestinationFeatureByNodeIdArgs = {
  input: UpdateDestinationFeatureByNodeIdInput
};


export type MutationUpdateDestinationFeatureArgs = {
  input: UpdateDestinationFeatureInput
};


export type MutationUpdateDestinationGuideByNodeIdArgs = {
  input: UpdateDestinationGuideByNodeIdInput
};


export type MutationUpdateDestinationGuideArgs = {
  input: UpdateDestinationGuideInput
};


export type MutationUpdateEmailByNodeIdArgs = {
  input: UpdateEmailByNodeIdInput
};


export type MutationUpdateEmailArgs = {
  input: UpdateEmailInput
};


export type MutationUpdateEnquiryByNodeIdArgs = {
  input: UpdateEnquiryByNodeIdInput
};


export type MutationUpdateEnquiryArgs = {
  input: UpdateEnquiryInput
};


export type MutationUpdateExpenseByNodeIdArgs = {
  input: UpdateExpenseByNodeIdInput
};


export type MutationUpdateExpenseArgs = {
  input: UpdateExpenseInput
};


export type MutationUpdateFeatureByNodeIdArgs = {
  input: UpdateFeatureByNodeIdInput
};


export type MutationUpdateFeatureArgs = {
  input: UpdateFeatureInput
};


export type MutationUpdateFinanceCategoryByNodeIdArgs = {
  input: UpdateFinanceCategoryByNodeIdInput
};


export type MutationUpdateFinanceCategoryArgs = {
  input: UpdateFinanceCategoryInput
};


export type MutationUpdateInvoiceByNodeIdArgs = {
  input: UpdateInvoiceByNodeIdInput
};


export type MutationUpdateInvoiceArgs = {
  input: UpdateInvoiceInput
};


export type MutationUpdateMapPointByNodeIdArgs = {
  input: UpdateMapPointByNodeIdInput
};


export type MutationUpdateMapPointArgs = {
  input: UpdateMapPointInput
};


export type MutationUpdateMediaGalleryByNodeIdArgs = {
  input: UpdateMediaGalleryByNodeIdInput
};


export type MutationUpdateMediaGalleryArgs = {
  input: UpdateMediaGalleryInput
};


export type MutationUpdateMediaGalleryItemByNodeIdArgs = {
  input: UpdateMediaGalleryItemByNodeIdInput
};


export type MutationUpdateMediaGalleryItemArgs = {
  input: UpdateMediaGalleryItemInput
};


export type MutationUpdateMediaItemByNodeIdArgs = {
  input: UpdateMediaItemByNodeIdInput
};


export type MutationUpdateMediaItemArgs = {
  input: UpdateMediaItemInput
};


export type MutationUpdateNoteByNodeIdArgs = {
  input: UpdateNoteByNodeIdInput
};


export type MutationUpdateNoteArgs = {
  input: UpdateNoteInput
};


export type MutationUpdatePassportByNodeIdArgs = {
  input: UpdatePassportByNodeIdInput
};


export type MutationUpdatePassportArgs = {
  input: UpdatePassportInput
};


export type MutationUpdatePaymentByNodeIdArgs = {
  input: UpdatePaymentByNodeIdInput
};


export type MutationUpdatePaymentArgs = {
  input: UpdatePaymentInput
};


export type MutationUpdatePropertyByNodeIdArgs = {
  input: UpdatePropertyByNodeIdInput
};


export type MutationUpdatePropertyArgs = {
  input: UpdatePropertyInput
};


export type MutationUpdateQuoteByNodeIdArgs = {
  input: UpdateQuoteByNodeIdInput
};


export type MutationUpdateQuoteArgs = {
  input: UpdateQuoteInput
};


export type MutationUpdateQuoteViewByNodeIdArgs = {
  input: UpdateQuoteViewByNodeIdInput
};


export type MutationUpdateQuoteViewArgs = {
  input: UpdateQuoteViewInput
};


export type MutationUpdateQuoteAccommodationDetailByNodeIdArgs = {
  input: UpdateQuoteAccommodationDetailByNodeIdInput
};


export type MutationUpdateQuoteAccommodationDetailArgs = {
  input: UpdateQuoteAccommodationDetailInput
};


export type MutationUpdateQuoteCurrencyByNodeIdArgs = {
  input: UpdateQuoteCurrencyByNodeIdInput
};


export type MutationUpdateQuoteCurrencyArgs = {
  input: UpdateQuoteCurrencyInput
};


export type MutationUpdateQuoteDayByNodeIdArgs = {
  input: UpdateQuoteDayByNodeIdInput
};


export type MutationUpdateQuoteDayArgs = {
  input: UpdateQuoteDayInput
};


export type MutationUpdateQuoteDayDestinationByNodeIdArgs = {
  input: UpdateQuoteDayDestinationByNodeIdInput
};


export type MutationUpdateQuoteDayDestinationArgs = {
  input: UpdateQuoteDayDestinationInput
};


export type MutationUpdateQuoteFinanceLineItemByNodeIdArgs = {
  input: UpdateQuoteFinanceLineItemByNodeIdInput
};


export type MutationUpdateQuoteFinanceLineItemArgs = {
  input: UpdateQuoteFinanceLineItemInput
};


export type MutationUpdateQuoteHeroByNodeIdArgs = {
  input: UpdateQuoteHeroByNodeIdInput
};


export type MutationUpdateQuoteHeroArgs = {
  input: UpdateQuoteHeroInput
};


export type MutationUpdateQuotePublicByNodeIdArgs = {
  input: UpdateQuotePublicByNodeIdInput
};


export type MutationUpdateQuotePublicArgs = {
  input: UpdateQuotePublicInput
};


export type MutationUpdateReminderByNodeIdArgs = {
  input: UpdateReminderByNodeIdInput
};


export type MutationUpdateReminderArgs = {
  input: UpdateReminderInput
};


export type MutationUpdateSupplierByNodeIdArgs = {
  input: UpdateSupplierByNodeIdInput
};


export type MutationUpdateSupplierArgs = {
  input: UpdateSupplierInput
};


export type MutationUpdateSupplierInvoiceByNodeIdArgs = {
  input: UpdateSupplierInvoiceByNodeIdInput
};


export type MutationUpdateSupplierInvoiceArgs = {
  input: UpdateSupplierInvoiceInput
};


export type MutationUpdateTestimonialByNodeIdArgs = {
  input: UpdateTestimonialByNodeIdInput
};


export type MutationUpdateTestimonialArgs = {
  input: UpdateTestimonialInput
};


export type MutationUpdateTransactionByNodeIdArgs = {
  input: UpdateTransactionByNodeIdInput
};


export type MutationUpdateTransactionArgs = {
  input: UpdateTransactionInput
};


export type MutationUpdateTransactionImportBatchByNodeIdArgs = {
  input: UpdateTransactionImportBatchByNodeIdInput
};


export type MutationUpdateTransactionImportBatchArgs = {
  input: UpdateTransactionImportBatchInput
};


export type MutationUpdateTransactionLinkByNodeIdArgs = {
  input: UpdateTransactionLinkByNodeIdInput
};


export type MutationUpdateTransactionLinkArgs = {
  input: UpdateTransactionLinkInput
};


export type MutationUpdateTransactionNoteByNodeIdArgs = {
  input: UpdateTransactionNoteByNodeIdInput
};


export type MutationUpdateTransactionNoteArgs = {
  input: UpdateTransactionNoteInput
};


export type MutationUpdateTravellerByNodeIdArgs = {
  input: UpdateTravellerByNodeIdInput
};


export type MutationUpdateTravellerArgs = {
  input: UpdateTravellerInput
};


export type MutationUpdateTripByNodeIdArgs = {
  input: UpdateTripByNodeIdInput
};


export type MutationUpdateTripArgs = {
  input: UpdateTripInput
};


export type MutationUpdateTripTravellerByNodeIdArgs = {
  input: UpdateTripTravellerByNodeIdInput
};


export type MutationUpdateTripTravellerArgs = {
  input: UpdateTripTravellerInput
};


export type MutationUpdateTripFlightByNodeIdArgs = {
  input: UpdateTripFlightByNodeIdInput
};


export type MutationUpdateTripFlightArgs = {
  input: UpdateTripFlightInput
};


export type MutationUpdateUserByNodeIdArgs = {
  input: UpdateUserByNodeIdInput
};


export type MutationUpdateUserArgs = {
  input: UpdateUserInput
};


export type MutationUpdateVisaRequirementByNodeIdArgs = {
  input: UpdateVisaRequirementByNodeIdInput
};


export type MutationUpdateVisaRequirementArgs = {
  input: UpdateVisaRequirementInput
};


export type MutationDeleteAccountByNodeIdArgs = {
  input: DeleteAccountByNodeIdInput
};


export type MutationDeleteAccountArgs = {
  input: DeleteAccountInput
};


export type MutationDeleteAgencyByNodeIdArgs = {
  input: DeleteAgencyByNodeIdInput
};


export type MutationDeleteAgencyArgs = {
  input: DeleteAgencyInput
};


export type MutationDeleteAgencyMemberByNodeIdArgs = {
  input: DeleteAgencyMemberByNodeIdInput
};


export type MutationDeleteAgencyMemberArgs = {
  input: DeleteAgencyMemberInput
};


export type MutationDeleteAirportByNodeIdArgs = {
  input: DeleteAirportByNodeIdInput
};


export type MutationDeleteAirportArgs = {
  input: DeleteAirportInput
};


export type MutationDeleteCountryByNodeIdArgs = {
  input: DeleteCountryByNodeIdInput
};


export type MutationDeleteCountryArgs = {
  input: DeleteCountryInput
};


export type MutationDeleteCustomerByNodeIdArgs = {
  input: DeleteCustomerByNodeIdInput
};


export type MutationDeleteCustomerArgs = {
  input: DeleteCustomerInput
};


export type MutationDeleteCustomerTravellerByNodeIdArgs = {
  input: DeleteCustomerTravellerByNodeIdInput
};


export type MutationDeleteCustomerTravellerArgs = {
  input: DeleteCustomerTravellerInput
};


export type MutationDeleteDestinationByNodeIdArgs = {
  input: DeleteDestinationByNodeIdInput
};


export type MutationDeleteDestinationArgs = {
  input: DeleteDestinationInput
};


export type MutationDeleteDestinationFeatureByNodeIdArgs = {
  input: DeleteDestinationFeatureByNodeIdInput
};


export type MutationDeleteDestinationFeatureArgs = {
  input: DeleteDestinationFeatureInput
};


export type MutationDeleteDestinationGuideByNodeIdArgs = {
  input: DeleteDestinationGuideByNodeIdInput
};


export type MutationDeleteDestinationGuideArgs = {
  input: DeleteDestinationGuideInput
};


export type MutationDeleteEmailByNodeIdArgs = {
  input: DeleteEmailByNodeIdInput
};


export type MutationDeleteEmailArgs = {
  input: DeleteEmailInput
};


export type MutationDeleteEnquiryByNodeIdArgs = {
  input: DeleteEnquiryByNodeIdInput
};


export type MutationDeleteEnquiryArgs = {
  input: DeleteEnquiryInput
};


export type MutationDeleteExpenseByNodeIdArgs = {
  input: DeleteExpenseByNodeIdInput
};


export type MutationDeleteExpenseArgs = {
  input: DeleteExpenseInput
};


export type MutationDeleteFeatureByNodeIdArgs = {
  input: DeleteFeatureByNodeIdInput
};


export type MutationDeleteFeatureArgs = {
  input: DeleteFeatureInput
};


export type MutationDeleteFinanceCategoryByNodeIdArgs = {
  input: DeleteFinanceCategoryByNodeIdInput
};


export type MutationDeleteFinanceCategoryArgs = {
  input: DeleteFinanceCategoryInput
};


export type MutationDeleteInvoiceByNodeIdArgs = {
  input: DeleteInvoiceByNodeIdInput
};


export type MutationDeleteInvoiceArgs = {
  input: DeleteInvoiceInput
};


export type MutationDeleteMapPointByNodeIdArgs = {
  input: DeleteMapPointByNodeIdInput
};


export type MutationDeleteMapPointArgs = {
  input: DeleteMapPointInput
};


export type MutationDeleteMediaGalleryByNodeIdArgs = {
  input: DeleteMediaGalleryByNodeIdInput
};


export type MutationDeleteMediaGalleryArgs = {
  input: DeleteMediaGalleryInput
};


export type MutationDeleteMediaGalleryItemByNodeIdArgs = {
  input: DeleteMediaGalleryItemByNodeIdInput
};


export type MutationDeleteMediaGalleryItemArgs = {
  input: DeleteMediaGalleryItemInput
};


export type MutationDeleteMediaItemByNodeIdArgs = {
  input: DeleteMediaItemByNodeIdInput
};


export type MutationDeleteMediaItemArgs = {
  input: DeleteMediaItemInput
};


export type MutationDeleteNoteByNodeIdArgs = {
  input: DeleteNoteByNodeIdInput
};


export type MutationDeleteNoteArgs = {
  input: DeleteNoteInput
};


export type MutationDeletePassportByNodeIdArgs = {
  input: DeletePassportByNodeIdInput
};


export type MutationDeletePassportArgs = {
  input: DeletePassportInput
};


export type MutationDeletePaymentByNodeIdArgs = {
  input: DeletePaymentByNodeIdInput
};


export type MutationDeletePaymentArgs = {
  input: DeletePaymentInput
};


export type MutationDeletePropertyByNodeIdArgs = {
  input: DeletePropertyByNodeIdInput
};


export type MutationDeletePropertyArgs = {
  input: DeletePropertyInput
};


export type MutationDeleteQuoteByNodeIdArgs = {
  input: DeleteQuoteByNodeIdInput
};


export type MutationDeleteQuoteArgs = {
  input: DeleteQuoteInput
};


export type MutationDeleteQuoteViewByNodeIdArgs = {
  input: DeleteQuoteViewByNodeIdInput
};


export type MutationDeleteQuoteViewArgs = {
  input: DeleteQuoteViewInput
};


export type MutationDeleteQuoteAccommodationDetailByNodeIdArgs = {
  input: DeleteQuoteAccommodationDetailByNodeIdInput
};


export type MutationDeleteQuoteAccommodationDetailArgs = {
  input: DeleteQuoteAccommodationDetailInput
};


export type MutationDeleteQuoteCurrencyByNodeIdArgs = {
  input: DeleteQuoteCurrencyByNodeIdInput
};


export type MutationDeleteQuoteCurrencyArgs = {
  input: DeleteQuoteCurrencyInput
};


export type MutationDeleteQuoteDayByNodeIdArgs = {
  input: DeleteQuoteDayByNodeIdInput
};


export type MutationDeleteQuoteDayArgs = {
  input: DeleteQuoteDayInput
};


export type MutationDeleteQuoteDayDestinationByNodeIdArgs = {
  input: DeleteQuoteDayDestinationByNodeIdInput
};


export type MutationDeleteQuoteDayDestinationArgs = {
  input: DeleteQuoteDayDestinationInput
};


export type MutationDeleteQuoteFinanceLineItemByNodeIdArgs = {
  input: DeleteQuoteFinanceLineItemByNodeIdInput
};


export type MutationDeleteQuoteFinanceLineItemArgs = {
  input: DeleteQuoteFinanceLineItemInput
};


export type MutationDeleteQuoteHeroByNodeIdArgs = {
  input: DeleteQuoteHeroByNodeIdInput
};


export type MutationDeleteQuoteHeroArgs = {
  input: DeleteQuoteHeroInput
};


export type MutationDeleteQuotePublicByNodeIdArgs = {
  input: DeleteQuotePublicByNodeIdInput
};


export type MutationDeleteQuotePublicArgs = {
  input: DeleteQuotePublicInput
};


export type MutationDeleteReminderByNodeIdArgs = {
  input: DeleteReminderByNodeIdInput
};


export type MutationDeleteReminderArgs = {
  input: DeleteReminderInput
};


export type MutationDeleteSupplierByNodeIdArgs = {
  input: DeleteSupplierByNodeIdInput
};


export type MutationDeleteSupplierArgs = {
  input: DeleteSupplierInput
};


export type MutationDeleteSupplierInvoiceByNodeIdArgs = {
  input: DeleteSupplierInvoiceByNodeIdInput
};


export type MutationDeleteSupplierInvoiceArgs = {
  input: DeleteSupplierInvoiceInput
};


export type MutationDeleteTestimonialByNodeIdArgs = {
  input: DeleteTestimonialByNodeIdInput
};


export type MutationDeleteTestimonialArgs = {
  input: DeleteTestimonialInput
};


export type MutationDeleteTransactionByNodeIdArgs = {
  input: DeleteTransactionByNodeIdInput
};


export type MutationDeleteTransactionArgs = {
  input: DeleteTransactionInput
};


export type MutationDeleteTransactionImportBatchByNodeIdArgs = {
  input: DeleteTransactionImportBatchByNodeIdInput
};


export type MutationDeleteTransactionImportBatchArgs = {
  input: DeleteTransactionImportBatchInput
};


export type MutationDeleteTransactionLinkByNodeIdArgs = {
  input: DeleteTransactionLinkByNodeIdInput
};


export type MutationDeleteTransactionLinkArgs = {
  input: DeleteTransactionLinkInput
};


export type MutationDeleteTransactionNoteByNodeIdArgs = {
  input: DeleteTransactionNoteByNodeIdInput
};


export type MutationDeleteTransactionNoteArgs = {
  input: DeleteTransactionNoteInput
};


export type MutationDeleteTravellerByNodeIdArgs = {
  input: DeleteTravellerByNodeIdInput
};


export type MutationDeleteTravellerArgs = {
  input: DeleteTravellerInput
};


export type MutationDeleteTripByNodeIdArgs = {
  input: DeleteTripByNodeIdInput
};


export type MutationDeleteTripArgs = {
  input: DeleteTripInput
};


export type MutationDeleteTripTravellerByNodeIdArgs = {
  input: DeleteTripTravellerByNodeIdInput
};


export type MutationDeleteTripTravellerArgs = {
  input: DeleteTripTravellerInput
};


export type MutationDeleteTripFlightByNodeIdArgs = {
  input: DeleteTripFlightByNodeIdInput
};


export type MutationDeleteTripFlightArgs = {
  input: DeleteTripFlightInput
};


export type MutationDeleteUserByNodeIdArgs = {
  input: DeleteUserByNodeIdInput
};


export type MutationDeleteUserArgs = {
  input: DeleteUserInput
};


export type MutationDeleteVisaRequirementByNodeIdArgs = {
  input: DeleteVisaRequirementByNodeIdInput
};


export type MutationDeleteVisaRequirementArgs = {
  input: DeleteVisaRequirementInput
};


export type MutationDateWeekArgs = {
  input: DateWeekInput
};


export type MutationRandomStringArgs = {
  input: RandomStringInput
};


export type MutationRecordStripePaymentArgs = {
  input: RecordStripePaymentInput
};


export type MutationExecutePaymentArgs = {
  input: ExecutePaymentInput
};


export type MutationTrackQuoteViewArgs = {
  input: TrackQuoteViewInput
};

export type Node = {
  nodeId: Scalars['ID'],
};

export type Note = Node & {
   __typename?: 'Note',
  nodeId: Scalars['ID'],
  id: Scalars['UUID'],
  body?: Maybe<Scalars['String']>,
  created: Scalars['Datetime'],
  tripId?: Maybe<Scalars['UUID']>,
  userId: Scalars['UUID'],
  modified: Scalars['Datetime'],
  title?: Maybe<Scalars['String']>,
  trip?: Maybe<Trip>,
  user?: Maybe<User>,
};

export type NoteCondition = {
  id?: Maybe<Scalars['UUID']>,
  body?: Maybe<Scalars['String']>,
  created?: Maybe<Scalars['Datetime']>,
  tripId?: Maybe<Scalars['UUID']>,
  userId?: Maybe<Scalars['UUID']>,
  modified?: Maybe<Scalars['Datetime']>,
  title?: Maybe<Scalars['String']>,
};

export type NoteFilter = {
  id?: Maybe<UuidFilter>,
  body?: Maybe<StringFilter>,
  created?: Maybe<DatetimeFilter>,
  tripId?: Maybe<UuidFilter>,
  userId?: Maybe<UuidFilter>,
  modified?: Maybe<DatetimeFilter>,
  title?: Maybe<StringFilter>,
  trip?: Maybe<TripFilter>,
  tripExists?: Maybe<Scalars['Boolean']>,
  user?: Maybe<UserFilter>,
  and?: Maybe<Array<NoteFilter>>,
  or?: Maybe<Array<NoteFilter>>,
  not?: Maybe<NoteFilter>,
};

export type NoteInput = {
  id?: Maybe<Scalars['UUID']>,
  body?: Maybe<Scalars['String']>,
  created?: Maybe<Scalars['Datetime']>,
  tripId?: Maybe<Scalars['UUID']>,
  userId?: Maybe<Scalars['UUID']>,
  modified?: Maybe<Scalars['Datetime']>,
  title?: Maybe<Scalars['String']>,
  tripToTripId?: Maybe<FkNoteTripTripIdInput>,
  userToUserId?: Maybe<FkNoteUserUserIdInput>,
};

export type NoteNodeIdConnect = {
  nodeId: Scalars['ID'],
};

export type NoteNodeIdDelete = {
  nodeId: Scalars['ID'],
};

export type NoteOnNoteForFkNoteTripTripIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: TripPatch,
};

export type NoteOnNoteForFkNoteTripTripIdUsingPkNoteUpdate = {
  patch: UpdateNoteOnNoteForFkNoteTripTripIdPatch,
  id: Scalars['UUID'],
};

export type NoteOnNoteForFkNoteUserUserIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: UserPatch,
};

export type NoteOnNoteForFkNoteUserUserIdUsingPkNoteUpdate = {
  patch: UpdateNoteOnNoteForFkNoteUserUserIdPatch,
  id: Scalars['UUID'],
};

export type NotePatch = {
  id?: Maybe<Scalars['UUID']>,
  body?: Maybe<Scalars['String']>,
  created?: Maybe<Scalars['Datetime']>,
  tripId?: Maybe<Scalars['UUID']>,
  userId?: Maybe<Scalars['UUID']>,
  modified?: Maybe<Scalars['Datetime']>,
  title?: Maybe<Scalars['String']>,
  tripToTripId?: Maybe<FkNoteTripTripIdInput>,
  userToUserId?: Maybe<FkNoteUserUserIdInput>,
};

export type NotePkNoteConnect = {
  id: Scalars['UUID'],
};

export type NotePkNoteDelete = {
  id: Scalars['UUID'],
};

export type NotesConnection = {
   __typename?: 'NotesConnection',
  nodes: Array<Maybe<Note>>,
  edges: Array<NotesEdge>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
};

export type NotesEdge = {
   __typename?: 'NotesEdge',
  cursor?: Maybe<Scalars['Cursor']>,
  node?: Maybe<Note>,
};

export enum NotesOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  BodyAsc = 'BODY_ASC',
  BodyDesc = 'BODY_DESC',
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  TripIdAsc = 'TRIP_ID_ASC',
  TripIdDesc = 'TRIP_ID_DESC',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type Outstanding = {
   __typename?: 'Outstanding',
  outstanding?: Maybe<Scalars['BigFloat']>,
};

export type OutstandingCondition = {
  outstanding?: Maybe<Scalars['BigFloat']>,
};

export type OutstandingFilter = {
  outstanding?: Maybe<BigFloatFilter>,
  and?: Maybe<Array<OutstandingFilter>>,
  or?: Maybe<Array<OutstandingFilter>>,
  not?: Maybe<OutstandingFilter>,
};

export type OutstandingInput = {
  outstanding?: Maybe<Scalars['BigFloat']>,
};

export type OutstandingsConnection = {
   __typename?: 'OutstandingsConnection',
  nodes: Array<Maybe<Outstanding>>,
  edges: Array<OutstandingsEdge>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
};

export type OutstandingsEdge = {
   __typename?: 'OutstandingsEdge',
  cursor?: Maybe<Scalars['Cursor']>,
  node?: Maybe<Outstanding>,
};

export enum OutstandingsOrderBy {
  Natural = 'NATURAL',
  OutstandingAsc = 'OUTSTANDING_ASC',
  OutstandingDesc = 'OUTSTANDING_DESC'
}

export type PageInfo = {
   __typename?: 'PageInfo',
  hasNextPage: Scalars['Boolean'],
  hasPreviousPage: Scalars['Boolean'],
  startCursor?: Maybe<Scalars['Cursor']>,
  endCursor?: Maybe<Scalars['Cursor']>,
};

export type Passport = Node & {
   __typename?: 'Passport',
  nodeId: Scalars['ID'],
  id: Scalars['UUID'],
  countryOfIssue?: Maybe<Scalars['String']>,
  created: Scalars['Datetime'],
  expiry: Scalars['Datetime'],
  modified: Scalars['Datetime'],
  number?: Maybe<Scalars['String']>,
  travellerId: Scalars['UUID'],
  traveller?: Maybe<Traveller>,
};

export type PassportCondition = {
  id?: Maybe<Scalars['UUID']>,
  countryOfIssue?: Maybe<Scalars['String']>,
  created?: Maybe<Scalars['Datetime']>,
  expiry?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  number?: Maybe<Scalars['String']>,
  travellerId?: Maybe<Scalars['UUID']>,
};

export type PassportFilter = {
  id?: Maybe<UuidFilter>,
  countryOfIssue?: Maybe<StringFilter>,
  created?: Maybe<DatetimeFilter>,
  expiry?: Maybe<DatetimeFilter>,
  modified?: Maybe<DatetimeFilter>,
  number?: Maybe<StringFilter>,
  travellerId?: Maybe<UuidFilter>,
  traveller?: Maybe<TravellerFilter>,
  and?: Maybe<Array<PassportFilter>>,
  or?: Maybe<Array<PassportFilter>>,
  not?: Maybe<PassportFilter>,
};

export type PassportInput = {
  id?: Maybe<Scalars['UUID']>,
  countryOfIssue?: Maybe<Scalars['String']>,
  created?: Maybe<Scalars['Datetime']>,
  expiry: Scalars['Datetime'],
  modified?: Maybe<Scalars['Datetime']>,
  number?: Maybe<Scalars['String']>,
  travellerId?: Maybe<Scalars['UUID']>,
  travellerToTravellerId?: Maybe<FkPassportTravellerTravellerIdInput>,
};

export type PassportNodeIdConnect = {
  nodeId: Scalars['ID'],
};

export type PassportNodeIdDelete = {
  nodeId: Scalars['ID'],
};

export type PassportOnPassportForFkPassportTravellerTravellerIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: TravellerPatch,
};

export type PassportOnPassportForFkPassportTravellerTravellerIdUsingPkPassportUpdate = {
  patch: UpdatePassportOnPassportForFkPassportTravellerTravellerIdPatch,
  id: Scalars['UUID'],
};

export type PassportPatch = {
  id?: Maybe<Scalars['UUID']>,
  countryOfIssue?: Maybe<Scalars['String']>,
  created?: Maybe<Scalars['Datetime']>,
  expiry?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  number?: Maybe<Scalars['String']>,
  travellerId?: Maybe<Scalars['UUID']>,
  travellerToTravellerId?: Maybe<FkPassportTravellerTravellerIdInput>,
};

export type PassportPkPassportConnect = {
  id: Scalars['UUID'],
};

export type PassportPkPassportDelete = {
  id: Scalars['UUID'],
};

export type PassportsConnection = {
   __typename?: 'PassportsConnection',
  nodes: Array<Maybe<Passport>>,
  edges: Array<PassportsEdge>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
};

export type PassportsEdge = {
   __typename?: 'PassportsEdge',
  cursor?: Maybe<Scalars['Cursor']>,
  node?: Maybe<Passport>,
};

export enum PassportsOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  CountryOfIssueAsc = 'COUNTRY_OF_ISSUE_ASC',
  CountryOfIssueDesc = 'COUNTRY_OF_ISSUE_DESC',
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  ExpiryAsc = 'EXPIRY_ASC',
  ExpiryDesc = 'EXPIRY_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC',
  NumberAsc = 'NUMBER_ASC',
  NumberDesc = 'NUMBER_DESC',
  TravellerIdAsc = 'TRAVELLER_ID_ASC',
  TravellerIdDesc = 'TRAVELLER_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type Payment = Node & {
   __typename?: 'Payment',
  nodeId: Scalars['ID'],
  id: Scalars['UUID'],
  amount: Scalars['BigFloat'],
  amountActual: Scalars['BigFloat'],
  created: Scalars['Datetime'],
  currency?: Maybe<Scalars['String']>,
  invoiceId: Scalars['UUID'],
  modified: Scalars['Datetime'],
  paid: Scalars['Datetime'],
  reference?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  categoryId?: Maybe<Scalars['UUID']>,
  tripId?: Maybe<Scalars['UUID']>,
  type: Scalars['Int'],
  invoice?: Maybe<Invoice>,
  category?: Maybe<FinanceCategory>,
  trip?: Maybe<Trip>,
  transactionLinks: TransactionLinksConnection,
};


export type PaymentTransactionLinksArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<TransactionLinksOrderBy>>,
  condition?: Maybe<TransactionLinkCondition>,
  filter?: Maybe<TransactionLinkFilter>
};

export type PaymentCondition = {
  id?: Maybe<Scalars['UUID']>,
  amount?: Maybe<Scalars['BigFloat']>,
  amountActual?: Maybe<Scalars['BigFloat']>,
  created?: Maybe<Scalars['Datetime']>,
  currency?: Maybe<Scalars['String']>,
  invoiceId?: Maybe<Scalars['UUID']>,
  modified?: Maybe<Scalars['Datetime']>,
  paid?: Maybe<Scalars['Datetime']>,
  reference?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  categoryId?: Maybe<Scalars['UUID']>,
  tripId?: Maybe<Scalars['UUID']>,
  type?: Maybe<Scalars['Int']>,
};

export type PaymentFilter = {
  id?: Maybe<UuidFilter>,
  amount?: Maybe<BigFloatFilter>,
  amountActual?: Maybe<BigFloatFilter>,
  created?: Maybe<DatetimeFilter>,
  currency?: Maybe<StringFilter>,
  invoiceId?: Maybe<UuidFilter>,
  modified?: Maybe<DatetimeFilter>,
  paid?: Maybe<DatetimeFilter>,
  reference?: Maybe<StringFilter>,
  summary?: Maybe<StringFilter>,
  categoryId?: Maybe<UuidFilter>,
  tripId?: Maybe<UuidFilter>,
  type?: Maybe<IntFilter>,
  transactionLinks?: Maybe<PaymentToManyTransactionLinkFilter>,
  transactionLinksExist?: Maybe<Scalars['Boolean']>,
  invoice?: Maybe<InvoiceFilter>,
  category?: Maybe<FinanceCategoryFilter>,
  categoryExists?: Maybe<Scalars['Boolean']>,
  trip?: Maybe<TripFilter>,
  tripExists?: Maybe<Scalars['Boolean']>,
  and?: Maybe<Array<PaymentFilter>>,
  or?: Maybe<Array<PaymentFilter>>,
  not?: Maybe<PaymentFilter>,
};

export type PaymentInput = {
  id?: Maybe<Scalars['UUID']>,
  amount: Scalars['BigFloat'],
  amountActual: Scalars['BigFloat'],
  created?: Maybe<Scalars['Datetime']>,
  currency?: Maybe<Scalars['String']>,
  invoiceId?: Maybe<Scalars['UUID']>,
  modified?: Maybe<Scalars['Datetime']>,
  paid: Scalars['Datetime'],
  reference?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  categoryId?: Maybe<Scalars['UUID']>,
  tripId?: Maybe<Scalars['UUID']>,
  type?: Maybe<Scalars['Int']>,
  invoiceToInvoiceId?: Maybe<FkPaymentInvoiceInvoiceIdInput>,
  financeCategoryToCategoryId?: Maybe<FkPaymentFinanceCategoryCategoryIdInput>,
  tripToTripId?: Maybe<FkPaymentTripTripIdInput>,
  transactionLinksUsingId?: Maybe<FkTransactionLinkPaymentPaymentIdInverseInput>,
};

export type PaymentNodeIdConnect = {
  nodeId: Scalars['ID'],
};

export type PaymentNodeIdDelete = {
  nodeId: Scalars['ID'],
};

export type PaymentOnPaymentForFkPaymentFinanceCategoryCategoryIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: FinanceCategoryPatch,
};

export type PaymentOnPaymentForFkPaymentFinanceCategoryCategoryIdUsingPkPaymentUpdate = {
  patch: UpdatePaymentOnPaymentForFkPaymentFinanceCategoryCategoryIdPatch,
  id: Scalars['UUID'],
};

export type PaymentOnPaymentForFkPaymentInvoiceInvoiceIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: InvoicePatch,
};

export type PaymentOnPaymentForFkPaymentInvoiceInvoiceIdUsingPkPaymentUpdate = {
  patch: UpdatePaymentOnPaymentForFkPaymentInvoiceInvoiceIdPatch,
  id: Scalars['UUID'],
};

export type PaymentOnPaymentForFkPaymentTripTripIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: TripPatch,
};

export type PaymentOnPaymentForFkPaymentTripTripIdUsingPkPaymentUpdate = {
  patch: UpdatePaymentOnPaymentForFkPaymentTripTripIdPatch,
  id: Scalars['UUID'],
};

export type PaymentOnTransactionLinkForFkTransactionLinkPaymentPaymentIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: TransactionLinkPatch,
};

export type PaymentOnTransactionLinkForFkTransactionLinkPaymentPaymentIdUsingPkPaymentUpdate = {
  patch: UpdatePaymentOnTransactionLinkForFkTransactionLinkPaymentPaymentIdPatch,
  id: Scalars['UUID'],
};

export type PaymentPatch = {
  id?: Maybe<Scalars['UUID']>,
  amount?: Maybe<Scalars['BigFloat']>,
  amountActual?: Maybe<Scalars['BigFloat']>,
  created?: Maybe<Scalars['Datetime']>,
  currency?: Maybe<Scalars['String']>,
  invoiceId?: Maybe<Scalars['UUID']>,
  modified?: Maybe<Scalars['Datetime']>,
  paid?: Maybe<Scalars['Datetime']>,
  reference?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  categoryId?: Maybe<Scalars['UUID']>,
  tripId?: Maybe<Scalars['UUID']>,
  type?: Maybe<Scalars['Int']>,
  invoiceToInvoiceId?: Maybe<FkPaymentInvoiceInvoiceIdInput>,
  financeCategoryToCategoryId?: Maybe<FkPaymentFinanceCategoryCategoryIdInput>,
  tripToTripId?: Maybe<FkPaymentTripTripIdInput>,
  transactionLinksUsingId?: Maybe<FkTransactionLinkPaymentPaymentIdInverseInput>,
};

export type PaymentPkPaymentConnect = {
  id: Scalars['UUID'],
};

export type PaymentPkPaymentDelete = {
  id: Scalars['UUID'],
};

export type PaymentsConnection = {
   __typename?: 'PaymentsConnection',
  nodes: Array<Maybe<Payment>>,
  edges: Array<PaymentsEdge>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
};

export type PaymentsEdge = {
   __typename?: 'PaymentsEdge',
  cursor?: Maybe<Scalars['Cursor']>,
  node?: Maybe<Payment>,
};

export enum PaymentsOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  AmountAsc = 'AMOUNT_ASC',
  AmountDesc = 'AMOUNT_DESC',
  AmountActualAsc = 'AMOUNT_ACTUAL_ASC',
  AmountActualDesc = 'AMOUNT_ACTUAL_DESC',
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  CurrencyAsc = 'CURRENCY_ASC',
  CurrencyDesc = 'CURRENCY_DESC',
  InvoiceIdAsc = 'INVOICE_ID_ASC',
  InvoiceIdDesc = 'INVOICE_ID_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC',
  PaidAsc = 'PAID_ASC',
  PaidDesc = 'PAID_DESC',
  ReferenceAsc = 'REFERENCE_ASC',
  ReferenceDesc = 'REFERENCE_DESC',
  SummaryAsc = 'SUMMARY_ASC',
  SummaryDesc = 'SUMMARY_DESC',
  CategoryIdAsc = 'CATEGORY_ID_ASC',
  CategoryIdDesc = 'CATEGORY_ID_DESC',
  TripIdAsc = 'TRIP_ID_ASC',
  TripIdDesc = 'TRIP_ID_DESC',
  TypeAsc = 'TYPE_ASC',
  TypeDesc = 'TYPE_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type PaymentToManyTransactionLinkFilter = {
  every?: Maybe<TransactionLinkFilter>,
  some?: Maybe<TransactionLinkFilter>,
  none?: Maybe<TransactionLinkFilter>,
};

export type PropertiesConnection = {
   __typename?: 'PropertiesConnection',
  nodes: Array<Maybe<Property>>,
  edges: Array<PropertiesEdge>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
};

export type PropertiesEdge = {
   __typename?: 'PropertiesEdge',
  cursor?: Maybe<Scalars['Cursor']>,
  node?: Maybe<Property>,
};

export enum PropertiesOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  CityAsc = 'CITY_ASC',
  CityDesc = 'CITY_DESC',
  ContactEmailAsc = 'CONTACT_EMAIL_ASC',
  ContactEmailDesc = 'CONTACT_EMAIL_DESC',
  ContactNumberAsc = 'CONTACT_NUMBER_ASC',
  ContactNumberDesc = 'CONTACT_NUMBER_DESC',
  LatitudeAsc = 'LATITUDE_ASC',
  LatitudeDesc = 'LATITUDE_DESC',
  LongitudeAsc = 'LONGITUDE_ASC',
  LongitudeDesc = 'LONGITUDE_DESC',
  NearestAirportAsc = 'NEAREST_AIRPORT_ASC',
  NearestAirportDesc = 'NEAREST_AIRPORT_DESC',
  RegionAsc = 'REGION_ASC',
  RegionDesc = 'REGION_DESC',
  SummaryAsc = 'SUMMARY_ASC',
  SummaryDesc = 'SUMMARY_DESC',
  ExternalReferenceAsc = 'EXTERNAL_REFERENCE_ASC',
  ExternalReferenceDesc = 'EXTERNAL_REFERENCE_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  GalleryIdAsc = 'GALLERY_ID_ASC',
  GalleryIdDesc = 'GALLERY_ID_DESC',
  HeroMediaIdAsc = 'HERO_MEDIA_ID_ASC',
  HeroMediaIdDesc = 'HERO_MEDIA_ID_DESC',
  NotesAsc = 'NOTES_ASC',
  NotesDesc = 'NOTES_DESC',
  ArchivedAsc = 'ARCHIVED_ASC',
  ArchivedDesc = 'ARCHIVED_DESC',
  MapPointIdAsc = 'MAP_POINT_ID_ASC',
  MapPointIdDesc = 'MAP_POINT_ID_DESC',
  PlusCodeAsc = 'PLUS_CODE_ASC',
  PlusCodeDesc = 'PLUS_CODE_DESC',
  CountryIdAsc = 'COUNTRY_ID_ASC',
  CountryIdDesc = 'COUNTRY_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type Property = Node & {
   __typename?: 'Property',
  nodeId: Scalars['ID'],
  id: Scalars['UUID'],
  created: Scalars['Datetime'],
  modified: Scalars['Datetime'],
  name?: Maybe<Scalars['String']>,
  city?: Maybe<Scalars['String']>,
  contactEmail?: Maybe<Scalars['String']>,
  contactNumber?: Maybe<Scalars['String']>,
  latitude?: Maybe<Scalars['Float']>,
  longitude?: Maybe<Scalars['Float']>,
  nearestAirport?: Maybe<Scalars['String']>,
  region?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  externalReference?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
  galleryId?: Maybe<Scalars['UUID']>,
  heroMediaId?: Maybe<Scalars['UUID']>,
  notes?: Maybe<Scalars['String']>,
  archived?: Maybe<Scalars['Datetime']>,
  mapPointId?: Maybe<Scalars['UUID']>,
  plusCode?: Maybe<Scalars['String']>,
  countryId: Scalars['UUID'],
  gallery?: Maybe<MediaGallery>,
  heroMedia?: Maybe<MediaItem>,
  mapPoint?: Maybe<MapPoint>,
  country?: Maybe<Country>,
  quoteAccommodationDetails: QuoteAccommodationDetailsConnection,
  quoteDays: QuoteDaysConnection,
};


export type PropertyQuoteAccommodationDetailsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<QuoteAccommodationDetailsOrderBy>>,
  condition?: Maybe<QuoteAccommodationDetailCondition>,
  filter?: Maybe<QuoteAccommodationDetailFilter>
};


export type PropertyQuoteDaysArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<QuoteDaysOrderBy>>,
  condition?: Maybe<QuoteDayCondition>,
  filter?: Maybe<QuoteDayFilter>
};

export type PropertyCondition = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  city?: Maybe<Scalars['String']>,
  contactEmail?: Maybe<Scalars['String']>,
  contactNumber?: Maybe<Scalars['String']>,
  latitude?: Maybe<Scalars['Float']>,
  longitude?: Maybe<Scalars['Float']>,
  nearestAirport?: Maybe<Scalars['String']>,
  region?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  externalReference?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
  galleryId?: Maybe<Scalars['UUID']>,
  heroMediaId?: Maybe<Scalars['UUID']>,
  notes?: Maybe<Scalars['String']>,
  archived?: Maybe<Scalars['Datetime']>,
  mapPointId?: Maybe<Scalars['UUID']>,
  plusCode?: Maybe<Scalars['String']>,
  countryId?: Maybe<Scalars['UUID']>,
};

export type PropertyFilter = {
  id?: Maybe<UuidFilter>,
  created?: Maybe<DatetimeFilter>,
  modified?: Maybe<DatetimeFilter>,
  name?: Maybe<StringFilter>,
  city?: Maybe<StringFilter>,
  contactEmail?: Maybe<StringFilter>,
  contactNumber?: Maybe<StringFilter>,
  latitude?: Maybe<FloatFilter>,
  longitude?: Maybe<FloatFilter>,
  nearestAirport?: Maybe<StringFilter>,
  region?: Maybe<StringFilter>,
  summary?: Maybe<StringFilter>,
  externalReference?: Maybe<StringFilter>,
  url?: Maybe<StringFilter>,
  galleryId?: Maybe<UuidFilter>,
  heroMediaId?: Maybe<UuidFilter>,
  notes?: Maybe<StringFilter>,
  archived?: Maybe<DatetimeFilter>,
  mapPointId?: Maybe<UuidFilter>,
  plusCode?: Maybe<StringFilter>,
  countryId?: Maybe<UuidFilter>,
  quoteAccommodationDetails?: Maybe<PropertyToManyQuoteAccommodationDetailFilter>,
  quoteAccommodationDetailsExist?: Maybe<Scalars['Boolean']>,
  quoteDays?: Maybe<PropertyToManyQuoteDayFilter>,
  quoteDaysExist?: Maybe<Scalars['Boolean']>,
  gallery?: Maybe<MediaGalleryFilter>,
  galleryExists?: Maybe<Scalars['Boolean']>,
  heroMedia?: Maybe<MediaItemFilter>,
  heroMediaExists?: Maybe<Scalars['Boolean']>,
  mapPoint?: Maybe<MapPointFilter>,
  mapPointExists?: Maybe<Scalars['Boolean']>,
  country?: Maybe<CountryFilter>,
  and?: Maybe<Array<PropertyFilter>>,
  or?: Maybe<Array<PropertyFilter>>,
  not?: Maybe<PropertyFilter>,
};

export type PropertyInput = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  city?: Maybe<Scalars['String']>,
  contactEmail?: Maybe<Scalars['String']>,
  contactNumber?: Maybe<Scalars['String']>,
  latitude?: Maybe<Scalars['Float']>,
  longitude?: Maybe<Scalars['Float']>,
  nearestAirport?: Maybe<Scalars['String']>,
  region?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  externalReference?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
  galleryId?: Maybe<Scalars['UUID']>,
  heroMediaId?: Maybe<Scalars['UUID']>,
  notes?: Maybe<Scalars['String']>,
  archived?: Maybe<Scalars['Datetime']>,
  mapPointId?: Maybe<Scalars['UUID']>,
  plusCode?: Maybe<Scalars['String']>,
  countryId?: Maybe<Scalars['UUID']>,
  mediaGalleryToGalleryId?: Maybe<FkPropertyMediaGalleryGalleryIdInput>,
  mediaItemToHeroMediaId?: Maybe<FkPropertyMediaItemHeroMediaIdInput>,
  mapPointToMapPointId?: Maybe<FkPropertyMapPointMapPointIdInput>,
  countryToCountryId?: Maybe<FkPropertyCountryCountryIdInput>,
  quoteAccommodationDetailsUsingId?: Maybe<FkQuoteAccommodationDetailPropertyPropertyIdInverseInput>,
  quoteDaysUsingId?: Maybe<QuoteDayPropertyIdFkeyInverseInput>,
};

export type PropertyNodeIdConnect = {
  nodeId: Scalars['ID'],
};

export type PropertyNodeIdDelete = {
  nodeId: Scalars['ID'],
};

export type PropertyOnPropertyForFkPropertyCountryCountryIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: CountryPatch,
};

export type PropertyOnPropertyForFkPropertyCountryCountryIdUsingPkPropertyUpdate = {
  patch: UpdatePropertyOnPropertyForFkPropertyCountryCountryIdPatch,
  id: Scalars['UUID'],
};

export type PropertyOnPropertyForFkPropertyMapPointMapPointIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: MapPointPatch,
};

export type PropertyOnPropertyForFkPropertyMapPointMapPointIdUsingPkPropertyUpdate = {
  patch: UpdatePropertyOnPropertyForFkPropertyMapPointMapPointIdPatch,
  id: Scalars['UUID'],
};

export type PropertyOnPropertyForFkPropertyMediaGalleryGalleryIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: MediaGalleryPatch,
};

export type PropertyOnPropertyForFkPropertyMediaGalleryGalleryIdUsingPkPropertyUpdate = {
  patch: UpdatePropertyOnPropertyForFkPropertyMediaGalleryGalleryIdPatch,
  id: Scalars['UUID'],
};

export type PropertyOnPropertyForFkPropertyMediaItemHeroMediaIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: MediaItemPatch,
};

export type PropertyOnPropertyForFkPropertyMediaItemHeroMediaIdUsingPkPropertyUpdate = {
  patch: UpdatePropertyOnPropertyForFkPropertyMediaItemHeroMediaIdPatch,
  id: Scalars['UUID'],
};

export type PropertyOnQuoteAccommodationDetailForFkQuoteAccommodationDetailPropertyPropertyIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: QuoteAccommodationDetailPatch,
};

export type PropertyOnQuoteAccommodationDetailForFkQuoteAccommodationDetailPropertyPropertyIdUsingPkPropertyUpdate = {
  patch: UpdatePropertyOnQuoteAccommodationDetailForFkQuoteAccommodationDetailPropertyPropertyIdPatch,
  id: Scalars['UUID'],
};

export type PropertyOnQuoteDayForQuoteDayPropertyIdFkeyNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: QuoteDayPatch,
};

export type PropertyOnQuoteDayForQuoteDayPropertyIdFkeyUsingPkPropertyUpdate = {
  patch: UpdatePropertyOnQuoteDayForQuoteDayPropertyIdFkeyPatch,
  id: Scalars['UUID'],
};

export type PropertyPatch = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  city?: Maybe<Scalars['String']>,
  contactEmail?: Maybe<Scalars['String']>,
  contactNumber?: Maybe<Scalars['String']>,
  latitude?: Maybe<Scalars['Float']>,
  longitude?: Maybe<Scalars['Float']>,
  nearestAirport?: Maybe<Scalars['String']>,
  region?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  externalReference?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
  galleryId?: Maybe<Scalars['UUID']>,
  heroMediaId?: Maybe<Scalars['UUID']>,
  notes?: Maybe<Scalars['String']>,
  archived?: Maybe<Scalars['Datetime']>,
  mapPointId?: Maybe<Scalars['UUID']>,
  plusCode?: Maybe<Scalars['String']>,
  countryId?: Maybe<Scalars['UUID']>,
  mediaGalleryToGalleryId?: Maybe<FkPropertyMediaGalleryGalleryIdInput>,
  mediaItemToHeroMediaId?: Maybe<FkPropertyMediaItemHeroMediaIdInput>,
  mapPointToMapPointId?: Maybe<FkPropertyMapPointMapPointIdInput>,
  countryToCountryId?: Maybe<FkPropertyCountryCountryIdInput>,
  quoteAccommodationDetailsUsingId?: Maybe<FkQuoteAccommodationDetailPropertyPropertyIdInverseInput>,
  quoteDaysUsingId?: Maybe<QuoteDayPropertyIdFkeyInverseInput>,
};

export type PropertyPkPropertyConnect = {
  id: Scalars['UUID'],
};

export type PropertyPkPropertyDelete = {
  id: Scalars['UUID'],
};

export type PropertyToManyQuoteAccommodationDetailFilter = {
  every?: Maybe<QuoteAccommodationDetailFilter>,
  some?: Maybe<QuoteAccommodationDetailFilter>,
  none?: Maybe<QuoteAccommodationDetailFilter>,
};

export type PropertyToManyQuoteDayFilter = {
  every?: Maybe<QuoteDayFilter>,
  some?: Maybe<QuoteDayFilter>,
  none?: Maybe<QuoteDayFilter>,
};

export type Query = Node & {
   __typename?: 'Query',
  query: Query,
  nodeId: Scalars['ID'],
  node?: Maybe<Node>,
  accounts?: Maybe<AccountsConnection>,
  agencies?: Maybe<AgenciesConnection>,
  agencyMembers?: Maybe<AgencyMembersConnection>,
  airports?: Maybe<AirportsConnection>,
  combinedTransactions?: Maybe<CombinedTransactionsConnection>,
  countries?: Maybe<CountriesConnection>,
  customers?: Maybe<CustomersConnection>,
  customerTravellers?: Maybe<CustomerTravellersConnection>,
  dashboardSummaries?: Maybe<DashboardSummariesConnection>,
  destinations?: Maybe<DestinationsConnection>,
  destinationFeatures?: Maybe<DestinationFeaturesConnection>,
  destinationGuides?: Maybe<DestinationGuidesConnection>,
  emails?: Maybe<EmailsConnection>,
  enquiries?: Maybe<EnquiriesConnection>,
  expenses?: Maybe<ExpensesConnection>,
  features?: Maybe<FeaturesConnection>,
  financeCategories?: Maybe<FinanceCategoriesConnection>,
  invoices?: Maybe<InvoicesConnection>,
  invoicePublics?: Maybe<InvoicePublicsConnection>,
  invoiceSummaries?: Maybe<InvoiceSummariesConnection>,
  mapPoints?: Maybe<MapPointsConnection>,
  mediaGalleries?: Maybe<MediaGalleriesConnection>,
  mediaGalleryItems?: Maybe<MediaGalleryItemsConnection>,
  mediaItems?: Maybe<MediaItemsConnection>,
  notes?: Maybe<NotesConnection>,
  passports?: Maybe<PassportsConnection>,
  payments?: Maybe<PaymentsConnection>,
  properties?: Maybe<PropertiesConnection>,
  quotes?: Maybe<QuotesConnection>,
  quoteViews?: Maybe<QuoteViewsConnection>,
  quoteAccommodationDetails?: Maybe<QuoteAccommodationDetailsConnection>,
  quoteCurrencies?: Maybe<QuoteCurrenciesConnection>,
  quoteDays?: Maybe<QuoteDaysConnection>,
  quoteDayDestinations?: Maybe<QuoteDayDestinationsConnection>,
  quoteFinanceLineItems?: Maybe<QuoteFinanceLineItemsConnection>,
  quoteFinanceLineItemSummaries?: Maybe<QuoteFinanceLineItemSummariesConnection>,
  quoteFinanceSummaries?: Maybe<QuoteFinanceSummariesConnection>,
  quoteHeroes?: Maybe<QuoteHeroesConnection>,
  quotePublics?: Maybe<QuotePublicsConnection>,
  reminders?: Maybe<RemindersConnection>,
  suppliers?: Maybe<SuppliersConnection>,
  supplierInvoices?: Maybe<SupplierInvoicesConnection>,
  testimonials?: Maybe<TestimonialsConnection>,
  timelines?: Maybe<TimelinesConnection>,
  transactions?: Maybe<TransactionsConnection>,
  transactionImportBatches?: Maybe<TransactionImportBatchesConnection>,
  transactionLinks?: Maybe<TransactionLinksConnection>,
  transactionNotes?: Maybe<TransactionNotesConnection>,
  travellers?: Maybe<TravellersConnection>,
  trips?: Maybe<TripsConnection>,
  tripTravellers?: Maybe<TripTravellersConnection>,
  tripFlights?: Maybe<TripFlightsConnection>,
  users?: Maybe<UsersConnection>,
  virtualTransactions?: Maybe<VirtualTransactionsConnection>,
  visaRequirements?: Maybe<VisaRequirementsConnection>,
  outstandings?: Maybe<OutstandingsConnection>,
  account?: Maybe<Account>,
  agency?: Maybe<Agency>,
  agencyMember?: Maybe<AgencyMember>,
  airport?: Maybe<Airport>,
  country?: Maybe<Country>,
  customer?: Maybe<Customer>,
  customerTraveller?: Maybe<CustomerTraveller>,
  destination?: Maybe<Destination>,
  destinationFeature?: Maybe<DestinationFeature>,
  destinationGuide?: Maybe<DestinationGuide>,
  email?: Maybe<Email>,
  enquiry?: Maybe<Enquiry>,
  expense?: Maybe<Expense>,
  feature?: Maybe<Feature>,
  financeCategory?: Maybe<FinanceCategory>,
  invoice?: Maybe<Invoice>,
  invoicePublic?: Maybe<InvoicePublic>,
  mapPoint?: Maybe<MapPoint>,
  mediaGallery?: Maybe<MediaGallery>,
  mediaGalleryItem?: Maybe<MediaGalleryItem>,
  mediaItem?: Maybe<MediaItem>,
  note?: Maybe<Note>,
  passport?: Maybe<Passport>,
  payment?: Maybe<Payment>,
  property?: Maybe<Property>,
  quote?: Maybe<Quote>,
  quoteView?: Maybe<QuoteView>,
  quoteAccommodationDetail?: Maybe<QuoteAccommodationDetail>,
  quoteCurrency?: Maybe<QuoteCurrency>,
  quoteDay?: Maybe<QuoteDay>,
  quoteDayDestination?: Maybe<QuoteDayDestination>,
  quoteFinanceLineItem?: Maybe<QuoteFinanceLineItem>,
  quoteHero?: Maybe<QuoteHero>,
  quotePublic?: Maybe<QuotePublic>,
  reminder?: Maybe<Reminder>,
  supplier?: Maybe<Supplier>,
  supplierInvoice?: Maybe<SupplierInvoice>,
  testimonial?: Maybe<Testimonial>,
  transaction?: Maybe<Transaction>,
  transactionImportBatch?: Maybe<TransactionImportBatch>,
  transactionLink?: Maybe<TransactionLink>,
  transactionNote?: Maybe<TransactionNote>,
  traveller?: Maybe<Traveller>,
  trip?: Maybe<Trip>,
  tripTraveller?: Maybe<TripTraveller>,
  tripFlight?: Maybe<TripFlight>,
  user?: Maybe<User>,
  visaRequirement?: Maybe<VisaRequirement>,
  currentUserRoles?: Maybe<Scalars['String']>,
  currentUserSub?: Maybe<Scalars['String']>,
  userCan?: Maybe<Scalars['Boolean']>,
  accountByNodeId?: Maybe<Account>,
  agencyByNodeId?: Maybe<Agency>,
  agencyMemberByNodeId?: Maybe<AgencyMember>,
  airportByNodeId?: Maybe<Airport>,
  countryByNodeId?: Maybe<Country>,
  customerByNodeId?: Maybe<Customer>,
  customerTravellerByNodeId?: Maybe<CustomerTraveller>,
  destinationByNodeId?: Maybe<Destination>,
  destinationFeatureByNodeId?: Maybe<DestinationFeature>,
  destinationGuideByNodeId?: Maybe<DestinationGuide>,
  emailByNodeId?: Maybe<Email>,
  enquiryByNodeId?: Maybe<Enquiry>,
  expenseByNodeId?: Maybe<Expense>,
  featureByNodeId?: Maybe<Feature>,
  financeCategoryByNodeId?: Maybe<FinanceCategory>,
  invoiceByNodeId?: Maybe<Invoice>,
  invoicePublicByNodeId?: Maybe<InvoicePublic>,
  mapPointByNodeId?: Maybe<MapPoint>,
  mediaGalleryByNodeId?: Maybe<MediaGallery>,
  mediaGalleryItemByNodeId?: Maybe<MediaGalleryItem>,
  mediaItemByNodeId?: Maybe<MediaItem>,
  noteByNodeId?: Maybe<Note>,
  passportByNodeId?: Maybe<Passport>,
  paymentByNodeId?: Maybe<Payment>,
  propertyByNodeId?: Maybe<Property>,
  quoteByNodeId?: Maybe<Quote>,
  quoteViewByNodeId?: Maybe<QuoteView>,
  quoteAccommodationDetailByNodeId?: Maybe<QuoteAccommodationDetail>,
  quoteCurrencyByNodeId?: Maybe<QuoteCurrency>,
  quoteDayByNodeId?: Maybe<QuoteDay>,
  quoteDayDestinationByNodeId?: Maybe<QuoteDayDestination>,
  quoteFinanceLineItemByNodeId?: Maybe<QuoteFinanceLineItem>,
  quoteHeroByNodeId?: Maybe<QuoteHero>,
  quotePublicByNodeId?: Maybe<QuotePublic>,
  reminderByNodeId?: Maybe<Reminder>,
  supplierByNodeId?: Maybe<Supplier>,
  supplierInvoiceByNodeId?: Maybe<SupplierInvoice>,
  testimonialByNodeId?: Maybe<Testimonial>,
  transactionByNodeId?: Maybe<Transaction>,
  transactionImportBatchByNodeId?: Maybe<TransactionImportBatch>,
  transactionLinkByNodeId?: Maybe<TransactionLink>,
  transactionNoteByNodeId?: Maybe<TransactionNote>,
  travellerByNodeId?: Maybe<Traveller>,
  tripByNodeId?: Maybe<Trip>,
  tripTravellerByNodeId?: Maybe<TripTraveller>,
  tripFlightByNodeId?: Maybe<TripFlight>,
  userByNodeId?: Maybe<User>,
  visaRequirementByNodeId?: Maybe<VisaRequirement>,
};


export type QueryNodeArgs = {
  nodeId: Scalars['ID']
};


export type QueryAccountsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<AccountsOrderBy>>,
  condition?: Maybe<AccountCondition>,
  filter?: Maybe<AccountFilter>
};


export type QueryAgenciesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<AgenciesOrderBy>>,
  condition?: Maybe<AgencyCondition>,
  filter?: Maybe<AgencyFilter>
};


export type QueryAgencyMembersArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<AgencyMembersOrderBy>>,
  condition?: Maybe<AgencyMemberCondition>,
  filter?: Maybe<AgencyMemberFilter>
};


export type QueryAirportsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<AirportsOrderBy>>,
  condition?: Maybe<AirportCondition>,
  filter?: Maybe<AirportFilter>
};


export type QueryCombinedTransactionsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<CombinedTransactionsOrderBy>>,
  condition?: Maybe<CombinedTransactionCondition>,
  filter?: Maybe<CombinedTransactionFilter>
};


export type QueryCountriesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<CountriesOrderBy>>,
  condition?: Maybe<CountryCondition>,
  filter?: Maybe<CountryFilter>
};


export type QueryCustomersArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<CustomersOrderBy>>,
  condition?: Maybe<CustomerCondition>,
  filter?: Maybe<CustomerFilter>
};


export type QueryCustomerTravellersArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<CustomerTravellersOrderBy>>,
  condition?: Maybe<CustomerTravellerCondition>,
  filter?: Maybe<CustomerTravellerFilter>
};


export type QueryDashboardSummariesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<DashboardSummariesOrderBy>>,
  condition?: Maybe<DashboardSummaryCondition>,
  filter?: Maybe<DashboardSummaryFilter>
};


export type QueryDestinationsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<DestinationsOrderBy>>,
  condition?: Maybe<DestinationCondition>,
  filter?: Maybe<DestinationFilter>
};


export type QueryDestinationFeaturesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<DestinationFeaturesOrderBy>>,
  condition?: Maybe<DestinationFeatureCondition>,
  filter?: Maybe<DestinationFeatureFilter>
};


export type QueryDestinationGuidesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<DestinationGuidesOrderBy>>,
  condition?: Maybe<DestinationGuideCondition>,
  filter?: Maybe<DestinationGuideFilter>
};


export type QueryEmailsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<EmailsOrderBy>>,
  condition?: Maybe<EmailCondition>,
  filter?: Maybe<EmailFilter>
};


export type QueryEnquiriesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<EnquiriesOrderBy>>,
  condition?: Maybe<EnquiryCondition>,
  filter?: Maybe<EnquiryFilter>
};


export type QueryExpensesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<ExpensesOrderBy>>,
  condition?: Maybe<ExpenseCondition>,
  filter?: Maybe<ExpenseFilter>
};


export type QueryFeaturesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<FeaturesOrderBy>>,
  condition?: Maybe<FeatureCondition>,
  filter?: Maybe<FeatureFilter>
};


export type QueryFinanceCategoriesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<FinanceCategoriesOrderBy>>,
  condition?: Maybe<FinanceCategoryCondition>,
  filter?: Maybe<FinanceCategoryFilter>
};


export type QueryInvoicesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<InvoicesOrderBy>>,
  condition?: Maybe<InvoiceCondition>,
  filter?: Maybe<InvoiceFilter>
};


export type QueryInvoicePublicsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<InvoicePublicsOrderBy>>,
  condition?: Maybe<InvoicePublicCondition>,
  filter?: Maybe<InvoicePublicFilter>
};


export type QueryInvoiceSummariesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<InvoiceSummariesOrderBy>>,
  condition?: Maybe<InvoiceSummaryCondition>,
  filter?: Maybe<InvoiceSummaryFilter>
};


export type QueryMapPointsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<MapPointsOrderBy>>,
  condition?: Maybe<MapPointCondition>,
  filter?: Maybe<MapPointFilter>
};


export type QueryMediaGalleriesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<MediaGalleriesOrderBy>>,
  condition?: Maybe<MediaGalleryCondition>,
  filter?: Maybe<MediaGalleryFilter>
};


export type QueryMediaGalleryItemsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<MediaGalleryItemsOrderBy>>,
  condition?: Maybe<MediaGalleryItemCondition>,
  filter?: Maybe<MediaGalleryItemFilter>
};


export type QueryMediaItemsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<MediaItemsOrderBy>>,
  condition?: Maybe<MediaItemCondition>,
  filter?: Maybe<MediaItemFilter>
};


export type QueryNotesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<NotesOrderBy>>,
  condition?: Maybe<NoteCondition>,
  filter?: Maybe<NoteFilter>
};


export type QueryPassportsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<PassportsOrderBy>>,
  condition?: Maybe<PassportCondition>,
  filter?: Maybe<PassportFilter>
};


export type QueryPaymentsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<PaymentsOrderBy>>,
  condition?: Maybe<PaymentCondition>,
  filter?: Maybe<PaymentFilter>
};


export type QueryPropertiesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<PropertiesOrderBy>>,
  condition?: Maybe<PropertyCondition>,
  filter?: Maybe<PropertyFilter>
};


export type QueryQuotesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<QuotesOrderBy>>,
  condition?: Maybe<QuoteCondition>,
  filter?: Maybe<QuoteFilter>
};


export type QueryQuoteViewsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<QuoteViewsOrderBy>>,
  condition?: Maybe<QuoteViewCondition>,
  filter?: Maybe<QuoteViewFilter>
};


export type QueryQuoteAccommodationDetailsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<QuoteAccommodationDetailsOrderBy>>,
  condition?: Maybe<QuoteAccommodationDetailCondition>,
  filter?: Maybe<QuoteAccommodationDetailFilter>
};


export type QueryQuoteCurrenciesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<QuoteCurrenciesOrderBy>>,
  condition?: Maybe<QuoteCurrencyCondition>,
  filter?: Maybe<QuoteCurrencyFilter>
};


export type QueryQuoteDaysArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<QuoteDaysOrderBy>>,
  condition?: Maybe<QuoteDayCondition>,
  filter?: Maybe<QuoteDayFilter>
};


export type QueryQuoteDayDestinationsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<QuoteDayDestinationsOrderBy>>,
  condition?: Maybe<QuoteDayDestinationCondition>,
  filter?: Maybe<QuoteDayDestinationFilter>
};


export type QueryQuoteFinanceLineItemsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<QuoteFinanceLineItemsOrderBy>>,
  condition?: Maybe<QuoteFinanceLineItemCondition>,
  filter?: Maybe<QuoteFinanceLineItemFilter>
};


export type QueryQuoteFinanceLineItemSummariesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<QuoteFinanceLineItemSummariesOrderBy>>,
  condition?: Maybe<QuoteFinanceLineItemSummaryCondition>,
  filter?: Maybe<QuoteFinanceLineItemSummaryFilter>
};


export type QueryQuoteFinanceSummariesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<QuoteFinanceSummariesOrderBy>>,
  condition?: Maybe<QuoteFinanceSummaryCondition>,
  filter?: Maybe<QuoteFinanceSummaryFilter>
};


export type QueryQuoteHeroesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<QuoteHeroesOrderBy>>,
  condition?: Maybe<QuoteHeroCondition>,
  filter?: Maybe<QuoteHeroFilter>
};


export type QueryQuotePublicsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<QuotePublicsOrderBy>>,
  condition?: Maybe<QuotePublicCondition>,
  filter?: Maybe<QuotePublicFilter>
};


export type QueryRemindersArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<RemindersOrderBy>>,
  condition?: Maybe<ReminderCondition>,
  filter?: Maybe<ReminderFilter>
};


export type QuerySuppliersArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<SuppliersOrderBy>>,
  condition?: Maybe<SupplierCondition>,
  filter?: Maybe<SupplierFilter>
};


export type QuerySupplierInvoicesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<SupplierInvoicesOrderBy>>,
  condition?: Maybe<SupplierInvoiceCondition>,
  filter?: Maybe<SupplierInvoiceFilter>
};


export type QueryTestimonialsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<TestimonialsOrderBy>>,
  condition?: Maybe<TestimonialCondition>,
  filter?: Maybe<TestimonialFilter>
};


export type QueryTimelinesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<TimelinesOrderBy>>,
  condition?: Maybe<TimelineCondition>,
  filter?: Maybe<TimelineFilter>
};


export type QueryTransactionsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<TransactionsOrderBy>>,
  condition?: Maybe<TransactionCondition>,
  filter?: Maybe<TransactionFilter>
};


export type QueryTransactionImportBatchesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<TransactionImportBatchesOrderBy>>,
  condition?: Maybe<TransactionImportBatchCondition>,
  filter?: Maybe<TransactionImportBatchFilter>
};


export type QueryTransactionLinksArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<TransactionLinksOrderBy>>,
  condition?: Maybe<TransactionLinkCondition>,
  filter?: Maybe<TransactionLinkFilter>
};


export type QueryTransactionNotesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<TransactionNotesOrderBy>>,
  condition?: Maybe<TransactionNoteCondition>,
  filter?: Maybe<TransactionNoteFilter>
};


export type QueryTravellersArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<TravellersOrderBy>>,
  condition?: Maybe<TravellerCondition>,
  filter?: Maybe<TravellerFilter>
};


export type QueryTripsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<TripsOrderBy>>,
  condition?: Maybe<TripCondition>,
  filter?: Maybe<TripFilter>
};


export type QueryTripTravellersArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<TripTravellersOrderBy>>,
  condition?: Maybe<TripTravellerCondition>,
  filter?: Maybe<TripTravellerFilter>
};


export type QueryTripFlightsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<TripFlightsOrderBy>>,
  condition?: Maybe<TripFlightCondition>,
  filter?: Maybe<TripFlightFilter>
};


export type QueryUsersArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<UsersOrderBy>>,
  condition?: Maybe<UserCondition>,
  filter?: Maybe<UserFilter>
};


export type QueryVirtualTransactionsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<VirtualTransactionsOrderBy>>,
  condition?: Maybe<VirtualTransactionCondition>,
  filter?: Maybe<VirtualTransactionFilter>
};


export type QueryVisaRequirementsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<VisaRequirementsOrderBy>>,
  condition?: Maybe<VisaRequirementCondition>,
  filter?: Maybe<VisaRequirementFilter>
};


export type QueryOutstandingsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<OutstandingsOrderBy>>,
  condition?: Maybe<OutstandingCondition>,
  filter?: Maybe<OutstandingFilter>
};


export type QueryAccountArgs = {
  id: Scalars['UUID']
};


export type QueryAgencyArgs = {
  id: Scalars['UUID']
};


export type QueryAgencyMemberArgs = {
  id: Scalars['UUID']
};


export type QueryAirportArgs = {
  id: Scalars['UUID']
};


export type QueryCountryArgs = {
  id: Scalars['UUID']
};


export type QueryCustomerArgs = {
  id: Scalars['UUID']
};


export type QueryCustomerTravellerArgs = {
  id: Scalars['UUID']
};


export type QueryDestinationArgs = {
  id: Scalars['UUID']
};


export type QueryDestinationFeatureArgs = {
  id: Scalars['UUID']
};


export type QueryDestinationGuideArgs = {
  id: Scalars['UUID']
};


export type QueryEmailArgs = {
  id: Scalars['UUID']
};


export type QueryEnquiryArgs = {
  id: Scalars['UUID']
};


export type QueryExpenseArgs = {
  id: Scalars['UUID']
};


export type QueryFeatureArgs = {
  id: Scalars['UUID']
};


export type QueryFinanceCategoryArgs = {
  id: Scalars['UUID']
};


export type QueryInvoiceArgs = {
  id: Scalars['UUID']
};


export type QueryInvoicePublicArgs = {
  id: Scalars['UUID']
};


export type QueryMapPointArgs = {
  id: Scalars['UUID']
};


export type QueryMediaGalleryArgs = {
  id: Scalars['UUID']
};


export type QueryMediaGalleryItemArgs = {
  id: Scalars['UUID']
};


export type QueryMediaItemArgs = {
  id: Scalars['UUID']
};


export type QueryNoteArgs = {
  id: Scalars['UUID']
};


export type QueryPassportArgs = {
  id: Scalars['UUID']
};


export type QueryPaymentArgs = {
  id: Scalars['UUID']
};


export type QueryPropertyArgs = {
  id: Scalars['UUID']
};


export type QueryQuoteArgs = {
  id: Scalars['UUID']
};


export type QueryQuoteViewArgs = {
  id: Scalars['UUID']
};


export type QueryQuoteAccommodationDetailArgs = {
  id: Scalars['UUID']
};


export type QueryQuoteCurrencyArgs = {
  id: Scalars['UUID']
};


export type QueryQuoteDayArgs = {
  id: Scalars['UUID']
};


export type QueryQuoteDayDestinationArgs = {
  id: Scalars['UUID']
};


export type QueryQuoteFinanceLineItemArgs = {
  id: Scalars['UUID']
};


export type QueryQuoteHeroArgs = {
  id: Scalars['UUID']
};


export type QueryQuotePublicArgs = {
  key: Scalars['String']
};


export type QueryReminderArgs = {
  id: Scalars['UUID']
};


export type QuerySupplierArgs = {
  id: Scalars['UUID']
};


export type QuerySupplierInvoiceArgs = {
  id: Scalars['UUID']
};


export type QueryTestimonialArgs = {
  id: Scalars['UUID']
};


export type QueryTransactionArgs = {
  id: Scalars['UUID']
};


export type QueryTransactionImportBatchArgs = {
  id: Scalars['UUID']
};


export type QueryTransactionLinkArgs = {
  id: Scalars['UUID']
};


export type QueryTransactionNoteArgs = {
  id: Scalars['UUID']
};


export type QueryTravellerArgs = {
  id: Scalars['UUID']
};


export type QueryTripArgs = {
  id: Scalars['UUID']
};


export type QueryTripTravellerArgs = {
  id: Scalars['UUID']
};


export type QueryTripFlightArgs = {
  id: Scalars['UUID']
};


export type QueryUserArgs = {
  id: Scalars['UUID']
};


export type QueryVisaRequirementArgs = {
  id: Scalars['UUID']
};


export type QueryUserCanArgs = {
  task?: Maybe<Scalars['String']>
};


export type QueryAccountByNodeIdArgs = {
  nodeId: Scalars['ID']
};


export type QueryAgencyByNodeIdArgs = {
  nodeId: Scalars['ID']
};


export type QueryAgencyMemberByNodeIdArgs = {
  nodeId: Scalars['ID']
};


export type QueryAirportByNodeIdArgs = {
  nodeId: Scalars['ID']
};


export type QueryCountryByNodeIdArgs = {
  nodeId: Scalars['ID']
};


export type QueryCustomerByNodeIdArgs = {
  nodeId: Scalars['ID']
};


export type QueryCustomerTravellerByNodeIdArgs = {
  nodeId: Scalars['ID']
};


export type QueryDestinationByNodeIdArgs = {
  nodeId: Scalars['ID']
};


export type QueryDestinationFeatureByNodeIdArgs = {
  nodeId: Scalars['ID']
};


export type QueryDestinationGuideByNodeIdArgs = {
  nodeId: Scalars['ID']
};


export type QueryEmailByNodeIdArgs = {
  nodeId: Scalars['ID']
};


export type QueryEnquiryByNodeIdArgs = {
  nodeId: Scalars['ID']
};


export type QueryExpenseByNodeIdArgs = {
  nodeId: Scalars['ID']
};


export type QueryFeatureByNodeIdArgs = {
  nodeId: Scalars['ID']
};


export type QueryFinanceCategoryByNodeIdArgs = {
  nodeId: Scalars['ID']
};


export type QueryInvoiceByNodeIdArgs = {
  nodeId: Scalars['ID']
};


export type QueryInvoicePublicByNodeIdArgs = {
  nodeId: Scalars['ID']
};


export type QueryMapPointByNodeIdArgs = {
  nodeId: Scalars['ID']
};


export type QueryMediaGalleryByNodeIdArgs = {
  nodeId: Scalars['ID']
};


export type QueryMediaGalleryItemByNodeIdArgs = {
  nodeId: Scalars['ID']
};


export type QueryMediaItemByNodeIdArgs = {
  nodeId: Scalars['ID']
};


export type QueryNoteByNodeIdArgs = {
  nodeId: Scalars['ID']
};


export type QueryPassportByNodeIdArgs = {
  nodeId: Scalars['ID']
};


export type QueryPaymentByNodeIdArgs = {
  nodeId: Scalars['ID']
};


export type QueryPropertyByNodeIdArgs = {
  nodeId: Scalars['ID']
};


export type QueryQuoteByNodeIdArgs = {
  nodeId: Scalars['ID']
};


export type QueryQuoteViewByNodeIdArgs = {
  nodeId: Scalars['ID']
};


export type QueryQuoteAccommodationDetailByNodeIdArgs = {
  nodeId: Scalars['ID']
};


export type QueryQuoteCurrencyByNodeIdArgs = {
  nodeId: Scalars['ID']
};


export type QueryQuoteDayByNodeIdArgs = {
  nodeId: Scalars['ID']
};


export type QueryQuoteDayDestinationByNodeIdArgs = {
  nodeId: Scalars['ID']
};


export type QueryQuoteFinanceLineItemByNodeIdArgs = {
  nodeId: Scalars['ID']
};


export type QueryQuoteHeroByNodeIdArgs = {
  nodeId: Scalars['ID']
};


export type QueryQuotePublicByNodeIdArgs = {
  nodeId: Scalars['ID']
};


export type QueryReminderByNodeIdArgs = {
  nodeId: Scalars['ID']
};


export type QuerySupplierByNodeIdArgs = {
  nodeId: Scalars['ID']
};


export type QuerySupplierInvoiceByNodeIdArgs = {
  nodeId: Scalars['ID']
};


export type QueryTestimonialByNodeIdArgs = {
  nodeId: Scalars['ID']
};


export type QueryTransactionByNodeIdArgs = {
  nodeId: Scalars['ID']
};


export type QueryTransactionImportBatchByNodeIdArgs = {
  nodeId: Scalars['ID']
};


export type QueryTransactionLinkByNodeIdArgs = {
  nodeId: Scalars['ID']
};


export type QueryTransactionNoteByNodeIdArgs = {
  nodeId: Scalars['ID']
};


export type QueryTravellerByNodeIdArgs = {
  nodeId: Scalars['ID']
};


export type QueryTripByNodeIdArgs = {
  nodeId: Scalars['ID']
};


export type QueryTripTravellerByNodeIdArgs = {
  nodeId: Scalars['ID']
};


export type QueryTripFlightByNodeIdArgs = {
  nodeId: Scalars['ID']
};


export type QueryUserByNodeIdArgs = {
  nodeId: Scalars['ID']
};


export type QueryVisaRequirementByNodeIdArgs = {
  nodeId: Scalars['ID']
};

export type Quote = Node & {
   __typename?: 'Quote',
  nodeId: Scalars['ID'],
  id: Scalars['UUID'],
  created: Scalars['Datetime'],
  duration: Scalars['Int'],
  modified: Scalars['Datetime'],
  start?: Maybe<Scalars['Datetime']>,
  tripId: Scalars['UUID'],
  deposit: Scalars['BigFloat'],
  margin: Scalars['BigFloat'],
  key?: Maybe<Scalars['String']>,
  expires: Scalars['Datetime'],
  total: Scalars['BigFloat'],
  adjustment: Scalars['BigFloat'],
  baseCurrency?: Maybe<Scalars['String']>,
  shortDescription?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  heroImageId?: Maybe<Scalars['UUID']>,
  exclusions?: Maybe<Scalars['String']>,
  inclusions?: Maybe<Scalars['String']>,
  status: Scalars['Int'],
  agentMargin: Scalars['BigFloat'],
  travellerCount: Scalars['Int'],
  archived?: Maybe<Scalars['Datetime']>,
  lastViewed?: Maybe<Scalars['Datetime']>,
  heroId?: Maybe<Scalars['UUID']>,
  userId?: Maybe<Scalars['UUID']>,
  locked?: Maybe<Scalars['Datetime']>,
  trip?: Maybe<Trip>,
  heroImage?: Maybe<MediaItem>,
  hero?: Maybe<QuoteHero>,
  user?: Maybe<User>,
  invoices: InvoicesConnection,
  tripsByActiveQuoteId: TripsConnection,
  emails: EmailsConnection,
  quoteViews: QuoteViewsConnection,
  quoteAccommodationDetails: QuoteAccommodationDetailsConnection,
  quoteCurrencies: QuoteCurrenciesConnection,
  quoteDays: QuoteDaysConnection,
  quoteFinanceLineItems: QuoteFinanceLineItemsConnection,
};


export type QuoteInvoicesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<InvoicesOrderBy>>,
  condition?: Maybe<InvoiceCondition>,
  filter?: Maybe<InvoiceFilter>
};


export type QuoteTripsByActiveQuoteIdArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<TripsOrderBy>>,
  condition?: Maybe<TripCondition>,
  filter?: Maybe<TripFilter>
};


export type QuoteEmailsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<EmailsOrderBy>>,
  condition?: Maybe<EmailCondition>,
  filter?: Maybe<EmailFilter>
};


export type QuoteQuoteViewsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<QuoteViewsOrderBy>>,
  condition?: Maybe<QuoteViewCondition>,
  filter?: Maybe<QuoteViewFilter>
};


export type QuoteQuoteAccommodationDetailsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<QuoteAccommodationDetailsOrderBy>>,
  condition?: Maybe<QuoteAccommodationDetailCondition>,
  filter?: Maybe<QuoteAccommodationDetailFilter>
};


export type QuoteQuoteCurrenciesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<QuoteCurrenciesOrderBy>>,
  condition?: Maybe<QuoteCurrencyCondition>,
  filter?: Maybe<QuoteCurrencyFilter>
};


export type QuoteQuoteDaysArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<QuoteDaysOrderBy>>,
  condition?: Maybe<QuoteDayCondition>,
  filter?: Maybe<QuoteDayFilter>
};


export type QuoteQuoteFinanceLineItemsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<QuoteFinanceLineItemsOrderBy>>,
  condition?: Maybe<QuoteFinanceLineItemCondition>,
  filter?: Maybe<QuoteFinanceLineItemFilter>
};

export type QuoteAccommodationDetail = Node & {
   __typename?: 'QuoteAccommodationDetail',
  nodeId: Scalars['ID'],
  id: Scalars['UUID'],
  order: Scalars['Int'],
  nights: Scalars['Int'],
  notes?: Maybe<Scalars['String']>,
  propertyId?: Maybe<Scalars['UUID']>,
  quoteId?: Maybe<Scalars['UUID']>,
  basis?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  confirmation?: Maybe<Scalars['String']>,
  beverageInclusions?: Maybe<Array<Maybe<Scalars['String']>>>,
  foodInclusions?: Maybe<Array<Maybe<Scalars['String']>>>,
  roomType?: Maybe<Scalars['String']>,
  property?: Maybe<Property>,
  quote?: Maybe<Quote>,
  quotePublic?: Maybe<QuotePublic>,
  quoteDaysByAccommodationId: QuoteDaysConnection,
};


export type QuoteAccommodationDetailQuoteDaysByAccommodationIdArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<QuoteDaysOrderBy>>,
  condition?: Maybe<QuoteDayCondition>,
  filter?: Maybe<QuoteDayFilter>
};

export type QuoteAccommodationDetailCondition = {
  id?: Maybe<Scalars['UUID']>,
  order?: Maybe<Scalars['Int']>,
  nights?: Maybe<Scalars['Int']>,
  notes?: Maybe<Scalars['String']>,
  propertyId?: Maybe<Scalars['UUID']>,
  quoteId?: Maybe<Scalars['UUID']>,
  basis?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  confirmation?: Maybe<Scalars['String']>,
  beverageInclusions?: Maybe<Array<Maybe<Scalars['String']>>>,
  foodInclusions?: Maybe<Array<Maybe<Scalars['String']>>>,
  roomType?: Maybe<Scalars['String']>,
};

export type QuoteAccommodationDetailFilter = {
  id?: Maybe<UuidFilter>,
  order?: Maybe<IntFilter>,
  nights?: Maybe<IntFilter>,
  notes?: Maybe<StringFilter>,
  propertyId?: Maybe<UuidFilter>,
  quoteId?: Maybe<UuidFilter>,
  basis?: Maybe<StringFilter>,
  summary?: Maybe<StringFilter>,
  confirmation?: Maybe<StringFilter>,
  beverageInclusions?: Maybe<StringListFilter>,
  foodInclusions?: Maybe<StringListFilter>,
  roomType?: Maybe<StringFilter>,
  quoteDaysByAccommodationId?: Maybe<QuoteAccommodationDetailToManyQuoteDayFilter>,
  quoteDaysByAccommodationIdExist?: Maybe<Scalars['Boolean']>,
  property?: Maybe<PropertyFilter>,
  propertyExists?: Maybe<Scalars['Boolean']>,
  quote?: Maybe<QuoteFilter>,
  quoteExists?: Maybe<Scalars['Boolean']>,
  quotePublic?: Maybe<QuotePublicFilter>,
  quotePublicExists?: Maybe<Scalars['Boolean']>,
  and?: Maybe<Array<QuoteAccommodationDetailFilter>>,
  or?: Maybe<Array<QuoteAccommodationDetailFilter>>,
  not?: Maybe<QuoteAccommodationDetailFilter>,
};

export type QuoteAccommodationDetailInput = {
  id?: Maybe<Scalars['UUID']>,
  order: Scalars['Int'],
  nights: Scalars['Int'],
  notes?: Maybe<Scalars['String']>,
  propertyId?: Maybe<Scalars['UUID']>,
  quoteId?: Maybe<Scalars['UUID']>,
  basis?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  confirmation?: Maybe<Scalars['String']>,
  beverageInclusions?: Maybe<Array<Maybe<Scalars['String']>>>,
  foodInclusions?: Maybe<Array<Maybe<Scalars['String']>>>,
  roomType?: Maybe<Scalars['String']>,
  propertyToPropertyId?: Maybe<FkQuoteAccommodationDetailPropertyPropertyIdInput>,
  quoteToQuoteId?: Maybe<FkQuoteAccommodationDetailQuoteQuoteIdInput>,
  quotePublic?: Maybe<FakePublicQuoteAccommodationDetailForeignKey0Input>,
  quoteDaysUsingId?: Maybe<FkQuoteDayQuoteAccommodationDetailAccommodationIdInverseInput>,
};

export type QuoteAccommodationDetailNodeIdConnect = {
  nodeId: Scalars['ID'],
};

export type QuoteAccommodationDetailNodeIdDelete = {
  nodeId: Scalars['ID'],
};

export type QuoteAccommodationDetailOnQuoteAccommodationDetailForFakePublicQuoteAccommodationDetailForeignKey0NodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: QuotePublicPatch,
};

export type QuoteAccommodationDetailOnQuoteAccommodationDetailForFakePublicQuoteAccommodationDetailForeignKey0UsingPkQuoteAccommodationDetailUpdate = {
  patch: UpdateQuoteAccommodationDetailOnQuoteAccommodationDetailForFakePublicQuoteAccommodationDetailForeignKey0Patch,
  id: Scalars['UUID'],
};

export type QuoteAccommodationDetailOnQuoteAccommodationDetailForFkQuoteAccommodationDetailPropertyPropertyIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: PropertyPatch,
};

export type QuoteAccommodationDetailOnQuoteAccommodationDetailForFkQuoteAccommodationDetailPropertyPropertyIdUsingPkQuoteAccommodationDetailUpdate = {
  patch: UpdateQuoteAccommodationDetailOnQuoteAccommodationDetailForFkQuoteAccommodationDetailPropertyPropertyIdPatch,
  id: Scalars['UUID'],
};

export type QuoteAccommodationDetailOnQuoteAccommodationDetailForFkQuoteAccommodationDetailQuoteQuoteIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: QuotePatch,
};

export type QuoteAccommodationDetailOnQuoteAccommodationDetailForFkQuoteAccommodationDetailQuoteQuoteIdUsingPkQuoteAccommodationDetailUpdate = {
  patch: UpdateQuoteAccommodationDetailOnQuoteAccommodationDetailForFkQuoteAccommodationDetailQuoteQuoteIdPatch,
  id: Scalars['UUID'],
};

export type QuoteAccommodationDetailOnQuoteDayForFkQuoteDayQuoteAccommodationDetailAccommodationIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: QuoteDayPatch,
};

export type QuoteAccommodationDetailOnQuoteDayForFkQuoteDayQuoteAccommodationDetailAccommodationIdUsingPkQuoteAccommodationDetailUpdate = {
  patch: UpdateQuoteAccommodationDetailOnQuoteDayForFkQuoteDayQuoteAccommodationDetailAccommodationIdPatch,
  id: Scalars['UUID'],
};

export type QuoteAccommodationDetailPatch = {
  id?: Maybe<Scalars['UUID']>,
  order?: Maybe<Scalars['Int']>,
  nights?: Maybe<Scalars['Int']>,
  notes?: Maybe<Scalars['String']>,
  propertyId?: Maybe<Scalars['UUID']>,
  quoteId?: Maybe<Scalars['UUID']>,
  basis?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  confirmation?: Maybe<Scalars['String']>,
  beverageInclusions?: Maybe<Array<Maybe<Scalars['String']>>>,
  foodInclusions?: Maybe<Array<Maybe<Scalars['String']>>>,
  roomType?: Maybe<Scalars['String']>,
  propertyToPropertyId?: Maybe<FkQuoteAccommodationDetailPropertyPropertyIdInput>,
  quoteToQuoteId?: Maybe<FkQuoteAccommodationDetailQuoteQuoteIdInput>,
  quotePublic?: Maybe<FakePublicQuoteAccommodationDetailForeignKey0Input>,
  quoteDaysUsingId?: Maybe<FkQuoteDayQuoteAccommodationDetailAccommodationIdInverseInput>,
};

export type QuoteAccommodationDetailPkQuoteAccommodationDetailConnect = {
  id: Scalars['UUID'],
};

export type QuoteAccommodationDetailPkQuoteAccommodationDetailDelete = {
  id: Scalars['UUID'],
};

export type QuoteAccommodationDetailsConnection = {
   __typename?: 'QuoteAccommodationDetailsConnection',
  nodes: Array<Maybe<QuoteAccommodationDetail>>,
  edges: Array<QuoteAccommodationDetailsEdge>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
};

export type QuoteAccommodationDetailsEdge = {
   __typename?: 'QuoteAccommodationDetailsEdge',
  cursor?: Maybe<Scalars['Cursor']>,
  node?: Maybe<QuoteAccommodationDetail>,
};

export enum QuoteAccommodationDetailsOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  OrderAsc = 'ORDER_ASC',
  OrderDesc = 'ORDER_DESC',
  NightsAsc = 'NIGHTS_ASC',
  NightsDesc = 'NIGHTS_DESC',
  NotesAsc = 'NOTES_ASC',
  NotesDesc = 'NOTES_DESC',
  PropertyIdAsc = 'PROPERTY_ID_ASC',
  PropertyIdDesc = 'PROPERTY_ID_DESC',
  QuoteIdAsc = 'QUOTE_ID_ASC',
  QuoteIdDesc = 'QUOTE_ID_DESC',
  BasisAsc = 'BASIS_ASC',
  BasisDesc = 'BASIS_DESC',
  SummaryAsc = 'SUMMARY_ASC',
  SummaryDesc = 'SUMMARY_DESC',
  ConfirmationAsc = 'CONFIRMATION_ASC',
  ConfirmationDesc = 'CONFIRMATION_DESC',
  BeverageInclusionsAsc = 'BEVERAGE_INCLUSIONS_ASC',
  BeverageInclusionsDesc = 'BEVERAGE_INCLUSIONS_DESC',
  FoodInclusionsAsc = 'FOOD_INCLUSIONS_ASC',
  FoodInclusionsDesc = 'FOOD_INCLUSIONS_DESC',
  RoomTypeAsc = 'ROOM_TYPE_ASC',
  RoomTypeDesc = 'ROOM_TYPE_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type QuoteAccommodationDetailToManyQuoteDayFilter = {
  every?: Maybe<QuoteDayFilter>,
  some?: Maybe<QuoteDayFilter>,
  none?: Maybe<QuoteDayFilter>,
};

export type QuoteCondition = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  duration?: Maybe<Scalars['Int']>,
  modified?: Maybe<Scalars['Datetime']>,
  start?: Maybe<Scalars['Datetime']>,
  tripId?: Maybe<Scalars['UUID']>,
  deposit?: Maybe<Scalars['BigFloat']>,
  margin?: Maybe<Scalars['BigFloat']>,
  key?: Maybe<Scalars['String']>,
  expires?: Maybe<Scalars['Datetime']>,
  total?: Maybe<Scalars['BigFloat']>,
  adjustment?: Maybe<Scalars['BigFloat']>,
  baseCurrency?: Maybe<Scalars['String']>,
  shortDescription?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  heroImageId?: Maybe<Scalars['UUID']>,
  exclusions?: Maybe<Scalars['String']>,
  inclusions?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['Int']>,
  agentMargin?: Maybe<Scalars['BigFloat']>,
  travellerCount?: Maybe<Scalars['Int']>,
  archived?: Maybe<Scalars['Datetime']>,
  lastViewed?: Maybe<Scalars['Datetime']>,
  heroId?: Maybe<Scalars['UUID']>,
  userId?: Maybe<Scalars['UUID']>,
  locked?: Maybe<Scalars['Datetime']>,
};

export type QuoteCurrenciesConnection = {
   __typename?: 'QuoteCurrenciesConnection',
  nodes: Array<Maybe<QuoteCurrency>>,
  edges: Array<QuoteCurrenciesEdge>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
};

export type QuoteCurrenciesEdge = {
   __typename?: 'QuoteCurrenciesEdge',
  cursor?: Maybe<Scalars['Cursor']>,
  node?: Maybe<QuoteCurrency>,
};

export enum QuoteCurrenciesOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  CodeAsc = 'CODE_ASC',
  CodeDesc = 'CODE_DESC',
  QuoteIdAsc = 'QUOTE_ID_ASC',
  QuoteIdDesc = 'QUOTE_ID_DESC',
  RateAsc = 'RATE_ASC',
  RateDesc = 'RATE_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type QuoteCurrency = Node & {
   __typename?: 'QuoteCurrency',
  nodeId: Scalars['ID'],
  id: Scalars['UUID'],
  code?: Maybe<Scalars['String']>,
  quoteId?: Maybe<Scalars['UUID']>,
  rate: Scalars['BigFloat'],
  quote?: Maybe<Quote>,
};

export type QuoteCurrencyCondition = {
  id?: Maybe<Scalars['UUID']>,
  code?: Maybe<Scalars['String']>,
  quoteId?: Maybe<Scalars['UUID']>,
  rate?: Maybe<Scalars['BigFloat']>,
};

export type QuoteCurrencyFilter = {
  id?: Maybe<UuidFilter>,
  code?: Maybe<StringFilter>,
  quoteId?: Maybe<UuidFilter>,
  rate?: Maybe<BigFloatFilter>,
  quote?: Maybe<QuoteFilter>,
  quoteExists?: Maybe<Scalars['Boolean']>,
  and?: Maybe<Array<QuoteCurrencyFilter>>,
  or?: Maybe<Array<QuoteCurrencyFilter>>,
  not?: Maybe<QuoteCurrencyFilter>,
};

export type QuoteCurrencyInput = {
  id?: Maybe<Scalars['UUID']>,
  code?: Maybe<Scalars['String']>,
  quoteId?: Maybe<Scalars['UUID']>,
  rate: Scalars['BigFloat'],
  quoteToQuoteId?: Maybe<FkQuoteCurrencyQuoteQuoteIdInput>,
};

export type QuoteCurrencyNodeIdConnect = {
  nodeId: Scalars['ID'],
};

export type QuoteCurrencyNodeIdDelete = {
  nodeId: Scalars['ID'],
};

export type QuoteCurrencyOnQuoteCurrencyForFkQuoteCurrencyQuoteQuoteIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: QuotePatch,
};

export type QuoteCurrencyOnQuoteCurrencyForFkQuoteCurrencyQuoteQuoteIdUsingPkQuoteCurrencyUpdate = {
  patch: UpdateQuoteCurrencyOnQuoteCurrencyForFkQuoteCurrencyQuoteQuoteIdPatch,
  id: Scalars['UUID'],
};

export type QuoteCurrencyPatch = {
  id?: Maybe<Scalars['UUID']>,
  code?: Maybe<Scalars['String']>,
  quoteId?: Maybe<Scalars['UUID']>,
  rate?: Maybe<Scalars['BigFloat']>,
  quoteToQuoteId?: Maybe<FkQuoteCurrencyQuoteQuoteIdInput>,
};

export type QuoteCurrencyPkQuoteCurrencyConnect = {
  id: Scalars['UUID'],
};

export type QuoteCurrencyPkQuoteCurrencyDelete = {
  id: Scalars['UUID'],
};

export type QuoteDay = Node & {
   __typename?: 'QuoteDay',
  nodeId: Scalars['ID'],
  id: Scalars['UUID'],
  order: Scalars['Int'],
  date?: Maybe<Scalars['Datetime']>,
  activitySummary?: Maybe<Scalars['String']>,
  activityDetail?: Maybe<Scalars['String']>,
  accommodationId?: Maybe<Scalars['UUID']>,
  quoteId?: Maybe<Scalars['UUID']>,
  propertyId?: Maybe<Scalars['UUID']>,
  accommodation?: Maybe<QuoteAccommodationDetail>,
  quote?: Maybe<Quote>,
  property?: Maybe<Property>,
  quotePublic?: Maybe<QuotePublic>,
  quoteDayDestinationsByDayId: QuoteDayDestinationsConnection,
};


export type QuoteDayQuoteDayDestinationsByDayIdArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<QuoteDayDestinationsOrderBy>>,
  condition?: Maybe<QuoteDayDestinationCondition>,
  filter?: Maybe<QuoteDayDestinationFilter>
};

export type QuoteDayCondition = {
  id?: Maybe<Scalars['UUID']>,
  order?: Maybe<Scalars['Int']>,
  date?: Maybe<Scalars['Datetime']>,
  activitySummary?: Maybe<Scalars['String']>,
  activityDetail?: Maybe<Scalars['String']>,
  accommodationId?: Maybe<Scalars['UUID']>,
  quoteId?: Maybe<Scalars['UUID']>,
  propertyId?: Maybe<Scalars['UUID']>,
};

export type QuoteDayDestination = Node & {
   __typename?: 'QuoteDayDestination',
  nodeId: Scalars['ID'],
  id: Scalars['UUID'],
  destinationId: Scalars['UUID'],
  dayId: Scalars['UUID'],
  order: Scalars['Int'],
  destination?: Maybe<Destination>,
  day?: Maybe<QuoteDay>,
};

export type QuoteDayDestinationCondition = {
  id?: Maybe<Scalars['UUID']>,
  destinationId?: Maybe<Scalars['UUID']>,
  dayId?: Maybe<Scalars['UUID']>,
  order?: Maybe<Scalars['Int']>,
};

export type QuoteDayDestinationFilter = {
  id?: Maybe<UuidFilter>,
  destinationId?: Maybe<UuidFilter>,
  dayId?: Maybe<UuidFilter>,
  order?: Maybe<IntFilter>,
  destination?: Maybe<DestinationFilter>,
  day?: Maybe<QuoteDayFilter>,
  and?: Maybe<Array<QuoteDayDestinationFilter>>,
  or?: Maybe<Array<QuoteDayDestinationFilter>>,
  not?: Maybe<QuoteDayDestinationFilter>,
};

export type QuoteDayDestinationInput = {
  id?: Maybe<Scalars['UUID']>,
  destinationId?: Maybe<Scalars['UUID']>,
  dayId?: Maybe<Scalars['UUID']>,
  order: Scalars['Int'],
  destinationToDestinationId?: Maybe<FkQuoteDayDestinationDestinationDestinationIdInput>,
  quoteDayToDayId?: Maybe<FkQuoteDayDestinationQuoteDayDayIdInput>,
};

export type QuoteDayDestinationNodeIdConnect = {
  nodeId: Scalars['ID'],
};

export type QuoteDayDestinationNodeIdDelete = {
  nodeId: Scalars['ID'],
};

export type QuoteDayDestinationOnQuoteDayDestinationForFkQuoteDayDestinationDestinationDestinationIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: DestinationPatch,
};

export type QuoteDayDestinationOnQuoteDayDestinationForFkQuoteDayDestinationDestinationDestinationIdUsingPkQuoteDayDestinationUpdate = {
  patch: UpdateQuoteDayDestinationOnQuoteDayDestinationForFkQuoteDayDestinationDestinationDestinationIdPatch,
  id: Scalars['UUID'],
};

export type QuoteDayDestinationOnQuoteDayDestinationForFkQuoteDayDestinationQuoteDayDayIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: QuoteDayPatch,
};

export type QuoteDayDestinationOnQuoteDayDestinationForFkQuoteDayDestinationQuoteDayDayIdUsingPkQuoteDayDestinationUpdate = {
  patch: UpdateQuoteDayDestinationOnQuoteDayDestinationForFkQuoteDayDestinationQuoteDayDayIdPatch,
  id: Scalars['UUID'],
};

export type QuoteDayDestinationPatch = {
  id?: Maybe<Scalars['UUID']>,
  destinationId?: Maybe<Scalars['UUID']>,
  dayId?: Maybe<Scalars['UUID']>,
  order?: Maybe<Scalars['Int']>,
  destinationToDestinationId?: Maybe<FkQuoteDayDestinationDestinationDestinationIdInput>,
  quoteDayToDayId?: Maybe<FkQuoteDayDestinationQuoteDayDayIdInput>,
};

export type QuoteDayDestinationPkQuoteDayDestinationConnect = {
  id: Scalars['UUID'],
};

export type QuoteDayDestinationPkQuoteDayDestinationDelete = {
  id: Scalars['UUID'],
};

export type QuoteDayDestinationsConnection = {
   __typename?: 'QuoteDayDestinationsConnection',
  nodes: Array<Maybe<QuoteDayDestination>>,
  edges: Array<QuoteDayDestinationsEdge>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
};

export type QuoteDayDestinationsEdge = {
   __typename?: 'QuoteDayDestinationsEdge',
  cursor?: Maybe<Scalars['Cursor']>,
  node?: Maybe<QuoteDayDestination>,
};

export enum QuoteDayDestinationsOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  DestinationIdAsc = 'DESTINATION_ID_ASC',
  DestinationIdDesc = 'DESTINATION_ID_DESC',
  DayIdAsc = 'DAY_ID_ASC',
  DayIdDesc = 'DAY_ID_DESC',
  OrderAsc = 'ORDER_ASC',
  OrderDesc = 'ORDER_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type QuoteDayFilter = {
  id?: Maybe<UuidFilter>,
  order?: Maybe<IntFilter>,
  date?: Maybe<DatetimeFilter>,
  activitySummary?: Maybe<StringFilter>,
  activityDetail?: Maybe<StringFilter>,
  accommodationId?: Maybe<UuidFilter>,
  quoteId?: Maybe<UuidFilter>,
  propertyId?: Maybe<UuidFilter>,
  quoteDayDestinationsByDayId?: Maybe<QuoteDayToManyQuoteDayDestinationFilter>,
  quoteDayDestinationsByDayIdExist?: Maybe<Scalars['Boolean']>,
  accommodation?: Maybe<QuoteAccommodationDetailFilter>,
  accommodationExists?: Maybe<Scalars['Boolean']>,
  quote?: Maybe<QuoteFilter>,
  quoteExists?: Maybe<Scalars['Boolean']>,
  property?: Maybe<PropertyFilter>,
  propertyExists?: Maybe<Scalars['Boolean']>,
  quotePublic?: Maybe<QuotePublicFilter>,
  quotePublicExists?: Maybe<Scalars['Boolean']>,
  and?: Maybe<Array<QuoteDayFilter>>,
  or?: Maybe<Array<QuoteDayFilter>>,
  not?: Maybe<QuoteDayFilter>,
};

export type QuoteDayInput = {
  id?: Maybe<Scalars['UUID']>,
  order: Scalars['Int'],
  date?: Maybe<Scalars['Datetime']>,
  activitySummary?: Maybe<Scalars['String']>,
  activityDetail?: Maybe<Scalars['String']>,
  accommodationId?: Maybe<Scalars['UUID']>,
  quoteId?: Maybe<Scalars['UUID']>,
  propertyId?: Maybe<Scalars['UUID']>,
  quoteAccommodationDetailToAccommodationId?: Maybe<FkQuoteDayQuoteAccommodationDetailAccommodationIdInput>,
  quoteToQuoteId?: Maybe<FkQuoteDayQuoteQuoteIdInput>,
  propertyToPropertyId?: Maybe<QuoteDayPropertyIdFkeyInput>,
  quotePublic?: Maybe<FakePublicQuoteDayForeignKey0Input>,
  quoteDayDestinationsUsingId?: Maybe<FkQuoteDayDestinationQuoteDayDayIdInverseInput>,
};

export type QuoteDayNodeIdConnect = {
  nodeId: Scalars['ID'],
};

export type QuoteDayNodeIdDelete = {
  nodeId: Scalars['ID'],
};

export type QuoteDayOnQuoteDayDestinationForFkQuoteDayDestinationQuoteDayDayIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: QuoteDayDestinationPatch,
};

export type QuoteDayOnQuoteDayDestinationForFkQuoteDayDestinationQuoteDayDayIdUsingPkQuoteDayUpdate = {
  patch: UpdateQuoteDayOnQuoteDayDestinationForFkQuoteDayDestinationQuoteDayDayIdPatch,
  id: Scalars['UUID'],
};

export type QuoteDayOnQuoteDayForFakePublicQuoteDayForeignKey0NodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: QuotePublicPatch,
};

export type QuoteDayOnQuoteDayForFakePublicQuoteDayForeignKey0UsingPkQuoteDayUpdate = {
  patch: UpdateQuoteDayOnQuoteDayForFakePublicQuoteDayForeignKey0Patch,
  id: Scalars['UUID'],
};

export type QuoteDayOnQuoteDayForFkQuoteDayQuoteAccommodationDetailAccommodationIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: QuoteAccommodationDetailPatch,
};

export type QuoteDayOnQuoteDayForFkQuoteDayQuoteAccommodationDetailAccommodationIdUsingPkQuoteDayUpdate = {
  patch: UpdateQuoteDayOnQuoteDayForFkQuoteDayQuoteAccommodationDetailAccommodationIdPatch,
  id: Scalars['UUID'],
};

export type QuoteDayOnQuoteDayForFkQuoteDayQuoteQuoteIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: QuotePatch,
};

export type QuoteDayOnQuoteDayForFkQuoteDayQuoteQuoteIdUsingPkQuoteDayUpdate = {
  patch: UpdateQuoteDayOnQuoteDayForFkQuoteDayQuoteQuoteIdPatch,
  id: Scalars['UUID'],
};

export type QuoteDayOnQuoteDayForQuoteDayPropertyIdFkeyNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: PropertyPatch,
};

export type QuoteDayOnQuoteDayForQuoteDayPropertyIdFkeyUsingPkQuoteDayUpdate = {
  patch: UpdateQuoteDayOnQuoteDayForQuoteDayPropertyIdFkeyPatch,
  id: Scalars['UUID'],
};

export type QuoteDayPatch = {
  id?: Maybe<Scalars['UUID']>,
  order?: Maybe<Scalars['Int']>,
  date?: Maybe<Scalars['Datetime']>,
  activitySummary?: Maybe<Scalars['String']>,
  activityDetail?: Maybe<Scalars['String']>,
  accommodationId?: Maybe<Scalars['UUID']>,
  quoteId?: Maybe<Scalars['UUID']>,
  propertyId?: Maybe<Scalars['UUID']>,
  quoteAccommodationDetailToAccommodationId?: Maybe<FkQuoteDayQuoteAccommodationDetailAccommodationIdInput>,
  quoteToQuoteId?: Maybe<FkQuoteDayQuoteQuoteIdInput>,
  propertyToPropertyId?: Maybe<QuoteDayPropertyIdFkeyInput>,
  quotePublic?: Maybe<FakePublicQuoteDayForeignKey0Input>,
  quoteDayDestinationsUsingId?: Maybe<FkQuoteDayDestinationQuoteDayDayIdInverseInput>,
};

export type QuoteDayPkQuoteDayConnect = {
  id: Scalars['UUID'],
};

export type QuoteDayPkQuoteDayDelete = {
  id: Scalars['UUID'],
};

export type QuoteDayPropertyIdFkeyInput = {
  connectById?: Maybe<PropertyPkPropertyConnect>,
  connectByNodeId?: Maybe<PropertyNodeIdConnect>,
  deleteById?: Maybe<PropertyPkPropertyDelete>,
  deleteByNodeId?: Maybe<PropertyNodeIdDelete>,
  updateById?: Maybe<PropertyOnQuoteDayForQuoteDayPropertyIdFkeyUsingPkPropertyUpdate>,
  updateByNodeId?: Maybe<QuoteDayOnQuoteDayForQuoteDayPropertyIdFkeyNodeIdUpdate>,
  create?: Maybe<QuoteDayPropertyIdFkeyPropertyCreateInput>,
};

export type QuoteDayPropertyIdFkeyInverseInput = {
  deleteOthers?: Maybe<Scalars['Boolean']>,
  connectById?: Maybe<Array<QuoteDayPkQuoteDayConnect>>,
  connectByNodeId?: Maybe<Array<QuoteDayNodeIdConnect>>,
  deleteById?: Maybe<Array<QuoteDayPkQuoteDayDelete>>,
  deleteByNodeId?: Maybe<Array<QuoteDayNodeIdDelete>>,
  updateById?: Maybe<Array<QuoteDayOnQuoteDayForQuoteDayPropertyIdFkeyUsingPkQuoteDayUpdate>>,
  updateByNodeId?: Maybe<Array<PropertyOnQuoteDayForQuoteDayPropertyIdFkeyNodeIdUpdate>>,
  create?: Maybe<Array<QuoteDayPropertyIdFkeyQuoteDayCreateInput>>,
};

export type QuoteDayPropertyIdFkeyPropertyCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  city?: Maybe<Scalars['String']>,
  contactEmail?: Maybe<Scalars['String']>,
  contactNumber?: Maybe<Scalars['String']>,
  latitude?: Maybe<Scalars['Float']>,
  longitude?: Maybe<Scalars['Float']>,
  nearestAirport?: Maybe<Scalars['String']>,
  region?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  externalReference?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
  galleryId?: Maybe<Scalars['UUID']>,
  heroMediaId?: Maybe<Scalars['UUID']>,
  notes?: Maybe<Scalars['String']>,
  archived?: Maybe<Scalars['Datetime']>,
  mapPointId?: Maybe<Scalars['UUID']>,
  plusCode?: Maybe<Scalars['String']>,
  countryId?: Maybe<Scalars['UUID']>,
  mediaGalleryToGalleryId?: Maybe<FkPropertyMediaGalleryGalleryIdInput>,
  mediaItemToHeroMediaId?: Maybe<FkPropertyMediaItemHeroMediaIdInput>,
  mapPointToMapPointId?: Maybe<FkPropertyMapPointMapPointIdInput>,
  countryToCountryId?: Maybe<FkPropertyCountryCountryIdInput>,
  quoteAccommodationDetailsUsingId?: Maybe<FkQuoteAccommodationDetailPropertyPropertyIdInverseInput>,
  quoteDaysUsingId?: Maybe<QuoteDayPropertyIdFkeyInverseInput>,
};

export type QuoteDayPropertyIdFkeyQuoteDayCreateInput = {
  id?: Maybe<Scalars['UUID']>,
  order: Scalars['Int'],
  date?: Maybe<Scalars['Datetime']>,
  activitySummary?: Maybe<Scalars['String']>,
  activityDetail?: Maybe<Scalars['String']>,
  accommodationId?: Maybe<Scalars['UUID']>,
  quoteId?: Maybe<Scalars['UUID']>,
  quoteAccommodationDetailToAccommodationId?: Maybe<FkQuoteDayQuoteAccommodationDetailAccommodationIdInput>,
  quoteToQuoteId?: Maybe<FkQuoteDayQuoteQuoteIdInput>,
  propertyToPropertyId?: Maybe<QuoteDayPropertyIdFkeyInput>,
  quotePublic?: Maybe<FakePublicQuoteDayForeignKey0Input>,
  quoteDayDestinationsUsingId?: Maybe<FkQuoteDayDestinationQuoteDayDayIdInverseInput>,
};

export type QuoteDaysConnection = {
   __typename?: 'QuoteDaysConnection',
  nodes: Array<Maybe<QuoteDay>>,
  edges: Array<QuoteDaysEdge>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
};

export type QuoteDaysEdge = {
   __typename?: 'QuoteDaysEdge',
  cursor?: Maybe<Scalars['Cursor']>,
  node?: Maybe<QuoteDay>,
};

export enum QuoteDaysOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  OrderAsc = 'ORDER_ASC',
  OrderDesc = 'ORDER_DESC',
  DateAsc = 'DATE_ASC',
  DateDesc = 'DATE_DESC',
  ActivitySummaryAsc = 'ACTIVITY_SUMMARY_ASC',
  ActivitySummaryDesc = 'ACTIVITY_SUMMARY_DESC',
  ActivityDetailAsc = 'ACTIVITY_DETAIL_ASC',
  ActivityDetailDesc = 'ACTIVITY_DETAIL_DESC',
  AccommodationIdAsc = 'ACCOMMODATION_ID_ASC',
  AccommodationIdDesc = 'ACCOMMODATION_ID_DESC',
  QuoteIdAsc = 'QUOTE_ID_ASC',
  QuoteIdDesc = 'QUOTE_ID_DESC',
  PropertyIdAsc = 'PROPERTY_ID_ASC',
  PropertyIdDesc = 'PROPERTY_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type QuoteDayToManyQuoteDayDestinationFilter = {
  every?: Maybe<QuoteDayDestinationFilter>,
  some?: Maybe<QuoteDayDestinationFilter>,
  none?: Maybe<QuoteDayDestinationFilter>,
};

export type QuoteFilter = {
  id?: Maybe<UuidFilter>,
  created?: Maybe<DatetimeFilter>,
  duration?: Maybe<IntFilter>,
  modified?: Maybe<DatetimeFilter>,
  start?: Maybe<DatetimeFilter>,
  tripId?: Maybe<UuidFilter>,
  deposit?: Maybe<BigFloatFilter>,
  margin?: Maybe<BigFloatFilter>,
  key?: Maybe<StringFilter>,
  expires?: Maybe<DatetimeFilter>,
  total?: Maybe<BigFloatFilter>,
  adjustment?: Maybe<BigFloatFilter>,
  baseCurrency?: Maybe<StringFilter>,
  shortDescription?: Maybe<StringFilter>,
  summary?: Maybe<StringFilter>,
  heroImageId?: Maybe<UuidFilter>,
  exclusions?: Maybe<StringFilter>,
  inclusions?: Maybe<StringFilter>,
  status?: Maybe<IntFilter>,
  agentMargin?: Maybe<BigFloatFilter>,
  travellerCount?: Maybe<IntFilter>,
  archived?: Maybe<DatetimeFilter>,
  lastViewed?: Maybe<DatetimeFilter>,
  heroId?: Maybe<UuidFilter>,
  userId?: Maybe<UuidFilter>,
  locked?: Maybe<DatetimeFilter>,
  invoices?: Maybe<QuoteToManyInvoiceFilter>,
  invoicesExist?: Maybe<Scalars['Boolean']>,
  tripsByActiveQuoteId?: Maybe<QuoteToManyTripFilter>,
  tripsByActiveQuoteIdExist?: Maybe<Scalars['Boolean']>,
  emails?: Maybe<QuoteToManyEmailFilter>,
  emailsExist?: Maybe<Scalars['Boolean']>,
  quoteViews?: Maybe<QuoteToManyQuoteViewFilter>,
  quoteViewsExist?: Maybe<Scalars['Boolean']>,
  quoteAccommodationDetails?: Maybe<QuoteToManyQuoteAccommodationDetailFilter>,
  quoteAccommodationDetailsExist?: Maybe<Scalars['Boolean']>,
  quoteCurrencies?: Maybe<QuoteToManyQuoteCurrencyFilter>,
  quoteCurrenciesExist?: Maybe<Scalars['Boolean']>,
  quoteDays?: Maybe<QuoteToManyQuoteDayFilter>,
  quoteDaysExist?: Maybe<Scalars['Boolean']>,
  quoteFinanceLineItems?: Maybe<QuoteToManyQuoteFinanceLineItemFilter>,
  quoteFinanceLineItemsExist?: Maybe<Scalars['Boolean']>,
  trip?: Maybe<TripFilter>,
  heroImage?: Maybe<MediaItemFilter>,
  heroImageExists?: Maybe<Scalars['Boolean']>,
  hero?: Maybe<QuoteHeroFilter>,
  heroExists?: Maybe<Scalars['Boolean']>,
  user?: Maybe<UserFilter>,
  userExists?: Maybe<Scalars['Boolean']>,
  and?: Maybe<Array<QuoteFilter>>,
  or?: Maybe<Array<QuoteFilter>>,
  not?: Maybe<QuoteFilter>,
};

export type QuoteFinanceLineItem = Node & {
   __typename?: 'QuoteFinanceLineItem',
  nodeId: Scalars['ID'],
  id: Scalars['UUID'],
  amount: Scalars['BigFloat'],
  currency?: Maybe<Scalars['String']>,
  quoteId?: Maybe<Scalars['UUID']>,
  supplierId: Scalars['UUID'],
  confirmation?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  excludeMargin: Scalars['Boolean'],
  notes?: Maybe<Scalars['String']>,
  quantity: Scalars['Int'],
  order: Scalars['Int'],
  marginOverride?: Maybe<Scalars['BigFloat']>,
  quote?: Maybe<Quote>,
  supplier?: Maybe<Supplier>,
};

export type QuoteFinanceLineItemCondition = {
  id?: Maybe<Scalars['UUID']>,
  amount?: Maybe<Scalars['BigFloat']>,
  currency?: Maybe<Scalars['String']>,
  quoteId?: Maybe<Scalars['UUID']>,
  supplierId?: Maybe<Scalars['UUID']>,
  confirmation?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  excludeMargin?: Maybe<Scalars['Boolean']>,
  notes?: Maybe<Scalars['String']>,
  quantity?: Maybe<Scalars['Int']>,
  order?: Maybe<Scalars['Int']>,
  marginOverride?: Maybe<Scalars['BigFloat']>,
};

export type QuoteFinanceLineItemFilter = {
  id?: Maybe<UuidFilter>,
  amount?: Maybe<BigFloatFilter>,
  currency?: Maybe<StringFilter>,
  quoteId?: Maybe<UuidFilter>,
  supplierId?: Maybe<UuidFilter>,
  confirmation?: Maybe<StringFilter>,
  description?: Maybe<StringFilter>,
  excludeMargin?: Maybe<BooleanFilter>,
  notes?: Maybe<StringFilter>,
  quantity?: Maybe<IntFilter>,
  order?: Maybe<IntFilter>,
  marginOverride?: Maybe<BigFloatFilter>,
  quote?: Maybe<QuoteFilter>,
  quoteExists?: Maybe<Scalars['Boolean']>,
  supplier?: Maybe<SupplierFilter>,
  and?: Maybe<Array<QuoteFinanceLineItemFilter>>,
  or?: Maybe<Array<QuoteFinanceLineItemFilter>>,
  not?: Maybe<QuoteFinanceLineItemFilter>,
};

export type QuoteFinanceLineItemInput = {
  id?: Maybe<Scalars['UUID']>,
  amount: Scalars['BigFloat'],
  currency?: Maybe<Scalars['String']>,
  quoteId?: Maybe<Scalars['UUID']>,
  supplierId?: Maybe<Scalars['UUID']>,
  confirmation?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  excludeMargin?: Maybe<Scalars['Boolean']>,
  notes?: Maybe<Scalars['String']>,
  quantity: Scalars['Int'],
  order: Scalars['Int'],
  marginOverride?: Maybe<Scalars['BigFloat']>,
  quoteToQuoteId?: Maybe<FkQuoteFinanceLineItemQuoteQuoteIdInput>,
  supplierToSupplierId?: Maybe<FkQuoteFinanceLineItemSupplierSupplierIdInput>,
};

export type QuoteFinanceLineItemNodeIdConnect = {
  nodeId: Scalars['ID'],
};

export type QuoteFinanceLineItemNodeIdDelete = {
  nodeId: Scalars['ID'],
};

export type QuoteFinanceLineItemOnQuoteFinanceLineItemForFkQuoteFinanceLineItemQuoteQuoteIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: QuotePatch,
};

export type QuoteFinanceLineItemOnQuoteFinanceLineItemForFkQuoteFinanceLineItemQuoteQuoteIdUsingPkQuoteFinanceLineItemUpdate = {
  patch: UpdateQuoteFinanceLineItemOnQuoteFinanceLineItemForFkQuoteFinanceLineItemQuoteQuoteIdPatch,
  id: Scalars['UUID'],
};

export type QuoteFinanceLineItemOnQuoteFinanceLineItemForFkQuoteFinanceLineItemSupplierSupplierIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: SupplierPatch,
};

export type QuoteFinanceLineItemOnQuoteFinanceLineItemForFkQuoteFinanceLineItemSupplierSupplierIdUsingPkQuoteFinanceLineItemUpdate = {
  patch: UpdateQuoteFinanceLineItemOnQuoteFinanceLineItemForFkQuoteFinanceLineItemSupplierSupplierIdPatch,
  id: Scalars['UUID'],
};

export type QuoteFinanceLineItemPatch = {
  id?: Maybe<Scalars['UUID']>,
  amount?: Maybe<Scalars['BigFloat']>,
  currency?: Maybe<Scalars['String']>,
  quoteId?: Maybe<Scalars['UUID']>,
  supplierId?: Maybe<Scalars['UUID']>,
  confirmation?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  excludeMargin?: Maybe<Scalars['Boolean']>,
  notes?: Maybe<Scalars['String']>,
  quantity?: Maybe<Scalars['Int']>,
  order?: Maybe<Scalars['Int']>,
  marginOverride?: Maybe<Scalars['BigFloat']>,
  quoteToQuoteId?: Maybe<FkQuoteFinanceLineItemQuoteQuoteIdInput>,
  supplierToSupplierId?: Maybe<FkQuoteFinanceLineItemSupplierSupplierIdInput>,
};

export type QuoteFinanceLineItemPkQuoteFinanceLineItemConnect = {
  id: Scalars['UUID'],
};

export type QuoteFinanceLineItemPkQuoteFinanceLineItemDelete = {
  id: Scalars['UUID'],
};

export type QuoteFinanceLineItemsConnection = {
   __typename?: 'QuoteFinanceLineItemsConnection',
  nodes: Array<Maybe<QuoteFinanceLineItem>>,
  edges: Array<QuoteFinanceLineItemsEdge>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
};

export type QuoteFinanceLineItemsEdge = {
   __typename?: 'QuoteFinanceLineItemsEdge',
  cursor?: Maybe<Scalars['Cursor']>,
  node?: Maybe<QuoteFinanceLineItem>,
};

export enum QuoteFinanceLineItemsOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  AmountAsc = 'AMOUNT_ASC',
  AmountDesc = 'AMOUNT_DESC',
  CurrencyAsc = 'CURRENCY_ASC',
  CurrencyDesc = 'CURRENCY_DESC',
  QuoteIdAsc = 'QUOTE_ID_ASC',
  QuoteIdDesc = 'QUOTE_ID_DESC',
  SupplierIdAsc = 'SUPPLIER_ID_ASC',
  SupplierIdDesc = 'SUPPLIER_ID_DESC',
  ConfirmationAsc = 'CONFIRMATION_ASC',
  ConfirmationDesc = 'CONFIRMATION_DESC',
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  ExcludeMarginAsc = 'EXCLUDE_MARGIN_ASC',
  ExcludeMarginDesc = 'EXCLUDE_MARGIN_DESC',
  NotesAsc = 'NOTES_ASC',
  NotesDesc = 'NOTES_DESC',
  QuantityAsc = 'QUANTITY_ASC',
  QuantityDesc = 'QUANTITY_DESC',
  OrderAsc = 'ORDER_ASC',
  OrderDesc = 'ORDER_DESC',
  MarginOverrideAsc = 'MARGIN_OVERRIDE_ASC',
  MarginOverrideDesc = 'MARGIN_OVERRIDE_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type QuoteFinanceLineItemSummariesConnection = {
   __typename?: 'QuoteFinanceLineItemSummariesConnection',
  nodes: Array<Maybe<QuoteFinanceLineItemSummary>>,
  edges: Array<QuoteFinanceLineItemSummariesEdge>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
};

export type QuoteFinanceLineItemSummariesEdge = {
   __typename?: 'QuoteFinanceLineItemSummariesEdge',
  cursor?: Maybe<Scalars['Cursor']>,
  node?: Maybe<QuoteFinanceLineItemSummary>,
};

export enum QuoteFinanceLineItemSummariesOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  QuoteIdAsc = 'QUOTE_ID_ASC',
  QuoteIdDesc = 'QUOTE_ID_DESC',
  AmountAsc = 'AMOUNT_ASC',
  AmountDesc = 'AMOUNT_DESC',
  CurrencyAsc = 'CURRENCY_ASC',
  CurrencyDesc = 'CURRENCY_DESC',
  MarginAsc = 'MARGIN_ASC',
  MarginDesc = 'MARGIN_DESC',
  AmountActualAsc = 'AMOUNT_ACTUAL_ASC',
  AmountActualDesc = 'AMOUNT_ACTUAL_DESC',
  CurrencyActualAsc = 'CURRENCY_ACTUAL_ASC',
  CurrencyActualDesc = 'CURRENCY_ACTUAL_DESC',
  MarginActualAsc = 'MARGIN_ACTUAL_ASC',
  MarginActualDesc = 'MARGIN_ACTUAL_DESC'
}

export type QuoteFinanceLineItemSummary = {
   __typename?: 'QuoteFinanceLineItemSummary',
  id?: Maybe<Scalars['UUID']>,
  quoteId?: Maybe<Scalars['UUID']>,
  amount?: Maybe<Scalars['BigFloat']>,
  currency?: Maybe<Scalars['String']>,
  margin?: Maybe<Scalars['BigFloat']>,
  amountActual?: Maybe<Scalars['BigFloat']>,
  currencyActual?: Maybe<Scalars['String']>,
  marginActual?: Maybe<Scalars['BigFloat']>,
};

export type QuoteFinanceLineItemSummaryCondition = {
  id?: Maybe<Scalars['UUID']>,
  quoteId?: Maybe<Scalars['UUID']>,
  amount?: Maybe<Scalars['BigFloat']>,
  currency?: Maybe<Scalars['String']>,
  margin?: Maybe<Scalars['BigFloat']>,
  amountActual?: Maybe<Scalars['BigFloat']>,
  currencyActual?: Maybe<Scalars['String']>,
  marginActual?: Maybe<Scalars['BigFloat']>,
};

export type QuoteFinanceLineItemSummaryFilter = {
  id?: Maybe<UuidFilter>,
  quoteId?: Maybe<UuidFilter>,
  amount?: Maybe<BigFloatFilter>,
  currency?: Maybe<StringFilter>,
  margin?: Maybe<BigFloatFilter>,
  amountActual?: Maybe<BigFloatFilter>,
  currencyActual?: Maybe<StringFilter>,
  marginActual?: Maybe<BigFloatFilter>,
  and?: Maybe<Array<QuoteFinanceLineItemSummaryFilter>>,
  or?: Maybe<Array<QuoteFinanceLineItemSummaryFilter>>,
  not?: Maybe<QuoteFinanceLineItemSummaryFilter>,
};

export type QuoteFinanceSummariesConnection = {
   __typename?: 'QuoteFinanceSummariesConnection',
  nodes: Array<Maybe<QuoteFinanceSummary>>,
  edges: Array<QuoteFinanceSummariesEdge>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
};

export type QuoteFinanceSummariesEdge = {
   __typename?: 'QuoteFinanceSummariesEdge',
  cursor?: Maybe<Scalars['Cursor']>,
  node?: Maybe<QuoteFinanceSummary>,
};

export enum QuoteFinanceSummariesOrderBy {
  Natural = 'NATURAL',
  QuoteIdAsc = 'QUOTE_ID_ASC',
  QuoteIdDesc = 'QUOTE_ID_DESC',
  TotalAsc = 'TOTAL_ASC',
  TotalDesc = 'TOTAL_DESC',
  MarginAsc = 'MARGIN_ASC',
  MarginDesc = 'MARGIN_DESC',
  CurrencyAsc = 'CURRENCY_ASC',
  CurrencyDesc = 'CURRENCY_DESC'
}

export type QuoteFinanceSummary = {
   __typename?: 'QuoteFinanceSummary',
  quoteId?: Maybe<Scalars['UUID']>,
  total?: Maybe<Scalars['BigFloat']>,
  margin?: Maybe<Scalars['BigFloat']>,
  currency?: Maybe<Scalars['String']>,
};

export type QuoteFinanceSummaryCondition = {
  quoteId?: Maybe<Scalars['UUID']>,
  total?: Maybe<Scalars['BigFloat']>,
  margin?: Maybe<Scalars['BigFloat']>,
  currency?: Maybe<Scalars['String']>,
};

export type QuoteFinanceSummaryFilter = {
  quoteId?: Maybe<UuidFilter>,
  total?: Maybe<BigFloatFilter>,
  margin?: Maybe<BigFloatFilter>,
  currency?: Maybe<StringFilter>,
  and?: Maybe<Array<QuoteFinanceSummaryFilter>>,
  or?: Maybe<Array<QuoteFinanceSummaryFilter>>,
  not?: Maybe<QuoteFinanceSummaryFilter>,
};

export type QuoteHero = Node & {
   __typename?: 'QuoteHero',
  nodeId: Scalars['ID'],
  id: Scalars['UUID'],
  title?: Maybe<Scalars['String']>,
  subtitle?: Maybe<Scalars['String']>,
  imageId?: Maybe<Scalars['UUID']>,
  style?: Maybe<Scalars['String']>,
  image?: Maybe<MediaItem>,
  quotesByHeroId: QuotesConnection,
  quotePublicsByHeroId: QuotePublicsConnection,
};


export type QuoteHeroQuotesByHeroIdArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<QuotesOrderBy>>,
  condition?: Maybe<QuoteCondition>,
  filter?: Maybe<QuoteFilter>
};


export type QuoteHeroQuotePublicsByHeroIdArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<QuotePublicsOrderBy>>,
  condition?: Maybe<QuotePublicCondition>,
  filter?: Maybe<QuotePublicFilter>
};

export type QuoteHeroCondition = {
  id?: Maybe<Scalars['UUID']>,
  title?: Maybe<Scalars['String']>,
  subtitle?: Maybe<Scalars['String']>,
  imageId?: Maybe<Scalars['UUID']>,
  style?: Maybe<Scalars['String']>,
};

export type QuoteHeroesConnection = {
   __typename?: 'QuoteHeroesConnection',
  nodes: Array<Maybe<QuoteHero>>,
  edges: Array<QuoteHeroesEdge>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
};

export type QuoteHeroesEdge = {
   __typename?: 'QuoteHeroesEdge',
  cursor?: Maybe<Scalars['Cursor']>,
  node?: Maybe<QuoteHero>,
};

export enum QuoteHeroesOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC',
  SubtitleAsc = 'SUBTITLE_ASC',
  SubtitleDesc = 'SUBTITLE_DESC',
  ImageIdAsc = 'IMAGE_ID_ASC',
  ImageIdDesc = 'IMAGE_ID_DESC',
  StyleAsc = 'STYLE_ASC',
  StyleDesc = 'STYLE_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type QuoteHeroFilter = {
  id?: Maybe<UuidFilter>,
  title?: Maybe<StringFilter>,
  subtitle?: Maybe<StringFilter>,
  imageId?: Maybe<UuidFilter>,
  style?: Maybe<StringFilter>,
  quotesByHeroId?: Maybe<QuoteHeroToManyQuoteFilter>,
  quotesByHeroIdExist?: Maybe<Scalars['Boolean']>,
  quotePublicsByHeroId?: Maybe<QuoteHeroToManyQuotePublicFilter>,
  quotePublicsByHeroIdExist?: Maybe<Scalars['Boolean']>,
  image?: Maybe<MediaItemFilter>,
  imageExists?: Maybe<Scalars['Boolean']>,
  and?: Maybe<Array<QuoteHeroFilter>>,
  or?: Maybe<Array<QuoteHeroFilter>>,
  not?: Maybe<QuoteHeroFilter>,
};

export type QuoteHeroInput = {
  id?: Maybe<Scalars['UUID']>,
  title?: Maybe<Scalars['String']>,
  subtitle?: Maybe<Scalars['String']>,
  imageId?: Maybe<Scalars['UUID']>,
  style?: Maybe<Scalars['String']>,
  mediaItemToImageId?: Maybe<FkQuoteHeroMediaItemImageIdInput>,
  quotesUsingId?: Maybe<FkQuoteQuoteHeroHeroIdInverseInput>,
  quotePublicsUsingId?: Maybe<FakePublicQuotePublicForeignKey1InverseInput>,
};

export type QuoteHeroNodeIdConnect = {
  nodeId: Scalars['ID'],
};

export type QuoteHeroNodeIdDelete = {
  nodeId: Scalars['ID'],
};

export type QuoteHeroOnQuoteForFkQuoteQuoteHeroHeroIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: QuotePatch,
};

export type QuoteHeroOnQuoteForFkQuoteQuoteHeroHeroIdUsingPkQuoteHeroUpdate = {
  patch: UpdateQuoteHeroOnQuoteForFkQuoteQuoteHeroHeroIdPatch,
  id: Scalars['UUID'],
};

export type QuoteHeroOnQuoteHeroForFkQuoteHeroMediaItemImageIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: MediaItemPatch,
};

export type QuoteHeroOnQuoteHeroForFkQuoteHeroMediaItemImageIdUsingPkQuoteHeroUpdate = {
  patch: UpdateQuoteHeroOnQuoteHeroForFkQuoteHeroMediaItemImageIdPatch,
  id: Scalars['UUID'],
};

export type QuoteHeroOnQuotePublicForFakePublicQuotePublicForeignKey1NodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: QuotePublicPatch,
};

export type QuoteHeroOnQuotePublicForFakePublicQuotePublicForeignKey1UsingPkQuoteHeroUpdate = {
  patch: UpdateQuoteHeroOnQuotePublicForFakePublicQuotePublicForeignKey1Patch,
  id: Scalars['UUID'],
};

export type QuoteHeroPatch = {
  id?: Maybe<Scalars['UUID']>,
  title?: Maybe<Scalars['String']>,
  subtitle?: Maybe<Scalars['String']>,
  imageId?: Maybe<Scalars['UUID']>,
  style?: Maybe<Scalars['String']>,
  mediaItemToImageId?: Maybe<FkQuoteHeroMediaItemImageIdInput>,
  quotesUsingId?: Maybe<FkQuoteQuoteHeroHeroIdInverseInput>,
  quotePublicsUsingId?: Maybe<FakePublicQuotePublicForeignKey1InverseInput>,
};

export type QuoteHeroPkQuoteHeroConnect = {
  id: Scalars['UUID'],
};

export type QuoteHeroPkQuoteHeroDelete = {
  id: Scalars['UUID'],
};

export type QuoteHeroToManyQuoteFilter = {
  every?: Maybe<QuoteFilter>,
  some?: Maybe<QuoteFilter>,
  none?: Maybe<QuoteFilter>,
};

export type QuoteHeroToManyQuotePublicFilter = {
  every?: Maybe<QuotePublicFilter>,
  some?: Maybe<QuotePublicFilter>,
  none?: Maybe<QuotePublicFilter>,
};

export type QuoteInput = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  duration: Scalars['Int'],
  modified?: Maybe<Scalars['Datetime']>,
  start?: Maybe<Scalars['Datetime']>,
  tripId?: Maybe<Scalars['UUID']>,
  deposit?: Maybe<Scalars['BigFloat']>,
  margin?: Maybe<Scalars['BigFloat']>,
  key?: Maybe<Scalars['String']>,
  expires?: Maybe<Scalars['Datetime']>,
  total?: Maybe<Scalars['BigFloat']>,
  adjustment?: Maybe<Scalars['BigFloat']>,
  baseCurrency?: Maybe<Scalars['String']>,
  shortDescription?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  heroImageId?: Maybe<Scalars['UUID']>,
  exclusions?: Maybe<Scalars['String']>,
  inclusions?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['Int']>,
  agentMargin?: Maybe<Scalars['BigFloat']>,
  travellerCount?: Maybe<Scalars['Int']>,
  archived?: Maybe<Scalars['Datetime']>,
  lastViewed?: Maybe<Scalars['Datetime']>,
  heroId?: Maybe<Scalars['UUID']>,
  userId?: Maybe<Scalars['UUID']>,
  locked?: Maybe<Scalars['Datetime']>,
  tripToTripId?: Maybe<FkQuoteTripTripIdInput>,
  mediaItemToHeroImageId?: Maybe<FkQuoteMediaItemHeroImageIdInput>,
  quoteHeroToHeroId?: Maybe<FkQuoteQuoteHeroHeroIdInput>,
  userToUserId?: Maybe<FkQuoteUserUserIdInput>,
  invoicesUsingId?: Maybe<FkInvoiceQuoteQuoteIdInverseInput>,
  tripsUsingId?: Maybe<FkTripQuoteActiveQuoteIdInverseInput>,
  emailsUsingId?: Maybe<FkEmailQuoteQuoteIdInverseInput>,
  quoteViewsUsingId?: Maybe<FkQuoteViewQuoteQuoteIdInverseInput>,
  quoteAccommodationDetailsUsingId?: Maybe<FkQuoteAccommodationDetailQuoteQuoteIdInverseInput>,
  quoteCurrenciesUsingId?: Maybe<FkQuoteCurrencyQuoteQuoteIdInverseInput>,
  quoteDaysUsingId?: Maybe<FkQuoteDayQuoteQuoteIdInverseInput>,
  quoteFinanceLineItemsUsingId?: Maybe<FkQuoteFinanceLineItemQuoteQuoteIdInverseInput>,
};

export type QuoteNodeIdConnect = {
  nodeId: Scalars['ID'],
};

export type QuoteNodeIdDelete = {
  nodeId: Scalars['ID'],
};

export type QuoteOnEmailForFkEmailQuoteQuoteIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: EmailPatch,
};

export type QuoteOnEmailForFkEmailQuoteQuoteIdUsingPkQuoteUpdate = {
  patch: UpdateQuoteOnEmailForFkEmailQuoteQuoteIdPatch,
  id: Scalars['UUID'],
};

export type QuoteOnInvoiceForFkInvoiceQuoteQuoteIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: InvoicePatch,
};

export type QuoteOnInvoiceForFkInvoiceQuoteQuoteIdUsingPkQuoteUpdate = {
  patch: UpdateQuoteOnInvoiceForFkInvoiceQuoteQuoteIdPatch,
  id: Scalars['UUID'],
};

export type QuoteOnQuoteAccommodationDetailForFkQuoteAccommodationDetailQuoteQuoteIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: QuoteAccommodationDetailPatch,
};

export type QuoteOnQuoteAccommodationDetailForFkQuoteAccommodationDetailQuoteQuoteIdUsingPkQuoteUpdate = {
  patch: UpdateQuoteOnQuoteAccommodationDetailForFkQuoteAccommodationDetailQuoteQuoteIdPatch,
  id: Scalars['UUID'],
};

export type QuoteOnQuoteCurrencyForFkQuoteCurrencyQuoteQuoteIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: QuoteCurrencyPatch,
};

export type QuoteOnQuoteCurrencyForFkQuoteCurrencyQuoteQuoteIdUsingPkQuoteUpdate = {
  patch: UpdateQuoteOnQuoteCurrencyForFkQuoteCurrencyQuoteQuoteIdPatch,
  id: Scalars['UUID'],
};

export type QuoteOnQuoteDayForFkQuoteDayQuoteQuoteIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: QuoteDayPatch,
};

export type QuoteOnQuoteDayForFkQuoteDayQuoteQuoteIdUsingPkQuoteUpdate = {
  patch: UpdateQuoteOnQuoteDayForFkQuoteDayQuoteQuoteIdPatch,
  id: Scalars['UUID'],
};

export type QuoteOnQuoteFinanceLineItemForFkQuoteFinanceLineItemQuoteQuoteIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: QuoteFinanceLineItemPatch,
};

export type QuoteOnQuoteFinanceLineItemForFkQuoteFinanceLineItemQuoteQuoteIdUsingPkQuoteUpdate = {
  patch: UpdateQuoteOnQuoteFinanceLineItemForFkQuoteFinanceLineItemQuoteQuoteIdPatch,
  id: Scalars['UUID'],
};

export type QuoteOnQuoteForFkQuoteMediaItemHeroImageIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: MediaItemPatch,
};

export type QuoteOnQuoteForFkQuoteMediaItemHeroImageIdUsingPkQuoteUpdate = {
  patch: UpdateQuoteOnQuoteForFkQuoteMediaItemHeroImageIdPatch,
  id: Scalars['UUID'],
};

export type QuoteOnQuoteForFkQuoteQuoteHeroHeroIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: QuoteHeroPatch,
};

export type QuoteOnQuoteForFkQuoteQuoteHeroHeroIdUsingPkQuoteUpdate = {
  patch: UpdateQuoteOnQuoteForFkQuoteQuoteHeroHeroIdPatch,
  id: Scalars['UUID'],
};

export type QuoteOnQuoteForFkQuoteTripTripIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: TripPatch,
};

export type QuoteOnQuoteForFkQuoteTripTripIdUsingPkQuoteUpdate = {
  patch: UpdateQuoteOnQuoteForFkQuoteTripTripIdPatch,
  id: Scalars['UUID'],
};

export type QuoteOnQuoteForFkQuoteUserUserIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: UserPatch,
};

export type QuoteOnQuoteForFkQuoteUserUserIdUsingPkQuoteUpdate = {
  patch: UpdateQuoteOnQuoteForFkQuoteUserUserIdPatch,
  id: Scalars['UUID'],
};

export type QuoteOnQuoteViewForFkQuoteViewQuoteQuoteIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: QuoteViewPatch,
};

export type QuoteOnQuoteViewForFkQuoteViewQuoteQuoteIdUsingPkQuoteUpdate = {
  patch: UpdateQuoteOnQuoteViewForFkQuoteViewQuoteQuoteIdPatch,
  id: Scalars['UUID'],
};

export type QuoteOnTripForFkTripQuoteActiveQuoteIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: TripPatch,
};

export type QuoteOnTripForFkTripQuoteActiveQuoteIdUsingPkQuoteUpdate = {
  patch: UpdateQuoteOnTripForFkTripQuoteActiveQuoteIdPatch,
  id: Scalars['UUID'],
};

export type QuotePatch = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  duration?: Maybe<Scalars['Int']>,
  modified?: Maybe<Scalars['Datetime']>,
  start?: Maybe<Scalars['Datetime']>,
  tripId?: Maybe<Scalars['UUID']>,
  deposit?: Maybe<Scalars['BigFloat']>,
  margin?: Maybe<Scalars['BigFloat']>,
  key?: Maybe<Scalars['String']>,
  expires?: Maybe<Scalars['Datetime']>,
  total?: Maybe<Scalars['BigFloat']>,
  adjustment?: Maybe<Scalars['BigFloat']>,
  baseCurrency?: Maybe<Scalars['String']>,
  shortDescription?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  heroImageId?: Maybe<Scalars['UUID']>,
  exclusions?: Maybe<Scalars['String']>,
  inclusions?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['Int']>,
  agentMargin?: Maybe<Scalars['BigFloat']>,
  travellerCount?: Maybe<Scalars['Int']>,
  archived?: Maybe<Scalars['Datetime']>,
  lastViewed?: Maybe<Scalars['Datetime']>,
  heroId?: Maybe<Scalars['UUID']>,
  userId?: Maybe<Scalars['UUID']>,
  locked?: Maybe<Scalars['Datetime']>,
  tripToTripId?: Maybe<FkQuoteTripTripIdInput>,
  mediaItemToHeroImageId?: Maybe<FkQuoteMediaItemHeroImageIdInput>,
  quoteHeroToHeroId?: Maybe<FkQuoteQuoteHeroHeroIdInput>,
  userToUserId?: Maybe<FkQuoteUserUserIdInput>,
  invoicesUsingId?: Maybe<FkInvoiceQuoteQuoteIdInverseInput>,
  tripsUsingId?: Maybe<FkTripQuoteActiveQuoteIdInverseInput>,
  emailsUsingId?: Maybe<FkEmailQuoteQuoteIdInverseInput>,
  quoteViewsUsingId?: Maybe<FkQuoteViewQuoteQuoteIdInverseInput>,
  quoteAccommodationDetailsUsingId?: Maybe<FkQuoteAccommodationDetailQuoteQuoteIdInverseInput>,
  quoteCurrenciesUsingId?: Maybe<FkQuoteCurrencyQuoteQuoteIdInverseInput>,
  quoteDaysUsingId?: Maybe<FkQuoteDayQuoteQuoteIdInverseInput>,
  quoteFinanceLineItemsUsingId?: Maybe<FkQuoteFinanceLineItemQuoteQuoteIdInverseInput>,
};

export type QuotePkQuoteConnect = {
  id: Scalars['UUID'],
};

export type QuotePkQuoteDelete = {
  id: Scalars['UUID'],
};

export type QuotePublic = Node & {
   __typename?: 'QuotePublic',
  nodeId: Scalars['ID'],
  id?: Maybe<Scalars['UUID']>,
  key: Scalars['String'],
  status?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['Datetime']>,
  duration?: Maybe<Scalars['Int']>,
  travellerCount?: Maybe<Scalars['Int']>,
  total?: Maybe<Scalars['BigFloat']>,
  heroId?: Maybe<Scalars['UUID']>,
  tripId?: Maybe<Scalars['UUID']>,
  locked?: Maybe<Scalars['Datetime']>,
  baseCurrency?: Maybe<Scalars['String']>,
  inclusions?: Maybe<Scalars['String']>,
  exclusions?: Maybe<Scalars['String']>,
  expires?: Maybe<Scalars['Datetime']>,
  userId?: Maybe<Scalars['UUID']>,
  trip?: Maybe<Trip>,
  hero?: Maybe<QuoteHero>,
  user?: Maybe<User>,
  quoteAccommodationDetailsByQuoteId: QuoteAccommodationDetailsConnection,
  quoteDaysByQuoteId: QuoteDaysConnection,
};


export type QuotePublicQuoteAccommodationDetailsByQuoteIdArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<QuoteAccommodationDetailsOrderBy>>,
  condition?: Maybe<QuoteAccommodationDetailCondition>,
  filter?: Maybe<QuoteAccommodationDetailFilter>
};


export type QuotePublicQuoteDaysByQuoteIdArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<QuoteDaysOrderBy>>,
  condition?: Maybe<QuoteDayCondition>,
  filter?: Maybe<QuoteDayFilter>
};

export type QuotePublicCondition = {
  id?: Maybe<Scalars['UUID']>,
  key?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['Datetime']>,
  duration?: Maybe<Scalars['Int']>,
  travellerCount?: Maybe<Scalars['Int']>,
  total?: Maybe<Scalars['BigFloat']>,
  heroId?: Maybe<Scalars['UUID']>,
  tripId?: Maybe<Scalars['UUID']>,
  locked?: Maybe<Scalars['Datetime']>,
  baseCurrency?: Maybe<Scalars['String']>,
  inclusions?: Maybe<Scalars['String']>,
  exclusions?: Maybe<Scalars['String']>,
  expires?: Maybe<Scalars['Datetime']>,
  userId?: Maybe<Scalars['UUID']>,
};

export type QuotePublicFakePublicQuotePublicPrimaryKeyConnect = {
  key: Scalars['String'],
};

export type QuotePublicFakePublicQuotePublicPrimaryKeyDelete = {
  key: Scalars['String'],
};

export type QuotePublicFilter = {
  id?: Maybe<UuidFilter>,
  key?: Maybe<StringFilter>,
  status?: Maybe<IntFilter>,
  start?: Maybe<DatetimeFilter>,
  duration?: Maybe<IntFilter>,
  travellerCount?: Maybe<IntFilter>,
  total?: Maybe<BigFloatFilter>,
  heroId?: Maybe<UuidFilter>,
  tripId?: Maybe<UuidFilter>,
  locked?: Maybe<DatetimeFilter>,
  baseCurrency?: Maybe<StringFilter>,
  inclusions?: Maybe<StringFilter>,
  exclusions?: Maybe<StringFilter>,
  expires?: Maybe<DatetimeFilter>,
  userId?: Maybe<UuidFilter>,
  quoteAccommodationDetailsByQuoteId?: Maybe<QuotePublicToManyQuoteAccommodationDetailFilter>,
  quoteAccommodationDetailsByQuoteIdExist?: Maybe<Scalars['Boolean']>,
  quoteDaysByQuoteId?: Maybe<QuotePublicToManyQuoteDayFilter>,
  quoteDaysByQuoteIdExist?: Maybe<Scalars['Boolean']>,
  trip?: Maybe<TripFilter>,
  tripExists?: Maybe<Scalars['Boolean']>,
  hero?: Maybe<QuoteHeroFilter>,
  heroExists?: Maybe<Scalars['Boolean']>,
  user?: Maybe<UserFilter>,
  userExists?: Maybe<Scalars['Boolean']>,
  and?: Maybe<Array<QuotePublicFilter>>,
  or?: Maybe<Array<QuotePublicFilter>>,
  not?: Maybe<QuotePublicFilter>,
};

export type QuotePublicInput = {
  id?: Maybe<Scalars['UUID']>,
  key: Scalars['String'],
  status?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['Datetime']>,
  duration?: Maybe<Scalars['Int']>,
  travellerCount?: Maybe<Scalars['Int']>,
  total?: Maybe<Scalars['BigFloat']>,
  heroId?: Maybe<Scalars['UUID']>,
  tripId?: Maybe<Scalars['UUID']>,
  locked?: Maybe<Scalars['Datetime']>,
  baseCurrency?: Maybe<Scalars['String']>,
  inclusions?: Maybe<Scalars['String']>,
  exclusions?: Maybe<Scalars['String']>,
  expires?: Maybe<Scalars['Datetime']>,
  userId?: Maybe<Scalars['UUID']>,
  tripToTripId?: Maybe<FakePublicQuotePublicForeignKey0Input>,
  quoteHeroToHeroId?: Maybe<FakePublicQuotePublicForeignKey1Input>,
  userToUserId?: Maybe<FakePublicQuotePublicForeignKey2Input>,
  quoteAccommodationDetailsUsingId?: Maybe<FakePublicQuoteAccommodationDetailForeignKey0InverseInput>,
  quoteDaysUsingId?: Maybe<FakePublicQuoteDayForeignKey0InverseInput>,
};

export type QuotePublicNodeIdConnect = {
  nodeId: Scalars['ID'],
};

export type QuotePublicNodeIdDelete = {
  nodeId: Scalars['ID'],
};

export type QuotePublicOnQuoteAccommodationDetailForFakePublicQuoteAccommodationDetailForeignKey0NodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: QuoteAccommodationDetailPatch,
};

export type QuotePublicOnQuoteAccommodationDetailForFakePublicQuoteAccommodationDetailForeignKey0UsingFakePublicQuotePublicPrimaryKeyUpdate = {
  patch: UpdateQuotePublicOnQuoteAccommodationDetailForFakePublicQuoteAccommodationDetailForeignKey0Patch,
  key: Scalars['String'],
};

export type QuotePublicOnQuoteDayForFakePublicQuoteDayForeignKey0NodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: QuoteDayPatch,
};

export type QuotePublicOnQuoteDayForFakePublicQuoteDayForeignKey0UsingFakePublicQuotePublicPrimaryKeyUpdate = {
  patch: UpdateQuotePublicOnQuoteDayForFakePublicQuoteDayForeignKey0Patch,
  key: Scalars['String'],
};

export type QuotePublicOnQuotePublicForFakePublicQuotePublicForeignKey0NodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: TripPatch,
};

export type QuotePublicOnQuotePublicForFakePublicQuotePublicForeignKey0UsingFakePublicQuotePublicPrimaryKeyUpdate = {
  patch: UpdateQuotePublicOnQuotePublicForFakePublicQuotePublicForeignKey0Patch,
  key: Scalars['String'],
};

export type QuotePublicOnQuotePublicForFakePublicQuotePublicForeignKey1NodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: QuoteHeroPatch,
};

export type QuotePublicOnQuotePublicForFakePublicQuotePublicForeignKey1UsingFakePublicQuotePublicPrimaryKeyUpdate = {
  patch: UpdateQuotePublicOnQuotePublicForFakePublicQuotePublicForeignKey1Patch,
  key: Scalars['String'],
};

export type QuotePublicOnQuotePublicForFakePublicQuotePublicForeignKey2NodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: UserPatch,
};

export type QuotePublicOnQuotePublicForFakePublicQuotePublicForeignKey2UsingFakePublicQuotePublicPrimaryKeyUpdate = {
  patch: UpdateQuotePublicOnQuotePublicForFakePublicQuotePublicForeignKey2Patch,
  key: Scalars['String'],
};

export type QuotePublicPatch = {
  id?: Maybe<Scalars['UUID']>,
  key?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['Datetime']>,
  duration?: Maybe<Scalars['Int']>,
  travellerCount?: Maybe<Scalars['Int']>,
  total?: Maybe<Scalars['BigFloat']>,
  heroId?: Maybe<Scalars['UUID']>,
  tripId?: Maybe<Scalars['UUID']>,
  locked?: Maybe<Scalars['Datetime']>,
  baseCurrency?: Maybe<Scalars['String']>,
  inclusions?: Maybe<Scalars['String']>,
  exclusions?: Maybe<Scalars['String']>,
  expires?: Maybe<Scalars['Datetime']>,
  userId?: Maybe<Scalars['UUID']>,
  tripToTripId?: Maybe<FakePublicQuotePublicForeignKey0Input>,
  quoteHeroToHeroId?: Maybe<FakePublicQuotePublicForeignKey1Input>,
  userToUserId?: Maybe<FakePublicQuotePublicForeignKey2Input>,
  quoteAccommodationDetailsUsingId?: Maybe<FakePublicQuoteAccommodationDetailForeignKey0InverseInput>,
  quoteDaysUsingId?: Maybe<FakePublicQuoteDayForeignKey0InverseInput>,
};

export type QuotePublicsConnection = {
   __typename?: 'QuotePublicsConnection',
  nodes: Array<Maybe<QuotePublic>>,
  edges: Array<QuotePublicsEdge>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
};

export type QuotePublicsEdge = {
   __typename?: 'QuotePublicsEdge',
  cursor?: Maybe<Scalars['Cursor']>,
  node?: Maybe<QuotePublic>,
};

export enum QuotePublicsOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  KeyAsc = 'KEY_ASC',
  KeyDesc = 'KEY_DESC',
  StatusAsc = 'STATUS_ASC',
  StatusDesc = 'STATUS_DESC',
  StartAsc = 'START_ASC',
  StartDesc = 'START_DESC',
  DurationAsc = 'DURATION_ASC',
  DurationDesc = 'DURATION_DESC',
  TravellerCountAsc = 'TRAVELLER_COUNT_ASC',
  TravellerCountDesc = 'TRAVELLER_COUNT_DESC',
  TotalAsc = 'TOTAL_ASC',
  TotalDesc = 'TOTAL_DESC',
  HeroIdAsc = 'HERO_ID_ASC',
  HeroIdDesc = 'HERO_ID_DESC',
  TripIdAsc = 'TRIP_ID_ASC',
  TripIdDesc = 'TRIP_ID_DESC',
  LockedAsc = 'LOCKED_ASC',
  LockedDesc = 'LOCKED_DESC',
  BaseCurrencyAsc = 'BASE_CURRENCY_ASC',
  BaseCurrencyDesc = 'BASE_CURRENCY_DESC',
  InclusionsAsc = 'INCLUSIONS_ASC',
  InclusionsDesc = 'INCLUSIONS_DESC',
  ExclusionsAsc = 'EXCLUSIONS_ASC',
  ExclusionsDesc = 'EXCLUSIONS_DESC',
  ExpiresAsc = 'EXPIRES_ASC',
  ExpiresDesc = 'EXPIRES_DESC',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type QuotePublicToManyQuoteAccommodationDetailFilter = {
  every?: Maybe<QuoteAccommodationDetailFilter>,
  some?: Maybe<QuoteAccommodationDetailFilter>,
  none?: Maybe<QuoteAccommodationDetailFilter>,
};

export type QuotePublicToManyQuoteDayFilter = {
  every?: Maybe<QuoteDayFilter>,
  some?: Maybe<QuoteDayFilter>,
  none?: Maybe<QuoteDayFilter>,
};

export type QuotesConnection = {
   __typename?: 'QuotesConnection',
  nodes: Array<Maybe<Quote>>,
  edges: Array<QuotesEdge>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
};

export type QuotesEdge = {
   __typename?: 'QuotesEdge',
  cursor?: Maybe<Scalars['Cursor']>,
  node?: Maybe<Quote>,
};

export enum QuotesOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  DurationAsc = 'DURATION_ASC',
  DurationDesc = 'DURATION_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC',
  StartAsc = 'START_ASC',
  StartDesc = 'START_DESC',
  TripIdAsc = 'TRIP_ID_ASC',
  TripIdDesc = 'TRIP_ID_DESC',
  DepositAsc = 'DEPOSIT_ASC',
  DepositDesc = 'DEPOSIT_DESC',
  MarginAsc = 'MARGIN_ASC',
  MarginDesc = 'MARGIN_DESC',
  KeyAsc = 'KEY_ASC',
  KeyDesc = 'KEY_DESC',
  ExpiresAsc = 'EXPIRES_ASC',
  ExpiresDesc = 'EXPIRES_DESC',
  TotalAsc = 'TOTAL_ASC',
  TotalDesc = 'TOTAL_DESC',
  AdjustmentAsc = 'ADJUSTMENT_ASC',
  AdjustmentDesc = 'ADJUSTMENT_DESC',
  BaseCurrencyAsc = 'BASE_CURRENCY_ASC',
  BaseCurrencyDesc = 'BASE_CURRENCY_DESC',
  ShortDescriptionAsc = 'SHORT_DESCRIPTION_ASC',
  ShortDescriptionDesc = 'SHORT_DESCRIPTION_DESC',
  SummaryAsc = 'SUMMARY_ASC',
  SummaryDesc = 'SUMMARY_DESC',
  HeroImageIdAsc = 'HERO_IMAGE_ID_ASC',
  HeroImageIdDesc = 'HERO_IMAGE_ID_DESC',
  ExclusionsAsc = 'EXCLUSIONS_ASC',
  ExclusionsDesc = 'EXCLUSIONS_DESC',
  InclusionsAsc = 'INCLUSIONS_ASC',
  InclusionsDesc = 'INCLUSIONS_DESC',
  StatusAsc = 'STATUS_ASC',
  StatusDesc = 'STATUS_DESC',
  AgentMarginAsc = 'AGENT_MARGIN_ASC',
  AgentMarginDesc = 'AGENT_MARGIN_DESC',
  TravellerCountAsc = 'TRAVELLER_COUNT_ASC',
  TravellerCountDesc = 'TRAVELLER_COUNT_DESC',
  ArchivedAsc = 'ARCHIVED_ASC',
  ArchivedDesc = 'ARCHIVED_DESC',
  LastViewedAsc = 'LAST_VIEWED_ASC',
  LastViewedDesc = 'LAST_VIEWED_DESC',
  HeroIdAsc = 'HERO_ID_ASC',
  HeroIdDesc = 'HERO_ID_DESC',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC',
  LockedAsc = 'LOCKED_ASC',
  LockedDesc = 'LOCKED_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type QuoteToManyEmailFilter = {
  every?: Maybe<EmailFilter>,
  some?: Maybe<EmailFilter>,
  none?: Maybe<EmailFilter>,
};

export type QuoteToManyInvoiceFilter = {
  every?: Maybe<InvoiceFilter>,
  some?: Maybe<InvoiceFilter>,
  none?: Maybe<InvoiceFilter>,
};

export type QuoteToManyQuoteAccommodationDetailFilter = {
  every?: Maybe<QuoteAccommodationDetailFilter>,
  some?: Maybe<QuoteAccommodationDetailFilter>,
  none?: Maybe<QuoteAccommodationDetailFilter>,
};

export type QuoteToManyQuoteCurrencyFilter = {
  every?: Maybe<QuoteCurrencyFilter>,
  some?: Maybe<QuoteCurrencyFilter>,
  none?: Maybe<QuoteCurrencyFilter>,
};

export type QuoteToManyQuoteDayFilter = {
  every?: Maybe<QuoteDayFilter>,
  some?: Maybe<QuoteDayFilter>,
  none?: Maybe<QuoteDayFilter>,
};

export type QuoteToManyQuoteFinanceLineItemFilter = {
  every?: Maybe<QuoteFinanceLineItemFilter>,
  some?: Maybe<QuoteFinanceLineItemFilter>,
  none?: Maybe<QuoteFinanceLineItemFilter>,
};

export type QuoteToManyQuoteViewFilter = {
  every?: Maybe<QuoteViewFilter>,
  some?: Maybe<QuoteViewFilter>,
  none?: Maybe<QuoteViewFilter>,
};

export type QuoteToManyTripFilter = {
  every?: Maybe<TripFilter>,
  some?: Maybe<TripFilter>,
  none?: Maybe<TripFilter>,
};

export type QuoteView = Node & {
   __typename?: 'QuoteView',
  nodeId: Scalars['ID'],
  id: Scalars['UUID'],
  city?: Maybe<Scalars['String']>,
  country?: Maybe<Scalars['String']>,
  created: Scalars['Datetime'],
  modified: Scalars['Datetime'],
  quoteId: Scalars['UUID'],
  timezone?: Maybe<Scalars['String']>,
  userIp?: Maybe<Scalars['String']>,
  viewType?: Maybe<Scalars['String']>,
  quote?: Maybe<Quote>,
};

export type QuoteViewCondition = {
  id?: Maybe<Scalars['UUID']>,
  city?: Maybe<Scalars['String']>,
  country?: Maybe<Scalars['String']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  quoteId?: Maybe<Scalars['UUID']>,
  timezone?: Maybe<Scalars['String']>,
  userIp?: Maybe<Scalars['String']>,
  viewType?: Maybe<Scalars['String']>,
};

export type QuoteViewFilter = {
  id?: Maybe<UuidFilter>,
  city?: Maybe<StringFilter>,
  country?: Maybe<StringFilter>,
  created?: Maybe<DatetimeFilter>,
  modified?: Maybe<DatetimeFilter>,
  quoteId?: Maybe<UuidFilter>,
  timezone?: Maybe<StringFilter>,
  userIp?: Maybe<StringFilter>,
  viewType?: Maybe<StringFilter>,
  quote?: Maybe<QuoteFilter>,
  and?: Maybe<Array<QuoteViewFilter>>,
  or?: Maybe<Array<QuoteViewFilter>>,
  not?: Maybe<QuoteViewFilter>,
};

export type QuoteViewInput = {
  id?: Maybe<Scalars['UUID']>,
  city?: Maybe<Scalars['String']>,
  country?: Maybe<Scalars['String']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  quoteId?: Maybe<Scalars['UUID']>,
  timezone?: Maybe<Scalars['String']>,
  userIp?: Maybe<Scalars['String']>,
  viewType?: Maybe<Scalars['String']>,
  quoteToQuoteId?: Maybe<FkQuoteViewQuoteQuoteIdInput>,
};

export type QuoteViewNodeIdConnect = {
  nodeId: Scalars['ID'],
};

export type QuoteViewNodeIdDelete = {
  nodeId: Scalars['ID'],
};

export type QuoteViewOnQuoteViewForFkQuoteViewQuoteQuoteIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: QuotePatch,
};

export type QuoteViewOnQuoteViewForFkQuoteViewQuoteQuoteIdUsingPkQuoteViewUpdate = {
  patch: UpdateQuoteViewOnQuoteViewForFkQuoteViewQuoteQuoteIdPatch,
  id: Scalars['UUID'],
};

export type QuoteViewPatch = {
  id?: Maybe<Scalars['UUID']>,
  city?: Maybe<Scalars['String']>,
  country?: Maybe<Scalars['String']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  quoteId?: Maybe<Scalars['UUID']>,
  timezone?: Maybe<Scalars['String']>,
  userIp?: Maybe<Scalars['String']>,
  viewType?: Maybe<Scalars['String']>,
  quoteToQuoteId?: Maybe<FkQuoteViewQuoteQuoteIdInput>,
};

export type QuoteViewPkQuoteViewConnect = {
  id: Scalars['UUID'],
};

export type QuoteViewPkQuoteViewDelete = {
  id: Scalars['UUID'],
};

export type QuoteViewsConnection = {
   __typename?: 'QuoteViewsConnection',
  nodes: Array<Maybe<QuoteView>>,
  edges: Array<QuoteViewsEdge>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
};

export type QuoteViewsEdge = {
   __typename?: 'QuoteViewsEdge',
  cursor?: Maybe<Scalars['Cursor']>,
  node?: Maybe<QuoteView>,
};

export enum QuoteViewsOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  CityAsc = 'CITY_ASC',
  CityDesc = 'CITY_DESC',
  CountryAsc = 'COUNTRY_ASC',
  CountryDesc = 'COUNTRY_DESC',
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC',
  QuoteIdAsc = 'QUOTE_ID_ASC',
  QuoteIdDesc = 'QUOTE_ID_DESC',
  TimezoneAsc = 'TIMEZONE_ASC',
  TimezoneDesc = 'TIMEZONE_DESC',
  UserIpAsc = 'USER_IP_ASC',
  UserIpDesc = 'USER_IP_DESC',
  ViewTypeAsc = 'VIEW_TYPE_ASC',
  ViewTypeDesc = 'VIEW_TYPE_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type RandomStringInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  len?: Maybe<Scalars['Int']>,
};

export type RandomStringPayload = {
   __typename?: 'RandomStringPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  string?: Maybe<Scalars['String']>,
  query?: Maybe<Query>,
};

export type RecordStripePaymentInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  invoiceId?: Maybe<Scalars['UUID']>,
  chargeId?: Maybe<Scalars['String']>,
  chargeAmount?: Maybe<Scalars['Int']>,
  chargeCreated?: Maybe<Scalars['Int']>,
  balanceId?: Maybe<Scalars['String']>,
  balanceFee?: Maybe<Scalars['Int']>,
  balanceCurrency?: Maybe<Scalars['String']>,
};

export type RecordStripePaymentPayload = {
   __typename?: 'RecordStripePaymentPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  query?: Maybe<Query>,
};

export type Reminder = Node & {
   __typename?: 'Reminder',
  nodeId: Scalars['ID'],
  id: Scalars['UUID'],
  body?: Maybe<Scalars['String']>,
  date: Scalars['Datetime'],
  userId: Scalars['UUID'],
  user?: Maybe<User>,
};

export type ReminderCondition = {
  id?: Maybe<Scalars['UUID']>,
  body?: Maybe<Scalars['String']>,
  date?: Maybe<Scalars['Datetime']>,
  userId?: Maybe<Scalars['UUID']>,
};

export type ReminderFilter = {
  id?: Maybe<UuidFilter>,
  body?: Maybe<StringFilter>,
  date?: Maybe<DatetimeFilter>,
  userId?: Maybe<UuidFilter>,
  user?: Maybe<UserFilter>,
  and?: Maybe<Array<ReminderFilter>>,
  or?: Maybe<Array<ReminderFilter>>,
  not?: Maybe<ReminderFilter>,
};

export type ReminderInput = {
  id?: Maybe<Scalars['UUID']>,
  body?: Maybe<Scalars['String']>,
  date: Scalars['Datetime'],
  userId?: Maybe<Scalars['UUID']>,
  userToUserId?: Maybe<FkReminderUserUserIdInput>,
};

export type ReminderNodeIdConnect = {
  nodeId: Scalars['ID'],
};

export type ReminderNodeIdDelete = {
  nodeId: Scalars['ID'],
};

export type ReminderOnReminderForFkReminderUserUserIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: UserPatch,
};

export type ReminderOnReminderForFkReminderUserUserIdUsingPkReminderUpdate = {
  patch: UpdateReminderOnReminderForFkReminderUserUserIdPatch,
  id: Scalars['UUID'],
};

export type ReminderPatch = {
  id?: Maybe<Scalars['UUID']>,
  body?: Maybe<Scalars['String']>,
  date?: Maybe<Scalars['Datetime']>,
  userId?: Maybe<Scalars['UUID']>,
  userToUserId?: Maybe<FkReminderUserUserIdInput>,
};

export type ReminderPkReminderConnect = {
  id: Scalars['UUID'],
};

export type ReminderPkReminderDelete = {
  id: Scalars['UUID'],
};

export type RemindersConnection = {
   __typename?: 'RemindersConnection',
  nodes: Array<Maybe<Reminder>>,
  edges: Array<RemindersEdge>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
};

export type RemindersEdge = {
   __typename?: 'RemindersEdge',
  cursor?: Maybe<Scalars['Cursor']>,
  node?: Maybe<Reminder>,
};

export enum RemindersOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  BodyAsc = 'BODY_ASC',
  BodyDesc = 'BODY_DESC',
  DateAsc = 'DATE_ASC',
  DateDesc = 'DATE_DESC',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type StringFilter = {
  isNull?: Maybe<Scalars['Boolean']>,
  equalTo?: Maybe<Scalars['String']>,
  notEqualTo?: Maybe<Scalars['String']>,
  distinctFrom?: Maybe<Scalars['String']>,
  notDistinctFrom?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Scalars['String']>>,
  notIn?: Maybe<Array<Scalars['String']>>,
  lessThan?: Maybe<Scalars['String']>,
  lessThanOrEqualTo?: Maybe<Scalars['String']>,
  greaterThan?: Maybe<Scalars['String']>,
  greaterThanOrEqualTo?: Maybe<Scalars['String']>,
  includes?: Maybe<Scalars['String']>,
  notIncludes?: Maybe<Scalars['String']>,
  includesInsensitive?: Maybe<Scalars['String']>,
  notIncludesInsensitive?: Maybe<Scalars['String']>,
  startsWith?: Maybe<Scalars['String']>,
  notStartsWith?: Maybe<Scalars['String']>,
  startsWithInsensitive?: Maybe<Scalars['String']>,
  notStartsWithInsensitive?: Maybe<Scalars['String']>,
  endsWith?: Maybe<Scalars['String']>,
  notEndsWith?: Maybe<Scalars['String']>,
  endsWithInsensitive?: Maybe<Scalars['String']>,
  notEndsWithInsensitive?: Maybe<Scalars['String']>,
  like?: Maybe<Scalars['String']>,
  notLike?: Maybe<Scalars['String']>,
  likeInsensitive?: Maybe<Scalars['String']>,
  notLikeInsensitive?: Maybe<Scalars['String']>,
  similarTo?: Maybe<Scalars['String']>,
  notSimilarTo?: Maybe<Scalars['String']>,
};

export type StringListFilter = {
  isNull?: Maybe<Scalars['Boolean']>,
  equalTo?: Maybe<Array<Maybe<Scalars['String']>>>,
  notEqualTo?: Maybe<Array<Maybe<Scalars['String']>>>,
  distinctFrom?: Maybe<Array<Maybe<Scalars['String']>>>,
  notDistinctFrom?: Maybe<Array<Maybe<Scalars['String']>>>,
  lessThan?: Maybe<Array<Maybe<Scalars['String']>>>,
  lessThanOrEqualTo?: Maybe<Array<Maybe<Scalars['String']>>>,
  greaterThan?: Maybe<Array<Maybe<Scalars['String']>>>,
  greaterThanOrEqualTo?: Maybe<Array<Maybe<Scalars['String']>>>,
  contains?: Maybe<Array<Maybe<Scalars['String']>>>,
  containedBy?: Maybe<Array<Maybe<Scalars['String']>>>,
  overlaps?: Maybe<Array<Maybe<Scalars['String']>>>,
  anyEqualTo?: Maybe<Scalars['String']>,
  anyNotEqualTo?: Maybe<Scalars['String']>,
  anyLessThan?: Maybe<Scalars['String']>,
  anyLessThanOrEqualTo?: Maybe<Scalars['String']>,
  anyGreaterThan?: Maybe<Scalars['String']>,
  anyGreaterThanOrEqualTo?: Maybe<Scalars['String']>,
};

export type Supplier = Node & {
   __typename?: 'Supplier',
  nodeId: Scalars['ID'],
  id: Scalars['UUID'],
  created: Scalars['Datetime'],
  modified: Scalars['Datetime'],
  name?: Maybe<Scalars['String']>,
  contactEmail?: Maybe<Scalars['String']>,
  contactNumber?: Maybe<Scalars['String']>,
  region?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
  bankDetails?: Maybe<Scalars['String']>,
  galleryId?: Maybe<Scalars['UUID']>,
  gallery?: Maybe<MediaGallery>,
  expenses: ExpensesConnection,
  supplierInvoices: SupplierInvoicesConnection,
  quoteFinanceLineItems: QuoteFinanceLineItemsConnection,
};


export type SupplierExpensesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<ExpensesOrderBy>>,
  condition?: Maybe<ExpenseCondition>,
  filter?: Maybe<ExpenseFilter>
};


export type SupplierSupplierInvoicesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<SupplierInvoicesOrderBy>>,
  condition?: Maybe<SupplierInvoiceCondition>,
  filter?: Maybe<SupplierInvoiceFilter>
};


export type SupplierQuoteFinanceLineItemsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<QuoteFinanceLineItemsOrderBy>>,
  condition?: Maybe<QuoteFinanceLineItemCondition>,
  filter?: Maybe<QuoteFinanceLineItemFilter>
};

export type SupplierCondition = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  contactEmail?: Maybe<Scalars['String']>,
  contactNumber?: Maybe<Scalars['String']>,
  region?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
  bankDetails?: Maybe<Scalars['String']>,
  galleryId?: Maybe<Scalars['UUID']>,
};

export type SupplierFilter = {
  id?: Maybe<UuidFilter>,
  created?: Maybe<DatetimeFilter>,
  modified?: Maybe<DatetimeFilter>,
  name?: Maybe<StringFilter>,
  contactEmail?: Maybe<StringFilter>,
  contactNumber?: Maybe<StringFilter>,
  region?: Maybe<StringFilter>,
  url?: Maybe<StringFilter>,
  bankDetails?: Maybe<StringFilter>,
  galleryId?: Maybe<UuidFilter>,
  expenses?: Maybe<SupplierToManyExpenseFilter>,
  expensesExist?: Maybe<Scalars['Boolean']>,
  supplierInvoices?: Maybe<SupplierToManySupplierInvoiceFilter>,
  supplierInvoicesExist?: Maybe<Scalars['Boolean']>,
  quoteFinanceLineItems?: Maybe<SupplierToManyQuoteFinanceLineItemFilter>,
  quoteFinanceLineItemsExist?: Maybe<Scalars['Boolean']>,
  gallery?: Maybe<MediaGalleryFilter>,
  galleryExists?: Maybe<Scalars['Boolean']>,
  and?: Maybe<Array<SupplierFilter>>,
  or?: Maybe<Array<SupplierFilter>>,
  not?: Maybe<SupplierFilter>,
};

export type SupplierInput = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  contactEmail?: Maybe<Scalars['String']>,
  contactNumber?: Maybe<Scalars['String']>,
  region?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
  bankDetails?: Maybe<Scalars['String']>,
  galleryId?: Maybe<Scalars['UUID']>,
  mediaGalleryToGalleryId?: Maybe<FkSupplierMediaGalleryGalleryIdInput>,
  expensesUsingId?: Maybe<FkExpenseSupplierSupplierIdInverseInput>,
  supplierInvoicesUsingId?: Maybe<FkSupplierInvoiceSupplierSupplierIdInverseInput>,
  quoteFinanceLineItemsUsingId?: Maybe<FkQuoteFinanceLineItemSupplierSupplierIdInverseInput>,
};

export type SupplierInvoice = Node & {
   __typename?: 'SupplierInvoice',
  nodeId: Scalars['ID'],
  id: Scalars['UUID'],
  amount: Scalars['BigFloat'],
  categoryId?: Maybe<Scalars['UUID']>,
  created: Scalars['Datetime'],
  currency?: Maybe<Scalars['String']>,
  due: Scalars['Datetime'],
  key?: Maybe<Scalars['String']>,
  modified: Scalars['Datetime'],
  number: Scalars['Int'],
  summary?: Maybe<Scalars['String']>,
  supplierId: Scalars['UUID'],
  tripId?: Maybe<Scalars['UUID']>,
  type?: Maybe<Scalars['String']>,
  voided?: Maybe<Scalars['Datetime']>,
  amountActual: Scalars['BigFloat'],
  paid?: Maybe<Scalars['Datetime']>,
  mediaItemId?: Maybe<Scalars['UUID']>,
  category?: Maybe<FinanceCategory>,
  supplier?: Maybe<Supplier>,
  trip?: Maybe<Trip>,
  mediaItem?: Maybe<MediaItem>,
  expenses: ExpensesConnection,
  transactionLinks: TransactionLinksConnection,
};


export type SupplierInvoiceExpensesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<ExpensesOrderBy>>,
  condition?: Maybe<ExpenseCondition>,
  filter?: Maybe<ExpenseFilter>
};


export type SupplierInvoiceTransactionLinksArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<TransactionLinksOrderBy>>,
  condition?: Maybe<TransactionLinkCondition>,
  filter?: Maybe<TransactionLinkFilter>
};

export type SupplierInvoiceCondition = {
  id?: Maybe<Scalars['UUID']>,
  amount?: Maybe<Scalars['BigFloat']>,
  categoryId?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  currency?: Maybe<Scalars['String']>,
  due?: Maybe<Scalars['Datetime']>,
  key?: Maybe<Scalars['String']>,
  modified?: Maybe<Scalars['Datetime']>,
  number?: Maybe<Scalars['Int']>,
  summary?: Maybe<Scalars['String']>,
  supplierId?: Maybe<Scalars['UUID']>,
  tripId?: Maybe<Scalars['UUID']>,
  type?: Maybe<Scalars['String']>,
  voided?: Maybe<Scalars['Datetime']>,
  amountActual?: Maybe<Scalars['BigFloat']>,
  paid?: Maybe<Scalars['Datetime']>,
  mediaItemId?: Maybe<Scalars['UUID']>,
};

export type SupplierInvoiceFilter = {
  id?: Maybe<UuidFilter>,
  amount?: Maybe<BigFloatFilter>,
  categoryId?: Maybe<UuidFilter>,
  created?: Maybe<DatetimeFilter>,
  currency?: Maybe<StringFilter>,
  due?: Maybe<DatetimeFilter>,
  key?: Maybe<StringFilter>,
  modified?: Maybe<DatetimeFilter>,
  number?: Maybe<IntFilter>,
  summary?: Maybe<StringFilter>,
  supplierId?: Maybe<UuidFilter>,
  tripId?: Maybe<UuidFilter>,
  type?: Maybe<StringFilter>,
  voided?: Maybe<DatetimeFilter>,
  amountActual?: Maybe<BigFloatFilter>,
  paid?: Maybe<DatetimeFilter>,
  mediaItemId?: Maybe<UuidFilter>,
  expenses?: Maybe<SupplierInvoiceToManyExpenseFilter>,
  expensesExist?: Maybe<Scalars['Boolean']>,
  transactionLinks?: Maybe<SupplierInvoiceToManyTransactionLinkFilter>,
  transactionLinksExist?: Maybe<Scalars['Boolean']>,
  category?: Maybe<FinanceCategoryFilter>,
  categoryExists?: Maybe<Scalars['Boolean']>,
  supplier?: Maybe<SupplierFilter>,
  trip?: Maybe<TripFilter>,
  tripExists?: Maybe<Scalars['Boolean']>,
  mediaItem?: Maybe<MediaItemFilter>,
  mediaItemExists?: Maybe<Scalars['Boolean']>,
  and?: Maybe<Array<SupplierInvoiceFilter>>,
  or?: Maybe<Array<SupplierInvoiceFilter>>,
  not?: Maybe<SupplierInvoiceFilter>,
};

export type SupplierInvoiceInput = {
  id?: Maybe<Scalars['UUID']>,
  amount: Scalars['BigFloat'],
  categoryId?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  currency?: Maybe<Scalars['String']>,
  due: Scalars['Datetime'],
  key?: Maybe<Scalars['String']>,
  modified?: Maybe<Scalars['Datetime']>,
  number: Scalars['Int'],
  summary?: Maybe<Scalars['String']>,
  supplierId?: Maybe<Scalars['UUID']>,
  tripId?: Maybe<Scalars['UUID']>,
  type?: Maybe<Scalars['String']>,
  voided?: Maybe<Scalars['Datetime']>,
  amountActual?: Maybe<Scalars['BigFloat']>,
  paid?: Maybe<Scalars['Datetime']>,
  mediaItemId?: Maybe<Scalars['UUID']>,
  financeCategoryToCategoryId?: Maybe<FkSupplierInvoiceFinanceCategoryCategoryIdInput>,
  supplierToSupplierId?: Maybe<FkSupplierInvoiceSupplierSupplierIdInput>,
  tripToTripId?: Maybe<FkSupplierInvoiceTripTripIdInput>,
  mediaItemToMediaItemId?: Maybe<FkSupplierInvoiceMediaItemMediaItemIdInput>,
  expensesUsingId?: Maybe<FkExpenseSupplierInvoiceSupplierInvoiceIdInverseInput>,
  transactionLinksUsingId?: Maybe<FkTransactionLinkSupplierInvoiceSupplierInvoiceIdInverseInput>,
};

export type SupplierInvoiceNodeIdConnect = {
  nodeId: Scalars['ID'],
};

export type SupplierInvoiceNodeIdDelete = {
  nodeId: Scalars['ID'],
};

export type SupplierInvoiceOnExpenseForFkExpenseSupplierInvoiceSupplierInvoiceIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: ExpensePatch,
};

export type SupplierInvoiceOnExpenseForFkExpenseSupplierInvoiceSupplierInvoiceIdUsingPkSupplierInvoiceUpdate = {
  patch: UpdateSupplierInvoiceOnExpenseForFkExpenseSupplierInvoiceSupplierInvoiceIdPatch,
  id: Scalars['UUID'],
};

export type SupplierInvoiceOnSupplierInvoiceForFkSupplierInvoiceFinanceCategoryCategoryIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: FinanceCategoryPatch,
};

export type SupplierInvoiceOnSupplierInvoiceForFkSupplierInvoiceFinanceCategoryCategoryIdUsingPkSupplierInvoiceUpdate = {
  patch: UpdateSupplierInvoiceOnSupplierInvoiceForFkSupplierInvoiceFinanceCategoryCategoryIdPatch,
  id: Scalars['UUID'],
};

export type SupplierInvoiceOnSupplierInvoiceForFkSupplierInvoiceMediaItemMediaItemIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: MediaItemPatch,
};

export type SupplierInvoiceOnSupplierInvoiceForFkSupplierInvoiceMediaItemMediaItemIdUsingPkSupplierInvoiceUpdate = {
  patch: UpdateSupplierInvoiceOnSupplierInvoiceForFkSupplierInvoiceMediaItemMediaItemIdPatch,
  id: Scalars['UUID'],
};

export type SupplierInvoiceOnSupplierInvoiceForFkSupplierInvoiceSupplierSupplierIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: SupplierPatch,
};

export type SupplierInvoiceOnSupplierInvoiceForFkSupplierInvoiceSupplierSupplierIdUsingPkSupplierInvoiceUpdate = {
  patch: UpdateSupplierInvoiceOnSupplierInvoiceForFkSupplierInvoiceSupplierSupplierIdPatch,
  id: Scalars['UUID'],
};

export type SupplierInvoiceOnSupplierInvoiceForFkSupplierInvoiceTripTripIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: TripPatch,
};

export type SupplierInvoiceOnSupplierInvoiceForFkSupplierInvoiceTripTripIdUsingPkSupplierInvoiceUpdate = {
  patch: UpdateSupplierInvoiceOnSupplierInvoiceForFkSupplierInvoiceTripTripIdPatch,
  id: Scalars['UUID'],
};

export type SupplierInvoiceOnTransactionLinkForFkTransactionLinkSupplierInvoiceSupplierInvoiceIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: TransactionLinkPatch,
};

export type SupplierInvoiceOnTransactionLinkForFkTransactionLinkSupplierInvoiceSupplierInvoiceIdUsingPkSupplierInvoiceUpdate = {
  patch: UpdateSupplierInvoiceOnTransactionLinkForFkTransactionLinkSupplierInvoiceSupplierInvoiceIdPatch,
  id: Scalars['UUID'],
};

export type SupplierInvoicePatch = {
  id?: Maybe<Scalars['UUID']>,
  amount?: Maybe<Scalars['BigFloat']>,
  categoryId?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  currency?: Maybe<Scalars['String']>,
  due?: Maybe<Scalars['Datetime']>,
  key?: Maybe<Scalars['String']>,
  modified?: Maybe<Scalars['Datetime']>,
  number?: Maybe<Scalars['Int']>,
  summary?: Maybe<Scalars['String']>,
  supplierId?: Maybe<Scalars['UUID']>,
  tripId?: Maybe<Scalars['UUID']>,
  type?: Maybe<Scalars['String']>,
  voided?: Maybe<Scalars['Datetime']>,
  amountActual?: Maybe<Scalars['BigFloat']>,
  paid?: Maybe<Scalars['Datetime']>,
  mediaItemId?: Maybe<Scalars['UUID']>,
  financeCategoryToCategoryId?: Maybe<FkSupplierInvoiceFinanceCategoryCategoryIdInput>,
  supplierToSupplierId?: Maybe<FkSupplierInvoiceSupplierSupplierIdInput>,
  tripToTripId?: Maybe<FkSupplierInvoiceTripTripIdInput>,
  mediaItemToMediaItemId?: Maybe<FkSupplierInvoiceMediaItemMediaItemIdInput>,
  expensesUsingId?: Maybe<FkExpenseSupplierInvoiceSupplierInvoiceIdInverseInput>,
  transactionLinksUsingId?: Maybe<FkTransactionLinkSupplierInvoiceSupplierInvoiceIdInverseInput>,
};

export type SupplierInvoicePkSupplierInvoiceConnect = {
  id: Scalars['UUID'],
};

export type SupplierInvoicePkSupplierInvoiceDelete = {
  id: Scalars['UUID'],
};

export type SupplierInvoicesConnection = {
   __typename?: 'SupplierInvoicesConnection',
  nodes: Array<Maybe<SupplierInvoice>>,
  edges: Array<SupplierInvoicesEdge>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
};

export type SupplierInvoicesEdge = {
   __typename?: 'SupplierInvoicesEdge',
  cursor?: Maybe<Scalars['Cursor']>,
  node?: Maybe<SupplierInvoice>,
};

export enum SupplierInvoicesOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  AmountAsc = 'AMOUNT_ASC',
  AmountDesc = 'AMOUNT_DESC',
  CategoryIdAsc = 'CATEGORY_ID_ASC',
  CategoryIdDesc = 'CATEGORY_ID_DESC',
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  CurrencyAsc = 'CURRENCY_ASC',
  CurrencyDesc = 'CURRENCY_DESC',
  DueAsc = 'DUE_ASC',
  DueDesc = 'DUE_DESC',
  KeyAsc = 'KEY_ASC',
  KeyDesc = 'KEY_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC',
  NumberAsc = 'NUMBER_ASC',
  NumberDesc = 'NUMBER_DESC',
  SummaryAsc = 'SUMMARY_ASC',
  SummaryDesc = 'SUMMARY_DESC',
  SupplierIdAsc = 'SUPPLIER_ID_ASC',
  SupplierIdDesc = 'SUPPLIER_ID_DESC',
  TripIdAsc = 'TRIP_ID_ASC',
  TripIdDesc = 'TRIP_ID_DESC',
  TypeAsc = 'TYPE_ASC',
  TypeDesc = 'TYPE_DESC',
  VoidedAsc = 'VOIDED_ASC',
  VoidedDesc = 'VOIDED_DESC',
  AmountActualAsc = 'AMOUNT_ACTUAL_ASC',
  AmountActualDesc = 'AMOUNT_ACTUAL_DESC',
  PaidAsc = 'PAID_ASC',
  PaidDesc = 'PAID_DESC',
  MediaItemIdAsc = 'MEDIA_ITEM_ID_ASC',
  MediaItemIdDesc = 'MEDIA_ITEM_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type SupplierInvoiceToManyExpenseFilter = {
  every?: Maybe<ExpenseFilter>,
  some?: Maybe<ExpenseFilter>,
  none?: Maybe<ExpenseFilter>,
};

export type SupplierInvoiceToManyTransactionLinkFilter = {
  every?: Maybe<TransactionLinkFilter>,
  some?: Maybe<TransactionLinkFilter>,
  none?: Maybe<TransactionLinkFilter>,
};

export type SupplierNodeIdConnect = {
  nodeId: Scalars['ID'],
};

export type SupplierNodeIdDelete = {
  nodeId: Scalars['ID'],
};

export type SupplierOnExpenseForFkExpenseSupplierSupplierIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: ExpensePatch,
};

export type SupplierOnExpenseForFkExpenseSupplierSupplierIdUsingPkSupplierUpdate = {
  patch: UpdateSupplierOnExpenseForFkExpenseSupplierSupplierIdPatch,
  id: Scalars['UUID'],
};

export type SupplierOnQuoteFinanceLineItemForFkQuoteFinanceLineItemSupplierSupplierIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: QuoteFinanceLineItemPatch,
};

export type SupplierOnQuoteFinanceLineItemForFkQuoteFinanceLineItemSupplierSupplierIdUsingPkSupplierUpdate = {
  patch: UpdateSupplierOnQuoteFinanceLineItemForFkQuoteFinanceLineItemSupplierSupplierIdPatch,
  id: Scalars['UUID'],
};

export type SupplierOnSupplierForFkSupplierMediaGalleryGalleryIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: MediaGalleryPatch,
};

export type SupplierOnSupplierForFkSupplierMediaGalleryGalleryIdUsingPkSupplierUpdate = {
  patch: UpdateSupplierOnSupplierForFkSupplierMediaGalleryGalleryIdPatch,
  id: Scalars['UUID'],
};

export type SupplierOnSupplierInvoiceForFkSupplierInvoiceSupplierSupplierIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: SupplierInvoicePatch,
};

export type SupplierOnSupplierInvoiceForFkSupplierInvoiceSupplierSupplierIdUsingPkSupplierUpdate = {
  patch: UpdateSupplierOnSupplierInvoiceForFkSupplierInvoiceSupplierSupplierIdPatch,
  id: Scalars['UUID'],
};

export type SupplierPatch = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  contactEmail?: Maybe<Scalars['String']>,
  contactNumber?: Maybe<Scalars['String']>,
  region?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
  bankDetails?: Maybe<Scalars['String']>,
  galleryId?: Maybe<Scalars['UUID']>,
  mediaGalleryToGalleryId?: Maybe<FkSupplierMediaGalleryGalleryIdInput>,
  expensesUsingId?: Maybe<FkExpenseSupplierSupplierIdInverseInput>,
  supplierInvoicesUsingId?: Maybe<FkSupplierInvoiceSupplierSupplierIdInverseInput>,
  quoteFinanceLineItemsUsingId?: Maybe<FkQuoteFinanceLineItemSupplierSupplierIdInverseInput>,
};

export type SupplierPkSupplierConnect = {
  id: Scalars['UUID'],
};

export type SupplierPkSupplierDelete = {
  id: Scalars['UUID'],
};

export type SuppliersConnection = {
   __typename?: 'SuppliersConnection',
  nodes: Array<Maybe<Supplier>>,
  edges: Array<SuppliersEdge>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
};

export type SuppliersEdge = {
   __typename?: 'SuppliersEdge',
  cursor?: Maybe<Scalars['Cursor']>,
  node?: Maybe<Supplier>,
};

export enum SuppliersOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  ContactEmailAsc = 'CONTACT_EMAIL_ASC',
  ContactEmailDesc = 'CONTACT_EMAIL_DESC',
  ContactNumberAsc = 'CONTACT_NUMBER_ASC',
  ContactNumberDesc = 'CONTACT_NUMBER_DESC',
  RegionAsc = 'REGION_ASC',
  RegionDesc = 'REGION_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  BankDetailsAsc = 'BANK_DETAILS_ASC',
  BankDetailsDesc = 'BANK_DETAILS_DESC',
  GalleryIdAsc = 'GALLERY_ID_ASC',
  GalleryIdDesc = 'GALLERY_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type SupplierToManyExpenseFilter = {
  every?: Maybe<ExpenseFilter>,
  some?: Maybe<ExpenseFilter>,
  none?: Maybe<ExpenseFilter>,
};

export type SupplierToManyQuoteFinanceLineItemFilter = {
  every?: Maybe<QuoteFinanceLineItemFilter>,
  some?: Maybe<QuoteFinanceLineItemFilter>,
  none?: Maybe<QuoteFinanceLineItemFilter>,
};

export type SupplierToManySupplierInvoiceFilter = {
  every?: Maybe<SupplierInvoiceFilter>,
  some?: Maybe<SupplierInvoiceFilter>,
  none?: Maybe<SupplierInvoiceFilter>,
};

export type Testimonial = Node & {
   __typename?: 'Testimonial',
  nodeId: Scalars['ID'],
  id: Scalars['UUID'],
  body?: Maybe<Scalars['String']>,
  created: Scalars['Datetime'],
  guestName?: Maybe<Scalars['String']>,
  modified: Scalars['Datetime'],
  tripId?: Maybe<Scalars['UUID']>,
  trip?: Maybe<Trip>,
};

export type TestimonialCondition = {
  id?: Maybe<Scalars['UUID']>,
  body?: Maybe<Scalars['String']>,
  created?: Maybe<Scalars['Datetime']>,
  guestName?: Maybe<Scalars['String']>,
  modified?: Maybe<Scalars['Datetime']>,
  tripId?: Maybe<Scalars['UUID']>,
};

export type TestimonialFilter = {
  id?: Maybe<UuidFilter>,
  body?: Maybe<StringFilter>,
  created?: Maybe<DatetimeFilter>,
  guestName?: Maybe<StringFilter>,
  modified?: Maybe<DatetimeFilter>,
  tripId?: Maybe<UuidFilter>,
  trip?: Maybe<TripFilter>,
  tripExists?: Maybe<Scalars['Boolean']>,
  and?: Maybe<Array<TestimonialFilter>>,
  or?: Maybe<Array<TestimonialFilter>>,
  not?: Maybe<TestimonialFilter>,
};

export type TestimonialInput = {
  id?: Maybe<Scalars['UUID']>,
  body?: Maybe<Scalars['String']>,
  created?: Maybe<Scalars['Datetime']>,
  guestName?: Maybe<Scalars['String']>,
  modified?: Maybe<Scalars['Datetime']>,
  tripId?: Maybe<Scalars['UUID']>,
  tripToTripId?: Maybe<FkTestimonialTripTripIdInput>,
};

export type TestimonialNodeIdConnect = {
  nodeId: Scalars['ID'],
};

export type TestimonialNodeIdDelete = {
  nodeId: Scalars['ID'],
};

export type TestimonialOnTestimonialForFkTestimonialTripTripIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: TripPatch,
};

export type TestimonialOnTestimonialForFkTestimonialTripTripIdUsingPkTestimonialUpdate = {
  patch: UpdateTestimonialOnTestimonialForFkTestimonialTripTripIdPatch,
  id: Scalars['UUID'],
};

export type TestimonialPatch = {
  id?: Maybe<Scalars['UUID']>,
  body?: Maybe<Scalars['String']>,
  created?: Maybe<Scalars['Datetime']>,
  guestName?: Maybe<Scalars['String']>,
  modified?: Maybe<Scalars['Datetime']>,
  tripId?: Maybe<Scalars['UUID']>,
  tripToTripId?: Maybe<FkTestimonialTripTripIdInput>,
};

export type TestimonialPkTestimonialConnect = {
  id: Scalars['UUID'],
};

export type TestimonialPkTestimonialDelete = {
  id: Scalars['UUID'],
};

export type TestimonialsConnection = {
   __typename?: 'TestimonialsConnection',
  nodes: Array<Maybe<Testimonial>>,
  edges: Array<TestimonialsEdge>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
};

export type TestimonialsEdge = {
   __typename?: 'TestimonialsEdge',
  cursor?: Maybe<Scalars['Cursor']>,
  node?: Maybe<Testimonial>,
};

export enum TestimonialsOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  BodyAsc = 'BODY_ASC',
  BodyDesc = 'BODY_DESC',
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  GuestNameAsc = 'GUEST_NAME_ASC',
  GuestNameDesc = 'GUEST_NAME_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC',
  TripIdAsc = 'TRIP_ID_ASC',
  TripIdDesc = 'TRIP_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type Timeline = {
   __typename?: 'Timeline',
  id?: Maybe<Scalars['UUID']>,
  url?: Maybe<Scalars['String']>,
  group?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  date?: Maybe<Scalars['Datetime']>,
  week?: Maybe<Scalars['String']>,
  actioned?: Maybe<Scalars['Datetime']>,
};

export type TimelineCondition = {
  id?: Maybe<Scalars['UUID']>,
  url?: Maybe<Scalars['String']>,
  group?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  date?: Maybe<Scalars['Datetime']>,
  week?: Maybe<Scalars['String']>,
  actioned?: Maybe<Scalars['Datetime']>,
};

export type TimelineFilter = {
  id?: Maybe<UuidFilter>,
  url?: Maybe<StringFilter>,
  group?: Maybe<StringFilter>,
  description?: Maybe<StringFilter>,
  date?: Maybe<DatetimeFilter>,
  week?: Maybe<StringFilter>,
  actioned?: Maybe<DatetimeFilter>,
  and?: Maybe<Array<TimelineFilter>>,
  or?: Maybe<Array<TimelineFilter>>,
  not?: Maybe<TimelineFilter>,
};

export type TimelinesConnection = {
   __typename?: 'TimelinesConnection',
  nodes: Array<Maybe<Timeline>>,
  edges: Array<TimelinesEdge>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
};

export type TimelinesEdge = {
   __typename?: 'TimelinesEdge',
  cursor?: Maybe<Scalars['Cursor']>,
  node?: Maybe<Timeline>,
};

export enum TimelinesOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  UrlAsc = 'URL_ASC',
  UrlDesc = 'URL_DESC',
  GroupAsc = 'GROUP_ASC',
  GroupDesc = 'GROUP_DESC',
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  DateAsc = 'DATE_ASC',
  DateDesc = 'DATE_DESC',
  WeekAsc = 'WEEK_ASC',
  WeekDesc = 'WEEK_DESC',
  ActionedAsc = 'ACTIONED_ASC',
  ActionedDesc = 'ACTIONED_DESC'
}

export type TrackQuoteViewInput = {
  key: Scalars['String'],
  viewType: Scalars['String'],
};

export type Transaction = Node & {
   __typename?: 'Transaction',
  nodeId: Scalars['ID'],
  id: Scalars['UUID'],
  created: Scalars['Datetime'],
  modified: Scalars['Datetime'],
  accountId: Scalars['UUID'],
  amount: Scalars['BigFloat'],
  externalId?: Maybe<Scalars['String']>,
  date: Scalars['Datetime'],
  description?: Maybe<Scalars['String']>,
  status: Scalars['Int'],
  reverseTransactionId?: Maybe<Scalars['UUID']>,
  source?: Maybe<Scalars['String']>,
  transactionImportBatchId?: Maybe<Scalars['UUID']>,
  balance: Scalars['BigFloat'],
  currency?: Maybe<Scalars['String']>,
  categoryId?: Maybe<Scalars['UUID']>,
  account?: Maybe<Account>,
  reverseTransaction?: Maybe<Transaction>,
  transactionImportBatch?: Maybe<TransactionImportBatch>,
  category?: Maybe<FinanceCategory>,
  transactionsByReverseTransactionId: TransactionsConnection,
  transactionLinks: TransactionLinksConnection,
  transactionNotes: TransactionNotesConnection,
};


export type TransactionTransactionsByReverseTransactionIdArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<TransactionsOrderBy>>,
  condition?: Maybe<TransactionCondition>,
  filter?: Maybe<TransactionFilter>
};


export type TransactionTransactionLinksArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<TransactionLinksOrderBy>>,
  condition?: Maybe<TransactionLinkCondition>,
  filter?: Maybe<TransactionLinkFilter>
};


export type TransactionTransactionNotesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<TransactionNotesOrderBy>>,
  condition?: Maybe<TransactionNoteCondition>,
  filter?: Maybe<TransactionNoteFilter>
};

export type TransactionCondition = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  accountId?: Maybe<Scalars['UUID']>,
  amount?: Maybe<Scalars['BigFloat']>,
  externalId?: Maybe<Scalars['String']>,
  date?: Maybe<Scalars['Datetime']>,
  description?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['Int']>,
  reverseTransactionId?: Maybe<Scalars['UUID']>,
  source?: Maybe<Scalars['String']>,
  transactionImportBatchId?: Maybe<Scalars['UUID']>,
  balance?: Maybe<Scalars['BigFloat']>,
  currency?: Maybe<Scalars['String']>,
  categoryId?: Maybe<Scalars['UUID']>,
};

export type TransactionFilter = {
  id?: Maybe<UuidFilter>,
  created?: Maybe<DatetimeFilter>,
  modified?: Maybe<DatetimeFilter>,
  accountId?: Maybe<UuidFilter>,
  amount?: Maybe<BigFloatFilter>,
  externalId?: Maybe<StringFilter>,
  date?: Maybe<DatetimeFilter>,
  description?: Maybe<StringFilter>,
  status?: Maybe<IntFilter>,
  reverseTransactionId?: Maybe<UuidFilter>,
  source?: Maybe<StringFilter>,
  transactionImportBatchId?: Maybe<UuidFilter>,
  balance?: Maybe<BigFloatFilter>,
  currency?: Maybe<StringFilter>,
  categoryId?: Maybe<UuidFilter>,
  transactionsByReverseTransactionId?: Maybe<TransactionToManyTransactionFilter>,
  transactionsByReverseTransactionIdExist?: Maybe<Scalars['Boolean']>,
  transactionLinks?: Maybe<TransactionToManyTransactionLinkFilter>,
  transactionLinksExist?: Maybe<Scalars['Boolean']>,
  transactionNotes?: Maybe<TransactionToManyTransactionNoteFilter>,
  transactionNotesExist?: Maybe<Scalars['Boolean']>,
  account?: Maybe<AccountFilter>,
  reverseTransaction?: Maybe<TransactionFilter>,
  reverseTransactionExists?: Maybe<Scalars['Boolean']>,
  transactionImportBatch?: Maybe<TransactionImportBatchFilter>,
  transactionImportBatchExists?: Maybe<Scalars['Boolean']>,
  category?: Maybe<FinanceCategoryFilter>,
  categoryExists?: Maybe<Scalars['Boolean']>,
  and?: Maybe<Array<TransactionFilter>>,
  or?: Maybe<Array<TransactionFilter>>,
  not?: Maybe<TransactionFilter>,
};

export type TransactionImportBatch = Node & {
   __typename?: 'TransactionImportBatch',
  nodeId: Scalars['ID'],
  id: Scalars['UUID'],
  created: Scalars['Datetime'],
  modified: Scalars['Datetime'],
  accountId: Scalars['UUID'],
  dateRangeMin: Scalars['Datetime'],
  dateRangeMax: Scalars['Datetime'],
  key?: Maybe<Scalars['String']>,
  account?: Maybe<Account>,
  transactions: TransactionsConnection,
};


export type TransactionImportBatchTransactionsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<TransactionsOrderBy>>,
  condition?: Maybe<TransactionCondition>,
  filter?: Maybe<TransactionFilter>
};

export type TransactionImportBatchCondition = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  accountId?: Maybe<Scalars['UUID']>,
  dateRangeMin?: Maybe<Scalars['Datetime']>,
  dateRangeMax?: Maybe<Scalars['Datetime']>,
  key?: Maybe<Scalars['String']>,
};

export type TransactionImportBatchesConnection = {
   __typename?: 'TransactionImportBatchesConnection',
  nodes: Array<Maybe<TransactionImportBatch>>,
  edges: Array<TransactionImportBatchesEdge>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
};

export type TransactionImportBatchesEdge = {
   __typename?: 'TransactionImportBatchesEdge',
  cursor?: Maybe<Scalars['Cursor']>,
  node?: Maybe<TransactionImportBatch>,
};

export enum TransactionImportBatchesOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC',
  AccountIdAsc = 'ACCOUNT_ID_ASC',
  AccountIdDesc = 'ACCOUNT_ID_DESC',
  DateRangeMinAsc = 'DATE_RANGE_MIN_ASC',
  DateRangeMinDesc = 'DATE_RANGE_MIN_DESC',
  DateRangeMaxAsc = 'DATE_RANGE_MAX_ASC',
  DateRangeMaxDesc = 'DATE_RANGE_MAX_DESC',
  KeyAsc = 'KEY_ASC',
  KeyDesc = 'KEY_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type TransactionImportBatchFilter = {
  id?: Maybe<UuidFilter>,
  created?: Maybe<DatetimeFilter>,
  modified?: Maybe<DatetimeFilter>,
  accountId?: Maybe<UuidFilter>,
  dateRangeMin?: Maybe<DatetimeFilter>,
  dateRangeMax?: Maybe<DatetimeFilter>,
  key?: Maybe<StringFilter>,
  transactions?: Maybe<TransactionImportBatchToManyTransactionFilter>,
  transactionsExist?: Maybe<Scalars['Boolean']>,
  account?: Maybe<AccountFilter>,
  and?: Maybe<Array<TransactionImportBatchFilter>>,
  or?: Maybe<Array<TransactionImportBatchFilter>>,
  not?: Maybe<TransactionImportBatchFilter>,
};

export type TransactionImportBatchInput = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  accountId?: Maybe<Scalars['UUID']>,
  dateRangeMin: Scalars['Datetime'],
  dateRangeMax: Scalars['Datetime'],
  key?: Maybe<Scalars['String']>,
  accountToAccountId?: Maybe<FkTransactionImportBatchAccountAccountIdInput>,
  transactionsUsingId?: Maybe<FkTransactionTransactionImportBatchTransactionImportBatchIdInverseInput>,
};

export type TransactionImportBatchNodeIdConnect = {
  nodeId: Scalars['ID'],
};

export type TransactionImportBatchNodeIdDelete = {
  nodeId: Scalars['ID'],
};

export type TransactionImportBatchOnTransactionForFkTransactionTransactionImportBatchTransactionImportBatchIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: TransactionPatch,
};

export type TransactionImportBatchOnTransactionForFkTransactionTransactionImportBatchTransactionImportBatchIdUsingPkTransactionImportBatchUpdate = {
  patch: UpdateTransactionImportBatchOnTransactionForFkTransactionTransactionImportBatchTransactionImportBatchIdPatch,
  id: Scalars['UUID'],
};

export type TransactionImportBatchOnTransactionImportBatchForFkTransactionImportBatchAccountAccountIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: AccountPatch,
};

export type TransactionImportBatchOnTransactionImportBatchForFkTransactionImportBatchAccountAccountIdUsingPkTransactionImportBatchUpdate = {
  patch: UpdateTransactionImportBatchOnTransactionImportBatchForFkTransactionImportBatchAccountAccountIdPatch,
  id: Scalars['UUID'],
};

export type TransactionImportBatchPatch = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  accountId?: Maybe<Scalars['UUID']>,
  dateRangeMin?: Maybe<Scalars['Datetime']>,
  dateRangeMax?: Maybe<Scalars['Datetime']>,
  key?: Maybe<Scalars['String']>,
  accountToAccountId?: Maybe<FkTransactionImportBatchAccountAccountIdInput>,
  transactionsUsingId?: Maybe<FkTransactionTransactionImportBatchTransactionImportBatchIdInverseInput>,
};

export type TransactionImportBatchPkTransactionImportBatchConnect = {
  id: Scalars['UUID'],
};

export type TransactionImportBatchPkTransactionImportBatchDelete = {
  id: Scalars['UUID'],
};

export type TransactionImportBatchToManyTransactionFilter = {
  every?: Maybe<TransactionFilter>,
  some?: Maybe<TransactionFilter>,
  none?: Maybe<TransactionFilter>,
};

export type TransactionInput = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  accountId?: Maybe<Scalars['UUID']>,
  amount: Scalars['BigFloat'],
  externalId?: Maybe<Scalars['String']>,
  date: Scalars['Datetime'],
  description?: Maybe<Scalars['String']>,
  status: Scalars['Int'],
  reverseTransactionId?: Maybe<Scalars['UUID']>,
  source?: Maybe<Scalars['String']>,
  transactionImportBatchId?: Maybe<Scalars['UUID']>,
  balance?: Maybe<Scalars['BigFloat']>,
  currency?: Maybe<Scalars['String']>,
  categoryId?: Maybe<Scalars['UUID']>,
  accountToAccountId?: Maybe<FkTransactionAccountAccountIdInput>,
  transactionToReverseTransactionId?: Maybe<FkTransactionTransactionReverseTransactionIdInput>,
  transactionImportBatchToTransactionImportBatchId?: Maybe<FkTransactionTransactionImportBatchTransactionImportBatchIdInput>,
  financeCategoryToCategoryId?: Maybe<FkTransactionFinanceCategoryCategoryIdInput>,
  transactionLinksUsingId?: Maybe<FkTransactionLinkTransactionTransactionIdInverseInput>,
  transactionNotesUsingId?: Maybe<FkTransactionNoteTransactionTransactionIdInverseInput>,
};

export type TransactionLink = Node & {
   __typename?: 'TransactionLink',
  nodeId: Scalars['ID'],
  id: Scalars['UUID'],
  created: Scalars['Datetime'],
  modified: Scalars['Datetime'],
  transactionId: Scalars['UUID'],
  invoiceId?: Maybe<Scalars['UUID']>,
  supplierInvoiceId?: Maybe<Scalars['UUID']>,
  paymentId?: Maybe<Scalars['UUID']>,
  expenseId?: Maybe<Scalars['UUID']>,
  status: Scalars['Int'],
  transaction?: Maybe<Transaction>,
  invoice?: Maybe<Invoice>,
  supplierInvoice?: Maybe<SupplierInvoice>,
  payment?: Maybe<Payment>,
  expense?: Maybe<Expense>,
};

export type TransactionLinkCondition = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  transactionId?: Maybe<Scalars['UUID']>,
  invoiceId?: Maybe<Scalars['UUID']>,
  supplierInvoiceId?: Maybe<Scalars['UUID']>,
  paymentId?: Maybe<Scalars['UUID']>,
  expenseId?: Maybe<Scalars['UUID']>,
  status?: Maybe<Scalars['Int']>,
};

export type TransactionLinkFilter = {
  id?: Maybe<UuidFilter>,
  created?: Maybe<DatetimeFilter>,
  modified?: Maybe<DatetimeFilter>,
  transactionId?: Maybe<UuidFilter>,
  invoiceId?: Maybe<UuidFilter>,
  supplierInvoiceId?: Maybe<UuidFilter>,
  paymentId?: Maybe<UuidFilter>,
  expenseId?: Maybe<UuidFilter>,
  status?: Maybe<IntFilter>,
  transaction?: Maybe<TransactionFilter>,
  invoice?: Maybe<InvoiceFilter>,
  invoiceExists?: Maybe<Scalars['Boolean']>,
  supplierInvoice?: Maybe<SupplierInvoiceFilter>,
  supplierInvoiceExists?: Maybe<Scalars['Boolean']>,
  payment?: Maybe<PaymentFilter>,
  paymentExists?: Maybe<Scalars['Boolean']>,
  expense?: Maybe<ExpenseFilter>,
  expenseExists?: Maybe<Scalars['Boolean']>,
  and?: Maybe<Array<TransactionLinkFilter>>,
  or?: Maybe<Array<TransactionLinkFilter>>,
  not?: Maybe<TransactionLinkFilter>,
};

export type TransactionLinkInput = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  transactionId?: Maybe<Scalars['UUID']>,
  invoiceId?: Maybe<Scalars['UUID']>,
  supplierInvoiceId?: Maybe<Scalars['UUID']>,
  paymentId?: Maybe<Scalars['UUID']>,
  expenseId?: Maybe<Scalars['UUID']>,
  status?: Maybe<Scalars['Int']>,
  transactionToTransactionId?: Maybe<FkTransactionLinkTransactionTransactionIdInput>,
  invoiceToInvoiceId?: Maybe<FkTransactionLinkInvoiceInvoiceIdInput>,
  supplierInvoiceToSupplierInvoiceId?: Maybe<FkTransactionLinkSupplierInvoiceSupplierInvoiceIdInput>,
  paymentToPaymentId?: Maybe<FkTransactionLinkPaymentPaymentIdInput>,
  expenseToExpenseId?: Maybe<FkTransactionLinkExpenseExpenseIdInput>,
};

export type TransactionLinkNodeIdConnect = {
  nodeId: Scalars['ID'],
};

export type TransactionLinkNodeIdDelete = {
  nodeId: Scalars['ID'],
};

export type TransactionLinkOnTransactionLinkForFkTransactionLinkExpenseExpenseIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: ExpensePatch,
};

export type TransactionLinkOnTransactionLinkForFkTransactionLinkExpenseExpenseIdUsingPkTransactionLinkUpdate = {
  patch: UpdateTransactionLinkOnTransactionLinkForFkTransactionLinkExpenseExpenseIdPatch,
  id: Scalars['UUID'],
};

export type TransactionLinkOnTransactionLinkForFkTransactionLinkInvoiceInvoiceIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: InvoicePatch,
};

export type TransactionLinkOnTransactionLinkForFkTransactionLinkInvoiceInvoiceIdUsingPkTransactionLinkUpdate = {
  patch: UpdateTransactionLinkOnTransactionLinkForFkTransactionLinkInvoiceInvoiceIdPatch,
  id: Scalars['UUID'],
};

export type TransactionLinkOnTransactionLinkForFkTransactionLinkPaymentPaymentIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: PaymentPatch,
};

export type TransactionLinkOnTransactionLinkForFkTransactionLinkPaymentPaymentIdUsingPkTransactionLinkUpdate = {
  patch: UpdateTransactionLinkOnTransactionLinkForFkTransactionLinkPaymentPaymentIdPatch,
  id: Scalars['UUID'],
};

export type TransactionLinkOnTransactionLinkForFkTransactionLinkSupplierInvoiceSupplierInvoiceIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: SupplierInvoicePatch,
};

export type TransactionLinkOnTransactionLinkForFkTransactionLinkSupplierInvoiceSupplierInvoiceIdUsingPkTransactionLinkUpdate = {
  patch: UpdateTransactionLinkOnTransactionLinkForFkTransactionLinkSupplierInvoiceSupplierInvoiceIdPatch,
  id: Scalars['UUID'],
};

export type TransactionLinkOnTransactionLinkForFkTransactionLinkTransactionTransactionIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: TransactionPatch,
};

export type TransactionLinkOnTransactionLinkForFkTransactionLinkTransactionTransactionIdUsingPkTransactionLinkUpdate = {
  patch: UpdateTransactionLinkOnTransactionLinkForFkTransactionLinkTransactionTransactionIdPatch,
  id: Scalars['UUID'],
};

export type TransactionLinkPatch = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  transactionId?: Maybe<Scalars['UUID']>,
  invoiceId?: Maybe<Scalars['UUID']>,
  supplierInvoiceId?: Maybe<Scalars['UUID']>,
  paymentId?: Maybe<Scalars['UUID']>,
  expenseId?: Maybe<Scalars['UUID']>,
  status?: Maybe<Scalars['Int']>,
  transactionToTransactionId?: Maybe<FkTransactionLinkTransactionTransactionIdInput>,
  invoiceToInvoiceId?: Maybe<FkTransactionLinkInvoiceInvoiceIdInput>,
  supplierInvoiceToSupplierInvoiceId?: Maybe<FkTransactionLinkSupplierInvoiceSupplierInvoiceIdInput>,
  paymentToPaymentId?: Maybe<FkTransactionLinkPaymentPaymentIdInput>,
  expenseToExpenseId?: Maybe<FkTransactionLinkExpenseExpenseIdInput>,
};

export type TransactionLinkPkTransactionLinkConnect = {
  id: Scalars['UUID'],
};

export type TransactionLinkPkTransactionLinkDelete = {
  id: Scalars['UUID'],
};

export type TransactionLinksConnection = {
   __typename?: 'TransactionLinksConnection',
  nodes: Array<Maybe<TransactionLink>>,
  edges: Array<TransactionLinksEdge>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
};

export type TransactionLinksEdge = {
   __typename?: 'TransactionLinksEdge',
  cursor?: Maybe<Scalars['Cursor']>,
  node?: Maybe<TransactionLink>,
};

export enum TransactionLinksOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC',
  TransactionIdAsc = 'TRANSACTION_ID_ASC',
  TransactionIdDesc = 'TRANSACTION_ID_DESC',
  InvoiceIdAsc = 'INVOICE_ID_ASC',
  InvoiceIdDesc = 'INVOICE_ID_DESC',
  SupplierInvoiceIdAsc = 'SUPPLIER_INVOICE_ID_ASC',
  SupplierInvoiceIdDesc = 'SUPPLIER_INVOICE_ID_DESC',
  PaymentIdAsc = 'PAYMENT_ID_ASC',
  PaymentIdDesc = 'PAYMENT_ID_DESC',
  ExpenseIdAsc = 'EXPENSE_ID_ASC',
  ExpenseIdDesc = 'EXPENSE_ID_DESC',
  StatusAsc = 'STATUS_ASC',
  StatusDesc = 'STATUS_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type TransactionNodeIdConnect = {
  nodeId: Scalars['ID'],
};

export type TransactionNodeIdDelete = {
  nodeId: Scalars['ID'],
};

export type TransactionNote = Node & {
   __typename?: 'TransactionNote',
  nodeId: Scalars['ID'],
  id: Scalars['UUID'],
  created: Scalars['Datetime'],
  modified: Scalars['Datetime'],
  userId: Scalars['UUID'],
  message?: Maybe<Scalars['String']>,
  transactionId: Scalars['UUID'],
  user?: Maybe<User>,
  transaction?: Maybe<Transaction>,
};

export type TransactionNoteCondition = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  userId?: Maybe<Scalars['UUID']>,
  message?: Maybe<Scalars['String']>,
  transactionId?: Maybe<Scalars['UUID']>,
};

export type TransactionNoteFilter = {
  id?: Maybe<UuidFilter>,
  created?: Maybe<DatetimeFilter>,
  modified?: Maybe<DatetimeFilter>,
  userId?: Maybe<UuidFilter>,
  message?: Maybe<StringFilter>,
  transactionId?: Maybe<UuidFilter>,
  user?: Maybe<UserFilter>,
  transaction?: Maybe<TransactionFilter>,
  and?: Maybe<Array<TransactionNoteFilter>>,
  or?: Maybe<Array<TransactionNoteFilter>>,
  not?: Maybe<TransactionNoteFilter>,
};

export type TransactionNoteInput = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  userId?: Maybe<Scalars['UUID']>,
  message?: Maybe<Scalars['String']>,
  transactionId?: Maybe<Scalars['UUID']>,
  userToUserId?: Maybe<FkTransactionNoteUserUserIdInput>,
  transactionToTransactionId?: Maybe<FkTransactionNoteTransactionTransactionIdInput>,
};

export type TransactionNoteNodeIdConnect = {
  nodeId: Scalars['ID'],
};

export type TransactionNoteNodeIdDelete = {
  nodeId: Scalars['ID'],
};

export type TransactionNoteOnTransactionNoteForFkTransactionNoteTransactionTransactionIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: TransactionPatch,
};

export type TransactionNoteOnTransactionNoteForFkTransactionNoteTransactionTransactionIdUsingPkTransactionNoteUpdate = {
  patch: UpdateTransactionNoteOnTransactionNoteForFkTransactionNoteTransactionTransactionIdPatch,
  id: Scalars['UUID'],
};

export type TransactionNoteOnTransactionNoteForFkTransactionNoteUserUserIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: UserPatch,
};

export type TransactionNoteOnTransactionNoteForFkTransactionNoteUserUserIdUsingPkTransactionNoteUpdate = {
  patch: UpdateTransactionNoteOnTransactionNoteForFkTransactionNoteUserUserIdPatch,
  id: Scalars['UUID'],
};

export type TransactionNotePatch = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  userId?: Maybe<Scalars['UUID']>,
  message?: Maybe<Scalars['String']>,
  transactionId?: Maybe<Scalars['UUID']>,
  userToUserId?: Maybe<FkTransactionNoteUserUserIdInput>,
  transactionToTransactionId?: Maybe<FkTransactionNoteTransactionTransactionIdInput>,
};

export type TransactionNotePkTransactionNoteConnect = {
  id: Scalars['UUID'],
};

export type TransactionNotePkTransactionNoteDelete = {
  id: Scalars['UUID'],
};

export type TransactionNotesConnection = {
   __typename?: 'TransactionNotesConnection',
  nodes: Array<Maybe<TransactionNote>>,
  edges: Array<TransactionNotesEdge>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
};

export type TransactionNotesEdge = {
   __typename?: 'TransactionNotesEdge',
  cursor?: Maybe<Scalars['Cursor']>,
  node?: Maybe<TransactionNote>,
};

export enum TransactionNotesOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC',
  MessageAsc = 'MESSAGE_ASC',
  MessageDesc = 'MESSAGE_DESC',
  TransactionIdAsc = 'TRANSACTION_ID_ASC',
  TransactionIdDesc = 'TRANSACTION_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type TransactionOnTransactionForFkTransactionAccountAccountIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: AccountPatch,
};

export type TransactionOnTransactionForFkTransactionAccountAccountIdUsingPkTransactionUpdate = {
  patch: UpdateTransactionOnTransactionForFkTransactionAccountAccountIdPatch,
  id: Scalars['UUID'],
};

export type TransactionOnTransactionForFkTransactionFinanceCategoryCategoryIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: FinanceCategoryPatch,
};

export type TransactionOnTransactionForFkTransactionFinanceCategoryCategoryIdUsingPkTransactionUpdate = {
  patch: UpdateTransactionOnTransactionForFkTransactionFinanceCategoryCategoryIdPatch,
  id: Scalars['UUID'],
};

export type TransactionOnTransactionForFkTransactionTransactionImportBatchTransactionImportBatchIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: TransactionImportBatchPatch,
};

export type TransactionOnTransactionForFkTransactionTransactionImportBatchTransactionImportBatchIdUsingPkTransactionUpdate = {
  patch: UpdateTransactionOnTransactionForFkTransactionTransactionImportBatchTransactionImportBatchIdPatch,
  id: Scalars['UUID'],
};

export type TransactionOnTransactionForFkTransactionTransactionReverseTransactionIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: TransactionPatch,
};

export type TransactionOnTransactionForFkTransactionTransactionReverseTransactionIdUsingPkTransactionUpdate = {
  patch: UpdateTransactionOnTransactionForFkTransactionTransactionReverseTransactionIdPatch,
  id: Scalars['UUID'],
};

export type TransactionOnTransactionLinkForFkTransactionLinkTransactionTransactionIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: TransactionLinkPatch,
};

export type TransactionOnTransactionLinkForFkTransactionLinkTransactionTransactionIdUsingPkTransactionUpdate = {
  patch: UpdateTransactionOnTransactionLinkForFkTransactionLinkTransactionTransactionIdPatch,
  id: Scalars['UUID'],
};

export type TransactionOnTransactionNoteForFkTransactionNoteTransactionTransactionIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: TransactionNotePatch,
};

export type TransactionOnTransactionNoteForFkTransactionNoteTransactionTransactionIdUsingPkTransactionUpdate = {
  patch: UpdateTransactionOnTransactionNoteForFkTransactionNoteTransactionTransactionIdPatch,
  id: Scalars['UUID'],
};

export type TransactionPatch = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  accountId?: Maybe<Scalars['UUID']>,
  amount?: Maybe<Scalars['BigFloat']>,
  externalId?: Maybe<Scalars['String']>,
  date?: Maybe<Scalars['Datetime']>,
  description?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['Int']>,
  reverseTransactionId?: Maybe<Scalars['UUID']>,
  source?: Maybe<Scalars['String']>,
  transactionImportBatchId?: Maybe<Scalars['UUID']>,
  balance?: Maybe<Scalars['BigFloat']>,
  currency?: Maybe<Scalars['String']>,
  categoryId?: Maybe<Scalars['UUID']>,
  accountToAccountId?: Maybe<FkTransactionAccountAccountIdInput>,
  transactionToReverseTransactionId?: Maybe<FkTransactionTransactionReverseTransactionIdInput>,
  transactionImportBatchToTransactionImportBatchId?: Maybe<FkTransactionTransactionImportBatchTransactionImportBatchIdInput>,
  financeCategoryToCategoryId?: Maybe<FkTransactionFinanceCategoryCategoryIdInput>,
  transactionLinksUsingId?: Maybe<FkTransactionLinkTransactionTransactionIdInverseInput>,
  transactionNotesUsingId?: Maybe<FkTransactionNoteTransactionTransactionIdInverseInput>,
};

export type TransactionPkTransactionConnect = {
  id: Scalars['UUID'],
};

export type TransactionPkTransactionDelete = {
  id: Scalars['UUID'],
};

export type TransactionsConnection = {
   __typename?: 'TransactionsConnection',
  nodes: Array<Maybe<Transaction>>,
  edges: Array<TransactionsEdge>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
};

export type TransactionsEdge = {
   __typename?: 'TransactionsEdge',
  cursor?: Maybe<Scalars['Cursor']>,
  node?: Maybe<Transaction>,
};

export enum TransactionsOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC',
  AccountIdAsc = 'ACCOUNT_ID_ASC',
  AccountIdDesc = 'ACCOUNT_ID_DESC',
  AmountAsc = 'AMOUNT_ASC',
  AmountDesc = 'AMOUNT_DESC',
  ExternalIdAsc = 'EXTERNAL_ID_ASC',
  ExternalIdDesc = 'EXTERNAL_ID_DESC',
  DateAsc = 'DATE_ASC',
  DateDesc = 'DATE_DESC',
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  StatusAsc = 'STATUS_ASC',
  StatusDesc = 'STATUS_DESC',
  ReverseTransactionIdAsc = 'REVERSE_TRANSACTION_ID_ASC',
  ReverseTransactionIdDesc = 'REVERSE_TRANSACTION_ID_DESC',
  SourceAsc = 'SOURCE_ASC',
  SourceDesc = 'SOURCE_DESC',
  TransactionImportBatchIdAsc = 'TRANSACTION_IMPORT_BATCH_ID_ASC',
  TransactionImportBatchIdDesc = 'TRANSACTION_IMPORT_BATCH_ID_DESC',
  BalanceAsc = 'BALANCE_ASC',
  BalanceDesc = 'BALANCE_DESC',
  CurrencyAsc = 'CURRENCY_ASC',
  CurrencyDesc = 'CURRENCY_DESC',
  CategoryIdAsc = 'CATEGORY_ID_ASC',
  CategoryIdDesc = 'CATEGORY_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type TransactionToManyTransactionFilter = {
  every?: Maybe<TransactionFilter>,
  some?: Maybe<TransactionFilter>,
  none?: Maybe<TransactionFilter>,
};

export type TransactionToManyTransactionLinkFilter = {
  every?: Maybe<TransactionLinkFilter>,
  some?: Maybe<TransactionLinkFilter>,
  none?: Maybe<TransactionLinkFilter>,
};

export type TransactionToManyTransactionNoteFilter = {
  every?: Maybe<TransactionNoteFilter>,
  some?: Maybe<TransactionNoteFilter>,
  none?: Maybe<TransactionNoteFilter>,
};

export type Traveller = Node & {
   __typename?: 'Traveller',
  nodeId: Scalars['ID'],
  id: Scalars['UUID'],
  created: Scalars['Datetime'],
  dateOfBirth: Scalars['Datetime'],
  dietaryRequirements?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  height: Scalars['Int'],
  lastName?: Maybe<Scalars['String']>,
  medicalConditions?: Maybe<Scalars['String']>,
  middleName?: Maybe<Scalars['String']>,
  modified: Scalars['Datetime'],
  nationality?: Maybe<Scalars['String']>,
  notes?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  weight: Scalars['Int'],
  emergencyContact?: Maybe<Scalars['String']>,
  insuranceDetails?: Maybe<Scalars['String']>,
  customerTravellers: CustomerTravellersConnection,
  passports: PassportsConnection,
  tripTravellers: TripTravellersConnection,
};


export type TravellerCustomerTravellersArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<CustomerTravellersOrderBy>>,
  condition?: Maybe<CustomerTravellerCondition>,
  filter?: Maybe<CustomerTravellerFilter>
};


export type TravellerPassportsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<PassportsOrderBy>>,
  condition?: Maybe<PassportCondition>,
  filter?: Maybe<PassportFilter>
};


export type TravellerTripTravellersArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<TripTravellersOrderBy>>,
  condition?: Maybe<TripTravellerCondition>,
  filter?: Maybe<TripTravellerFilter>
};

export type TravellerCondition = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  dateOfBirth?: Maybe<Scalars['Datetime']>,
  dietaryRequirements?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  height?: Maybe<Scalars['Int']>,
  lastName?: Maybe<Scalars['String']>,
  medicalConditions?: Maybe<Scalars['String']>,
  middleName?: Maybe<Scalars['String']>,
  modified?: Maybe<Scalars['Datetime']>,
  nationality?: Maybe<Scalars['String']>,
  notes?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  weight?: Maybe<Scalars['Int']>,
  emergencyContact?: Maybe<Scalars['String']>,
  insuranceDetails?: Maybe<Scalars['String']>,
};

export type TravellerFilter = {
  id?: Maybe<UuidFilter>,
  created?: Maybe<DatetimeFilter>,
  dateOfBirth?: Maybe<DatetimeFilter>,
  dietaryRequirements?: Maybe<StringFilter>,
  email?: Maybe<StringFilter>,
  firstName?: Maybe<StringFilter>,
  height?: Maybe<IntFilter>,
  lastName?: Maybe<StringFilter>,
  medicalConditions?: Maybe<StringFilter>,
  middleName?: Maybe<StringFilter>,
  modified?: Maybe<DatetimeFilter>,
  nationality?: Maybe<StringFilter>,
  notes?: Maybe<StringFilter>,
  phone?: Maybe<StringFilter>,
  weight?: Maybe<IntFilter>,
  emergencyContact?: Maybe<StringFilter>,
  insuranceDetails?: Maybe<StringFilter>,
  customerTravellers?: Maybe<TravellerToManyCustomerTravellerFilter>,
  customerTravellersExist?: Maybe<Scalars['Boolean']>,
  passports?: Maybe<TravellerToManyPassportFilter>,
  passportsExist?: Maybe<Scalars['Boolean']>,
  tripTravellers?: Maybe<TravellerToManyTripTravellerFilter>,
  tripTravellersExist?: Maybe<Scalars['Boolean']>,
  and?: Maybe<Array<TravellerFilter>>,
  or?: Maybe<Array<TravellerFilter>>,
  not?: Maybe<TravellerFilter>,
};

export type TravellerInput = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  dateOfBirth: Scalars['Datetime'],
  dietaryRequirements?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  height: Scalars['Int'],
  lastName?: Maybe<Scalars['String']>,
  medicalConditions?: Maybe<Scalars['String']>,
  middleName?: Maybe<Scalars['String']>,
  modified?: Maybe<Scalars['Datetime']>,
  nationality?: Maybe<Scalars['String']>,
  notes?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  weight: Scalars['Int'],
  emergencyContact?: Maybe<Scalars['String']>,
  insuranceDetails?: Maybe<Scalars['String']>,
  customerTravellersUsingId?: Maybe<FkCustomerTravellerTravellerTravellerIdInverseInput>,
  passportsUsingId?: Maybe<FkPassportTravellerTravellerIdInverseInput>,
  tripTravellersUsingId?: Maybe<FkTripTravellerTravellerTravellerIdInverseInput>,
};

export type TravellerNodeIdConnect = {
  nodeId: Scalars['ID'],
};

export type TravellerNodeIdDelete = {
  nodeId: Scalars['ID'],
};

export type TravellerOnCustomerTravellerForFkCustomerTravellerTravellerTravellerIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: CustomerTravellerPatch,
};

export type TravellerOnCustomerTravellerForFkCustomerTravellerTravellerTravellerIdUsingPkTravellerUpdate = {
  patch: UpdateTravellerOnCustomerTravellerForFkCustomerTravellerTravellerTravellerIdPatch,
  id: Scalars['UUID'],
};

export type TravellerOnPassportForFkPassportTravellerTravellerIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: PassportPatch,
};

export type TravellerOnPassportForFkPassportTravellerTravellerIdUsingPkTravellerUpdate = {
  patch: UpdateTravellerOnPassportForFkPassportTravellerTravellerIdPatch,
  id: Scalars['UUID'],
};

export type TravellerOnTripTravellerForFkTripTravellerTravellerTravellerIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: TripTravellerPatch,
};

export type TravellerOnTripTravellerForFkTripTravellerTravellerTravellerIdUsingPkTravellerUpdate = {
  patch: UpdateTravellerOnTripTravellerForFkTripTravellerTravellerTravellerIdPatch,
  id: Scalars['UUID'],
};

export type TravellerPatch = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  dateOfBirth?: Maybe<Scalars['Datetime']>,
  dietaryRequirements?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  height?: Maybe<Scalars['Int']>,
  lastName?: Maybe<Scalars['String']>,
  medicalConditions?: Maybe<Scalars['String']>,
  middleName?: Maybe<Scalars['String']>,
  modified?: Maybe<Scalars['Datetime']>,
  nationality?: Maybe<Scalars['String']>,
  notes?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  weight?: Maybe<Scalars['Int']>,
  emergencyContact?: Maybe<Scalars['String']>,
  insuranceDetails?: Maybe<Scalars['String']>,
  customerTravellersUsingId?: Maybe<FkCustomerTravellerTravellerTravellerIdInverseInput>,
  passportsUsingId?: Maybe<FkPassportTravellerTravellerIdInverseInput>,
  tripTravellersUsingId?: Maybe<FkTripTravellerTravellerTravellerIdInverseInput>,
};

export type TravellerPkTravellerConnect = {
  id: Scalars['UUID'],
};

export type TravellerPkTravellerDelete = {
  id: Scalars['UUID'],
};

export type TravellersConnection = {
   __typename?: 'TravellersConnection',
  nodes: Array<Maybe<Traveller>>,
  edges: Array<TravellersEdge>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
};

export type TravellersEdge = {
   __typename?: 'TravellersEdge',
  cursor?: Maybe<Scalars['Cursor']>,
  node?: Maybe<Traveller>,
};

export enum TravellersOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  DateOfBirthAsc = 'DATE_OF_BIRTH_ASC',
  DateOfBirthDesc = 'DATE_OF_BIRTH_DESC',
  DietaryRequirementsAsc = 'DIETARY_REQUIREMENTS_ASC',
  DietaryRequirementsDesc = 'DIETARY_REQUIREMENTS_DESC',
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC',
  FirstNameAsc = 'FIRST_NAME_ASC',
  FirstNameDesc = 'FIRST_NAME_DESC',
  HeightAsc = 'HEIGHT_ASC',
  HeightDesc = 'HEIGHT_DESC',
  LastNameAsc = 'LAST_NAME_ASC',
  LastNameDesc = 'LAST_NAME_DESC',
  MedicalConditionsAsc = 'MEDICAL_CONDITIONS_ASC',
  MedicalConditionsDesc = 'MEDICAL_CONDITIONS_DESC',
  MiddleNameAsc = 'MIDDLE_NAME_ASC',
  MiddleNameDesc = 'MIDDLE_NAME_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC',
  NationalityAsc = 'NATIONALITY_ASC',
  NationalityDesc = 'NATIONALITY_DESC',
  NotesAsc = 'NOTES_ASC',
  NotesDesc = 'NOTES_DESC',
  PhoneAsc = 'PHONE_ASC',
  PhoneDesc = 'PHONE_DESC',
  WeightAsc = 'WEIGHT_ASC',
  WeightDesc = 'WEIGHT_DESC',
  EmergencyContactAsc = 'EMERGENCY_CONTACT_ASC',
  EmergencyContactDesc = 'EMERGENCY_CONTACT_DESC',
  InsuranceDetailsAsc = 'INSURANCE_DETAILS_ASC',
  InsuranceDetailsDesc = 'INSURANCE_DETAILS_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type TravellerToManyCustomerTravellerFilter = {
  every?: Maybe<CustomerTravellerFilter>,
  some?: Maybe<CustomerTravellerFilter>,
  none?: Maybe<CustomerTravellerFilter>,
};

export type TravellerToManyPassportFilter = {
  every?: Maybe<PassportFilter>,
  some?: Maybe<PassportFilter>,
  none?: Maybe<PassportFilter>,
};

export type TravellerToManyTripTravellerFilter = {
  every?: Maybe<TripTravellerFilter>,
  some?: Maybe<TripTravellerFilter>,
  none?: Maybe<TripTravellerFilter>,
};

export type Trip = Node & {
   __typename?: 'Trip',
  nodeId: Scalars['ID'],
  id: Scalars['UUID'],
  customerId: Scalars['UUID'],
  userId?: Maybe<Scalars['UUID']>,
  created: Scalars['Datetime'],
  modified: Scalars['Datetime'],
  name?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  destination?: Maybe<Scalars['String']>,
  dates?: Maybe<Scalars['String']>,
  archived?: Maybe<Scalars['Datetime']>,
  mediaGalleryId?: Maybe<Scalars['UUID']>,
  activeQuoteId?: Maybe<Scalars['UUID']>,
  baseCurrency?: Maybe<Scalars['String']>,
  duration?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['Datetime']>,
  status: Scalars['Int'],
  agencyId?: Maybe<Scalars['UUID']>,
  agencyMemberId?: Maybe<Scalars['UUID']>,
  customer?: Maybe<Customer>,
  user?: Maybe<User>,
  mediaGallery?: Maybe<MediaGallery>,
  activeQuote?: Maybe<Quote>,
  agency?: Maybe<Agency>,
  agencyMember?: Maybe<AgencyMember>,
  expenses: ExpensesConnection,
  invoices: InvoicesConnection,
  payments: PaymentsConnection,
  supplierInvoices: SupplierInvoicesConnection,
  emails: EmailsConnection,
  enquiries: EnquiriesConnection,
  notes: NotesConnection,
  quotes: QuotesConnection,
  testimonials: TestimonialsConnection,
  tripTravellers: TripTravellersConnection,
  tripFlights: TripFlightsConnection,
  quotePublics: QuotePublicsConnection,
};


export type TripExpensesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<ExpensesOrderBy>>,
  condition?: Maybe<ExpenseCondition>,
  filter?: Maybe<ExpenseFilter>
};


export type TripInvoicesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<InvoicesOrderBy>>,
  condition?: Maybe<InvoiceCondition>,
  filter?: Maybe<InvoiceFilter>
};


export type TripPaymentsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<PaymentsOrderBy>>,
  condition?: Maybe<PaymentCondition>,
  filter?: Maybe<PaymentFilter>
};


export type TripSupplierInvoicesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<SupplierInvoicesOrderBy>>,
  condition?: Maybe<SupplierInvoiceCondition>,
  filter?: Maybe<SupplierInvoiceFilter>
};


export type TripEmailsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<EmailsOrderBy>>,
  condition?: Maybe<EmailCondition>,
  filter?: Maybe<EmailFilter>
};


export type TripEnquiriesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<EnquiriesOrderBy>>,
  condition?: Maybe<EnquiryCondition>,
  filter?: Maybe<EnquiryFilter>
};


export type TripNotesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<NotesOrderBy>>,
  condition?: Maybe<NoteCondition>,
  filter?: Maybe<NoteFilter>
};


export type TripQuotesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<QuotesOrderBy>>,
  condition?: Maybe<QuoteCondition>,
  filter?: Maybe<QuoteFilter>
};


export type TripTestimonialsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<TestimonialsOrderBy>>,
  condition?: Maybe<TestimonialCondition>,
  filter?: Maybe<TestimonialFilter>
};


export type TripTripTravellersArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<TripTravellersOrderBy>>,
  condition?: Maybe<TripTravellerCondition>,
  filter?: Maybe<TripTravellerFilter>
};


export type TripTripFlightsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<TripFlightsOrderBy>>,
  condition?: Maybe<TripFlightCondition>,
  filter?: Maybe<TripFlightFilter>
};


export type TripQuotePublicsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<QuotePublicsOrderBy>>,
  condition?: Maybe<QuotePublicCondition>,
  filter?: Maybe<QuotePublicFilter>
};

export type TripCondition = {
  id?: Maybe<Scalars['UUID']>,
  customerId?: Maybe<Scalars['UUID']>,
  userId?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  destination?: Maybe<Scalars['String']>,
  dates?: Maybe<Scalars['String']>,
  archived?: Maybe<Scalars['Datetime']>,
  mediaGalleryId?: Maybe<Scalars['UUID']>,
  activeQuoteId?: Maybe<Scalars['UUID']>,
  baseCurrency?: Maybe<Scalars['String']>,
  duration?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['Datetime']>,
  status?: Maybe<Scalars['Int']>,
  agencyId?: Maybe<Scalars['UUID']>,
  agencyMemberId?: Maybe<Scalars['UUID']>,
};

export type TripFilter = {
  id?: Maybe<UuidFilter>,
  customerId?: Maybe<UuidFilter>,
  userId?: Maybe<UuidFilter>,
  created?: Maybe<DatetimeFilter>,
  modified?: Maybe<DatetimeFilter>,
  name?: Maybe<StringFilter>,
  summary?: Maybe<StringFilter>,
  destination?: Maybe<StringFilter>,
  dates?: Maybe<StringFilter>,
  archived?: Maybe<DatetimeFilter>,
  mediaGalleryId?: Maybe<UuidFilter>,
  activeQuoteId?: Maybe<UuidFilter>,
  baseCurrency?: Maybe<StringFilter>,
  duration?: Maybe<IntFilter>,
  start?: Maybe<DatetimeFilter>,
  status?: Maybe<IntFilter>,
  agencyId?: Maybe<UuidFilter>,
  agencyMemberId?: Maybe<UuidFilter>,
  expenses?: Maybe<TripToManyExpenseFilter>,
  expensesExist?: Maybe<Scalars['Boolean']>,
  invoices?: Maybe<TripToManyInvoiceFilter>,
  invoicesExist?: Maybe<Scalars['Boolean']>,
  payments?: Maybe<TripToManyPaymentFilter>,
  paymentsExist?: Maybe<Scalars['Boolean']>,
  supplierInvoices?: Maybe<TripToManySupplierInvoiceFilter>,
  supplierInvoicesExist?: Maybe<Scalars['Boolean']>,
  emails?: Maybe<TripToManyEmailFilter>,
  emailsExist?: Maybe<Scalars['Boolean']>,
  enquiries?: Maybe<TripToManyEnquiryFilter>,
  enquiriesExist?: Maybe<Scalars['Boolean']>,
  notes?: Maybe<TripToManyNoteFilter>,
  notesExist?: Maybe<Scalars['Boolean']>,
  quotes?: Maybe<TripToManyQuoteFilter>,
  quotesExist?: Maybe<Scalars['Boolean']>,
  testimonials?: Maybe<TripToManyTestimonialFilter>,
  testimonialsExist?: Maybe<Scalars['Boolean']>,
  tripTravellers?: Maybe<TripToManyTripTravellerFilter>,
  tripTravellersExist?: Maybe<Scalars['Boolean']>,
  tripFlights?: Maybe<TripToManyTripFlightFilter>,
  tripFlightsExist?: Maybe<Scalars['Boolean']>,
  quotePublics?: Maybe<TripToManyQuotePublicFilter>,
  quotePublicsExist?: Maybe<Scalars['Boolean']>,
  customer?: Maybe<CustomerFilter>,
  user?: Maybe<UserFilter>,
  userExists?: Maybe<Scalars['Boolean']>,
  mediaGallery?: Maybe<MediaGalleryFilter>,
  mediaGalleryExists?: Maybe<Scalars['Boolean']>,
  activeQuote?: Maybe<QuoteFilter>,
  activeQuoteExists?: Maybe<Scalars['Boolean']>,
  agency?: Maybe<AgencyFilter>,
  agencyExists?: Maybe<Scalars['Boolean']>,
  agencyMember?: Maybe<AgencyMemberFilter>,
  agencyMemberExists?: Maybe<Scalars['Boolean']>,
  and?: Maybe<Array<TripFilter>>,
  or?: Maybe<Array<TripFilter>>,
  not?: Maybe<TripFilter>,
};

export type TripFlight = Node & {
   __typename?: 'TripFlight',
  nodeId: Scalars['ID'],
  id: Scalars['UUID'],
  arrival: Scalars['Datetime'],
  arrivalAirport?: Maybe<Scalars['String']>,
  carrier?: Maybe<Scalars['String']>,
  departure: Scalars['Datetime'],
  departureAirport?: Maybe<Scalars['String']>,
  notes?: Maybe<Scalars['String']>,
  number?: Maybe<Scalars['String']>,
  tripId: Scalars['UUID'],
  trip?: Maybe<Trip>,
  airportByDepartureAirport?: Maybe<Airport>,
  airportByArrivalAirport?: Maybe<Airport>,
};

export type TripFlightCondition = {
  id?: Maybe<Scalars['UUID']>,
  arrival?: Maybe<Scalars['Datetime']>,
  arrivalAirport?: Maybe<Scalars['String']>,
  carrier?: Maybe<Scalars['String']>,
  departure?: Maybe<Scalars['Datetime']>,
  departureAirport?: Maybe<Scalars['String']>,
  notes?: Maybe<Scalars['String']>,
  number?: Maybe<Scalars['String']>,
  tripId?: Maybe<Scalars['UUID']>,
};

export type TripFlightFilter = {
  id?: Maybe<UuidFilter>,
  arrival?: Maybe<DatetimeFilter>,
  arrivalAirport?: Maybe<StringFilter>,
  carrier?: Maybe<StringFilter>,
  departure?: Maybe<DatetimeFilter>,
  departureAirport?: Maybe<StringFilter>,
  notes?: Maybe<StringFilter>,
  number?: Maybe<StringFilter>,
  tripId?: Maybe<UuidFilter>,
  trip?: Maybe<TripFilter>,
  airportByDepartureAirport?: Maybe<AirportFilter>,
  airportByDepartureAirportExists?: Maybe<Scalars['Boolean']>,
  airportByArrivalAirport?: Maybe<AirportFilter>,
  airportByArrivalAirportExists?: Maybe<Scalars['Boolean']>,
  and?: Maybe<Array<TripFlightFilter>>,
  or?: Maybe<Array<TripFlightFilter>>,
  not?: Maybe<TripFlightFilter>,
};

export type TripFlightInput = {
  id?: Maybe<Scalars['UUID']>,
  arrival: Scalars['Datetime'],
  arrivalAirport?: Maybe<Scalars['String']>,
  carrier?: Maybe<Scalars['String']>,
  departure: Scalars['Datetime'],
  departureAirport?: Maybe<Scalars['String']>,
  notes?: Maybe<Scalars['String']>,
  number?: Maybe<Scalars['String']>,
  tripId?: Maybe<Scalars['UUID']>,
  tripToTripId?: Maybe<FkTripFlightTripTripIdInput>,
  airportToDepartureAirport?: Maybe<FakePublicTripFlightForeignKey0Input>,
  airportToArrivalAirport?: Maybe<FakePublicTripFlightForeignKey1Input>,
};

export type TripFlightNodeIdConnect = {
  nodeId: Scalars['ID'],
};

export type TripFlightNodeIdDelete = {
  nodeId: Scalars['ID'],
};

export type TripFlightOnTripFlightForFakePublicTripFlightForeignKey0NodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: AirportPatch,
};

export type TripFlightOnTripFlightForFakePublicTripFlightForeignKey0UsingPkTripFlightUpdate = {
  patch: UpdateTripFlightOnTripFlightForFakePublicTripFlightForeignKey0Patch,
  id: Scalars['UUID'],
};

export type TripFlightOnTripFlightForFakePublicTripFlightForeignKey1NodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: AirportPatch,
};

export type TripFlightOnTripFlightForFakePublicTripFlightForeignKey1UsingPkTripFlightUpdate = {
  patch: UpdateTripFlightOnTripFlightForFakePublicTripFlightForeignKey1Patch,
  id: Scalars['UUID'],
};

export type TripFlightOnTripFlightForFkTripFlightTripTripIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: TripPatch,
};

export type TripFlightOnTripFlightForFkTripFlightTripTripIdUsingPkTripFlightUpdate = {
  patch: UpdateTripFlightOnTripFlightForFkTripFlightTripTripIdPatch,
  id: Scalars['UUID'],
};

export type TripFlightPatch = {
  id?: Maybe<Scalars['UUID']>,
  arrival?: Maybe<Scalars['Datetime']>,
  arrivalAirport?: Maybe<Scalars['String']>,
  carrier?: Maybe<Scalars['String']>,
  departure?: Maybe<Scalars['Datetime']>,
  departureAirport?: Maybe<Scalars['String']>,
  notes?: Maybe<Scalars['String']>,
  number?: Maybe<Scalars['String']>,
  tripId?: Maybe<Scalars['UUID']>,
  tripToTripId?: Maybe<FkTripFlightTripTripIdInput>,
  airportToDepartureAirport?: Maybe<FakePublicTripFlightForeignKey0Input>,
  airportToArrivalAirport?: Maybe<FakePublicTripFlightForeignKey1Input>,
};

export type TripFlightPkTripFlightConnect = {
  id: Scalars['UUID'],
};

export type TripFlightPkTripFlightDelete = {
  id: Scalars['UUID'],
};

export type TripFlightsConnection = {
   __typename?: 'TripFlightsConnection',
  nodes: Array<Maybe<TripFlight>>,
  edges: Array<TripFlightsEdge>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
};

export type TripFlightsEdge = {
   __typename?: 'TripFlightsEdge',
  cursor?: Maybe<Scalars['Cursor']>,
  node?: Maybe<TripFlight>,
};

export enum TripFlightsOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  ArrivalAsc = 'ARRIVAL_ASC',
  ArrivalDesc = 'ARRIVAL_DESC',
  ArrivalAirportAsc = 'ARRIVAL_AIRPORT_ASC',
  ArrivalAirportDesc = 'ARRIVAL_AIRPORT_DESC',
  CarrierAsc = 'CARRIER_ASC',
  CarrierDesc = 'CARRIER_DESC',
  DepartureAsc = 'DEPARTURE_ASC',
  DepartureDesc = 'DEPARTURE_DESC',
  DepartureAirportAsc = 'DEPARTURE_AIRPORT_ASC',
  DepartureAirportDesc = 'DEPARTURE_AIRPORT_DESC',
  NotesAsc = 'NOTES_ASC',
  NotesDesc = 'NOTES_DESC',
  NumberAsc = 'NUMBER_ASC',
  NumberDesc = 'NUMBER_DESC',
  TripIdAsc = 'TRIP_ID_ASC',
  TripIdDesc = 'TRIP_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type TripInput = {
  id?: Maybe<Scalars['UUID']>,
  customerId?: Maybe<Scalars['UUID']>,
  userId?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  destination?: Maybe<Scalars['String']>,
  dates?: Maybe<Scalars['String']>,
  archived?: Maybe<Scalars['Datetime']>,
  mediaGalleryId?: Maybe<Scalars['UUID']>,
  activeQuoteId?: Maybe<Scalars['UUID']>,
  baseCurrency?: Maybe<Scalars['String']>,
  duration?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['Datetime']>,
  status?: Maybe<Scalars['Int']>,
  agencyId?: Maybe<Scalars['UUID']>,
  agencyMemberId?: Maybe<Scalars['UUID']>,
  customerToCustomerId?: Maybe<FkTripCustomerCustomerIdInput>,
  userToUserId?: Maybe<FkTripUserUserIdInput>,
  mediaGalleryToMediaGalleryId?: Maybe<FkTripMediaGalleryMediaGalleryIdInput>,
  quoteToActiveQuoteId?: Maybe<FkTripQuoteActiveQuoteIdInput>,
  agencyToAgencyId?: Maybe<FkTripAgencyAgencyIdInput>,
  agencyMemberToAgencyMemberId?: Maybe<FkTripAgencyMemberAgencyMemberIdInput>,
  expensesUsingId?: Maybe<FkExpenseTripTripIdInverseInput>,
  invoicesUsingId?: Maybe<FkInvoiceTripTripIdInverseInput>,
  paymentsUsingId?: Maybe<FkPaymentTripTripIdInverseInput>,
  supplierInvoicesUsingId?: Maybe<FkSupplierInvoiceTripTripIdInverseInput>,
  emailsUsingId?: Maybe<FkEmailTripTripIdInverseInput>,
  enquiriesUsingId?: Maybe<FkEnquiryTripTripIdInverseInput>,
  notesUsingId?: Maybe<FkNoteTripTripIdInverseInput>,
  quotesUsingId?: Maybe<FkQuoteTripTripIdInverseInput>,
  testimonialsUsingId?: Maybe<FkTestimonialTripTripIdInverseInput>,
  tripTravellersUsingId?: Maybe<FkTripTravellerTripTripIdInverseInput>,
  tripFlightsUsingId?: Maybe<FkTripFlightTripTripIdInverseInput>,
  quotePublicsUsingId?: Maybe<FakePublicQuotePublicForeignKey0InverseInput>,
};

export type TripNodeIdConnect = {
  nodeId: Scalars['ID'],
};

export type TripNodeIdDelete = {
  nodeId: Scalars['ID'],
};

export type TripOnEmailForFkEmailTripTripIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: EmailPatch,
};

export type TripOnEmailForFkEmailTripTripIdUsingPkTripUpdate = {
  patch: UpdateTripOnEmailForFkEmailTripTripIdPatch,
  id: Scalars['UUID'],
};

export type TripOnEnquiryForFkEnquiryTripTripIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: EnquiryPatch,
};

export type TripOnEnquiryForFkEnquiryTripTripIdUsingPkTripUpdate = {
  patch: UpdateTripOnEnquiryForFkEnquiryTripTripIdPatch,
  id: Scalars['UUID'],
};

export type TripOnExpenseForFkExpenseTripTripIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: ExpensePatch,
};

export type TripOnExpenseForFkExpenseTripTripIdUsingPkTripUpdate = {
  patch: UpdateTripOnExpenseForFkExpenseTripTripIdPatch,
  id: Scalars['UUID'],
};

export type TripOnInvoiceForFkInvoiceTripTripIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: InvoicePatch,
};

export type TripOnInvoiceForFkInvoiceTripTripIdUsingPkTripUpdate = {
  patch: UpdateTripOnInvoiceForFkInvoiceTripTripIdPatch,
  id: Scalars['UUID'],
};

export type TripOnNoteForFkNoteTripTripIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: NotePatch,
};

export type TripOnNoteForFkNoteTripTripIdUsingPkTripUpdate = {
  patch: UpdateTripOnNoteForFkNoteTripTripIdPatch,
  id: Scalars['UUID'],
};

export type TripOnPaymentForFkPaymentTripTripIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: PaymentPatch,
};

export type TripOnPaymentForFkPaymentTripTripIdUsingPkTripUpdate = {
  patch: UpdateTripOnPaymentForFkPaymentTripTripIdPatch,
  id: Scalars['UUID'],
};

export type TripOnQuoteForFkQuoteTripTripIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: QuotePatch,
};

export type TripOnQuoteForFkQuoteTripTripIdUsingPkTripUpdate = {
  patch: UpdateTripOnQuoteForFkQuoteTripTripIdPatch,
  id: Scalars['UUID'],
};

export type TripOnQuotePublicForFakePublicQuotePublicForeignKey0NodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: QuotePublicPatch,
};

export type TripOnQuotePublicForFakePublicQuotePublicForeignKey0UsingPkTripUpdate = {
  patch: UpdateTripOnQuotePublicForFakePublicQuotePublicForeignKey0Patch,
  id: Scalars['UUID'],
};

export type TripOnSupplierInvoiceForFkSupplierInvoiceTripTripIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: SupplierInvoicePatch,
};

export type TripOnSupplierInvoiceForFkSupplierInvoiceTripTripIdUsingPkTripUpdate = {
  patch: UpdateTripOnSupplierInvoiceForFkSupplierInvoiceTripTripIdPatch,
  id: Scalars['UUID'],
};

export type TripOnTestimonialForFkTestimonialTripTripIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: TestimonialPatch,
};

export type TripOnTestimonialForFkTestimonialTripTripIdUsingPkTripUpdate = {
  patch: UpdateTripOnTestimonialForFkTestimonialTripTripIdPatch,
  id: Scalars['UUID'],
};

export type TripOnTripFlightForFkTripFlightTripTripIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: TripFlightPatch,
};

export type TripOnTripFlightForFkTripFlightTripTripIdUsingPkTripUpdate = {
  patch: UpdateTripOnTripFlightForFkTripFlightTripTripIdPatch,
  id: Scalars['UUID'],
};

export type TripOnTripForFkTripAgencyAgencyIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: AgencyPatch,
};

export type TripOnTripForFkTripAgencyAgencyIdUsingPkTripUpdate = {
  patch: UpdateTripOnTripForFkTripAgencyAgencyIdPatch,
  id: Scalars['UUID'],
};

export type TripOnTripForFkTripAgencyMemberAgencyMemberIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: AgencyMemberPatch,
};

export type TripOnTripForFkTripAgencyMemberAgencyMemberIdUsingPkTripUpdate = {
  patch: UpdateTripOnTripForFkTripAgencyMemberAgencyMemberIdPatch,
  id: Scalars['UUID'],
};

export type TripOnTripForFkTripCustomerCustomerIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: CustomerPatch,
};

export type TripOnTripForFkTripCustomerCustomerIdUsingPkTripUpdate = {
  patch: UpdateTripOnTripForFkTripCustomerCustomerIdPatch,
  id: Scalars['UUID'],
};

export type TripOnTripForFkTripMediaGalleryMediaGalleryIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: MediaGalleryPatch,
};

export type TripOnTripForFkTripMediaGalleryMediaGalleryIdUsingPkTripUpdate = {
  patch: UpdateTripOnTripForFkTripMediaGalleryMediaGalleryIdPatch,
  id: Scalars['UUID'],
};

export type TripOnTripForFkTripQuoteActiveQuoteIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: QuotePatch,
};

export type TripOnTripForFkTripQuoteActiveQuoteIdUsingPkTripUpdate = {
  patch: UpdateTripOnTripForFkTripQuoteActiveQuoteIdPatch,
  id: Scalars['UUID'],
};

export type TripOnTripForFkTripUserUserIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: UserPatch,
};

export type TripOnTripForFkTripUserUserIdUsingPkTripUpdate = {
  patch: UpdateTripOnTripForFkTripUserUserIdPatch,
  id: Scalars['UUID'],
};

export type TripOnTripTravellerForFkTripTravellerTripTripIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: TripTravellerPatch,
};

export type TripOnTripTravellerForFkTripTravellerTripTripIdUsingPkTripUpdate = {
  patch: UpdateTripOnTripTravellerForFkTripTravellerTripTripIdPatch,
  id: Scalars['UUID'],
};

export type TripPatch = {
  id?: Maybe<Scalars['UUID']>,
  customerId?: Maybe<Scalars['UUID']>,
  userId?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  destination?: Maybe<Scalars['String']>,
  dates?: Maybe<Scalars['String']>,
  archived?: Maybe<Scalars['Datetime']>,
  mediaGalleryId?: Maybe<Scalars['UUID']>,
  activeQuoteId?: Maybe<Scalars['UUID']>,
  baseCurrency?: Maybe<Scalars['String']>,
  duration?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['Datetime']>,
  status?: Maybe<Scalars['Int']>,
  agencyId?: Maybe<Scalars['UUID']>,
  agencyMemberId?: Maybe<Scalars['UUID']>,
  customerToCustomerId?: Maybe<FkTripCustomerCustomerIdInput>,
  userToUserId?: Maybe<FkTripUserUserIdInput>,
  mediaGalleryToMediaGalleryId?: Maybe<FkTripMediaGalleryMediaGalleryIdInput>,
  quoteToActiveQuoteId?: Maybe<FkTripQuoteActiveQuoteIdInput>,
  agencyToAgencyId?: Maybe<FkTripAgencyAgencyIdInput>,
  agencyMemberToAgencyMemberId?: Maybe<FkTripAgencyMemberAgencyMemberIdInput>,
  expensesUsingId?: Maybe<FkExpenseTripTripIdInverseInput>,
  invoicesUsingId?: Maybe<FkInvoiceTripTripIdInverseInput>,
  paymentsUsingId?: Maybe<FkPaymentTripTripIdInverseInput>,
  supplierInvoicesUsingId?: Maybe<FkSupplierInvoiceTripTripIdInverseInput>,
  emailsUsingId?: Maybe<FkEmailTripTripIdInverseInput>,
  enquiriesUsingId?: Maybe<FkEnquiryTripTripIdInverseInput>,
  notesUsingId?: Maybe<FkNoteTripTripIdInverseInput>,
  quotesUsingId?: Maybe<FkQuoteTripTripIdInverseInput>,
  testimonialsUsingId?: Maybe<FkTestimonialTripTripIdInverseInput>,
  tripTravellersUsingId?: Maybe<FkTripTravellerTripTripIdInverseInput>,
  tripFlightsUsingId?: Maybe<FkTripFlightTripTripIdInverseInput>,
  quotePublicsUsingId?: Maybe<FakePublicQuotePublicForeignKey0InverseInput>,
};

export type TripPkTripConnect = {
  id: Scalars['UUID'],
};

export type TripPkTripDelete = {
  id: Scalars['UUID'],
};

export type TripsConnection = {
   __typename?: 'TripsConnection',
  nodes: Array<Maybe<Trip>>,
  edges: Array<TripsEdge>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
};

export type TripsEdge = {
   __typename?: 'TripsEdge',
  cursor?: Maybe<Scalars['Cursor']>,
  node?: Maybe<Trip>,
};

export enum TripsOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  CustomerIdAsc = 'CUSTOMER_ID_ASC',
  CustomerIdDesc = 'CUSTOMER_ID_DESC',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC',
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  SummaryAsc = 'SUMMARY_ASC',
  SummaryDesc = 'SUMMARY_DESC',
  DestinationAsc = 'DESTINATION_ASC',
  DestinationDesc = 'DESTINATION_DESC',
  DatesAsc = 'DATES_ASC',
  DatesDesc = 'DATES_DESC',
  ArchivedAsc = 'ARCHIVED_ASC',
  ArchivedDesc = 'ARCHIVED_DESC',
  MediaGalleryIdAsc = 'MEDIA_GALLERY_ID_ASC',
  MediaGalleryIdDesc = 'MEDIA_GALLERY_ID_DESC',
  ActiveQuoteIdAsc = 'ACTIVE_QUOTE_ID_ASC',
  ActiveQuoteIdDesc = 'ACTIVE_QUOTE_ID_DESC',
  BaseCurrencyAsc = 'BASE_CURRENCY_ASC',
  BaseCurrencyDesc = 'BASE_CURRENCY_DESC',
  DurationAsc = 'DURATION_ASC',
  DurationDesc = 'DURATION_DESC',
  StartAsc = 'START_ASC',
  StartDesc = 'START_DESC',
  StatusAsc = 'STATUS_ASC',
  StatusDesc = 'STATUS_DESC',
  AgencyIdAsc = 'AGENCY_ID_ASC',
  AgencyIdDesc = 'AGENCY_ID_DESC',
  AgencyMemberIdAsc = 'AGENCY_MEMBER_ID_ASC',
  AgencyMemberIdDesc = 'AGENCY_MEMBER_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type TripToManyEmailFilter = {
  every?: Maybe<EmailFilter>,
  some?: Maybe<EmailFilter>,
  none?: Maybe<EmailFilter>,
};

export type TripToManyEnquiryFilter = {
  every?: Maybe<EnquiryFilter>,
  some?: Maybe<EnquiryFilter>,
  none?: Maybe<EnquiryFilter>,
};

export type TripToManyExpenseFilter = {
  every?: Maybe<ExpenseFilter>,
  some?: Maybe<ExpenseFilter>,
  none?: Maybe<ExpenseFilter>,
};

export type TripToManyInvoiceFilter = {
  every?: Maybe<InvoiceFilter>,
  some?: Maybe<InvoiceFilter>,
  none?: Maybe<InvoiceFilter>,
};

export type TripToManyNoteFilter = {
  every?: Maybe<NoteFilter>,
  some?: Maybe<NoteFilter>,
  none?: Maybe<NoteFilter>,
};

export type TripToManyPaymentFilter = {
  every?: Maybe<PaymentFilter>,
  some?: Maybe<PaymentFilter>,
  none?: Maybe<PaymentFilter>,
};

export type TripToManyQuoteFilter = {
  every?: Maybe<QuoteFilter>,
  some?: Maybe<QuoteFilter>,
  none?: Maybe<QuoteFilter>,
};

export type TripToManyQuotePublicFilter = {
  every?: Maybe<QuotePublicFilter>,
  some?: Maybe<QuotePublicFilter>,
  none?: Maybe<QuotePublicFilter>,
};

export type TripToManySupplierInvoiceFilter = {
  every?: Maybe<SupplierInvoiceFilter>,
  some?: Maybe<SupplierInvoiceFilter>,
  none?: Maybe<SupplierInvoiceFilter>,
};

export type TripToManyTestimonialFilter = {
  every?: Maybe<TestimonialFilter>,
  some?: Maybe<TestimonialFilter>,
  none?: Maybe<TestimonialFilter>,
};

export type TripToManyTripFlightFilter = {
  every?: Maybe<TripFlightFilter>,
  some?: Maybe<TripFlightFilter>,
  none?: Maybe<TripFlightFilter>,
};

export type TripToManyTripTravellerFilter = {
  every?: Maybe<TripTravellerFilter>,
  some?: Maybe<TripTravellerFilter>,
  none?: Maybe<TripTravellerFilter>,
};

export type TripTraveller = Node & {
   __typename?: 'TripTraveller',
  nodeId: Scalars['ID'],
  id: Scalars['UUID'],
  created: Scalars['Datetime'],
  modified: Scalars['Datetime'],
  travellerId: Scalars['UUID'],
  tripId: Scalars['UUID'],
  traveller?: Maybe<Traveller>,
  trip?: Maybe<Trip>,
};

export type TripTravellerCondition = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  travellerId?: Maybe<Scalars['UUID']>,
  tripId?: Maybe<Scalars['UUID']>,
};

export type TripTravellerFilter = {
  id?: Maybe<UuidFilter>,
  created?: Maybe<DatetimeFilter>,
  modified?: Maybe<DatetimeFilter>,
  travellerId?: Maybe<UuidFilter>,
  tripId?: Maybe<UuidFilter>,
  traveller?: Maybe<TravellerFilter>,
  trip?: Maybe<TripFilter>,
  and?: Maybe<Array<TripTravellerFilter>>,
  or?: Maybe<Array<TripTravellerFilter>>,
  not?: Maybe<TripTravellerFilter>,
};

export type TripTravellerInput = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  travellerId?: Maybe<Scalars['UUID']>,
  tripId?: Maybe<Scalars['UUID']>,
  travellerToTravellerId?: Maybe<FkTripTravellerTravellerTravellerIdInput>,
  tripToTripId?: Maybe<FkTripTravellerTripTripIdInput>,
};

export type TripTravellerNodeIdConnect = {
  nodeId: Scalars['ID'],
};

export type TripTravellerNodeIdDelete = {
  nodeId: Scalars['ID'],
};

export type TripTravellerOnTripTravellerForFkTripTravellerTravellerTravellerIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: TravellerPatch,
};

export type TripTravellerOnTripTravellerForFkTripTravellerTravellerTravellerIdUsingPkTripTravellerUpdate = {
  patch: UpdateTripTravellerOnTripTravellerForFkTripTravellerTravellerTravellerIdPatch,
  id: Scalars['UUID'],
};

export type TripTravellerOnTripTravellerForFkTripTravellerTripTripIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: TripPatch,
};

export type TripTravellerOnTripTravellerForFkTripTravellerTripTripIdUsingPkTripTravellerUpdate = {
  patch: UpdateTripTravellerOnTripTravellerForFkTripTravellerTripTripIdPatch,
  id: Scalars['UUID'],
};

export type TripTravellerPatch = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  travellerId?: Maybe<Scalars['UUID']>,
  tripId?: Maybe<Scalars['UUID']>,
  travellerToTravellerId?: Maybe<FkTripTravellerTravellerTravellerIdInput>,
  tripToTripId?: Maybe<FkTripTravellerTripTripIdInput>,
};

export type TripTravellerPkTripTravellerConnect = {
  id: Scalars['UUID'],
};

export type TripTravellerPkTripTravellerDelete = {
  id: Scalars['UUID'],
};

export type TripTravellersConnection = {
   __typename?: 'TripTravellersConnection',
  nodes: Array<Maybe<TripTraveller>>,
  edges: Array<TripTravellersEdge>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
};

export type TripTravellersEdge = {
   __typename?: 'TripTravellersEdge',
  cursor?: Maybe<Scalars['Cursor']>,
  node?: Maybe<TripTraveller>,
};

export enum TripTravellersOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC',
  TravellerIdAsc = 'TRAVELLER_ID_ASC',
  TravellerIdDesc = 'TRAVELLER_ID_DESC',
  TripIdAsc = 'TRIP_ID_ASC',
  TripIdDesc = 'TRIP_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type UpdateAccountByNodeIdInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
  patch: AccountPatch,
};

export type UpdateAccountInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  patch: AccountPatch,
  id: Scalars['UUID'],
};

export type UpdateAccountOnTransactionForFkTransactionAccountAccountIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  institution?: Maybe<Scalars['String']>,
  details?: Maybe<Scalars['String']>,
  transactionsUsingId?: Maybe<FkTransactionAccountAccountIdInverseInput>,
  transactionImportBatchesUsingId?: Maybe<FkTransactionImportBatchAccountAccountIdInverseInput>,
};

export type UpdateAccountOnTransactionImportBatchForFkTransactionImportBatchAccountAccountIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  institution?: Maybe<Scalars['String']>,
  details?: Maybe<Scalars['String']>,
  transactionsUsingId?: Maybe<FkTransactionAccountAccountIdInverseInput>,
  transactionImportBatchesUsingId?: Maybe<FkTransactionImportBatchAccountAccountIdInverseInput>,
};

export type UpdateAccountPayload = {
   __typename?: 'UpdateAccountPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  account?: Maybe<Account>,
  query?: Maybe<Query>,
  accountEdge?: Maybe<AccountsEdge>,
};


export type UpdateAccountPayloadAccountEdgeArgs = {
  orderBy?: Maybe<Array<AccountsOrderBy>>
};

export type UpdateAgencyByNodeIdInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
  patch: AgencyPatch,
};

export type UpdateAgencyInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  patch: AgencyPatch,
  id: Scalars['UUID'],
};

export type UpdateAgencyMemberByNodeIdInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
  patch: AgencyMemberPatch,
};

export type UpdateAgencyMemberInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  patch: AgencyMemberPatch,
  id: Scalars['UUID'],
};

export type UpdateAgencyMemberOnAgencyMemberForFkAgencyMemberAgencyAgencyIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  firstName?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  skype?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  genderPreposition?: Maybe<Scalars['String']>,
  agencyToAgencyId?: Maybe<FkAgencyMemberAgencyAgencyIdInput>,
  tripsUsingId?: Maybe<FkTripAgencyMemberAgencyMemberIdInverseInput>,
};

export type UpdateAgencyMemberOnTripForFkTripAgencyMemberAgencyMemberIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  firstName?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  skype?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  genderPreposition?: Maybe<Scalars['String']>,
  agencyId?: Maybe<Scalars['UUID']>,
  agencyToAgencyId?: Maybe<FkAgencyMemberAgencyAgencyIdInput>,
  tripsUsingId?: Maybe<FkTripAgencyMemberAgencyMemberIdInverseInput>,
};

export type UpdateAgencyMemberPayload = {
   __typename?: 'UpdateAgencyMemberPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  agencyMember?: Maybe<AgencyMember>,
  query?: Maybe<Query>,
  agency?: Maybe<Agency>,
  agencyMemberEdge?: Maybe<AgencyMembersEdge>,
};


export type UpdateAgencyMemberPayloadAgencyMemberEdgeArgs = {
  orderBy?: Maybe<Array<AgencyMembersOrderBy>>
};

export type UpdateAgencyOnAgencyForFkAgencyMediaItemLogoIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  mediaItemToLogoId?: Maybe<FkAgencyMediaItemLogoIdInput>,
  agencyMembersUsingId?: Maybe<FkAgencyMemberAgencyAgencyIdInverseInput>,
  tripsUsingId?: Maybe<FkTripAgencyAgencyIdInverseInput>,
};

export type UpdateAgencyOnAgencyMemberForFkAgencyMemberAgencyAgencyIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  logoId?: Maybe<Scalars['UUID']>,
  name?: Maybe<Scalars['String']>,
  mediaItemToLogoId?: Maybe<FkAgencyMediaItemLogoIdInput>,
  agencyMembersUsingId?: Maybe<FkAgencyMemberAgencyAgencyIdInverseInput>,
  tripsUsingId?: Maybe<FkTripAgencyAgencyIdInverseInput>,
};

export type UpdateAgencyOnTripForFkTripAgencyAgencyIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  logoId?: Maybe<Scalars['UUID']>,
  name?: Maybe<Scalars['String']>,
  mediaItemToLogoId?: Maybe<FkAgencyMediaItemLogoIdInput>,
  agencyMembersUsingId?: Maybe<FkAgencyMemberAgencyAgencyIdInverseInput>,
  tripsUsingId?: Maybe<FkTripAgencyAgencyIdInverseInput>,
};

export type UpdateAgencyPayload = {
   __typename?: 'UpdateAgencyPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  agency?: Maybe<Agency>,
  query?: Maybe<Query>,
  logo?: Maybe<MediaItem>,
  agencyEdge?: Maybe<AgenciesEdge>,
};


export type UpdateAgencyPayloadAgencyEdgeArgs = {
  orderBy?: Maybe<Array<AgenciesOrderBy>>
};

export type UpdateAirportByNodeIdInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
  patch: AirportPatch,
};

export type UpdateAirportInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  patch: AirportPatch,
  id: Scalars['UUID'],
};

export type UpdateAirportOnAirportForFkAirportCountryCountryIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  iata?: Maybe<Scalars['String']>,
  icao?: Maybe<Scalars['String']>,
  latitude?: Maybe<Scalars['Float']>,
  longitude?: Maybe<Scalars['Float']>,
  city?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  displayName?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>,
  countryToCountryId?: Maybe<FkAirportCountryCountryIdInput>,
  tripFlightsToDepartureAirportUsingIata?: Maybe<FakePublicTripFlightForeignKey0InverseInput>,
  tripFlightsToArrivalAirportUsingIata?: Maybe<FakePublicTripFlightForeignKey1InverseInput>,
};

export type UpdateAirportOnTripFlightForFakePublicTripFlightForeignKey0Patch = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  iata?: Maybe<Scalars['String']>,
  icao?: Maybe<Scalars['String']>,
  latitude?: Maybe<Scalars['Float']>,
  longitude?: Maybe<Scalars['Float']>,
  countryId?: Maybe<Scalars['UUID']>,
  city?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  displayName?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>,
  countryToCountryId?: Maybe<FkAirportCountryCountryIdInput>,
  tripFlightsToDepartureAirportUsingIata?: Maybe<FakePublicTripFlightForeignKey0InverseInput>,
  tripFlightsToArrivalAirportUsingIata?: Maybe<FakePublicTripFlightForeignKey1InverseInput>,
};

export type UpdateAirportOnTripFlightForFakePublicTripFlightForeignKey1Patch = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  iata?: Maybe<Scalars['String']>,
  icao?: Maybe<Scalars['String']>,
  latitude?: Maybe<Scalars['Float']>,
  longitude?: Maybe<Scalars['Float']>,
  countryId?: Maybe<Scalars['UUID']>,
  city?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  displayName?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>,
  countryToCountryId?: Maybe<FkAirportCountryCountryIdInput>,
  tripFlightsToDepartureAirportUsingIata?: Maybe<FakePublicTripFlightForeignKey0InverseInput>,
  tripFlightsToArrivalAirportUsingIata?: Maybe<FakePublicTripFlightForeignKey1InverseInput>,
};

export type UpdateAirportPayload = {
   __typename?: 'UpdateAirportPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  airport?: Maybe<Airport>,
  query?: Maybe<Query>,
  country?: Maybe<Country>,
  airportEdge?: Maybe<AirportsEdge>,
};


export type UpdateAirportPayloadAirportEdgeArgs = {
  orderBy?: Maybe<Array<AirportsOrderBy>>
};

export type UpdateCountryByNodeIdInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
  patch: CountryPatch,
};

export type UpdateCountryInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  patch: CountryPatch,
  id: Scalars['UUID'],
};

export type UpdateCountryOnAirportForFkAirportCountryCountryIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  iso2?: Maybe<Scalars['String']>,
  iso3?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  airportsUsingId?: Maybe<FkAirportCountryCountryIdInverseInput>,
  destinationsUsingId?: Maybe<FkDestinationCountryCountryIdInverseInput>,
  propertiesUsingId?: Maybe<FkPropertyCountryCountryIdInverseInput>,
};

export type UpdateCountryOnDestinationForFkDestinationCountryCountryIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  iso2?: Maybe<Scalars['String']>,
  iso3?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  airportsUsingId?: Maybe<FkAirportCountryCountryIdInverseInput>,
  destinationsUsingId?: Maybe<FkDestinationCountryCountryIdInverseInput>,
  propertiesUsingId?: Maybe<FkPropertyCountryCountryIdInverseInput>,
};

export type UpdateCountryOnPropertyForFkPropertyCountryCountryIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  iso2?: Maybe<Scalars['String']>,
  iso3?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  airportsUsingId?: Maybe<FkAirportCountryCountryIdInverseInput>,
  destinationsUsingId?: Maybe<FkDestinationCountryCountryIdInverseInput>,
  propertiesUsingId?: Maybe<FkPropertyCountryCountryIdInverseInput>,
};

export type UpdateCountryPayload = {
   __typename?: 'UpdateCountryPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  country?: Maybe<Country>,
  query?: Maybe<Query>,
  countryEdge?: Maybe<CountriesEdge>,
};


export type UpdateCountryPayloadCountryEdgeArgs = {
  orderBy?: Maybe<Array<CountriesOrderBy>>
};

export type UpdateCustomerByNodeIdInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
  patch: CustomerPatch,
};

export type UpdateCustomerInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  patch: CustomerPatch,
  id: Scalars['UUID'],
};

export type UpdateCustomerOnCustomerTravellerForFkCustomerTravellerCustomerCustomerIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  email?: Maybe<Scalars['String']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  customerTravellersUsingId?: Maybe<FkCustomerTravellerCustomerCustomerIdInverseInput>,
  tripsUsingId?: Maybe<FkTripCustomerCustomerIdInverseInput>,
  emailsUsingId?: Maybe<FkEmailCustomerCustomerIdInverseInput>,
  enquiriesUsingId?: Maybe<FkEnquiryCustomerCustomerIdInverseInput>,
};

export type UpdateCustomerOnEmailForFkEmailCustomerCustomerIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  email?: Maybe<Scalars['String']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  customerTravellersUsingId?: Maybe<FkCustomerTravellerCustomerCustomerIdInverseInput>,
  tripsUsingId?: Maybe<FkTripCustomerCustomerIdInverseInput>,
  emailsUsingId?: Maybe<FkEmailCustomerCustomerIdInverseInput>,
  enquiriesUsingId?: Maybe<FkEnquiryCustomerCustomerIdInverseInput>,
};

export type UpdateCustomerOnEnquiryForFkEnquiryCustomerCustomerIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  email?: Maybe<Scalars['String']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  customerTravellersUsingId?: Maybe<FkCustomerTravellerCustomerCustomerIdInverseInput>,
  tripsUsingId?: Maybe<FkTripCustomerCustomerIdInverseInput>,
  emailsUsingId?: Maybe<FkEmailCustomerCustomerIdInverseInput>,
  enquiriesUsingId?: Maybe<FkEnquiryCustomerCustomerIdInverseInput>,
};

export type UpdateCustomerOnTripForFkTripCustomerCustomerIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  email?: Maybe<Scalars['String']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  customerTravellersUsingId?: Maybe<FkCustomerTravellerCustomerCustomerIdInverseInput>,
  tripsUsingId?: Maybe<FkTripCustomerCustomerIdInverseInput>,
  emailsUsingId?: Maybe<FkEmailCustomerCustomerIdInverseInput>,
  enquiriesUsingId?: Maybe<FkEnquiryCustomerCustomerIdInverseInput>,
};

export type UpdateCustomerPayload = {
   __typename?: 'UpdateCustomerPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  customer?: Maybe<Customer>,
  query?: Maybe<Query>,
  customerEdge?: Maybe<CustomersEdge>,
};


export type UpdateCustomerPayloadCustomerEdgeArgs = {
  orderBy?: Maybe<Array<CustomersOrderBy>>
};

export type UpdateCustomerTravellerByNodeIdInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
  patch: CustomerTravellerPatch,
};

export type UpdateCustomerTravellerInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  patch: CustomerTravellerPatch,
  id: Scalars['UUID'],
};

export type UpdateCustomerTravellerOnCustomerTravellerForFkCustomerTravellerCustomerCustomerIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  travellerId?: Maybe<Scalars['UUID']>,
  customerToCustomerId?: Maybe<FkCustomerTravellerCustomerCustomerIdInput>,
  travellerToTravellerId?: Maybe<FkCustomerTravellerTravellerTravellerIdInput>,
};

export type UpdateCustomerTravellerOnCustomerTravellerForFkCustomerTravellerTravellerTravellerIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  customerId?: Maybe<Scalars['UUID']>,
  modified?: Maybe<Scalars['Datetime']>,
  customerToCustomerId?: Maybe<FkCustomerTravellerCustomerCustomerIdInput>,
  travellerToTravellerId?: Maybe<FkCustomerTravellerTravellerTravellerIdInput>,
};

export type UpdateCustomerTravellerPayload = {
   __typename?: 'UpdateCustomerTravellerPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  customerTraveller?: Maybe<CustomerTraveller>,
  query?: Maybe<Query>,
  customer?: Maybe<Customer>,
  traveller?: Maybe<Traveller>,
  customerTravellerEdge?: Maybe<CustomerTravellersEdge>,
};


export type UpdateCustomerTravellerPayloadCustomerTravellerEdgeArgs = {
  orderBy?: Maybe<Array<CustomerTravellersOrderBy>>
};

export type UpdateDestinationByNodeIdInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
  patch: DestinationPatch,
};

export type UpdateDestinationFeatureByNodeIdInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
  patch: DestinationFeaturePatch,
};

export type UpdateDestinationFeatureInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  patch: DestinationFeaturePatch,
  id: Scalars['UUID'],
};

export type UpdateDestinationFeatureOnDestinationFeatureForFkDestinationFeatureDestinationDestinationIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  body?: Maybe<Scalars['String']>,
  created?: Maybe<Scalars['Datetime']>,
  galleryId?: Maybe<Scalars['UUID']>,
  modified?: Maybe<Scalars['Datetime']>,
  title?: Maybe<Scalars['String']>,
  destinationToDestinationId?: Maybe<FkDestinationFeatureDestinationDestinationIdInput>,
  mediaGalleryToGalleryId?: Maybe<FkDestinationFeatureMediaGalleryGalleryIdInput>,
};

export type UpdateDestinationFeatureOnDestinationFeatureForFkDestinationFeatureMediaGalleryGalleryIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  body?: Maybe<Scalars['String']>,
  created?: Maybe<Scalars['Datetime']>,
  destinationId?: Maybe<Scalars['UUID']>,
  modified?: Maybe<Scalars['Datetime']>,
  title?: Maybe<Scalars['String']>,
  destinationToDestinationId?: Maybe<FkDestinationFeatureDestinationDestinationIdInput>,
  mediaGalleryToGalleryId?: Maybe<FkDestinationFeatureMediaGalleryGalleryIdInput>,
};

export type UpdateDestinationFeaturePayload = {
   __typename?: 'UpdateDestinationFeaturePayload',
  clientMutationId?: Maybe<Scalars['String']>,
  destinationFeature?: Maybe<DestinationFeature>,
  query?: Maybe<Query>,
  destination?: Maybe<Destination>,
  gallery?: Maybe<MediaGallery>,
  destinationFeatureEdge?: Maybe<DestinationFeaturesEdge>,
};


export type UpdateDestinationFeaturePayloadDestinationFeatureEdgeArgs = {
  orderBy?: Maybe<Array<DestinationFeaturesOrderBy>>
};

export type UpdateDestinationGuideByNodeIdInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
  patch: DestinationGuidePatch,
};

export type UpdateDestinationGuideInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  patch: DestinationGuidePatch,
  id: Scalars['UUID'],
};

export type UpdateDestinationGuideOnDestinationGuideForFkDestinationGuideDestinationDestinationIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  body?: Maybe<Scalars['String']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  title?: Maybe<Scalars['String']>,
  destinationToDestinationId?: Maybe<FkDestinationGuideDestinationDestinationIdInput>,
};

export type UpdateDestinationGuidePayload = {
   __typename?: 'UpdateDestinationGuidePayload',
  clientMutationId?: Maybe<Scalars['String']>,
  destinationGuide?: Maybe<DestinationGuide>,
  query?: Maybe<Query>,
  destination?: Maybe<Destination>,
  destinationGuideEdge?: Maybe<DestinationGuidesEdge>,
};


export type UpdateDestinationGuidePayloadDestinationGuideEdgeArgs = {
  orderBy?: Maybe<Array<DestinationGuidesOrderBy>>
};

export type UpdateDestinationInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  patch: DestinationPatch,
  id: Scalars['UUID'],
};

export type UpdateDestinationOnDestinationFeatureForFkDestinationFeatureDestinationDestinationIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  body?: Maybe<Scalars['String']>,
  galleryId?: Maybe<Scalars['UUID']>,
  parentId?: Maybe<Scalars['UUID']>,
  countryId?: Maybe<Scalars['UUID']>,
  mediaGalleryToGalleryId?: Maybe<FkDestinationMediaGalleryGalleryIdInput>,
  destinationToParentId?: Maybe<FkDestinationDestinationParentIdInput>,
  countryToCountryId?: Maybe<FkDestinationCountryCountryIdInput>,
  destinationFeaturesUsingId?: Maybe<FkDestinationFeatureDestinationDestinationIdInverseInput>,
  destinationGuidesUsingId?: Maybe<FkDestinationGuideDestinationDestinationIdInverseInput>,
  quoteDayDestinationsUsingId?: Maybe<FkQuoteDayDestinationDestinationDestinationIdInverseInput>,
};

export type UpdateDestinationOnDestinationForFkDestinationCountryCountryIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  body?: Maybe<Scalars['String']>,
  galleryId?: Maybe<Scalars['UUID']>,
  parentId?: Maybe<Scalars['UUID']>,
  mediaGalleryToGalleryId?: Maybe<FkDestinationMediaGalleryGalleryIdInput>,
  destinationToParentId?: Maybe<FkDestinationDestinationParentIdInput>,
  countryToCountryId?: Maybe<FkDestinationCountryCountryIdInput>,
  destinationFeaturesUsingId?: Maybe<FkDestinationFeatureDestinationDestinationIdInverseInput>,
  destinationGuidesUsingId?: Maybe<FkDestinationGuideDestinationDestinationIdInverseInput>,
  quoteDayDestinationsUsingId?: Maybe<FkQuoteDayDestinationDestinationDestinationIdInverseInput>,
};

export type UpdateDestinationOnDestinationForFkDestinationDestinationParentIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  body?: Maybe<Scalars['String']>,
  galleryId?: Maybe<Scalars['UUID']>,
  countryId?: Maybe<Scalars['UUID']>,
  mediaGalleryToGalleryId?: Maybe<FkDestinationMediaGalleryGalleryIdInput>,
  destinationToParentId?: Maybe<FkDestinationDestinationParentIdInput>,
  countryToCountryId?: Maybe<FkDestinationCountryCountryIdInput>,
  destinationFeaturesUsingId?: Maybe<FkDestinationFeatureDestinationDestinationIdInverseInput>,
  destinationGuidesUsingId?: Maybe<FkDestinationGuideDestinationDestinationIdInverseInput>,
  quoteDayDestinationsUsingId?: Maybe<FkQuoteDayDestinationDestinationDestinationIdInverseInput>,
};

export type UpdateDestinationOnDestinationForFkDestinationMediaGalleryGalleryIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  body?: Maybe<Scalars['String']>,
  parentId?: Maybe<Scalars['UUID']>,
  countryId?: Maybe<Scalars['UUID']>,
  mediaGalleryToGalleryId?: Maybe<FkDestinationMediaGalleryGalleryIdInput>,
  destinationToParentId?: Maybe<FkDestinationDestinationParentIdInput>,
  countryToCountryId?: Maybe<FkDestinationCountryCountryIdInput>,
  destinationFeaturesUsingId?: Maybe<FkDestinationFeatureDestinationDestinationIdInverseInput>,
  destinationGuidesUsingId?: Maybe<FkDestinationGuideDestinationDestinationIdInverseInput>,
  quoteDayDestinationsUsingId?: Maybe<FkQuoteDayDestinationDestinationDestinationIdInverseInput>,
};

export type UpdateDestinationOnDestinationGuideForFkDestinationGuideDestinationDestinationIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  body?: Maybe<Scalars['String']>,
  galleryId?: Maybe<Scalars['UUID']>,
  parentId?: Maybe<Scalars['UUID']>,
  countryId?: Maybe<Scalars['UUID']>,
  mediaGalleryToGalleryId?: Maybe<FkDestinationMediaGalleryGalleryIdInput>,
  destinationToParentId?: Maybe<FkDestinationDestinationParentIdInput>,
  countryToCountryId?: Maybe<FkDestinationCountryCountryIdInput>,
  destinationFeaturesUsingId?: Maybe<FkDestinationFeatureDestinationDestinationIdInverseInput>,
  destinationGuidesUsingId?: Maybe<FkDestinationGuideDestinationDestinationIdInverseInput>,
  quoteDayDestinationsUsingId?: Maybe<FkQuoteDayDestinationDestinationDestinationIdInverseInput>,
};

export type UpdateDestinationOnQuoteDayDestinationForFkQuoteDayDestinationDestinationDestinationIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  body?: Maybe<Scalars['String']>,
  galleryId?: Maybe<Scalars['UUID']>,
  parentId?: Maybe<Scalars['UUID']>,
  countryId?: Maybe<Scalars['UUID']>,
  mediaGalleryToGalleryId?: Maybe<FkDestinationMediaGalleryGalleryIdInput>,
  destinationToParentId?: Maybe<FkDestinationDestinationParentIdInput>,
  countryToCountryId?: Maybe<FkDestinationCountryCountryIdInput>,
  destinationFeaturesUsingId?: Maybe<FkDestinationFeatureDestinationDestinationIdInverseInput>,
  destinationGuidesUsingId?: Maybe<FkDestinationGuideDestinationDestinationIdInverseInput>,
  quoteDayDestinationsUsingId?: Maybe<FkQuoteDayDestinationDestinationDestinationIdInverseInput>,
};

export type UpdateDestinationPayload = {
   __typename?: 'UpdateDestinationPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  destination?: Maybe<Destination>,
  query?: Maybe<Query>,
  gallery?: Maybe<MediaGallery>,
  parent?: Maybe<Destination>,
  country?: Maybe<Country>,
  destinationEdge?: Maybe<DestinationsEdge>,
};


export type UpdateDestinationPayloadDestinationEdgeArgs = {
  orderBy?: Maybe<Array<DestinationsOrderBy>>
};

export type UpdateEmailByNodeIdInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
  patch: EmailPatch,
};

export type UpdateEmailInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  patch: EmailPatch,
  id: Scalars['UUID'],
};

export type UpdateEmailOnEmailForFkEmailCustomerCustomerIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  body?: Maybe<Scalars['String']>,
  created?: Maybe<Scalars['Datetime']>,
  notes?: Maybe<Scalars['String']>,
  recipients?: Maybe<Scalars['String']>,
  subject?: Maybe<Scalars['String']>,
  tripId?: Maybe<Scalars['UUID']>,
  userId?: Maybe<Scalars['UUID']>,
  quoteId?: Maybe<Scalars['UUID']>,
  tripToTripId?: Maybe<FkEmailTripTripIdInput>,
  userToUserId?: Maybe<FkEmailUserUserIdInput>,
  customerToCustomerId?: Maybe<FkEmailCustomerCustomerIdInput>,
  quoteToQuoteId?: Maybe<FkEmailQuoteQuoteIdInput>,
};

export type UpdateEmailOnEmailForFkEmailQuoteQuoteIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  body?: Maybe<Scalars['String']>,
  created?: Maybe<Scalars['Datetime']>,
  notes?: Maybe<Scalars['String']>,
  recipients?: Maybe<Scalars['String']>,
  subject?: Maybe<Scalars['String']>,
  tripId?: Maybe<Scalars['UUID']>,
  userId?: Maybe<Scalars['UUID']>,
  customerId?: Maybe<Scalars['UUID']>,
  tripToTripId?: Maybe<FkEmailTripTripIdInput>,
  userToUserId?: Maybe<FkEmailUserUserIdInput>,
  customerToCustomerId?: Maybe<FkEmailCustomerCustomerIdInput>,
  quoteToQuoteId?: Maybe<FkEmailQuoteQuoteIdInput>,
};

export type UpdateEmailOnEmailForFkEmailTripTripIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  body?: Maybe<Scalars['String']>,
  created?: Maybe<Scalars['Datetime']>,
  notes?: Maybe<Scalars['String']>,
  recipients?: Maybe<Scalars['String']>,
  subject?: Maybe<Scalars['String']>,
  userId?: Maybe<Scalars['UUID']>,
  customerId?: Maybe<Scalars['UUID']>,
  quoteId?: Maybe<Scalars['UUID']>,
  tripToTripId?: Maybe<FkEmailTripTripIdInput>,
  userToUserId?: Maybe<FkEmailUserUserIdInput>,
  customerToCustomerId?: Maybe<FkEmailCustomerCustomerIdInput>,
  quoteToQuoteId?: Maybe<FkEmailQuoteQuoteIdInput>,
};

export type UpdateEmailOnEmailForFkEmailUserUserIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  body?: Maybe<Scalars['String']>,
  created?: Maybe<Scalars['Datetime']>,
  notes?: Maybe<Scalars['String']>,
  recipients?: Maybe<Scalars['String']>,
  subject?: Maybe<Scalars['String']>,
  tripId?: Maybe<Scalars['UUID']>,
  customerId?: Maybe<Scalars['UUID']>,
  quoteId?: Maybe<Scalars['UUID']>,
  tripToTripId?: Maybe<FkEmailTripTripIdInput>,
  userToUserId?: Maybe<FkEmailUserUserIdInput>,
  customerToCustomerId?: Maybe<FkEmailCustomerCustomerIdInput>,
  quoteToQuoteId?: Maybe<FkEmailQuoteQuoteIdInput>,
};

export type UpdateEmailPayload = {
   __typename?: 'UpdateEmailPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  email?: Maybe<Email>,
  query?: Maybe<Query>,
  trip?: Maybe<Trip>,
  user?: Maybe<User>,
  customer?: Maybe<Customer>,
  quote?: Maybe<Quote>,
  emailEdge?: Maybe<EmailsEdge>,
};


export type UpdateEmailPayloadEmailEdgeArgs = {
  orderBy?: Maybe<Array<EmailsOrderBy>>
};

export type UpdateEnquiryByNodeIdInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
  patch: EnquiryPatch,
};

export type UpdateEnquiryInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  patch: EnquiryPatch,
  id: Scalars['UUID'],
};

export type UpdateEnquiryOnEnquiryForFkEnquiryCustomerCustomerIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  comments?: Maybe<Scalars['String']>,
  created?: Maybe<Scalars['Datetime']>,
  dates?: Maybe<Scalars['String']>,
  destination?: Maybe<Scalars['String']>,
  source?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['Int']>,
  travellers?: Maybe<Scalars['String']>,
  tripId?: Maybe<Scalars['UUID']>,
  archived?: Maybe<Scalars['Datetime']>,
  customerToCustomerId?: Maybe<FkEnquiryCustomerCustomerIdInput>,
  tripToTripId?: Maybe<FkEnquiryTripTripIdInput>,
};

export type UpdateEnquiryOnEnquiryForFkEnquiryTripTripIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  comments?: Maybe<Scalars['String']>,
  created?: Maybe<Scalars['Datetime']>,
  customerId?: Maybe<Scalars['UUID']>,
  dates?: Maybe<Scalars['String']>,
  destination?: Maybe<Scalars['String']>,
  source?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['Int']>,
  travellers?: Maybe<Scalars['String']>,
  archived?: Maybe<Scalars['Datetime']>,
  customerToCustomerId?: Maybe<FkEnquiryCustomerCustomerIdInput>,
  tripToTripId?: Maybe<FkEnquiryTripTripIdInput>,
};

export type UpdateEnquiryPayload = {
   __typename?: 'UpdateEnquiryPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  enquiry?: Maybe<Enquiry>,
  query?: Maybe<Query>,
  customer?: Maybe<Customer>,
  trip?: Maybe<Trip>,
  enquiryEdge?: Maybe<EnquiriesEdge>,
};


export type UpdateEnquiryPayloadEnquiryEdgeArgs = {
  orderBy?: Maybe<Array<EnquiriesOrderBy>>
};

export type UpdateExpenseByNodeIdInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
  patch: ExpensePatch,
};

export type UpdateExpenseInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  patch: ExpensePatch,
  id: Scalars['UUID'],
};

export type UpdateExpenseOnExpenseForFkExpenseFinanceCategoryCategoryIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  amount?: Maybe<Scalars['BigFloat']>,
  amountActual?: Maybe<Scalars['BigFloat']>,
  created?: Maybe<Scalars['Datetime']>,
  currency?: Maybe<Scalars['String']>,
  invoiceId?: Maybe<Scalars['UUID']>,
  modified?: Maybe<Scalars['Datetime']>,
  paid?: Maybe<Scalars['Datetime']>,
  summary?: Maybe<Scalars['String']>,
  supplierId?: Maybe<Scalars['UUID']>,
  reference?: Maybe<Scalars['String']>,
  supplierInvoiceId?: Maybe<Scalars['UUID']>,
  tripId?: Maybe<Scalars['UUID']>,
  invoiceToInvoiceId?: Maybe<FkExpenseInvoiceInvoiceIdInput>,
  supplierToSupplierId?: Maybe<FkExpenseSupplierSupplierIdInput>,
  financeCategoryToCategoryId?: Maybe<FkExpenseFinanceCategoryCategoryIdInput>,
  supplierInvoiceToSupplierInvoiceId?: Maybe<FkExpenseSupplierInvoiceSupplierInvoiceIdInput>,
  tripToTripId?: Maybe<FkExpenseTripTripIdInput>,
  transactionLinksUsingId?: Maybe<FkTransactionLinkExpenseExpenseIdInverseInput>,
};

export type UpdateExpenseOnExpenseForFkExpenseInvoiceInvoiceIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  amount?: Maybe<Scalars['BigFloat']>,
  amountActual?: Maybe<Scalars['BigFloat']>,
  created?: Maybe<Scalars['Datetime']>,
  currency?: Maybe<Scalars['String']>,
  modified?: Maybe<Scalars['Datetime']>,
  paid?: Maybe<Scalars['Datetime']>,
  summary?: Maybe<Scalars['String']>,
  supplierId?: Maybe<Scalars['UUID']>,
  reference?: Maybe<Scalars['String']>,
  categoryId?: Maybe<Scalars['UUID']>,
  supplierInvoiceId?: Maybe<Scalars['UUID']>,
  tripId?: Maybe<Scalars['UUID']>,
  invoiceToInvoiceId?: Maybe<FkExpenseInvoiceInvoiceIdInput>,
  supplierToSupplierId?: Maybe<FkExpenseSupplierSupplierIdInput>,
  financeCategoryToCategoryId?: Maybe<FkExpenseFinanceCategoryCategoryIdInput>,
  supplierInvoiceToSupplierInvoiceId?: Maybe<FkExpenseSupplierInvoiceSupplierInvoiceIdInput>,
  tripToTripId?: Maybe<FkExpenseTripTripIdInput>,
  transactionLinksUsingId?: Maybe<FkTransactionLinkExpenseExpenseIdInverseInput>,
};

export type UpdateExpenseOnExpenseForFkExpenseSupplierInvoiceSupplierInvoiceIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  amount?: Maybe<Scalars['BigFloat']>,
  amountActual?: Maybe<Scalars['BigFloat']>,
  created?: Maybe<Scalars['Datetime']>,
  currency?: Maybe<Scalars['String']>,
  invoiceId?: Maybe<Scalars['UUID']>,
  modified?: Maybe<Scalars['Datetime']>,
  paid?: Maybe<Scalars['Datetime']>,
  summary?: Maybe<Scalars['String']>,
  supplierId?: Maybe<Scalars['UUID']>,
  reference?: Maybe<Scalars['String']>,
  categoryId?: Maybe<Scalars['UUID']>,
  tripId?: Maybe<Scalars['UUID']>,
  invoiceToInvoiceId?: Maybe<FkExpenseInvoiceInvoiceIdInput>,
  supplierToSupplierId?: Maybe<FkExpenseSupplierSupplierIdInput>,
  financeCategoryToCategoryId?: Maybe<FkExpenseFinanceCategoryCategoryIdInput>,
  supplierInvoiceToSupplierInvoiceId?: Maybe<FkExpenseSupplierInvoiceSupplierInvoiceIdInput>,
  tripToTripId?: Maybe<FkExpenseTripTripIdInput>,
  transactionLinksUsingId?: Maybe<FkTransactionLinkExpenseExpenseIdInverseInput>,
};

export type UpdateExpenseOnExpenseForFkExpenseSupplierSupplierIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  amount?: Maybe<Scalars['BigFloat']>,
  amountActual?: Maybe<Scalars['BigFloat']>,
  created?: Maybe<Scalars['Datetime']>,
  currency?: Maybe<Scalars['String']>,
  invoiceId?: Maybe<Scalars['UUID']>,
  modified?: Maybe<Scalars['Datetime']>,
  paid?: Maybe<Scalars['Datetime']>,
  summary?: Maybe<Scalars['String']>,
  reference?: Maybe<Scalars['String']>,
  categoryId?: Maybe<Scalars['UUID']>,
  supplierInvoiceId?: Maybe<Scalars['UUID']>,
  tripId?: Maybe<Scalars['UUID']>,
  invoiceToInvoiceId?: Maybe<FkExpenseInvoiceInvoiceIdInput>,
  supplierToSupplierId?: Maybe<FkExpenseSupplierSupplierIdInput>,
  financeCategoryToCategoryId?: Maybe<FkExpenseFinanceCategoryCategoryIdInput>,
  supplierInvoiceToSupplierInvoiceId?: Maybe<FkExpenseSupplierInvoiceSupplierInvoiceIdInput>,
  tripToTripId?: Maybe<FkExpenseTripTripIdInput>,
  transactionLinksUsingId?: Maybe<FkTransactionLinkExpenseExpenseIdInverseInput>,
};

export type UpdateExpenseOnExpenseForFkExpenseTripTripIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  amount?: Maybe<Scalars['BigFloat']>,
  amountActual?: Maybe<Scalars['BigFloat']>,
  created?: Maybe<Scalars['Datetime']>,
  currency?: Maybe<Scalars['String']>,
  invoiceId?: Maybe<Scalars['UUID']>,
  modified?: Maybe<Scalars['Datetime']>,
  paid?: Maybe<Scalars['Datetime']>,
  summary?: Maybe<Scalars['String']>,
  supplierId?: Maybe<Scalars['UUID']>,
  reference?: Maybe<Scalars['String']>,
  categoryId?: Maybe<Scalars['UUID']>,
  supplierInvoiceId?: Maybe<Scalars['UUID']>,
  invoiceToInvoiceId?: Maybe<FkExpenseInvoiceInvoiceIdInput>,
  supplierToSupplierId?: Maybe<FkExpenseSupplierSupplierIdInput>,
  financeCategoryToCategoryId?: Maybe<FkExpenseFinanceCategoryCategoryIdInput>,
  supplierInvoiceToSupplierInvoiceId?: Maybe<FkExpenseSupplierInvoiceSupplierInvoiceIdInput>,
  tripToTripId?: Maybe<FkExpenseTripTripIdInput>,
  transactionLinksUsingId?: Maybe<FkTransactionLinkExpenseExpenseIdInverseInput>,
};

export type UpdateExpenseOnTransactionLinkForFkTransactionLinkExpenseExpenseIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  amount?: Maybe<Scalars['BigFloat']>,
  amountActual?: Maybe<Scalars['BigFloat']>,
  created?: Maybe<Scalars['Datetime']>,
  currency?: Maybe<Scalars['String']>,
  invoiceId?: Maybe<Scalars['UUID']>,
  modified?: Maybe<Scalars['Datetime']>,
  paid?: Maybe<Scalars['Datetime']>,
  summary?: Maybe<Scalars['String']>,
  supplierId?: Maybe<Scalars['UUID']>,
  reference?: Maybe<Scalars['String']>,
  categoryId?: Maybe<Scalars['UUID']>,
  supplierInvoiceId?: Maybe<Scalars['UUID']>,
  tripId?: Maybe<Scalars['UUID']>,
  invoiceToInvoiceId?: Maybe<FkExpenseInvoiceInvoiceIdInput>,
  supplierToSupplierId?: Maybe<FkExpenseSupplierSupplierIdInput>,
  financeCategoryToCategoryId?: Maybe<FkExpenseFinanceCategoryCategoryIdInput>,
  supplierInvoiceToSupplierInvoiceId?: Maybe<FkExpenseSupplierInvoiceSupplierInvoiceIdInput>,
  tripToTripId?: Maybe<FkExpenseTripTripIdInput>,
  transactionLinksUsingId?: Maybe<FkTransactionLinkExpenseExpenseIdInverseInput>,
};

export type UpdateExpensePayload = {
   __typename?: 'UpdateExpensePayload',
  clientMutationId?: Maybe<Scalars['String']>,
  expense?: Maybe<Expense>,
  query?: Maybe<Query>,
  invoice?: Maybe<Invoice>,
  supplier?: Maybe<Supplier>,
  category?: Maybe<FinanceCategory>,
  supplierInvoice?: Maybe<SupplierInvoice>,
  trip?: Maybe<Trip>,
  expenseEdge?: Maybe<ExpensesEdge>,
};


export type UpdateExpensePayloadExpenseEdgeArgs = {
  orderBy?: Maybe<Array<ExpensesOrderBy>>
};

export type UpdateFeatureByNodeIdInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
  patch: FeaturePatch,
};

export type UpdateFeatureInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  patch: FeaturePatch,
  id: Scalars['UUID'],
};

export type UpdateFeatureOnFeatureForFkFeatureMediaGalleryGalleryIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  body?: Maybe<Scalars['String']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  mediaGalleryToGalleryId?: Maybe<FkFeatureMediaGalleryGalleryIdInput>,
};

export type UpdateFeaturePayload = {
   __typename?: 'UpdateFeaturePayload',
  clientMutationId?: Maybe<Scalars['String']>,
  feature?: Maybe<Feature>,
  query?: Maybe<Query>,
  gallery?: Maybe<MediaGallery>,
  featureEdge?: Maybe<FeaturesEdge>,
};


export type UpdateFeaturePayloadFeatureEdgeArgs = {
  orderBy?: Maybe<Array<FeaturesOrderBy>>
};

export type UpdateFinanceCategoryByNodeIdInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
  patch: FinanceCategoryPatch,
};

export type UpdateFinanceCategoryInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  patch: FinanceCategoryPatch,
  id: Scalars['UUID'],
};

export type UpdateFinanceCategoryOnExpenseForFkExpenseFinanceCategoryCategoryIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['Int']>,
  code?: Maybe<Scalars['String']>,
  expensesUsingId?: Maybe<FkExpenseFinanceCategoryCategoryIdInverseInput>,
  invoicesUsingId?: Maybe<FkInvoiceFinanceCategoryCategoryIdInverseInput>,
  paymentsUsingId?: Maybe<FkPaymentFinanceCategoryCategoryIdInverseInput>,
  supplierInvoicesUsingId?: Maybe<FkSupplierInvoiceFinanceCategoryCategoryIdInverseInput>,
  transactionsUsingId?: Maybe<FkTransactionFinanceCategoryCategoryIdInverseInput>,
};

export type UpdateFinanceCategoryOnInvoiceForFkInvoiceFinanceCategoryCategoryIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['Int']>,
  code?: Maybe<Scalars['String']>,
  expensesUsingId?: Maybe<FkExpenseFinanceCategoryCategoryIdInverseInput>,
  invoicesUsingId?: Maybe<FkInvoiceFinanceCategoryCategoryIdInverseInput>,
  paymentsUsingId?: Maybe<FkPaymentFinanceCategoryCategoryIdInverseInput>,
  supplierInvoicesUsingId?: Maybe<FkSupplierInvoiceFinanceCategoryCategoryIdInverseInput>,
  transactionsUsingId?: Maybe<FkTransactionFinanceCategoryCategoryIdInverseInput>,
};

export type UpdateFinanceCategoryOnPaymentForFkPaymentFinanceCategoryCategoryIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['Int']>,
  code?: Maybe<Scalars['String']>,
  expensesUsingId?: Maybe<FkExpenseFinanceCategoryCategoryIdInverseInput>,
  invoicesUsingId?: Maybe<FkInvoiceFinanceCategoryCategoryIdInverseInput>,
  paymentsUsingId?: Maybe<FkPaymentFinanceCategoryCategoryIdInverseInput>,
  supplierInvoicesUsingId?: Maybe<FkSupplierInvoiceFinanceCategoryCategoryIdInverseInput>,
  transactionsUsingId?: Maybe<FkTransactionFinanceCategoryCategoryIdInverseInput>,
};

export type UpdateFinanceCategoryOnSupplierInvoiceForFkSupplierInvoiceFinanceCategoryCategoryIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['Int']>,
  code?: Maybe<Scalars['String']>,
  expensesUsingId?: Maybe<FkExpenseFinanceCategoryCategoryIdInverseInput>,
  invoicesUsingId?: Maybe<FkInvoiceFinanceCategoryCategoryIdInverseInput>,
  paymentsUsingId?: Maybe<FkPaymentFinanceCategoryCategoryIdInverseInput>,
  supplierInvoicesUsingId?: Maybe<FkSupplierInvoiceFinanceCategoryCategoryIdInverseInput>,
  transactionsUsingId?: Maybe<FkTransactionFinanceCategoryCategoryIdInverseInput>,
};

export type UpdateFinanceCategoryOnTransactionForFkTransactionFinanceCategoryCategoryIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['Int']>,
  code?: Maybe<Scalars['String']>,
  expensesUsingId?: Maybe<FkExpenseFinanceCategoryCategoryIdInverseInput>,
  invoicesUsingId?: Maybe<FkInvoiceFinanceCategoryCategoryIdInverseInput>,
  paymentsUsingId?: Maybe<FkPaymentFinanceCategoryCategoryIdInverseInput>,
  supplierInvoicesUsingId?: Maybe<FkSupplierInvoiceFinanceCategoryCategoryIdInverseInput>,
  transactionsUsingId?: Maybe<FkTransactionFinanceCategoryCategoryIdInverseInput>,
};

export type UpdateFinanceCategoryPayload = {
   __typename?: 'UpdateFinanceCategoryPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  financeCategory?: Maybe<FinanceCategory>,
  query?: Maybe<Query>,
  financeCategoryEdge?: Maybe<FinanceCategoriesEdge>,
};


export type UpdateFinanceCategoryPayloadFinanceCategoryEdgeArgs = {
  orderBy?: Maybe<Array<FinanceCategoriesOrderBy>>
};

export type UpdateInvoiceByNodeIdInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
  patch: InvoicePatch,
};

export type UpdateInvoiceInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  patch: InvoicePatch,
  id: Scalars['UUID'],
};

export type UpdateInvoiceOnExpenseForFkExpenseInvoiceInvoiceIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  amount?: Maybe<Scalars['BigFloat']>,
  created?: Maybe<Scalars['Datetime']>,
  currency?: Maybe<Scalars['String']>,
  due?: Maybe<Scalars['Datetime']>,
  key?: Maybe<Scalars['String']>,
  modified?: Maybe<Scalars['Datetime']>,
  summary?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>,
  number?: Maybe<Scalars['Int']>,
  quoteId?: Maybe<Scalars['UUID']>,
  voided?: Maybe<Scalars['Datetime']>,
  categoryId?: Maybe<Scalars['UUID']>,
  tripId?: Maybe<Scalars['UUID']>,
  paid?: Maybe<Scalars['Datetime']>,
  note?: Maybe<Scalars['String']>,
  invoiced?: Maybe<Scalars['Datetime']>,
  locked?: Maybe<Scalars['Datetime']>,
  quoteToQuoteId?: Maybe<FkInvoiceQuoteQuoteIdInput>,
  financeCategoryToCategoryId?: Maybe<FkInvoiceFinanceCategoryCategoryIdInput>,
  tripToTripId?: Maybe<FkInvoiceTripTripIdInput>,
  expensesUsingId?: Maybe<FkExpenseInvoiceInvoiceIdInverseInput>,
  paymentsUsingId?: Maybe<FkPaymentInvoiceInvoiceIdInverseInput>,
  transactionLinksUsingId?: Maybe<FkTransactionLinkInvoiceInvoiceIdInverseInput>,
};

export type UpdateInvoiceOnInvoiceForFkInvoiceFinanceCategoryCategoryIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  amount?: Maybe<Scalars['BigFloat']>,
  created?: Maybe<Scalars['Datetime']>,
  currency?: Maybe<Scalars['String']>,
  due?: Maybe<Scalars['Datetime']>,
  key?: Maybe<Scalars['String']>,
  modified?: Maybe<Scalars['Datetime']>,
  summary?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>,
  number?: Maybe<Scalars['Int']>,
  quoteId?: Maybe<Scalars['UUID']>,
  voided?: Maybe<Scalars['Datetime']>,
  tripId?: Maybe<Scalars['UUID']>,
  paid?: Maybe<Scalars['Datetime']>,
  note?: Maybe<Scalars['String']>,
  invoiced?: Maybe<Scalars['Datetime']>,
  locked?: Maybe<Scalars['Datetime']>,
  quoteToQuoteId?: Maybe<FkInvoiceQuoteQuoteIdInput>,
  financeCategoryToCategoryId?: Maybe<FkInvoiceFinanceCategoryCategoryIdInput>,
  tripToTripId?: Maybe<FkInvoiceTripTripIdInput>,
  expensesUsingId?: Maybe<FkExpenseInvoiceInvoiceIdInverseInput>,
  paymentsUsingId?: Maybe<FkPaymentInvoiceInvoiceIdInverseInput>,
  transactionLinksUsingId?: Maybe<FkTransactionLinkInvoiceInvoiceIdInverseInput>,
};

export type UpdateInvoiceOnInvoiceForFkInvoiceQuoteQuoteIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  amount?: Maybe<Scalars['BigFloat']>,
  created?: Maybe<Scalars['Datetime']>,
  currency?: Maybe<Scalars['String']>,
  due?: Maybe<Scalars['Datetime']>,
  key?: Maybe<Scalars['String']>,
  modified?: Maybe<Scalars['Datetime']>,
  summary?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>,
  number?: Maybe<Scalars['Int']>,
  voided?: Maybe<Scalars['Datetime']>,
  categoryId?: Maybe<Scalars['UUID']>,
  tripId?: Maybe<Scalars['UUID']>,
  paid?: Maybe<Scalars['Datetime']>,
  note?: Maybe<Scalars['String']>,
  invoiced?: Maybe<Scalars['Datetime']>,
  locked?: Maybe<Scalars['Datetime']>,
  quoteToQuoteId?: Maybe<FkInvoiceQuoteQuoteIdInput>,
  financeCategoryToCategoryId?: Maybe<FkInvoiceFinanceCategoryCategoryIdInput>,
  tripToTripId?: Maybe<FkInvoiceTripTripIdInput>,
  expensesUsingId?: Maybe<FkExpenseInvoiceInvoiceIdInverseInput>,
  paymentsUsingId?: Maybe<FkPaymentInvoiceInvoiceIdInverseInput>,
  transactionLinksUsingId?: Maybe<FkTransactionLinkInvoiceInvoiceIdInverseInput>,
};

export type UpdateInvoiceOnInvoiceForFkInvoiceTripTripIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  amount?: Maybe<Scalars['BigFloat']>,
  created?: Maybe<Scalars['Datetime']>,
  currency?: Maybe<Scalars['String']>,
  due?: Maybe<Scalars['Datetime']>,
  key?: Maybe<Scalars['String']>,
  modified?: Maybe<Scalars['Datetime']>,
  summary?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>,
  number?: Maybe<Scalars['Int']>,
  quoteId?: Maybe<Scalars['UUID']>,
  voided?: Maybe<Scalars['Datetime']>,
  categoryId?: Maybe<Scalars['UUID']>,
  paid?: Maybe<Scalars['Datetime']>,
  note?: Maybe<Scalars['String']>,
  invoiced?: Maybe<Scalars['Datetime']>,
  locked?: Maybe<Scalars['Datetime']>,
  quoteToQuoteId?: Maybe<FkInvoiceQuoteQuoteIdInput>,
  financeCategoryToCategoryId?: Maybe<FkInvoiceFinanceCategoryCategoryIdInput>,
  tripToTripId?: Maybe<FkInvoiceTripTripIdInput>,
  expensesUsingId?: Maybe<FkExpenseInvoiceInvoiceIdInverseInput>,
  paymentsUsingId?: Maybe<FkPaymentInvoiceInvoiceIdInverseInput>,
  transactionLinksUsingId?: Maybe<FkTransactionLinkInvoiceInvoiceIdInverseInput>,
};

export type UpdateInvoiceOnPaymentForFkPaymentInvoiceInvoiceIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  amount?: Maybe<Scalars['BigFloat']>,
  created?: Maybe<Scalars['Datetime']>,
  currency?: Maybe<Scalars['String']>,
  due?: Maybe<Scalars['Datetime']>,
  key?: Maybe<Scalars['String']>,
  modified?: Maybe<Scalars['Datetime']>,
  summary?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>,
  number?: Maybe<Scalars['Int']>,
  quoteId?: Maybe<Scalars['UUID']>,
  voided?: Maybe<Scalars['Datetime']>,
  categoryId?: Maybe<Scalars['UUID']>,
  tripId?: Maybe<Scalars['UUID']>,
  paid?: Maybe<Scalars['Datetime']>,
  note?: Maybe<Scalars['String']>,
  invoiced?: Maybe<Scalars['Datetime']>,
  locked?: Maybe<Scalars['Datetime']>,
  quoteToQuoteId?: Maybe<FkInvoiceQuoteQuoteIdInput>,
  financeCategoryToCategoryId?: Maybe<FkInvoiceFinanceCategoryCategoryIdInput>,
  tripToTripId?: Maybe<FkInvoiceTripTripIdInput>,
  expensesUsingId?: Maybe<FkExpenseInvoiceInvoiceIdInverseInput>,
  paymentsUsingId?: Maybe<FkPaymentInvoiceInvoiceIdInverseInput>,
  transactionLinksUsingId?: Maybe<FkTransactionLinkInvoiceInvoiceIdInverseInput>,
};

export type UpdateInvoiceOnTransactionLinkForFkTransactionLinkInvoiceInvoiceIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  amount?: Maybe<Scalars['BigFloat']>,
  created?: Maybe<Scalars['Datetime']>,
  currency?: Maybe<Scalars['String']>,
  due?: Maybe<Scalars['Datetime']>,
  key?: Maybe<Scalars['String']>,
  modified?: Maybe<Scalars['Datetime']>,
  summary?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>,
  number?: Maybe<Scalars['Int']>,
  quoteId?: Maybe<Scalars['UUID']>,
  voided?: Maybe<Scalars['Datetime']>,
  categoryId?: Maybe<Scalars['UUID']>,
  tripId?: Maybe<Scalars['UUID']>,
  paid?: Maybe<Scalars['Datetime']>,
  note?: Maybe<Scalars['String']>,
  invoiced?: Maybe<Scalars['Datetime']>,
  locked?: Maybe<Scalars['Datetime']>,
  quoteToQuoteId?: Maybe<FkInvoiceQuoteQuoteIdInput>,
  financeCategoryToCategoryId?: Maybe<FkInvoiceFinanceCategoryCategoryIdInput>,
  tripToTripId?: Maybe<FkInvoiceTripTripIdInput>,
  expensesUsingId?: Maybe<FkExpenseInvoiceInvoiceIdInverseInput>,
  paymentsUsingId?: Maybe<FkPaymentInvoiceInvoiceIdInverseInput>,
  transactionLinksUsingId?: Maybe<FkTransactionLinkInvoiceInvoiceIdInverseInput>,
};

export type UpdateInvoicePayload = {
   __typename?: 'UpdateInvoicePayload',
  clientMutationId?: Maybe<Scalars['String']>,
  invoice?: Maybe<Invoice>,
  query?: Maybe<Query>,
  quote?: Maybe<Quote>,
  category?: Maybe<FinanceCategory>,
  trip?: Maybe<Trip>,
  invoiceEdge?: Maybe<InvoicesEdge>,
};


export type UpdateInvoicePayloadInvoiceEdgeArgs = {
  orderBy?: Maybe<Array<InvoicesOrderBy>>
};

export type UpdateMapPointByNodeIdInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
  patch: MapPointPatch,
};

export type UpdateMapPointInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  patch: MapPointPatch,
  id: Scalars['UUID'],
};

export type UpdateMapPointOnPropertyForFkPropertyMapPointMapPointIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  latitude?: Maybe<Scalars['Float']>,
  longitude?: Maybe<Scalars['Float']>,
  propertiesUsingId?: Maybe<FkPropertyMapPointMapPointIdInverseInput>,
};

export type UpdateMapPointPayload = {
   __typename?: 'UpdateMapPointPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  mapPoint?: Maybe<MapPoint>,
  query?: Maybe<Query>,
  mapPointEdge?: Maybe<MapPointsEdge>,
};


export type UpdateMapPointPayloadMapPointEdgeArgs = {
  orderBy?: Maybe<Array<MapPointsOrderBy>>
};

export type UpdateMediaGalleryByNodeIdInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
  patch: MediaGalleryPatch,
};

export type UpdateMediaGalleryInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  patch: MediaGalleryPatch,
  id: Scalars['UUID'],
};

export type UpdateMediaGalleryItemByNodeIdInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
  patch: MediaGalleryItemPatch,
};

export type UpdateMediaGalleryItemInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  patch: MediaGalleryItemPatch,
  id: Scalars['UUID'],
};

export type UpdateMediaGalleryItemOnMediaGalleryItemForFkMediaGalleryItemMediaGalleryMediaGalleryIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  mediaItemId?: Maybe<Scalars['UUID']>,
  modified?: Maybe<Scalars['Datetime']>,
  isHero?: Maybe<Scalars['Boolean']>,
  mediaGalleryToMediaGalleryId?: Maybe<FkMediaGalleryItemMediaGalleryMediaGalleryIdInput>,
  mediaItemToMediaItemId?: Maybe<FkMediaGalleryItemMediaItemMediaItemIdInput>,
};

export type UpdateMediaGalleryItemOnMediaGalleryItemForFkMediaGalleryItemMediaItemMediaItemIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  mediaGalleryId?: Maybe<Scalars['UUID']>,
  modified?: Maybe<Scalars['Datetime']>,
  isHero?: Maybe<Scalars['Boolean']>,
  mediaGalleryToMediaGalleryId?: Maybe<FkMediaGalleryItemMediaGalleryMediaGalleryIdInput>,
  mediaItemToMediaItemId?: Maybe<FkMediaGalleryItemMediaItemMediaItemIdInput>,
};

export type UpdateMediaGalleryItemPayload = {
   __typename?: 'UpdateMediaGalleryItemPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  mediaGalleryItem?: Maybe<MediaGalleryItem>,
  query?: Maybe<Query>,
  mediaGallery?: Maybe<MediaGallery>,
  mediaItem?: Maybe<MediaItem>,
  mediaGalleryItemEdge?: Maybe<MediaGalleryItemsEdge>,
};


export type UpdateMediaGalleryItemPayloadMediaGalleryItemEdgeArgs = {
  orderBy?: Maybe<Array<MediaGalleryItemsOrderBy>>
};

export type UpdateMediaGalleryOnDestinationFeatureForFkDestinationFeatureMediaGalleryGalleryIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  parentId?: Maybe<Scalars['UUID']>,
  isProtected?: Maybe<Scalars['Boolean']>,
  mediaGalleryToParentId?: Maybe<FkMediaGalleryMediaGalleryParentIdInput>,
  tripsUsingId?: Maybe<FkTripMediaGalleryMediaGalleryIdInverseInput>,
  destinationsUsingId?: Maybe<FkDestinationMediaGalleryGalleryIdInverseInput>,
  destinationFeaturesUsingId?: Maybe<FkDestinationFeatureMediaGalleryGalleryIdInverseInput>,
  featuresUsingId?: Maybe<FkFeatureMediaGalleryGalleryIdInverseInput>,
  mediaGalleryItemsUsingId?: Maybe<FkMediaGalleryItemMediaGalleryMediaGalleryIdInverseInput>,
  propertiesUsingId?: Maybe<FkPropertyMediaGalleryGalleryIdInverseInput>,
  suppliersUsingId?: Maybe<FkSupplierMediaGalleryGalleryIdInverseInput>,
};

export type UpdateMediaGalleryOnDestinationForFkDestinationMediaGalleryGalleryIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  parentId?: Maybe<Scalars['UUID']>,
  isProtected?: Maybe<Scalars['Boolean']>,
  mediaGalleryToParentId?: Maybe<FkMediaGalleryMediaGalleryParentIdInput>,
  tripsUsingId?: Maybe<FkTripMediaGalleryMediaGalleryIdInverseInput>,
  destinationsUsingId?: Maybe<FkDestinationMediaGalleryGalleryIdInverseInput>,
  destinationFeaturesUsingId?: Maybe<FkDestinationFeatureMediaGalleryGalleryIdInverseInput>,
  featuresUsingId?: Maybe<FkFeatureMediaGalleryGalleryIdInverseInput>,
  mediaGalleryItemsUsingId?: Maybe<FkMediaGalleryItemMediaGalleryMediaGalleryIdInverseInput>,
  propertiesUsingId?: Maybe<FkPropertyMediaGalleryGalleryIdInverseInput>,
  suppliersUsingId?: Maybe<FkSupplierMediaGalleryGalleryIdInverseInput>,
};

export type UpdateMediaGalleryOnFeatureForFkFeatureMediaGalleryGalleryIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  parentId?: Maybe<Scalars['UUID']>,
  isProtected?: Maybe<Scalars['Boolean']>,
  mediaGalleryToParentId?: Maybe<FkMediaGalleryMediaGalleryParentIdInput>,
  tripsUsingId?: Maybe<FkTripMediaGalleryMediaGalleryIdInverseInput>,
  destinationsUsingId?: Maybe<FkDestinationMediaGalleryGalleryIdInverseInput>,
  destinationFeaturesUsingId?: Maybe<FkDestinationFeatureMediaGalleryGalleryIdInverseInput>,
  featuresUsingId?: Maybe<FkFeatureMediaGalleryGalleryIdInverseInput>,
  mediaGalleryItemsUsingId?: Maybe<FkMediaGalleryItemMediaGalleryMediaGalleryIdInverseInput>,
  propertiesUsingId?: Maybe<FkPropertyMediaGalleryGalleryIdInverseInput>,
  suppliersUsingId?: Maybe<FkSupplierMediaGalleryGalleryIdInverseInput>,
};

export type UpdateMediaGalleryOnMediaGalleryForFkMediaGalleryMediaGalleryParentIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  isProtected?: Maybe<Scalars['Boolean']>,
  mediaGalleryToParentId?: Maybe<FkMediaGalleryMediaGalleryParentIdInput>,
  tripsUsingId?: Maybe<FkTripMediaGalleryMediaGalleryIdInverseInput>,
  destinationsUsingId?: Maybe<FkDestinationMediaGalleryGalleryIdInverseInput>,
  destinationFeaturesUsingId?: Maybe<FkDestinationFeatureMediaGalleryGalleryIdInverseInput>,
  featuresUsingId?: Maybe<FkFeatureMediaGalleryGalleryIdInverseInput>,
  mediaGalleryItemsUsingId?: Maybe<FkMediaGalleryItemMediaGalleryMediaGalleryIdInverseInput>,
  propertiesUsingId?: Maybe<FkPropertyMediaGalleryGalleryIdInverseInput>,
  suppliersUsingId?: Maybe<FkSupplierMediaGalleryGalleryIdInverseInput>,
};

export type UpdateMediaGalleryOnMediaGalleryItemForFkMediaGalleryItemMediaGalleryMediaGalleryIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  parentId?: Maybe<Scalars['UUID']>,
  isProtected?: Maybe<Scalars['Boolean']>,
  mediaGalleryToParentId?: Maybe<FkMediaGalleryMediaGalleryParentIdInput>,
  tripsUsingId?: Maybe<FkTripMediaGalleryMediaGalleryIdInverseInput>,
  destinationsUsingId?: Maybe<FkDestinationMediaGalleryGalleryIdInverseInput>,
  destinationFeaturesUsingId?: Maybe<FkDestinationFeatureMediaGalleryGalleryIdInverseInput>,
  featuresUsingId?: Maybe<FkFeatureMediaGalleryGalleryIdInverseInput>,
  mediaGalleryItemsUsingId?: Maybe<FkMediaGalleryItemMediaGalleryMediaGalleryIdInverseInput>,
  propertiesUsingId?: Maybe<FkPropertyMediaGalleryGalleryIdInverseInput>,
  suppliersUsingId?: Maybe<FkSupplierMediaGalleryGalleryIdInverseInput>,
};

export type UpdateMediaGalleryOnPropertyForFkPropertyMediaGalleryGalleryIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  parentId?: Maybe<Scalars['UUID']>,
  isProtected?: Maybe<Scalars['Boolean']>,
  mediaGalleryToParentId?: Maybe<FkMediaGalleryMediaGalleryParentIdInput>,
  tripsUsingId?: Maybe<FkTripMediaGalleryMediaGalleryIdInverseInput>,
  destinationsUsingId?: Maybe<FkDestinationMediaGalleryGalleryIdInverseInput>,
  destinationFeaturesUsingId?: Maybe<FkDestinationFeatureMediaGalleryGalleryIdInverseInput>,
  featuresUsingId?: Maybe<FkFeatureMediaGalleryGalleryIdInverseInput>,
  mediaGalleryItemsUsingId?: Maybe<FkMediaGalleryItemMediaGalleryMediaGalleryIdInverseInput>,
  propertiesUsingId?: Maybe<FkPropertyMediaGalleryGalleryIdInverseInput>,
  suppliersUsingId?: Maybe<FkSupplierMediaGalleryGalleryIdInverseInput>,
};

export type UpdateMediaGalleryOnSupplierForFkSupplierMediaGalleryGalleryIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  parentId?: Maybe<Scalars['UUID']>,
  isProtected?: Maybe<Scalars['Boolean']>,
  mediaGalleryToParentId?: Maybe<FkMediaGalleryMediaGalleryParentIdInput>,
  tripsUsingId?: Maybe<FkTripMediaGalleryMediaGalleryIdInverseInput>,
  destinationsUsingId?: Maybe<FkDestinationMediaGalleryGalleryIdInverseInput>,
  destinationFeaturesUsingId?: Maybe<FkDestinationFeatureMediaGalleryGalleryIdInverseInput>,
  featuresUsingId?: Maybe<FkFeatureMediaGalleryGalleryIdInverseInput>,
  mediaGalleryItemsUsingId?: Maybe<FkMediaGalleryItemMediaGalleryMediaGalleryIdInverseInput>,
  propertiesUsingId?: Maybe<FkPropertyMediaGalleryGalleryIdInverseInput>,
  suppliersUsingId?: Maybe<FkSupplierMediaGalleryGalleryIdInverseInput>,
};

export type UpdateMediaGalleryOnTripForFkTripMediaGalleryMediaGalleryIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  parentId?: Maybe<Scalars['UUID']>,
  isProtected?: Maybe<Scalars['Boolean']>,
  mediaGalleryToParentId?: Maybe<FkMediaGalleryMediaGalleryParentIdInput>,
  tripsUsingId?: Maybe<FkTripMediaGalleryMediaGalleryIdInverseInput>,
  destinationsUsingId?: Maybe<FkDestinationMediaGalleryGalleryIdInverseInput>,
  destinationFeaturesUsingId?: Maybe<FkDestinationFeatureMediaGalleryGalleryIdInverseInput>,
  featuresUsingId?: Maybe<FkFeatureMediaGalleryGalleryIdInverseInput>,
  mediaGalleryItemsUsingId?: Maybe<FkMediaGalleryItemMediaGalleryMediaGalleryIdInverseInput>,
  propertiesUsingId?: Maybe<FkPropertyMediaGalleryGalleryIdInverseInput>,
  suppliersUsingId?: Maybe<FkSupplierMediaGalleryGalleryIdInverseInput>,
};

export type UpdateMediaGalleryPayload = {
   __typename?: 'UpdateMediaGalleryPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  mediaGallery?: Maybe<MediaGallery>,
  query?: Maybe<Query>,
  parent?: Maybe<MediaGallery>,
  mediaGalleryEdge?: Maybe<MediaGalleriesEdge>,
};


export type UpdateMediaGalleryPayloadMediaGalleryEdgeArgs = {
  orderBy?: Maybe<Array<MediaGalleriesOrderBy>>
};

export type UpdateMediaItemByNodeIdInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
  patch: MediaItemPatch,
};

export type UpdateMediaItemInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  patch: MediaItemPatch,
  id: Scalars['UUID'],
};

export type UpdateMediaItemOnAgencyForFkAgencyMediaItemLogoIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  contentType?: Maybe<Scalars['String']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  fileName?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  hash?: Maybe<Scalars['String']>,
  agenciesUsingId?: Maybe<FkAgencyMediaItemLogoIdInverseInput>,
  supplierInvoicesUsingId?: Maybe<FkSupplierInvoiceMediaItemMediaItemIdInverseInput>,
  mediaGalleryItemsUsingId?: Maybe<FkMediaGalleryItemMediaItemMediaItemIdInverseInput>,
  propertiesUsingId?: Maybe<FkPropertyMediaItemHeroMediaIdInverseInput>,
  quotesUsingId?: Maybe<FkQuoteMediaItemHeroImageIdInverseInput>,
  quoteHeroesUsingId?: Maybe<FkQuoteHeroMediaItemImageIdInverseInput>,
};

export type UpdateMediaItemOnMediaGalleryItemForFkMediaGalleryItemMediaItemMediaItemIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  contentType?: Maybe<Scalars['String']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  fileName?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  hash?: Maybe<Scalars['String']>,
  agenciesUsingId?: Maybe<FkAgencyMediaItemLogoIdInverseInput>,
  supplierInvoicesUsingId?: Maybe<FkSupplierInvoiceMediaItemMediaItemIdInverseInput>,
  mediaGalleryItemsUsingId?: Maybe<FkMediaGalleryItemMediaItemMediaItemIdInverseInput>,
  propertiesUsingId?: Maybe<FkPropertyMediaItemHeroMediaIdInverseInput>,
  quotesUsingId?: Maybe<FkQuoteMediaItemHeroImageIdInverseInput>,
  quoteHeroesUsingId?: Maybe<FkQuoteHeroMediaItemImageIdInverseInput>,
};

export type UpdateMediaItemOnPropertyForFkPropertyMediaItemHeroMediaIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  contentType?: Maybe<Scalars['String']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  fileName?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  hash?: Maybe<Scalars['String']>,
  agenciesUsingId?: Maybe<FkAgencyMediaItemLogoIdInverseInput>,
  supplierInvoicesUsingId?: Maybe<FkSupplierInvoiceMediaItemMediaItemIdInverseInput>,
  mediaGalleryItemsUsingId?: Maybe<FkMediaGalleryItemMediaItemMediaItemIdInverseInput>,
  propertiesUsingId?: Maybe<FkPropertyMediaItemHeroMediaIdInverseInput>,
  quotesUsingId?: Maybe<FkQuoteMediaItemHeroImageIdInverseInput>,
  quoteHeroesUsingId?: Maybe<FkQuoteHeroMediaItemImageIdInverseInput>,
};

export type UpdateMediaItemOnQuoteForFkQuoteMediaItemHeroImageIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  contentType?: Maybe<Scalars['String']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  fileName?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  hash?: Maybe<Scalars['String']>,
  agenciesUsingId?: Maybe<FkAgencyMediaItemLogoIdInverseInput>,
  supplierInvoicesUsingId?: Maybe<FkSupplierInvoiceMediaItemMediaItemIdInverseInput>,
  mediaGalleryItemsUsingId?: Maybe<FkMediaGalleryItemMediaItemMediaItemIdInverseInput>,
  propertiesUsingId?: Maybe<FkPropertyMediaItemHeroMediaIdInverseInput>,
  quotesUsingId?: Maybe<FkQuoteMediaItemHeroImageIdInverseInput>,
  quoteHeroesUsingId?: Maybe<FkQuoteHeroMediaItemImageIdInverseInput>,
};

export type UpdateMediaItemOnQuoteHeroForFkQuoteHeroMediaItemImageIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  contentType?: Maybe<Scalars['String']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  fileName?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  hash?: Maybe<Scalars['String']>,
  agenciesUsingId?: Maybe<FkAgencyMediaItemLogoIdInverseInput>,
  supplierInvoicesUsingId?: Maybe<FkSupplierInvoiceMediaItemMediaItemIdInverseInput>,
  mediaGalleryItemsUsingId?: Maybe<FkMediaGalleryItemMediaItemMediaItemIdInverseInput>,
  propertiesUsingId?: Maybe<FkPropertyMediaItemHeroMediaIdInverseInput>,
  quotesUsingId?: Maybe<FkQuoteMediaItemHeroImageIdInverseInput>,
  quoteHeroesUsingId?: Maybe<FkQuoteHeroMediaItemImageIdInverseInput>,
};

export type UpdateMediaItemOnSupplierInvoiceForFkSupplierInvoiceMediaItemMediaItemIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  contentType?: Maybe<Scalars['String']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  fileName?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  hash?: Maybe<Scalars['String']>,
  agenciesUsingId?: Maybe<FkAgencyMediaItemLogoIdInverseInput>,
  supplierInvoicesUsingId?: Maybe<FkSupplierInvoiceMediaItemMediaItemIdInverseInput>,
  mediaGalleryItemsUsingId?: Maybe<FkMediaGalleryItemMediaItemMediaItemIdInverseInput>,
  propertiesUsingId?: Maybe<FkPropertyMediaItemHeroMediaIdInverseInput>,
  quotesUsingId?: Maybe<FkQuoteMediaItemHeroImageIdInverseInput>,
  quoteHeroesUsingId?: Maybe<FkQuoteHeroMediaItemImageIdInverseInput>,
};

export type UpdateMediaItemPayload = {
   __typename?: 'UpdateMediaItemPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  mediaItem?: Maybe<MediaItem>,
  query?: Maybe<Query>,
  mediaItemEdge?: Maybe<MediaItemsEdge>,
};


export type UpdateMediaItemPayloadMediaItemEdgeArgs = {
  orderBy?: Maybe<Array<MediaItemsOrderBy>>
};

export type UpdateNoteByNodeIdInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
  patch: NotePatch,
};

export type UpdateNoteInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  patch: NotePatch,
  id: Scalars['UUID'],
};

export type UpdateNoteOnNoteForFkNoteTripTripIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  body?: Maybe<Scalars['String']>,
  created?: Maybe<Scalars['Datetime']>,
  userId?: Maybe<Scalars['UUID']>,
  modified?: Maybe<Scalars['Datetime']>,
  title?: Maybe<Scalars['String']>,
  tripToTripId?: Maybe<FkNoteTripTripIdInput>,
  userToUserId?: Maybe<FkNoteUserUserIdInput>,
};

export type UpdateNoteOnNoteForFkNoteUserUserIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  body?: Maybe<Scalars['String']>,
  created?: Maybe<Scalars['Datetime']>,
  tripId?: Maybe<Scalars['UUID']>,
  modified?: Maybe<Scalars['Datetime']>,
  title?: Maybe<Scalars['String']>,
  tripToTripId?: Maybe<FkNoteTripTripIdInput>,
  userToUserId?: Maybe<FkNoteUserUserIdInput>,
};

export type UpdateNotePayload = {
   __typename?: 'UpdateNotePayload',
  clientMutationId?: Maybe<Scalars['String']>,
  note?: Maybe<Note>,
  query?: Maybe<Query>,
  trip?: Maybe<Trip>,
  user?: Maybe<User>,
  noteEdge?: Maybe<NotesEdge>,
};


export type UpdateNotePayloadNoteEdgeArgs = {
  orderBy?: Maybe<Array<NotesOrderBy>>
};

export type UpdatePassportByNodeIdInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
  patch: PassportPatch,
};

export type UpdatePassportInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  patch: PassportPatch,
  id: Scalars['UUID'],
};

export type UpdatePassportOnPassportForFkPassportTravellerTravellerIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  countryOfIssue?: Maybe<Scalars['String']>,
  created?: Maybe<Scalars['Datetime']>,
  expiry?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  number?: Maybe<Scalars['String']>,
  travellerToTravellerId?: Maybe<FkPassportTravellerTravellerIdInput>,
};

export type UpdatePassportPayload = {
   __typename?: 'UpdatePassportPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  passport?: Maybe<Passport>,
  query?: Maybe<Query>,
  traveller?: Maybe<Traveller>,
  passportEdge?: Maybe<PassportsEdge>,
};


export type UpdatePassportPayloadPassportEdgeArgs = {
  orderBy?: Maybe<Array<PassportsOrderBy>>
};

export type UpdatePaymentByNodeIdInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
  patch: PaymentPatch,
};

export type UpdatePaymentInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  patch: PaymentPatch,
  id: Scalars['UUID'],
};

export type UpdatePaymentOnPaymentForFkPaymentFinanceCategoryCategoryIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  amount?: Maybe<Scalars['BigFloat']>,
  amountActual?: Maybe<Scalars['BigFloat']>,
  created?: Maybe<Scalars['Datetime']>,
  currency?: Maybe<Scalars['String']>,
  invoiceId?: Maybe<Scalars['UUID']>,
  modified?: Maybe<Scalars['Datetime']>,
  paid?: Maybe<Scalars['Datetime']>,
  reference?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  tripId?: Maybe<Scalars['UUID']>,
  type?: Maybe<Scalars['Int']>,
  invoiceToInvoiceId?: Maybe<FkPaymentInvoiceInvoiceIdInput>,
  financeCategoryToCategoryId?: Maybe<FkPaymentFinanceCategoryCategoryIdInput>,
  tripToTripId?: Maybe<FkPaymentTripTripIdInput>,
  transactionLinksUsingId?: Maybe<FkTransactionLinkPaymentPaymentIdInverseInput>,
};

export type UpdatePaymentOnPaymentForFkPaymentInvoiceInvoiceIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  amount?: Maybe<Scalars['BigFloat']>,
  amountActual?: Maybe<Scalars['BigFloat']>,
  created?: Maybe<Scalars['Datetime']>,
  currency?: Maybe<Scalars['String']>,
  modified?: Maybe<Scalars['Datetime']>,
  paid?: Maybe<Scalars['Datetime']>,
  reference?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  categoryId?: Maybe<Scalars['UUID']>,
  tripId?: Maybe<Scalars['UUID']>,
  type?: Maybe<Scalars['Int']>,
  invoiceToInvoiceId?: Maybe<FkPaymentInvoiceInvoiceIdInput>,
  financeCategoryToCategoryId?: Maybe<FkPaymentFinanceCategoryCategoryIdInput>,
  tripToTripId?: Maybe<FkPaymentTripTripIdInput>,
  transactionLinksUsingId?: Maybe<FkTransactionLinkPaymentPaymentIdInverseInput>,
};

export type UpdatePaymentOnPaymentForFkPaymentTripTripIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  amount?: Maybe<Scalars['BigFloat']>,
  amountActual?: Maybe<Scalars['BigFloat']>,
  created?: Maybe<Scalars['Datetime']>,
  currency?: Maybe<Scalars['String']>,
  invoiceId?: Maybe<Scalars['UUID']>,
  modified?: Maybe<Scalars['Datetime']>,
  paid?: Maybe<Scalars['Datetime']>,
  reference?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  categoryId?: Maybe<Scalars['UUID']>,
  type?: Maybe<Scalars['Int']>,
  invoiceToInvoiceId?: Maybe<FkPaymentInvoiceInvoiceIdInput>,
  financeCategoryToCategoryId?: Maybe<FkPaymentFinanceCategoryCategoryIdInput>,
  tripToTripId?: Maybe<FkPaymentTripTripIdInput>,
  transactionLinksUsingId?: Maybe<FkTransactionLinkPaymentPaymentIdInverseInput>,
};

export type UpdatePaymentOnTransactionLinkForFkTransactionLinkPaymentPaymentIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  amount?: Maybe<Scalars['BigFloat']>,
  amountActual?: Maybe<Scalars['BigFloat']>,
  created?: Maybe<Scalars['Datetime']>,
  currency?: Maybe<Scalars['String']>,
  invoiceId?: Maybe<Scalars['UUID']>,
  modified?: Maybe<Scalars['Datetime']>,
  paid?: Maybe<Scalars['Datetime']>,
  reference?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  categoryId?: Maybe<Scalars['UUID']>,
  tripId?: Maybe<Scalars['UUID']>,
  type?: Maybe<Scalars['Int']>,
  invoiceToInvoiceId?: Maybe<FkPaymentInvoiceInvoiceIdInput>,
  financeCategoryToCategoryId?: Maybe<FkPaymentFinanceCategoryCategoryIdInput>,
  tripToTripId?: Maybe<FkPaymentTripTripIdInput>,
  transactionLinksUsingId?: Maybe<FkTransactionLinkPaymentPaymentIdInverseInput>,
};

export type UpdatePaymentPayload = {
   __typename?: 'UpdatePaymentPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  payment?: Maybe<Payment>,
  query?: Maybe<Query>,
  invoice?: Maybe<Invoice>,
  category?: Maybe<FinanceCategory>,
  trip?: Maybe<Trip>,
  paymentEdge?: Maybe<PaymentsEdge>,
};


export type UpdatePaymentPayloadPaymentEdgeArgs = {
  orderBy?: Maybe<Array<PaymentsOrderBy>>
};

export type UpdatePropertyByNodeIdInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
  patch: PropertyPatch,
};

export type UpdatePropertyInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  patch: PropertyPatch,
  id: Scalars['UUID'],
};

export type UpdatePropertyOnPropertyForFkPropertyCountryCountryIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  city?: Maybe<Scalars['String']>,
  contactEmail?: Maybe<Scalars['String']>,
  contactNumber?: Maybe<Scalars['String']>,
  latitude?: Maybe<Scalars['Float']>,
  longitude?: Maybe<Scalars['Float']>,
  nearestAirport?: Maybe<Scalars['String']>,
  region?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  externalReference?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
  galleryId?: Maybe<Scalars['UUID']>,
  heroMediaId?: Maybe<Scalars['UUID']>,
  notes?: Maybe<Scalars['String']>,
  archived?: Maybe<Scalars['Datetime']>,
  mapPointId?: Maybe<Scalars['UUID']>,
  plusCode?: Maybe<Scalars['String']>,
  mediaGalleryToGalleryId?: Maybe<FkPropertyMediaGalleryGalleryIdInput>,
  mediaItemToHeroMediaId?: Maybe<FkPropertyMediaItemHeroMediaIdInput>,
  mapPointToMapPointId?: Maybe<FkPropertyMapPointMapPointIdInput>,
  countryToCountryId?: Maybe<FkPropertyCountryCountryIdInput>,
  quoteAccommodationDetailsUsingId?: Maybe<FkQuoteAccommodationDetailPropertyPropertyIdInverseInput>,
  quoteDaysUsingId?: Maybe<QuoteDayPropertyIdFkeyInverseInput>,
};

export type UpdatePropertyOnPropertyForFkPropertyMapPointMapPointIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  city?: Maybe<Scalars['String']>,
  contactEmail?: Maybe<Scalars['String']>,
  contactNumber?: Maybe<Scalars['String']>,
  latitude?: Maybe<Scalars['Float']>,
  longitude?: Maybe<Scalars['Float']>,
  nearestAirport?: Maybe<Scalars['String']>,
  region?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  externalReference?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
  galleryId?: Maybe<Scalars['UUID']>,
  heroMediaId?: Maybe<Scalars['UUID']>,
  notes?: Maybe<Scalars['String']>,
  archived?: Maybe<Scalars['Datetime']>,
  plusCode?: Maybe<Scalars['String']>,
  countryId?: Maybe<Scalars['UUID']>,
  mediaGalleryToGalleryId?: Maybe<FkPropertyMediaGalleryGalleryIdInput>,
  mediaItemToHeroMediaId?: Maybe<FkPropertyMediaItemHeroMediaIdInput>,
  mapPointToMapPointId?: Maybe<FkPropertyMapPointMapPointIdInput>,
  countryToCountryId?: Maybe<FkPropertyCountryCountryIdInput>,
  quoteAccommodationDetailsUsingId?: Maybe<FkQuoteAccommodationDetailPropertyPropertyIdInverseInput>,
  quoteDaysUsingId?: Maybe<QuoteDayPropertyIdFkeyInverseInput>,
};

export type UpdatePropertyOnPropertyForFkPropertyMediaGalleryGalleryIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  city?: Maybe<Scalars['String']>,
  contactEmail?: Maybe<Scalars['String']>,
  contactNumber?: Maybe<Scalars['String']>,
  latitude?: Maybe<Scalars['Float']>,
  longitude?: Maybe<Scalars['Float']>,
  nearestAirport?: Maybe<Scalars['String']>,
  region?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  externalReference?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
  heroMediaId?: Maybe<Scalars['UUID']>,
  notes?: Maybe<Scalars['String']>,
  archived?: Maybe<Scalars['Datetime']>,
  mapPointId?: Maybe<Scalars['UUID']>,
  plusCode?: Maybe<Scalars['String']>,
  countryId?: Maybe<Scalars['UUID']>,
  mediaGalleryToGalleryId?: Maybe<FkPropertyMediaGalleryGalleryIdInput>,
  mediaItemToHeroMediaId?: Maybe<FkPropertyMediaItemHeroMediaIdInput>,
  mapPointToMapPointId?: Maybe<FkPropertyMapPointMapPointIdInput>,
  countryToCountryId?: Maybe<FkPropertyCountryCountryIdInput>,
  quoteAccommodationDetailsUsingId?: Maybe<FkQuoteAccommodationDetailPropertyPropertyIdInverseInput>,
  quoteDaysUsingId?: Maybe<QuoteDayPropertyIdFkeyInverseInput>,
};

export type UpdatePropertyOnPropertyForFkPropertyMediaItemHeroMediaIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  city?: Maybe<Scalars['String']>,
  contactEmail?: Maybe<Scalars['String']>,
  contactNumber?: Maybe<Scalars['String']>,
  latitude?: Maybe<Scalars['Float']>,
  longitude?: Maybe<Scalars['Float']>,
  nearestAirport?: Maybe<Scalars['String']>,
  region?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  externalReference?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
  galleryId?: Maybe<Scalars['UUID']>,
  notes?: Maybe<Scalars['String']>,
  archived?: Maybe<Scalars['Datetime']>,
  mapPointId?: Maybe<Scalars['UUID']>,
  plusCode?: Maybe<Scalars['String']>,
  countryId?: Maybe<Scalars['UUID']>,
  mediaGalleryToGalleryId?: Maybe<FkPropertyMediaGalleryGalleryIdInput>,
  mediaItemToHeroMediaId?: Maybe<FkPropertyMediaItemHeroMediaIdInput>,
  mapPointToMapPointId?: Maybe<FkPropertyMapPointMapPointIdInput>,
  countryToCountryId?: Maybe<FkPropertyCountryCountryIdInput>,
  quoteAccommodationDetailsUsingId?: Maybe<FkQuoteAccommodationDetailPropertyPropertyIdInverseInput>,
  quoteDaysUsingId?: Maybe<QuoteDayPropertyIdFkeyInverseInput>,
};

export type UpdatePropertyOnQuoteAccommodationDetailForFkQuoteAccommodationDetailPropertyPropertyIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  city?: Maybe<Scalars['String']>,
  contactEmail?: Maybe<Scalars['String']>,
  contactNumber?: Maybe<Scalars['String']>,
  latitude?: Maybe<Scalars['Float']>,
  longitude?: Maybe<Scalars['Float']>,
  nearestAirport?: Maybe<Scalars['String']>,
  region?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  externalReference?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
  galleryId?: Maybe<Scalars['UUID']>,
  heroMediaId?: Maybe<Scalars['UUID']>,
  notes?: Maybe<Scalars['String']>,
  archived?: Maybe<Scalars['Datetime']>,
  mapPointId?: Maybe<Scalars['UUID']>,
  plusCode?: Maybe<Scalars['String']>,
  countryId?: Maybe<Scalars['UUID']>,
  mediaGalleryToGalleryId?: Maybe<FkPropertyMediaGalleryGalleryIdInput>,
  mediaItemToHeroMediaId?: Maybe<FkPropertyMediaItemHeroMediaIdInput>,
  mapPointToMapPointId?: Maybe<FkPropertyMapPointMapPointIdInput>,
  countryToCountryId?: Maybe<FkPropertyCountryCountryIdInput>,
  quoteAccommodationDetailsUsingId?: Maybe<FkQuoteAccommodationDetailPropertyPropertyIdInverseInput>,
  quoteDaysUsingId?: Maybe<QuoteDayPropertyIdFkeyInverseInput>,
};

export type UpdatePropertyOnQuoteDayForQuoteDayPropertyIdFkeyPatch = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  city?: Maybe<Scalars['String']>,
  contactEmail?: Maybe<Scalars['String']>,
  contactNumber?: Maybe<Scalars['String']>,
  latitude?: Maybe<Scalars['Float']>,
  longitude?: Maybe<Scalars['Float']>,
  nearestAirport?: Maybe<Scalars['String']>,
  region?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  externalReference?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
  galleryId?: Maybe<Scalars['UUID']>,
  heroMediaId?: Maybe<Scalars['UUID']>,
  notes?: Maybe<Scalars['String']>,
  archived?: Maybe<Scalars['Datetime']>,
  mapPointId?: Maybe<Scalars['UUID']>,
  plusCode?: Maybe<Scalars['String']>,
  countryId?: Maybe<Scalars['UUID']>,
  mediaGalleryToGalleryId?: Maybe<FkPropertyMediaGalleryGalleryIdInput>,
  mediaItemToHeroMediaId?: Maybe<FkPropertyMediaItemHeroMediaIdInput>,
  mapPointToMapPointId?: Maybe<FkPropertyMapPointMapPointIdInput>,
  countryToCountryId?: Maybe<FkPropertyCountryCountryIdInput>,
  quoteAccommodationDetailsUsingId?: Maybe<FkQuoteAccommodationDetailPropertyPropertyIdInverseInput>,
  quoteDaysUsingId?: Maybe<QuoteDayPropertyIdFkeyInverseInput>,
};

export type UpdatePropertyPayload = {
   __typename?: 'UpdatePropertyPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  property?: Maybe<Property>,
  query?: Maybe<Query>,
  gallery?: Maybe<MediaGallery>,
  heroMedia?: Maybe<MediaItem>,
  mapPoint?: Maybe<MapPoint>,
  country?: Maybe<Country>,
  propertyEdge?: Maybe<PropertiesEdge>,
};


export type UpdatePropertyPayloadPropertyEdgeArgs = {
  orderBy?: Maybe<Array<PropertiesOrderBy>>
};

export type UpdateQuoteAccommodationDetailByNodeIdInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
  patch: QuoteAccommodationDetailPatch,
};

export type UpdateQuoteAccommodationDetailInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  patch: QuoteAccommodationDetailPatch,
  id: Scalars['UUID'],
};

export type UpdateQuoteAccommodationDetailOnQuoteAccommodationDetailForFakePublicQuoteAccommodationDetailForeignKey0Patch = {
  id?: Maybe<Scalars['UUID']>,
  order?: Maybe<Scalars['Int']>,
  nights?: Maybe<Scalars['Int']>,
  notes?: Maybe<Scalars['String']>,
  propertyId?: Maybe<Scalars['UUID']>,
  basis?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  confirmation?: Maybe<Scalars['String']>,
  beverageInclusions?: Maybe<Array<Maybe<Scalars['String']>>>,
  foodInclusions?: Maybe<Array<Maybe<Scalars['String']>>>,
  roomType?: Maybe<Scalars['String']>,
  propertyToPropertyId?: Maybe<FkQuoteAccommodationDetailPropertyPropertyIdInput>,
  quoteToQuoteId?: Maybe<FkQuoteAccommodationDetailQuoteQuoteIdInput>,
  quotePublic?: Maybe<FakePublicQuoteAccommodationDetailForeignKey0Input>,
  quoteDaysUsingId?: Maybe<FkQuoteDayQuoteAccommodationDetailAccommodationIdInverseInput>,
};

export type UpdateQuoteAccommodationDetailOnQuoteAccommodationDetailForFkQuoteAccommodationDetailPropertyPropertyIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  order?: Maybe<Scalars['Int']>,
  nights?: Maybe<Scalars['Int']>,
  notes?: Maybe<Scalars['String']>,
  quoteId?: Maybe<Scalars['UUID']>,
  basis?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  confirmation?: Maybe<Scalars['String']>,
  beverageInclusions?: Maybe<Array<Maybe<Scalars['String']>>>,
  foodInclusions?: Maybe<Array<Maybe<Scalars['String']>>>,
  roomType?: Maybe<Scalars['String']>,
  propertyToPropertyId?: Maybe<FkQuoteAccommodationDetailPropertyPropertyIdInput>,
  quoteToQuoteId?: Maybe<FkQuoteAccommodationDetailQuoteQuoteIdInput>,
  quotePublic?: Maybe<FakePublicQuoteAccommodationDetailForeignKey0Input>,
  quoteDaysUsingId?: Maybe<FkQuoteDayQuoteAccommodationDetailAccommodationIdInverseInput>,
};

export type UpdateQuoteAccommodationDetailOnQuoteAccommodationDetailForFkQuoteAccommodationDetailQuoteQuoteIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  order?: Maybe<Scalars['Int']>,
  nights?: Maybe<Scalars['Int']>,
  notes?: Maybe<Scalars['String']>,
  propertyId?: Maybe<Scalars['UUID']>,
  basis?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  confirmation?: Maybe<Scalars['String']>,
  beverageInclusions?: Maybe<Array<Maybe<Scalars['String']>>>,
  foodInclusions?: Maybe<Array<Maybe<Scalars['String']>>>,
  roomType?: Maybe<Scalars['String']>,
  propertyToPropertyId?: Maybe<FkQuoteAccommodationDetailPropertyPropertyIdInput>,
  quoteToQuoteId?: Maybe<FkQuoteAccommodationDetailQuoteQuoteIdInput>,
  quotePublic?: Maybe<FakePublicQuoteAccommodationDetailForeignKey0Input>,
  quoteDaysUsingId?: Maybe<FkQuoteDayQuoteAccommodationDetailAccommodationIdInverseInput>,
};

export type UpdateQuoteAccommodationDetailOnQuoteDayForFkQuoteDayQuoteAccommodationDetailAccommodationIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  order?: Maybe<Scalars['Int']>,
  nights?: Maybe<Scalars['Int']>,
  notes?: Maybe<Scalars['String']>,
  propertyId?: Maybe<Scalars['UUID']>,
  quoteId?: Maybe<Scalars['UUID']>,
  basis?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  confirmation?: Maybe<Scalars['String']>,
  beverageInclusions?: Maybe<Array<Maybe<Scalars['String']>>>,
  foodInclusions?: Maybe<Array<Maybe<Scalars['String']>>>,
  roomType?: Maybe<Scalars['String']>,
  propertyToPropertyId?: Maybe<FkQuoteAccommodationDetailPropertyPropertyIdInput>,
  quoteToQuoteId?: Maybe<FkQuoteAccommodationDetailQuoteQuoteIdInput>,
  quotePublic?: Maybe<FakePublicQuoteAccommodationDetailForeignKey0Input>,
  quoteDaysUsingId?: Maybe<FkQuoteDayQuoteAccommodationDetailAccommodationIdInverseInput>,
};

export type UpdateQuoteAccommodationDetailPayload = {
   __typename?: 'UpdateQuoteAccommodationDetailPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  quoteAccommodationDetail?: Maybe<QuoteAccommodationDetail>,
  query?: Maybe<Query>,
  property?: Maybe<Property>,
  quote?: Maybe<Quote>,
  quotePublic?: Maybe<QuotePublic>,
  quoteAccommodationDetailEdge?: Maybe<QuoteAccommodationDetailsEdge>,
};


export type UpdateQuoteAccommodationDetailPayloadQuoteAccommodationDetailEdgeArgs = {
  orderBy?: Maybe<Array<QuoteAccommodationDetailsOrderBy>>
};

export type UpdateQuoteByNodeIdInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
  patch: QuotePatch,
};

export type UpdateQuoteCurrencyByNodeIdInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
  patch: QuoteCurrencyPatch,
};

export type UpdateQuoteCurrencyInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  patch: QuoteCurrencyPatch,
  id: Scalars['UUID'],
};

export type UpdateQuoteCurrencyOnQuoteCurrencyForFkQuoteCurrencyQuoteQuoteIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  code?: Maybe<Scalars['String']>,
  rate?: Maybe<Scalars['BigFloat']>,
  quoteToQuoteId?: Maybe<FkQuoteCurrencyQuoteQuoteIdInput>,
};

export type UpdateQuoteCurrencyPayload = {
   __typename?: 'UpdateQuoteCurrencyPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  quoteCurrency?: Maybe<QuoteCurrency>,
  query?: Maybe<Query>,
  quote?: Maybe<Quote>,
  quoteCurrencyEdge?: Maybe<QuoteCurrenciesEdge>,
};


export type UpdateQuoteCurrencyPayloadQuoteCurrencyEdgeArgs = {
  orderBy?: Maybe<Array<QuoteCurrenciesOrderBy>>
};

export type UpdateQuoteDayByNodeIdInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
  patch: QuoteDayPatch,
};

export type UpdateQuoteDayDestinationByNodeIdInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
  patch: QuoteDayDestinationPatch,
};

export type UpdateQuoteDayDestinationInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  patch: QuoteDayDestinationPatch,
  id: Scalars['UUID'],
};

export type UpdateQuoteDayDestinationOnQuoteDayDestinationForFkQuoteDayDestinationDestinationDestinationIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  dayId?: Maybe<Scalars['UUID']>,
  order?: Maybe<Scalars['Int']>,
  destinationToDestinationId?: Maybe<FkQuoteDayDestinationDestinationDestinationIdInput>,
  quoteDayToDayId?: Maybe<FkQuoteDayDestinationQuoteDayDayIdInput>,
};

export type UpdateQuoteDayDestinationOnQuoteDayDestinationForFkQuoteDayDestinationQuoteDayDayIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  destinationId?: Maybe<Scalars['UUID']>,
  order?: Maybe<Scalars['Int']>,
  destinationToDestinationId?: Maybe<FkQuoteDayDestinationDestinationDestinationIdInput>,
  quoteDayToDayId?: Maybe<FkQuoteDayDestinationQuoteDayDayIdInput>,
};

export type UpdateQuoteDayDestinationPayload = {
   __typename?: 'UpdateQuoteDayDestinationPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  quoteDayDestination?: Maybe<QuoteDayDestination>,
  query?: Maybe<Query>,
  destination?: Maybe<Destination>,
  day?: Maybe<QuoteDay>,
  quoteDayDestinationEdge?: Maybe<QuoteDayDestinationsEdge>,
};


export type UpdateQuoteDayDestinationPayloadQuoteDayDestinationEdgeArgs = {
  orderBy?: Maybe<Array<QuoteDayDestinationsOrderBy>>
};

export type UpdateQuoteDayInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  patch: QuoteDayPatch,
  id: Scalars['UUID'],
};

export type UpdateQuoteDayOnQuoteDayDestinationForFkQuoteDayDestinationQuoteDayDayIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  order?: Maybe<Scalars['Int']>,
  date?: Maybe<Scalars['Datetime']>,
  activitySummary?: Maybe<Scalars['String']>,
  activityDetail?: Maybe<Scalars['String']>,
  accommodationId?: Maybe<Scalars['UUID']>,
  quoteId?: Maybe<Scalars['UUID']>,
  propertyId?: Maybe<Scalars['UUID']>,
  quoteAccommodationDetailToAccommodationId?: Maybe<FkQuoteDayQuoteAccommodationDetailAccommodationIdInput>,
  quoteToQuoteId?: Maybe<FkQuoteDayQuoteQuoteIdInput>,
  propertyToPropertyId?: Maybe<QuoteDayPropertyIdFkeyInput>,
  quotePublic?: Maybe<FakePublicQuoteDayForeignKey0Input>,
  quoteDayDestinationsUsingId?: Maybe<FkQuoteDayDestinationQuoteDayDayIdInverseInput>,
};

export type UpdateQuoteDayOnQuoteDayForFakePublicQuoteDayForeignKey0Patch = {
  id?: Maybe<Scalars['UUID']>,
  order?: Maybe<Scalars['Int']>,
  date?: Maybe<Scalars['Datetime']>,
  activitySummary?: Maybe<Scalars['String']>,
  activityDetail?: Maybe<Scalars['String']>,
  accommodationId?: Maybe<Scalars['UUID']>,
  propertyId?: Maybe<Scalars['UUID']>,
  quoteAccommodationDetailToAccommodationId?: Maybe<FkQuoteDayQuoteAccommodationDetailAccommodationIdInput>,
  quoteToQuoteId?: Maybe<FkQuoteDayQuoteQuoteIdInput>,
  propertyToPropertyId?: Maybe<QuoteDayPropertyIdFkeyInput>,
  quotePublic?: Maybe<FakePublicQuoteDayForeignKey0Input>,
  quoteDayDestinationsUsingId?: Maybe<FkQuoteDayDestinationQuoteDayDayIdInverseInput>,
};

export type UpdateQuoteDayOnQuoteDayForFkQuoteDayQuoteAccommodationDetailAccommodationIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  order?: Maybe<Scalars['Int']>,
  date?: Maybe<Scalars['Datetime']>,
  activitySummary?: Maybe<Scalars['String']>,
  activityDetail?: Maybe<Scalars['String']>,
  quoteId?: Maybe<Scalars['UUID']>,
  propertyId?: Maybe<Scalars['UUID']>,
  quoteAccommodationDetailToAccommodationId?: Maybe<FkQuoteDayQuoteAccommodationDetailAccommodationIdInput>,
  quoteToQuoteId?: Maybe<FkQuoteDayQuoteQuoteIdInput>,
  propertyToPropertyId?: Maybe<QuoteDayPropertyIdFkeyInput>,
  quotePublic?: Maybe<FakePublicQuoteDayForeignKey0Input>,
  quoteDayDestinationsUsingId?: Maybe<FkQuoteDayDestinationQuoteDayDayIdInverseInput>,
};

export type UpdateQuoteDayOnQuoteDayForFkQuoteDayQuoteQuoteIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  order?: Maybe<Scalars['Int']>,
  date?: Maybe<Scalars['Datetime']>,
  activitySummary?: Maybe<Scalars['String']>,
  activityDetail?: Maybe<Scalars['String']>,
  accommodationId?: Maybe<Scalars['UUID']>,
  propertyId?: Maybe<Scalars['UUID']>,
  quoteAccommodationDetailToAccommodationId?: Maybe<FkQuoteDayQuoteAccommodationDetailAccommodationIdInput>,
  quoteToQuoteId?: Maybe<FkQuoteDayQuoteQuoteIdInput>,
  propertyToPropertyId?: Maybe<QuoteDayPropertyIdFkeyInput>,
  quotePublic?: Maybe<FakePublicQuoteDayForeignKey0Input>,
  quoteDayDestinationsUsingId?: Maybe<FkQuoteDayDestinationQuoteDayDayIdInverseInput>,
};

export type UpdateQuoteDayOnQuoteDayForQuoteDayPropertyIdFkeyPatch = {
  id?: Maybe<Scalars['UUID']>,
  order?: Maybe<Scalars['Int']>,
  date?: Maybe<Scalars['Datetime']>,
  activitySummary?: Maybe<Scalars['String']>,
  activityDetail?: Maybe<Scalars['String']>,
  accommodationId?: Maybe<Scalars['UUID']>,
  quoteId?: Maybe<Scalars['UUID']>,
  quoteAccommodationDetailToAccommodationId?: Maybe<FkQuoteDayQuoteAccommodationDetailAccommodationIdInput>,
  quoteToQuoteId?: Maybe<FkQuoteDayQuoteQuoteIdInput>,
  propertyToPropertyId?: Maybe<QuoteDayPropertyIdFkeyInput>,
  quotePublic?: Maybe<FakePublicQuoteDayForeignKey0Input>,
  quoteDayDestinationsUsingId?: Maybe<FkQuoteDayDestinationQuoteDayDayIdInverseInput>,
};

export type UpdateQuoteDayPayload = {
   __typename?: 'UpdateQuoteDayPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  quoteDay?: Maybe<QuoteDay>,
  query?: Maybe<Query>,
  accommodation?: Maybe<QuoteAccommodationDetail>,
  quote?: Maybe<Quote>,
  property?: Maybe<Property>,
  quotePublic?: Maybe<QuotePublic>,
  quoteDayEdge?: Maybe<QuoteDaysEdge>,
};


export type UpdateQuoteDayPayloadQuoteDayEdgeArgs = {
  orderBy?: Maybe<Array<QuoteDaysOrderBy>>
};

export type UpdateQuoteFinanceLineItemByNodeIdInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
  patch: QuoteFinanceLineItemPatch,
};

export type UpdateQuoteFinanceLineItemInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  patch: QuoteFinanceLineItemPatch,
  id: Scalars['UUID'],
};

export type UpdateQuoteFinanceLineItemOnQuoteFinanceLineItemForFkQuoteFinanceLineItemQuoteQuoteIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  amount?: Maybe<Scalars['BigFloat']>,
  currency?: Maybe<Scalars['String']>,
  supplierId?: Maybe<Scalars['UUID']>,
  confirmation?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  excludeMargin?: Maybe<Scalars['Boolean']>,
  notes?: Maybe<Scalars['String']>,
  quantity?: Maybe<Scalars['Int']>,
  order?: Maybe<Scalars['Int']>,
  marginOverride?: Maybe<Scalars['BigFloat']>,
  quoteToQuoteId?: Maybe<FkQuoteFinanceLineItemQuoteQuoteIdInput>,
  supplierToSupplierId?: Maybe<FkQuoteFinanceLineItemSupplierSupplierIdInput>,
};

export type UpdateQuoteFinanceLineItemOnQuoteFinanceLineItemForFkQuoteFinanceLineItemSupplierSupplierIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  amount?: Maybe<Scalars['BigFloat']>,
  currency?: Maybe<Scalars['String']>,
  quoteId?: Maybe<Scalars['UUID']>,
  confirmation?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  excludeMargin?: Maybe<Scalars['Boolean']>,
  notes?: Maybe<Scalars['String']>,
  quantity?: Maybe<Scalars['Int']>,
  order?: Maybe<Scalars['Int']>,
  marginOverride?: Maybe<Scalars['BigFloat']>,
  quoteToQuoteId?: Maybe<FkQuoteFinanceLineItemQuoteQuoteIdInput>,
  supplierToSupplierId?: Maybe<FkQuoteFinanceLineItemSupplierSupplierIdInput>,
};

export type UpdateQuoteFinanceLineItemPayload = {
   __typename?: 'UpdateQuoteFinanceLineItemPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  quoteFinanceLineItem?: Maybe<QuoteFinanceLineItem>,
  query?: Maybe<Query>,
  quote?: Maybe<Quote>,
  supplier?: Maybe<Supplier>,
  quoteFinanceLineItemEdge?: Maybe<QuoteFinanceLineItemsEdge>,
};


export type UpdateQuoteFinanceLineItemPayloadQuoteFinanceLineItemEdgeArgs = {
  orderBy?: Maybe<Array<QuoteFinanceLineItemsOrderBy>>
};

export type UpdateQuoteHeroByNodeIdInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
  patch: QuoteHeroPatch,
};

export type UpdateQuoteHeroInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  patch: QuoteHeroPatch,
  id: Scalars['UUID'],
};

export type UpdateQuoteHeroOnQuoteForFkQuoteQuoteHeroHeroIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  title?: Maybe<Scalars['String']>,
  subtitle?: Maybe<Scalars['String']>,
  imageId?: Maybe<Scalars['UUID']>,
  style?: Maybe<Scalars['String']>,
  mediaItemToImageId?: Maybe<FkQuoteHeroMediaItemImageIdInput>,
  quotesUsingId?: Maybe<FkQuoteQuoteHeroHeroIdInverseInput>,
  quotePublicsUsingId?: Maybe<FakePublicQuotePublicForeignKey1InverseInput>,
};

export type UpdateQuoteHeroOnQuoteHeroForFkQuoteHeroMediaItemImageIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  title?: Maybe<Scalars['String']>,
  subtitle?: Maybe<Scalars['String']>,
  style?: Maybe<Scalars['String']>,
  mediaItemToImageId?: Maybe<FkQuoteHeroMediaItemImageIdInput>,
  quotesUsingId?: Maybe<FkQuoteQuoteHeroHeroIdInverseInput>,
  quotePublicsUsingId?: Maybe<FakePublicQuotePublicForeignKey1InverseInput>,
};

export type UpdateQuoteHeroOnQuotePublicForFakePublicQuotePublicForeignKey1Patch = {
  id?: Maybe<Scalars['UUID']>,
  title?: Maybe<Scalars['String']>,
  subtitle?: Maybe<Scalars['String']>,
  imageId?: Maybe<Scalars['UUID']>,
  style?: Maybe<Scalars['String']>,
  mediaItemToImageId?: Maybe<FkQuoteHeroMediaItemImageIdInput>,
  quotesUsingId?: Maybe<FkQuoteQuoteHeroHeroIdInverseInput>,
  quotePublicsUsingId?: Maybe<FakePublicQuotePublicForeignKey1InverseInput>,
};

export type UpdateQuoteHeroPayload = {
   __typename?: 'UpdateQuoteHeroPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  quoteHero?: Maybe<QuoteHero>,
  query?: Maybe<Query>,
  image?: Maybe<MediaItem>,
  quoteHeroEdge?: Maybe<QuoteHeroesEdge>,
};


export type UpdateQuoteHeroPayloadQuoteHeroEdgeArgs = {
  orderBy?: Maybe<Array<QuoteHeroesOrderBy>>
};

export type UpdateQuoteInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  patch: QuotePatch,
  id: Scalars['UUID'],
};

export type UpdateQuoteOnEmailForFkEmailQuoteQuoteIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  duration?: Maybe<Scalars['Int']>,
  modified?: Maybe<Scalars['Datetime']>,
  start?: Maybe<Scalars['Datetime']>,
  tripId?: Maybe<Scalars['UUID']>,
  deposit?: Maybe<Scalars['BigFloat']>,
  margin?: Maybe<Scalars['BigFloat']>,
  key?: Maybe<Scalars['String']>,
  expires?: Maybe<Scalars['Datetime']>,
  total?: Maybe<Scalars['BigFloat']>,
  adjustment?: Maybe<Scalars['BigFloat']>,
  baseCurrency?: Maybe<Scalars['String']>,
  shortDescription?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  heroImageId?: Maybe<Scalars['UUID']>,
  exclusions?: Maybe<Scalars['String']>,
  inclusions?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['Int']>,
  agentMargin?: Maybe<Scalars['BigFloat']>,
  travellerCount?: Maybe<Scalars['Int']>,
  archived?: Maybe<Scalars['Datetime']>,
  lastViewed?: Maybe<Scalars['Datetime']>,
  heroId?: Maybe<Scalars['UUID']>,
  userId?: Maybe<Scalars['UUID']>,
  locked?: Maybe<Scalars['Datetime']>,
  tripToTripId?: Maybe<FkQuoteTripTripIdInput>,
  mediaItemToHeroImageId?: Maybe<FkQuoteMediaItemHeroImageIdInput>,
  quoteHeroToHeroId?: Maybe<FkQuoteQuoteHeroHeroIdInput>,
  userToUserId?: Maybe<FkQuoteUserUserIdInput>,
  invoicesUsingId?: Maybe<FkInvoiceQuoteQuoteIdInverseInput>,
  tripsUsingId?: Maybe<FkTripQuoteActiveQuoteIdInverseInput>,
  emailsUsingId?: Maybe<FkEmailQuoteQuoteIdInverseInput>,
  quoteViewsUsingId?: Maybe<FkQuoteViewQuoteQuoteIdInverseInput>,
  quoteAccommodationDetailsUsingId?: Maybe<FkQuoteAccommodationDetailQuoteQuoteIdInverseInput>,
  quoteCurrenciesUsingId?: Maybe<FkQuoteCurrencyQuoteQuoteIdInverseInput>,
  quoteDaysUsingId?: Maybe<FkQuoteDayQuoteQuoteIdInverseInput>,
  quoteFinanceLineItemsUsingId?: Maybe<FkQuoteFinanceLineItemQuoteQuoteIdInverseInput>,
};

export type UpdateQuoteOnInvoiceForFkInvoiceQuoteQuoteIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  duration?: Maybe<Scalars['Int']>,
  modified?: Maybe<Scalars['Datetime']>,
  start?: Maybe<Scalars['Datetime']>,
  tripId?: Maybe<Scalars['UUID']>,
  deposit?: Maybe<Scalars['BigFloat']>,
  margin?: Maybe<Scalars['BigFloat']>,
  key?: Maybe<Scalars['String']>,
  expires?: Maybe<Scalars['Datetime']>,
  total?: Maybe<Scalars['BigFloat']>,
  adjustment?: Maybe<Scalars['BigFloat']>,
  baseCurrency?: Maybe<Scalars['String']>,
  shortDescription?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  heroImageId?: Maybe<Scalars['UUID']>,
  exclusions?: Maybe<Scalars['String']>,
  inclusions?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['Int']>,
  agentMargin?: Maybe<Scalars['BigFloat']>,
  travellerCount?: Maybe<Scalars['Int']>,
  archived?: Maybe<Scalars['Datetime']>,
  lastViewed?: Maybe<Scalars['Datetime']>,
  heroId?: Maybe<Scalars['UUID']>,
  userId?: Maybe<Scalars['UUID']>,
  locked?: Maybe<Scalars['Datetime']>,
  tripToTripId?: Maybe<FkQuoteTripTripIdInput>,
  mediaItemToHeroImageId?: Maybe<FkQuoteMediaItemHeroImageIdInput>,
  quoteHeroToHeroId?: Maybe<FkQuoteQuoteHeroHeroIdInput>,
  userToUserId?: Maybe<FkQuoteUserUserIdInput>,
  invoicesUsingId?: Maybe<FkInvoiceQuoteQuoteIdInverseInput>,
  tripsUsingId?: Maybe<FkTripQuoteActiveQuoteIdInverseInput>,
  emailsUsingId?: Maybe<FkEmailQuoteQuoteIdInverseInput>,
  quoteViewsUsingId?: Maybe<FkQuoteViewQuoteQuoteIdInverseInput>,
  quoteAccommodationDetailsUsingId?: Maybe<FkQuoteAccommodationDetailQuoteQuoteIdInverseInput>,
  quoteCurrenciesUsingId?: Maybe<FkQuoteCurrencyQuoteQuoteIdInverseInput>,
  quoteDaysUsingId?: Maybe<FkQuoteDayQuoteQuoteIdInverseInput>,
  quoteFinanceLineItemsUsingId?: Maybe<FkQuoteFinanceLineItemQuoteQuoteIdInverseInput>,
};

export type UpdateQuoteOnQuoteAccommodationDetailForFkQuoteAccommodationDetailQuoteQuoteIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  duration?: Maybe<Scalars['Int']>,
  modified?: Maybe<Scalars['Datetime']>,
  start?: Maybe<Scalars['Datetime']>,
  tripId?: Maybe<Scalars['UUID']>,
  deposit?: Maybe<Scalars['BigFloat']>,
  margin?: Maybe<Scalars['BigFloat']>,
  key?: Maybe<Scalars['String']>,
  expires?: Maybe<Scalars['Datetime']>,
  total?: Maybe<Scalars['BigFloat']>,
  adjustment?: Maybe<Scalars['BigFloat']>,
  baseCurrency?: Maybe<Scalars['String']>,
  shortDescription?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  heroImageId?: Maybe<Scalars['UUID']>,
  exclusions?: Maybe<Scalars['String']>,
  inclusions?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['Int']>,
  agentMargin?: Maybe<Scalars['BigFloat']>,
  travellerCount?: Maybe<Scalars['Int']>,
  archived?: Maybe<Scalars['Datetime']>,
  lastViewed?: Maybe<Scalars['Datetime']>,
  heroId?: Maybe<Scalars['UUID']>,
  userId?: Maybe<Scalars['UUID']>,
  locked?: Maybe<Scalars['Datetime']>,
  tripToTripId?: Maybe<FkQuoteTripTripIdInput>,
  mediaItemToHeroImageId?: Maybe<FkQuoteMediaItemHeroImageIdInput>,
  quoteHeroToHeroId?: Maybe<FkQuoteQuoteHeroHeroIdInput>,
  userToUserId?: Maybe<FkQuoteUserUserIdInput>,
  invoicesUsingId?: Maybe<FkInvoiceQuoteQuoteIdInverseInput>,
  tripsUsingId?: Maybe<FkTripQuoteActiveQuoteIdInverseInput>,
  emailsUsingId?: Maybe<FkEmailQuoteQuoteIdInverseInput>,
  quoteViewsUsingId?: Maybe<FkQuoteViewQuoteQuoteIdInverseInput>,
  quoteAccommodationDetailsUsingId?: Maybe<FkQuoteAccommodationDetailQuoteQuoteIdInverseInput>,
  quoteCurrenciesUsingId?: Maybe<FkQuoteCurrencyQuoteQuoteIdInverseInput>,
  quoteDaysUsingId?: Maybe<FkQuoteDayQuoteQuoteIdInverseInput>,
  quoteFinanceLineItemsUsingId?: Maybe<FkQuoteFinanceLineItemQuoteQuoteIdInverseInput>,
};

export type UpdateQuoteOnQuoteCurrencyForFkQuoteCurrencyQuoteQuoteIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  duration?: Maybe<Scalars['Int']>,
  modified?: Maybe<Scalars['Datetime']>,
  start?: Maybe<Scalars['Datetime']>,
  tripId?: Maybe<Scalars['UUID']>,
  deposit?: Maybe<Scalars['BigFloat']>,
  margin?: Maybe<Scalars['BigFloat']>,
  key?: Maybe<Scalars['String']>,
  expires?: Maybe<Scalars['Datetime']>,
  total?: Maybe<Scalars['BigFloat']>,
  adjustment?: Maybe<Scalars['BigFloat']>,
  baseCurrency?: Maybe<Scalars['String']>,
  shortDescription?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  heroImageId?: Maybe<Scalars['UUID']>,
  exclusions?: Maybe<Scalars['String']>,
  inclusions?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['Int']>,
  agentMargin?: Maybe<Scalars['BigFloat']>,
  travellerCount?: Maybe<Scalars['Int']>,
  archived?: Maybe<Scalars['Datetime']>,
  lastViewed?: Maybe<Scalars['Datetime']>,
  heroId?: Maybe<Scalars['UUID']>,
  userId?: Maybe<Scalars['UUID']>,
  locked?: Maybe<Scalars['Datetime']>,
  tripToTripId?: Maybe<FkQuoteTripTripIdInput>,
  mediaItemToHeroImageId?: Maybe<FkQuoteMediaItemHeroImageIdInput>,
  quoteHeroToHeroId?: Maybe<FkQuoteQuoteHeroHeroIdInput>,
  userToUserId?: Maybe<FkQuoteUserUserIdInput>,
  invoicesUsingId?: Maybe<FkInvoiceQuoteQuoteIdInverseInput>,
  tripsUsingId?: Maybe<FkTripQuoteActiveQuoteIdInverseInput>,
  emailsUsingId?: Maybe<FkEmailQuoteQuoteIdInverseInput>,
  quoteViewsUsingId?: Maybe<FkQuoteViewQuoteQuoteIdInverseInput>,
  quoteAccommodationDetailsUsingId?: Maybe<FkQuoteAccommodationDetailQuoteQuoteIdInverseInput>,
  quoteCurrenciesUsingId?: Maybe<FkQuoteCurrencyQuoteQuoteIdInverseInput>,
  quoteDaysUsingId?: Maybe<FkQuoteDayQuoteQuoteIdInverseInput>,
  quoteFinanceLineItemsUsingId?: Maybe<FkQuoteFinanceLineItemQuoteQuoteIdInverseInput>,
};

export type UpdateQuoteOnQuoteDayForFkQuoteDayQuoteQuoteIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  duration?: Maybe<Scalars['Int']>,
  modified?: Maybe<Scalars['Datetime']>,
  start?: Maybe<Scalars['Datetime']>,
  tripId?: Maybe<Scalars['UUID']>,
  deposit?: Maybe<Scalars['BigFloat']>,
  margin?: Maybe<Scalars['BigFloat']>,
  key?: Maybe<Scalars['String']>,
  expires?: Maybe<Scalars['Datetime']>,
  total?: Maybe<Scalars['BigFloat']>,
  adjustment?: Maybe<Scalars['BigFloat']>,
  baseCurrency?: Maybe<Scalars['String']>,
  shortDescription?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  heroImageId?: Maybe<Scalars['UUID']>,
  exclusions?: Maybe<Scalars['String']>,
  inclusions?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['Int']>,
  agentMargin?: Maybe<Scalars['BigFloat']>,
  travellerCount?: Maybe<Scalars['Int']>,
  archived?: Maybe<Scalars['Datetime']>,
  lastViewed?: Maybe<Scalars['Datetime']>,
  heroId?: Maybe<Scalars['UUID']>,
  userId?: Maybe<Scalars['UUID']>,
  locked?: Maybe<Scalars['Datetime']>,
  tripToTripId?: Maybe<FkQuoteTripTripIdInput>,
  mediaItemToHeroImageId?: Maybe<FkQuoteMediaItemHeroImageIdInput>,
  quoteHeroToHeroId?: Maybe<FkQuoteQuoteHeroHeroIdInput>,
  userToUserId?: Maybe<FkQuoteUserUserIdInput>,
  invoicesUsingId?: Maybe<FkInvoiceQuoteQuoteIdInverseInput>,
  tripsUsingId?: Maybe<FkTripQuoteActiveQuoteIdInverseInput>,
  emailsUsingId?: Maybe<FkEmailQuoteQuoteIdInverseInput>,
  quoteViewsUsingId?: Maybe<FkQuoteViewQuoteQuoteIdInverseInput>,
  quoteAccommodationDetailsUsingId?: Maybe<FkQuoteAccommodationDetailQuoteQuoteIdInverseInput>,
  quoteCurrenciesUsingId?: Maybe<FkQuoteCurrencyQuoteQuoteIdInverseInput>,
  quoteDaysUsingId?: Maybe<FkQuoteDayQuoteQuoteIdInverseInput>,
  quoteFinanceLineItemsUsingId?: Maybe<FkQuoteFinanceLineItemQuoteQuoteIdInverseInput>,
};

export type UpdateQuoteOnQuoteFinanceLineItemForFkQuoteFinanceLineItemQuoteQuoteIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  duration?: Maybe<Scalars['Int']>,
  modified?: Maybe<Scalars['Datetime']>,
  start?: Maybe<Scalars['Datetime']>,
  tripId?: Maybe<Scalars['UUID']>,
  deposit?: Maybe<Scalars['BigFloat']>,
  margin?: Maybe<Scalars['BigFloat']>,
  key?: Maybe<Scalars['String']>,
  expires?: Maybe<Scalars['Datetime']>,
  total?: Maybe<Scalars['BigFloat']>,
  adjustment?: Maybe<Scalars['BigFloat']>,
  baseCurrency?: Maybe<Scalars['String']>,
  shortDescription?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  heroImageId?: Maybe<Scalars['UUID']>,
  exclusions?: Maybe<Scalars['String']>,
  inclusions?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['Int']>,
  agentMargin?: Maybe<Scalars['BigFloat']>,
  travellerCount?: Maybe<Scalars['Int']>,
  archived?: Maybe<Scalars['Datetime']>,
  lastViewed?: Maybe<Scalars['Datetime']>,
  heroId?: Maybe<Scalars['UUID']>,
  userId?: Maybe<Scalars['UUID']>,
  locked?: Maybe<Scalars['Datetime']>,
  tripToTripId?: Maybe<FkQuoteTripTripIdInput>,
  mediaItemToHeroImageId?: Maybe<FkQuoteMediaItemHeroImageIdInput>,
  quoteHeroToHeroId?: Maybe<FkQuoteQuoteHeroHeroIdInput>,
  userToUserId?: Maybe<FkQuoteUserUserIdInput>,
  invoicesUsingId?: Maybe<FkInvoiceQuoteQuoteIdInverseInput>,
  tripsUsingId?: Maybe<FkTripQuoteActiveQuoteIdInverseInput>,
  emailsUsingId?: Maybe<FkEmailQuoteQuoteIdInverseInput>,
  quoteViewsUsingId?: Maybe<FkQuoteViewQuoteQuoteIdInverseInput>,
  quoteAccommodationDetailsUsingId?: Maybe<FkQuoteAccommodationDetailQuoteQuoteIdInverseInput>,
  quoteCurrenciesUsingId?: Maybe<FkQuoteCurrencyQuoteQuoteIdInverseInput>,
  quoteDaysUsingId?: Maybe<FkQuoteDayQuoteQuoteIdInverseInput>,
  quoteFinanceLineItemsUsingId?: Maybe<FkQuoteFinanceLineItemQuoteQuoteIdInverseInput>,
};

export type UpdateQuoteOnQuoteForFkQuoteMediaItemHeroImageIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  duration?: Maybe<Scalars['Int']>,
  modified?: Maybe<Scalars['Datetime']>,
  start?: Maybe<Scalars['Datetime']>,
  tripId?: Maybe<Scalars['UUID']>,
  deposit?: Maybe<Scalars['BigFloat']>,
  margin?: Maybe<Scalars['BigFloat']>,
  key?: Maybe<Scalars['String']>,
  expires?: Maybe<Scalars['Datetime']>,
  total?: Maybe<Scalars['BigFloat']>,
  adjustment?: Maybe<Scalars['BigFloat']>,
  baseCurrency?: Maybe<Scalars['String']>,
  shortDescription?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  exclusions?: Maybe<Scalars['String']>,
  inclusions?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['Int']>,
  agentMargin?: Maybe<Scalars['BigFloat']>,
  travellerCount?: Maybe<Scalars['Int']>,
  archived?: Maybe<Scalars['Datetime']>,
  lastViewed?: Maybe<Scalars['Datetime']>,
  heroId?: Maybe<Scalars['UUID']>,
  userId?: Maybe<Scalars['UUID']>,
  locked?: Maybe<Scalars['Datetime']>,
  tripToTripId?: Maybe<FkQuoteTripTripIdInput>,
  mediaItemToHeroImageId?: Maybe<FkQuoteMediaItemHeroImageIdInput>,
  quoteHeroToHeroId?: Maybe<FkQuoteQuoteHeroHeroIdInput>,
  userToUserId?: Maybe<FkQuoteUserUserIdInput>,
  invoicesUsingId?: Maybe<FkInvoiceQuoteQuoteIdInverseInput>,
  tripsUsingId?: Maybe<FkTripQuoteActiveQuoteIdInverseInput>,
  emailsUsingId?: Maybe<FkEmailQuoteQuoteIdInverseInput>,
  quoteViewsUsingId?: Maybe<FkQuoteViewQuoteQuoteIdInverseInput>,
  quoteAccommodationDetailsUsingId?: Maybe<FkQuoteAccommodationDetailQuoteQuoteIdInverseInput>,
  quoteCurrenciesUsingId?: Maybe<FkQuoteCurrencyQuoteQuoteIdInverseInput>,
  quoteDaysUsingId?: Maybe<FkQuoteDayQuoteQuoteIdInverseInput>,
  quoteFinanceLineItemsUsingId?: Maybe<FkQuoteFinanceLineItemQuoteQuoteIdInverseInput>,
};

export type UpdateQuoteOnQuoteForFkQuoteQuoteHeroHeroIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  duration?: Maybe<Scalars['Int']>,
  modified?: Maybe<Scalars['Datetime']>,
  start?: Maybe<Scalars['Datetime']>,
  tripId?: Maybe<Scalars['UUID']>,
  deposit?: Maybe<Scalars['BigFloat']>,
  margin?: Maybe<Scalars['BigFloat']>,
  key?: Maybe<Scalars['String']>,
  expires?: Maybe<Scalars['Datetime']>,
  total?: Maybe<Scalars['BigFloat']>,
  adjustment?: Maybe<Scalars['BigFloat']>,
  baseCurrency?: Maybe<Scalars['String']>,
  shortDescription?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  heroImageId?: Maybe<Scalars['UUID']>,
  exclusions?: Maybe<Scalars['String']>,
  inclusions?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['Int']>,
  agentMargin?: Maybe<Scalars['BigFloat']>,
  travellerCount?: Maybe<Scalars['Int']>,
  archived?: Maybe<Scalars['Datetime']>,
  lastViewed?: Maybe<Scalars['Datetime']>,
  userId?: Maybe<Scalars['UUID']>,
  locked?: Maybe<Scalars['Datetime']>,
  tripToTripId?: Maybe<FkQuoteTripTripIdInput>,
  mediaItemToHeroImageId?: Maybe<FkQuoteMediaItemHeroImageIdInput>,
  quoteHeroToHeroId?: Maybe<FkQuoteQuoteHeroHeroIdInput>,
  userToUserId?: Maybe<FkQuoteUserUserIdInput>,
  invoicesUsingId?: Maybe<FkInvoiceQuoteQuoteIdInverseInput>,
  tripsUsingId?: Maybe<FkTripQuoteActiveQuoteIdInverseInput>,
  emailsUsingId?: Maybe<FkEmailQuoteQuoteIdInverseInput>,
  quoteViewsUsingId?: Maybe<FkQuoteViewQuoteQuoteIdInverseInput>,
  quoteAccommodationDetailsUsingId?: Maybe<FkQuoteAccommodationDetailQuoteQuoteIdInverseInput>,
  quoteCurrenciesUsingId?: Maybe<FkQuoteCurrencyQuoteQuoteIdInverseInput>,
  quoteDaysUsingId?: Maybe<FkQuoteDayQuoteQuoteIdInverseInput>,
  quoteFinanceLineItemsUsingId?: Maybe<FkQuoteFinanceLineItemQuoteQuoteIdInverseInput>,
};

export type UpdateQuoteOnQuoteForFkQuoteTripTripIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  duration?: Maybe<Scalars['Int']>,
  modified?: Maybe<Scalars['Datetime']>,
  start?: Maybe<Scalars['Datetime']>,
  deposit?: Maybe<Scalars['BigFloat']>,
  margin?: Maybe<Scalars['BigFloat']>,
  key?: Maybe<Scalars['String']>,
  expires?: Maybe<Scalars['Datetime']>,
  total?: Maybe<Scalars['BigFloat']>,
  adjustment?: Maybe<Scalars['BigFloat']>,
  baseCurrency?: Maybe<Scalars['String']>,
  shortDescription?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  heroImageId?: Maybe<Scalars['UUID']>,
  exclusions?: Maybe<Scalars['String']>,
  inclusions?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['Int']>,
  agentMargin?: Maybe<Scalars['BigFloat']>,
  travellerCount?: Maybe<Scalars['Int']>,
  archived?: Maybe<Scalars['Datetime']>,
  lastViewed?: Maybe<Scalars['Datetime']>,
  heroId?: Maybe<Scalars['UUID']>,
  userId?: Maybe<Scalars['UUID']>,
  locked?: Maybe<Scalars['Datetime']>,
  tripToTripId?: Maybe<FkQuoteTripTripIdInput>,
  mediaItemToHeroImageId?: Maybe<FkQuoteMediaItemHeroImageIdInput>,
  quoteHeroToHeroId?: Maybe<FkQuoteQuoteHeroHeroIdInput>,
  userToUserId?: Maybe<FkQuoteUserUserIdInput>,
  invoicesUsingId?: Maybe<FkInvoiceQuoteQuoteIdInverseInput>,
  tripsUsingId?: Maybe<FkTripQuoteActiveQuoteIdInverseInput>,
  emailsUsingId?: Maybe<FkEmailQuoteQuoteIdInverseInput>,
  quoteViewsUsingId?: Maybe<FkQuoteViewQuoteQuoteIdInverseInput>,
  quoteAccommodationDetailsUsingId?: Maybe<FkQuoteAccommodationDetailQuoteQuoteIdInverseInput>,
  quoteCurrenciesUsingId?: Maybe<FkQuoteCurrencyQuoteQuoteIdInverseInput>,
  quoteDaysUsingId?: Maybe<FkQuoteDayQuoteQuoteIdInverseInput>,
  quoteFinanceLineItemsUsingId?: Maybe<FkQuoteFinanceLineItemQuoteQuoteIdInverseInput>,
};

export type UpdateQuoteOnQuoteForFkQuoteUserUserIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  duration?: Maybe<Scalars['Int']>,
  modified?: Maybe<Scalars['Datetime']>,
  start?: Maybe<Scalars['Datetime']>,
  tripId?: Maybe<Scalars['UUID']>,
  deposit?: Maybe<Scalars['BigFloat']>,
  margin?: Maybe<Scalars['BigFloat']>,
  key?: Maybe<Scalars['String']>,
  expires?: Maybe<Scalars['Datetime']>,
  total?: Maybe<Scalars['BigFloat']>,
  adjustment?: Maybe<Scalars['BigFloat']>,
  baseCurrency?: Maybe<Scalars['String']>,
  shortDescription?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  heroImageId?: Maybe<Scalars['UUID']>,
  exclusions?: Maybe<Scalars['String']>,
  inclusions?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['Int']>,
  agentMargin?: Maybe<Scalars['BigFloat']>,
  travellerCount?: Maybe<Scalars['Int']>,
  archived?: Maybe<Scalars['Datetime']>,
  lastViewed?: Maybe<Scalars['Datetime']>,
  heroId?: Maybe<Scalars['UUID']>,
  locked?: Maybe<Scalars['Datetime']>,
  tripToTripId?: Maybe<FkQuoteTripTripIdInput>,
  mediaItemToHeroImageId?: Maybe<FkQuoteMediaItemHeroImageIdInput>,
  quoteHeroToHeroId?: Maybe<FkQuoteQuoteHeroHeroIdInput>,
  userToUserId?: Maybe<FkQuoteUserUserIdInput>,
  invoicesUsingId?: Maybe<FkInvoiceQuoteQuoteIdInverseInput>,
  tripsUsingId?: Maybe<FkTripQuoteActiveQuoteIdInverseInput>,
  emailsUsingId?: Maybe<FkEmailQuoteQuoteIdInverseInput>,
  quoteViewsUsingId?: Maybe<FkQuoteViewQuoteQuoteIdInverseInput>,
  quoteAccommodationDetailsUsingId?: Maybe<FkQuoteAccommodationDetailQuoteQuoteIdInverseInput>,
  quoteCurrenciesUsingId?: Maybe<FkQuoteCurrencyQuoteQuoteIdInverseInput>,
  quoteDaysUsingId?: Maybe<FkQuoteDayQuoteQuoteIdInverseInput>,
  quoteFinanceLineItemsUsingId?: Maybe<FkQuoteFinanceLineItemQuoteQuoteIdInverseInput>,
};

export type UpdateQuoteOnQuoteViewForFkQuoteViewQuoteQuoteIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  duration?: Maybe<Scalars['Int']>,
  modified?: Maybe<Scalars['Datetime']>,
  start?: Maybe<Scalars['Datetime']>,
  tripId?: Maybe<Scalars['UUID']>,
  deposit?: Maybe<Scalars['BigFloat']>,
  margin?: Maybe<Scalars['BigFloat']>,
  key?: Maybe<Scalars['String']>,
  expires?: Maybe<Scalars['Datetime']>,
  total?: Maybe<Scalars['BigFloat']>,
  adjustment?: Maybe<Scalars['BigFloat']>,
  baseCurrency?: Maybe<Scalars['String']>,
  shortDescription?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  heroImageId?: Maybe<Scalars['UUID']>,
  exclusions?: Maybe<Scalars['String']>,
  inclusions?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['Int']>,
  agentMargin?: Maybe<Scalars['BigFloat']>,
  travellerCount?: Maybe<Scalars['Int']>,
  archived?: Maybe<Scalars['Datetime']>,
  lastViewed?: Maybe<Scalars['Datetime']>,
  heroId?: Maybe<Scalars['UUID']>,
  userId?: Maybe<Scalars['UUID']>,
  locked?: Maybe<Scalars['Datetime']>,
  tripToTripId?: Maybe<FkQuoteTripTripIdInput>,
  mediaItemToHeroImageId?: Maybe<FkQuoteMediaItemHeroImageIdInput>,
  quoteHeroToHeroId?: Maybe<FkQuoteQuoteHeroHeroIdInput>,
  userToUserId?: Maybe<FkQuoteUserUserIdInput>,
  invoicesUsingId?: Maybe<FkInvoiceQuoteQuoteIdInverseInput>,
  tripsUsingId?: Maybe<FkTripQuoteActiveQuoteIdInverseInput>,
  emailsUsingId?: Maybe<FkEmailQuoteQuoteIdInverseInput>,
  quoteViewsUsingId?: Maybe<FkQuoteViewQuoteQuoteIdInverseInput>,
  quoteAccommodationDetailsUsingId?: Maybe<FkQuoteAccommodationDetailQuoteQuoteIdInverseInput>,
  quoteCurrenciesUsingId?: Maybe<FkQuoteCurrencyQuoteQuoteIdInverseInput>,
  quoteDaysUsingId?: Maybe<FkQuoteDayQuoteQuoteIdInverseInput>,
  quoteFinanceLineItemsUsingId?: Maybe<FkQuoteFinanceLineItemQuoteQuoteIdInverseInput>,
};

export type UpdateQuoteOnTripForFkTripQuoteActiveQuoteIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  duration?: Maybe<Scalars['Int']>,
  modified?: Maybe<Scalars['Datetime']>,
  start?: Maybe<Scalars['Datetime']>,
  tripId?: Maybe<Scalars['UUID']>,
  deposit?: Maybe<Scalars['BigFloat']>,
  margin?: Maybe<Scalars['BigFloat']>,
  key?: Maybe<Scalars['String']>,
  expires?: Maybe<Scalars['Datetime']>,
  total?: Maybe<Scalars['BigFloat']>,
  adjustment?: Maybe<Scalars['BigFloat']>,
  baseCurrency?: Maybe<Scalars['String']>,
  shortDescription?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  heroImageId?: Maybe<Scalars['UUID']>,
  exclusions?: Maybe<Scalars['String']>,
  inclusions?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['Int']>,
  agentMargin?: Maybe<Scalars['BigFloat']>,
  travellerCount?: Maybe<Scalars['Int']>,
  archived?: Maybe<Scalars['Datetime']>,
  lastViewed?: Maybe<Scalars['Datetime']>,
  heroId?: Maybe<Scalars['UUID']>,
  userId?: Maybe<Scalars['UUID']>,
  locked?: Maybe<Scalars['Datetime']>,
  tripToTripId?: Maybe<FkQuoteTripTripIdInput>,
  mediaItemToHeroImageId?: Maybe<FkQuoteMediaItemHeroImageIdInput>,
  quoteHeroToHeroId?: Maybe<FkQuoteQuoteHeroHeroIdInput>,
  userToUserId?: Maybe<FkQuoteUserUserIdInput>,
  invoicesUsingId?: Maybe<FkInvoiceQuoteQuoteIdInverseInput>,
  tripsUsingId?: Maybe<FkTripQuoteActiveQuoteIdInverseInput>,
  emailsUsingId?: Maybe<FkEmailQuoteQuoteIdInverseInput>,
  quoteViewsUsingId?: Maybe<FkQuoteViewQuoteQuoteIdInverseInput>,
  quoteAccommodationDetailsUsingId?: Maybe<FkQuoteAccommodationDetailQuoteQuoteIdInverseInput>,
  quoteCurrenciesUsingId?: Maybe<FkQuoteCurrencyQuoteQuoteIdInverseInput>,
  quoteDaysUsingId?: Maybe<FkQuoteDayQuoteQuoteIdInverseInput>,
  quoteFinanceLineItemsUsingId?: Maybe<FkQuoteFinanceLineItemQuoteQuoteIdInverseInput>,
};

export type UpdateQuotePayload = {
   __typename?: 'UpdateQuotePayload',
  clientMutationId?: Maybe<Scalars['String']>,
  quote?: Maybe<Quote>,
  query?: Maybe<Query>,
  trip?: Maybe<Trip>,
  heroImage?: Maybe<MediaItem>,
  hero?: Maybe<QuoteHero>,
  user?: Maybe<User>,
  quoteEdge?: Maybe<QuotesEdge>,
};


export type UpdateQuotePayloadQuoteEdgeArgs = {
  orderBy?: Maybe<Array<QuotesOrderBy>>
};

export type UpdateQuotePublicByNodeIdInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
  patch: QuotePublicPatch,
};

export type UpdateQuotePublicInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  patch: QuotePublicPatch,
  key: Scalars['String'],
};

export type UpdateQuotePublicOnQuoteAccommodationDetailForFakePublicQuoteAccommodationDetailForeignKey0Patch = {
  id?: Maybe<Scalars['UUID']>,
  key?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['Datetime']>,
  duration?: Maybe<Scalars['Int']>,
  travellerCount?: Maybe<Scalars['Int']>,
  total?: Maybe<Scalars['BigFloat']>,
  heroId?: Maybe<Scalars['UUID']>,
  tripId?: Maybe<Scalars['UUID']>,
  locked?: Maybe<Scalars['Datetime']>,
  baseCurrency?: Maybe<Scalars['String']>,
  inclusions?: Maybe<Scalars['String']>,
  exclusions?: Maybe<Scalars['String']>,
  expires?: Maybe<Scalars['Datetime']>,
  userId?: Maybe<Scalars['UUID']>,
  tripToTripId?: Maybe<FakePublicQuotePublicForeignKey0Input>,
  quoteHeroToHeroId?: Maybe<FakePublicQuotePublicForeignKey1Input>,
  userToUserId?: Maybe<FakePublicQuotePublicForeignKey2Input>,
  quoteAccommodationDetailsUsingId?: Maybe<FakePublicQuoteAccommodationDetailForeignKey0InverseInput>,
  quoteDaysUsingId?: Maybe<FakePublicQuoteDayForeignKey0InverseInput>,
};

export type UpdateQuotePublicOnQuoteDayForFakePublicQuoteDayForeignKey0Patch = {
  id?: Maybe<Scalars['UUID']>,
  key?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['Datetime']>,
  duration?: Maybe<Scalars['Int']>,
  travellerCount?: Maybe<Scalars['Int']>,
  total?: Maybe<Scalars['BigFloat']>,
  heroId?: Maybe<Scalars['UUID']>,
  tripId?: Maybe<Scalars['UUID']>,
  locked?: Maybe<Scalars['Datetime']>,
  baseCurrency?: Maybe<Scalars['String']>,
  inclusions?: Maybe<Scalars['String']>,
  exclusions?: Maybe<Scalars['String']>,
  expires?: Maybe<Scalars['Datetime']>,
  userId?: Maybe<Scalars['UUID']>,
  tripToTripId?: Maybe<FakePublicQuotePublicForeignKey0Input>,
  quoteHeroToHeroId?: Maybe<FakePublicQuotePublicForeignKey1Input>,
  userToUserId?: Maybe<FakePublicQuotePublicForeignKey2Input>,
  quoteAccommodationDetailsUsingId?: Maybe<FakePublicQuoteAccommodationDetailForeignKey0InverseInput>,
  quoteDaysUsingId?: Maybe<FakePublicQuoteDayForeignKey0InverseInput>,
};

export type UpdateQuotePublicOnQuotePublicForFakePublicQuotePublicForeignKey0Patch = {
  id?: Maybe<Scalars['UUID']>,
  key?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['Datetime']>,
  duration?: Maybe<Scalars['Int']>,
  travellerCount?: Maybe<Scalars['Int']>,
  total?: Maybe<Scalars['BigFloat']>,
  heroId?: Maybe<Scalars['UUID']>,
  locked?: Maybe<Scalars['Datetime']>,
  baseCurrency?: Maybe<Scalars['String']>,
  inclusions?: Maybe<Scalars['String']>,
  exclusions?: Maybe<Scalars['String']>,
  expires?: Maybe<Scalars['Datetime']>,
  userId?: Maybe<Scalars['UUID']>,
  tripToTripId?: Maybe<FakePublicQuotePublicForeignKey0Input>,
  quoteHeroToHeroId?: Maybe<FakePublicQuotePublicForeignKey1Input>,
  userToUserId?: Maybe<FakePublicQuotePublicForeignKey2Input>,
  quoteAccommodationDetailsUsingId?: Maybe<FakePublicQuoteAccommodationDetailForeignKey0InverseInput>,
  quoteDaysUsingId?: Maybe<FakePublicQuoteDayForeignKey0InverseInput>,
};

export type UpdateQuotePublicOnQuotePublicForFakePublicQuotePublicForeignKey1Patch = {
  id?: Maybe<Scalars['UUID']>,
  key?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['Datetime']>,
  duration?: Maybe<Scalars['Int']>,
  travellerCount?: Maybe<Scalars['Int']>,
  total?: Maybe<Scalars['BigFloat']>,
  tripId?: Maybe<Scalars['UUID']>,
  locked?: Maybe<Scalars['Datetime']>,
  baseCurrency?: Maybe<Scalars['String']>,
  inclusions?: Maybe<Scalars['String']>,
  exclusions?: Maybe<Scalars['String']>,
  expires?: Maybe<Scalars['Datetime']>,
  userId?: Maybe<Scalars['UUID']>,
  tripToTripId?: Maybe<FakePublicQuotePublicForeignKey0Input>,
  quoteHeroToHeroId?: Maybe<FakePublicQuotePublicForeignKey1Input>,
  userToUserId?: Maybe<FakePublicQuotePublicForeignKey2Input>,
  quoteAccommodationDetailsUsingId?: Maybe<FakePublicQuoteAccommodationDetailForeignKey0InverseInput>,
  quoteDaysUsingId?: Maybe<FakePublicQuoteDayForeignKey0InverseInput>,
};

export type UpdateQuotePublicOnQuotePublicForFakePublicQuotePublicForeignKey2Patch = {
  id?: Maybe<Scalars['UUID']>,
  key?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['Datetime']>,
  duration?: Maybe<Scalars['Int']>,
  travellerCount?: Maybe<Scalars['Int']>,
  total?: Maybe<Scalars['BigFloat']>,
  heroId?: Maybe<Scalars['UUID']>,
  tripId?: Maybe<Scalars['UUID']>,
  locked?: Maybe<Scalars['Datetime']>,
  baseCurrency?: Maybe<Scalars['String']>,
  inclusions?: Maybe<Scalars['String']>,
  exclusions?: Maybe<Scalars['String']>,
  expires?: Maybe<Scalars['Datetime']>,
  tripToTripId?: Maybe<FakePublicQuotePublicForeignKey0Input>,
  quoteHeroToHeroId?: Maybe<FakePublicQuotePublicForeignKey1Input>,
  userToUserId?: Maybe<FakePublicQuotePublicForeignKey2Input>,
  quoteAccommodationDetailsUsingId?: Maybe<FakePublicQuoteAccommodationDetailForeignKey0InverseInput>,
  quoteDaysUsingId?: Maybe<FakePublicQuoteDayForeignKey0InverseInput>,
};

export type UpdateQuotePublicPayload = {
   __typename?: 'UpdateQuotePublicPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  quotePublic?: Maybe<QuotePublic>,
  query?: Maybe<Query>,
  trip?: Maybe<Trip>,
  hero?: Maybe<QuoteHero>,
  user?: Maybe<User>,
  quotePublicEdge?: Maybe<QuotePublicsEdge>,
};


export type UpdateQuotePublicPayloadQuotePublicEdgeArgs = {
  orderBy?: Maybe<Array<QuotePublicsOrderBy>>
};

export type UpdateQuoteViewByNodeIdInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
  patch: QuoteViewPatch,
};

export type UpdateQuoteViewInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  patch: QuoteViewPatch,
  id: Scalars['UUID'],
};

export type UpdateQuoteViewOnQuoteViewForFkQuoteViewQuoteQuoteIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  city?: Maybe<Scalars['String']>,
  country?: Maybe<Scalars['String']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  timezone?: Maybe<Scalars['String']>,
  userIp?: Maybe<Scalars['String']>,
  viewType?: Maybe<Scalars['String']>,
  quoteToQuoteId?: Maybe<FkQuoteViewQuoteQuoteIdInput>,
};

export type UpdateQuoteViewPayload = {
   __typename?: 'UpdateQuoteViewPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  quoteView?: Maybe<QuoteView>,
  query?: Maybe<Query>,
  quote?: Maybe<Quote>,
  quoteViewEdge?: Maybe<QuoteViewsEdge>,
};


export type UpdateQuoteViewPayloadQuoteViewEdgeArgs = {
  orderBy?: Maybe<Array<QuoteViewsOrderBy>>
};

export type UpdateReminderByNodeIdInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
  patch: ReminderPatch,
};

export type UpdateReminderInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  patch: ReminderPatch,
  id: Scalars['UUID'],
};

export type UpdateReminderOnReminderForFkReminderUserUserIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  body?: Maybe<Scalars['String']>,
  date?: Maybe<Scalars['Datetime']>,
  userToUserId?: Maybe<FkReminderUserUserIdInput>,
};

export type UpdateReminderPayload = {
   __typename?: 'UpdateReminderPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  reminder?: Maybe<Reminder>,
  query?: Maybe<Query>,
  user?: Maybe<User>,
  reminderEdge?: Maybe<RemindersEdge>,
};


export type UpdateReminderPayloadReminderEdgeArgs = {
  orderBy?: Maybe<Array<RemindersOrderBy>>
};

export type UpdateSupplierByNodeIdInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
  patch: SupplierPatch,
};

export type UpdateSupplierInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  patch: SupplierPatch,
  id: Scalars['UUID'],
};

export type UpdateSupplierInvoiceByNodeIdInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
  patch: SupplierInvoicePatch,
};

export type UpdateSupplierInvoiceInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  patch: SupplierInvoicePatch,
  id: Scalars['UUID'],
};

export type UpdateSupplierInvoiceOnExpenseForFkExpenseSupplierInvoiceSupplierInvoiceIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  amount?: Maybe<Scalars['BigFloat']>,
  categoryId?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  currency?: Maybe<Scalars['String']>,
  due?: Maybe<Scalars['Datetime']>,
  key?: Maybe<Scalars['String']>,
  modified?: Maybe<Scalars['Datetime']>,
  number?: Maybe<Scalars['Int']>,
  summary?: Maybe<Scalars['String']>,
  supplierId?: Maybe<Scalars['UUID']>,
  tripId?: Maybe<Scalars['UUID']>,
  type?: Maybe<Scalars['String']>,
  voided?: Maybe<Scalars['Datetime']>,
  amountActual?: Maybe<Scalars['BigFloat']>,
  paid?: Maybe<Scalars['Datetime']>,
  mediaItemId?: Maybe<Scalars['UUID']>,
  financeCategoryToCategoryId?: Maybe<FkSupplierInvoiceFinanceCategoryCategoryIdInput>,
  supplierToSupplierId?: Maybe<FkSupplierInvoiceSupplierSupplierIdInput>,
  tripToTripId?: Maybe<FkSupplierInvoiceTripTripIdInput>,
  mediaItemToMediaItemId?: Maybe<FkSupplierInvoiceMediaItemMediaItemIdInput>,
  expensesUsingId?: Maybe<FkExpenseSupplierInvoiceSupplierInvoiceIdInverseInput>,
  transactionLinksUsingId?: Maybe<FkTransactionLinkSupplierInvoiceSupplierInvoiceIdInverseInput>,
};

export type UpdateSupplierInvoiceOnSupplierInvoiceForFkSupplierInvoiceFinanceCategoryCategoryIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  amount?: Maybe<Scalars['BigFloat']>,
  created?: Maybe<Scalars['Datetime']>,
  currency?: Maybe<Scalars['String']>,
  due?: Maybe<Scalars['Datetime']>,
  key?: Maybe<Scalars['String']>,
  modified?: Maybe<Scalars['Datetime']>,
  number?: Maybe<Scalars['Int']>,
  summary?: Maybe<Scalars['String']>,
  supplierId?: Maybe<Scalars['UUID']>,
  tripId?: Maybe<Scalars['UUID']>,
  type?: Maybe<Scalars['String']>,
  voided?: Maybe<Scalars['Datetime']>,
  amountActual?: Maybe<Scalars['BigFloat']>,
  paid?: Maybe<Scalars['Datetime']>,
  mediaItemId?: Maybe<Scalars['UUID']>,
  financeCategoryToCategoryId?: Maybe<FkSupplierInvoiceFinanceCategoryCategoryIdInput>,
  supplierToSupplierId?: Maybe<FkSupplierInvoiceSupplierSupplierIdInput>,
  tripToTripId?: Maybe<FkSupplierInvoiceTripTripIdInput>,
  mediaItemToMediaItemId?: Maybe<FkSupplierInvoiceMediaItemMediaItemIdInput>,
  expensesUsingId?: Maybe<FkExpenseSupplierInvoiceSupplierInvoiceIdInverseInput>,
  transactionLinksUsingId?: Maybe<FkTransactionLinkSupplierInvoiceSupplierInvoiceIdInverseInput>,
};

export type UpdateSupplierInvoiceOnSupplierInvoiceForFkSupplierInvoiceMediaItemMediaItemIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  amount?: Maybe<Scalars['BigFloat']>,
  categoryId?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  currency?: Maybe<Scalars['String']>,
  due?: Maybe<Scalars['Datetime']>,
  key?: Maybe<Scalars['String']>,
  modified?: Maybe<Scalars['Datetime']>,
  number?: Maybe<Scalars['Int']>,
  summary?: Maybe<Scalars['String']>,
  supplierId?: Maybe<Scalars['UUID']>,
  tripId?: Maybe<Scalars['UUID']>,
  type?: Maybe<Scalars['String']>,
  voided?: Maybe<Scalars['Datetime']>,
  amountActual?: Maybe<Scalars['BigFloat']>,
  paid?: Maybe<Scalars['Datetime']>,
  financeCategoryToCategoryId?: Maybe<FkSupplierInvoiceFinanceCategoryCategoryIdInput>,
  supplierToSupplierId?: Maybe<FkSupplierInvoiceSupplierSupplierIdInput>,
  tripToTripId?: Maybe<FkSupplierInvoiceTripTripIdInput>,
  mediaItemToMediaItemId?: Maybe<FkSupplierInvoiceMediaItemMediaItemIdInput>,
  expensesUsingId?: Maybe<FkExpenseSupplierInvoiceSupplierInvoiceIdInverseInput>,
  transactionLinksUsingId?: Maybe<FkTransactionLinkSupplierInvoiceSupplierInvoiceIdInverseInput>,
};

export type UpdateSupplierInvoiceOnSupplierInvoiceForFkSupplierInvoiceSupplierSupplierIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  amount?: Maybe<Scalars['BigFloat']>,
  categoryId?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  currency?: Maybe<Scalars['String']>,
  due?: Maybe<Scalars['Datetime']>,
  key?: Maybe<Scalars['String']>,
  modified?: Maybe<Scalars['Datetime']>,
  number?: Maybe<Scalars['Int']>,
  summary?: Maybe<Scalars['String']>,
  tripId?: Maybe<Scalars['UUID']>,
  type?: Maybe<Scalars['String']>,
  voided?: Maybe<Scalars['Datetime']>,
  amountActual?: Maybe<Scalars['BigFloat']>,
  paid?: Maybe<Scalars['Datetime']>,
  mediaItemId?: Maybe<Scalars['UUID']>,
  financeCategoryToCategoryId?: Maybe<FkSupplierInvoiceFinanceCategoryCategoryIdInput>,
  supplierToSupplierId?: Maybe<FkSupplierInvoiceSupplierSupplierIdInput>,
  tripToTripId?: Maybe<FkSupplierInvoiceTripTripIdInput>,
  mediaItemToMediaItemId?: Maybe<FkSupplierInvoiceMediaItemMediaItemIdInput>,
  expensesUsingId?: Maybe<FkExpenseSupplierInvoiceSupplierInvoiceIdInverseInput>,
  transactionLinksUsingId?: Maybe<FkTransactionLinkSupplierInvoiceSupplierInvoiceIdInverseInput>,
};

export type UpdateSupplierInvoiceOnSupplierInvoiceForFkSupplierInvoiceTripTripIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  amount?: Maybe<Scalars['BigFloat']>,
  categoryId?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  currency?: Maybe<Scalars['String']>,
  due?: Maybe<Scalars['Datetime']>,
  key?: Maybe<Scalars['String']>,
  modified?: Maybe<Scalars['Datetime']>,
  number?: Maybe<Scalars['Int']>,
  summary?: Maybe<Scalars['String']>,
  supplierId?: Maybe<Scalars['UUID']>,
  type?: Maybe<Scalars['String']>,
  voided?: Maybe<Scalars['Datetime']>,
  amountActual?: Maybe<Scalars['BigFloat']>,
  paid?: Maybe<Scalars['Datetime']>,
  mediaItemId?: Maybe<Scalars['UUID']>,
  financeCategoryToCategoryId?: Maybe<FkSupplierInvoiceFinanceCategoryCategoryIdInput>,
  supplierToSupplierId?: Maybe<FkSupplierInvoiceSupplierSupplierIdInput>,
  tripToTripId?: Maybe<FkSupplierInvoiceTripTripIdInput>,
  mediaItemToMediaItemId?: Maybe<FkSupplierInvoiceMediaItemMediaItemIdInput>,
  expensesUsingId?: Maybe<FkExpenseSupplierInvoiceSupplierInvoiceIdInverseInput>,
  transactionLinksUsingId?: Maybe<FkTransactionLinkSupplierInvoiceSupplierInvoiceIdInverseInput>,
};

export type UpdateSupplierInvoiceOnTransactionLinkForFkTransactionLinkSupplierInvoiceSupplierInvoiceIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  amount?: Maybe<Scalars['BigFloat']>,
  categoryId?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  currency?: Maybe<Scalars['String']>,
  due?: Maybe<Scalars['Datetime']>,
  key?: Maybe<Scalars['String']>,
  modified?: Maybe<Scalars['Datetime']>,
  number?: Maybe<Scalars['Int']>,
  summary?: Maybe<Scalars['String']>,
  supplierId?: Maybe<Scalars['UUID']>,
  tripId?: Maybe<Scalars['UUID']>,
  type?: Maybe<Scalars['String']>,
  voided?: Maybe<Scalars['Datetime']>,
  amountActual?: Maybe<Scalars['BigFloat']>,
  paid?: Maybe<Scalars['Datetime']>,
  mediaItemId?: Maybe<Scalars['UUID']>,
  financeCategoryToCategoryId?: Maybe<FkSupplierInvoiceFinanceCategoryCategoryIdInput>,
  supplierToSupplierId?: Maybe<FkSupplierInvoiceSupplierSupplierIdInput>,
  tripToTripId?: Maybe<FkSupplierInvoiceTripTripIdInput>,
  mediaItemToMediaItemId?: Maybe<FkSupplierInvoiceMediaItemMediaItemIdInput>,
  expensesUsingId?: Maybe<FkExpenseSupplierInvoiceSupplierInvoiceIdInverseInput>,
  transactionLinksUsingId?: Maybe<FkTransactionLinkSupplierInvoiceSupplierInvoiceIdInverseInput>,
};

export type UpdateSupplierInvoicePayload = {
   __typename?: 'UpdateSupplierInvoicePayload',
  clientMutationId?: Maybe<Scalars['String']>,
  supplierInvoice?: Maybe<SupplierInvoice>,
  query?: Maybe<Query>,
  category?: Maybe<FinanceCategory>,
  supplier?: Maybe<Supplier>,
  trip?: Maybe<Trip>,
  mediaItem?: Maybe<MediaItem>,
  supplierInvoiceEdge?: Maybe<SupplierInvoicesEdge>,
};


export type UpdateSupplierInvoicePayloadSupplierInvoiceEdgeArgs = {
  orderBy?: Maybe<Array<SupplierInvoicesOrderBy>>
};

export type UpdateSupplierOnExpenseForFkExpenseSupplierSupplierIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  contactEmail?: Maybe<Scalars['String']>,
  contactNumber?: Maybe<Scalars['String']>,
  region?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
  bankDetails?: Maybe<Scalars['String']>,
  galleryId?: Maybe<Scalars['UUID']>,
  mediaGalleryToGalleryId?: Maybe<FkSupplierMediaGalleryGalleryIdInput>,
  expensesUsingId?: Maybe<FkExpenseSupplierSupplierIdInverseInput>,
  supplierInvoicesUsingId?: Maybe<FkSupplierInvoiceSupplierSupplierIdInverseInput>,
  quoteFinanceLineItemsUsingId?: Maybe<FkQuoteFinanceLineItemSupplierSupplierIdInverseInput>,
};

export type UpdateSupplierOnQuoteFinanceLineItemForFkQuoteFinanceLineItemSupplierSupplierIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  contactEmail?: Maybe<Scalars['String']>,
  contactNumber?: Maybe<Scalars['String']>,
  region?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
  bankDetails?: Maybe<Scalars['String']>,
  galleryId?: Maybe<Scalars['UUID']>,
  mediaGalleryToGalleryId?: Maybe<FkSupplierMediaGalleryGalleryIdInput>,
  expensesUsingId?: Maybe<FkExpenseSupplierSupplierIdInverseInput>,
  supplierInvoicesUsingId?: Maybe<FkSupplierInvoiceSupplierSupplierIdInverseInput>,
  quoteFinanceLineItemsUsingId?: Maybe<FkQuoteFinanceLineItemSupplierSupplierIdInverseInput>,
};

export type UpdateSupplierOnSupplierForFkSupplierMediaGalleryGalleryIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  contactEmail?: Maybe<Scalars['String']>,
  contactNumber?: Maybe<Scalars['String']>,
  region?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
  bankDetails?: Maybe<Scalars['String']>,
  mediaGalleryToGalleryId?: Maybe<FkSupplierMediaGalleryGalleryIdInput>,
  expensesUsingId?: Maybe<FkExpenseSupplierSupplierIdInverseInput>,
  supplierInvoicesUsingId?: Maybe<FkSupplierInvoiceSupplierSupplierIdInverseInput>,
  quoteFinanceLineItemsUsingId?: Maybe<FkQuoteFinanceLineItemSupplierSupplierIdInverseInput>,
};

export type UpdateSupplierOnSupplierInvoiceForFkSupplierInvoiceSupplierSupplierIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  contactEmail?: Maybe<Scalars['String']>,
  contactNumber?: Maybe<Scalars['String']>,
  region?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
  bankDetails?: Maybe<Scalars['String']>,
  galleryId?: Maybe<Scalars['UUID']>,
  mediaGalleryToGalleryId?: Maybe<FkSupplierMediaGalleryGalleryIdInput>,
  expensesUsingId?: Maybe<FkExpenseSupplierSupplierIdInverseInput>,
  supplierInvoicesUsingId?: Maybe<FkSupplierInvoiceSupplierSupplierIdInverseInput>,
  quoteFinanceLineItemsUsingId?: Maybe<FkQuoteFinanceLineItemSupplierSupplierIdInverseInput>,
};

export type UpdateSupplierPayload = {
   __typename?: 'UpdateSupplierPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  supplier?: Maybe<Supplier>,
  query?: Maybe<Query>,
  gallery?: Maybe<MediaGallery>,
  supplierEdge?: Maybe<SuppliersEdge>,
};


export type UpdateSupplierPayloadSupplierEdgeArgs = {
  orderBy?: Maybe<Array<SuppliersOrderBy>>
};

export type UpdateTestimonialByNodeIdInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
  patch: TestimonialPatch,
};

export type UpdateTestimonialInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  patch: TestimonialPatch,
  id: Scalars['UUID'],
};

export type UpdateTestimonialOnTestimonialForFkTestimonialTripTripIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  body?: Maybe<Scalars['String']>,
  created?: Maybe<Scalars['Datetime']>,
  guestName?: Maybe<Scalars['String']>,
  modified?: Maybe<Scalars['Datetime']>,
  tripToTripId?: Maybe<FkTestimonialTripTripIdInput>,
};

export type UpdateTestimonialPayload = {
   __typename?: 'UpdateTestimonialPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  testimonial?: Maybe<Testimonial>,
  query?: Maybe<Query>,
  trip?: Maybe<Trip>,
  testimonialEdge?: Maybe<TestimonialsEdge>,
};


export type UpdateTestimonialPayloadTestimonialEdgeArgs = {
  orderBy?: Maybe<Array<TestimonialsOrderBy>>
};

export type UpdateTransactionByNodeIdInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
  patch: TransactionPatch,
};

export type UpdateTransactionImportBatchByNodeIdInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
  patch: TransactionImportBatchPatch,
};

export type UpdateTransactionImportBatchInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  patch: TransactionImportBatchPatch,
  id: Scalars['UUID'],
};

export type UpdateTransactionImportBatchOnTransactionForFkTransactionTransactionImportBatchTransactionImportBatchIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  accountId?: Maybe<Scalars['UUID']>,
  dateRangeMin?: Maybe<Scalars['Datetime']>,
  dateRangeMax?: Maybe<Scalars['Datetime']>,
  key?: Maybe<Scalars['String']>,
  accountToAccountId?: Maybe<FkTransactionImportBatchAccountAccountIdInput>,
  transactionsUsingId?: Maybe<FkTransactionTransactionImportBatchTransactionImportBatchIdInverseInput>,
};

export type UpdateTransactionImportBatchOnTransactionImportBatchForFkTransactionImportBatchAccountAccountIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  dateRangeMin?: Maybe<Scalars['Datetime']>,
  dateRangeMax?: Maybe<Scalars['Datetime']>,
  key?: Maybe<Scalars['String']>,
  accountToAccountId?: Maybe<FkTransactionImportBatchAccountAccountIdInput>,
  transactionsUsingId?: Maybe<FkTransactionTransactionImportBatchTransactionImportBatchIdInverseInput>,
};

export type UpdateTransactionImportBatchPayload = {
   __typename?: 'UpdateTransactionImportBatchPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  transactionImportBatch?: Maybe<TransactionImportBatch>,
  query?: Maybe<Query>,
  account?: Maybe<Account>,
  transactionImportBatchEdge?: Maybe<TransactionImportBatchesEdge>,
};


export type UpdateTransactionImportBatchPayloadTransactionImportBatchEdgeArgs = {
  orderBy?: Maybe<Array<TransactionImportBatchesOrderBy>>
};

export type UpdateTransactionInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  patch: TransactionPatch,
  id: Scalars['UUID'],
};

export type UpdateTransactionLinkByNodeIdInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
  patch: TransactionLinkPatch,
};

export type UpdateTransactionLinkInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  patch: TransactionLinkPatch,
  id: Scalars['UUID'],
};

export type UpdateTransactionLinkOnTransactionLinkForFkTransactionLinkExpenseExpenseIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  transactionId?: Maybe<Scalars['UUID']>,
  invoiceId?: Maybe<Scalars['UUID']>,
  supplierInvoiceId?: Maybe<Scalars['UUID']>,
  paymentId?: Maybe<Scalars['UUID']>,
  status?: Maybe<Scalars['Int']>,
  transactionToTransactionId?: Maybe<FkTransactionLinkTransactionTransactionIdInput>,
  invoiceToInvoiceId?: Maybe<FkTransactionLinkInvoiceInvoiceIdInput>,
  supplierInvoiceToSupplierInvoiceId?: Maybe<FkTransactionLinkSupplierInvoiceSupplierInvoiceIdInput>,
  paymentToPaymentId?: Maybe<FkTransactionLinkPaymentPaymentIdInput>,
  expenseToExpenseId?: Maybe<FkTransactionLinkExpenseExpenseIdInput>,
};

export type UpdateTransactionLinkOnTransactionLinkForFkTransactionLinkInvoiceInvoiceIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  transactionId?: Maybe<Scalars['UUID']>,
  supplierInvoiceId?: Maybe<Scalars['UUID']>,
  paymentId?: Maybe<Scalars['UUID']>,
  expenseId?: Maybe<Scalars['UUID']>,
  status?: Maybe<Scalars['Int']>,
  transactionToTransactionId?: Maybe<FkTransactionLinkTransactionTransactionIdInput>,
  invoiceToInvoiceId?: Maybe<FkTransactionLinkInvoiceInvoiceIdInput>,
  supplierInvoiceToSupplierInvoiceId?: Maybe<FkTransactionLinkSupplierInvoiceSupplierInvoiceIdInput>,
  paymentToPaymentId?: Maybe<FkTransactionLinkPaymentPaymentIdInput>,
  expenseToExpenseId?: Maybe<FkTransactionLinkExpenseExpenseIdInput>,
};

export type UpdateTransactionLinkOnTransactionLinkForFkTransactionLinkPaymentPaymentIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  transactionId?: Maybe<Scalars['UUID']>,
  invoiceId?: Maybe<Scalars['UUID']>,
  supplierInvoiceId?: Maybe<Scalars['UUID']>,
  expenseId?: Maybe<Scalars['UUID']>,
  status?: Maybe<Scalars['Int']>,
  transactionToTransactionId?: Maybe<FkTransactionLinkTransactionTransactionIdInput>,
  invoiceToInvoiceId?: Maybe<FkTransactionLinkInvoiceInvoiceIdInput>,
  supplierInvoiceToSupplierInvoiceId?: Maybe<FkTransactionLinkSupplierInvoiceSupplierInvoiceIdInput>,
  paymentToPaymentId?: Maybe<FkTransactionLinkPaymentPaymentIdInput>,
  expenseToExpenseId?: Maybe<FkTransactionLinkExpenseExpenseIdInput>,
};

export type UpdateTransactionLinkOnTransactionLinkForFkTransactionLinkSupplierInvoiceSupplierInvoiceIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  transactionId?: Maybe<Scalars['UUID']>,
  invoiceId?: Maybe<Scalars['UUID']>,
  paymentId?: Maybe<Scalars['UUID']>,
  expenseId?: Maybe<Scalars['UUID']>,
  status?: Maybe<Scalars['Int']>,
  transactionToTransactionId?: Maybe<FkTransactionLinkTransactionTransactionIdInput>,
  invoiceToInvoiceId?: Maybe<FkTransactionLinkInvoiceInvoiceIdInput>,
  supplierInvoiceToSupplierInvoiceId?: Maybe<FkTransactionLinkSupplierInvoiceSupplierInvoiceIdInput>,
  paymentToPaymentId?: Maybe<FkTransactionLinkPaymentPaymentIdInput>,
  expenseToExpenseId?: Maybe<FkTransactionLinkExpenseExpenseIdInput>,
};

export type UpdateTransactionLinkOnTransactionLinkForFkTransactionLinkTransactionTransactionIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  invoiceId?: Maybe<Scalars['UUID']>,
  supplierInvoiceId?: Maybe<Scalars['UUID']>,
  paymentId?: Maybe<Scalars['UUID']>,
  expenseId?: Maybe<Scalars['UUID']>,
  status?: Maybe<Scalars['Int']>,
  transactionToTransactionId?: Maybe<FkTransactionLinkTransactionTransactionIdInput>,
  invoiceToInvoiceId?: Maybe<FkTransactionLinkInvoiceInvoiceIdInput>,
  supplierInvoiceToSupplierInvoiceId?: Maybe<FkTransactionLinkSupplierInvoiceSupplierInvoiceIdInput>,
  paymentToPaymentId?: Maybe<FkTransactionLinkPaymentPaymentIdInput>,
  expenseToExpenseId?: Maybe<FkTransactionLinkExpenseExpenseIdInput>,
};

export type UpdateTransactionLinkPayload = {
   __typename?: 'UpdateTransactionLinkPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  transactionLink?: Maybe<TransactionLink>,
  query?: Maybe<Query>,
  transaction?: Maybe<Transaction>,
  invoice?: Maybe<Invoice>,
  supplierInvoice?: Maybe<SupplierInvoice>,
  payment?: Maybe<Payment>,
  expense?: Maybe<Expense>,
  transactionLinkEdge?: Maybe<TransactionLinksEdge>,
};


export type UpdateTransactionLinkPayloadTransactionLinkEdgeArgs = {
  orderBy?: Maybe<Array<TransactionLinksOrderBy>>
};

export type UpdateTransactionNoteByNodeIdInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
  patch: TransactionNotePatch,
};

export type UpdateTransactionNoteInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  patch: TransactionNotePatch,
  id: Scalars['UUID'],
};

export type UpdateTransactionNoteOnTransactionNoteForFkTransactionNoteTransactionTransactionIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  userId?: Maybe<Scalars['UUID']>,
  message?: Maybe<Scalars['String']>,
  userToUserId?: Maybe<FkTransactionNoteUserUserIdInput>,
  transactionToTransactionId?: Maybe<FkTransactionNoteTransactionTransactionIdInput>,
};

export type UpdateTransactionNoteOnTransactionNoteForFkTransactionNoteUserUserIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  message?: Maybe<Scalars['String']>,
  transactionId?: Maybe<Scalars['UUID']>,
  userToUserId?: Maybe<FkTransactionNoteUserUserIdInput>,
  transactionToTransactionId?: Maybe<FkTransactionNoteTransactionTransactionIdInput>,
};

export type UpdateTransactionNotePayload = {
   __typename?: 'UpdateTransactionNotePayload',
  clientMutationId?: Maybe<Scalars['String']>,
  transactionNote?: Maybe<TransactionNote>,
  query?: Maybe<Query>,
  user?: Maybe<User>,
  transaction?: Maybe<Transaction>,
  transactionNoteEdge?: Maybe<TransactionNotesEdge>,
};


export type UpdateTransactionNotePayloadTransactionNoteEdgeArgs = {
  orderBy?: Maybe<Array<TransactionNotesOrderBy>>
};

export type UpdateTransactionOnTransactionForFkTransactionAccountAccountIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  amount?: Maybe<Scalars['BigFloat']>,
  externalId?: Maybe<Scalars['String']>,
  date?: Maybe<Scalars['Datetime']>,
  description?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['Int']>,
  reverseTransactionId?: Maybe<Scalars['UUID']>,
  source?: Maybe<Scalars['String']>,
  transactionImportBatchId?: Maybe<Scalars['UUID']>,
  balance?: Maybe<Scalars['BigFloat']>,
  currency?: Maybe<Scalars['String']>,
  categoryId?: Maybe<Scalars['UUID']>,
  accountToAccountId?: Maybe<FkTransactionAccountAccountIdInput>,
  transactionToReverseTransactionId?: Maybe<FkTransactionTransactionReverseTransactionIdInput>,
  transactionImportBatchToTransactionImportBatchId?: Maybe<FkTransactionTransactionImportBatchTransactionImportBatchIdInput>,
  financeCategoryToCategoryId?: Maybe<FkTransactionFinanceCategoryCategoryIdInput>,
  transactionLinksUsingId?: Maybe<FkTransactionLinkTransactionTransactionIdInverseInput>,
  transactionNotesUsingId?: Maybe<FkTransactionNoteTransactionTransactionIdInverseInput>,
};

export type UpdateTransactionOnTransactionForFkTransactionFinanceCategoryCategoryIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  accountId?: Maybe<Scalars['UUID']>,
  amount?: Maybe<Scalars['BigFloat']>,
  externalId?: Maybe<Scalars['String']>,
  date?: Maybe<Scalars['Datetime']>,
  description?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['Int']>,
  reverseTransactionId?: Maybe<Scalars['UUID']>,
  source?: Maybe<Scalars['String']>,
  transactionImportBatchId?: Maybe<Scalars['UUID']>,
  balance?: Maybe<Scalars['BigFloat']>,
  currency?: Maybe<Scalars['String']>,
  accountToAccountId?: Maybe<FkTransactionAccountAccountIdInput>,
  transactionToReverseTransactionId?: Maybe<FkTransactionTransactionReverseTransactionIdInput>,
  transactionImportBatchToTransactionImportBatchId?: Maybe<FkTransactionTransactionImportBatchTransactionImportBatchIdInput>,
  financeCategoryToCategoryId?: Maybe<FkTransactionFinanceCategoryCategoryIdInput>,
  transactionLinksUsingId?: Maybe<FkTransactionLinkTransactionTransactionIdInverseInput>,
  transactionNotesUsingId?: Maybe<FkTransactionNoteTransactionTransactionIdInverseInput>,
};

export type UpdateTransactionOnTransactionForFkTransactionTransactionImportBatchTransactionImportBatchIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  accountId?: Maybe<Scalars['UUID']>,
  amount?: Maybe<Scalars['BigFloat']>,
  externalId?: Maybe<Scalars['String']>,
  date?: Maybe<Scalars['Datetime']>,
  description?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['Int']>,
  reverseTransactionId?: Maybe<Scalars['UUID']>,
  source?: Maybe<Scalars['String']>,
  balance?: Maybe<Scalars['BigFloat']>,
  currency?: Maybe<Scalars['String']>,
  categoryId?: Maybe<Scalars['UUID']>,
  accountToAccountId?: Maybe<FkTransactionAccountAccountIdInput>,
  transactionToReverseTransactionId?: Maybe<FkTransactionTransactionReverseTransactionIdInput>,
  transactionImportBatchToTransactionImportBatchId?: Maybe<FkTransactionTransactionImportBatchTransactionImportBatchIdInput>,
  financeCategoryToCategoryId?: Maybe<FkTransactionFinanceCategoryCategoryIdInput>,
  transactionLinksUsingId?: Maybe<FkTransactionLinkTransactionTransactionIdInverseInput>,
  transactionNotesUsingId?: Maybe<FkTransactionNoteTransactionTransactionIdInverseInput>,
};

export type UpdateTransactionOnTransactionForFkTransactionTransactionReverseTransactionIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  accountId?: Maybe<Scalars['UUID']>,
  amount?: Maybe<Scalars['BigFloat']>,
  externalId?: Maybe<Scalars['String']>,
  date?: Maybe<Scalars['Datetime']>,
  description?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['Int']>,
  source?: Maybe<Scalars['String']>,
  transactionImportBatchId?: Maybe<Scalars['UUID']>,
  balance?: Maybe<Scalars['BigFloat']>,
  currency?: Maybe<Scalars['String']>,
  categoryId?: Maybe<Scalars['UUID']>,
  accountToAccountId?: Maybe<FkTransactionAccountAccountIdInput>,
  transactionToReverseTransactionId?: Maybe<FkTransactionTransactionReverseTransactionIdInput>,
  transactionImportBatchToTransactionImportBatchId?: Maybe<FkTransactionTransactionImportBatchTransactionImportBatchIdInput>,
  financeCategoryToCategoryId?: Maybe<FkTransactionFinanceCategoryCategoryIdInput>,
  transactionLinksUsingId?: Maybe<FkTransactionLinkTransactionTransactionIdInverseInput>,
  transactionNotesUsingId?: Maybe<FkTransactionNoteTransactionTransactionIdInverseInput>,
};

export type UpdateTransactionOnTransactionLinkForFkTransactionLinkTransactionTransactionIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  accountId?: Maybe<Scalars['UUID']>,
  amount?: Maybe<Scalars['BigFloat']>,
  externalId?: Maybe<Scalars['String']>,
  date?: Maybe<Scalars['Datetime']>,
  description?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['Int']>,
  reverseTransactionId?: Maybe<Scalars['UUID']>,
  source?: Maybe<Scalars['String']>,
  transactionImportBatchId?: Maybe<Scalars['UUID']>,
  balance?: Maybe<Scalars['BigFloat']>,
  currency?: Maybe<Scalars['String']>,
  categoryId?: Maybe<Scalars['UUID']>,
  accountToAccountId?: Maybe<FkTransactionAccountAccountIdInput>,
  transactionToReverseTransactionId?: Maybe<FkTransactionTransactionReverseTransactionIdInput>,
  transactionImportBatchToTransactionImportBatchId?: Maybe<FkTransactionTransactionImportBatchTransactionImportBatchIdInput>,
  financeCategoryToCategoryId?: Maybe<FkTransactionFinanceCategoryCategoryIdInput>,
  transactionLinksUsingId?: Maybe<FkTransactionLinkTransactionTransactionIdInverseInput>,
  transactionNotesUsingId?: Maybe<FkTransactionNoteTransactionTransactionIdInverseInput>,
};

export type UpdateTransactionOnTransactionNoteForFkTransactionNoteTransactionTransactionIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  accountId?: Maybe<Scalars['UUID']>,
  amount?: Maybe<Scalars['BigFloat']>,
  externalId?: Maybe<Scalars['String']>,
  date?: Maybe<Scalars['Datetime']>,
  description?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['Int']>,
  reverseTransactionId?: Maybe<Scalars['UUID']>,
  source?: Maybe<Scalars['String']>,
  transactionImportBatchId?: Maybe<Scalars['UUID']>,
  balance?: Maybe<Scalars['BigFloat']>,
  currency?: Maybe<Scalars['String']>,
  categoryId?: Maybe<Scalars['UUID']>,
  accountToAccountId?: Maybe<FkTransactionAccountAccountIdInput>,
  transactionToReverseTransactionId?: Maybe<FkTransactionTransactionReverseTransactionIdInput>,
  transactionImportBatchToTransactionImportBatchId?: Maybe<FkTransactionTransactionImportBatchTransactionImportBatchIdInput>,
  financeCategoryToCategoryId?: Maybe<FkTransactionFinanceCategoryCategoryIdInput>,
  transactionLinksUsingId?: Maybe<FkTransactionLinkTransactionTransactionIdInverseInput>,
  transactionNotesUsingId?: Maybe<FkTransactionNoteTransactionTransactionIdInverseInput>,
};

export type UpdateTransactionPayload = {
   __typename?: 'UpdateTransactionPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  transaction?: Maybe<Transaction>,
  query?: Maybe<Query>,
  account?: Maybe<Account>,
  reverseTransaction?: Maybe<Transaction>,
  transactionImportBatch?: Maybe<TransactionImportBatch>,
  category?: Maybe<FinanceCategory>,
  transactionEdge?: Maybe<TransactionsEdge>,
};


export type UpdateTransactionPayloadTransactionEdgeArgs = {
  orderBy?: Maybe<Array<TransactionsOrderBy>>
};

export type UpdateTravellerByNodeIdInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
  patch: TravellerPatch,
};

export type UpdateTravellerInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  patch: TravellerPatch,
  id: Scalars['UUID'],
};

export type UpdateTravellerOnCustomerTravellerForFkCustomerTravellerTravellerTravellerIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  dateOfBirth?: Maybe<Scalars['Datetime']>,
  dietaryRequirements?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  height?: Maybe<Scalars['Int']>,
  lastName?: Maybe<Scalars['String']>,
  medicalConditions?: Maybe<Scalars['String']>,
  middleName?: Maybe<Scalars['String']>,
  modified?: Maybe<Scalars['Datetime']>,
  nationality?: Maybe<Scalars['String']>,
  notes?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  weight?: Maybe<Scalars['Int']>,
  emergencyContact?: Maybe<Scalars['String']>,
  insuranceDetails?: Maybe<Scalars['String']>,
  customerTravellersUsingId?: Maybe<FkCustomerTravellerTravellerTravellerIdInverseInput>,
  passportsUsingId?: Maybe<FkPassportTravellerTravellerIdInverseInput>,
  tripTravellersUsingId?: Maybe<FkTripTravellerTravellerTravellerIdInverseInput>,
};

export type UpdateTravellerOnPassportForFkPassportTravellerTravellerIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  dateOfBirth?: Maybe<Scalars['Datetime']>,
  dietaryRequirements?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  height?: Maybe<Scalars['Int']>,
  lastName?: Maybe<Scalars['String']>,
  medicalConditions?: Maybe<Scalars['String']>,
  middleName?: Maybe<Scalars['String']>,
  modified?: Maybe<Scalars['Datetime']>,
  nationality?: Maybe<Scalars['String']>,
  notes?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  weight?: Maybe<Scalars['Int']>,
  emergencyContact?: Maybe<Scalars['String']>,
  insuranceDetails?: Maybe<Scalars['String']>,
  customerTravellersUsingId?: Maybe<FkCustomerTravellerTravellerTravellerIdInverseInput>,
  passportsUsingId?: Maybe<FkPassportTravellerTravellerIdInverseInput>,
  tripTravellersUsingId?: Maybe<FkTripTravellerTravellerTravellerIdInverseInput>,
};

export type UpdateTravellerOnTripTravellerForFkTripTravellerTravellerTravellerIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  dateOfBirth?: Maybe<Scalars['Datetime']>,
  dietaryRequirements?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  height?: Maybe<Scalars['Int']>,
  lastName?: Maybe<Scalars['String']>,
  medicalConditions?: Maybe<Scalars['String']>,
  middleName?: Maybe<Scalars['String']>,
  modified?: Maybe<Scalars['Datetime']>,
  nationality?: Maybe<Scalars['String']>,
  notes?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  weight?: Maybe<Scalars['Int']>,
  emergencyContact?: Maybe<Scalars['String']>,
  insuranceDetails?: Maybe<Scalars['String']>,
  customerTravellersUsingId?: Maybe<FkCustomerTravellerTravellerTravellerIdInverseInput>,
  passportsUsingId?: Maybe<FkPassportTravellerTravellerIdInverseInput>,
  tripTravellersUsingId?: Maybe<FkTripTravellerTravellerTravellerIdInverseInput>,
};

export type UpdateTravellerPayload = {
   __typename?: 'UpdateTravellerPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  traveller?: Maybe<Traveller>,
  query?: Maybe<Query>,
  travellerEdge?: Maybe<TravellersEdge>,
};


export type UpdateTravellerPayloadTravellerEdgeArgs = {
  orderBy?: Maybe<Array<TravellersOrderBy>>
};

export type UpdateTripByNodeIdInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
  patch: TripPatch,
};

export type UpdateTripFlightByNodeIdInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
  patch: TripFlightPatch,
};

export type UpdateTripFlightInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  patch: TripFlightPatch,
  id: Scalars['UUID'],
};

export type UpdateTripFlightOnTripFlightForFakePublicTripFlightForeignKey0Patch = {
  id?: Maybe<Scalars['UUID']>,
  arrival?: Maybe<Scalars['Datetime']>,
  arrivalAirport?: Maybe<Scalars['String']>,
  carrier?: Maybe<Scalars['String']>,
  departure?: Maybe<Scalars['Datetime']>,
  notes?: Maybe<Scalars['String']>,
  number?: Maybe<Scalars['String']>,
  tripId?: Maybe<Scalars['UUID']>,
  tripToTripId?: Maybe<FkTripFlightTripTripIdInput>,
  airportToDepartureAirport?: Maybe<FakePublicTripFlightForeignKey0Input>,
  airportToArrivalAirport?: Maybe<FakePublicTripFlightForeignKey1Input>,
};

export type UpdateTripFlightOnTripFlightForFakePublicTripFlightForeignKey1Patch = {
  id?: Maybe<Scalars['UUID']>,
  arrival?: Maybe<Scalars['Datetime']>,
  carrier?: Maybe<Scalars['String']>,
  departure?: Maybe<Scalars['Datetime']>,
  departureAirport?: Maybe<Scalars['String']>,
  notes?: Maybe<Scalars['String']>,
  number?: Maybe<Scalars['String']>,
  tripId?: Maybe<Scalars['UUID']>,
  tripToTripId?: Maybe<FkTripFlightTripTripIdInput>,
  airportToDepartureAirport?: Maybe<FakePublicTripFlightForeignKey0Input>,
  airportToArrivalAirport?: Maybe<FakePublicTripFlightForeignKey1Input>,
};

export type UpdateTripFlightOnTripFlightForFkTripFlightTripTripIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  arrival?: Maybe<Scalars['Datetime']>,
  arrivalAirport?: Maybe<Scalars['String']>,
  carrier?: Maybe<Scalars['String']>,
  departure?: Maybe<Scalars['Datetime']>,
  departureAirport?: Maybe<Scalars['String']>,
  notes?: Maybe<Scalars['String']>,
  number?: Maybe<Scalars['String']>,
  tripToTripId?: Maybe<FkTripFlightTripTripIdInput>,
  airportToDepartureAirport?: Maybe<FakePublicTripFlightForeignKey0Input>,
  airportToArrivalAirport?: Maybe<FakePublicTripFlightForeignKey1Input>,
};

export type UpdateTripFlightPayload = {
   __typename?: 'UpdateTripFlightPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  tripFlight?: Maybe<TripFlight>,
  query?: Maybe<Query>,
  trip?: Maybe<Trip>,
  airportByDepartureAirport?: Maybe<Airport>,
  airportByArrivalAirport?: Maybe<Airport>,
  tripFlightEdge?: Maybe<TripFlightsEdge>,
};


export type UpdateTripFlightPayloadTripFlightEdgeArgs = {
  orderBy?: Maybe<Array<TripFlightsOrderBy>>
};

export type UpdateTripInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  patch: TripPatch,
  id: Scalars['UUID'],
};

export type UpdateTripOnEmailForFkEmailTripTripIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  customerId?: Maybe<Scalars['UUID']>,
  userId?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  destination?: Maybe<Scalars['String']>,
  dates?: Maybe<Scalars['String']>,
  archived?: Maybe<Scalars['Datetime']>,
  mediaGalleryId?: Maybe<Scalars['UUID']>,
  activeQuoteId?: Maybe<Scalars['UUID']>,
  baseCurrency?: Maybe<Scalars['String']>,
  duration?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['Datetime']>,
  status?: Maybe<Scalars['Int']>,
  agencyId?: Maybe<Scalars['UUID']>,
  agencyMemberId?: Maybe<Scalars['UUID']>,
  customerToCustomerId?: Maybe<FkTripCustomerCustomerIdInput>,
  userToUserId?: Maybe<FkTripUserUserIdInput>,
  mediaGalleryToMediaGalleryId?: Maybe<FkTripMediaGalleryMediaGalleryIdInput>,
  quoteToActiveQuoteId?: Maybe<FkTripQuoteActiveQuoteIdInput>,
  agencyToAgencyId?: Maybe<FkTripAgencyAgencyIdInput>,
  agencyMemberToAgencyMemberId?: Maybe<FkTripAgencyMemberAgencyMemberIdInput>,
  expensesUsingId?: Maybe<FkExpenseTripTripIdInverseInput>,
  invoicesUsingId?: Maybe<FkInvoiceTripTripIdInverseInput>,
  paymentsUsingId?: Maybe<FkPaymentTripTripIdInverseInput>,
  supplierInvoicesUsingId?: Maybe<FkSupplierInvoiceTripTripIdInverseInput>,
  emailsUsingId?: Maybe<FkEmailTripTripIdInverseInput>,
  enquiriesUsingId?: Maybe<FkEnquiryTripTripIdInverseInput>,
  notesUsingId?: Maybe<FkNoteTripTripIdInverseInput>,
  quotesUsingId?: Maybe<FkQuoteTripTripIdInverseInput>,
  testimonialsUsingId?: Maybe<FkTestimonialTripTripIdInverseInput>,
  tripTravellersUsingId?: Maybe<FkTripTravellerTripTripIdInverseInput>,
  tripFlightsUsingId?: Maybe<FkTripFlightTripTripIdInverseInput>,
  quotePublicsUsingId?: Maybe<FakePublicQuotePublicForeignKey0InverseInput>,
};

export type UpdateTripOnEnquiryForFkEnquiryTripTripIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  customerId?: Maybe<Scalars['UUID']>,
  userId?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  destination?: Maybe<Scalars['String']>,
  dates?: Maybe<Scalars['String']>,
  archived?: Maybe<Scalars['Datetime']>,
  mediaGalleryId?: Maybe<Scalars['UUID']>,
  activeQuoteId?: Maybe<Scalars['UUID']>,
  baseCurrency?: Maybe<Scalars['String']>,
  duration?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['Datetime']>,
  status?: Maybe<Scalars['Int']>,
  agencyId?: Maybe<Scalars['UUID']>,
  agencyMemberId?: Maybe<Scalars['UUID']>,
  customerToCustomerId?: Maybe<FkTripCustomerCustomerIdInput>,
  userToUserId?: Maybe<FkTripUserUserIdInput>,
  mediaGalleryToMediaGalleryId?: Maybe<FkTripMediaGalleryMediaGalleryIdInput>,
  quoteToActiveQuoteId?: Maybe<FkTripQuoteActiveQuoteIdInput>,
  agencyToAgencyId?: Maybe<FkTripAgencyAgencyIdInput>,
  agencyMemberToAgencyMemberId?: Maybe<FkTripAgencyMemberAgencyMemberIdInput>,
  expensesUsingId?: Maybe<FkExpenseTripTripIdInverseInput>,
  invoicesUsingId?: Maybe<FkInvoiceTripTripIdInverseInput>,
  paymentsUsingId?: Maybe<FkPaymentTripTripIdInverseInput>,
  supplierInvoicesUsingId?: Maybe<FkSupplierInvoiceTripTripIdInverseInput>,
  emailsUsingId?: Maybe<FkEmailTripTripIdInverseInput>,
  enquiriesUsingId?: Maybe<FkEnquiryTripTripIdInverseInput>,
  notesUsingId?: Maybe<FkNoteTripTripIdInverseInput>,
  quotesUsingId?: Maybe<FkQuoteTripTripIdInverseInput>,
  testimonialsUsingId?: Maybe<FkTestimonialTripTripIdInverseInput>,
  tripTravellersUsingId?: Maybe<FkTripTravellerTripTripIdInverseInput>,
  tripFlightsUsingId?: Maybe<FkTripFlightTripTripIdInverseInput>,
  quotePublicsUsingId?: Maybe<FakePublicQuotePublicForeignKey0InverseInput>,
};

export type UpdateTripOnExpenseForFkExpenseTripTripIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  customerId?: Maybe<Scalars['UUID']>,
  userId?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  destination?: Maybe<Scalars['String']>,
  dates?: Maybe<Scalars['String']>,
  archived?: Maybe<Scalars['Datetime']>,
  mediaGalleryId?: Maybe<Scalars['UUID']>,
  activeQuoteId?: Maybe<Scalars['UUID']>,
  baseCurrency?: Maybe<Scalars['String']>,
  duration?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['Datetime']>,
  status?: Maybe<Scalars['Int']>,
  agencyId?: Maybe<Scalars['UUID']>,
  agencyMemberId?: Maybe<Scalars['UUID']>,
  customerToCustomerId?: Maybe<FkTripCustomerCustomerIdInput>,
  userToUserId?: Maybe<FkTripUserUserIdInput>,
  mediaGalleryToMediaGalleryId?: Maybe<FkTripMediaGalleryMediaGalleryIdInput>,
  quoteToActiveQuoteId?: Maybe<FkTripQuoteActiveQuoteIdInput>,
  agencyToAgencyId?: Maybe<FkTripAgencyAgencyIdInput>,
  agencyMemberToAgencyMemberId?: Maybe<FkTripAgencyMemberAgencyMemberIdInput>,
  expensesUsingId?: Maybe<FkExpenseTripTripIdInverseInput>,
  invoicesUsingId?: Maybe<FkInvoiceTripTripIdInverseInput>,
  paymentsUsingId?: Maybe<FkPaymentTripTripIdInverseInput>,
  supplierInvoicesUsingId?: Maybe<FkSupplierInvoiceTripTripIdInverseInput>,
  emailsUsingId?: Maybe<FkEmailTripTripIdInverseInput>,
  enquiriesUsingId?: Maybe<FkEnquiryTripTripIdInverseInput>,
  notesUsingId?: Maybe<FkNoteTripTripIdInverseInput>,
  quotesUsingId?: Maybe<FkQuoteTripTripIdInverseInput>,
  testimonialsUsingId?: Maybe<FkTestimonialTripTripIdInverseInput>,
  tripTravellersUsingId?: Maybe<FkTripTravellerTripTripIdInverseInput>,
  tripFlightsUsingId?: Maybe<FkTripFlightTripTripIdInverseInput>,
  quotePublicsUsingId?: Maybe<FakePublicQuotePublicForeignKey0InverseInput>,
};

export type UpdateTripOnInvoiceForFkInvoiceTripTripIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  customerId?: Maybe<Scalars['UUID']>,
  userId?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  destination?: Maybe<Scalars['String']>,
  dates?: Maybe<Scalars['String']>,
  archived?: Maybe<Scalars['Datetime']>,
  mediaGalleryId?: Maybe<Scalars['UUID']>,
  activeQuoteId?: Maybe<Scalars['UUID']>,
  baseCurrency?: Maybe<Scalars['String']>,
  duration?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['Datetime']>,
  status?: Maybe<Scalars['Int']>,
  agencyId?: Maybe<Scalars['UUID']>,
  agencyMemberId?: Maybe<Scalars['UUID']>,
  customerToCustomerId?: Maybe<FkTripCustomerCustomerIdInput>,
  userToUserId?: Maybe<FkTripUserUserIdInput>,
  mediaGalleryToMediaGalleryId?: Maybe<FkTripMediaGalleryMediaGalleryIdInput>,
  quoteToActiveQuoteId?: Maybe<FkTripQuoteActiveQuoteIdInput>,
  agencyToAgencyId?: Maybe<FkTripAgencyAgencyIdInput>,
  agencyMemberToAgencyMemberId?: Maybe<FkTripAgencyMemberAgencyMemberIdInput>,
  expensesUsingId?: Maybe<FkExpenseTripTripIdInverseInput>,
  invoicesUsingId?: Maybe<FkInvoiceTripTripIdInverseInput>,
  paymentsUsingId?: Maybe<FkPaymentTripTripIdInverseInput>,
  supplierInvoicesUsingId?: Maybe<FkSupplierInvoiceTripTripIdInverseInput>,
  emailsUsingId?: Maybe<FkEmailTripTripIdInverseInput>,
  enquiriesUsingId?: Maybe<FkEnquiryTripTripIdInverseInput>,
  notesUsingId?: Maybe<FkNoteTripTripIdInverseInput>,
  quotesUsingId?: Maybe<FkQuoteTripTripIdInverseInput>,
  testimonialsUsingId?: Maybe<FkTestimonialTripTripIdInverseInput>,
  tripTravellersUsingId?: Maybe<FkTripTravellerTripTripIdInverseInput>,
  tripFlightsUsingId?: Maybe<FkTripFlightTripTripIdInverseInput>,
  quotePublicsUsingId?: Maybe<FakePublicQuotePublicForeignKey0InverseInput>,
};

export type UpdateTripOnNoteForFkNoteTripTripIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  customerId?: Maybe<Scalars['UUID']>,
  userId?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  destination?: Maybe<Scalars['String']>,
  dates?: Maybe<Scalars['String']>,
  archived?: Maybe<Scalars['Datetime']>,
  mediaGalleryId?: Maybe<Scalars['UUID']>,
  activeQuoteId?: Maybe<Scalars['UUID']>,
  baseCurrency?: Maybe<Scalars['String']>,
  duration?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['Datetime']>,
  status?: Maybe<Scalars['Int']>,
  agencyId?: Maybe<Scalars['UUID']>,
  agencyMemberId?: Maybe<Scalars['UUID']>,
  customerToCustomerId?: Maybe<FkTripCustomerCustomerIdInput>,
  userToUserId?: Maybe<FkTripUserUserIdInput>,
  mediaGalleryToMediaGalleryId?: Maybe<FkTripMediaGalleryMediaGalleryIdInput>,
  quoteToActiveQuoteId?: Maybe<FkTripQuoteActiveQuoteIdInput>,
  agencyToAgencyId?: Maybe<FkTripAgencyAgencyIdInput>,
  agencyMemberToAgencyMemberId?: Maybe<FkTripAgencyMemberAgencyMemberIdInput>,
  expensesUsingId?: Maybe<FkExpenseTripTripIdInverseInput>,
  invoicesUsingId?: Maybe<FkInvoiceTripTripIdInverseInput>,
  paymentsUsingId?: Maybe<FkPaymentTripTripIdInverseInput>,
  supplierInvoicesUsingId?: Maybe<FkSupplierInvoiceTripTripIdInverseInput>,
  emailsUsingId?: Maybe<FkEmailTripTripIdInverseInput>,
  enquiriesUsingId?: Maybe<FkEnquiryTripTripIdInverseInput>,
  notesUsingId?: Maybe<FkNoteTripTripIdInverseInput>,
  quotesUsingId?: Maybe<FkQuoteTripTripIdInverseInput>,
  testimonialsUsingId?: Maybe<FkTestimonialTripTripIdInverseInput>,
  tripTravellersUsingId?: Maybe<FkTripTravellerTripTripIdInverseInput>,
  tripFlightsUsingId?: Maybe<FkTripFlightTripTripIdInverseInput>,
  quotePublicsUsingId?: Maybe<FakePublicQuotePublicForeignKey0InverseInput>,
};

export type UpdateTripOnPaymentForFkPaymentTripTripIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  customerId?: Maybe<Scalars['UUID']>,
  userId?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  destination?: Maybe<Scalars['String']>,
  dates?: Maybe<Scalars['String']>,
  archived?: Maybe<Scalars['Datetime']>,
  mediaGalleryId?: Maybe<Scalars['UUID']>,
  activeQuoteId?: Maybe<Scalars['UUID']>,
  baseCurrency?: Maybe<Scalars['String']>,
  duration?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['Datetime']>,
  status?: Maybe<Scalars['Int']>,
  agencyId?: Maybe<Scalars['UUID']>,
  agencyMemberId?: Maybe<Scalars['UUID']>,
  customerToCustomerId?: Maybe<FkTripCustomerCustomerIdInput>,
  userToUserId?: Maybe<FkTripUserUserIdInput>,
  mediaGalleryToMediaGalleryId?: Maybe<FkTripMediaGalleryMediaGalleryIdInput>,
  quoteToActiveQuoteId?: Maybe<FkTripQuoteActiveQuoteIdInput>,
  agencyToAgencyId?: Maybe<FkTripAgencyAgencyIdInput>,
  agencyMemberToAgencyMemberId?: Maybe<FkTripAgencyMemberAgencyMemberIdInput>,
  expensesUsingId?: Maybe<FkExpenseTripTripIdInverseInput>,
  invoicesUsingId?: Maybe<FkInvoiceTripTripIdInverseInput>,
  paymentsUsingId?: Maybe<FkPaymentTripTripIdInverseInput>,
  supplierInvoicesUsingId?: Maybe<FkSupplierInvoiceTripTripIdInverseInput>,
  emailsUsingId?: Maybe<FkEmailTripTripIdInverseInput>,
  enquiriesUsingId?: Maybe<FkEnquiryTripTripIdInverseInput>,
  notesUsingId?: Maybe<FkNoteTripTripIdInverseInput>,
  quotesUsingId?: Maybe<FkQuoteTripTripIdInverseInput>,
  testimonialsUsingId?: Maybe<FkTestimonialTripTripIdInverseInput>,
  tripTravellersUsingId?: Maybe<FkTripTravellerTripTripIdInverseInput>,
  tripFlightsUsingId?: Maybe<FkTripFlightTripTripIdInverseInput>,
  quotePublicsUsingId?: Maybe<FakePublicQuotePublicForeignKey0InverseInput>,
};

export type UpdateTripOnQuoteForFkQuoteTripTripIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  customerId?: Maybe<Scalars['UUID']>,
  userId?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  destination?: Maybe<Scalars['String']>,
  dates?: Maybe<Scalars['String']>,
  archived?: Maybe<Scalars['Datetime']>,
  mediaGalleryId?: Maybe<Scalars['UUID']>,
  activeQuoteId?: Maybe<Scalars['UUID']>,
  baseCurrency?: Maybe<Scalars['String']>,
  duration?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['Datetime']>,
  status?: Maybe<Scalars['Int']>,
  agencyId?: Maybe<Scalars['UUID']>,
  agencyMemberId?: Maybe<Scalars['UUID']>,
  customerToCustomerId?: Maybe<FkTripCustomerCustomerIdInput>,
  userToUserId?: Maybe<FkTripUserUserIdInput>,
  mediaGalleryToMediaGalleryId?: Maybe<FkTripMediaGalleryMediaGalleryIdInput>,
  quoteToActiveQuoteId?: Maybe<FkTripQuoteActiveQuoteIdInput>,
  agencyToAgencyId?: Maybe<FkTripAgencyAgencyIdInput>,
  agencyMemberToAgencyMemberId?: Maybe<FkTripAgencyMemberAgencyMemberIdInput>,
  expensesUsingId?: Maybe<FkExpenseTripTripIdInverseInput>,
  invoicesUsingId?: Maybe<FkInvoiceTripTripIdInverseInput>,
  paymentsUsingId?: Maybe<FkPaymentTripTripIdInverseInput>,
  supplierInvoicesUsingId?: Maybe<FkSupplierInvoiceTripTripIdInverseInput>,
  emailsUsingId?: Maybe<FkEmailTripTripIdInverseInput>,
  enquiriesUsingId?: Maybe<FkEnquiryTripTripIdInverseInput>,
  notesUsingId?: Maybe<FkNoteTripTripIdInverseInput>,
  quotesUsingId?: Maybe<FkQuoteTripTripIdInverseInput>,
  testimonialsUsingId?: Maybe<FkTestimonialTripTripIdInverseInput>,
  tripTravellersUsingId?: Maybe<FkTripTravellerTripTripIdInverseInput>,
  tripFlightsUsingId?: Maybe<FkTripFlightTripTripIdInverseInput>,
  quotePublicsUsingId?: Maybe<FakePublicQuotePublicForeignKey0InverseInput>,
};

export type UpdateTripOnQuotePublicForFakePublicQuotePublicForeignKey0Patch = {
  id?: Maybe<Scalars['UUID']>,
  customerId?: Maybe<Scalars['UUID']>,
  userId?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  destination?: Maybe<Scalars['String']>,
  dates?: Maybe<Scalars['String']>,
  archived?: Maybe<Scalars['Datetime']>,
  mediaGalleryId?: Maybe<Scalars['UUID']>,
  activeQuoteId?: Maybe<Scalars['UUID']>,
  baseCurrency?: Maybe<Scalars['String']>,
  duration?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['Datetime']>,
  status?: Maybe<Scalars['Int']>,
  agencyId?: Maybe<Scalars['UUID']>,
  agencyMemberId?: Maybe<Scalars['UUID']>,
  customerToCustomerId?: Maybe<FkTripCustomerCustomerIdInput>,
  userToUserId?: Maybe<FkTripUserUserIdInput>,
  mediaGalleryToMediaGalleryId?: Maybe<FkTripMediaGalleryMediaGalleryIdInput>,
  quoteToActiveQuoteId?: Maybe<FkTripQuoteActiveQuoteIdInput>,
  agencyToAgencyId?: Maybe<FkTripAgencyAgencyIdInput>,
  agencyMemberToAgencyMemberId?: Maybe<FkTripAgencyMemberAgencyMemberIdInput>,
  expensesUsingId?: Maybe<FkExpenseTripTripIdInverseInput>,
  invoicesUsingId?: Maybe<FkInvoiceTripTripIdInverseInput>,
  paymentsUsingId?: Maybe<FkPaymentTripTripIdInverseInput>,
  supplierInvoicesUsingId?: Maybe<FkSupplierInvoiceTripTripIdInverseInput>,
  emailsUsingId?: Maybe<FkEmailTripTripIdInverseInput>,
  enquiriesUsingId?: Maybe<FkEnquiryTripTripIdInverseInput>,
  notesUsingId?: Maybe<FkNoteTripTripIdInverseInput>,
  quotesUsingId?: Maybe<FkQuoteTripTripIdInverseInput>,
  testimonialsUsingId?: Maybe<FkTestimonialTripTripIdInverseInput>,
  tripTravellersUsingId?: Maybe<FkTripTravellerTripTripIdInverseInput>,
  tripFlightsUsingId?: Maybe<FkTripFlightTripTripIdInverseInput>,
  quotePublicsUsingId?: Maybe<FakePublicQuotePublicForeignKey0InverseInput>,
};

export type UpdateTripOnSupplierInvoiceForFkSupplierInvoiceTripTripIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  customerId?: Maybe<Scalars['UUID']>,
  userId?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  destination?: Maybe<Scalars['String']>,
  dates?: Maybe<Scalars['String']>,
  archived?: Maybe<Scalars['Datetime']>,
  mediaGalleryId?: Maybe<Scalars['UUID']>,
  activeQuoteId?: Maybe<Scalars['UUID']>,
  baseCurrency?: Maybe<Scalars['String']>,
  duration?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['Datetime']>,
  status?: Maybe<Scalars['Int']>,
  agencyId?: Maybe<Scalars['UUID']>,
  agencyMemberId?: Maybe<Scalars['UUID']>,
  customerToCustomerId?: Maybe<FkTripCustomerCustomerIdInput>,
  userToUserId?: Maybe<FkTripUserUserIdInput>,
  mediaGalleryToMediaGalleryId?: Maybe<FkTripMediaGalleryMediaGalleryIdInput>,
  quoteToActiveQuoteId?: Maybe<FkTripQuoteActiveQuoteIdInput>,
  agencyToAgencyId?: Maybe<FkTripAgencyAgencyIdInput>,
  agencyMemberToAgencyMemberId?: Maybe<FkTripAgencyMemberAgencyMemberIdInput>,
  expensesUsingId?: Maybe<FkExpenseTripTripIdInverseInput>,
  invoicesUsingId?: Maybe<FkInvoiceTripTripIdInverseInput>,
  paymentsUsingId?: Maybe<FkPaymentTripTripIdInverseInput>,
  supplierInvoicesUsingId?: Maybe<FkSupplierInvoiceTripTripIdInverseInput>,
  emailsUsingId?: Maybe<FkEmailTripTripIdInverseInput>,
  enquiriesUsingId?: Maybe<FkEnquiryTripTripIdInverseInput>,
  notesUsingId?: Maybe<FkNoteTripTripIdInverseInput>,
  quotesUsingId?: Maybe<FkQuoteTripTripIdInverseInput>,
  testimonialsUsingId?: Maybe<FkTestimonialTripTripIdInverseInput>,
  tripTravellersUsingId?: Maybe<FkTripTravellerTripTripIdInverseInput>,
  tripFlightsUsingId?: Maybe<FkTripFlightTripTripIdInverseInput>,
  quotePublicsUsingId?: Maybe<FakePublicQuotePublicForeignKey0InverseInput>,
};

export type UpdateTripOnTestimonialForFkTestimonialTripTripIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  customerId?: Maybe<Scalars['UUID']>,
  userId?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  destination?: Maybe<Scalars['String']>,
  dates?: Maybe<Scalars['String']>,
  archived?: Maybe<Scalars['Datetime']>,
  mediaGalleryId?: Maybe<Scalars['UUID']>,
  activeQuoteId?: Maybe<Scalars['UUID']>,
  baseCurrency?: Maybe<Scalars['String']>,
  duration?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['Datetime']>,
  status?: Maybe<Scalars['Int']>,
  agencyId?: Maybe<Scalars['UUID']>,
  agencyMemberId?: Maybe<Scalars['UUID']>,
  customerToCustomerId?: Maybe<FkTripCustomerCustomerIdInput>,
  userToUserId?: Maybe<FkTripUserUserIdInput>,
  mediaGalleryToMediaGalleryId?: Maybe<FkTripMediaGalleryMediaGalleryIdInput>,
  quoteToActiveQuoteId?: Maybe<FkTripQuoteActiveQuoteIdInput>,
  agencyToAgencyId?: Maybe<FkTripAgencyAgencyIdInput>,
  agencyMemberToAgencyMemberId?: Maybe<FkTripAgencyMemberAgencyMemberIdInput>,
  expensesUsingId?: Maybe<FkExpenseTripTripIdInverseInput>,
  invoicesUsingId?: Maybe<FkInvoiceTripTripIdInverseInput>,
  paymentsUsingId?: Maybe<FkPaymentTripTripIdInverseInput>,
  supplierInvoicesUsingId?: Maybe<FkSupplierInvoiceTripTripIdInverseInput>,
  emailsUsingId?: Maybe<FkEmailTripTripIdInverseInput>,
  enquiriesUsingId?: Maybe<FkEnquiryTripTripIdInverseInput>,
  notesUsingId?: Maybe<FkNoteTripTripIdInverseInput>,
  quotesUsingId?: Maybe<FkQuoteTripTripIdInverseInput>,
  testimonialsUsingId?: Maybe<FkTestimonialTripTripIdInverseInput>,
  tripTravellersUsingId?: Maybe<FkTripTravellerTripTripIdInverseInput>,
  tripFlightsUsingId?: Maybe<FkTripFlightTripTripIdInverseInput>,
  quotePublicsUsingId?: Maybe<FakePublicQuotePublicForeignKey0InverseInput>,
};

export type UpdateTripOnTripFlightForFkTripFlightTripTripIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  customerId?: Maybe<Scalars['UUID']>,
  userId?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  destination?: Maybe<Scalars['String']>,
  dates?: Maybe<Scalars['String']>,
  archived?: Maybe<Scalars['Datetime']>,
  mediaGalleryId?: Maybe<Scalars['UUID']>,
  activeQuoteId?: Maybe<Scalars['UUID']>,
  baseCurrency?: Maybe<Scalars['String']>,
  duration?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['Datetime']>,
  status?: Maybe<Scalars['Int']>,
  agencyId?: Maybe<Scalars['UUID']>,
  agencyMemberId?: Maybe<Scalars['UUID']>,
  customerToCustomerId?: Maybe<FkTripCustomerCustomerIdInput>,
  userToUserId?: Maybe<FkTripUserUserIdInput>,
  mediaGalleryToMediaGalleryId?: Maybe<FkTripMediaGalleryMediaGalleryIdInput>,
  quoteToActiveQuoteId?: Maybe<FkTripQuoteActiveQuoteIdInput>,
  agencyToAgencyId?: Maybe<FkTripAgencyAgencyIdInput>,
  agencyMemberToAgencyMemberId?: Maybe<FkTripAgencyMemberAgencyMemberIdInput>,
  expensesUsingId?: Maybe<FkExpenseTripTripIdInverseInput>,
  invoicesUsingId?: Maybe<FkInvoiceTripTripIdInverseInput>,
  paymentsUsingId?: Maybe<FkPaymentTripTripIdInverseInput>,
  supplierInvoicesUsingId?: Maybe<FkSupplierInvoiceTripTripIdInverseInput>,
  emailsUsingId?: Maybe<FkEmailTripTripIdInverseInput>,
  enquiriesUsingId?: Maybe<FkEnquiryTripTripIdInverseInput>,
  notesUsingId?: Maybe<FkNoteTripTripIdInverseInput>,
  quotesUsingId?: Maybe<FkQuoteTripTripIdInverseInput>,
  testimonialsUsingId?: Maybe<FkTestimonialTripTripIdInverseInput>,
  tripTravellersUsingId?: Maybe<FkTripTravellerTripTripIdInverseInput>,
  tripFlightsUsingId?: Maybe<FkTripFlightTripTripIdInverseInput>,
  quotePublicsUsingId?: Maybe<FakePublicQuotePublicForeignKey0InverseInput>,
};

export type UpdateTripOnTripForFkTripAgencyAgencyIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  customerId?: Maybe<Scalars['UUID']>,
  userId?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  destination?: Maybe<Scalars['String']>,
  dates?: Maybe<Scalars['String']>,
  archived?: Maybe<Scalars['Datetime']>,
  mediaGalleryId?: Maybe<Scalars['UUID']>,
  activeQuoteId?: Maybe<Scalars['UUID']>,
  baseCurrency?: Maybe<Scalars['String']>,
  duration?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['Datetime']>,
  status?: Maybe<Scalars['Int']>,
  agencyMemberId?: Maybe<Scalars['UUID']>,
  customerToCustomerId?: Maybe<FkTripCustomerCustomerIdInput>,
  userToUserId?: Maybe<FkTripUserUserIdInput>,
  mediaGalleryToMediaGalleryId?: Maybe<FkTripMediaGalleryMediaGalleryIdInput>,
  quoteToActiveQuoteId?: Maybe<FkTripQuoteActiveQuoteIdInput>,
  agencyToAgencyId?: Maybe<FkTripAgencyAgencyIdInput>,
  agencyMemberToAgencyMemberId?: Maybe<FkTripAgencyMemberAgencyMemberIdInput>,
  expensesUsingId?: Maybe<FkExpenseTripTripIdInverseInput>,
  invoicesUsingId?: Maybe<FkInvoiceTripTripIdInverseInput>,
  paymentsUsingId?: Maybe<FkPaymentTripTripIdInverseInput>,
  supplierInvoicesUsingId?: Maybe<FkSupplierInvoiceTripTripIdInverseInput>,
  emailsUsingId?: Maybe<FkEmailTripTripIdInverseInput>,
  enquiriesUsingId?: Maybe<FkEnquiryTripTripIdInverseInput>,
  notesUsingId?: Maybe<FkNoteTripTripIdInverseInput>,
  quotesUsingId?: Maybe<FkQuoteTripTripIdInverseInput>,
  testimonialsUsingId?: Maybe<FkTestimonialTripTripIdInverseInput>,
  tripTravellersUsingId?: Maybe<FkTripTravellerTripTripIdInverseInput>,
  tripFlightsUsingId?: Maybe<FkTripFlightTripTripIdInverseInput>,
  quotePublicsUsingId?: Maybe<FakePublicQuotePublicForeignKey0InverseInput>,
};

export type UpdateTripOnTripForFkTripAgencyMemberAgencyMemberIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  customerId?: Maybe<Scalars['UUID']>,
  userId?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  destination?: Maybe<Scalars['String']>,
  dates?: Maybe<Scalars['String']>,
  archived?: Maybe<Scalars['Datetime']>,
  mediaGalleryId?: Maybe<Scalars['UUID']>,
  activeQuoteId?: Maybe<Scalars['UUID']>,
  baseCurrency?: Maybe<Scalars['String']>,
  duration?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['Datetime']>,
  status?: Maybe<Scalars['Int']>,
  agencyId?: Maybe<Scalars['UUID']>,
  customerToCustomerId?: Maybe<FkTripCustomerCustomerIdInput>,
  userToUserId?: Maybe<FkTripUserUserIdInput>,
  mediaGalleryToMediaGalleryId?: Maybe<FkTripMediaGalleryMediaGalleryIdInput>,
  quoteToActiveQuoteId?: Maybe<FkTripQuoteActiveQuoteIdInput>,
  agencyToAgencyId?: Maybe<FkTripAgencyAgencyIdInput>,
  agencyMemberToAgencyMemberId?: Maybe<FkTripAgencyMemberAgencyMemberIdInput>,
  expensesUsingId?: Maybe<FkExpenseTripTripIdInverseInput>,
  invoicesUsingId?: Maybe<FkInvoiceTripTripIdInverseInput>,
  paymentsUsingId?: Maybe<FkPaymentTripTripIdInverseInput>,
  supplierInvoicesUsingId?: Maybe<FkSupplierInvoiceTripTripIdInverseInput>,
  emailsUsingId?: Maybe<FkEmailTripTripIdInverseInput>,
  enquiriesUsingId?: Maybe<FkEnquiryTripTripIdInverseInput>,
  notesUsingId?: Maybe<FkNoteTripTripIdInverseInput>,
  quotesUsingId?: Maybe<FkQuoteTripTripIdInverseInput>,
  testimonialsUsingId?: Maybe<FkTestimonialTripTripIdInverseInput>,
  tripTravellersUsingId?: Maybe<FkTripTravellerTripTripIdInverseInput>,
  tripFlightsUsingId?: Maybe<FkTripFlightTripTripIdInverseInput>,
  quotePublicsUsingId?: Maybe<FakePublicQuotePublicForeignKey0InverseInput>,
};

export type UpdateTripOnTripForFkTripCustomerCustomerIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  userId?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  destination?: Maybe<Scalars['String']>,
  dates?: Maybe<Scalars['String']>,
  archived?: Maybe<Scalars['Datetime']>,
  mediaGalleryId?: Maybe<Scalars['UUID']>,
  activeQuoteId?: Maybe<Scalars['UUID']>,
  baseCurrency?: Maybe<Scalars['String']>,
  duration?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['Datetime']>,
  status?: Maybe<Scalars['Int']>,
  agencyId?: Maybe<Scalars['UUID']>,
  agencyMemberId?: Maybe<Scalars['UUID']>,
  customerToCustomerId?: Maybe<FkTripCustomerCustomerIdInput>,
  userToUserId?: Maybe<FkTripUserUserIdInput>,
  mediaGalleryToMediaGalleryId?: Maybe<FkTripMediaGalleryMediaGalleryIdInput>,
  quoteToActiveQuoteId?: Maybe<FkTripQuoteActiveQuoteIdInput>,
  agencyToAgencyId?: Maybe<FkTripAgencyAgencyIdInput>,
  agencyMemberToAgencyMemberId?: Maybe<FkTripAgencyMemberAgencyMemberIdInput>,
  expensesUsingId?: Maybe<FkExpenseTripTripIdInverseInput>,
  invoicesUsingId?: Maybe<FkInvoiceTripTripIdInverseInput>,
  paymentsUsingId?: Maybe<FkPaymentTripTripIdInverseInput>,
  supplierInvoicesUsingId?: Maybe<FkSupplierInvoiceTripTripIdInverseInput>,
  emailsUsingId?: Maybe<FkEmailTripTripIdInverseInput>,
  enquiriesUsingId?: Maybe<FkEnquiryTripTripIdInverseInput>,
  notesUsingId?: Maybe<FkNoteTripTripIdInverseInput>,
  quotesUsingId?: Maybe<FkQuoteTripTripIdInverseInput>,
  testimonialsUsingId?: Maybe<FkTestimonialTripTripIdInverseInput>,
  tripTravellersUsingId?: Maybe<FkTripTravellerTripTripIdInverseInput>,
  tripFlightsUsingId?: Maybe<FkTripFlightTripTripIdInverseInput>,
  quotePublicsUsingId?: Maybe<FakePublicQuotePublicForeignKey0InverseInput>,
};

export type UpdateTripOnTripForFkTripMediaGalleryMediaGalleryIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  customerId?: Maybe<Scalars['UUID']>,
  userId?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  destination?: Maybe<Scalars['String']>,
  dates?: Maybe<Scalars['String']>,
  archived?: Maybe<Scalars['Datetime']>,
  activeQuoteId?: Maybe<Scalars['UUID']>,
  baseCurrency?: Maybe<Scalars['String']>,
  duration?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['Datetime']>,
  status?: Maybe<Scalars['Int']>,
  agencyId?: Maybe<Scalars['UUID']>,
  agencyMemberId?: Maybe<Scalars['UUID']>,
  customerToCustomerId?: Maybe<FkTripCustomerCustomerIdInput>,
  userToUserId?: Maybe<FkTripUserUserIdInput>,
  mediaGalleryToMediaGalleryId?: Maybe<FkTripMediaGalleryMediaGalleryIdInput>,
  quoteToActiveQuoteId?: Maybe<FkTripQuoteActiveQuoteIdInput>,
  agencyToAgencyId?: Maybe<FkTripAgencyAgencyIdInput>,
  agencyMemberToAgencyMemberId?: Maybe<FkTripAgencyMemberAgencyMemberIdInput>,
  expensesUsingId?: Maybe<FkExpenseTripTripIdInverseInput>,
  invoicesUsingId?: Maybe<FkInvoiceTripTripIdInverseInput>,
  paymentsUsingId?: Maybe<FkPaymentTripTripIdInverseInput>,
  supplierInvoicesUsingId?: Maybe<FkSupplierInvoiceTripTripIdInverseInput>,
  emailsUsingId?: Maybe<FkEmailTripTripIdInverseInput>,
  enquiriesUsingId?: Maybe<FkEnquiryTripTripIdInverseInput>,
  notesUsingId?: Maybe<FkNoteTripTripIdInverseInput>,
  quotesUsingId?: Maybe<FkQuoteTripTripIdInverseInput>,
  testimonialsUsingId?: Maybe<FkTestimonialTripTripIdInverseInput>,
  tripTravellersUsingId?: Maybe<FkTripTravellerTripTripIdInverseInput>,
  tripFlightsUsingId?: Maybe<FkTripFlightTripTripIdInverseInput>,
  quotePublicsUsingId?: Maybe<FakePublicQuotePublicForeignKey0InverseInput>,
};

export type UpdateTripOnTripForFkTripQuoteActiveQuoteIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  customerId?: Maybe<Scalars['UUID']>,
  userId?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  destination?: Maybe<Scalars['String']>,
  dates?: Maybe<Scalars['String']>,
  archived?: Maybe<Scalars['Datetime']>,
  mediaGalleryId?: Maybe<Scalars['UUID']>,
  baseCurrency?: Maybe<Scalars['String']>,
  duration?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['Datetime']>,
  status?: Maybe<Scalars['Int']>,
  agencyId?: Maybe<Scalars['UUID']>,
  agencyMemberId?: Maybe<Scalars['UUID']>,
  customerToCustomerId?: Maybe<FkTripCustomerCustomerIdInput>,
  userToUserId?: Maybe<FkTripUserUserIdInput>,
  mediaGalleryToMediaGalleryId?: Maybe<FkTripMediaGalleryMediaGalleryIdInput>,
  quoteToActiveQuoteId?: Maybe<FkTripQuoteActiveQuoteIdInput>,
  agencyToAgencyId?: Maybe<FkTripAgencyAgencyIdInput>,
  agencyMemberToAgencyMemberId?: Maybe<FkTripAgencyMemberAgencyMemberIdInput>,
  expensesUsingId?: Maybe<FkExpenseTripTripIdInverseInput>,
  invoicesUsingId?: Maybe<FkInvoiceTripTripIdInverseInput>,
  paymentsUsingId?: Maybe<FkPaymentTripTripIdInverseInput>,
  supplierInvoicesUsingId?: Maybe<FkSupplierInvoiceTripTripIdInverseInput>,
  emailsUsingId?: Maybe<FkEmailTripTripIdInverseInput>,
  enquiriesUsingId?: Maybe<FkEnquiryTripTripIdInverseInput>,
  notesUsingId?: Maybe<FkNoteTripTripIdInverseInput>,
  quotesUsingId?: Maybe<FkQuoteTripTripIdInverseInput>,
  testimonialsUsingId?: Maybe<FkTestimonialTripTripIdInverseInput>,
  tripTravellersUsingId?: Maybe<FkTripTravellerTripTripIdInverseInput>,
  tripFlightsUsingId?: Maybe<FkTripFlightTripTripIdInverseInput>,
  quotePublicsUsingId?: Maybe<FakePublicQuotePublicForeignKey0InverseInput>,
};

export type UpdateTripOnTripForFkTripUserUserIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  customerId?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  destination?: Maybe<Scalars['String']>,
  dates?: Maybe<Scalars['String']>,
  archived?: Maybe<Scalars['Datetime']>,
  mediaGalleryId?: Maybe<Scalars['UUID']>,
  activeQuoteId?: Maybe<Scalars['UUID']>,
  baseCurrency?: Maybe<Scalars['String']>,
  duration?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['Datetime']>,
  status?: Maybe<Scalars['Int']>,
  agencyId?: Maybe<Scalars['UUID']>,
  agencyMemberId?: Maybe<Scalars['UUID']>,
  customerToCustomerId?: Maybe<FkTripCustomerCustomerIdInput>,
  userToUserId?: Maybe<FkTripUserUserIdInput>,
  mediaGalleryToMediaGalleryId?: Maybe<FkTripMediaGalleryMediaGalleryIdInput>,
  quoteToActiveQuoteId?: Maybe<FkTripQuoteActiveQuoteIdInput>,
  agencyToAgencyId?: Maybe<FkTripAgencyAgencyIdInput>,
  agencyMemberToAgencyMemberId?: Maybe<FkTripAgencyMemberAgencyMemberIdInput>,
  expensesUsingId?: Maybe<FkExpenseTripTripIdInverseInput>,
  invoicesUsingId?: Maybe<FkInvoiceTripTripIdInverseInput>,
  paymentsUsingId?: Maybe<FkPaymentTripTripIdInverseInput>,
  supplierInvoicesUsingId?: Maybe<FkSupplierInvoiceTripTripIdInverseInput>,
  emailsUsingId?: Maybe<FkEmailTripTripIdInverseInput>,
  enquiriesUsingId?: Maybe<FkEnquiryTripTripIdInverseInput>,
  notesUsingId?: Maybe<FkNoteTripTripIdInverseInput>,
  quotesUsingId?: Maybe<FkQuoteTripTripIdInverseInput>,
  testimonialsUsingId?: Maybe<FkTestimonialTripTripIdInverseInput>,
  tripTravellersUsingId?: Maybe<FkTripTravellerTripTripIdInverseInput>,
  tripFlightsUsingId?: Maybe<FkTripFlightTripTripIdInverseInput>,
  quotePublicsUsingId?: Maybe<FakePublicQuotePublicForeignKey0InverseInput>,
};

export type UpdateTripOnTripTravellerForFkTripTravellerTripTripIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  customerId?: Maybe<Scalars['UUID']>,
  userId?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  name?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  destination?: Maybe<Scalars['String']>,
  dates?: Maybe<Scalars['String']>,
  archived?: Maybe<Scalars['Datetime']>,
  mediaGalleryId?: Maybe<Scalars['UUID']>,
  activeQuoteId?: Maybe<Scalars['UUID']>,
  baseCurrency?: Maybe<Scalars['String']>,
  duration?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['Datetime']>,
  status?: Maybe<Scalars['Int']>,
  agencyId?: Maybe<Scalars['UUID']>,
  agencyMemberId?: Maybe<Scalars['UUID']>,
  customerToCustomerId?: Maybe<FkTripCustomerCustomerIdInput>,
  userToUserId?: Maybe<FkTripUserUserIdInput>,
  mediaGalleryToMediaGalleryId?: Maybe<FkTripMediaGalleryMediaGalleryIdInput>,
  quoteToActiveQuoteId?: Maybe<FkTripQuoteActiveQuoteIdInput>,
  agencyToAgencyId?: Maybe<FkTripAgencyAgencyIdInput>,
  agencyMemberToAgencyMemberId?: Maybe<FkTripAgencyMemberAgencyMemberIdInput>,
  expensesUsingId?: Maybe<FkExpenseTripTripIdInverseInput>,
  invoicesUsingId?: Maybe<FkInvoiceTripTripIdInverseInput>,
  paymentsUsingId?: Maybe<FkPaymentTripTripIdInverseInput>,
  supplierInvoicesUsingId?: Maybe<FkSupplierInvoiceTripTripIdInverseInput>,
  emailsUsingId?: Maybe<FkEmailTripTripIdInverseInput>,
  enquiriesUsingId?: Maybe<FkEnquiryTripTripIdInverseInput>,
  notesUsingId?: Maybe<FkNoteTripTripIdInverseInput>,
  quotesUsingId?: Maybe<FkQuoteTripTripIdInverseInput>,
  testimonialsUsingId?: Maybe<FkTestimonialTripTripIdInverseInput>,
  tripTravellersUsingId?: Maybe<FkTripTravellerTripTripIdInverseInput>,
  tripFlightsUsingId?: Maybe<FkTripFlightTripTripIdInverseInput>,
  quotePublicsUsingId?: Maybe<FakePublicQuotePublicForeignKey0InverseInput>,
};

export type UpdateTripPayload = {
   __typename?: 'UpdateTripPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  trip?: Maybe<Trip>,
  query?: Maybe<Query>,
  customer?: Maybe<Customer>,
  user?: Maybe<User>,
  mediaGallery?: Maybe<MediaGallery>,
  activeQuote?: Maybe<Quote>,
  agency?: Maybe<Agency>,
  agencyMember?: Maybe<AgencyMember>,
  tripEdge?: Maybe<TripsEdge>,
};


export type UpdateTripPayloadTripEdgeArgs = {
  orderBy?: Maybe<Array<TripsOrderBy>>
};

export type UpdateTripTravellerByNodeIdInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
  patch: TripTravellerPatch,
};

export type UpdateTripTravellerInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  patch: TripTravellerPatch,
  id: Scalars['UUID'],
};

export type UpdateTripTravellerOnTripTravellerForFkTripTravellerTravellerTravellerIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  tripId?: Maybe<Scalars['UUID']>,
  travellerToTravellerId?: Maybe<FkTripTravellerTravellerTravellerIdInput>,
  tripToTripId?: Maybe<FkTripTravellerTripTripIdInput>,
};

export type UpdateTripTravellerOnTripTravellerForFkTripTravellerTripTripIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  travellerId?: Maybe<Scalars['UUID']>,
  travellerToTravellerId?: Maybe<FkTripTravellerTravellerTravellerIdInput>,
  tripToTripId?: Maybe<FkTripTravellerTripTripIdInput>,
};

export type UpdateTripTravellerPayload = {
   __typename?: 'UpdateTripTravellerPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  tripTraveller?: Maybe<TripTraveller>,
  query?: Maybe<Query>,
  traveller?: Maybe<Traveller>,
  trip?: Maybe<Trip>,
  tripTravellerEdge?: Maybe<TripTravellersEdge>,
};


export type UpdateTripTravellerPayloadTripTravellerEdgeArgs = {
  orderBy?: Maybe<Array<TripTravellersOrderBy>>
};

export type UpdateUserByNodeIdInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
  patch: UserPatch,
};

export type UpdateUserInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  patch: UserPatch,
  id: Scalars['UUID'],
};

export type UpdateUserOnEmailForFkEmailUserUserIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  email?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  skype?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  genderPreposition?: Maybe<Scalars['String']>,
  externalId?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  tripsUsingId?: Maybe<FkTripUserUserIdInverseInput>,
  emailsUsingId?: Maybe<FkEmailUserUserIdInverseInput>,
  notesUsingId?: Maybe<FkNoteUserUserIdInverseInput>,
  quotesUsingId?: Maybe<FkQuoteUserUserIdInverseInput>,
  remindersUsingId?: Maybe<FkReminderUserUserIdInverseInput>,
  transactionNotesUsingId?: Maybe<FkTransactionNoteUserUserIdInverseInput>,
  quotePublicsUsingId?: Maybe<FakePublicQuotePublicForeignKey2InverseInput>,
};

export type UpdateUserOnNoteForFkNoteUserUserIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  email?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  skype?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  genderPreposition?: Maybe<Scalars['String']>,
  externalId?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  tripsUsingId?: Maybe<FkTripUserUserIdInverseInput>,
  emailsUsingId?: Maybe<FkEmailUserUserIdInverseInput>,
  notesUsingId?: Maybe<FkNoteUserUserIdInverseInput>,
  quotesUsingId?: Maybe<FkQuoteUserUserIdInverseInput>,
  remindersUsingId?: Maybe<FkReminderUserUserIdInverseInput>,
  transactionNotesUsingId?: Maybe<FkTransactionNoteUserUserIdInverseInput>,
  quotePublicsUsingId?: Maybe<FakePublicQuotePublicForeignKey2InverseInput>,
};

export type UpdateUserOnQuoteForFkQuoteUserUserIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  email?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  skype?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  genderPreposition?: Maybe<Scalars['String']>,
  externalId?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  tripsUsingId?: Maybe<FkTripUserUserIdInverseInput>,
  emailsUsingId?: Maybe<FkEmailUserUserIdInverseInput>,
  notesUsingId?: Maybe<FkNoteUserUserIdInverseInput>,
  quotesUsingId?: Maybe<FkQuoteUserUserIdInverseInput>,
  remindersUsingId?: Maybe<FkReminderUserUserIdInverseInput>,
  transactionNotesUsingId?: Maybe<FkTransactionNoteUserUserIdInverseInput>,
  quotePublicsUsingId?: Maybe<FakePublicQuotePublicForeignKey2InverseInput>,
};

export type UpdateUserOnQuotePublicForFakePublicQuotePublicForeignKey2Patch = {
  id?: Maybe<Scalars['UUID']>,
  email?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  skype?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  genderPreposition?: Maybe<Scalars['String']>,
  externalId?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  tripsUsingId?: Maybe<FkTripUserUserIdInverseInput>,
  emailsUsingId?: Maybe<FkEmailUserUserIdInverseInput>,
  notesUsingId?: Maybe<FkNoteUserUserIdInverseInput>,
  quotesUsingId?: Maybe<FkQuoteUserUserIdInverseInput>,
  remindersUsingId?: Maybe<FkReminderUserUserIdInverseInput>,
  transactionNotesUsingId?: Maybe<FkTransactionNoteUserUserIdInverseInput>,
  quotePublicsUsingId?: Maybe<FakePublicQuotePublicForeignKey2InverseInput>,
};

export type UpdateUserOnReminderForFkReminderUserUserIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  email?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  skype?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  genderPreposition?: Maybe<Scalars['String']>,
  externalId?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  tripsUsingId?: Maybe<FkTripUserUserIdInverseInput>,
  emailsUsingId?: Maybe<FkEmailUserUserIdInverseInput>,
  notesUsingId?: Maybe<FkNoteUserUserIdInverseInput>,
  quotesUsingId?: Maybe<FkQuoteUserUserIdInverseInput>,
  remindersUsingId?: Maybe<FkReminderUserUserIdInverseInput>,
  transactionNotesUsingId?: Maybe<FkTransactionNoteUserUserIdInverseInput>,
  quotePublicsUsingId?: Maybe<FakePublicQuotePublicForeignKey2InverseInput>,
};

export type UpdateUserOnTransactionNoteForFkTransactionNoteUserUserIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  email?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  skype?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  genderPreposition?: Maybe<Scalars['String']>,
  externalId?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  tripsUsingId?: Maybe<FkTripUserUserIdInverseInput>,
  emailsUsingId?: Maybe<FkEmailUserUserIdInverseInput>,
  notesUsingId?: Maybe<FkNoteUserUserIdInverseInput>,
  quotesUsingId?: Maybe<FkQuoteUserUserIdInverseInput>,
  remindersUsingId?: Maybe<FkReminderUserUserIdInverseInput>,
  transactionNotesUsingId?: Maybe<FkTransactionNoteUserUserIdInverseInput>,
  quotePublicsUsingId?: Maybe<FakePublicQuotePublicForeignKey2InverseInput>,
};

export type UpdateUserOnTripForFkTripUserUserIdPatch = {
  id?: Maybe<Scalars['UUID']>,
  email?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  skype?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  genderPreposition?: Maybe<Scalars['String']>,
  externalId?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  tripsUsingId?: Maybe<FkTripUserUserIdInverseInput>,
  emailsUsingId?: Maybe<FkEmailUserUserIdInverseInput>,
  notesUsingId?: Maybe<FkNoteUserUserIdInverseInput>,
  quotesUsingId?: Maybe<FkQuoteUserUserIdInverseInput>,
  remindersUsingId?: Maybe<FkReminderUserUserIdInverseInput>,
  transactionNotesUsingId?: Maybe<FkTransactionNoteUserUserIdInverseInput>,
  quotePublicsUsingId?: Maybe<FakePublicQuotePublicForeignKey2InverseInput>,
};

export type UpdateUserPayload = {
   __typename?: 'UpdateUserPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  user?: Maybe<User>,
  query?: Maybe<Query>,
  userEdge?: Maybe<UsersEdge>,
};


export type UpdateUserPayloadUserEdgeArgs = {
  orderBy?: Maybe<Array<UsersOrderBy>>
};

export type UpdateVisaRequirementByNodeIdInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
  patch: VisaRequirementPatch,
};

export type UpdateVisaRequirementInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  patch: VisaRequirementPatch,
  id: Scalars['UUID'],
};

export type UpdateVisaRequirementPayload = {
   __typename?: 'UpdateVisaRequirementPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  visaRequirement?: Maybe<VisaRequirement>,
  query?: Maybe<Query>,
  visaRequirementEdge?: Maybe<VisaRequirementsEdge>,
};


export type UpdateVisaRequirementPayloadVisaRequirementEdgeArgs = {
  orderBy?: Maybe<Array<VisaRequirementsOrderBy>>
};

export type User = Node & {
   __typename?: 'User',
  nodeId: Scalars['ID'],
  id: Scalars['UUID'],
  email?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  skype?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  created: Scalars['Datetime'],
  modified: Scalars['Datetime'],
  genderPreposition?: Maybe<Scalars['String']>,
  externalId?: Maybe<Scalars['String']>,
  name: Scalars['String'],
  trips: TripsConnection,
  emails: EmailsConnection,
  notes: NotesConnection,
  quotes: QuotesConnection,
  reminders: RemindersConnection,
  transactionNotes: TransactionNotesConnection,
  quotePublics: QuotePublicsConnection,
};


export type UserTripsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<TripsOrderBy>>,
  condition?: Maybe<TripCondition>,
  filter?: Maybe<TripFilter>
};


export type UserEmailsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<EmailsOrderBy>>,
  condition?: Maybe<EmailCondition>,
  filter?: Maybe<EmailFilter>
};


export type UserNotesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<NotesOrderBy>>,
  condition?: Maybe<NoteCondition>,
  filter?: Maybe<NoteFilter>
};


export type UserQuotesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<QuotesOrderBy>>,
  condition?: Maybe<QuoteCondition>,
  filter?: Maybe<QuoteFilter>
};


export type UserRemindersArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<RemindersOrderBy>>,
  condition?: Maybe<ReminderCondition>,
  filter?: Maybe<ReminderFilter>
};


export type UserTransactionNotesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<TransactionNotesOrderBy>>,
  condition?: Maybe<TransactionNoteCondition>,
  filter?: Maybe<TransactionNoteFilter>
};


export type UserQuotePublicsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<QuotePublicsOrderBy>>,
  condition?: Maybe<QuotePublicCondition>,
  filter?: Maybe<QuotePublicFilter>
};

export type UserCondition = {
  id?: Maybe<Scalars['UUID']>,
  email?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  skype?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  genderPreposition?: Maybe<Scalars['String']>,
  externalId?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
};

export type UserFilter = {
  id?: Maybe<UuidFilter>,
  email?: Maybe<StringFilter>,
  firstName?: Maybe<StringFilter>,
  lastName?: Maybe<StringFilter>,
  password?: Maybe<StringFilter>,
  phone?: Maybe<StringFilter>,
  skype?: Maybe<StringFilter>,
  title?: Maybe<StringFilter>,
  created?: Maybe<DatetimeFilter>,
  modified?: Maybe<DatetimeFilter>,
  genderPreposition?: Maybe<StringFilter>,
  externalId?: Maybe<StringFilter>,
  name?: Maybe<StringFilter>,
  trips?: Maybe<UserToManyTripFilter>,
  tripsExist?: Maybe<Scalars['Boolean']>,
  emails?: Maybe<UserToManyEmailFilter>,
  emailsExist?: Maybe<Scalars['Boolean']>,
  notes?: Maybe<UserToManyNoteFilter>,
  notesExist?: Maybe<Scalars['Boolean']>,
  quotes?: Maybe<UserToManyQuoteFilter>,
  quotesExist?: Maybe<Scalars['Boolean']>,
  reminders?: Maybe<UserToManyReminderFilter>,
  remindersExist?: Maybe<Scalars['Boolean']>,
  transactionNotes?: Maybe<UserToManyTransactionNoteFilter>,
  transactionNotesExist?: Maybe<Scalars['Boolean']>,
  quotePublics?: Maybe<UserToManyQuotePublicFilter>,
  quotePublicsExist?: Maybe<Scalars['Boolean']>,
  and?: Maybe<Array<UserFilter>>,
  or?: Maybe<Array<UserFilter>>,
  not?: Maybe<UserFilter>,
};

export type UserInput = {
  id?: Maybe<Scalars['UUID']>,
  email?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  skype?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  genderPreposition?: Maybe<Scalars['String']>,
  externalId?: Maybe<Scalars['String']>,
  name: Scalars['String'],
  tripsUsingId?: Maybe<FkTripUserUserIdInverseInput>,
  emailsUsingId?: Maybe<FkEmailUserUserIdInverseInput>,
  notesUsingId?: Maybe<FkNoteUserUserIdInverseInput>,
  quotesUsingId?: Maybe<FkQuoteUserUserIdInverseInput>,
  remindersUsingId?: Maybe<FkReminderUserUserIdInverseInput>,
  transactionNotesUsingId?: Maybe<FkTransactionNoteUserUserIdInverseInput>,
  quotePublicsUsingId?: Maybe<FakePublicQuotePublicForeignKey2InverseInput>,
};

export type UserNodeIdConnect = {
  nodeId: Scalars['ID'],
};

export type UserNodeIdDelete = {
  nodeId: Scalars['ID'],
};

export type UserOnEmailForFkEmailUserUserIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: EmailPatch,
};

export type UserOnEmailForFkEmailUserUserIdUsingPkUserUpdate = {
  patch: UpdateUserOnEmailForFkEmailUserUserIdPatch,
  id: Scalars['UUID'],
};

export type UserOnNoteForFkNoteUserUserIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: NotePatch,
};

export type UserOnNoteForFkNoteUserUserIdUsingPkUserUpdate = {
  patch: UpdateUserOnNoteForFkNoteUserUserIdPatch,
  id: Scalars['UUID'],
};

export type UserOnQuoteForFkQuoteUserUserIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: QuotePatch,
};

export type UserOnQuoteForFkQuoteUserUserIdUsingPkUserUpdate = {
  patch: UpdateUserOnQuoteForFkQuoteUserUserIdPatch,
  id: Scalars['UUID'],
};

export type UserOnQuotePublicForFakePublicQuotePublicForeignKey2NodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: QuotePublicPatch,
};

export type UserOnQuotePublicForFakePublicQuotePublicForeignKey2UsingPkUserUpdate = {
  patch: UpdateUserOnQuotePublicForFakePublicQuotePublicForeignKey2Patch,
  id: Scalars['UUID'],
};

export type UserOnReminderForFkReminderUserUserIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: ReminderPatch,
};

export type UserOnReminderForFkReminderUserUserIdUsingPkUserUpdate = {
  patch: UpdateUserOnReminderForFkReminderUserUserIdPatch,
  id: Scalars['UUID'],
};

export type UserOnTransactionNoteForFkTransactionNoteUserUserIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: TransactionNotePatch,
};

export type UserOnTransactionNoteForFkTransactionNoteUserUserIdUsingPkUserUpdate = {
  patch: UpdateUserOnTransactionNoteForFkTransactionNoteUserUserIdPatch,
  id: Scalars['UUID'],
};

export type UserOnTripForFkTripUserUserIdNodeIdUpdate = {
  nodeId: Scalars['ID'],
  patch: TripPatch,
};

export type UserOnTripForFkTripUserUserIdUsingPkUserUpdate = {
  patch: UpdateUserOnTripForFkTripUserUserIdPatch,
  id: Scalars['UUID'],
};

export type UserPatch = {
  id?: Maybe<Scalars['UUID']>,
  email?: Maybe<Scalars['String']>,
  firstName?: Maybe<Scalars['String']>,
  lastName?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  skype?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  genderPreposition?: Maybe<Scalars['String']>,
  externalId?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  tripsUsingId?: Maybe<FkTripUserUserIdInverseInput>,
  emailsUsingId?: Maybe<FkEmailUserUserIdInverseInput>,
  notesUsingId?: Maybe<FkNoteUserUserIdInverseInput>,
  quotesUsingId?: Maybe<FkQuoteUserUserIdInverseInput>,
  remindersUsingId?: Maybe<FkReminderUserUserIdInverseInput>,
  transactionNotesUsingId?: Maybe<FkTransactionNoteUserUserIdInverseInput>,
  quotePublicsUsingId?: Maybe<FakePublicQuotePublicForeignKey2InverseInput>,
};

export type UserPkUserConnect = {
  id: Scalars['UUID'],
};

export type UserPkUserDelete = {
  id: Scalars['UUID'],
};

export type UsersConnection = {
   __typename?: 'UsersConnection',
  nodes: Array<Maybe<User>>,
  edges: Array<UsersEdge>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
};

export type UsersEdge = {
   __typename?: 'UsersEdge',
  cursor?: Maybe<Scalars['Cursor']>,
  node?: Maybe<User>,
};

export enum UsersOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC',
  FirstNameAsc = 'FIRST_NAME_ASC',
  FirstNameDesc = 'FIRST_NAME_DESC',
  LastNameAsc = 'LAST_NAME_ASC',
  LastNameDesc = 'LAST_NAME_DESC',
  PasswordAsc = 'PASSWORD_ASC',
  PasswordDesc = 'PASSWORD_DESC',
  PhoneAsc = 'PHONE_ASC',
  PhoneDesc = 'PHONE_DESC',
  SkypeAsc = 'SKYPE_ASC',
  SkypeDesc = 'SKYPE_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC',
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC',
  GenderPrepositionAsc = 'GENDER_PREPOSITION_ASC',
  GenderPrepositionDesc = 'GENDER_PREPOSITION_DESC',
  ExternalIdAsc = 'EXTERNAL_ID_ASC',
  ExternalIdDesc = 'EXTERNAL_ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type UserToManyEmailFilter = {
  every?: Maybe<EmailFilter>,
  some?: Maybe<EmailFilter>,
  none?: Maybe<EmailFilter>,
};

export type UserToManyNoteFilter = {
  every?: Maybe<NoteFilter>,
  some?: Maybe<NoteFilter>,
  none?: Maybe<NoteFilter>,
};

export type UserToManyQuoteFilter = {
  every?: Maybe<QuoteFilter>,
  some?: Maybe<QuoteFilter>,
  none?: Maybe<QuoteFilter>,
};

export type UserToManyQuotePublicFilter = {
  every?: Maybe<QuotePublicFilter>,
  some?: Maybe<QuotePublicFilter>,
  none?: Maybe<QuotePublicFilter>,
};

export type UserToManyReminderFilter = {
  every?: Maybe<ReminderFilter>,
  some?: Maybe<ReminderFilter>,
  none?: Maybe<ReminderFilter>,
};

export type UserToManyTransactionNoteFilter = {
  every?: Maybe<TransactionNoteFilter>,
  some?: Maybe<TransactionNoteFilter>,
  none?: Maybe<TransactionNoteFilter>,
};

export type UserToManyTripFilter = {
  every?: Maybe<TripFilter>,
  some?: Maybe<TripFilter>,
  none?: Maybe<TripFilter>,
};


export type UuidFilter = {
  isNull?: Maybe<Scalars['Boolean']>,
  equalTo?: Maybe<Scalars['UUID']>,
  notEqualTo?: Maybe<Scalars['UUID']>,
  distinctFrom?: Maybe<Scalars['UUID']>,
  notDistinctFrom?: Maybe<Scalars['UUID']>,
  in?: Maybe<Array<Scalars['UUID']>>,
  notIn?: Maybe<Array<Scalars['UUID']>>,
  lessThan?: Maybe<Scalars['UUID']>,
  lessThanOrEqualTo?: Maybe<Scalars['UUID']>,
  greaterThan?: Maybe<Scalars['UUID']>,
  greaterThanOrEqualTo?: Maybe<Scalars['UUID']>,
};

export type VirtualTransaction = {
   __typename?: 'VirtualTransaction',
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  accountId?: Maybe<Scalars['UUID']>,
  amount?: Maybe<Scalars['BigFloat']>,
  externalId?: Maybe<Scalars['String']>,
  date?: Maybe<Scalars['Datetime']>,
  description?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['Int']>,
  reverseTransactionId?: Maybe<Scalars['UUID']>,
  source?: Maybe<Scalars['String']>,
  transactionImportBatchId?: Maybe<Scalars['UUID']>,
  balance?: Maybe<Scalars['BigFloat']>,
  currency?: Maybe<Scalars['String']>,
  categoryId?: Maybe<Scalars['UUID']>,
};

export type VirtualTransactionCondition = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  accountId?: Maybe<Scalars['UUID']>,
  amount?: Maybe<Scalars['BigFloat']>,
  externalId?: Maybe<Scalars['String']>,
  date?: Maybe<Scalars['Datetime']>,
  description?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['Int']>,
  reverseTransactionId?: Maybe<Scalars['UUID']>,
  source?: Maybe<Scalars['String']>,
  transactionImportBatchId?: Maybe<Scalars['UUID']>,
  balance?: Maybe<Scalars['BigFloat']>,
  currency?: Maybe<Scalars['String']>,
  categoryId?: Maybe<Scalars['UUID']>,
};

export type VirtualTransactionFilter = {
  id?: Maybe<UuidFilter>,
  created?: Maybe<DatetimeFilter>,
  modified?: Maybe<DatetimeFilter>,
  accountId?: Maybe<UuidFilter>,
  amount?: Maybe<BigFloatFilter>,
  externalId?: Maybe<StringFilter>,
  date?: Maybe<DatetimeFilter>,
  description?: Maybe<StringFilter>,
  status?: Maybe<IntFilter>,
  reverseTransactionId?: Maybe<UuidFilter>,
  source?: Maybe<StringFilter>,
  transactionImportBatchId?: Maybe<UuidFilter>,
  balance?: Maybe<BigFloatFilter>,
  currency?: Maybe<StringFilter>,
  categoryId?: Maybe<UuidFilter>,
  and?: Maybe<Array<VirtualTransactionFilter>>,
  or?: Maybe<Array<VirtualTransactionFilter>>,
  not?: Maybe<VirtualTransactionFilter>,
};

export type VirtualTransactionsConnection = {
   __typename?: 'VirtualTransactionsConnection',
  nodes: Array<Maybe<VirtualTransaction>>,
  edges: Array<VirtualTransactionsEdge>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
};

export type VirtualTransactionsEdge = {
   __typename?: 'VirtualTransactionsEdge',
  cursor?: Maybe<Scalars['Cursor']>,
  node?: Maybe<VirtualTransaction>,
};

export enum VirtualTransactionsOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC',
  AccountIdAsc = 'ACCOUNT_ID_ASC',
  AccountIdDesc = 'ACCOUNT_ID_DESC',
  AmountAsc = 'AMOUNT_ASC',
  AmountDesc = 'AMOUNT_DESC',
  ExternalIdAsc = 'EXTERNAL_ID_ASC',
  ExternalIdDesc = 'EXTERNAL_ID_DESC',
  DateAsc = 'DATE_ASC',
  DateDesc = 'DATE_DESC',
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  StatusAsc = 'STATUS_ASC',
  StatusDesc = 'STATUS_DESC',
  ReverseTransactionIdAsc = 'REVERSE_TRANSACTION_ID_ASC',
  ReverseTransactionIdDesc = 'REVERSE_TRANSACTION_ID_DESC',
  SourceAsc = 'SOURCE_ASC',
  SourceDesc = 'SOURCE_DESC',
  TransactionImportBatchIdAsc = 'TRANSACTION_IMPORT_BATCH_ID_ASC',
  TransactionImportBatchIdDesc = 'TRANSACTION_IMPORT_BATCH_ID_DESC',
  BalanceAsc = 'BALANCE_ASC',
  BalanceDesc = 'BALANCE_DESC',
  CurrencyAsc = 'CURRENCY_ASC',
  CurrencyDesc = 'CURRENCY_DESC',
  CategoryIdAsc = 'CATEGORY_ID_ASC',
  CategoryIdDesc = 'CATEGORY_ID_DESC'
}

export type VisaRequirement = Node & {
   __typename?: 'VisaRequirement',
  nodeId: Scalars['ID'],
  id: Scalars['UUID'],
  created: Scalars['Datetime'],
  modified: Scalars['Datetime'],
  lastVerified: Scalars['Datetime'],
  destinationCountries?: Maybe<Array<Maybe<Scalars['String']>>>,
  passportCountries?: Maybe<Array<Maybe<Scalars['String']>>>,
  detail?: Maybe<Scalars['String']>,
};

export type VisaRequirementCondition = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  lastVerified?: Maybe<Scalars['Datetime']>,
  destinationCountries?: Maybe<Array<Maybe<Scalars['String']>>>,
  passportCountries?: Maybe<Array<Maybe<Scalars['String']>>>,
  detail?: Maybe<Scalars['String']>,
};

export type VisaRequirementFilter = {
  id?: Maybe<UuidFilter>,
  created?: Maybe<DatetimeFilter>,
  modified?: Maybe<DatetimeFilter>,
  lastVerified?: Maybe<DatetimeFilter>,
  destinationCountries?: Maybe<StringListFilter>,
  passportCountries?: Maybe<StringListFilter>,
  detail?: Maybe<StringFilter>,
  and?: Maybe<Array<VisaRequirementFilter>>,
  or?: Maybe<Array<VisaRequirementFilter>>,
  not?: Maybe<VisaRequirementFilter>,
};

export type VisaRequirementInput = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  lastVerified: Scalars['Datetime'],
  destinationCountries?: Maybe<Array<Maybe<Scalars['String']>>>,
  passportCountries?: Maybe<Array<Maybe<Scalars['String']>>>,
  detail?: Maybe<Scalars['String']>,
};

export type VisaRequirementPatch = {
  id?: Maybe<Scalars['UUID']>,
  created?: Maybe<Scalars['Datetime']>,
  modified?: Maybe<Scalars['Datetime']>,
  lastVerified?: Maybe<Scalars['Datetime']>,
  destinationCountries?: Maybe<Array<Maybe<Scalars['String']>>>,
  passportCountries?: Maybe<Array<Maybe<Scalars['String']>>>,
  detail?: Maybe<Scalars['String']>,
};

export type VisaRequirementsConnection = {
   __typename?: 'VisaRequirementsConnection',
  nodes: Array<Maybe<VisaRequirement>>,
  edges: Array<VisaRequirementsEdge>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
};

export type VisaRequirementsEdge = {
   __typename?: 'VisaRequirementsEdge',
  cursor?: Maybe<Scalars['Cursor']>,
  node?: Maybe<VisaRequirement>,
};

export enum VisaRequirementsOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC',
  LastVerifiedAsc = 'LAST_VERIFIED_ASC',
  LastVerifiedDesc = 'LAST_VERIFIED_DESC',
  DestinationCountriesAsc = 'DESTINATION_COUNTRIES_ASC',
  DestinationCountriesDesc = 'DESTINATION_COUNTRIES_DESC',
  PassportCountriesAsc = 'PASSPORT_COUNTRIES_ASC',
  PassportCountriesDesc = 'PASSPORT_COUNTRIES_DESC',
  DetailAsc = 'DETAIL_ASC',
  DetailDesc = 'DETAIL_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type PayInvoiceMutationVariables = {
  invoice: Scalars['UUID'],
  token: Scalars['String'],
  amount?: Maybe<Scalars['BigFloat']>
};


export type PayInvoiceMutation = (
  { __typename?: 'Mutation' }
  & { executePayment: Maybe<(
    { __typename?: 'GenericResponse' }
    & Pick<GenericResponse, 'success' | 'message'>
  )> }
);

export type TrackQuoteViewMutationVariables = {
  key: Scalars['String'],
  viewType: Scalars['String']
};


export type TrackQuoteViewMutation = (
  { __typename?: 'Mutation' }
  & { trackQuoteView: Maybe<(
    { __typename?: 'GenericResponse' }
    & Pick<GenericResponse, 'success'>
  )> }
);

export type GetInvoiceQueryVariables = {
  id: Scalars['UUID']
};


export type GetInvoiceQuery = (
  { __typename?: 'Query' }
  & { invoice: Maybe<(
    { __typename?: 'InvoicePublic' }
    & Pick<InvoicePublic, 'amount' | 'amountDue' | 'amountPaid' | 'currency' | 'due' | 'id' | 'invoiced' | 'number' | 'paid' | 'summary' | 'trip'>
  )> }
);

export type GetQuoteQueryVariables = {
  key: Scalars['String']
};


export type GetQuoteQuery = (
  { __typename?: 'Query' }
  & { quote: Maybe<(
    { __typename?: 'QuotePublic' }
    & Pick<QuotePublic, 'id' | 'status' | 'start' | 'duration' | 'travellerCount' | 'total' | 'baseCurrency' | 'inclusions' | 'exclusions' | 'expires' | 'locked'>
    & { hero: Maybe<(
      { __typename?: 'QuoteHero' }
      & Pick<QuoteHero, 'title' | 'subtitle'>
      & { image: Maybe<(
        { __typename?: 'MediaItem' }
        & Pick<MediaItem, 'hash'>
      )> }
    )>, user: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'lastName' | 'firstName' | 'email' | 'phone' | 'genderPreposition'>
    )>, trip: Maybe<(
      { __typename?: 'Trip' }
      & Pick<Trip, 'name'>
      & { agency: Maybe<(
        { __typename?: 'Agency' }
        & Pick<Agency, 'name'>
        & { logo: Maybe<(
          { __typename?: 'MediaItem' }
          & Pick<MediaItem, 'hash'>
        )> }
      )>, agencyMember: Maybe<(
        { __typename?: 'AgencyMember' }
        & Pick<AgencyMember, 'lastName' | 'firstName' | 'phone' | 'email' | 'genderPreposition'>
      )>, tripFlights: (
        { __typename?: 'TripFlightsConnection' }
        & { nodes: Array<Maybe<(
          { __typename?: 'TripFlight' }
          & Pick<TripFlight, 'id' | 'arrival' | 'carrier' | 'departure' | 'number'>
          & { departureAirport: Maybe<(
            { __typename?: 'Airport' }
            & Pick<Airport, 'id' | 'latitude' | 'longitude' | 'iata' | 'icao' | 'timezone' | 'city'>
            & { country: Maybe<(
              { __typename?: 'Country' }
              & Pick<Country, 'name'>
            )> }
          )>, arrivalAirport: Maybe<(
            { __typename?: 'Airport' }
            & Pick<Airport, 'id' | 'latitude' | 'longitude' | 'iata' | 'icao' | 'timezone' | 'city'>
            & { country: Maybe<(
              { __typename?: 'Country' }
              & Pick<Country, 'name'>
            )> }
          )> }
        )>> }
      ) }
    )>, days: (
      { __typename?: 'QuoteDaysConnection' }
      & { nodes: Array<Maybe<(
        { __typename?: 'QuoteDay' }
        & Pick<QuoteDay, 'id' | 'date' | 'order' | 'activitySummary' | 'activityDetail' | 'accommodationId'>
        & { quoteDayDestinationsByDayId: (
          { __typename?: 'QuoteDayDestinationsConnection' }
          & { nodes: Array<Maybe<(
            { __typename?: 'QuoteDayDestination' }
            & Pick<QuoteDayDestination, 'order'>
            & { destination: Maybe<(
              { __typename?: 'Destination' }
              & Pick<Destination, 'id' | 'name'>
            )> }
          )>> }
        ) }
      )>> }
    ), accommodation: (
      { __typename?: 'QuoteAccommodationDetailsConnection' }
      & { nodes: Array<Maybe<(
        { __typename?: 'QuoteAccommodationDetail' }
        & Pick<QuoteAccommodationDetail, 'id' | 'order' | 'basis' | 'confirmation' | 'beverageInclusions' | 'foodInclusions' | 'roomType'>
        & { property: Maybe<(
          { __typename?: 'Property' }
          & Pick<Property, 'id' | 'name' | 'summary' | 'latitude' | 'longitude'>
          & { heroMedia: Maybe<(
            { __typename?: 'MediaItem' }
            & Pick<MediaItem, 'hash'>
          )> }
        )> }
      )>> }
    ) }
  )> }
);

export type GetPropertyQueryVariables = {
  id: Scalars['UUID']
};


export type GetPropertyQuery = (
  { __typename?: 'Query' }
  & { property: Maybe<(
    { __typename?: 'Property' }
    & Pick<Property, 'id' | 'name' | 'city' | 'summary' | 'nearestAirport' | 'latitude' | 'longitude'>
    & { country: Maybe<(
      { __typename?: 'Country' }
      & Pick<Country, 'id' | 'name'>
    )>, heroMedia: Maybe<(
      { __typename?: 'MediaItem' }
      & Pick<MediaItem, 'id' | 'hash'>
    )>, gallery: Maybe<(
      { __typename?: 'MediaGallery' }
      & Pick<MediaGallery, 'id'>
      & { mediaGalleryItems: (
        { __typename?: 'MediaGalleryItemsConnection' }
        & { nodes: Array<Maybe<(
          { __typename?: 'MediaGalleryItem' }
          & Pick<MediaGalleryItem, 'id'>
          & { mediaItem: Maybe<(
            { __typename?: 'MediaItem' }
            & Pick<MediaItem, 'hash' | 'name'>
          )> }
        )>> }
      ), mediaGalleriesByParentId: (
        { __typename?: 'MediaGalleriesConnection' }
        & { nodes: Array<Maybe<(
          { __typename?: 'MediaGallery' }
          & Pick<MediaGallery, 'id' | 'name'>
          & { mediaGalleryItems: (
            { __typename?: 'MediaGalleryItemsConnection' }
            & { nodes: Array<Maybe<(
              { __typename?: 'MediaGalleryItem' }
              & Pick<MediaGalleryItem, 'id'>
              & { mediaItem: Maybe<(
                { __typename?: 'MediaItem' }
                & Pick<MediaItem, 'name' | 'hash'>
              )> }
            )>> }
          ) }
        )>> }
      ) }
    )> }
  )> }
);


export const PayInvoiceDocument = gql`
    mutation PayInvoice($invoice: UUID!, $token: String!, $amount: BigFloat) {
  executePayment(input: {invoice: $invoice, token: $token, amount: $amount}) {
    success
    message
  }
}
    `;
export type PayInvoiceMutationFn = ApolloReactCommon.MutationFunction<PayInvoiceMutation, PayInvoiceMutationVariables>;

/**
 * __usePayInvoiceMutation__
 *
 * To run a mutation, you first call `usePayInvoiceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePayInvoiceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [payInvoiceMutation, { data, loading, error }] = usePayInvoiceMutation({
 *   variables: {
 *      invoice: // value for 'invoice'
 *      token: // value for 'token'
 *      amount: // value for 'amount'
 *   },
 * });
 */
export function usePayInvoiceMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<PayInvoiceMutation, PayInvoiceMutationVariables>) {
        return ApolloReactHooks.useMutation<PayInvoiceMutation, PayInvoiceMutationVariables>(PayInvoiceDocument, baseOptions);
      }
export type PayInvoiceMutationHookResult = ReturnType<typeof usePayInvoiceMutation>;
export type PayInvoiceMutationResult = ApolloReactCommon.MutationResult<PayInvoiceMutation>;
export type PayInvoiceMutationOptions = ApolloReactCommon.BaseMutationOptions<PayInvoiceMutation, PayInvoiceMutationVariables>;
export const TrackQuoteViewDocument = gql`
    mutation TrackQuoteView($key: String!, $viewType: String!) {
  trackQuoteView(input: {key: $key, viewType: $viewType}) {
    success
  }
}
    `;
export type TrackQuoteViewMutationFn = ApolloReactCommon.MutationFunction<TrackQuoteViewMutation, TrackQuoteViewMutationVariables>;

/**
 * __useTrackQuoteViewMutation__
 *
 * To run a mutation, you first call `useTrackQuoteViewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTrackQuoteViewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [trackQuoteViewMutation, { data, loading, error }] = useTrackQuoteViewMutation({
 *   variables: {
 *      key: // value for 'key'
 *      viewType: // value for 'viewType'
 *   },
 * });
 */
export function useTrackQuoteViewMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<TrackQuoteViewMutation, TrackQuoteViewMutationVariables>) {
        return ApolloReactHooks.useMutation<TrackQuoteViewMutation, TrackQuoteViewMutationVariables>(TrackQuoteViewDocument, baseOptions);
      }
export type TrackQuoteViewMutationHookResult = ReturnType<typeof useTrackQuoteViewMutation>;
export type TrackQuoteViewMutationResult = ApolloReactCommon.MutationResult<TrackQuoteViewMutation>;
export type TrackQuoteViewMutationOptions = ApolloReactCommon.BaseMutationOptions<TrackQuoteViewMutation, TrackQuoteViewMutationVariables>;
export const GetInvoiceDocument = gql`
    query GetInvoice($id: UUID!) {
  invoice: invoicePublic(id: $id) {
    amount
    amountDue
    amountPaid
    currency
    due
    id
    invoiced
    number
    paid
    summary
    trip
  }
}
    `;

/**
 * __useGetInvoiceQuery__
 *
 * To run a query within a React component, call `useGetInvoiceQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetInvoiceQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetInvoiceQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetInvoiceQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetInvoiceQuery, GetInvoiceQueryVariables>) {
        return ApolloReactHooks.useQuery<GetInvoiceQuery, GetInvoiceQueryVariables>(GetInvoiceDocument, baseOptions);
      }
export function useGetInvoiceLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetInvoiceQuery, GetInvoiceQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetInvoiceQuery, GetInvoiceQueryVariables>(GetInvoiceDocument, baseOptions);
        }
export type GetInvoiceQueryHookResult = ReturnType<typeof useGetInvoiceQuery>;
export type GetInvoiceLazyQueryHookResult = ReturnType<typeof useGetInvoiceLazyQuery>;
export type GetInvoiceQueryResult = ApolloReactCommon.QueryResult<GetInvoiceQuery, GetInvoiceQueryVariables>;
export const GetQuoteDocument = gql`
    query GetQuote($key: String!) {
  quote: quotePublic(key: $key) {
    id
    status
    start
    duration
    travellerCount
    total
    baseCurrency
    inclusions
    exclusions
    expires
    locked
    hero {
      title
      subtitle
      image {
        hash
      }
    }
    user {
      lastName
      firstName
      email
      phone
      genderPreposition
    }
    trip {
      name
      agency {
        name
        logo {
          hash
        }
      }
      agencyMember {
        lastName
        firstName
        phone
        email
        genderPreposition
      }
      tripFlights(orderBy: DEPARTURE_ASC) {
        nodes {
          id
          arrival
          carrier
          departure
          number
          departureAirport: airportByDepartureAirport {
            id
            latitude
            longitude
            iata
            icao
            timezone
            city
            country {
              name
            }
          }
          arrivalAirport: airportByArrivalAirport {
            id
            latitude
            longitude
            iata
            icao
            timezone
            city
            country {
              name
            }
          }
        }
      }
    }
    days: quoteDaysByQuoteId(orderBy: ORDER_ASC) {
      nodes {
        id
        date
        order
        activitySummary
        activityDetail
        accommodationId
        quoteDayDestinationsByDayId(orderBy: ORDER_ASC) {
          nodes {
            order
            destination {
              id
              name
            }
          }
        }
      }
    }
    accommodation: quoteAccommodationDetailsByQuoteId(orderBy: ORDER_ASC) {
      nodes {
        id
        order
        basis
        confirmation
        beverageInclusions
        foodInclusions
        roomType
        property {
          id
          name
          summary
          latitude
          longitude
          heroMedia {
            hash
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetQuoteQuery__
 *
 * To run a query within a React component, call `useGetQuoteQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetQuoteQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetQuoteQuery({
 *   variables: {
 *      key: // value for 'key'
 *   },
 * });
 */
export function useGetQuoteQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetQuoteQuery, GetQuoteQueryVariables>) {
        return ApolloReactHooks.useQuery<GetQuoteQuery, GetQuoteQueryVariables>(GetQuoteDocument, baseOptions);
      }
export function useGetQuoteLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetQuoteQuery, GetQuoteQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetQuoteQuery, GetQuoteQueryVariables>(GetQuoteDocument, baseOptions);
        }
export type GetQuoteQueryHookResult = ReturnType<typeof useGetQuoteQuery>;
export type GetQuoteLazyQueryHookResult = ReturnType<typeof useGetQuoteLazyQuery>;
export type GetQuoteQueryResult = ApolloReactCommon.QueryResult<GetQuoteQuery, GetQuoteQueryVariables>;
export const GetPropertyDocument = gql`
    query GetProperty($id: UUID!) {
  property(id: $id) {
    id
    name
    city
    summary
    nearestAirport
    country {
      id
      name
    }
    latitude
    longitude
    heroMedia {
      id
      hash
    }
    gallery {
      id
      mediaGalleryItems {
        nodes {
          id
          mediaItem {
            hash
            name
          }
        }
      }
      mediaGalleriesByParentId {
        nodes {
          id
          name
          mediaGalleryItems {
            nodes {
              id
              mediaItem {
                name
                hash
              }
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetPropertyQuery__
 *
 * To run a query within a React component, call `useGetPropertyQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPropertyQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPropertyQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPropertyQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetPropertyQuery, GetPropertyQueryVariables>) {
        return ApolloReactHooks.useQuery<GetPropertyQuery, GetPropertyQueryVariables>(GetPropertyDocument, baseOptions);
      }
export function useGetPropertyLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetPropertyQuery, GetPropertyQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetPropertyQuery, GetPropertyQueryVariables>(GetPropertyDocument, baseOptions);
        }
export type GetPropertyQueryHookResult = ReturnType<typeof useGetPropertyQuery>;
export type GetPropertyLazyQueryHookResult = ReturnType<typeof useGetPropertyLazyQuery>;
export type GetPropertyQueryResult = ApolloReactCommon.QueryResult<GetPropertyQuery, GetPropertyQueryVariables>;