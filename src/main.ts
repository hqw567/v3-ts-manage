import { createApp } from 'vue'

import App from './App.vue'

import './styles'
import { setupStore } from './stores'
import { setupRouter } from './router'
import { globalComponents } from '@/utils/registerComponents'

startApp()
async function startApp() {
  const app = createApp(App)

  app.use(globalComponents)

  setupStore(app)

  await setupRouter(app)

  app.mount('#app')
}
