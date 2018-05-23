<template>
    <div>
        <h1>教育经历</h1>
    <el-form :label-positons='labelPosition' :model="educated">
      <div v-for="educated  in educated">
                <el-button type="danger" icon="el-icon-delete" size='small' circle v-on:click="romoveExperience(index)"></el-button>
        <el-form-item label="学校名称">
          <el-input v-model="educated.school"></el-input>
        </el-form-item>
        <el-form-item label="学历">
          <el-input v-model="educated.degree"></el-input>
        </el-form-item>
        <el-form-item label="时间">
          <el-input v-model="educated.duration"></el-input>
        </el-form-item>
        <el-form-item label="其它">
          <el-input v-model="educated.other"></el-input>
        </el-form-item>
      </div>
    </el-form>
        <el-button type="primary" v-on:click="addExperience">添加</el-button>

    </div>
</template>
<script>
export default {
  props: ["educated"],
  methods:{
      addExperience(){
        this.educated.push({school:'tinghua',degree:'本科',duration:'' ,other:'其它'})
      },
      romoveExperience(index){
        this.educated.splice(index,1)
      }   
  }
};

</script>
