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
  console.log("App Mounted called");
  await auth_store.setUser();
  await store.getUser(auth_store.userId);
});
</script>
