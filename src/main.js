import { createApp } from 'vue';
import store from './store/store';
import { createPrismic } from "@prismicio/vue";
import { createRouter, createWebHistory } from 'vue-router';


import App from './App.vue';
import Main from './Main.vue';
import otherPage from './otherPage.vue';

const routes = [
  { path: '/', name:'home', component: Main },
  { path: '/what-we-do', name:'what we do', component: otherPage },
  { path: '/digital-divide', name:'digital divide', component: otherPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const prismic = createPrismic({
    endpoint: "https://reason-digital.cdn.prismic.io/api/v2",
  });

const app = createApp(App);

app.use(store); 
app.use(router);
app.use(prismic);
app.mount('#app');