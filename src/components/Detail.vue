<template>

    <!-- URL에 입력한 숫자 가져오기 -->
    {{$route.params.id}} 

    <h1>디테일</h1>
    <h5>{{blogData[0].title}}</h5>
    <h5>{{blogData[0].content}}</h5>
</template>

<script>
export default {
    name:'detailComponent',
    props:{
        blogData:Array,
    }
}
</script>

<style>

</style>