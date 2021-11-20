<template>
  <!-- <header></header> -->
  <!-- <section class="app-container"> -->
    <!-- <left></left> -->
    <!-- <menu>
      
    </menu> -->
    <!-- <section class="app-body"> -->
      <router-view></router-view>
      
    <!-- </section> -->
   <!-- </section> -->
</template>


<style lang="less">
@import "styles/reset";
@import "styles/global";
@import "./styles/variable";
#app {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  overflow: hidden;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}

// header {
//   width: 100%;
//   height: 50px;
//   position: absolute;
//   top: 0;
//   left: 0;
//   background: @primary;
// }
// .app-container {
//   width: 100%;
//   height: 100%;
//   display: flex;
//   padding-top: 50px;
//   menu {
//     width: 200px;
//     height: 100%;
//     background: @background-primary;
//   }
//   .app-body {
//     height: 100%;
//     flex: 1;
//     overflow: auto;
//     color: @black;
//   }
// }
</style>
