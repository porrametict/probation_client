<template>
    <v-container>
        <div>
            <p class="title">
                <v-icon>
                    mdi-circle
                </v-icon>
                <span class="">
                       ข้อมูลผู้ใช้
                    </span>
            </p>
        </div>

        <v-card>
            <v-card-text>
                <div v-if="user_profile && !loading">
                    <v-text-field label="ชื่อเข้าใช้งาน" outlined disabled v-model="user_profile.user.username"/>
                    <v-text-field label="ชื่อ" outlined v-model="user_profile.user.first_name"/>
                    <v-text-field label="นามสกุล" outlined v-model="user_profile.user.last_name"/>
                    <v-text-field label="โทรศัพท์" outlined v-model="user_profile.phone"/>
                    <district-select
                            outlined
                            :val-province="user_profile.province ? user_profile.province : 0"
                            :val-amphur="user_profile.amphure ? user_profile.amphure : 0"
                            :val-district="user_profile.district ? user_profile.district : 0"
                            @change="updateDistrictSelect"
                    >
                    </district-select>
                </div>
                <div class="py-1 d-flex flex-column flex-md-row justify-space-between">
                    <v-btn class="white--text my-2" large color="grey" @click="$router.go(-1)">กลับ</v-btn>
                    <v-btn class="white--text my-2 " large color="success" @click="updateUser">บันทึก</v-btn>
                </div>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script>
    import {mapState} from 'vuex'
    import DistrictSelect from "../../components/share/districtSelect";
    import Base from "../../components/share/Base";

    export default {
        extends: Base,
        name: "editUserProfile",
        components: {DistrictSelect},
        data() {
            return {
                loading : true
            }
        },
        computed: {
            ...mapState({
                user_profile: state => state.account.user_profile
            })
        },
        async mounted() {
            this.loading = true
            if (!this.user_profile) {
                await this.$store.dispatch('account/getUser')
            }
            this.convertToNumber()
        },
        methods: {
            async updateUser() {
                let data = await this.$store.dispatch('account/updateUser', this.user_profile)
            },
            updateDistrictSelect: function (value) {
                this.user_profile.province = value[0]
                this.user_profile.amphure = value[1]
                this.user_profile.district = value[2]
                if (value[0]) {
                    this.user_profile.province = value[0].id
                }
                if (value[1]) {
                    this.user_profile.amphure = value[1].id
                }
                if (value[2]) {
                    this.user_profile.district = value[2].id
                }
            },
            convertToNumber() {
                if (this.user_profile.province.id) {
                    this.user_profile.province = this.user_profile.province.id
                    this.user_profile.amphure = this.user_profile.amphure.id
                    this.user_profile.district = this.user_profile.district.id
                }
                this.loading = false
            }


        }
    }
</script>

<style scoped>

</style>