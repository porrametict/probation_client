<template>
    <v-navigation-drawer app permanent absolute
                         bottom
                         v-model="drawer" v-if="drawer" width="300">
        <v-list nav
                dense>
            <v-list-item
                    active-class="blue--text text--blue-accent-4"
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
            <v-list-group v-else :key="link.text" no-action active-class="blue--text text--blue-accent-4">
                <template v-slot:activator>
                    <v-list-item>
                        <v-list-item-action>
                            <v-icon>{{ link.icon }}</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title>{{ link.text }}</v-list-item-title>
                        </v-list-item-content>

                    </v-list-item>
                </template>

                <v-list-item
                        v-for="sublink in link.subLinks"
                        :key="sublink.text"
                        :to="{ name: sublink.routName }"
                >
                    <v-list-item-action>
                            <v-icon>{{ sublink.icon }}</v-icon>
                        </v-list-item-action>
                    <v-list-item-content>
                            <v-list-item-title>{{ sublink.text }}</v-list-item-title>
                        </v-list-item-content>
                </v-list-item>
            </v-list-group>
        </v-list>
        <template v-slot:append>
            <v-list dense nav>
                <v-divider class="pa-0 ma-0"></v-divider>
                <v-list-item :to="{ name: 'editUserProfile' }" exact active-class="blue--text text--blue-accent-4">
                    <v-list-item-action>
                        <v-icon>mdi-account</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>ข้อมูลผู้ใช้</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-divider class="pa-0 ma-0"></v-divider>
            </v-list>
            <div class="pa-2">
                <v-btn block @click="$store.dispatch('account/logout') & $router.push({ name: 'Login' })">Logout</v-btn>
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
                        icon: "mdi-circle",
                        text: "Assignment"
                    },
                    {
                        routName: "ProbationCase",
                        icon: "mdi-circle",
                        text: "คดีควบคุม"
                    },
                    {
                        routName: "RehabilitationCase",
                        icon: "mdi-circle",
                        text: "คดีฟื้นฟู"
                    },
                    {
                        routName: "OfficerUser",
                        icon: "mdi-card-account-details",
                        text: "เจ้าหน้าที่"
                    },
                    {
                        routName: "VolunteerUser",
                        icon: "mdi-card-account-details",
                        text: "อสค."
                    },
                    {
                        routName: "Offender",
                        icon: "mdi-card-account-details",
                        text: "ผู้ถูกคุม"
                    },
                    {
                        // routName: "/profile",
                        icon: "mdi-cog",
                        text: "Profile",
                        subLinks: [
                            {
                                text: "Text Input",
                                icon: "mdi-pencil",
                                routName: "TextInput"
                            },
                            {
                                text: "Button",
                                icon: "mdi-alpha-b",
                                routName: "Button"
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