<template>
  <v-container>
    <v-row>
      <v-col>
        <div>
          <v-menu>
            <template #activator="{props}">
              <v-btn flat title append-icon="mdi-chevron-down" v-bind="props">
                {{ dataStore?.company?.name }}
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(item, index) in dataStore.companies"
                :key="index"
                >{{ item.name }}</v-list-item
              >
            </v-list>
          </v-menu>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>Locations Data</v-card-title>
          <v-card-text>{{ unitsStore.locations_view }}</v-card-text>
        </v-card>
        <!-- <v-data-table-server> </v-data-table-server> -->
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <!-- table with units -->
        <v-card>
          <v-card-title>Units</v-card-title>
          <v-card-text>{{
            unitsStore.units_flattened_by_location_view
          }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup lang="ts">
import { ref, computed, watch, onMounted } from "vue";
import { useDataStore } from "~/stores/data";
import { useUnitsStore } from "~/stores/units";

const dataStore = useDataStore();
const unitsStore = useUnitsStore();

onMounted(async () => {
  await dataStore.loadCompanies();
  await unitsStore.load_locations();
});
</script>
<style></style>
