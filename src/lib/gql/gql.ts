/* eslint-disable */
import * as types from './graphql.js';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "\n        query me {\n            me {\n                id\n                email\n                first_name\n                last_name\n            }\n        }": types.MeDocument,
    "\n        query CustomerPortalUrl($return_url: String!) {\n            me {\n                customer_portal_url(return_url: $return_url)\n            }\n        }": types.CustomerPortalUrlDocument,
    "\n        mutation CreateLightUniversityCheckoutSession($return_url: String!) {\n            create_light_university_checkout_session(success_url: $return_url)\n        }": types.CreateLightUniversityCheckoutSessionDocument,
    "\n        mutation SetUnitProgress($course_slug: String!, $unit_slug: String!) {\n            set_unit_progress(course_slug: $course_slug, unit_slug: $unit_slug, status: IN_PROGRESS) {\n                id\n                status\n                user_id\n                unit_slug\n                course_slug\n                updated_at\n            }\n        }\n    ": types.SetUnitProgressDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n        query me {\n            me {\n                id\n                email\n                first_name\n                last_name\n            }\n        }"): (typeof documents)["\n        query me {\n            me {\n                id\n                email\n                first_name\n                last_name\n            }\n        }"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n        query CustomerPortalUrl($return_url: String!) {\n            me {\n                customer_portal_url(return_url: $return_url)\n            }\n        }"): (typeof documents)["\n        query CustomerPortalUrl($return_url: String!) {\n            me {\n                customer_portal_url(return_url: $return_url)\n            }\n        }"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n        mutation CreateLightUniversityCheckoutSession($return_url: String!) {\n            create_light_university_checkout_session(success_url: $return_url)\n        }"): (typeof documents)["\n        mutation CreateLightUniversityCheckoutSession($return_url: String!) {\n            create_light_university_checkout_session(success_url: $return_url)\n        }"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n        mutation SetUnitProgress($course_slug: String!, $unit_slug: String!) {\n            set_unit_progress(course_slug: $course_slug, unit_slug: $unit_slug, status: IN_PROGRESS) {\n                id\n                status\n                user_id\n                unit_slug\n                course_slug\n                updated_at\n            }\n        }\n    "): (typeof documents)["\n        mutation SetUnitProgress($course_slug: String!, $unit_slug: String!) {\n            set_unit_progress(course_slug: $course_slug, unit_slug: $unit_slug, status: IN_PROGRESS) {\n                id\n                status\n                user_id\n                unit_slug\n                course_slug\n                updated_at\n            }\n        }\n    "];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;