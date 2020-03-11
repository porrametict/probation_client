export default {
    namespaced: true,
    state: {
        user: null
    },
    mutations: {},
    actions: {
        async getAssignment(context, params) {
            return await axios.get('api/v1/assignment/', params)
                .then((response) => {
                    return response.data
                }).catch((error) => {
                    return null
                });
        },
        async getAssignmentById(context, id) {
            return await axios.get(`api/v1/assignment/${id}/`, )
                .then((response) => {
                    return response.data
                }).catch((error) => {
                    return null
                });
        },
    },
    getters : {
        getFormType : (state)=>(id)=> {
            return id == 1 ? 'ระหว่างการควบคุม' : 'หลังปล่อยควบคุม'
        }
    }

}