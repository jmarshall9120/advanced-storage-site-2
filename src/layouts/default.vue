<script setup lang="ts">
import OutsideAppBar from "~/components/OutsideAppBar.vue";
</script>

<template>
  <v-app>
    <OutsideAppBar></OutsideAppBar>
    <slot />
  </v-app>
</template>
