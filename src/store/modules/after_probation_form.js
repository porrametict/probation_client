export default {
    namespaced: true,
    actions: {
        async postForm(context, params) {
            return await axios.post('api/v1/after-probation-form/', params)
                .then((response) => {
                    context.dispatch("success/setSuccess", response.data, {root: true});
                    console.log(response.data);
                    return response.data
                }).catch((error) => {
                    context.dispatch("error/setError", error.response.data, {root: true});
                    return null
                })
        }
    }
}