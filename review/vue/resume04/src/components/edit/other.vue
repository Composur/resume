<template>
    <div>
         <h1>其它</h1>
                 <el-form :label-positons='labelPosition' :model="other">
                   <div v-for="educated  in other">
                      <el-form-item label="学校名称">
                        <el-input v-model="educated.school"></el-input>
                      </el-form-item>
                      <el-form-item label="学历">
                        <el-input v-model="educated.degree"></el-input>
                      </el-form-item>
                      <el-form-item label="其它">
                        <el-input v-model="educated.other"></el-input>
                      </el-form-item>
                   </div>
                  </el-form>
    </div>
</template>
<script>
    export default{
        props:['other']
    }
</script>