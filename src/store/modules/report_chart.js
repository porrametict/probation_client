export default  {
    namespaced : true,
    actions : {
        async getCaseType(context, params) {
            return await axios.get('api/v1/report-chart/case-type/', params = {params})
                .then((response) => {
                    return response.data
                }).catch((error) => {
                    context.dispatch("error/setError", error.response.data, {root: true});
                    return null
                });
        },
        async getAssignmentStatus(context, params) {
            return await axios.get('api/v1/report-chart/assignment-status/', params = {params})
                .then((response) => {
                    return response.data
                }).catch((error) => {
                    context.dispatch("error/setError", error.response.data, {root: true});
                    return null
                });
        },
        async getOffenderByProvince(context, params) {
            return await axios.get('api/v1/report-chart/offender-by-province/', params = {params})
                .then((response) => {
                    return response.data
                }).catch((error) => {
                    context.dispatch("error/setError", error.response.data, {root: true});
                    return null
                });
        },
    }
}