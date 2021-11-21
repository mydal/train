<template>
  <div class="main">
    <div class="left">
      <qlistAddTop></qlistAddTop>
      <qlistAddEstablish></qlistAddEstablish>
    </div>
    <div class="right">
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";

import qlistAddTop from "../../components/qlistAddTop";
import qlistAddEstablish from "../../components/qlistAddEstablish";
export default defineComponent({
  name: "qlistAdd",
  setup() {},
  components: {
    qlistAddTop,
    qlistAddEstablish,
  },
});
</script>

<style lang="less">
    .main{
        display: flex;
    }
    .left{
        flex:1 1 auto;
    }
    .right{
        width:240px;
        background-color: red;

    }
</style>
