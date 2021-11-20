<template>
  <a-layout>
    <a-layout-sider v-model:collapsed="collapsed" collapsible :trigger="null">
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
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <menu-unfold-outlined
          v-if="collapsed"
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
        <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
      </a-layout-header>
    
    </a-layout>
  </a-layout>
</template>
<script>
import {
  UserOutlined,

  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  components: {
    UserOutlined,
   
    MenuUnfoldOutlined,
    MenuFoldOutlined,
  },

  setup() {
    return {
      selectedKeys: ref(['1']),
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
});
</script>
