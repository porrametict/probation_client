<template>
    <div>
        <survey :survey="survey"></survey>
    </div>
</template>
<script>
    import * as SurveyVue from "survey-vue";
    import 'bootstrap/dist/css/bootstrap.css';
    import during_probation_form from "@/assets/during_probation_form"
    import {mapState} from "vuex";

    const Survey = SurveyVue.Survey;
    SurveyVue.StylesManager.applyTheme('modern')


    export default {
        name: "DuringProbationForm",
        components: {
            Survey
        },
        computed: {
            ...mapState({
                provinces: state => state.districtSelect.provinces
            })
        },
        async mounted() {
            if (!this.provinces) {
                await this.$store.dispatch('districtSelect/getProvinces');
            }
            await this.loadData()
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
            createModel() {
                this.setSurveyChoices('informant_province', this.provinces)

                this.setSurveyChoices('s_province', this.provinces)
                let qq = this.survey.onValueChanged.add(e => {
                    if (e.data.informant_province) {
                        let informant_province = e.data.informant_province
                        let p_obj = this.findObj(this.provinces, 'value', informant_province)
                        this.setSurveyChoices('informant_amphure', p_obj.amphures_set)
                    }
                    if (e.data.informant_amphure) {
                        let informant_amphure = e.data.informant_amphure
                        let p_obj = this.findObj(this.provinces, 'value', e.data.informant_province)
                        let a_obj = this.findObj(p_obj.amphures_set, 'value', informant_amphure)
                        this.setSurveyChoices('informant_district', a_obj.districts_set)
                    }

                    if (e.data.s_province) {
                        let s_province = e.data.s_province
                        let p_obj = this.findObj(this.provinces, 'value', s_province)
                        this.setSurveyChoices('s_amphure', p_obj.amphures_set)
                    }
                    if (e.data.s_amphure) {
                        let s_amphure = e.data.s_amphure
                        let p_obj = this.findObj(this.provinces, 'value', e.data.s_province)
                        let a_obj = this.findObj(p_obj.amphures_set, 'value', s_amphure)
                        this.setSurveyChoices('s_district', a_obj.districts_set)
                    }
                })
            },
            setSurveyChoices(name, choices) {
                let q = this.survey.getQuestionByName(name)
                q.choices = choices
            },
            findObj(data, key, value) {
                let obj = {}
                if (data) {
                    for (let i = 0; i < data.length; i++) {
                        if (data[i][key] == value) {
                            obj = data[i]
                            break;
                        }
                    }
                }
                return obj
            },

            async loadData() {
                this.preparing_province()
                this.createModel()
                this.loadAssignmentData()
            },
            preparing_province() {
                this.provinces.forEach(p => {
                    this.rename(p, 'id', 'value')
                    this.rename(p, 'name_th', 'text')
                    p.amphures_set.forEach(a => {
                        this.rename(a, 'id', 'value')
                        this.rename(a, 'name_th', 'text')
                        a.districts_set.forEach(d => {
                            this.rename(d, 'id', 'value')
                            this.rename(d, 'name_th', 'text')
                        })
                    })
                })
            },
            rename: function (o, old_key, new_key) {
                if (old_key !== new_key) {
                    o[new_key] = o[old_key]
                    delete o[old_key];
                }
                return o
            },
            async loadAssignmentData() {
                let id = this.$route.params.id
                this.argument = await this.$store.dispatch('assignment/getAssignmentById', id)
                this.create_model_data()
            },
            create_model_data() {
                let date = moment.format('L')
                let cur_date = date.split('/')
                this.survey.data = {
                    time: 1,
                    data_collection_date: `${cur_date[2]}-${cur_date[1]}-${cur_date[0]}`,
                    registration_number: ""
                }
            },
            async survey_complete(e) {
                let form = {
                    assignment_id: 1,
                    json_form: e
                };
                let data = await this.$store.dispatch('during_probation_form/postForm', form)
                if (data) {
                    await this.$router.push({name: 'Volunteer'})
                }
            }
        }
    };
</script>
<style scoped>
    @import url("https://surveyjs.azureedge.net/1.5.18/modern.css");
</style>

