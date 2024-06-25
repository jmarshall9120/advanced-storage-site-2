<template>
  <v-container class="pa-0">
    <v-row>
      <v-col>
        {{ title }}
      </v-col>
      <v-spacer></v-spacer>
      <v-col align="right">
        <v-btn color="info" flat class="mr-2" @click="$emit('edit')">
          <v-icon size="x-large">mdi-pencil-box-outline</v-icon>
          <v-tooltip activator="parent" location="top">Edit</v-tooltip>
        </v-btn>
        <v-btn color="success" flat @click="$emit('new')">
          <v-icon size="x-large">mdi-plus-box-outline</v-icon>
          <v-tooltip activator="parent" location="top">New</v-tooltip>
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>{{ message }}</v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from "vue";

// const title = ref<string>("");

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: false
  }
});
</script>
