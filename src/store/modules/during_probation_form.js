export default {
    namespaced: true,
    actions: {
        async postForm(context, params) {
            return await axios.post('api/v1/during-probation-form/', params)
                .then((response) => {
                    console.log(response.data);
                    return response.data
                }).catch((error) => {
                    console.error(error)
                    return null
                })
        }
    }
}