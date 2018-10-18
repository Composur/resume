<template>
    <div>
         <h1>获奖经历</h1>
                 <el-form :label-positons='labelPosition' :model="winning">
                   <div v-for="educated  in winning">
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
        props:['winning'],
        computed:{
          keys(){
            return Object.keys(this.educated[0])
          }
        }
    }
</script>