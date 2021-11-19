<template>
    <a-layout-sider width="200" style="background: #fff">
        <a-menu
         
          mode="inline"
          :style="{ height: '100%', borderRight: 0 }"
        >
          <a-sub-menu key="sub1">
            <template #title>
              <span>
                <user-outlined />
                训练管理
              </span>
            </template>
            <a-menu-item key="1" @click="changeMenu('qlist')">套题管理</a-menu-item>
            <a-menu-item key="2" @click="changeMenu('klist')">题库管理</a-menu-item>
            
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>
</template>
<script>
import { UserOutlined } from '@ant-design/icons-vue';

export default {
    name:"left",
    components:{
        UserOutlined
    },
    methods:{
        //路由内容切换
        changeMenu(route){
            console.log(route)
            //获取路由对象并切换
            this.$router.push(route)
        }
    }

}
</script>