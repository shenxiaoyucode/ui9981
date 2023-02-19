<template>
  <div>
    <br /><br /><br />
    <p>计数器组件</p>
    <!-- 组件1：计数器 -->
    <NumberPlusOrSub v-model="num" />
  </div>
</template>
<script>
import NumberPlusOrSub from "../modules/9981-ui/NumberPlusOrSub";
export default {
  name: "useCounter",
  data() {
    return {
      /* 这里指定初始值 */
      num: 0,
    };
  },
  components: {
    NumberPlusOrSub,
  },
};
</script>
<style>
</style>
