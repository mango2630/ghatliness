import {request} from './request'

export function getRegisterData(){
    return request({
        url : '/register/getuser',
        method : 'post',

        // 传参数
        // params:{}
    })
}
