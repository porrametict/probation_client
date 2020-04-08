<template>
    <v-container v-if="assignment">
        <div class="d-flex justify-content-between">
            <h3 class="title text-md-left text-center">
                รายละเอียด
            </h3>
            <div>
                <v-btn color="primary"
                       class="white--text font-weight-bold"
                       @click="updateStatus"
                >
                    ส่งข้อมูล
                </v-btn>
            </div>
        </div>
        <v-divider/>

        <div>
            <div class="title grey--text my-1">
                <v-icon color="grey">mdi-circle</v-icon>
                <span>
                    ข้อมูล
                </span>
            </div>
            <div class="title py-0 my-0 d-flex flex-column">
            <span class="grey--text body-2">
                ผู้ถูกคุมประพฤติ
            </span>
                <span class="display-1">
                {{assignment.offender_data.o_first_name +' ' +assignment.offender_data.o_last_name}}
            </span>
            </div>

            <div class="title py-0 my-0 d-flex flex-column">
            <span class="grey--text body-2 ">
                ประเภทเเบบฟอร์ม
            </span>
                <div>
                    <v-chip text-color="white"
                            :color="assignment.form_type === 1 ? 'primary' : 'green'"
                    >
                        {{getFormType(assignment.form_type)}}
                    </v-chip>
                </div>
            </div>
            <v-divider/>
            <div v-if="current_address.o_address_house">
                <div class="title py-0 my-0 d-flex flex-column" v-for="(a,index) in AddressRender" :key="index">
                    <span class="grey--text body-2">
                        {{a.label}}
                    </span>
                    <span class="display-1">
                        {{a.value}}
                    </span>
                </div>
            </div>
            <div v-else>
                <p class="grey--text text-center">ไม่มีข้อมูลที่อยู่</p>
            </div>
        </div>
        <div>
            <v-btn block color="primary" class="white--text" large @click="gotoForm()">
                เก็บข้อมูล
            </v-btn>
        </div>
    </v-container>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "view-assignment",
        computed: {
            ...mapGetters({
                getFormType: 'assignment/getFormType'
            })
        },
        data() {
            return {
                assignment: null,
                current_address: null,
                AddressRender: null,
            }
        },
        created() {
            this.loadData()
        }, methods: {
            async loadData() {
                let id = this.$route.params.id
                this.assignment = await this.$store.dispatch('assignment/getAssignmentById', id)
                this.getCurrentAddress(this.assignment.offender_data.offenderaddress_set)
            },
            gotoForm() {
                this.$router.push({name: 'AssignmentForm', params: {id: this.assignment.id}})
            }, getCurrentAddress(data) {
                this.current_address = {}
                data.forEach(e => {
                    if (e.o_address_status) {
                        this.current_address = e
                    }
                })
                this.createAddressRender()
            },
            createAddressRender() {
                this.AddressRender = [
                    {
                        label: "บ้านเลขที่",
                        value: this.current_address.o_address_house
                    }, {
                        label: "หมู่",
                        value: this.current_address.o_address_village
                    }, {
                        label: "หมู่ที่",
                        value: this.current_address.o_address_mu
                    }, {
                        label: "ซอย",
                        value: this.current_address.o_address_alley
                    }, {
                        label: "ถนน",
                        value: this.current_address.o_address_street
                    }, {
                        label: "ตำบล",
                        value: this.current_address.district.name_th
                    }, {
                        label: "อำเภอ",
                        value: this.current_address.amphure.name_th
                    }, {
                        label: "จังหวัด",
                        value: this.current_address.province.name_th
                    }, {
                        label: "รหัสไปรษณีย์",
                        value: this.current_address.o_address_zip_code
                    },
                ]
            },
            async updateStatus() {
                this.assignment.status = 4
                let data = await this.$store.dispatch('assignment/updateAssignment', this.assignment)
                // this.updateOffenderAddress()
                if (data) {
                    await this.$router.push({name: "Volunteer"})
                }
            },
            async updateOffenderAddress() {
                let form_type = null
                if (this.assignment.during_probation_form_data) {
                    form_type = 'during_probation_form_data'
                } else if (this.assignment.after_probation_form_data) {
                    form_type = 'after_probation_form_data'
                }
                if (form_type) {
                    let form_data = {
                        offender: this.assignment.offender.id,
                        o_address_house: this.assignment[form_type].s_house_no,
                        o_address_village: this.assignment[form_type].s_mu,
                        o_address_mu: this.assignment[form_type].s_mu,
                        o_address_alley: null,
                        o_address_street: this.assignment[form_type].s_street,
                        o_address_district: this.assignment[form_type].s_district,
                        o_address_amphure: this.assignment[form_type].s_amphure,
                        o_address_province: this.assignment[form_type].s_province,
                        o_address_zip_code: null,
                        o_address_status: true,
                        o_address_map_image: this.assignment[form_type].map_image,
                        o_address_map_lat: this.assignment[form_type].map_lat,
                        o_address_map_lng: this.assignment[form_type].map_lng,
                    }
                }
            }
        }
    }
</script>

<style scoped>

</style>