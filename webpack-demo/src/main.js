import Vue from 'vue'

// import Vue from '../node_modules/vue/dist/vue.js'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import app from './app.vue'
import router from './router.js'

var vm = new Vue({
    el: '#app',
    data: {
        msg: 123
    },
    methods: {},
    render: c => c(app),
    router
})

// import test,{user,user2} from './test.js'
// console.log(test)
// console.log(user)
// console.log(user2)