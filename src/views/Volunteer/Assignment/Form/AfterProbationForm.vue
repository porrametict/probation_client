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
            this.loadData()
        },
        data() {
            let self = this
            const model = new SurveyVue.Model(after_probation_form);
            model.onComplete.add(function (sender, options) {
                self.survey_complete(sender.data)
            })

            return {
                argument_id: null,
                survey: model
            };
        },
        methods : {
            async loadData() {
                let id = this.$route.params.id
                this.argument = await this.$store.dispatch('assignment/getAssignmentById', id)
                console.log(this.argument)
                this.create_model_data()
            },
            create_model_data() {
                let date = moment.format('L')
                let cur_date = date.split('/')
                this.survey.data = {
                    time: 1,
                    data_collection_date: `${cur_date[2]}-${cur_date[1]}-${cur_date[0]}`,
                    registration_number: this.argument.case.case_registration_number
                }
            },
            async survey_complete(e) {
                let form = {
                    assignment_id: 1,
                    json_form: e
                }
                let data = await this.$store.dispatch('after_probation_form/postForm', form)
                if (data) {
                    alert('success')
                }

            }
        }
    };
</script>


<style scoped>

</style>