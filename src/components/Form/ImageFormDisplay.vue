<template>
    <div>
        <div v-if="imageURLRender">
            <p class="title">ภาพ</p>
            <v-img :src="imageURLRender"></v-img>
        </div>
        <div v-else>
            <p></p>
        </div>
    </div>

</template>

<script>
    export default {
        name: "ImageFormDisplay",
        props: {
            imageURL: {
                type: String
            }
        },
        data() {
            return {
                imageURLRender: null
            }
        },
        mounted() {
            if (!this.imageURL.startsWith(process.env.VUE_APP_BASE_BACKEND_URL)) {
                this.imageURLRender = process.env.VUE_APP_BASE_BACKEND_URL + this.imageURL.substr(1)
            }else {
                this.imageURLRender = this.imageURL
            }
            // if (this.assignment.form_type === 1 && this.assignment.during_probation_form_data) {
            //     this.imageURL= this.assignment.during_probation_form_data.map_image
            // } else if (this.assignment.form_type === 2 && this.assignment.after_probation_form_data) {
            //     this.imageURL= this.assignment.after_probation_form_data.map_image
            // }
        },
    }
</script>

<style scoped>

</style>