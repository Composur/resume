<template>
    <div id="Preview" class="preview">
        <h1>{{resume.profile.name}}</h1>
        <p>{{resume.profile.city}} {{resume.profile.age}}</p>
        <section v-if="resume.experience.length>0"><br>
           <h2>项目</h2>
           <ul>
               <li v-for="project in resume.experience">
                   {{project.company}} |  {{project.jobTitle}} 
                   {{project.jobDetail}} | 
               </li>
           </ul>
        </section>
        <el-button class="primary" type='primary' v-on:click="quitResume()">退出预览</el-button>
    </div>
</template>


<script>
// 传入数据
export default {
  props: ["resume"],
  methods: {
    //   加一层过滤,返回非空对象
    filter(array) {
        // 返回不为空的新数组
      return array.filter(item => !this.isEmpty(item));
    },
    isEmpty(array) {
      //    如果为空 返回true
      let empty = true;
      for (item in array) {
        if (array[item]) {
          empty = false;
          break;
        }
      }
      return empty;
    },
    quitResume(){
        this.$emit('preview')
    }
  }
};
</script>

<style>
.preview {
  -webkit-box-shadow: 2px 2px 2px 2px #ccc;
  -moz-box-shadow: 2px 2px 2px 2px #ccc;
  box-shadow: 2px 2px 2px 2px #ccc;
}
.primary{
    display: none;
    position:absolute;
    top: 4em;
    right: 4em;
}
</style>
