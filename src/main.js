import { createApp } from 'vue';
import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router';

import App from './App.vue';
import './index.css';

import SurveyPage from './components/survey/Survey.vue';
import ThankYouPage from './components/thankyou/ThankYou.vue';
import ErrorPage from './components/error/Error.vue';

const router = createRouter({
  history: createWebHashHistory('/'),
  routes: [
    { path: '/', component: SurveyPage },
    { path: '/thankyou', component: ThankYouPage },
    { path: '/error', component: ErrorPage },
  ],
});

const app = createApp(App);
app.use(router);
app.mount('#app');
