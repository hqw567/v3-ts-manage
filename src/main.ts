import { createApp } from 'vue'

import App from './App.vue'

import './styles'
import { setupStore } from './stores'
import { setupRouter } from './router'

startApp()
async function startApp() {
  const app = createApp(App)
  setupStore(app)
  await setupRouter(app)
  app.mount('#app')
}
