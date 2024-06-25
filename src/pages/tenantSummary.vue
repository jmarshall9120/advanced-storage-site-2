<template>
  <v-container>
    <v-row>
      <v-col>
        <!-- name -->
        <v-card>
          <v-card-title>{{ dataStore.tenant_name }}</v-card-title>
          <v-card-text>{{ dataStore.tenant_profile_view }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>Leases</v-card-title>
          <v-card-text>{{ dataStore.tenant_leases_view }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>Transactions</v-card-title>
          <v-card-text>{{ dataStore.tenant_transactions_view }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup lang="ts">
import { ref, computed, watch, onMounted } from "vue";
import { useDataStore } from "~/stores/data";

const dataStore = useDataStore();



onMounted(async () => {
  await dataStore.loadCompanies();
  await dataStore.load_tenants_by_company();
});
</script>
