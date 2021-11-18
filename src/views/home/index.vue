<template>
  <a-layout>
    <batten></batten>
    <a-layout>
      <left></left>
      <a-layout style="padding: 0 24px 24px">
        <contents></contents>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script>
import batten from "./batten";
import left from "./left";
import { defineComponent, ref } from "vue";
import contents from "./contents";

export default defineComponent({
  name: "home",

  components: {
    batten,
    left,
    contents,
  },

  setup() {
    return {
      selectedKeys1: ref(["2"]),
      selectedKeys2: ref(["1"]),
      collapsed: ref(false),
      openKeys: ref(["sub1"]),
    };
  },
});
</script>
<style>
.ant-layout {
  height: 100%;
}
#components-layout-demo-top-side-2 .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}

.ant-row-rtl #components-layout-demo-top-side-2 .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

.site-layout-background {
  background: #fff;
}
</style>

