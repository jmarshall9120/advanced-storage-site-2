<template>
  <UnitManager></UnitManager>
</template>
<script setup lang="ts">
import UnitManager from "~/components/UnitManager.vue";
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
