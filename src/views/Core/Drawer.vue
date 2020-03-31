<template>
  <v-navigation-drawer app permanent v-model="drawer" v-if="drawer" width="300">
    <v-list>
      <v-list-item link>
        <v-list-item-icon>
          <v-icon>mdi-steam</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Hello</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item :to="{ name: 'Home' }" exact>
        <v-list-item-action>
          <v-icon>mdi-home</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <template v-slot:append>
      <div class="pa-2">
        <v-btn
          block
          @click="
            $store.dispatch('account/logout') & $router.push({ name: 'Login' })
          "
          >Logout</v-btn
        >
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters} from "vuex";
export default {
  name: "CoreDrawer",
  computed: {
    ...mapGetters({ drawer: "getDrawerState" })
  },

};
</script>

<style scoped></style>
