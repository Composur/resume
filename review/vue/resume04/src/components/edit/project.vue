<template>
    <div>
         <h1>项目经验</h1>
        <el-form :label-positons='labelPosition' :model="projects">
          <div v-for=" project  in projects">
            <el-form-item label="项目名称">
              <el-input v-model="project.school"></el-input>
            </el-form-item>
            <el-form-item label="项目经历">
              <el-input v-model="project.degree"></el-input>
            </el-form-item>
            <el-form-item label="其它">
              <el-input v-model="project.other"></el-input>
            </el-form-item>
          </div>
        </el-form>
    </div>
</template>
<script>
    export default{
        props:['projects']
    }
</script>