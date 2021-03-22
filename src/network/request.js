import axios from 'axios';

export function request(config){
    const instance = axios.create({
        // baseURL:'mcpe0.cn:31904/',
        baseURL: 'http://111.229.238.150:8188/',
        timeout:5000
    })

    // 请求拦截
    instance.interceptors.request.use(
        config=>{
            // 请求成功

            return config;
        },err=>{

        }
    )

    // 相应拦截
    instance.interceptors.response.use(
        res=>{
            return res.data?res.data:res;
        },err=>{

        }
    )

    return instance(config);
}