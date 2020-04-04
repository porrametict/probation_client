<template>
    <div>
        <div v-if="provinces">
            <survey :survey="survey"></survey>
        </div>
        <div class="title text-center" v-else>
                Loading..
        </div>
    </div>
</template>
<script>
    import * as SurveyVue from "survey-vue";
    import 'bootstrap/dist/css/bootstrap.css';

    import during_probation_form from "@/assets/during_probation_form"
    import after_probation_form from "@/assets/after_probation_form"

    import during_probation_form_full from "@/assets/during_probation_form_full"
    import after_probation_form_full from "@/assets/after_probation_form_full"

    import {mapState} from "vuex";

    const Survey = SurveyVue.Survey;
    SurveyVue.StylesManager.applyTheme('modern')


    export default {
        name: "SurveyFormRender",
        data() {
            let self = this
            let model
            if (self.form_type == 1) {
                if (self.form_full) {
                    model = new SurveyVue.Model(during_probation_form_full);
                } else {
                    model = new SurveyVue.Model(during_probation_form);
                }
            } else if (self.form_type == 2) {
                if (self.form_full) {
                    model = new SurveyVue.Model(after_probation_form_full);
                } else {
                    model = new SurveyVue.Model(after_probation_form);
                }
            }
            model.onComplete.add(function (sender, options) {
                self.survey_complete(sender.data)
            })
            return {
                survey: model,
            };
        },
        props: {
            read_only: {
                type: Boolean,
                default: false
            },
            form_full: {
                type: Boolean,
                default: false
            },
            form_type: {
                type: Number,
                require: true
            },
            survey_data: {
                type: Object,
            },
            assignment: {
                type: Object,
                require: true
            },
            last_form: {
                type: [Object, null]
            }
        },
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
            if (this.read_only) {
                this.survey.mode = "display"
            } else {
                this.survey.mode = "edit"
            }
        },
        methods: {
            async loadData() {
                this.preparing_province()
                this.createModel()
                this.setData()
            },
            setData() {
                if (this.survey_data) {
                    if (!this.survey_data.data_collection_date) {
                        this.survey_data.data_collection_date = this.getCurrentDate()
                    }
                    this.survey.data = this.survey_data
                    this.setProvince()
                } else {
                    if (!this.read_only) {
                        this.survey.data = {
                            time: 1,
                            data_collection_date: this.getCurrentDate(),
                            registration_number: ""
                        }
                    }
                }
                this.setOldAddress()
            },
            setOldAddress() {
                if (this.last_form) {
                    console.log(this.last_form,"last_form")
                    let form = this.last_form.form
                    this.survey.setValue('map_lat', form.map_lat)
                    this.survey.setValue('map_lng', form.map_lng)
                    this.survey.setValue('stay_with', form.stay_with)
                    this.survey.setValue('s_related_as', form.s_related_as)
                    this.survey.setValue('s_phone', form.s_phone)
                    this.survey.setValue('s_house_no', form.s_house_no)
                    this.survey.setValue('s_mu', form.s_mu)
                    this.survey.setValue('s_alley', form.s_alley)
                    this.survey.setValue('s_street', form.s_street)
                    this.survey.setValue('s_province', form.s_province)
                    this.survey.setValue('s_amphure', form.s_amphure)
                    this.survey.setValue('s_district', form.s_district)
                }
            },
            setProvince() {
                if (this.survey_data.informant_province) {
                    let informant_province = this.survey_data.informant_province
                    let p_obj = this.findObj(this.provinces, 'value', informant_province)
                    this.setSurveyChoices('informant_amphure', p_obj.amphures_set)
                }
                if (this.survey_data.informant_amphure) {
                    let informant_amphure = this.survey_data.informant_amphure
                    let p_obj = this.findObj(this.provinces, 'value', this.survey_data.informant_province)
                    let a_obj = this.findObj(p_obj.amphures_set, 'value', informant_amphure)
                    this.setSurveyChoices('informant_district', a_obj.districts_set)
                }
                if (this.survey_data.s_province) {
                    let s_province = this.survey_data.s_province
                    let p_obj = this.findObj(this.provinces, 'value', s_province)
                    this.setSurveyChoices('s_amphure', p_obj.amphures_set)
                }
                if (this.survey_data.s_amphure) {
                    let s_amphure = this.survey_data.s_amphure
                    let p_obj = this.findObj(this.provinces, 'value', this.survey_data.s_province)
                    let a_obj = this.findObj(p_obj.amphures_set, 'value', s_amphure)
                    this.setSurveyChoices('s_district', a_obj.districts_set)
                }
            },
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

                    if (e.data.address_status) {
                        if (e.data.address_status == 'address_changed') {
                            this.setGeolocation()
                        }
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
                if (!(o[new_key])) {
                    Object.defineProperty(o, new_key,
                        Object.getOwnPropertyDescriptor(o, old_key))
                    delete o[old_key]
                    return o
                }
            },
            getCurrentDate() {
                let date = moment.format('L')
                let cur_date = date.split('/')
                return `${cur_date[2]}-${cur_date[1]}-${cur_date[0]}`
            },
            async survey_complete(e) {
                let form = {
                    assignment: this.assignment.id,
                    form: e
                };
                this.$emit('oncomplete', form)
            },
            async save_data() {
                let form = {
                    assignment: this.assignment.id,
                    form: this.survey.data
                };
                this.$emit('on_save', form)
            },
            setGeolocation() {
                document.addEventListener("deviceready", this.getGeolocation, false);
                this.getGeolocation()
            },
            async getGeolocation() {
                let options = {
                    enableHighAccuracy: true,
                    timeout: 5000,
                    maximumAge: 0
                };
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(this.successLocation, this.errorLocation, options)
                } else {
                    console.log("map error :  Browser doesn't support Geolocation")
                }
            },
            successLocation(position) {
                let pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                }
                this.survey.setValue('map_lat', pos.lat)
                this.survey.setValue('map_lng', pos.lng)
            },
            errorLocation(error) {
                alert('code: ' + error.code + '\n' + 'message: ' + error.message + '\n');
            }
        }
    };
</script>
<style scoped>
    @import url("https://surveyjs.azureedge.net/1.5.18/modern.css");
</style>

