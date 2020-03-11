import error from "./error";
import axios from '@/axios';
let loadingState = ['None','OnGoing','Done'];

export default {
    namespaced: true,

    state: {
        isLoad: loadingState[0],
        provinces: []
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
                    context.dispatch("admin/error/setError",error.response.data, {root: true});
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