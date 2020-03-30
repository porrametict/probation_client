<template>
    <v-content>
        <router-view></router-view>
        <core-footer/>
    </v-content>
</template>

<script>
    export default {
        name: "CoreView",
        components: {
            CoreFooter: () => import('./Footer'),
        }
    }
</script>

<style scoped>

</style>