import Vue from 'vue'
import Router from 'vue-router'


import Auth from '@okta/okta-vue'


import Hello from '@/components/Hello'

Vue.use(Auth, {
  issuer: 'https://dev-rj26etfcudpvbpn0.us.auth0.com/oauth2/default',
  client_id: 'C9CleDikynO5wVu11K9q9L6sPKIYYz2W',
  redirect_uri: 'http://localhost:8080/implicit/callback',
  scope: 'openid profile email'
})

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/implicit/callback',
      component: Auth.handleCallback()
    },
  ]
})

router.beforeEach(Vue.prototype.$auth.authRedirectGuard())



export default router