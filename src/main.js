import './assets/main.css'
import App from './App.vue'

import { createApp } from 'vue'
import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state() {
    return {
      running: false,
      playerLife: 100,
      monsterLife: 100,
    }
  },
  mutations: {
    setPlayerLife(state, life) {
      state.playerLife = life;
    },
    setMonsterLife(state, life) {
      state.monsterLife = life;
    },
    setRunning(state, newState) {
      state.running = newState;
    },
  },
  actions: {},
  getters: {}
})

const app = createApp(App)

// Install the store instance as a plugin
app.use(store)

app.mount('#app')