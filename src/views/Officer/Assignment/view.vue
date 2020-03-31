<template>
    <div>
        <v-container v-if="assignment">
            <div>
                <p class="title">รายละเอียด</p>
                <data-list-render label="ข้อมูล" :data="data_render"></data-list-render>
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
                data_render : []
            }
        },
        async mounted() {
            await this.loadData()
        },
        computed : {
            ...mapGetters({
                getFormType : 'assignment/getFormType',
                getAssignmentStatus : 'assignment/getAssignmentStatus',
            })
        },
        methods: {
            async loadData () {
                let id = this.$route.params.id
                this.assignment = await this.$store.dispatch("assignment/getAssignmentById", id)
                this.data_render_preparing()
            },
            data_render_preparing () {
                this.data_render = [
                    {
                        key : "อศค.",
                        value : `${this.assignment.volunteer.first_name} ${this.assignment.volunteer.last_name}`
                    },
                    {
                        key : "เจ้าหน้าที่",
                        value : `${this.assignment.officer.first_name} ${this.assignment.officer.last_name}`
                    },
                    {
                        key : "ผู้ถูกคุมประพฤติ",
                        value : `${this.assignment.case.offender.o_first_name} ${this.assignment.case.offender.o_last_name}`
                    },
                    {
                        key : "ประเภทของเเบบฟอร์ม",
                        value : this.getFormType(this.assignment.form_type)
                    },
                    {
                        key : "สถานะ",
                        value : this.getAssignmentStatus(this.assignment.status)
                    },
                ]
            }
        }
    }
</script>

<style scoped>

</style>