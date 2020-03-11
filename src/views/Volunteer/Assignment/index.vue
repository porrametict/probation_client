<template>
    <div>
        <div>
            <h3>งานที่ได้รับหมอบหมาย</h3>
        </div>
        <v-divider/>

        <div v-if="assignments">
            <v-card
                    v-for="(a,i) in assignments" :key="i"
                    color="white"
            >
                <v-card-title class="headline">{{a.case.case_registration_number}}</v-card-title>
                <v-card-text class="title">
                    <P class="py-0 my-0">{{a.offender.o_first_name}} {{a.offender.o_last_name}}</P>
                    <P class="py-0 my-0">ประเภท : {{ getFormType(a.form_type) }}</P>
                </v-card-text>
                <v-card-actions class="d-flex justify-content-around">
                    <v-btn large color="success" @click="updateStatus(3)">
                        <v-icon>mdi-check</v-icon>
                    </v-btn>
                    <v-btn large color="info" @click="viewDetail( a.id)">
                        <v-icon>mdi-eye</v-icon>
                    </v-btn>
                </v-card-actions>
            </v-card>
        </div>
    </div>
</template>
<script>
    import {mapState, mapGetters} from 'vuex'

    export default {
        name: "volunteer-index",
        data: () => ({
            form_params: {},
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
            async updateStatus(id) {

            },
            viewDetail(id) {
                this.$router.push({name: "ViewAssignmentDetail", params: {id: id}})
            }
        }
    }
</script>

<style scoped>

</style>