import axios from 'axios'
// import Vue from 'vue'

// if(process.env.NODE_ENV == 'production' && configURL.baseURL) {
//     axios.defaults.baseURL = configURL.baseURL
// }
const network = axios.create()
// axios.defaults.baseURL = 'http://39.105.221.84/'
// const network = axios.create({
//   baseURL: 'http://39.105.221.84/',
//   headers: {
//       'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
//   }
// })
const axiosGet = network.get
// const axiosPost = network.post

// let loading = ''
// const url = new URL(location.href)
// const token = url.serchParams.get('token')
// const accessToken = url.serchParams.get('accessToken')

network.interceptors.request.use(config => {
    // config.headers.common.token = 'token'
    // config.headers.common.accessToken = 'accessToken'
    // loading = Vue.prototype.$loading({
    //     lock: true,
    //     text: 'Loading',
    //     spinner: 'el-icon-loading',
    //     background: 'rgba(0, 0, 0, 0.7)'
    // });
    return config
})

network.interceptors.response.use(response => {
    // loading.close()
    if(response.status == 200) {
        return Promise.resolve(response.data)
    }else if(response.data.code == 2){
        this.$router.push('/error')
    }else {
        return Promise.reject(response.data)
    }
})

// network.post = (url, params, config) => axiosPost(url, Object.assign({params}, config))
network.get = (url, params, config) => axiosGet(url, Object.assign({params}, config))

export default network