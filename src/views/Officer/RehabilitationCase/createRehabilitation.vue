<template>
    <v-container>
        <div>
            <p>เพิ่มการฟื้นฟู</p>
        </div>
        <div>
            <v-text-field
                    label="แผนการฟื้นฟู"
                    outlined
                    v-model="form.rehabilitation_plan"
                    :error="!!error.rehabilitation_plan"
                    :error-messages="error.rehabilitation_plan"
            >
            </v-text-field>
            <v-text-field
                    label="แผนการฟื้นฟู"
                    outlined
                    v-model="form.rehabilitation_program"
                    :error="!!error.rehabilitation_program"
                    :error-messages="error.rehabilitation_program"
            >
            </v-text-field>
            <v-text-field
                    label="วันที่เข้ารับการฟื้นฟู"
                    outlined
                    v-model="form.date_rehabilitation"
                    :error="!!error.date_rehabilitation"
                    :error-messages="error.date_rehabilitation"
                    type="date"
            >
            </v-text-field>
            <v-text-field
                    label="ระยะเวลาการฟื้นฟู"
                    outlined
                    v-model="form.rehabilitation_period"
                    :error="!!error.rehabilitation_period"
                    :error-messages="error.rehabilitation_period"
                    type="number"

            >
            </v-text-field>
            <v-text-field
                    label="วันที่ครบกำหนดระยะเวลาการฟื้นฟู"
                    outlined
                    v-model="form.due_date_rehabilitation_period"
                    :error="!!error.due_date_rehabilitation_period"
                    :error-messages="error.due_date_rehabilitation_period"
                    type="date"

            >
            </v-text-field>
            <v-text-field
                    label="วันที่สิ้นสุดการฟื้นฟู"
                    outlined
                    v-model="form.rehabilitation_end_date"
                    :error="!!error.rehabilitation_end_date"
                    :error-messages="error.rehabilitation_end_date"
                    type="date"
            >
            </v-text-field>
            <v-text-field
                    label="ผลการฟื้นฟู"
                    outlined
                    v-model="form.rehabilitation_effect"
                    :error="!!error.rehabilitation_effect"
                    :error-messages="error.rehabilitation_effect"
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
        name: "createRehabilitation",
        data: () => ({
            form: {},
            rehabilitation_case: null,

        }),
        async created() {
        }, methods: {
            async save() {
                this.form.rehabilitation_case = this.$route.params.id
                if (await this.$store.dispatch('rehabilitation_case/createRehabilitation', this.form)) {
                    this.$router.go(-1)
                }
            }
        }
    }
</script>

<style scoped>

</style>