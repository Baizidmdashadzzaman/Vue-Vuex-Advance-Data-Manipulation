import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import JwPagination from 'jw-vue-pagination';

createApp(App).use(store).use(JwPagination).use(router).mount('#app')
