import Vue from "vue"
import axios from "axios"

let instance = axios.create({                                                                                                                                 
    timeout:2000,//请求超过n秒，会报失败                                                       
})

// request:请求
instance.interceptors.request.use((config)=>{
    console.log(config);
    // 判断是否等于生产环境，否则走开发路线
    if( process.env.NODE_ENV == 'production'){
        // 重置别的请求路径
        config.baseURL = "https://eip.btte.net"
    }else{
        config.baseURL = "http://localhost:8080"
    }
    return config;
},(err)=>{
    // 返回错误
    return Promise.reject(err)
    // console.log(err)
})

// 响应拦截
instance.interceptors.response.use((response)=>{
    console.log(response);
    // 判断数据响应是否成功，否则返回response 404 500 ......
    if(response.status == 200){
        return response.data
    }else{
        return Promise.reject(response)
    }  
    return response
},(err)=>{
        return Promise.reject(err)
        // console.log(err)
})

// 插件 就是一个对象
let httpPlugin = {
    install(Vue){
         Object.defineProperty(Vue.prototype,"$http",{
              value:instance
         })
    }
}

// instance 挂载到Vue原型上
// Object.defineProperty(Vue.prototype,"$http",{
//     value:instance
// })
// 防止$http在将来被覆盖
// 只读的，不可修改，不会被覆盖
export { instance }
export default httpPlugin; 