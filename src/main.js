import { createApp } from 'vue'
import App from './App.vue'
import router from './router'




const app = createApp(App)
app.use(router).mount('#app')

// createApp({

//     // ここに各種設定

// }).mount('#app');

