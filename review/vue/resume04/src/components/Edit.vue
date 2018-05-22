<template>
    <div id="edit" class="edit">
        <div class="tabs">

            <ul>
                 <li v-for=" i in [0,1,2,3,4]"  v-bind:class="{active:currentTab===i}" @click="currentTab=i">
                       <svg class="icon" aria-hidden="true">
                             <use :xlink:href="`#icon-${icons[i]}`"></use>
                        </svg>
                </li>
            </ul>
        </div>
        <div class="panels">
            <ul>
                 <li :class="{active:currentTab===0}">
                    tab1
                </li>
                <li :class="{active:currentTab===1}">
                    tab2
                </li>
                <li :class="{active:currentTab===2}">
                    tab3
                </li>
                <li :class="{active:currentTab===3}">
                    tab5
                </li>
                <li :class="{active:currentTab===4}">
                    tab5
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
      icons:['id-card-o','work','study','trophy','custom-phone']
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

