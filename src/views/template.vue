<template>
    <v-app id="inspire">
        <v-toolbar app
                src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
        >
            <v-app-bar-nav-icon></v-app-bar-nav-icon>

            <v-toolbar-title>Vuetify</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon>
                <v-icon>mdi-export</v-icon>
            </v-btn>
        </v-toolbar>
        <v-navigation-drawer app  permanent>
            <v-list>
                <v-list-item link>
            <v-list>
                <v-list-item
                        link
                >
                    <v-list-item-icon>
                        <v-icon>mdi-steam</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>Hello</v-list-item-title>
                    </v-list-item-content>
                </v-list-item
>
            </v-list>

            <template v-slot:append>
                <div class="pa-2">
                    <v-btn block @click="$store.dispatch('account/logout') & $router.push({name : 'Login'})">Logout</v-btn>
                </div>
            </template>
        </v-navigation-drawer>
        <v-content>
            <router-view></router-view>
        </v-content>
    </v-app>
</template>

<script>
    export default {
        name: "template",
        props: {
            source: String
        },
        data: () => ({
            drawer: null,
        }),
    }
</script>

<style scoped>

</style>