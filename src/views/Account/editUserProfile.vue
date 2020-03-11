<template>
    <div>
        <div>
            <h3>ข้อมูลผู้ใช้</h3>
        </div>
        <v-divider/>
        <div v-if="user">
            <v-text-field label="ชื่อเข้าใช้งาน" outlined disabled v-model="user.username"/>
            <v-text-field label="ชื่อ" outlined v-model="user.first_name"/>
            <v-text-field label="นามสกุล" outlined v-model="user.last_name"/>
        </div>
        <div>
            <v-btn class="white--text my-2" large block color="success" @click="updateUser">บันทึก</v-btn>
            <v-btn class="white--text my-2" large block color="grey" @click="$router.go(-1)">กลับ</v-btn>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: "editUserProfile",
        data() {
            return {
                user: null
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
            this.user = this.user_profile.user
        },
        methods: {
            async updateUser() {
               let data =  await this.$store.dispatch('account/updateUser')

            }
        }
    }
</script>

<style scoped>

</style>