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
      v-model:value="value1"
      placeholder="选填"
      :auto-size="{ minRows: 5, maxRows: 8 }"
    />
  </div>

  <div class="add">
    <p>得分评语:</p>
    <a-input-number
      :min="0"
      :max="100000"
      v-model:value="value3"
      class="input"
    />分以上
    <a-textarea
      v-model:value="value2"
      placeholder="选填"
      auto-size
      class="textarea"
    />
  </div>
  <div class="addButton" style="text-align: center">
    <a-button type="primary">完成创建</a-button>
  </div>
</template>
    
<script>
import { defineComponent, ref } from "vue";


export default defineComponent({
  name: "qlistAddEstablish",
  setup() {
    const value1 = ref("");
    const value2 = ref("");
    const value3 = ref(0);

    return {
      value1,
      value2,
      value3,
    };
  },
});
</script>

<style lang="less">
@import "../styles/variable";
.add {
  border: 2px solid #eee;
  //   display: flex;
  justify-content: @justc;
  width: @w;
  height: @h;
  margin-top: @mt;
  margin-left: @ml;
  textarea {
    width: 500px;
    margin-left: 100px;
  }
  p {
    margin-left: 20px;
    margin-top: 10px;
  }
  .input {
    margin-left: 100px;
  }
  .textarea {
    width: 360px;
    margin-left: 10px;
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
.addButton {
  justify-content: @justc;
  width: @w;
  height: @h;
  margin-top: @mt;
  margin-left: @ml;
}
</style>