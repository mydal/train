  <!-- 新建套题 选择添加页面 -->
 <template>
  <div class="sheet" v-for="item in sheetArr" v-bind:key="item.id">
    <div class="radio" v-show="item.type == radio">
      <div class="radioLeft">
        <p>{{ item.id }}.[{{ item.type }}]</p>
        <a-upload
          v-show="isUpload"
          action=""
          list-type="picture"
          v-model:file-list="fileList"
        >
          <a-button>
            <upload-outlined></upload-outlined>
            上传图片
          </a-button>
        </a-upload>
        <input
          class="ant-input ant-input-borderless editInput f16"
          type="text"
          placeholder="点击输入题目(支持图片)"
          @focus="focusfns()"
        />
      </div>
      <div class="radioRight">删除 复制 上移 下移</div>
    </div>
    <div class="check radio" v-show="item.type == check">
      <div class="radioLeft">
        <p>{{ item.id }}.[单选]</p>
        <a-upload
          v-show="isUpload"
          action=""
          list-type="picture"
          v-model:file-list="fileList"
        >
          <a-button>
            <upload-outlined></upload-outlined>
            上传图片
          </a-button>
        </a-upload>
        <input
          class="ant-input ant-input-borderless editInput f16"
          type="text"
          placeholder="点击输入题目(支持图片)"
          @focus="focusfns()"
        />
      </div>
      <div class="radioRight">删除 复制 上移 下移</div>
    </div>
    <div class="judge" v-show="item.type == judge">{{ item.type }}</div>
  </div>

  <div class="add">
    <div class="small">
      <label for="">选择添加:</label>
      <a-button type="dashed" @click="point('radio')">单选</a-button>
      <a-button type="dashed" @click="point('check')">多选</a-button>
      <a-button type="dashed" @click="point('judge')">判断</a-button>
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
import { UploadOutlined } from "@ant-design/icons-vue";

// const type = ''

export default defineComponent({
  name: "qlistAddEstablish",
  components: {
    UploadOutlined,
  },
  data() {
    return {
      i: 0,
      cut: "",
    };
  },

  setup() {
    const value1 = ref("");
    const value2 = ref("");
    const value3 = ref(0);

    const sheetArr = ref([]);

    const radio = ref("radio");
    const check = ref("check");
    const judge = ref("judge");

    const isUpload = ref(false);
    const fileList = ref([]);

    return {
      value1,
      value2,
      value3,
      sheetArr,
      radio,
      check,
      judge,
      isUpload,
      fileList,
    };
  },
  methods: {
    point(type) {
      console.log(type);
      if (type == "radio") {
        this.cut = "[单选]";
      } else if (type == "check") {
        this.cut = "[多选]";
      } else {
        this.cut = "[判断]";
      }
      this.i++;
      let obj = {
        id: this.i,
        type: type,
      };
      this.sheetArr.push(obj);

      console.log(this.sheetArr);
    },
    focusfns() {
      this.isUpload = true;
    },
  },
});
</script>

<style lang="less">
@import "../../styles/variable";
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
.radio {
  border: 2px solid #eee;
  display: flex;
  // justify-content: @justc;
  width: @w;
  margin-top: @mt;
  margin-left: @ml;
  .radioLeft {
    // border: 1px solid red;
    flex: 1;
    margin-left: 20px;
    margin-top: 10px;
    .editInput {
      min-width: 300px;
      border: 1px solid transparent;
      padding: 4px 8px;
      outline: none;
    }
  }
  .radioRight {
    border: 1px solid yellow;
  }
}
</style>