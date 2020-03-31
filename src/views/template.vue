<template>
    <v-app >
        <core-app-bar/>
        <core-drawer/>
        <core-view/>
    </v-app>
</template>

<script>
    export default {
        name: "template",
        components: {
            CoreAppBar: () => import('./Core/AppBar'),
            CoreDrawer: () => import('./Core/Drawer'),
            CoreView: () => import('./Core/View'),
        }
    }
</script>

<style scoped>

</style>