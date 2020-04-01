<template>
    <div class="home">
        <v-container class="d-flex flex-column align-center">
            <h1>Hello Home</h1>
        </v-container>
    </div>
</template>
<script>
    export default {
        name: 'Home',
        components: {},
        methods: {
            goto_(page_name) {
                if (this.$router.currentRoute.name !== page_name) {
                    this.$router.push({name: page_name})
                }
            }
        },
    }
</script>
