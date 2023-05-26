import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  JSON: any;
  UUID: any;
  Void: any;
};

export enum Assessment {
  Fail = 'FAIL',
  Pass = 'PASS',
  SoftPass = 'SOFT_PASS',
  Unknown = 'UNKNOWN'
}

export type AuthApp = {
  __typename?: 'AuthApp';
  created: Scalars['DateTime'];
  description: Scalars['String'];
  name: Scalars['String'];
  official: Scalars['Boolean'];
  redirect_hostnames: Array<Scalars['String']>;
  scopes: Array<Scalars['String']>;
};

export enum CitizenshipStatus {
  Approved = 'APPROVED',
  Pending = 'PENDING',
  Rejected = 'REJECTED'
}

export type CrackSeconds = {
  __typename?: 'CrackSeconds';
  guesses: Scalars['Float'];
  seconds: Scalars['Float'];
  string: Scalars['String'];
};

export type Model = {
  application: Scalars['JSON'];
  applicationType: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['UUID'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /**
   * Returns an authentication token if the
   * user is found and the password matches
   */
  auth_token: Scalars['String'];
  create_citizenship_application: Scalars['UUID'];
  create_light_university_checkout_session: Scalars['String'];
  create_user: Scalars['UUID'];
  issue_token: Scalars['String'];
  question_assessment: QuestionAssessment;
  reset_password: Scalars['Void'];
  reset_to_new_password: Scalars['Void'];
  set_unit_progress: UnitProgress;
  submit_application: Scalars['UUID'];
};


export type MutationAuth_TokenArgs = {
  app_secret: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  scopes: Array<Scalars['String']>;
};


export type MutationCreate_Citizenship_ApplicationArgs = {
  country_of_birth: Scalars['String'];
  country_of_citizenship: Array<Scalars['String']>;
  country_of_residence: Scalars['String'];
  date_of_birth: Scalars['Int'];
  ethnic_groups: Array<Scalars['String']>;
  first_name: Scalars['String'];
  last_name: Scalars['String'];
  occupations: Array<Scalars['String']>;
  sex: Scalars['String'];
  skills: Array<Scalars['String']>;
};


export type MutationCreate_Light_University_Checkout_SessionArgs = {
  success_url: Scalars['String'];
};


export type MutationCreate_UserArgs = {
  calling_code: Scalars['String'];
  country_code: Scalars['String'];
  email: Scalars['String'];
  first_name: Scalars['String'];
  last_name: Scalars['String'];
  password: Scalars['String'];
  phone_number: Scalars['String'];
  referrer?: InputMaybe<Scalars['UUID']>;
};


export type MutationIssue_TokenArgs = {
  scopes: Array<Scalars['String']>;
};


export type MutationQuestion_AssessmentArgs = {
  answer: Scalars['String'];
  course_slug: Scalars['String'];
  question: Scalars['String'];
  question_context?: InputMaybe<Scalars['String']>;
  question_slug: Scalars['String'];
  unit_slug: Scalars['String'];
};


export type MutationReset_PasswordArgs = {
  email: Scalars['String'];
};


export type MutationReset_To_New_PasswordArgs = {
  new_password: Scalars['String'];
  token_id: Scalars['UUID'];
};


export type MutationSet_Unit_ProgressArgs = {
  course_slug: Scalars['String'];
  status: UnitStatus;
  unit_slug: Scalars['String'];
};


export type MutationSubmit_ApplicationArgs = {
  application: Model;
};

export type Query = {
  __typename?: 'Query';
  all_course_progress: Array<Array<UnitProgress>>;
  auth_app?: Maybe<AuthApp>;
  course_progress: Array<UnitProgress>;
  /**
   * Returns the crack time of a password
   * Used for password strength estimation
   * On the frontend
   */
  crack_time: CrackSeconds;
  last_updated_unit?: Maybe<UnitProgress>;
  me?: Maybe<User>;
  ping: Scalars['String'];
  question_assessment?: Maybe<QuestionAssessment>;
  user_count: Scalars['Int'];
  user_count_by_interval: Array<Scalars['Int']>;
};


export type QueryAuth_AppArgs = {
  slug: Scalars['String'];
};


export type QueryCourse_ProgressArgs = {
  course_slug: Scalars['String'];
};


export type QueryCrack_TimeArgs = {
  password: Scalars['String'];
};


export type QueryQuestion_AssessmentArgs = {
  course_slug: Scalars['String'];
  question_slug: Scalars['String'];
  unit_slug: Scalars['String'];
};


export type QueryUser_Count_By_IntervalArgs = {
  count: Scalars['Int'];
  interval: Scalars['Int'];
};

export type QuestionAssessment = {
  __typename?: 'QuestionAssessment';
  answer: Scalars['String'];
  assessment: Assessment;
  course_slug: Scalars['String'];
  feedback: Scalars['String'];
  id: Scalars['UUID'];
  question_slug: Scalars['String'];
  unit_slug: Scalars['String'];
  updated_at: Scalars['DateTime'];
  user_id: Scalars['UUID'];
};

export type SubscriptionInfo = {
  __typename?: 'SubscriptionInfo';
  expiry_date?: Maybe<Scalars['DateTime']>;
  status: SubscriptionStatus;
};

export enum SubscriptionStatus {
  Expiring = 'EXPIRING',
  None = 'NONE',
  Renewing = 'RENEWING'
}

export type UnitProgress = {
  __typename?: 'UnitProgress';
  course_slug: Scalars['String'];
  id: Scalars['UUID'];
  status: UnitStatus;
  unit_slug: Scalars['String'];
  updated_at: Scalars['DateTime'];
  user_id: Scalars['UUID'];
};

export enum UnitStatus {
  Completed = 'COMPLETED',
  InProgress = 'IN_PROGRESS',
  NotStarted = 'NOT_STARTED'
}

export type User = {
  __typename?: 'User';
  calling_code: Scalars['String'];
  citizenship_status?: Maybe<CitizenshipStatus>;
  country_code: Scalars['String'];
  customer_portal_url: Scalars['String'];
  email: Scalars['String'];
  first_name: Scalars['String'];
  id: Scalars['UUID'];
  joined: Scalars['DateTime'];
  last_name: Scalars['String'];
  phone_number: Scalars['String'];
  referral_count: Scalars['Int'];
  role?: Maybe<Scalars['String']>;
  roles: Array<Scalars['String']>;
  stripe_customer_id: Scalars['String'];
  stripe_subscription_info: SubscriptionInfo;
};


export type UserCustomer_Portal_UrlArgs = {
  return_url?: InputMaybe<Scalars['String']>;
};

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: any, email: string, first_name: string, last_name: string, stripe_subscription_info: { __typename?: 'SubscriptionInfo', status: SubscriptionStatus, expiry_date?: any | null } } | null };

export type AllCourseProgressQueryVariables = Exact<{ [key: string]: never; }>;


export type AllCourseProgressQuery = { __typename?: 'Query', all_course_progress: Array<Array<{ __typename?: 'UnitProgress', id: any, user_id: any, unit_slug: string, course_slug: string, status: UnitStatus, updated_at: any }>> };

export type CustomerPortalUrlQueryVariables = Exact<{
  return_url: Scalars['String'];
}>;


export type CustomerPortalUrlQuery = { __typename?: 'Query', me?: { __typename?: 'User', customer_portal_url: string } | null };

export type CreateLuminaUniversityCheckoutSessionMutationVariables = Exact<{
  return_url: Scalars['String'];
}>;


export type CreateLuminaUniversityCheckoutSessionMutation = { __typename?: 'Mutation', create_light_university_checkout_session: string };

export type GetCourseProgressQueryVariables = Exact<{
  course_slug: Scalars['String'];
}>;


export type GetCourseProgressQuery = { __typename?: 'Query', course_progress: Array<{ __typename?: 'UnitProgress', id: any, status: UnitStatus, user_id: any, unit_slug: string, course_slug: string, updated_at: any }> };

export type SetUnitProgressMutationVariables = Exact<{
  course_slug: Scalars['String'];
  unit_slug: Scalars['String'];
  status: UnitStatus;
}>;


export type SetUnitProgressMutation = { __typename?: 'Mutation', set_unit_progress: { __typename?: 'UnitProgress', id: any } };

export type SetQuestionAssessmentMutationVariables = Exact<{
  question: Scalars['String'];
  answer: Scalars['String'];
  course_slug: Scalars['String'];
  unit_slug: Scalars['String'];
  question_slug: Scalars['String'];
  context?: InputMaybe<Scalars['String']>;
}>;


export type SetQuestionAssessmentMutation = { __typename?: 'Mutation', question_assessment: { __typename?: 'QuestionAssessment', feedback: string, assessment: Assessment } };


export const MeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"stripe_subscription_info"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"expiry_date"}}]}}]}}]}}]} as unknown as DocumentNode<MeQuery, MeQueryVariables>;
export const AllCourseProgressDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"allCourseProgress"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"all_course_progress"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"unit_slug"}},{"kind":"Field","name":{"kind":"Name","value":"course_slug"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]}}]} as unknown as DocumentNode<AllCourseProgressQuery, AllCourseProgressQueryVariables>;
export const CustomerPortalUrlDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"customerPortalUrl"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"return_url"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customer_portal_url"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"return_url"},"value":{"kind":"Variable","name":{"kind":"Name","value":"return_url"}}}]}]}}]}}]} as unknown as DocumentNode<CustomerPortalUrlQuery, CustomerPortalUrlQueryVariables>;
export const CreateLuminaUniversityCheckoutSessionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createLuminaUniversityCheckoutSession"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"return_url"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"create_light_university_checkout_session"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"success_url"},"value":{"kind":"Variable","name":{"kind":"Name","value":"return_url"}}}]}]}}]} as unknown as DocumentNode<CreateLuminaUniversityCheckoutSessionMutation, CreateLuminaUniversityCheckoutSessionMutationVariables>;
export const GetCourseProgressDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCourseProgress"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"course_slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"course_progress"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"course_slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"course_slug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"unit_slug"}},{"kind":"Field","name":{"kind":"Name","value":"course_slug"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]}}]} as unknown as DocumentNode<GetCourseProgressQuery, GetCourseProgressQueryVariables>;
export const SetUnitProgressDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"setUnitProgress"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"course_slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"unit_slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"status"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UnitStatus"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"set_unit_progress"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"course_slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"course_slug"}}},{"kind":"Argument","name":{"kind":"Name","value":"unit_slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"unit_slug"}}},{"kind":"Argument","name":{"kind":"Name","value":"status"},"value":{"kind":"Variable","name":{"kind":"Name","value":"status"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<SetUnitProgressMutation, SetUnitProgressMutationVariables>;
export const SetQuestionAssessmentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SetQuestionAssessment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"question"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"answer"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"course_slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"unit_slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"question_slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"context"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"question_assessment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"question"},"value":{"kind":"Variable","name":{"kind":"Name","value":"question"}}},{"kind":"Argument","name":{"kind":"Name","value":"answer"},"value":{"kind":"Variable","name":{"kind":"Name","value":"answer"}}},{"kind":"Argument","name":{"kind":"Name","value":"course_slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"course_slug"}}},{"kind":"Argument","name":{"kind":"Name","value":"unit_slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"unit_slug"}}},{"kind":"Argument","name":{"kind":"Name","value":"question_slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"question_slug"}}},{"kind":"Argument","name":{"kind":"Name","value":"question_context"},"value":{"kind":"Variable","name":{"kind":"Name","value":"context"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"feedback"}},{"kind":"Field","name":{"kind":"Name","value":"assessment"}}]}}]}}]} as unknown as DocumentNode<SetQuestionAssessmentMutation, SetQuestionAssessmentMutationVariables>;