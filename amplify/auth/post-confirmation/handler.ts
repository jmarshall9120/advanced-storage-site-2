import type { PostConfirmationTriggerHandler } from 'aws-lambda';
import {
  CognitoIdentityProviderClient, 
  AdminAddUserToGroupCommand
} from '@aws-sdk/client-cognito-identity-provider';
// import {env} from '$amplify/env/postConfirmation';

const client = new CognitoIdentityProviderClient();

// add user to group
export const handler: PostConfirmationTriggerHandler = async (event) => {
  
  // add all users to allusers for easier blasts
  const command_add_allusers = new AdminAddUserToGroupCommand({
    GroupName: 'allusers',
    Username: event.userName,
    UserPoolId: event.userPoolId
  });
  const response_1 = await client.send(command_add_allusers);
  console.log('processed', response_1.$metadata.requestId)

  // default to tenant role
  const command_add_tenant = new AdminAddUserToGroupCommand({
    GroupName: 'tenant',
    Username: event.userName,
    UserPoolId: event.userPoolId
  });
  const response_2 = await client.send(command_add_tenant);
  console.log('processed', response_2.$metadata.requestId)

  return event
}

