import { type Ref, ref, computed } from "vue";
import { defineStore } from "pinia";
import { getCurrentUser, fetchAuthSession } from "aws-amplify/auth";
import {type AuthUser, type AuthSession, AuthError} from 'aws-amplify/auth'
import { auth } from "~~/amplify/auth/resource";

export const useAuthStore = defineStore("auth", () => {
  const user = ref({}),
    // cognito_user = ref({}),
    // cognito_auth_error = ref(""),
    // isAuthenticated = ref(false),
    signInDetails: Ref<AuthUser["signInDetails"]> = ref(),
    userId: Ref<AuthUser['userId']> = ref(''),
    username: Ref<AuthUser['username']> = ref(''),
    credentials: Ref<AuthSession['credentials']> = ref(),
    identityId: Ref<AuthSession['identityId']> = ref(''),
    tokens: Ref<AuthSession['tokens']> = ref(),
    userSub: Ref<AuthSession['userSub']> = ref('');

  // const getEmail = computed(() => {
  //   console.log("auth_store.getEmail", cognito_user.value);
  //   return cognito_user.value.attributes
  //     ? cognito_user.value.attributes.email
  //     : "Not Auth-ed";
  // });

  const isAuthenticated = computed(() => {
    return Boolean(userId.value)
  })

  const getEmail = computed(() => {
    return signInDetails.value?.loginId
    // try {
    //   const { signInDetails } = await getCurrentUser();
    //   return signInDetails?.loginId;
    // } catch (e) {
    //   throw e;
    // }
  })

  const getGroups = computed(() => {
    // console.log("auth_store.getEmail", cognito_user.value.signInUserSession);
    return cognito_user.value.signInUserSession
      ? cognito_user.value.signInUserSession.idToken.payload["cognito:groups"]
      : "Not Auth-ed";
  });

  function isInGroup(groupName: string) {
    return getGroups.value.includes(groupName);
  }

  async function setUser() {
    let authUser: AuthUser;
    let authSession: AuthSession;
    
    // try login
    try {
      authUser = await getCurrentUser();
      signInDetails.value = authUser.signInDetails;
      userId.value = authUser.userId;
      username.value = authUser.username;
    } catch (e) {
      if (e instanceof AuthError && e.name === 'UserUnAuthenticatedException'){
        removeUser()
      } else {
        throw new Error(`${e}`);
      }
    }
    // if (!userId.value){
    //   return
    // }

    // even if login failed we should get a session
    // as a guess.
    try {
      authSession = await fetchAuthSession();
      // console.log('auth session request result: ', authSession)
      credentials.value = authSession.credentials;
      identityId.value = authSession.identityId;
      tokens.value = authSession.tokens;
      userSub.value = authSession.userSub;
    } catch(e) {
      console.log('Error caught in auth session request: ', e)
      throw new Error(e.string())
    }
  }

  function removeUser() {
    signInDetails.value = undefined;
    userId.value = '';
    username.value = '';

    credentials.value = undefined;
    identityId.value = undefined;
    tokens.value = undefined;
    userSub.value = undefined;
  }

  // async function listCognitoUsers(limit = "50", nextToken = null) {
  //   const apiName = "AdminQueries";
  //   const path = "/listUsers";
  //   const body = {
  //     queryStringParameters: {
  //       // limit: limit,
  //       // token: nextToken
  //     },
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `${(await getCurrentUser())
  //         .getAccessToken()
  //         .getJwtToken()}`,
  //     },
  //   };
  //   return [apiName, path, body];
  // }

  return {
    user,
    // cognito_user,
    signInDetails,
    userId,
    username,
    credentials,
    identityId,
    tokens,
    userSub,
    isAuthenticated,
    getEmail,
    setUser,
    removeUser
    // listCognitoUsers,
    // isInGroup
  };
});
