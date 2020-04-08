<template>
    <v-container>
        <div class="d-flex justify-content-between">
            <slot name="header">
                <p class="title text-md-left text-center">
                    ข้อมูล
                </p>
            </slot>
            <div v-if="!read_only">
                <v-btn color="primary"
                       class="white--text font-weight-bold"
                       @click="saveForm"
                >
                    บันทึกข้อมูล
                </v-btn>
            </div>
        </div>
        <v-divider></v-divider>
        <div v-if="assignment && !is_loading">
            <SurveyFormRender
                    ref="s_form"
                    :assignment="assignment"
                    :survey_data="survey_data"
                    :last_form="last_form"
                    :form_type="assignment.form_type"
                    :form_full="form_full"
                    :read_only="read_only"
                    @oncomplete="on_form_complete"
                    @on_save="on_form_save"
            >
            </SurveyFormRender>
        </div>
        <div v-else>
            <p class="title text-center">Loading ...</p>
        </div>
    </v-container>
</template>

<script>
    import SurveyFormRender from "./SurveyFormRender";

    export default {
        name: "assignment_form",
        props: {
            read_only: {
                type: Boolean,
                default: false
            },
            form_full: {
                type: Boolean,
                default: false
            },
            assignment: {
                type: Object,
                require: true
            }
        },
        components: {SurveyFormRender},
        data() {
            return {
                survey_data: null,
                is_loading: true,
                last_form: null
            }
        },
        async mounted() {
            await this.loadData()
        },
        methods: {
            async loadData() {
                if (this.assignment.form_type === 1) {
                    this.loadLastForm("during_probation_form")
                    if (this.assignment.during_probation_form_data) {
                        this.survey_data = this.assignment.during_probation_form_data.form
                        if (this.survey_data.map_image) {
                            this.prepare_map_image(this.assignment.during_probation_form_data)
                        } else {
                            this.is_loading = false
                        }
                    } else {
                        this.survey_data = {}
                        this.is_loading = false
                    }
                } else if (this.assignment.form_type === 2) {
                    this.loadLastForm("after_probation_form")
                    if (this.assignment.after_probation_form_data) {
                        this.survey_data = this.assignment.after_probation_form_data.form
                        if (this.survey_data.map_image) {
                            this.prepare_map_image(this.assignment.after_probation_form_data)
                        } else {
                            this.is_loading = false
                        }
                    } else {
                        this.survey_data = {}
                        this.is_loading = false
                    }
                }
                this.survey_data.name = `${this.assignment.offender_data.o_first_name} ${this.assignment.offender_data.o_last_name}`
            },
            async loadLastForm(type) {
                let form = {
                    form_type: type,
                    assignment_id: this.assignment.id
                }
                let last_form = await this.$store.dispatch('assignment/getOldForm', form)
                if (last_form) {
                    if (!(Object.keys(last_form).length === 0 && last_form.constructor === Object)) {
                        this.last_form = last_form
                    }
                }
            },
            async prepare_map_image(form) {
                if (form.map_image) {
                    let img_url = form.map_image
                    let self = this
                    await this.toDataURL(img_url, function (dataURL) {
                        self.survey_data.map_image[0]["content"] = dataURL
                        self.is_loading = false
                    })
                } else {
                    this.is_loading = false
                }
            },
            async toDataURL(url, callback) {
                let xhr = new XMLHttpRequest();
                xhr.onload = function () {
                    let reader = new FileReader();
                    reader.onloadend = function () {
                        callback(reader.result);
                    }
                    reader.readAsDataURL(xhr.response);
                };
                xhr.open('GET', url);
                xhr.responseType = 'blob';
                xhr.send();
            },

            async on_form_complete(e) {
                this.save(e)
            }
            ,
            on_form_save(e) {
                this.save(e)
            }
            ,
            async save(e) {
                let saveMethod = "postForm"
                let form_type = null

                if (this.assignment.form_type === 1) {
                    form_type = 'during_probation_form'
                } else if (this.assignment.form_type === 2) {
                    form_type = 'after_probation_form'
                }
                if (this.assignment[`${form_type}_data`]) {
                    if (this.assignment[`${form_type}_data`].id) {
                        saveMethod = "putForm"
                    }
                } else {
                    this.assignment[`${form_type}_data`] = {}
                    this.assignment[`${form_type}_data`].assignment = this.assignment.id
                }
                this.assignment[`${form_type}_data`].form = e.form

                let data = await this.$store.dispatch(`${form_type}/${saveMethod}`, this.assignment[`${form_type}_data`])

                if (data) {
                    this.$emit('save_success', data)
                }
            }
            ,
            saveForm() {
                this.$refs.s_form.save_data()
            }
        }
    }
</script>

<style scoped>

</style>