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