<template>
  <div>
    <!-- <NuxtWelcome /> -->
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useAuthStore } from "~/stores/auth";
import { useDataStore } from "~/stores/data";

const auth_store = useAuthStore();
const store = useDataStore();
onMounted(async () => {
  await auth_store.setUser();
  await store.getUsers();
});
</script>
