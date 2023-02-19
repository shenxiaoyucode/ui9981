<!-- 插槽卡片：可以指定卡片的 顶部标题、底部 以及多行的主要内容 -->
<template>
  <div class="card-wrapper">
    <div class="card-header">
      <slot name="header"></slot>
    </div>
    <div class="card-body">
      <!-- slot就是插槽的意思
    组件默认会把使用组件中间的内容渲染到这里  -->
      <slot></slot>
    </div>
    <div class="card-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "CardSlot",
  data() {
    return {};
  },
};
</script>
<style scoped>
.card-wrapper {
  margin: 0 auto;
  border: 1px solid #ccc;
  width: 300px;
  background-color: rgb(255, 255, 220);
}
.card-header {
  border-bottom: 1px solid #ccc;
  font-size: 20px;
  font-weight: bold;
}
.card-footer {
  border-top: 1px solid #ccc;
  font-weight: bold;
}
</style>
