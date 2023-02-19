<template>
  <div>
    <br /><br /><br />
    <p>模态框组件</p>
    <Modal
      :show="true"
      :width="350"
      :borderRadius="5"
      headerColor="#007bff"
      headerText="模态框标题"
      headerTextColor="#fff"
      contentText="模态框内容：小白兔白又白，两只耳朵竖起来，爱吃萝卜爱吃菜，蹦蹦跳跳真可爱。"
      contentTextColor="#333"
      position="center"
      :btnGroupShow="true"
      confirmText="确认"
      cancelText="取消"
      @confirm="modalConfirm"
      @close="modalClose"
    ></Modal>
  </div>
</template>
<script>
import Modal from "../modules/9981-ui/Modal";
export default {
  name: "useModal",
  data() {
    return {};
  },
  setup() {
    const modalConfirm = () => {
      console.log("Modal Confirm");
    };
    const modalClose = () => {
      console.log("Modal Close");
    };
  },
  components: {
    Modal,
  },
};
</script>
<style>
</style>
