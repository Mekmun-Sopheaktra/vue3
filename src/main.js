import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import '@/assets/scss/app.scss';
import '@/style/less/index.less';
import 'tdesign-vue-next/es/style/index.css';

const app = createApp(App);

app.use(router);
app.use(store);

app.mount('#app');
