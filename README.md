# vuelog

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

---

## 1. vue 프로젝트 생성

```
vue create vuelog
```

## 2. 부트스트랩 설치

https://getbootstrap.com/

```
[1] npm install bootstrap@5.2.2

[2] import > main.js
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
```

## 3. 라우터로 페이지 나누기 + 페이지 이동하기

```
// 0. 라우터설치
npm install vue-router@4

// 1. router.js 만들어서 라우터 설정

// 2. main.js 에 use(라우터명)으로 라우터 연결해주기
import routerItem from './router.js'
createApp(App).use(routerItem).mount('#app')

// 3. 등록하기 (App.vue)
<router-link to="/">홈</router-link>
<router-link to="/list">리스트 페이지</router-link>

<!-- // localhost:8080/list -->
<router-view :blogData="blogData"></router-view>
```

## 4. 나눈 페이지를 URL에 있는 숫자로 적용하기 (detail/:id)

```
// 1. router.js 만들어서 라우터 설정

const routes = [
  {
    path: "/detail/:id", // : => 아무 문자나 들어오면~
    component: Detail,
  },
]

// 2. http://localhost:8080/Detail/2 로 접속

// 3.  Detail.vue에서 URL에 입력한 숫자 가져오기
{{$route.params.id}} // 여기에 2가 뿌려짐
{{$route.params}}    // 여러개의 파라미터를 모두 받아와야하기 때문에 params라고 명칭되어 있음 => ex) "/detail/:id/:id2/id3"

// path: "/detail/:id(\\d+)" => 정규식 적용 ( 숫자만 넣는다는 등 )
// path: "/detail/:id*" => 입력 반복 ( ex) /:id/:id2/:id3
```

## 5. error404 페이지 만들기

```
const routes = [
   {
      path: "/:anything(.*)", // 모든 페이지에 적용, 하지만 아래의 순서에 있기 때문에 위에 작성한 컴포넌트가 먼저 적용된다. 그래서 위의 페이지가 모두 적용되지 않을 경우 이 페이지를 뿌려주기 때문에 404페이지가 가능해지는 것임.
      component: Error404Component,
   },
]
```

## 6. 라우터안에 라우터 만들기 (children)

ex) /detail/0/author

```
const routes = [
  {
    component: Detail,
    children:[ // route안에 route
      {
        path: "author", // ex) detail/0/author    ※ 주의: 상대경로로 적어줘야한다  (/ 슬러쉬삽입 x )
        component: Author,
      },
  }
]
```

## 7. 라우터 이용해 페이지 이동하기

```
<h5 @click="$router.push('/detail/0')">{{blogData[0].title}}</h5>
```

- $route => 현재 url을 의미
- $router => 페이지 이동 or 페이지 자체를 의미

ex) $route => $route.params.id (파라미터 전체), $route.fullPath (현재경로)<br>
ex) $router => $router.go(-1) (뒤로가기), $router.push('/경로') (경로로 이동)

## 8. 그 밖의 라우터 기능들

1. Hash mode vs HTML5 mode

```
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
```

createWebHistory() X, createWebHashHistory() O<br>
이렇게 설정해놓는건데 이걸 Hash mode라고 합니다.<br>
이걸 선택하시면 URL에 전부 #이 붙은 채로 시작합니다.<br>
codingapple.com/#/detail 이런 식입니다<br>
<br><br>

- HTML5 mode를 선택한 경우<br>
  누군가 /detail 이라고 URL란에 입력하면 실은 이건<br>
  Vue router로 /detail을 보여주세요~가 아니라<br>
  서버에 /detail 페이지를 요청해주세요~ 라는 뜻입니다. <br>
  그래서 Vue가 라우팅을 해주기 전에 서버가 /detail 페이지를 보여주려고 할 수도 있습니다.<br>
  근데 서버에 아무 기능을 개발안해놨으니 404페이지가 뜨거나 그럴 수 있습니다. <br>
  그래서 이걸 방지하려면 서버에다가 "어떤 사람이 /어쩌구로 접속하면 그냥 Vue에게 라우팅 맡겨주세요~" 라고 미리 기능개발이 필요합니다. <br>
  <br><br>
- Hash mode를 선택한 경우<br>
  hash mode의 장점은 일단 URL에 #이 붙은 채로 시작합니다.<br>
  codingapple.com/#/ 이게 메인페이지입니다. <br>
  왜 # 이걸 붙이냐면 URL에서 # 뒤에 있는 내용들은 절대 서버로 전달되지 않아서 그렇습니다.<br>
  그래서 서버가 라우팅을 채가는 일을 방지할 수 있고<br>
  Vue router에게 온전히 라우팅을 맡길 수 있는 것입니다. <br>
  그래서 님들이 서버가 없으면 # 붙는 hash 라우터로 사이트를 만드는 것도 좋은 선택입니다. <br>

```
const routes = [
  {
    path: "/hello",
    component: HelloWorld,
    beforeEnter: ()=>{
      if (로그인했냐 == false) { // 로그인했냐 == 쿠키나 로컬스토리지에 담긴 로그인 정보를 가져오는 것임
        return '/login'
      }
    }
  }
];
```

- 여러개의 route에 같은 navigation guard를 추가하고 싶으면
  router라는 변수에다가 .beforeEach() 이런거 쓰시면 됩니다.<br>
  내부엔 함수가 들어가는데 사용법은 아까랑 똑같습니다.

```
const router = createRouter({ 어쩌구 })
router.beforeEach((to, from) => {
  //페이지 변경 전에 실행할 코드
})
```

라우팅 전에 뭔가 실행하고 싶으면 beforeEach() 혹은 beforeResolve()를 쓰면 되고 라우팅 하고나서 뭔가 실행하고 싶으면 afterEach() 쓰면 됩니다.

- Vue 컴포넌트 안에서도 navigation guard 쓸 수 있음
  vue 파일 안에서도 페이지 이동시 뭔가 코드를 실행가능합니다.<br>
  created() mounted() 이런거랑 비슷하게 활용가능합니다.

```
beforeRouteEnter(){}
beforeRouteUpdate(){}
```
