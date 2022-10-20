<template>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">{{blogData[0].number}}</th>
                <td>{{blogData[0].title}}</td>
                <td>{{blogData[0].content}}</td>
                <td>{{blogData[0].date}}</td>
            </tr>
            <tr>
                <th scope="row">{{blogData[1].number}}</th>
                <td>{{blogData[1].title}}</td>
                <td>{{blogData[1].content}}</td>
                <td>{{blogData[1].date}}</td>
            </tr>
            <tr>
                <th scope="row">{{blogData[2].number}}</th>
                <td>{{blogData[2].title}}</td>
                <td>{{blogData[2].content}}</td>
                <td>{{blogData[2].date}}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    name:'ListComponent',
    props:{
        blogData:Array,
    }
}
</script>

<style>

</style>