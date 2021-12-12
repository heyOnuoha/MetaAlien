
import Etheruem from "./Etheruem";

export default {

    install(Vue) {

        Vue.prototype.$eth = new Vue(Etheruem)
    }
}