<template>
    <div class="home">
        <v-container class="d-flex flex-column align-center">
            <h1>Hello Home</h1>
            <h1 class="red--text">ฝากเอาอันนี้เข้าเมนูด้วยเน้ออ ไม่อยากเเก้ไฟล์เดียวกัน ขี้เกียจ merge อ่ะ</h1>
            <v-btn color="primary" large @click="goto_('ProbationCase')">Go to Probation Case</v-btn>
            <v-divider></v-divider>
            <v-btn color="primary" large @click="goto_('RehabilitationCase')">Go to Rehabilitation Case</v-btn>
        </v-container>
    </div>
</template>
<script>
    export default {
        name: 'Home',
        components: {},
        methods: {
            goto_(page_name) {
                if (this.$router.currentRoute.name !== page_name) {
                    this.$router.push({name: page_name})
                }
            }
        },
    }
</script>
