<!-- 星星评分组件 -->
<template>
  <div class="Stars">
    <span
      v-for="starNum in 5"
      :key="starNum"
      :class="['iconfont icon-star', starNum <= num ? 'active' : '']"
      :style="{ fontSize: size + 'px' }"
    ></span>
  </div>
</template>
<script>
export default {
  name: "Stars",
  props: {
    num: {
      type: Number,
      default: 0,
    },
    size: {
      type: Number,
      default: 20,
    },
  },
  data() {
    return {};
  },
};
</script>
<style>
@font-face {
  font-family: "iconfont"; /* Project id 3902604 */
  src: url("@/assets/iconfont/iconfont.woff2") format("woff2"),
    url("@/assets/iconfont/iconfont.woff") format("woff"),
    url("@/assets/iconfont/iconfont.ttf") format("truetype");
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: darkgray;
}
.icon-star:before {
  content: "\e617";
}
.icon-star {
  transition: color 0.3s;
}
.active {
  color: gold;
}
</style>
