<template>
    <v-container v-if="assignment">
        <FormRender
                :assignment="assignment"
                @save_success="save_form_success"
        >
        </FormRender>
    </v-container>
</template>

<script>

    import FormRender from "../../../components/Form/FormRender";

    export default {
        name: "assignment_form",
        components: {
            FormRender
        },
        data() {
            return {
                assignment: null,
                survey_data: null
            }
        },
        async mounted() {
            this.loadData()
        },
        methods: {
            async loadData() {
                let id = this.$route.params.id
                this.assignment = await this.$store.dispatch('assignment/getAssignmentById', id)
            },
            save_form_success(e) {
                console.log(e)
            }
        }
    }
</script>

<style scoped>

</style>