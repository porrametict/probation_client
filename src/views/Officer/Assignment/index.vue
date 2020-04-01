<template>
    <div>
        <v-container>
            <div>
                <p class="title">การมอบหมายงาน</p>
                <v-spacer></v-spacer>
                <v-btn
                        color="primary"
                        @click="$router.push({name:'AssignmentCreate'})">
                    <v-icon>mdi-plus</v-icon>
                    สร้าง
                </v-btn>
            </div>
            <div>
                <v-data-table
                        :headers="headers"
                        :items="data_table.results"
                        :options.sync="options"
                        hide-default-footer
                        class="elevation-1"
                >
                    <template v-slot:item.offender="{item}">
                        {{item.offender.o_first_name}}
                        {{item.offender.o_last_name}}
                    </template>
                    <template v-slot:item.volunteer="{item}">
                        {{item.volunteer.first_name}}
                        {{item.volunteer.last_name}}
                    </template>
                    <template v-slot:item.form_type="{item}">
                        {{getFormType(item.form_type)}}
                    </template>
                    <template v-slot:item.status="{item}">
                        {{getAssignmentStatus(item.status)}}
                    </template>
                    <template v-slot:item.created_at="{item}">
                        {{getTHDate(item.created_at)}}
                    </template>
                    <template v-slot:item.action="{item}">
                        <v-btn icon>
                            <v-icon @click="view(item.id)">mdi-eye</v-icon>
                        </v-btn>
                    </template>
                </v-data-table>
                <v-pagination v-model="page"
                              :length="total_page"
                              circle
                              :total-visible="7"
                              @input="change_page"
                ></v-pagination>
            </div>
        </v-container>
    </div>
</template>
<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "AssignmentIndex",
        data() {
            return {
                page: 1,
                total_page: 1,
                data_table: [],
                form_params: {
                    page : 1
                },
                options: {},
                headers: [
                    {
                        text: 'อสค.',
                        align: 'center',
                        sortable: false,
                        value: 'volunteer',
                    }, {
                        text: 'ผู้ถูกคุม',
                        align: 'center',
                        sortable: false,
                        value: 'offender',
                    },
                    {
                        text: 'ประเภท',
                        align: 'center',
                        sortable: false,
                        value: 'form_type',
                    },
                    {
                        text: 'สถานะ',
                        align: 'center',
                        sortable: false,
                        value: 'status',
                    },
                    {
                        text: 'สร้างเมื่อ',
                        align: 'center',
                        sortable: false,
                        value: 'created_at',
                    }, {
                        text: 'จัดการ',
                        align: 'center',
                        sortable: false,
                        value: 'action',
                    },
                ],
            }
        },
        async mounted() {
            await this.loadData()
        },
        computed: {
            ...mapGetters({
                getFormType: 'assignment/getFormType',
                getAssignmentStatus: 'assignment/getAssignmentStatus',
                getVolunteer: 'volunteer/getVolunteer',
            })
        },
        methods: {
            change_page(page) {
                this.form_params.page = page
                this.loadData()
            },
            async loadData() {
                this.data_table = await this.$store.dispatch("assignment/getAssignment", this.form_params)
                this.total_page = Math.ceil(this.data_table.count / 10)
            },
            view(id) {
                this.$router.push({name: "AssignmentView", params: {id: id}})
            }
        }
    }
</script>

<style scoped>

</style>