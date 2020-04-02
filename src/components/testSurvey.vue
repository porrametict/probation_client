<template>
    <div>
        <survey :survey="survey">
        </survey>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import * as SurveyVue from "survey-vue";
    import 'bootstrap/dist/css/bootstrap.css';

    const Survey = SurveyVue.Survey;
    SurveyVue.StylesManager.applyTheme('modern')

    var json = {
        "elements": [
            {
                "type": "dropdown",
                "renderAs": "select2",
                "choices": []
                ,
                "name": "province",
                "title": "Province selected:",
            }, {
                "type": "dropdown",
                "renderAs": "select2",
                "choices": []
                ,
                "name": "amphure",
                "title": "amphure selected:",

            }, {
                "type": "dropdown",
                "renderAs": "select2",
                "choices": []
                ,
                "name": "district",
                "title": "district selected:",
            },
        ]
    };


    export default {
        name: "AfterProbationForm",
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
            const model = new SurveyVue.Model(json);
            model.onComplete.add(function (sender, options) {
                console.log(sender.data)
            })
            return {
                argument_id: null,
                survey: model
            };
        },
        methods: {
            createModel() {
                this.setSurveyChoices('province', this.provinces)
                let qq = this.survey.onValueChanged.add(e => {
                    if (e.data.province) {
                        let province = e.data.province
                        let p_obj = this.findObj(this.provinces, 'value', province)
                        this.setSurveyChoices('amphure', p_obj.amphures_set)
                    }
                    if (e.data.amphure) {
                        let amphure = e.data.amphure
                        let p_obj = this.findObj(this.provinces, 'value', e.data.province)
                        let a_obj = this.findObj(p_obj.amphures_set, 'value', amphure)
                        this.setSurveyChoices('district', a_obj.districts_set)
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
                    // Object.defineProperty(o, new_key,
                    //     Object.getOwnPropertyDescriptor(o, old_key));
                    o[new_key] = o[old_key]
                    delete o[old_key];
                }
                return o
            }

        }
    };
</script>
s

<style scoped>
    @import url("https://surveyjs.azureedge.net/1.5.18/modern.css");
</style>