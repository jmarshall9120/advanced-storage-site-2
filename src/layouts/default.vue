<script setup lang="ts">
import OutsideAppBar from "~/components/OutsideAppBar.vue";
</script>

<template>
  <v-app>
    <OutsideAppBar></OutsideAppBar>
    <v-main>
      <slot />
    </v-main>
  </v-app>
</template>
