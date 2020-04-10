export default {
    namespaced: true,
    actions: {
        uploadExcel: async function (context, params) {
            return await axios.post('api/v1/upload-rehabilitation-offenders/',
                params,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            )
                .then((response) => {
                    context.dispatch("success/setSuccess", response.data, {root: true});
                    return response.data
                })
                .catch((error) => {
                    context.dispatch("error/setError", {"data": "Invalid"}, {root: true});
                    return null
                })
        },
        async getRehabilitationCase(context, params = null) {
            return await axios.get('api/v1/rehabilitation-case/', params = {params})
                .then((response) => {
                    return response.data
                })
                .catch((error) => {
                    context.dispatch("error/setError", error.response.data, {root: true});
                    return null
                })
        },
        async getRehabilitationCaseById(context, id) {
            return await axios.get('api/v1/rehabilitation-case/' + id + '/')
                .then((response) => {
                    return response.data
                })
                .catch((error) => {
                    context.dispatch("error/setError", error.response.data, {root: true});
                    return null
                })
        },
        async updateRehabilitationCase(context, params = null) {
            let id = params.id
            return await axios.put('api/v1/rehabilitation-case/' + id + '/', params)
                .then((response) => {
                    context.dispatch("success/setSuccess", response.data, {root: true});
                    return response.data
                })
                .catch((error) => {
                    context.dispatch("error/setError", error.response.data, {root: true});
                    return null
                })
        },

        async updateSSH(context, params) {
            let id = params.id
            return await axios.put('api/v1/rehabilitation-case-ssh/' + id + '/', params)
                .then((response) => {
                    context.dispatch("success/setSuccess", response.data, {root: true});
                    return response.data
                })
                .catch((error) => {
                    context.dispatch("error/setError", error.response.data, {root: true});
                    return null
                })
        },

        async createSSH(context, params) {
            return await axios.post('api/v1/rehabilitation-case-ssh/', params)
                .then((response) => {
                    context.dispatch("success/setSuccess", response.data, {root: true});
                    return response.data
                })
                .catch((error) => {
                    context.dispatch("error/setError", error.response.data, {root: true});
                    return null
                })
        },
        async deleteSSH(context, id) {
            return await axios.delete('api/v1/rehabilitation-case-ssh/' + id + '/')
                .then((response) => {
                    context.dispatch("success/setSuccess", response.data, {root: true});
                    return response.data
                })
                .catch((error) => {
                    context.dispatch("error/setError", error.response.data, {root: true});
                    return null
                })
        },


        async updateRehabilitation(context, params) {
            let id = params.id
            return await axios.put('api/v1/rehabilitation-case-rehabilitation/' + id + '/', params)
                .then((response) => {
                    context.dispatch("success/setSuccess", response.data, {root: true});
                    return response.data
                })
                .catch((error) => {
                    context.dispatch("error/setError", error.response.data, {root: true});
                    return null
                })
        },

        async createRehabilitation(context, params) {
            return await axios.post('api/v1/rehabilitation-case-rehabilitation/', params)
                .then((response) => {
                    context.dispatch("success/setSuccess", response.data, {root: true});
                    return response.data
                })
                .catch((error) => {
                    context.dispatch("error/setError", error.response.data, {root: true});
                    return null
                })
        },
        async deleteRehabilitation(context, id) {
            return await axios.delete('api/v1/rehabilitation-case-rehabilitation/' + id + '/')
                .then((response) => {
                    context.dispatch("success/setSuccess", response.data, {root: true});
                    return response.data
                })
                .catch((error) => {
                    context.dispatch("error/setError", error.response.data, {root: true});
                    return null
                })
        },

    }
}