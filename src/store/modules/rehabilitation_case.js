export default {
    namespaced: true,
    actions: {
        async uploadExcel(context, params) {
            return await axios.post('api/v1/upload-rehabilitation-offenders/',
                params,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            )
                .then((response) => {
                    return response.data
                })
                .catch((error) => {
                    return null
                })
        },
        async getRehabilitationCase(context, params = null) {
            return await axios.get('api/v1/rehabilitation-case/', params = {params})
                .then((response) => {
                    return response.data
                })
                .catch((error) => {
                    console.error(error)
                    return null
                })
        },
        async getRehabilitationCaseById(context,id) {
            return await axios.get('api/v1/rehabilitation-case/'+id+'/')
                .then((response) => {
                    return response.data
                })
                .catch((error) => {
                    console.error(error)
                    return null
                })
        },
    }
}