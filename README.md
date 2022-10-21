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

## 3. 라우터로 페이지 나누기

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
