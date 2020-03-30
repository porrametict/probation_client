<template>
    <div class="d-flex flex-column align-center">
        <p class="display-2 font-weight-light grey--text">อัพโหลดข้อมูลคดีงานฟื้นฟู</p>
        <div class="upload-btn-wrapper ma-3" >
            <button :class=" file!=='' ?'btn-fill':'btn'">Choose a file</button>
            <input type="file"
                   id="file"
                   ref="file"
                   accept="application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                   v-on:change="onChangeFileUpload()"/>
        </div>
        <v-btn @click="save" color="primary" >Upload</v-btn>
    </div>
</template>
<script>
    export default {
        name: "ExcelRehabilitationCase",
        data() {
            return {
                file: ''
            }
        },
        methods: {
            async save() {
                let formData = new FormData();
                formData.append('excel_file', this.file);
                alert("it take a long time , please  wait ..")
                let data = await this.$store.dispatch('rehabilitation_case/uploadExcel', formData)
                if (data) {
                    alert("success")
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
        border: 2px solid gray;
        color: gray;
        background-color: white;
        padding: 8px 20px;
        border-radius: 8px;
        font-size: 20px;
        font-weight: bold;
        cursor: pointer;
    }
    .btn-fill {
        border: 2px solid #2196F3;
        color: white;
        background-color: #2196F3;
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