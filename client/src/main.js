import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.js';
import VueCookies from 'vue-cookies';


const app = createApp(App);
app.use(router);
app.use(VueCookies);

app.mount('#app');
