import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import 'uikit/dist/css/uikit.min.css'
import '@/assets/styles/fonts.css'
import '@/assets/styles/general.css'
import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'

UIkit.use(Icons)

const app = createApp(App)
app.use(router)
app.mount('#app')
