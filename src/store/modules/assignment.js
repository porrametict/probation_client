export default {
    namespaced: true,
    state: {
        user: null
    },
    mutations: {},
    actions: {
        async getAssignment(context, params) {
            return await axios.get('api/v1/assignment/', params = {params})
                .then((response) => {
                    return response.data
                }).catch((error) => {
                    context.dispatch("error/setError", error.response.data, {root: true});
                    return null
                });
        },
        async getAssignmentById(context, id) {
            return await axios.get(`api/v1/assignment/${id}/`)
                .then((response) => {
                    return response.data
                }).catch((error) => {
                    context.dispatch("error/setError", error.response.data, {root: true});
                    return null
                });
        },
        async updateAssignment(context, params) {
            let id = params.id
            return await axios.put(`api/v1/assignment/${id}/`, params)
                .then((response) => {
                    context.dispatch("success/setSuccess", response.data, {root: true});
                    return response.data
                }).catch((error) => {
                    context.dispatch("error/setError", error.response.data, {root: true});
                    return null
                });
        },
        async createAssignment(context, params) {
            return await axios.post(`api/v1/assignment/`, params)
                .then((response) => {
                    context.dispatch("success/setSuccess", response.data, {root: true});
                    return response.data
                }).catch((error) => {
                    context.dispatch("error/setError", error.response.data, {root: true});
                    return null
                });
        },
        async getOldForm(context, params) {
            return await axios.get(`api/v1/get-old-form/`, params = {params})
                .then((response) => {
                    return response.data
                }).catch((error) => {
                    context.dispatch("error/setError", error, {root: true});
                    return null
                });
        },
        async getPDFForm(context, params) {
            return await axios.get(`api/v1/survey-pdf/`, params = {params})
                .then((response) => {
                    let link = 'api/v1/survey-pdf/'
                    let params_text = `?form_id=${params.params.form_id}&form_type=${params.params.form_type}&download=${params.params.download}`
                    context.dispatch('downloadDataUrlFromJavascript',{"dataUrl" :`${process.env.VUE_APP_BASE_BACKEND_URL}${link}${params_text}`,filename : "cat"})
                    return response.data
                }).catch((error) => {
                    context.dispatch("error/setError", error, {root: true});
                    return null
                });
        },
        downloadDataUrlFromJavascript(context, {filename, dataUrl}) {
            console.log(dataUrl,"data")
            console.log(filename,"cat")
            // Construct the 'a' element
            var link = document.createElement("a");
            link.download = filename;
            link.target = "_blank";

            // Construct the URI
            link.href = dataUrl;
            document.body.appendChild(link);
            link.click();

            // Cleanup the DOM
            document.body.removeChild(link);
            link = null
        }
    },
    getters: {
        getFormType: (state) => (id) => {
            return id == 1 ? 'ระหว่างการควบคุม' : 'หลังปล่อยควบคุม'
        },
        getAssignmentStatus: (state) => (id) => {
            if (id == 1) {
                return "รอ อสค. ยืนยัน"
            } else if (id == 2) {
                return "อสค. ปฏิเสธ"
            } else if (id == 3) {
                return "กำลังดำเนินการ"
            } else if (id == 4) {
                return "เสร็จสิ้น"
            }
        },
    }

}