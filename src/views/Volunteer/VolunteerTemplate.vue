<template>
    <div>

        <v-app-bar
                color="p_primary"
                dark

        >
            <v-toolbar-title>Phayao Probation</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon @click="drawer  = !drawer">
                <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
        </v-app-bar>

        <v-navigation-drawer
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
                    <v-list-item>
                        <v-list-item-title>Foo</v-list-item-title>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-title>Bar</v-list-item-title>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-title>Fizz</v-list-item-title>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-title>Buzz</v-list-item-title>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
            <template v-slot:append>
                <div>
                    <v-btn block @click="$store.dispatch('account/logout') & $router.push({name : 'Login'})">Logout
                    </v-btn>
                </div>
            </template>
        </v-navigation-drawer>

        <v-container>
            <router-view/>
        </v-container>
    </div>

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
            }
        }
    }
</script>

<style scoped>

</style>