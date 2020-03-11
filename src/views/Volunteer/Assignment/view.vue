<template>
    <div v-if="assignment">
        <div>
            <h3>รายละเอียด</h3>
        </div>
        <v-divider/>
        <p class="title">สถานะ : {{assignment.status === 4 ? 'ดำเนินการเสร็จสิ้น' : 'ยังไม่ได้ดำเนินการ'}}</p>
        <div>
            <v-text-field outlined label="เลขทะเบียน"
                          :value="assignment.case.case_registration_number"/>
            <v-text-field outlined label="ประเภท"
                          :value="getFormType(assignment.form_type)"/>
            <v-divider/>
            <h1 class="title">ข้อมูล</h1>
            <v-text-field outlined label="ชื่อสกุล"
                          :value="assignment.offender.o_first_name +' ' +assignment.offender.o_last_name"/>

            <v-text-field outlined label="บ้านเลขที่"
                          :value="assignment.offender.o_address.o_address_house"
            />
            <v-text-field outlined label="หมู่"
                          :value="assignment.offender.o_address.o_address_vaillage"
            />
            <v-text-field outlined label="หมู่ที่"
                          :value="assignment.offender.o_address.o_address_mu"
            />
            <v-text-field outlined label="ซอย"
                          :value="assignment.offender.o_address.o_address_alley"
            />
            <v-text-field outlined label="ถนน"
                          :value="assignment.offender.o_address.o_address_street"
            />
            <v-text-field outlined label="ตำบล"
                          :value="assignment.offender.o_address.o_address_district"
            />
            <v-text-field outlined label="อำเภอ"
                          :value="assignment.offender.o_address.o_address_amphure"
            />
            <v-text-field outlined label="จังหวัด"
                          :value="assignment.offender.o_address.o_address_province"
            />
            <v-text-field outlined label="รหัสไปรษณีย์"
                          :value="assignment.offender.o_address.o_address_zip_code"
            />
        </div>
        <div>
            <v-btn block color="p_primary" class="white--text" large @click="gotoForm(assignment.form_type)">
                เก็บข้อมูล
            </v-btn>
        </div>
    </div>
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
                assignment: null
            }
        },
        created() {
            this.loadData()
        }, methods: {
            async loadData() {
                let id = this.$route.params.id
                this.assignment = await this.$store.dispatch('assignment/getAssignmentById', id)
            },
            gotoForm(type) {
                if (type === 1) {
                    this.$router.push({name: 'DuringProbationForm', params: {id: this.assignment.id}})
                }else if (type === 2 ){
                    this.$router.push({name: 'AfterProbationForm', params: {id: this.assignment.id}})
                }
            }
        }
    }
</script>

<style scoped>

</style>