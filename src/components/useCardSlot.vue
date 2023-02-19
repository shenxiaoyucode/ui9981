<template>
  <div>
    <br /><br /><br />
    <p>插槽组件</p>
    <!-- 组件2：插槽 -->
    <CardSlot>
      <template v-slot:header>卡片头部</template>
      <p>卡片内容</p>
      <p>卡片内容</p>
      <p>卡片内容</p>
      <template v-slot:footer>卡片底部</template>
    </CardSlot>
  </div>
</template>
<script>
import CardSlot from "../modules/9981-ui/CardSlot";
export default {
  name: "useCardSlot",
  data() {
    return {};
  },
  components: {
    CardSlot,
  },
};
</script>
<style>
</style>
