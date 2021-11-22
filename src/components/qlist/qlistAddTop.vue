<template>
 <!-- 新建套题头部 -->
  <router-link to="/qlist">套题管理</router-link> /新建套题(编辑套题)
  <div class="select">
    <a-space>
      <a-select
        v-model:value="course"
        style="width: 120px"
        :options="courseData.map((cou) => ({ value: cou }))"
      >
      </a-select>
      <a-select
        v-model:value="secondTutorial"
        style="width: 120px"
        :options="tutoris.map((tuto) => ({ value: tuto }))"
      >
      </a-select>
      <a-select
        v-model:value="value"
        label-in-value
        style="width: 120px"
        :options="options"
        @change="handleChange"
      >
      </a-select>
      <label style="margin-left: 40px">套题链接名称(可编辑)</label>
      <a-input
        style="width: 150px"
        v-model:value="text"
        size="large"
        placeholder="large size"
      />
    </a-space>
  </div>
</template>
<script>
const courseData = ["sharesOne", "sharesTwo"];
const tutorialData = {
  sharesOne: ["one", "two", "three"],
  sharesTwo: ["four", "six", "five"],
};
import { defineComponent, reactive, toRefs, computed, watch, ref } from "vue";
export default defineComponent({
  name: "qlistAddTop",
  setup() {
    /**
        选择课程和小课
     * 
     */
    const course = courseData[0];
    const state = reactive({
      course,
      courseData,
      tutorialData,
      secondTutorial: tutorialData[course][0],
    });
    const tutoris = computed(() => {
      return tutorialData[state.course];
    });
    watch(
      () => state.course,
      (val) => {
        state.secondTutorial = state.tutorialData[val][0];
      }
    );
    /**
     * 选择模式
     */
    const options = ref([
      {
        value: "practice",
        label: "练习",
      },
      {
        value: "test",
        label: "测试",
      },
    ]);
    const handleChange = (value) => {
      console.log(value); // { key: "lucy", label: "Lucy (101)" }
    };

    /**
     * 套题链接名称
     */

    const text = ref("");

    return {
      ...toRefs(state),
      tutoris,
      value: ref({
        value: "请选择模式",
      }),
      text,

      options,
      handleChange,
    };
  },
});
</script>
<style lang="less">
.select{
    margin-top: 20px;
    margin-left: 80px;
}
</style>