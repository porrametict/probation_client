<template>
    <v-container>
        <div class="d-flex justify-content-between">
            <h3 class="title text-md-left text-center">
                เก็บข้อมูล
            </h3>
            <div>
                <v-btn color="primary"
                       class="white--text font-weight-bold"
                       @click="saveForm"
                >
                    บันทึกข้อมูล
                </v-btn>
            </div>
        </div>
        <v-divider></v-divider>
        <div v-if="assignment">
            <DuringProbationForm
                    ref="d_form"
                    v-if="assignment.form_type === 1"
                    :assignment="assignment"
                    :survey_data="survey_data"
                    @oncomplete="on_form_complete"
                    @on_save="on_form_save"
            ></DuringProbationForm>

            <AfterProbationForm
                    ref="a_form"
                    v-else-if="assignment.form_type === 2"
                    :assignment="assignment"
                    :survey_data="survey_data"
                    @oncomplete="on_form_complete"
                    @on_save="on_form_save"
            ></AfterProbationForm>
        </div>
    </v-container>
</template>

<script>
    import AfterProbationForm from "../../../components/Form/AfterProbationForm";
    import DuringProbationForm from "../../../components/Form/DuringProbationForm";

    export default {
        name: "assignment_form",
        components: {DuringProbationForm, AfterProbationForm},
        data() {
            return {
                assignment: null,
                survey_data: null
            }
        },
        async mounted() {
            this.loadData()
        },
        methods: {
            async loadData() {
                let id = this.$route.params.id
                this.assignment = await this.$store.dispatch('assignment/getAssignmentById', id)
                if (this.assignment.form_type === 1 && this.assignment.during_probation_form_data) {
                    this.survey_data = this.assignment.during_probation_form_data.form
                } else if (this.assignment.form_type === 2 && this.assignment.after_probation_form_data) {
                    this.survey_data = this.assignment.after_probation_form_data.form
                }
            },
            async on_form_complete(e) {
                this.save(e)
            },
            on_form_save(e) {
                this.save(e)
            },
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
                    await this.$router.push({name: 'ViewAssignmentDetail', params: {id: this.assignment.id}})
                }
            },
            saveForm() {
                if (this.assignment.form_type === 1) {
                    this.$refs.d_form.save_data()
                } else if (this.assignment.form_type === 2) {
                    this.$refs.a_form.save_data()
                }

            }
        }
    }
</script>

<style scoped>

</style>