<template>
    <div id="edit" class="edit">
        <div class="tabs">
            <ul>
               <li  v-bind:class="{active:currentTab===1}" @click="currentTab=1">
                       <svg class="icon" aria-hidden="true">
                             <use xlink:href="#icon-id-card-o"></use>
                        </svg>
                </li>
              <li  v-bind:class="{active:currentTab===2}" @click="currentTab=2">
                       <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-work"></use>
                        </svg>
                </li>
               <li  v-bind:class="{active:currentTab===3}" @click="currentTab=3">
                       <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-study"></use>
                        </svg>
                </li>
               <li  v-bind:class="{active:currentTab===4}" @click="currentTab=4">
                       <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-trophy"></use>
                        </svg>
                </li>
              <li  v-bind:class="{active:currentTab===5}" @click="currentTab=5">
                       <svg class="icon" aria-hidden="true">
             <use xlink:href="#icon-custom-phone"></use>
            </svg>
                </li>
                <li  v-bind:class="{active:currentTab===6}" @click="currentTab=6">
                       <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-custom-phone"></use>
                        </svg>
                </li>
            </ul>
        </div>
        <div class="panels">
            <ul>
                <li :class="{active:currentTab===1}">
                    tab1
                </li>
                <li :class="{active:currentTab===2}">
                    tab2
                </li>
                <li :class="{active:currentTab===3}">
                    tab3
                </li>
                <li :class="{active:currentTab===4}">
                    tab4
                </li>
                <li :class="{active:currentTab===5}">
                    tab5
                </li>
                <li :class="{active:currentTab===6}">
                    tab6
                </li>
                <li :class="{active:currentTab===7}">
                    tab7
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      currentTab: 0
    };
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

