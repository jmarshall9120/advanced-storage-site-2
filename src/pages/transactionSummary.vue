<template>
  <v-container>
    <v-row>
      <v-col>
        <div>{{ dataStore.tenant_name }}</div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>Transaction</v-card-title>
          <v-card-text>{{ transaction }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>Attributions</v-card-title>
          <v-card-text>{{ attributions }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup lang="ts">
import { ref, computed, watch, onMounted } from "vue";
import type {Transaction, TransactionAttribution, Tenant, Lease} from "~/types/index";
import {useDataStore} from '~/stores/data'

const dataStore = useDataStore()

const _transaction_idx = ref<number>(0)

const transactions = computed(() => {
  if (!dataStore.tenant){
    return 'Loading...'
  }
  return dataStore.tenant.transactions
})

const transaction = computed(()=>{
  if (!dataStore.tenant){
    return 'Loading...'
  }
  return transactions.value[_transaction_idx.value]
})

const attributions = computed(()=> {
  if (!dataStore.tenant){
    return 'Loading...'
  }
  return transaction.value.transaction_attributions
})

onMounted(async ()=>{
  await dataStore.loadCompanies();
  await dataStore.load_tenants_by_company();

  // Set tenant to someone with lots of
  // data for testing:
  const fn = (val: any) => {
    const _tenant_to_set = dataStore.getTenantBy_id_by_last_name("Carter");
    console.log('ID to set!!!: ', _tenant_to_set)
    dataStore.setTenantBy_id(_tenant_to_set[0].id);
  };
  if (!dataStore.tenant){
    watch_for_dependancy_loaded(() => dataStore.tenant, fn);
  } else {
    fn('')
  }
})
</script>
<style></style>
