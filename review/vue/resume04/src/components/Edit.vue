<template>
    <div id="edit" class="edit">
        <div class="tabs">

            <ul>
                 <li v-for=" i in [0,1,2,3,4,5]"  v-bind:class="{active:currentTab===i}" @click="currentTab=i">
                       <svg class="icon" aria-hidden="true">
                             <use :xlink:href="`#icon-${icons[i]}`"></use>
                        </svg>
                </li>
            </ul>
        </div>
        <div class="panels">
            <ul>
                 <li  :class="{active:currentTab===0}">
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
                </li>
                <li :class="{active:currentTab===1}">
                  <h1>工作经历</h1>
                  <el-form :label-positons='labelPosition' :model="experience">
                   <div v-for="work  in experience">
                      <el-form-item label="公司名称">
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
                </li>
                <li :class="{active:currentTab===2}">
                  <h1>教育经历</h1>
                 <el-form :label-positons='labelPosition' :model="educated">
                   <div v-for="educated  in educated">
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
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      currentTab: 0,
      icons:['id-card-o','work','study','project','trophy','custom-phone'],
      penelsTitle:[],
      labelPosition: 'top',
      profile: {
        name: '',
        age: '',
        city: ''
      },
      experience:[{company:'baidu',jobTitle:'dev',jobDetail:'tester'}],
      educated:[{school:'tinghua',degree:'本科',other:'其它'}]
    };
    methods:{
      
    }
  }
};
</script>

<style lang='scss'>
.edit {
  -webkit-box-shadow: 2px 2px 2px 2px #ccc;
  -moz-box-shadow: 2px 2px 2px 2px #ccc;
  box-shadow: 2px 2px 2px 2px #ccc;
  display: flex;
  overflow: hidden;
  > .tabs {
    width: 4em;
    background: burlywood;
    > ul {
      margin-top: 1em;
      > li {
        width: 100%;
        height: 4em;
        border: 1px solid black;
        text-align: center;
        line-height: 4em;
        cursor: pointer;
        > .icon {
          font-size: 40px;
        }
      }
      > .active {
        background: #ccc;
      }
    }
  }
  > .panels {
    flex: 1;
    border: 1px solid indigo;
    > ul {
      > li {
        display: none;
      }
      > .active {
        display: block;
      }
    }
  }
}
</style>

