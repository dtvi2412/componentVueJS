import Vue from 'vue'
import Contact from './components/contact.vue'
import ChuaDuLieu from './App.vue' 
export const eventBus = new Vue();

Vue.component('contact-component',Contact);
new Vue({
  el: '#app',
  render: h => h(ChuaDuLieu)
})
