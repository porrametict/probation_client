<template>
    <v-container>
        <div>
            <p class="title">อสค.</p>
        </div>

        <div>
            <div>
                <v-btn color="primary" @click="$router.push({name:'registerVolunteerUser'})">
                    <v-icon>mdi-plus</v-icon>
                    เพิ่ม
                </v-btn>
            </div>
            <v-data-table
                    :headers="headers"
                    :items="data_table.results"
                    :options.sync="options"
                    hide-default-footer
                    class="elevation-1"
            >
                <template v-slot:item.action="{item}">
                    <v-btn icon>
                        <v-icon @click="view(item.id)">mdi-eye</v-icon>
                    </v-btn>
                    <v-btn icon color="red" :disabled="user_profile.user.id ==item.user.id">
                        <v-icon @click="deleteUser(item.id)">mdi-trash-can</v-icon>
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
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: "index",
        data() {
            return {
                page: 1,
                total_page: 1,
                data_table: [],
                form_params: {
                    page: 1,
                    user_type: 1
                },
                options: {},
                headers: [
                    {
                        text: 'ชื่อ',
                        align: 'left',
                        sortable: false,
                        value: 'user.first_name',
                    }, {
                        text: 'นามสกุล',
                        align: 'left',
                        sortable: false,
                        value: 'user.last_name',
                    },
                    {
                        text: 'จัดการ',
                        align: 'center',
                        sortable: false,
                        value: 'action',
                    },
                ],
            }
        },
        computed: {
            ...mapState({
                user_profile: state => state.account.user_profile
            })
        },
        async created() {
            if (!this.user_profile) {
                await this.$store.dispatch("account/getUser")
            }
            await this.loadData()
        },
        methods: {
            async loadData() {
                this.data_table = await this.$store.dispatch('volunteer/getListUser', this.form_params)
            },
            change_page(page) {
                this.form_params.page = page
                this.loadData()
            },
            view(id) {
                this.$router.push({name: "editVolunteerUser", params: {id: id}})
            },
            async deleteUser(id) {
                if (await this.$store.dispatch("volunteer/deleteUser", id)) {
                    this.loadData()
                }
            }
        }
    }
</script>

<style scoped>

</style>