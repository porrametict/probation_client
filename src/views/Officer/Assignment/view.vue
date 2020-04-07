<template>
    <div>
        <v-container v-if="assignment">
            <div>
                <p class="title">รายละเอียด</p>
                <data-list-render :data="data_render"></data-list-render>
            </div>
            <v-card class="ma-3">
                <v-card-text>
                    <FormRender
                            :assignment="assignment"
                            :form_full="true"
                            :read_only="true"
                            @save_success="save_form_success"
                    >
                        <template v-slot:header class="d-flex justify-content-between flex-row">
                               <span class="title text-md-left text-center">
                                   ข้อมูล
                               </span>
                            <v-spacer></v-spacer>
                            <v-btn color="primary" @click="exportPDF"
                                   v-if="assignment.after_probation_form_data || assignment.during_probation_form_data">
                                ส่งออก PDF
                            </v-btn>
                        </template>
                    </FormRender>
                    <div>
                        <ImageFormDisplay :assignment="assignment"></ImageFormDisplay>
                        <map-form-display :assignment="assignment"></map-form-display>
                    </div>
                </v-card-text>
            </v-card>
        </v-container>
    </div>
</template>

<script>
    import DataListRender from "../../../components/share/DataListRender";
    import FormRender from "../../../components/Form/FormRender";
    import {mapGetters} from "vuex";
    import ImageFormDisplay from "../../../components/Form/ImageFormDisplay";
    import MapFormDisplay from "../../../components/Form/MapFormDisplay";

    export default {
        name: "AssignmentView",
        components: {MapFormDisplay, ImageFormDisplay, DataListRender, FormRender},
        data() {
            return {
                assignment: null,
                data_render: []
            }
        },
        async mounted() {
            await this.loadData()
        },
        computed: {
            ...mapGetters({
                getFormType: 'assignment/getFormType',
                getAssignmentStatus: 'assignment/getAssignmentStatus',
            })
        },
        methods: {
            async loadData() {
                let id = this.$route.params.id
                this.assignment = await this.$store.dispatch("assignment/getAssignmentById", id)
                this.data_render_preparing()
            },
            data_render_preparing() {
                this.data_render = [
                    {
                        label: "ข้อมูล",
                        data: [
                            {
                                key: "อศค.",
                                value: `${this.assignment.volunteer_data.first_name} ${this.assignment.volunteer_data.last_name}`
                            },
                            {
                                key: "เจ้าหน้าที่",
                                value: `${this.assignment.officer_data.first_name} ${this.assignment.officer_data.last_name}`
                            },
                            {
                                key: "ผู้ถูกคุมประพฤติ",
                                value: `${this.assignment.offender_data.o_first_name} ${this.assignment.offender_data.o_last_name}`
                            },
                            {
                                key: "ประเภทของเเบบฟอร์ม",
                                value: this.getFormType(this.assignment.form_type)
                            },
                            {
                                key: "สถานะ",
                                value: this.getAssignmentStatus(this.assignment.status)
                            },
                            {
                                key: "สร้างเมื่อ",
                                value: this.getTHDate(this.assignment.created_at)
                            },
                        ]
                    }
                ]
            },
            save_form_success(e) {
                console.log(e)
            },
            exportPDF() {
                let params_form = {
                    "form_id": null,
                    "form_type": null,
                    "download": true
                }
                params_form.form_type = this.assignment.form_type === 1 ? 'during_probation_form_data' : 'after_probation_form_data'
                if (this.assignment[params_form.form_type]) {
                    params_form.form_id = this.assignment[params_form.form_type].id
                    this.$store.dispatch('assignment/getPDFForm', params_form)
                }
            }
        }
    }
</script>

<style scoped>

</style>