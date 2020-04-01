<template>
    <div>
        <div>
            <h3 class="title font-weight-bold blue--text text-center">
                งานที่ได้รับหมอบหมาย
            </h3>
        </div>
        <v-divider/>

        <div v-if="assignments ">
            <div v-if="assignments.length">
                <div
                        v-for="(a,i) in assignments" :key="i"
                >
                    <v-card :color="a.form_type === 1 ? 'primary' : 'green'"
                            outlined
                            dark
                            class="ma-2"
                    >
                        <v-card-text>
                            <div>
                                <P class="py-0 my-0 font-weight-bold">ผู้ถูกคุม</P>
                                <P class="py-0 my-0 title white--text">{{a.offender_data.o_first_name}}
                                    {{a.offender_data.o_last_name}}</P>
                            </div>
                            <div>
                                <P class="py-0 my-0 font-weight-bold">ประเภทของฟอร์ม</P>
                                <P class="py-0 my-0 title white--text">{{ getFormType(a.form_type) }}</P>
                            </div>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn block color="white" @click="viewDetail(a.id)" large>
                                <v-icon :color="a.form_type === 1 ? 'primary' : 'green'" large>mdi-eye</v-icon>
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </div>
            </div>
            <div v-else>
                <h1 class="title text-center font-weight-bold grey--text">ไม่มี</h1>
            </div>
        </div>
    </div>
</template>
<script>
    import {mapState, mapGetters} from 'vuex'

    export default {
        name: "volunteer-index",
        data: () => ({
            form_params: {
                status: '1,3',
            },
            assignments: null
        }),
        computed: {
            ...mapState({
                user_profile: state => state.account.user_profile
            }),
            ...mapGetters({
                getFormType: 'assignment/getFormType'
            })
        },
        async created() {
            if (!this.user_profile) {
                await this.$store.dispatch('account/getUser')
            }
            this.loadData()
        },
        methods: {
            async loadData() {
                this.form_params.volunteer = this.user_profile.user.id
                let assignments = await this.$store.dispatch('assignment/getAssignment', this.form_params)
                this.assignments = assignments.results
            },
            async updateStatus(assignment) {
                assignment['status'] = 3;
                let data = await this.$store.dispatch('assignment/updateAssignment', assignment)
            },
            viewDetail(id) {
                this.$router.push({name: "ViewAssignmentDetail", params: {id: id}})
            }
        }
    }
</script>

<style scoped>

</style>