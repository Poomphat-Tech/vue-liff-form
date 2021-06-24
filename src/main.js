import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';

import App from './App.vue';
import './index.css';

import Survey from './components/survey/Survey.vue';
import ThankYou from './components/thankyou/ThankYou.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: Survey },
    { path: '/thankyou', component: ThankYou },
  ],
});

const app = createApp(App);
app.use(router);
app.mount('#app');
