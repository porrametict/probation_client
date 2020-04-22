<template>
    <v-navigation-drawer app permanent v-model="drawer" v-if="drawer" width="300">
        <v-list dense>
            <v-list-item
                    v-for="(link,index) in links"
                    v-if="!link.subLinks"
                    :key="index"
                    router
                    :class="index"
                    :to="{ name: link.routName }"
                    class="v-list-item"
            >
                <v-list-item-action>
                    <v-icon>{{ link.icon }}</v-icon>
                </v-list-item-action>
                <v-list-item-title v-text="link.text"/>
            </v-list-item>

            <v-list-group v-else :key="link.text" no-action>
                <template v-slot:activator>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title>{{ link.text }}</v-list-item-title>
                        </v-list-item-content>

                    </v-list-item>
                </template>

                <v-list-item
                        v-for="sublink in link.subLinks"
                        :key="sublink.text"
                >
                    <v-list-item-title v-text="sublink.text"/>
                </v-list-item>
            </v-list-group>
        </v-list>
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
                        routName: "Home",
                        icon: "mdi-home",
                        text: "Home",
                    },
                    {
                      routName: "Assignment",
                      icon: "mdi-home",
                      text: "Assignment"
                    },
                    {
                      routName: "ProbationCase",
                      icon: "mdi-circle",
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
                get: function () {
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

<!--<v-list nav-->
<!--        dense>-->
<!--            <v-list-item-group active-class="blue&#45;&#45;text text&#45;&#45;blue-accent-4">-->
<!--            <v-list-item :to="{ name: 'Home' }" exact>-->
<!--                <v-list-item-action>-->
<!--                    <v-icon color="green darken-2">mdi-home</v-icon>-->
<!--                </v-list-item-action>-->
<!--                <v-list-item-content>-->
<!--                    <v-list-item-title>Home</v-list-item-title>-->
<!--                </v-list-item-content>-->
<!--            </v-list-item>-->
<!--            <v-divider class="pa-0 ma-0"></v-divider>-->

<!--            <v-list-item :to="{ name: 'Assignment' }" exact>-->
<!--                <v-list-item-action>-->
<!--                    <v-icon>mdi-circle</v-icon>-->
<!--                </v-list-item-action>-->
<!--                <v-list-item-content>-->
<!--                    <v-list-item-title>Assignment</v-list-item-title>-->
<!--                </v-list-item-content>-->
<!--            </v-list-item>-->

<!--            <v-list-item :to="{ name: 'ProbationCase' }" exact>-->
<!--                <v-list-item-action>-->
<!--                    <v-icon>mdi-circle</v-icon>-->
<!--                </v-list-item-action>-->
<!--                <v-list-item-content>-->
<!--                    <v-list-item-title>คดีควบคุม</v-list-item-title>-->
<!--                </v-list-item-content>-->
<!--            </v-list-item>-->

<!--            <v-list-item :to="{ name: 'RehabilitationCase' }" exact>-->
<!--                <v-list-item-action>-->
<!--                    <v-icon>mdi-circle</v-icon>-->
<!--                </v-list-item-action>-->
<!--                <v-list-item-content>-->
<!--                    <v-list-item-title>คดีฟื้นฟู</v-list-item-title>-->
<!--                </v-list-item-content>-->
<!--            </v-list-item>-->
<!--            <v-divider class="pa-0 ma-0"></v-divider>-->

<!--            <v-list-item :to="{ name: 'OfficerUser' }" exact>-->
<!--                <v-list-item-action>-->
<!--                    <v-icon>mdi-card-account-details</v-icon>-->
<!--                </v-list-item-action>-->
<!--                <v-list-item-content>-->
<!--                    <v-list-item-title>เจ้าหน้าที่</v-list-item-title>-->
<!--                </v-list-item-content>-->
<!--            </v-list-item>-->

<!--            <v-list-item :to="{ name: 'VolunteerUser' }" exact>-->
<!--                <v-list-item-action>-->
<!--                    <v-icon>mdi-card-account-details</v-icon>-->
<!--                </v-list-item-action>-->
<!--                <v-list-item-content>-->
<!--                    <v-list-item-title>อสค.</v-list-item-title>-->
<!--                </v-list-item-content>-->
<!--            </v-list-item>-->

<!--            <v-list-item :to="{ name: 'Offender' }" exact>-->
<!--                <v-list-item-action>-->
<!--                    <v-icon>mdi-card-account-details</v-icon>-->
<!--                </v-list-item-action>-->
<!--                <v-list-item-content>-->
<!--                    <v-list-item-title>ผู้ถูกคุม</v-list-item-title>-->
<!--                </v-list-item-content>-->
<!--            </v-list-item>-->

<!--            <v-divider class="pa-0 ma-0"></v-divider>-->
<!--            <v-list-item :to="{ name: 'SystemDesign' }" exact>-->
<!--                <v-list-item-action>-->
<!--                    <v-icon>mdi-cog</v-icon>-->
<!--                </v-list-item-action>-->
<!--                <v-list-item-content>-->
<!--                    <v-list-item-title>System Design</v-list-item-title>-->
<!--                </v-list-item-content>-->
<!--            </v-list-item>-->
<!--            <v-divider class="pa-0 ma-0"></v-divider>-->

<!--            </v-list-item-group>-->
<!--        </v-list>-->

