import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import vuetify from './plugins/vuetify'
import vuelidate from 'vuelidate'
import firebase from 'firebase'

Vue.use(vuelidate)
Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: 'AIzaSyBq8LnIn8FA_0Hj9Elm-Me6y9nOJvUz-k4',
  authDomain: 'fb-send-email.firebaseapp.com',
  databaseURL: 'https://fb-send-email.firebaseio.com',
  projectId: 'fb-send-email',
  storageBucket: 'fb-send-email.appspot.com',
  messagingSenderId: '1046629201894',
  appId: '1:1046629201894:web:5a524da6356d172f3a4827'
})
export const db = firebase.firestore()

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
