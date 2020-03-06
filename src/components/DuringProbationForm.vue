<template>
    <div>
        <survey :survey="survey"></survey>
    </div>
</template>
<script>

    import * as SurveyVue from "survey-vue";
    import 'bootstrap/dist/css/bootstrap.css';
    import during_probation_form from "@/assets/during_probation_form"

    const Survey = SurveyVue.Survey;
    Survey.cssType = "bootstrap";


    export default {
        name: "DuringProbationForm",
        components: {
            Survey
        },
        mounted() {
            this.createSurvey()
        },
        data() {
            let self = this
            const model = new SurveyVue.Model(during_probation_form);
            model.onComplete.add(function (sender, options) {
                self.survey_complete(sender.data)
            })

            return {
                argument_id: null,
                survey: model
            };
        },
        methods: {
            createSurvey() {
            },
            async survey_complete(e) {
                let form = {
                    assignment_id: 1,
                    json_form: e
                }
                let data = await this.$store.dispatch('during_probation_form/postForm', form)
                if (data) {
                    alert('success')
                }

            }

        }
    };
</script>

