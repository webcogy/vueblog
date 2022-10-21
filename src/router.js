import { createWebHistory, createRouter } from "vue-router";
import ListComponent from './components/ListComponent.vue'
import Home from './components/Home.vue'
import Detail from './components/Detail.vue'
import Error404Component from './components/Error404Component.vue'

const routes = [
  {
    path: "/detail/:id", // : => 아무 문자나 들어오면~
    // path: "/detail/:id(\\d+)" => 정규식 적용 ( 숫자만 넣는다는 등 )
    // path: "/detail/:id*" => 입력 반복 ( ex) /:id/:id2/:id3
    component: Detail,
  },
  {
    path: "/",
    component: Home,
  },
  {
    path: "/list",
    component: ListComponent,
  },
  {
    path: "/:anything(.*)", // 모든 페이지에 적용, 하지만 아래의 순서에 있기 때문에 위에 작성한 컴포넌트가 먼저 적용된다. 그래서 위의 페이지가 모두 적용되지 않을 경우 이 페이지를 뿌려주기 때문에 404페이지가 가능해지는 것임.
    component: Error404Component,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 