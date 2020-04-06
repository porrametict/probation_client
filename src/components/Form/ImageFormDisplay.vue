<template>
    <div >
        <div v-if="imageURL">
            <p class="title">ภาพ</p>
            <v-img :src="imageURL" ></v-img>
        </div>
        <div v-else>
            <p></p>
        </div>
    </div>

</template>

<script>
    export default {
        name: "ImageFormDisplay",
        props : {
            assignment : {
                type : Object
            }
        },
        data () {
            return {
                imageURL : null
            }
        },
        created() {
            if (this.assignment.form_type === 1 && this.assignment.during_probation_form_data) {
                this.imageURL= this.assignment.during_probation_form_data.map_image
            } else if (this.assignment.form_type === 2 && this.assignment.after_probation_form_data) {
                this.imageURL= this.assignment.after_probation_form_data.map_image
            }
        },
    }
</script>

<style scoped>

</style>