<template>
    <v-app style="background-color: #f5f5f5 ">
        <core-app-bar/>
        <core-drawer/>
        <core-view/>
    </v-app>
</template>

<script>
    export default {
        name: "main-template",
        components: {
            CoreAppBar: () => import('./Core/AppBar'),
            CoreDrawer: () => import('./Core/Drawer'),
            CoreView: () => import('./Core/View'),
        }
    }
</script>

<style scoped>

</style>