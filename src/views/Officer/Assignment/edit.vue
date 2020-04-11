<template>
    <div>
        <v-container>
            <div>
                <p class="title">
                    <v-icon>
                        mdi-circle
                    </v-icon>
                    <span class="">
                       เเก้ไขการมอบหมายงาน
                    </span>
                </p>
                <v-spacer></v-spacer>
            </div>
            <div>
                <v-card>
                    <v-card-text>
                        <v-select
                                v-if="offenders"
                                outlined
                                label="ผู้ถุกคุม"
                                return-object
                                :items="offenders"
                                v-model="offender_sel"
                        >
                            <template v-slot:selection="data">
                                {{data.item.o_first_name}}
                                {{data.item.o_last_name}} -
                                {{getCurrentAddress(data.item.offenderaddress_set)}}
                            </template>
                            <template v-slot:item="data">
                                {{data.item.o_first_name}}
                                {{data.item.o_last_name}} -
                                {{getCurrentAddress(data.item.offenderaddress_set)}}
                            </template>
                        </v-select>

                        <v-select
                                v-if="volunteers"
                                outlined
                                label="อสค."
                                return-object
                                :items="volunteers"
                                v-model="volunteer_sel"
                        >
                            <template v-slot:selection="data">
                                {{data.item.user.first_name}}
                                {{data.item.user.last_name}} -
                                {{data.item.province ? data.item.province.name_th : null }}
                                {{data.item.amphure ? data.item.amphure.name_th : null }}
                                {{data.item.district ? data.item.district.name_th : null }}
                            </template>
                            <template v-slot:item="data">
                                {{data.item.user.first_name}}
                                {{data.item.user.last_name}} -
                                {{data.item.province ? data.item.province.name_th : null }}
                                {{data.item.amphure ? data.item.amphure.name_th : null }}
                                {{data.item.district ? data.item.district.name_th : null }}
                            </template>
                        </v-select>

                        <v-select
                                outlined
                                label="ประเภทเเบบฟอร์ม"
                                return-object
                                :items="form_type_choices"
                                item-text="text"
                                v-model="form_type_sel"
                        >
                        </v-select>
                        <div class="d-flex justify-content-between">
                            <v-btn color="grey"
                                   class="white--text"
                                   large
                                   @click="$router.push({name :'Assignment'})"
                            >
                                ยกเลิก
                            </v-btn>
                            <v-btn
                                    color="primary"
                                    large
                                    @click="save"
                            >
                                บันทึก
                            </v-btn>
                        </div>
                    </v-card-text>
                </v-card>
            </div>
        </v-container>
    </div>
</template>
<script>
    import {mapState} from 'vuex'

    export default {
        name: "AssignmentEdit",
        data() {
            return {
                form: null,
                form_type_sel: null,
                offender_sel: null,
                volunteer_sel: null,
                offenders: null,
                volunteers: null,
                form_type_choices: [
                    {
                        key: 1,
                        text: "ระหว่างการควบคุม"
                    },
                    {
                        key: 2,
                        text: "หลังการควบคุม"
                    },
                ]
            }
        },
        computed: {
            ...mapState({
                user_profile: state => state.account.user_profile
            })
        },
        async mounted() {
            if (!this.user_profile) {
                await this.$store.dispatch('account/getUser')
            }
            await this.loadData()
        },
        methods: {
            async loadData() {
                this.offenders = await this.$store.dispatch('offender/getOffenderNoPaginate')
                this.volunteers = await this.$store.dispatch('volunteer/getVolunteerNoPaginate')
                this.form = await this.$store.dispatch('assignment/getAssignmentById', this.$route.params.id)
                console.log(this.form)
                this.sync()
            },
            sync() {
                this.form_type_sel = this.form.form_type == 1  ? {
                    key: 1,
                        text: "ระหว่างการควบคุม"
                } : {
                    key: 2,
                        text: "หลังการควบคุม"
                }
                this.offender_sel = this.form.offender_data
                this.set_volunteer(this.form.volunteer_data.id)
            },
            set_volunteer (id){
                this.volunteers.forEach(e=> {
                    if (e.user.id == id){
                        this.volunteer_sel =e
                    }
                })

            },
            getCurrentAddress(data) {
                let current_address = {}
                data.forEach(e => {
                    if (e.o_address_status) {
                        current_address.province = e.province ? e.province.name_th : null
                        current_address.amphure = e.amphure ? e.amphure.name_th : null
                        current_address.district = e.district ? e.district.name_th : null
                    }
                })
                return `${current_address.province} ${current_address.amphure} ${current_address.district}`
            },
            async save() {
                try {
                    this.form.offender = this.offender_sel.id;
                    this.form.officer = this.user_profile.user.id;
                    this.form.volunteer = this.volunteer_sel.id;
                    this.form.form_type = this.form_type_sel.key;

                    let data = await this.$store.dispatch('assignment/createAssignment', this.form)
                    if (data) {
                        await this.$router.push({name: 'Assignment'})
                    }
                } catch (e) {
                    alert("กรุณากรอกข้อมูลให้ครบ")
                }

            }
        },

    }
</script>

<style scoped>

</style>