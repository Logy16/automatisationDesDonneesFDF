<template>
  <header-comp></header-comp>
  <aside-comp></aside-comp>
  <data-tab></data-tab>
  <div style="text-align: left; ">
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderComp from "./components/HeaderComp"
import AsideComp from "./components/AsideComp"
import DataTab from "./components/DataTab"

export default {
  name: 'App',
  components : {
    HeaderComp,
    AsideComp,
    DataTab,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0px !important;
  margin: 0px !important;
}
</style>