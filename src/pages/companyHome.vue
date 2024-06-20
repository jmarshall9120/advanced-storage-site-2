<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>Summary</v-card-title>
          <v-row>
            <v-col>
              <v-card>
                <v-card-title>Last Month</v-card-title>
                <v-card-text>{{
                  store.tenant_collections_total_by_month
                }}</v-card-text>
              </v-card>
            </v-col>
            <v-col>
              <v-card>
                <v-card-title>This Month</v-card-title>
                <v-card-text>{{
                  store.tenant_last_current_month_comparison
                }}</v-card-text>
              </v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-card>
                <v-card-title>Deliquencies</v-card-title>
                <v-card-text>{{ store.tenants_with_balance }}</v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">

import { useDataStore } from "~/stores/data";
import { type Ref, ref, computed, onMounted } from "vue";

const store = useDataStore()

onMounted(async () => {
  console.log('Company Home Mounted called')
  try {
    await store.loadCompanies()
    // console.log('Company:', company)
    await store.load_tenants_by_company()
  } catch(error) {
    console.log('Error in CompanyHome.onMounted: ', error)
  }
})
</script>
