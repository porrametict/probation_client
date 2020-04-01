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

            <v-list-item :to="{ name: 'Assignment' }" exact>
                <v-list-item-action>
                    <v-icon>mdi-home</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>Assignment</v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-list-item :to="{ name: 'ProbationCase' }" exact>
                <v-list-item-action>
                    <v-icon>mdi-home</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>คดีควบคุม</v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-list-item :to="{ name: 'RehabilitationCase' }" exact>
                <v-list-item-action>
                    <v-icon>mdi-home</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>คดีฟื้นฟู</v-list-item-title>
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
                >Logout
                </v-btn
                >
            </div>
        </template>
    </v-navigation-drawer>
</template>

<script>
    export default {
        name: "CoreDrawer",
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
