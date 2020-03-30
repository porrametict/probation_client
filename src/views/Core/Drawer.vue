<template>
    <v-navigation-drawer app permanent
                         v-model="drawer"
                         width="300">
        <v-list>
            <v-list-item link>
                <v-list-item-icon>
                    <v-icon>mdi-steam</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title>Hello</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
        <template v-slot:append>
            <div class="pa-2">
                <v-btn block @click="$store.dispatch('account/logout') & $router.push({name : 'Login'})">Logout</v-btn>
            </div>
        </template>
    </v-navigation-drawer>
</template>

<script>
    import {
        mapState,
    } from 'vuex'
    export default {
        name: "CoreDrawer",
        mounted: {
            ...mapState(
                {
                    drawerState : state => state.drawer.drawer                }
            ),
            drawer: {
                set(val){
                    this.drawerState.commit("SET_DRAWER", val);
                },
                get () {
                    console.log("drawer",this.drawerState)
                    return (this.drawerState)
                },
            },
        },
        methods:{
            test(){
            console.log(drawer)
            }
        }
    }
</script>

<style scoped>

</style>