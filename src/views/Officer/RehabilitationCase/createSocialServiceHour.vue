<template>
    <v-container>
        <div>
            <p>เพิ่มการบริการสังคม</p>
        </div>
        <div>
            <v-text-field
                    label="ทั้งหมด"
                    outlined
                    v-model="form.total_working_hours"
                    :error="!!error.total_working_hours"
                    :error-messages="error.total_working_hours"
                    type="number"
            >
            </v-text-field>
            <v-text-field
                    label="ทำเเล้ว"
                    outlined
                    v-model="form.done_working_hours"
                    :error="!!error.done_working_hours"
                    :error-messages="error.done_working_hours"
                    type="number"
            >
            </v-text-field>
            <v-text-field
                    label="คงเหลือ"
                    outlined
                    v-model="form.residual_working_hours"
                    :error="!!error.residual_working_hours"
                    :error-messages="error.residual_working_hours"
                    type="number"
            >
            </v-text-field>

        </div>
        <div class="text-end">
            <v-btn color="primary" class="ma-2" @click="save">
                บันทึก
            </v-btn>
        </div>
    </v-container>
</template>

<script>
    import Base from "../../../components/share/Base";

    export default {
        extends: Base,
        name: "createSSH",
        data: () => ({
            form: {},
            rehabilitation_case: null,

        }),
        async created() {
        }, methods: {
            async save() {
                this.form.rehabilitation_case =  this.$route.params.id
                if (await this.$store.dispatch('rehabilitation_case/createSSH', this.form)) {
                    this.$router.go(-1)
                }
            }
        }
    }
</script>

<style scoped>

</style>