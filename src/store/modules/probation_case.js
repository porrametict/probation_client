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
                    return null
                })
        }
    }
}