import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueParticles from 'vue-particles'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import {ElDatePicker, ElMenu} from 'element-plus'


const app = createApp(App)
app.use(VueParticles);
app.use(store);
app.use(router);
app.mount('#app');
app.use(ElDatePicker);
app.use(ElMenu)