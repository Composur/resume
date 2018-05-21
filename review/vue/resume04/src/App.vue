<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <Topbar class="topbar"/>
    <main>
        <Edit class="edit"/>
        <Preview class="preview"/>
    </main>
  </div>
</template>

<script>
import Topbar from "./components/Topbar";
import Edit from "./components/Edit";
import Preview from "./components/Preview";

export default {
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
  background: red;
  border: 1px black solid;
}
main {
  display:flex;
  flex: 1;
}
main .edit {
  width: 20em;
  border: 1px solid yellow;
}
main .preview {
  flex: 1;
  border: 1px solid green;
}
</style>
