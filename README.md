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

1. vue 프로젝트 생성

```
vue create vuelog
```

2. 부트스트랩 설치
   https://getbootstrap.com/

```
[1] npm install bootstrap@5.2.2

[2] import > main.js
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
```

2. 라우터로 페이지 나누기

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
# vueblog
