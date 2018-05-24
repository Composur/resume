<template>
  <div id="app" :class="{previewMode:previewMode}">
    <!-- <img src="./assets/logo.png"> -->
    <Topbar class="topbar" v-on:preview="preview"/>
    <main>
        <Edit class="edit" v-bind:resume="resume"/>
        <Preview class="preview" v-bind:resume="resume" v-on:preview="preview"/>
    </main>
  </div>
</template>

<script>
import Topbar from "./components/Topbar";
import Edit from "./components/Edit";
import Preview from "./components/Preview";

export default {
  data() {
    return {
      previewMode: false,
      resume: {
        profile: {
          name: "",
          age: "",
          city: ""
        },
        experience: [{ company: "", jobTitle: "", jobDetail: "" }],
        educated: [
          { school: "tinghua", degree: "本科", duration: "", other: "其它" }
        ],
        projects: [{ name: "", Duty: "", duration: "", other: "其它" }],
        winning: [
          { school: "tinghua", degree: "本科", duration: "", other: "其它" }
        ],
        other: [
          { school: "tinghua", degree: "本科", duration: "", other: "其它" }
        ]
      }
    };
  },
  name: "App",
  components: {
    Topbar,
    Edit,
    Preview
  },
  methods: {
    preview() {
      if (this.previewMode) {
        this.previewMode = false;
      } else {
        this.previewMode = true;
      }
    }
  }
};
</script>

<style lang='scss'>
html,
body {
  height: 100%;
}
#app {
  display: flex;
  flex-direction: column;
  /* 兼容性不好 */
  /* height:100vh; */
  height: 100%;
  overflow: hidden;
}
.previewMode {
  background: #ccc;
  > .topbar {
    display: none !important;
  }
  > main {
    > .edit {
      display: none !important;
    }
    > .preview{
      max-width: 800px;
      margin: 32px auto;
      background: #fff;
      >.primary{
        display: block;
      }
    }
  }
}
.topbar {
  margin: 8px;
}
main {
  display: flex;
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
  height: 100%;
}
</style>
