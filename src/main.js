import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import uiComponents from '@/components/UI'

const app = createApp(App)

uiComponents.forEach(component => {
    app.component(component.name, component)
})

app.use(store).use(router).mount('#app')
