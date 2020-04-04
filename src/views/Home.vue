<template>
    <div class="home">
        <v-container class="d-flex flex-column align-center">
            <h1>Hello Home</h1>

    <display-map></display-map>

        </v-container>
    </div>
</template>
<script>

    import DisplayMap from "../components/displayMap";
    export default {
        name: 'Home',
        components: {
            DisplayMap
        },
        created() {
        },
        methods: {
        },
    }
</script>
