<template>
     <div>
         <h1>个人信息</h1>
                     <el-form :label-position="labelPosition"  :model="profile" >
                      <el-form-item label="姓名">
                        <el-input v-model="profile.name"></el-input>
                      </el-form-item>
                      <el-form-item label="年龄">
                        <el-input v-model="profile.age"></el-input>
                      </el-form-item>
                      <el-form-item label="地址">
                        <el-input v-model="profile.city"></el-input>
                      </el-form-item>
                    </el-form>
     </div>
</template>
<script>
    export default{
        props:['profile']
    }
</script>
