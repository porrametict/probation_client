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
    SurveyVue.StylesManager.applyTheme('modern')


    export default {
        name: "DuringProbationForm",
        components: {
            Survey
        },
        mounted() {
            this.loadData()
        },
        data() {
            let self = this
            const model = new SurveyVue.Model(during_probation_form);
            model.onComplete.add(function (sender, options) {
                self.survey_complete(sender.data)
            })

            return {
                argument: null,
                survey: model,
            };
        },
        methods: {
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
                    registration_number:  ""
                }
            },
            async survey_complete(e) {
                let form = {
                    assignment_id: 1,
                    json_form: e
                };
                let data = await this.$store.dispatch('during_probation_form/postForm', form)
                if (data) {
                    this.$router.push({name :'Volunteer'})
                }
            }
        }
    };
</script>
<style scoped>
    @import url("https://surveyjs.azureedge.net/1.5.18/modern.css");
</style>

