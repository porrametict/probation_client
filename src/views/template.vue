<template>
    <v-app>
        <core-app-bar/>
        <core-drawer/>
        <core-view/>
    </v-app>
</template>

<script>
    import CoreView from "./Core/View";
    export default {
        name: "template",
        components: {
            CoreAppBar: () => import('./Core/AppBar'),
            CoreDrawer: () => import('./Core/Drawer'),
            // DashboardCoreSettings: () => import('./components/core/Settings'),
            CoreView: () => import('./Core/View'),
        }
    }
</script>

<style scoped>

</style>