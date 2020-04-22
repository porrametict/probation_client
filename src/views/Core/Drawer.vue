<template>
  <v-navigation-drawer app permanent v-model="drawer" v-if="drawer" width="300">
    <v-list dense>
          <v-list-group v-for="item in links" :value="item.active" :to="{ path: item.routName }" v-bind:key="item.text">
            <v-list-tile slot="item" @click="">
              <v-list-tile-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{ item.text }}</v-list-tile-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-icon>keyboard_arrow_down</v-icon>
              </v-list-tile-action>
            </v-list-tile>
            <v-list-tile v-for="subItem in item.subLinks" v-bind:key="subItem.text" :to="{ path: item.routName }">
              <v-list-tile-content>
                <v-list-tile-title>{{ subItem.text }}</v-list-tile-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-icon>{{ subItem.icon }}</v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group>
      </v-list>
<!--    <v-list>-->
<!--      <v-list-item-->
<!--        v-for="link in links"-->
<!--        v-if="!link.subLinks"-->
<!--        :key="index"-->
<!--        router-->
<!--        :to="{ path: link.routName }"-->
<!--        class="v-list-item"-->
<!--      >-->
<!--        <v-list-item-action>-->
<!--          <v-icon>{{ link.icon }}</v-icon>-->
<!--        </v-list-item-action>-->

<!--        <v-list-item-title v-text="link.text" />-->
<!--      </v-list-item>-->

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
<!--    </v-list>-->
    <template v-slot:append>
      <div class="pa-2">
        <v-btn
          block
          @click="
            $store.dispatch('account/logout') & $router.push({ name: 'Login' })
          "
          >Logout
        </v-btn>
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
          routName: "/home",
          icon: "mdi-home",
          text: "Home"
        },
        {
          routName: "Assignment",
          icon: "mdi-home",
          text: "Assignment"
        },
        {
          routName: "ProbationCase",
          icon: "mdi-home",
          text: "คดีควบคุม"
        },
        {
          routName: "RehabilitationCase",
          icon: "mdi-home",
          text: "คดีฟื้นฟู"
        },
        {
          routName: "/profile",
          icon: "mdi-profile",
          text: "Profile",
          subLinks: [
            {
              text: "Players list",
              routName: "/players"
            },
            {
              text: "Import WTA Players",
              routName: "/players/import"
            }
          ]
        }
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
