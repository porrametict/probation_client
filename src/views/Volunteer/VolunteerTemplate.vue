<template>
    <v-app>
        <v-app-bar fixed dense scroll-target="#scroll" color="p_primary" dark>
            <v-toolbar-title class="d-flex align-center">
                <v-icon>
                    mdi-owl
                </v-icon>
                <span class="caption mx-2 ">
                    PROBATION
                </span>

            </v-toolbar-title>
            <v-spacer/>
            <v-toolbar-items>
                <v-btn icon @click="drawer  = !drawer">
                    <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
            </v-toolbar-items>
        </v-app-bar>
        <v-sheet id="scroll" class="overflow-y-auto overflow-x-hidden" style="padding-top: 60px">
            <v-container>
                <router-view/>
            </v-container>
        </v-sheet>
        <v-navigation-drawer
                v-if="drawer"
                v-model="drawer"
                absolute
                right
                temporary
        >
            <v-list
                    nav
            >
                <v-list-item-group
                        v-model="menu_group"
                        active-class="deep-purple--text text--accent-4"
                >
                    <v-list-item @click="goto_('Volunteer')">
                        <v-list-item-title>หน้าหลัก</v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="goto_('editUserProfile')">
                        <v-list-item-title>เเก้ไขข้อมูลส่วนตัว</v-list-item-title>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
            <template v-slot:append>
                <div>
                    <v-btn block color='p_primary' tile class="white--text"
                           @click="$store.dispatch('account/logout') & goto_('Login')">Logout
                    </v-btn>
                </div>
            </template>
        </v-navigation-drawer>

    </v-app>
</template>

<script>
    export default {
        name: "VolunteerTemplate",
        data: () => ({
            drawer: false,
            menu_group: null,
        }),
        watch: {
            menu_group() {
                this.drawer = false
            },

        },
        methods: {
            goto_(page) {
                if (this.$router.currentRoute.name !== page) {
                    this.$router.push({name: page})
                }
            }
        }
    }
</script>

<style scoped>

</style>