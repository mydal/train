<template>
  <!-- 左侧 -->
  <a-layout-sider v-model:collapsed="collapsed" collapsible >
    <div class="logo" />
    <a-menu theme="dark" v-model:selectedKeys="selectedKeys" mode="inline">
      <a-sub-menu key="sub1">
        <template #title>
          <span>
            <user-outlined />
            <span>训练管理</span>
          </span>
        </template>
        <a-menu-item key="1" @click="changeMenu('qlist')">套题管理</a-menu-item>
        <a-menu-item key="2" @click="changeMenu('klist')">题库管理</a-menu-item>
      </a-sub-menu>
    </a-menu>
  </a-layout-sider>
</template>
<script>
import { UserOutlined } from "@ant-design/icons-vue";
import { ref } from "vue";

export default {
  name: "left",

  components: {
    UserOutlined,
  },
  setup() {
    return {
      selectedKeys: ref(["0"]),
      collapsed: ref(false),
    };
  },
  methods: {
    //路由内容切换
    changeMenu(route) {
      console.log(route);
      //获取路由对象并切换
      this.$router.push(route);
    },
  },
};
</script>
