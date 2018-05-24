<template>
   <div>
        <h1>工作经历</h1>
    <el-form :label-positons='labelPosition' :model="experience">
    <div v-for="(work,index)  in experience" v-bind:key="index">
        <el-button type="danger" icon="el-icon-delete" size='small' circle v-on:click="romoveExperience(index)"></el-button>
        <!--  v-bind:key="key" -->
        <el-form-item  label='公司名称' v-bind:key="key">
        <el-input v-model="work.company"></el-input>
        </el-form-item>
        <el-form-item label="职位名称">
        <el-input v-model="work.jobTitle"></el-input>
        </el-form-item>
        <el-form-item label="主要职责">
        <el-input v-model="work.jobDetail"></el-input>
        </el-form-item>
    </div>
    </el-form>
    <el-button type="primary" v-on:click="addExperience()">添加</el-button>
   </div>
</template>
<script>
export default {
  props: ["experience", "labels"],
  // 需要弄明白
  computed: {
    keys() {
      return Object.keys(this.experience[0]);
    }
  },
  methods: {
    addExperience() {
      this.experience.push({
        company: "",
        jobTitle: "",
        jobDetail: ""
      });
    },
    romoveExperience(index) {
      this.experience.splice(index, 1);
    }
  }
};
</script>