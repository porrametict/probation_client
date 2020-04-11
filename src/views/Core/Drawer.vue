<template>
    <v-navigation-drawer app permanent v-model="drawer" v-if="drawer" width="300">
        <v-list>
            <v-list-item :to="{ name: 'Home' }" exact>
                <v-list-item-action>
                    <v-icon>mdi-home</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>Home</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-divider class="pa-0 ma-0"></v-divider>

            <v-list-item :to="{ name: 'Assignment' }" exact>
                <v-list-item-action>
                    <v-icon>mdi-circle</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>Assignment</v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-list-item :to="{ name: 'ProbationCase' }" exact>
                <v-list-item-action>
                    <v-icon>mdi-circle</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>คดีควบคุม</v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-list-item :to="{ name: 'RehabilitationCase' }" exact>
                <v-list-item-action>
                    <v-icon>mdi-circle</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>คดีฟื้นฟู</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-divider class="pa-0 ma-0"></v-divider>

            <v-list-item :to="{ name: 'OfficerUser' }" exact>
                <v-list-item-action>
                    <v-icon>mdi-card-account-details</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>เจ้าหน้าที่</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item :to="{ name: 'VolunteerUser' }" exact>
                <v-list-item-action>
                    <v-icon>mdi-card-account-details</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>อสค.</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item :to="{ name: 'Offender' }" exact>
                <v-list-item-action>
                    <v-icon>mdi-card-account-details</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>ผู้ถูกคุม</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-divider class="pa-0 ma-0"></v-divider>


        </v-list>
        <template v-slot:append>
            <v-list>
                <v-divider class="pa-0 ma-0"></v-divider>
                <v-list-item :to="{ name: 'editUserProfile' }" exact>
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
                <v-btn
                        block
                        large
                        color="red"
                        class="white--text"
                        @click="$store.dispatch('account/logout') & $router.push({ name: 'Login' })"
                >
                    Logout
                </v-btn>

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
