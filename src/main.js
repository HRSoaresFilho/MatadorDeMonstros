import './assets/main.css'
import App from './App.vue'

import { createApp } from 'vue'
import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      count: 0
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

const app = createApp(App).mount('#app')

// Install the store instance as a plugin
app.use(store)