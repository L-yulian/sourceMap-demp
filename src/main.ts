import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ErrorStackParser from 'error-stack-parser'
import App from './App.vue'
import router from './router'
import { findCodeBySourceMap } from './utils'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.config.errorHandler = (err) => {
  const errorStack = ErrorStackParser.parse(err as Error)
  findCodeBySourceMap(errorStack[0])
  console.error('stack', errorStack)
}
app.mount('#app')
