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
      logs: []
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
    setLogs(state, newState) {
      state.logs = newState;
    },
    updateLogs(state, {text, cls}) {
      state.logs.unshift({text, cls});
      console.log(state.logs);
    }
  },
  actions: {},
  getters: {}
})

const app = createApp(App)

// Install the store instance as a plugin
app.use(store)

app.mount('#app')