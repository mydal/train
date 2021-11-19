<template>
  <a-button type="primary">新建套题</a-button>
  <a-table :dataSource="dataSource" :columns="columns">
    <template v-solt="operation" > 
      <div :style="{ padding: '26px 16px 16px' }">
        <a-button type="primary" ghost>查看</a-button>
        <a-button type="primary" ghost>编辑</a-button>
        <a-popconfirm
          v-if="dataSource.length"
          title="你确定要删除？"
          @confirm="() => onDelete(operation)">
          <a href="javascript:;">删除</a>
        </a-popconfirm>
      </div>
    </template>
  </a-table>
</template>
<script>
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
          slots: { customRender: 'operation' },
        },
   
  ]
  const dataSource = [
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

  ]
export default {

  setup() {
    return {
      columns,
      dataSource
    
  }
  },

  methods:{
    onDelete(operation){
      
      console.log(operation)

    }
  }
}
</script>
<style lang="less">
</style>