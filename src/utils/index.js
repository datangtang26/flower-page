import Http from './http.js'

export default {
  install: (Vue) => {
    //  http封装
    Object.defineProperty(Vue.prototype, "$http", {
      value: Http
    });
  }
};
