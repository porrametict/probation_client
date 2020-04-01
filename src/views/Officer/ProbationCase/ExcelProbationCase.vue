<template>
    <div class="d-flex flex-column align-center">
        <p class="display-2 font-weight-light grey--text">อัพโหลดข้อมูลคดีคุมประพฤติ</p>
        <div class="upload-btn-wrapper ma-3" >
            <button :class=" file!=='' ?'btn-fill':'btn'">Choose a file</button>
            <input type="file"
                   id="file"
                   ref="file"
                   accept="application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                   v-on:change="onChangeFileUpload()"/>
        </div>
        <v-btn
                @click="save"
                color="primary"
                x-large
        >Upload</v-btn>
    </div>
</template>
<script>
    export default {
        name: "ExcelProbationCase",
        data() {
            return {
                file: ''
            }
        },
        methods: {
            async save() {
                let formData = new FormData();
                formData.append('excel_file', this.file);
                let data = await this.$store.dispatch('probation_case/uploadExcel', formData)
                if (data) {
                    this.$router.push({name:"ProbationCase"})
                }
            },
            onChangeFileUpload(){
                this.file = this.$refs.file.files[0];
            }
        }
    }
</script>


<style scoped>
    .upload-btn-wrapper {
        position: relative;
        overflow: hidden;
        display: inline-block;
        cursor: pointer;
    }

    .btn {
        border: 2px solid #5cb85c;
        color: #5cb85c;
        background-color: white;
        padding: 8px 20px;
        border-radius: 8px;
        font-size: 20px;
        font-weight: bold;
        cursor: pointer;

    }
    .btn-fill {
        border: 2px solid #5cb85c;
        color: white;
        background-color: #5cb85c;
        padding: 8px 20px;
        border-radius: 8px;
        font-size: 20px;
        font-weight: bold;
        cursor: pointer;
    }

    .upload-btn-wrapper input[type=file] {
        font-size: 100px;
        position: absolute;
        left: 0;
        top: 0;
        opacity: 0;
        cursor: pointer;

    }

</style>