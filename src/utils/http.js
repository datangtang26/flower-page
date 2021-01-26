/**
 * http 数据请求
 * 支持：get、post、jsonp
 */

import Axios from 'axios'
import Jsonp from 'jsonp'
import Qs from 'qs'

class Http {
  constructor() {
    this.axios = Axios
  }

  get(url, data = {}, config = {}) {
    
    const configData = Object.assign({
      withCredentials: true,
      timeout: 3000,
      params: data
    }, config);
    return this.axios.get(url, configData)
      .then(res => {
        return res.data
      })
      .catch(err => {
        return err
      })
  }

  post(url, data = {}, config = {}) {
    const configData = Object.assign({
      withCredentials: true,
      timeout: 3000,
      headers: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
      }
    }, config)

    return this.axios.post(url, Qs.stringify(data), configData)
      .then(res => {
        return res.data
      })
      .catch(err => {
        return err
      })
  }

  jsonp(url, data = {}, config = {}) {

    return new Promise((resolve, reject) => {

      url = `${url}${Qs.stringify(data, { addQueryPrefix: true })}`;
      let configData = Object.assign({
        prefix: 'jp',
        param: 'jsoncallback',
        timeout: 3000
      }, config)
      Jsonp(url, configData, function (err, res) {
        if (err) {
          reject(err)
        } else {
          resolve(res)
        }
      })
    })
  }
}

export default new Http()
