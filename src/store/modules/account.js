export default {
    namespaced: true,
    state: {
        user_profile: null
    },
    mutations: {
        setUser(state, data) {
            state.user_profile = data
        }
    },
    actions: {
        async login(context, params) {
            return await axios.post('rest-auth/login/', params)
                .then((response) => {
                    localStorage.setItem('access_token', response.data.key)
                    window.axios.defaults.headers.common['Authorization'] = `Token ${localStorage.getItem('access_token')}`;
                    return response.data
                }).catch((error) => {
                    return null
                });
        },
        async getUser(context) {
            return await axios.get('rest-auth/user-profile/')
                .then((response) => {
                    console.log(response.data)
                    context.commit('setUser', response.data)
                    return response.data
                }).catch((error) => {
                    return null
                });
        },
        logout(context) {
            localStorage.clear()
        }
    },

}