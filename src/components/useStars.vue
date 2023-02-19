<template>
  <div>
    <br /><br /><br />
    <p>星星评分组件</p>
    <!-- 组件3：星星评分 -->
    <Stars :num="3" :size="30" @getStarNum="getStarNum"></Stars>
  </div>
</template>
<script>
import Stars from "../modules/9981-ui/Stars";
export default {
  name: "useStars",
  data() {
    return {};
  },
  setup() {
    const getStarNum = (num) => {
      console.log(num);
    };
    return {
      getStarNum,
    };
  },
  components: {
    Stars,
  },
};
</script>
<style>
</style>
