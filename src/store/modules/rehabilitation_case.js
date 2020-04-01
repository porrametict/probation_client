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
    }
}