<template>
    <div id="Preview" class="preview" v-model:profile="profile">
    <h1>test</h1>
    </div>
</template>


<script>
// 传入数据
import test from './Edit'
    export default{
        props:['profile','experience','educated','projects','winning','other']
    }
</script>

<style>
.preview {
  -webkit-box-shadow: 2px 2px 2px 2px #ccc;
  -moz-box-shadow: 2px 2px 2px 2px #ccc;
  box-shadow: 2px 2px 2px 2px #ccc;
}
</style>
