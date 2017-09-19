/**
 * axios  Ajax封装
 */
import axios from 'axios'
import querystring  from 'querystring'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.baseURL = 'http://iot.ideyee.com';
export function fetch(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, querystring.stringify(params))
        .then(response => {
            resolve(response.data);
        })
        .catch((error) => {
            reject(error);
        })

    })
}
export default {
    commonApi(url, params,type) {
        return fetch(url, params,type)
    }
}
