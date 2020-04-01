<template>
  <v-navigation-drawer app permanent v-model="drawer" v-if="drawer" width="300">
    <v-list>
      <v-list-item
        v-for="link in links"
        v-if="!link.subLinks"
        :key="index"
        router
        :to="{name: link.text}"
        class="v-list-item"
      >
        <v-list-item-action>
          <v-icon>{{ link.icon }}</v-icon>
        </v-list-item-action>

        <v-list-item-title v-text="link.text" />
      </v-list-item>

<!--      <v-list-group v-else :key="link.text" no-action>-->
<!--        <template v-slot:activator>-->
<!--          <v-list-item>-->
<!--            <v-list-item-content>-->
<!--              <v-list-item-title>{{ link.text }}</v-list-item-title>-->
<!--            </v-list-item-content>-->
<!--          </v-list-item>-->
<!--        </template>-->

<!--        <v-list-item-->
<!--          v-for="sublink in link.subLinks"-->
<!--          :key="sublink.text"-->

<!--        >-->
<!--          <v-list-item-title v-text="sublink.text" />-->
<!--        </v-list-item>-->
<!--      </v-list-group>-->
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
export default {
  name: "CoreDrawer",
  data() {
    return {
      links: [
        {
          path: "/home",
          icon: "mdi-home",
          text: "Home"
        },
        {
          path: "/profile",
          icon: "mdi-profile",
          text: "Profile"
          // subLinks: [
          //   {
          //     text: "Players list",
          //     to: "/players"
          //   },
          //   {
          //     text: "Import WTA Players",
          //     to: "/players/import"
          //   }
          // ]
        }
        // {
        //   icon: "mdi-profile",
        //   text: "Test",
        //   // to: "/profile"
        //   subLinks: [
        //     {
        //       text: "Players list",
        //       path: "/players"
        //     },
        //     {
        //       text: "Import WTA Players",
        //       path: "/players/import"
        //     }
        //   ]
        // }
      ]
    };
  },
  computed: {
    drawer: {
      get: function() {
        return this.$store.state.drawer.drawer;
      },
      set(val) {
        this.$store.commit("SET_DRAWER", val);
      }
    }
  }
};
</script>

<style scoped></style>
