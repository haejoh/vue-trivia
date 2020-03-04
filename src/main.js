import Vue        from 'vue';
import App        from './App.vue';
import VueRouter  from 'vue-router';
import Home       from './views/Home.vue';
import Highscores from './views/Highscores.vue';
import About      from './views/About.vue';
import Gameplay   from './views/GamePlay.vue';

Vue.config.productionTip = false;

const routes = [
  { path: '/',           name: 'home',       component: Home},
  { path: '/highscores', name: 'highscores', component: Highscores},
  { path: '/about',      name: 'about',      component: About},
  { path: '/gameplay',   name: 'gameplay',   component: Gameplay}
];

Vue.use(VueRouter);

const router = new VueRouter({routes});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
