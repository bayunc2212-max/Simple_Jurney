import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { fadeViewport, fadeDownViewport } from './directives'
import './assets/css/tailwind.css'
import './assets/css/index-ffUjCuH-.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.directive('fade-viewport', fadeViewport)
app.directive('fade-down-viewport', fadeDownViewport)
app.mount('#app')