<template>
    <div>
        <v-container v-if="assignment">
            <div>
                <p class="title">รายละเอียด</p>
                <data-list-render :data="data_render"></data-list-render>
            </div>
        </v-container>
    </div>
</template>

<script>
    import DataListRender from "../../../components/share/DataListRender";
    import {mapGetters} from "vuex";

    export default {
        name: "AssignmentView",
        components: {DataListRender},
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
            }
        }
    }
</script>

<style scoped>

</style>