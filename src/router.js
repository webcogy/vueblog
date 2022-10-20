import { createWebHistory, createRouter } from "vue-router";
import ListComponent from './components/ListComponent.vue'
import Home from './components/Home.vue'

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/list",
    component: ListComponent,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 