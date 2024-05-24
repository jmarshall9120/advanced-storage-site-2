import { type Ref, ref, computed } from "vue";
import { defineStore } from "pinia";
import { getCurrentUser, fetchAuthSession } from "aws-amplify/auth";
import {type AuthUser, type AuthSession, AuthError} from 'aws-amplify/auth'
import {generateClient} from 'aws-amplify/data'
import type {Schema} from '~/../amplify/data/resource'

export const useDataStore = defineStore("data", () => {

  const client = generateClient<Schema>()

  const users = ref<Array<Schema['user']['type']>>([])

  typeof(client.models.user)
  // users.value = [{}]

  async function getUsers() {
    const {data, errors } = await client.models.user.list();
    if (errors){
      throw new Error(errors.toString())
    }
    console.log('user_list: ', data);
    users.value = data;
  }

  return {
    users,
    getUsers,
  };
});