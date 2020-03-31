export default {
    namespaced: true,
    actions: {
        async uploadExcel(context, params) {
            return await axios.post('api/v1/upload-probation-offenders/',
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
                    console.error(error)
                    return null
                })
        },
        async getProbationCase(context, params = null) {
            return await axios.get('api/v1/probation-case/', params = {params})
                .then((response) => {
                    return response.data
                })
                .catch((error) => {
                    console.error(error)
                    return null
                })
        },
        async getProbationCaseById(context,id) {
            return await axios.get('api/v1/probation-case/'+id+'/')
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