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
                    <person v-bind:profile="profile"/>
                </li>
                <li :class="{active:currentTab===1}">
                 <work v-bind:experience="experience"/>
                </li>
                <li :class="{active:currentTab===2}">
                  <study v-bind:educated="educated"/>
                </li>
                <li :class="{active:currentTab===3}">
                 <project v-bind:educated="educated"/>
                </li>
                <li :class="{active:currentTab===4}">
                  <winning v-bind:educated="educated"/>
                </li>
                <li :class="{active:currentTab===5}">
                  <other v-bind:educated="educated"/>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

import work from './edit/work'
import study from './edit/study'
import project from './edit/project'
import person from './edit/person'
import winning from './edit/winning'
import other from './edit/other'


export default {
  components:{
    person,
    work,
    study,
    project,
    winning,
    other,
    other
  },
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
  },
  methods:{
      addExperience(){
        this.experience.push({company:'baidu',jobTitle:'dev',jobDetail:'tester'})
      },
      romoveExperience(index){
        this.experience.splice(index,1)
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
  height: 100%;
  > .tabs {
    width: 4em;
    background: burlywood;
    height: 100%;
    > ul {
      margin-top: 1em;
      > li {
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
    height: 100%;
    overflow: auto;
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

