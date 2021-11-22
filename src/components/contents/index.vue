<template>
  <!-- 右侧内容 -->
  <a-breadcrumb style="margin: 20px 0">
    <!-- <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item>List</a-breadcrumb-item>
          <a-breadcrumb-item>App</a-breadcrumb-item> -->
  </a-breadcrumb>
  <!-- <a-layout-content
          :style="{ background: '#fff', padding: '24px', margin: 0,  }"
        >

        </a-layout-content> -->
  <a-layout-content :style="{ margin: '24px 16px 0' }">
    <div :style="{ padding: '24px', background: '#fff', minHeight: '560px' }">
      <router-view></router-view>
    </div>
  </a-layout-content>
</template>
<script>
export default {
  name: "contents",
};
</script>