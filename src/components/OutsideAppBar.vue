<template>
  <div>
    <v-app-bar color="primary" density="compact">
      <template #prepend>
        <v-app-bar-nav-icon
          v-show="auth.isAuthenticated"
          @click.stop="drawer = !drawer"
        ></v-app-bar-nav-icon>
      </template>
      <v-app-bar-title>Advanced Storage</v-app-bar-title>
      <!-- <v-spacer></v-spacer> -->
      <v-btn flat class="button-background-color">5 Units Available </v-btn>
      <v-spacer></v-spacer>
      <!-- <template #append> -->
      <!-- <v-row>
          <v-col> -->
      <div>(208) 784-1178</div>
      <!-- </v-col>
          <v-col> -->
      <v-menu>
        <template #activator="{ props }">
          <!-- <v-btn v-bind="props">Sign Up</v-btn> -->
          <!-- <v-btn v-bind="props" v-show="!auth.isAuthenticated">Sign Up</v-btn> -->
          <v-btn v-bind="props">
            <div v-show="!auth.isAuthenticated">Sign Up</div>
            <v-icon v-show="auth.isAuthenticated">mdi-account</v-icon>
          </v-btn>
        </template>
        <v-card>
          <v-container>
            <v-row v-show="!auth.isAuthenticated">
              <v-col>
                <v-btn :nuxt="true" to="/auth">Sign Up Now!</v-btn>
              </v-col>
            </v-row>
            <v-row v-show="auth.isAuthenticated" class="align-center">
              <v-col>
                <v-avatar>J</v-avatar>
              </v-col>
              <v-col>
                <v-row>
                  <v-col>Jamie Marshall</v-col>
                </v-row>
                <v-row>
                  <v-col>{{ auth.getEmail }}</v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-container>
          <v-card-actions v-show="auth.isAuthenticated">
            <v-btn color="error" @click="aws_signOut">Sign Out</v-btn>
            <v-spacer></v-spacer>
            <v-btn color="warning" :nuxt="true" to="/profile"
              >Edit Profile</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-menu>
      <!-- </v-col>
        </v-row>
      </template> -->

      <!-- <v-menu>
        <template #activator="{ props }">
          <v-btn v-bind="props" icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
      </v-menu> -->
    </v-app-bar>
    <v-navigation-drawer v-model="drawer">
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :title="item.title"
          :to="item.value"
        >
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useAuthStore } from "~/stores/auth";
import { signOut } from "aws-amplify/auth";

const auth = useAuthStore(),
  _items = [
    { title: "Home", value: "/", groups: [] },
    { title: "Auth", value: "/auth", groups: [] },
    // { title: "Leases", value: "/employee/leases", groups: ["employee"] },
    // { title: "Tenents", value: "/employee/tenents", groups: ["employee"] },
    // { title: "Units", value: "/employee/units", groups: ["employee"] },
    { title: "Profile", value: "/profile", groups: [""] }
    // { title: "Business Info", value: "/business", groups: [""] },
    // { title: "User Management", value: "/user-management", groups: ["admin"] },
    // { title: "Sign Up Tenent", value: "/sign-up-tenent", groups: [""] },
  ],
  drawer = ref(false);

const items = computed(() => {
  return _items;
  // return _items.filter((_) => {
  //   if (_.groups == undefined || _.groups.length === 0) {
  //     return false;
  //   }
  //   return _.groups.some((v) => auth.isInGroup(v));
  // });
});

async function aws_signOut() {
  await signOut();
  await auth.removeUser();
}
</script>

<style lang="scss" scoped>
.button-background-color {
  background-color: purple;
}
</style>
