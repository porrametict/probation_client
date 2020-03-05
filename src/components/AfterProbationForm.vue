<template>
    <div>
        <survey :survey="survey"></survey>
    </div>
</template>

<script>

    import * as SurveyVue from "survey-vue";
    import 'bootstrap/dist/css/bootstrap.css';
    import after_probation_form from "@/assets/after_probation_form"

    const Survey = SurveyVue.Survey;
    Survey.cssType = "bootstrap";


    export default {
        name: "AfterProbationForm",
        components: {
            Survey
        },
        mounted() {
        },
        data() {
            const model = new SurveyVue.Model(after_probation_form);
            return {
                survey: model
            };
        }
    };
</script>


<style scoped>

</style>