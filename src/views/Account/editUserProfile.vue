<template>
    <v-container>
        <div>
            <h3 class="title text-center text-md-left ">
                ข้อมูลผู้ใช้
            </h3>
        </div>
        <v-divider/>
        <div v-if="user_profile">
            <v-text-field label="ชื่อเข้าใช้งาน" outlined disabled v-model="user_profile.user.username"/>
            <v-text-field label="ชื่อ" outlined v-model="user_profile.user.first_name"/>
            <v-text-field label="นามสกุล" outlined v-model="user_profile.user.last_name"/>
            <v-text-field label="โทรศัพท์" outlined v-model="user_profile.phone"/>
            <district-select
                    outlined
                    :val-province="user_profile.province"
                    :val-amphur="user_profile.amphure"
                    :val-district="user_profile.district"
                    @provinceChange="user_profile.province = $event"
                    @amphurChange="user_profile.amphure = $event"
                    @districtChange="user_profile.district = $event"
            >
            </district-select>
        </div>
        <div class="py-1 d-flex flex-column flex-md-row justify-space-between">
            <v-btn class="white--text my-2" large  color="grey" @click="$router.go(-1)">กลับ</v-btn>
            <v-btn class="white--text my-2 " large  color="success" @click="updateUser">บันทึก</v-btn>
        </div>
    </v-container>
</template>

<script>
    import {mapState} from 'vuex'
    import DistrictSelect from "../../components/share/districtSelect";

    export default {
        name: "editUserProfile",
        components: {DistrictSelect},
        data() {
            return {}
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
        },
        methods: {
            async updateUser() {
                let data = await this.$store.dispatch('account/updateUser', this.user_profile)
            }
        }
    }
</script>

<style scoped>

</style>