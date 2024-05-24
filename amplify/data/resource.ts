import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

/*== STEP 1 ===============================================================
The section below creates a Todo database table with a "content" field. Try
adding a new "isDone" field as a boolean. The authorization rule below
specifies that any unauthenticated user can "create", "read", "update", 
and "delete" any "Todo" records.
=========================================================================*/
const schema = a.schema({
  US_STATE: a
    .enum(['AL',  'AK',  'AS',  'AZ',  'AR',  'CA',  'CO',  'CT',  'DE',  'DC',  'FM',  'FL',  'GA',  'GU',  'HI',  'ID',  'IL',  'IN',  'IA',  'KS',  'KY',  'LA',  'ME',  'MH',  'MD',  'MA',  'MI',  'MN',  'MS',  'MO',  'MT',  'NE',  'NV',  'NH',  'NJ',  'NM',  'NY',  'NC',  'ND',  'MP',  'OH',  'OK',  'OR',  'PW',  'PA',  'PR',  'RI',  'SC',  'SD',  'TN',  'TX',  'UT',  'VT',  'VI',  'VA',  'WA',  'WV',  'WI',  'WY']),
  user: a
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
      country: a.string().default('USA')
    })
    .identifier(['cognito_username']),
    // .authorization((allow) => [allow.guest()]),
  authorization: a
    .model({
      issuer_id: a.string().required(),
      user_id: a.string().required(),
      resource_type: a.enum(['COMPANY', 'LEASE', 'UNIT']),
      resource_id: a.string().required(),
      authority_type: a.enum(['COMPANY#EMPLOYEE', 'LEASE#OWNER', 'ADMIN']),
      authority_id: a.string().required()
    }),
    // .authorization((allow) => [allow.guest()]),
}).authorization((allow) => [allow.guest()]);

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'iam'
  },
});

/*== STEP 2 ===============================================================
Go to your frontend source code. From your client-side code, generate a
Data client to make CRUDL requests to your table. (THIS SNIPPET WILL ONLY
WORK IN THE FRONTEND CODE FILE.)

Using JavaScript or Next.js React Server Components, Middleware, Server 
Actions or Pages Router? Review how to generate Data clients for those use
cases: https://docs.amplify.aws/gen2/build-a-backend/data/connect-to-API/
=========================================================================*/

/*
"use client"
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";

const client = generateClient<Schema>() // use this Data client for CRUDL requests
*/

/*== STEP 3 ===============================================================
Fetch records from the database and use them in your frontend component.
(THIS SNIPPET WILL ONLY WORK IN THE FRONTEND CODE FILE.)
=========================================================================*/

/* For example, in a React component, you can use this snippet in your
  function's RETURN statement */
// const { data: todos } = await client.models.Todo.list()

// return <ul>{todos.map(todo => <li key={todo.id}>{todo.content}</li>)}</ul>
