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
                    context.dispatch("success/setSuccess", response.data, {root: true});
                    return response.data
                })
                .catch((error) => {
                    context.dispatch("error/setError", {"data": "Invalid"}, {root: true});
                    return null
                })
        },
        async getProbationCase(context, params = null) {
            return await axios.get('api/v1/probation-case/', params = {params})
                .then((response) => {
                    return response.data
                })
                .catch((error) => {
                    context.dispatch("error/setError", error.response.data, {root: true});
                    return null
                })
        },
        async getProbationCaseById(context, id) {
            return await axios.get('api/v1/probation-case/' + id + '/')
                .then((response) => {
                    return response.data
                })
                .catch((error) => {
                    context.dispatch("error/setError", error.response.data, {root: true});
                    return null
                })
        },
        async updateProbationCase(context, params = null) {
            let id = params.id
            return await axios.put('api/v1/probation-case/' + id + '/', params)
                .then((response) => {
                    context.dispatch("success/setSuccess", response.data, {root: true});
                    return response.data
                })
                .catch((error) => {
                    context.dispatch("error/setError", error.response.data, {root: true});
                    return null
                })
        },
        async updateClassification(context, params) {
            let id = params.id
            return await axios.put('api/v1/probation-case-classification/' + id + '/', params)
                .then((response) => {
                    context.dispatch("success/setSuccess", response.data, {root: true});
                    return response.data
                })
                .catch((error) => {
                    context.dispatch("error/setError", error.response.data, {root: true});
                    return null
                })
        },
        async createClassification(context, params) {
            return await axios.post('api/v1/probation-case-classification/', params)
                .then((response) => {
                    context.dispatch("success/setSuccess", response.data, {root: true});
                    return response.data
                })
                .catch((error) => {
                    context.dispatch("error/setError", error.response.data, {root: true});
                    return null
                })
        },
        async deleteClassification(context, id) {
            return await axios.delete('api/v1/probation-case-classification/' + id + '/')
                .then((response) => {
                    context.dispatch("success/setSuccess", response.data, {root: true});
                    return response.data
                })
                .catch((error) => {
                    context.dispatch("error/setError", error.response.data, {root: true});
                    return null
                })
        },

        async updateReporting(context, params) {
            let id = params.id
            return await axios.put('api/v1/probation-case-reporting/' + id + '/', params)
                .then((response) => {
                    context.dispatch("success/setSuccess", response.data, {root: true});
                    return response.data
                })
                .catch((error) => {
                    context.dispatch("error/setError", error.response.data, {root: true});
                    return null
                })
        },
        async createReporting(context, params) {
            return await axios.post('api/v1/probation-case-reporting/', params)
                .then((response) => {
                    context.dispatch("success/setSuccess", response.data, {root: true});
                    return response.data
                })
                .catch((error) => {
                    context.dispatch("error/setError", error.response.data, {root: true});
                    return null
                })
        },
        async deleteReporting(context, id) {
            return await axios.delete('api/v1/probation-case-reporting/' + id + '/')
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