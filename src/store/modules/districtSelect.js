//import error from "./error";

let loadingState = ['None','OnGoing','Done'];

export default {
    namespaced: true,

    state: {
        isLoad: loadingState[0],
        provinces: null
    },
    mutations: {
        setProvinces: function (state, provinces) {
            state.provinces = provinces;
        }
    },
    actions: {
        load: async function (context) {
            context.state.isLoad = loadingState[1];
            let result = await axios.get("/api/v1/provinces",
                {params: {all: true}})
                .then((response) => {
                    return response.data;
                })
                .catch( (error) =>{
                    console.log("error-province-vuex")
                })
            context.state.isLoad = loadingState[2];
            context.commit("setProvinces", result);
        },
        getProvinces: async function (context) {
            if (context.state.isLoad == loadingState[0]) {
                await context.dispatch("load")
            }
            return context.state.provinces;
        }
    }
}