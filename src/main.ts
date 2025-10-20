import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ErrorStackParser from 'error-stack-parser'
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
import App from './App.vue'
import router from './router'
// import { findCodeBySourceMap } from './utils'

const app = createApp(App)
app.use(ElementPlus)
app.use(createPinia())
app.use(router)

app.config.errorHandler = (err: any, vm) => {
  const errorStack = ErrorStackParser.parse(err as Error)
  const jsError = {
    stack_frames: errorStack,
    message: err.message,
    stack: err.stack,
    error_name: err.name,
  }
  vm.$message.error('出发了一个' + err.name + '错误')
  localStorage.setItem('jsErrorList', JSON.stringify(jsError))
  //   findCodeBySourceMap(errorStack[0])
  console.error('stack', errorStack)
}
app.mount('#app')
