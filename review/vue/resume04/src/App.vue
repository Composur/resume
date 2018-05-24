<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <Topbar class="topbar"/>
    <main>
        <Edit class="edit" v-bind:resume="resume"/>
        <Preview class="preview"/>
    </main>
  </div>
</template>

<script>
import Topbar from "./components/Topbar";
import Edit from "./components/Edit";
import Preview from "./components/Preview";

export default {
  data(){
    return{
      resume:{
         profile: {
        name: '',
        age: '',
        city: ''
      },
      experience:[{company:'baidu',jobTitle:'dev',jobDetail:'tester'}],
      educated:[{school:'tinghua',degree:'本科',duration:'' ,other:'其它'}],
      projects:[{school:'tinghua',degree:'本科',duration:'' ,other:'其它'}],
      winning:[{school:'tinghua',degree:'本科',duration:'' ,other:'其它'}],
      other:[{school:'tinghua',degree:'本科',duration:'' ,other:'其它'}],

      },
    }
  },
  name: "App",
  components: {
    Topbar,
    Edit,
    Preview
  }
};
</script>

<style>
html,body{
  height: 100%;
}
#app{
  display: flex;
  flex-direction: column;
  /* 兼容性不好 */
  /* height:100vh; */
  height: 100%;
  overflow: hidden;
}
.topbar {
  /* background: red; */
  /* border: 1px black solid; */
  margin: 8px;
}
main {
  display:flex;
  flex: 1;
}
main .edit {
  width: 30em;
  border: 1px solid red;
  margin: 8px 4px 8px 8px;
}
main .preview {
  flex: 1;
  border: 1px solid green;
   margin: 8px 8px 8px 4px;
}
</style>
