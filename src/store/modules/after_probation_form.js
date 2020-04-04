export default {
    namespaced: true,
    actions: {
        async postForm(context, params) {
            let data = await context.dispatch('preparing_data', params)
            return await axios.post('api/v1/after-probation-form/', data,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data; boundary=HereGoes'
                    }
                })
                .then((response) => {
                    context.dispatch("success/setSuccess", response.data, {root: true});
                    return response.data
                }).catch((error) => {
                    context.dispatch("error/setError", error.response.data, {root: true});
                    return null
                })
        },
        async putForm(context, params) {
            let data = await context.dispatch('preparing_data', params)
            return await axios.post(`api/v1/after-probation-form/`, data,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data; boundary=HereGoes'
                    }
                })
                .then((response) => {
                    context.dispatch("success/setSuccess", response.data, {root: true});
                    return response.data
                }).catch((error) => {
                    context.dispatch("error/setError", error.response.data, {root: true});
                    return null
                })
        },
        async preparing_data(context, params) {
            const data = new FormData();
            if (params['form']['map_image']) {
                let img_type = params['form']['map_image'][0]['type']
                let b64_image = params['form']['map_image'][0]['content']
                params['form']['map_image'][0]['content'] = ""
                let map_image = await context.dispatch('b64toBlob', {dataURI: b64_image, img_type: img_type})
                data.append("map_image", map_image);
            }
            const json = JSON.stringify(params);
            const blob = new Blob([json], {
                type: 'application/json'
            });
            data.append("form", blob);
            return data
        },
        b64toBlob(context, data) {
            let dataURI = data.dataURI
            let img_type = data.img_type
            let byteString = atob(dataURI.split(',')[1]);
            let ab = new ArrayBuffer(byteString.length);
            let ia = new Uint8Array(ab);

            for (let i = 0; i < byteString.length; i++) {
                ia[i] = byteString.charCodeAt(i);
            }
            return new Blob([ab], {type: img_type});
        }
    }
}