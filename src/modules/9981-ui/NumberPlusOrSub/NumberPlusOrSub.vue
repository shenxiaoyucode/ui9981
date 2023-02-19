<!-- 实现的功能有：点加号递增，点减号递减，然后文本框也可以指定任意数字开始增减 -->
<!-- 自定义计数器组件 -->
<template>
  <div class="input_num">
    <button @click="handleIncrement(-1)">-</button>
    <input type="text" :value="modelValue" @input="handleInput" />
    <button @click="handleIncrement(1)">+</button>
  </div>
</template>

<script>
export default {
  name: "NumberPlusOrSub",
  props: ["modelValue"],
  emits: ["update:modelValue"],
  data() {
    return {};
  },
  methods: {
    handleIncrement(count) {
      /* Prop是单向的，不要在子组件中修改props数据
      this.num += count
      子组件中num值的改变应该由父组件来影响 */
      this.$emit("update:modelValue", this.modelValue + count);
    },
    handleInput(e) {
      this.$emit("update:modelValue", e.target.value - 0);
    },
    /* - 0的作用是字符串转换为数字 */
  },
};
</script>

<style scoped>
.input_num > button {
  width: 100px;
  height: 50px;
  border-radius: 2px;
  background-color: #409eff;
  vertical-align: top;
  text-align: center;
  font-size: 35px;
  color: rgba(255, 255, 255, 1);
  border: transparent;
  overflow: hidden;
}
.input_num > button:hover {
  background: #88c4ff;
  color: #fff;
}
.input_num > input {
  width: 200px;
  height: 44px;
  font-size: 30px;
  text-align: center;
  font-size: 30;
  border: 2px solid #9dceff;
  background: #fff;
}
</style>
