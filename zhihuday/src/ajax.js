/**
 * Created by yatessss on 16/6/22.
 */
import Vue from 'vue'


module.exports = (params) => {
  // Vue.http.options.headers = {
  //     'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8;'
  //   }
  //   // Vue.http.options.xhr = {
  //   //   withCredentials: true
  //   // }
  // Vue.http.options.emulateJSON = true
  // Vue
  //   .http({
  //     url: params.url,
  //     method: params.method,
  //     data: params.data || {}
  //   })
  //   .then((response) => {
  //     let data = response.data
  //     params.callback(data)
  //   }, (response) => {
  //     // error callback
  //   })
console.log(params.url);
  mui.ajax({
    headers:{'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8;'},
    crossDomain: true,
    type: params.method,
    url:'http:192.168.1.4:8300'+params.url,
    data: params.data || {},
    success: (response) => {
      console.log(response);
      let data = response
      params.callback(data)
    }


  })
}