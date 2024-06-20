import type { PostConfirmationTriggerHandler } from 'aws-lambda';
import {type Schema} from '../../data/resource';
import {Amplify, type ResourcesConfig} from 'aws-amplify';
import {generateClient} from 'aws-amplify/data'
import {env} from "$amplify/env/post-confirmation"
import {createUser} from './graphql/mutations'
import {type CredentialsAndIdentityIdProvider, } from 'aws-amplify/auth'

import {
  CognitoIdentityProviderClient, 
  AdminAddUserToGroupCommand
} from '@aws-sdk/client-cognito-identity-provider';

Amplify.configure({
  API: {
    GraphQL: {
      endpoint: env.AMPLIFY_DATA_GRAPHQL_ENDPOINT,
      region: env.AWS_REGION,
      defaultAuthMode: 'iam'
    }
  },
},{
  Auth: {
    credentialsProvider: {
      getCredentialsAndIdentityId: async () => ({
        credentials: {
          accessKeyId: env.AWS_ACCESS_KEY_ID,
          secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
          sessionToken: env.AWS_SESSION_TOKEN
        }
      }),
      clearCredentialsAndIdentityId: () => {
        /* noop */
      }
    }
  }
});


const console_client = new CognitoIdentityProviderClient();
const gql_client = generateClient<Schema>({
  authMode: 'iam'
});

// add user to group
export const handler: PostConfirmationTriggerHandler = async (event) => {
  
  // add all users to allusers for easier blasts
  const command_add_allusers = new AdminAddUserToGroupCommand({
    GroupName: 'allusers',
    Username: event.userName,
    UserPoolId: event.userPoolId
  });
  const response_1 = await console_client.send(command_add_allusers);
  console.log('processed', response_1.$metadata.requestId)

  // default to tenant role
  const command_add_tenant = new AdminAddUserToGroupCommand({
    GroupName: 'tenant',
    Username: event.userName,
    UserPoolId: event.userPoolId
  });
  const response_2 = await console_client.send(command_add_tenant);
  console.log('processed', response_2.$metadata.requestId);

  // create user profile
  await gql_client.graphql({
    query: createUser,
    variables: {
      input: {
        email_1: event.request.userAttributes.email,
        cognito_username: `${event.userName}`
      }
    }
  });

  return event;
}

