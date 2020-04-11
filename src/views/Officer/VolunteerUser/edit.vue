<template>
    <v-container v-if="user_profile">
        <div>
            <p class="title">
                <v-icon>
                    mdi-circle
                </v-icon>
                <span class="">
                        ข้อมูลผู้ใช้
                    </span>
            </p>
            <v-spacer></v-spacer>
        </div>
        <v-card>
            <v-card-text>
                <div>
                    <div>
                        <v-text-field label="ชื่อเข้าใช้งาน" outlined disabled v-model="user_profile.user.username"/>
                        <v-text-field label="ชื่อ"
                                      outlined
                                      v-model="user_profile.user.first_name"
                                      :error="!!error.first_name"
                                      :error-messages="error.first_name"
                        />
                        <v-text-field label="นามสกุล"
                                      outlined
                                      v-model="user_profile.user.last_name"
                                      :error="!!error.last_name"
                                      :error-messages="error.last_name"
                        />
                        <v-text-field label="โทรศัพท์"
                                      outlined
                                      v-model="user_profile.phone"
                                      :error="!!error.phone"
                                      :error-messages="error.phone"
                        />
                        <district-select
                                outlined
                                :val-province="user_profile.province ? user_profile.province.id : 0"
                                :val-amphur="user_profile.amphure ? user_profile.amphure.id : 0"
                                :val-district="user_profile.district ? user_profile.district.id : 0"
                                @change="updateDistrictSelect"
                        >
                        </district-select>
                    </div>
                    <div class="py-1 d-flex flex-column flex-md-row justify-space-between">
                        <v-btn class="white--text my-2" large color="grey" @click="$router.go(-1)">กลับ</v-btn>
                        <v-btn class="white--text my-2 " large color="success" @click="updateUser">บันทึก</v-btn>
                    </div>
                </div>
            </v-card-text>
        </v-card>
    </v-container>
</template>
<script>
    import DistrictSelect from "../../../components/share/districtSelect";
    import Base from "../../../components/share/Base";

    export default {
        extends: Base,
        name: "edit",
        components: {DistrictSelect},
        data: () => ({
            user_profile: null
        }),
        async created() {
            await this.loadData()
        },
        methods: {
            async loadData() {
                this.user_profile = await this.$store.dispatch('volunteer/getUserDetail', this.$route.params.id)
            }, async updateUser() {
                let data = await this.$store.dispatch('volunteer/updateUser', this.user_profile)
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

        },
    }
</script>

<style scoped>

</style>