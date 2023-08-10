import type { App } from 'vue'
import { elementIcon } from './elementIcon'

export const globalComponents = {
  install(app: App) {
    elementIcon(app)
  },
}
