  <!-- 新建套题 选择添加页面 -->
 <template>
  <div class="add">
    <div class="small">
      <label for="">选择添加:</label>
      <a-button type="dashed">单选</a-button>
      <a-button type="dashed">多选</a-button>
      <a-button type="dashed">判断</a-button>
    </div>
    <div class="big">
      <a-button type="dashed">从题库中上传</a-button>
      <a-button type="dashed">文本上传</a-button>
      <a-button type="dashed">Excel表格上传</a-button>
      <a href="" download="" style="">模板下载</a>
    </div>
  </div>
  <div class="add">
    <p>套题说明:</p>
    <a-textarea
      v-model:value="value"
      showCount
      :maxlength="100"
      placeholder="选填"
    />
  </div>
  
  
  

  
  
</template>
    
<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "qlistAddEstablish",
  setup() {
    const value = ref("");
    return {
      value,
    };
  },
});
</script>

<style lang="less">
.add {
  border: 2px solid #eee;
  //   display: flex;
  justify-content: center;
  width: 800px;
  height: 200px;
  margin-top: 50px;
  margin-left: 80px;
  textarea {
    width: 600px;
    height: 130px;
    margin-left: 100px;
  }
  p {
    margin-left: 20px;
    margin-top: 10px;
  }
}
.small {
  margin-top: 10px;
  padding-left: 240px;
  button {
    margin-left: 10px;
    margin-top: 30px;
  }
}
.big {
  margin-top: 10px;
  padding-left: 190px;
  button {
    margin-left: 15px;
    margin-top: 30px;
  }
  a {
    margin-left: 10px;
  }
}
</style>