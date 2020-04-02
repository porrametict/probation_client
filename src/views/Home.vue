<template>
    <div class="home">
        <v-container class="d-flex flex-column align-center">
            <h1>Hello Home</h1>
        </v-container>
        <test-survey></test-survey>
    </div>
</template>
<script>
    import testSurvey from "../components/testSurvey";
    export default {
        name: 'Home',
        components: {
            testSurvey
        },
        methods: {
            goto_(page_name) {
                if (this.$router.currentRoute.name !== page_name) {
                    this.$router.push({name: page_name})
                }
            }
        },
    }
</script>
