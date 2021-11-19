<template>
  <a-button type="primary" @click="save()">新建套题</a-button>
  <a-table :dataSource="dataSource" :columns="columns">
    <template #operation="{ record }">
      <div :style="{ padding: '26px 16px 16px' }">
        <a-button type="primary" ghost>查看</a-button>
        <a-button type="primary" ghost style="margin-left: 30px">编辑</a-button>
        <a-popconfirm
          v-if="dataSource.length"
          title="你确定要删除？"
          @confirm="() => onDelete(record.key)"
        >
          <a href="javascript:;" style="margin-left: 30px">删除</a>
        </a-popconfirm>
      </div>
    </template>
  </a-table>
</template>
<script>
import { ref } from "vue";

const columns = [
  {
    title: "id",
    dataIndex: "key",
    key: "key",
  },
  {
    title: "姓名",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "年龄",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "住址",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "操作",
    dataIndex: "operation",
    key: "operation",
    slots: { customRender: "operation" },
  },
];
const dataSource = ref([
  {
    key: "1",
    name: "胡彦斌",
    age: 32,
    address: "西湖区湖底公园1号",
  },
  {
    key: "2",
    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
  {
    key: "2",
    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
  {
    key: "2",
    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
 
]);

const onDelete = (key) => {
  /**删除 */
  dataSource.value = dataSource.value.filter((item) => item.key !== key);
};


export default {
  setup() {
    return {
      columns,
      dataSource,
      onDelete,
    };
  },
  methods:{
    save(){
      /**跳转添加页面 */
      this.$router.push({name:'qlistAdd'})
    }

  }
};
</script>
<style lang="less">
</style>