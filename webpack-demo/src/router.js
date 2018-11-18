import VueRouter from 'vue-router'


import account from './main/account.vue'
import product from './main/product.vue'
import login from './subcom/login.vue'
import register from './subcom/register.vue'

var router = new VueRouter({
    routes: [{
            path: '/account',
            component: account,
            children: [{
                    path: 'login',
                    component: login
                },
                {
                    path: 'register',
                    component: register
                }
            ]
        },
        {
            path: '/product',
            component: product
        }
    ]
})

export default router