<template>
  <div id="app">
    <br /><br /><br />
    <button @click="currentTabComponent = 'useCounter'">计数器组件</button>
    <button @click="currentTabComponent = 'useCardSlot'">插槽组件</button>
    <button @click="currentTabComponent = 'useStars'">星星评分组件</button>
    <button @click="currentTabComponent = 'useModal'">模态框组件</button>
    <button @click="currentTabComponent = 'useTimeline'">时间线组件</button>
    <keep-alive>
      <component v-bind:is="currentTabComponent"></component>
    </keep-alive>
  </div>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/> -->
</template>

<script>
import useCounter from "./components/useCounter";
import useCardSlot from "./components/useCardSlot";
import useStars from "./components/useStars";
import useModal from "./components/useModal";
import useTimeline from "./components/useTimeline.vue";
export default {
  name: "App",
  data() {
    return {
      /* 这里指定初始值 */
      num: 0,
      currentTabComponent: "useCounter",
    };
  },
  methods: {},
  setup() {
    const modalConfirm = () => {
      console.log("Modal Confirm");
    };
    const modalClose = () => {
      console.log("Modal Close");
    };
    const getStarNum = (num) => {
      console.log(num);
    };
    return {
      modalConfirm,
      modalClose,
      getStarNum,
    };
  },
  components: {
    useCounter,
    useCardSlot,
    useStars,
    useModal,
    useTimeline,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
button {
  background-color: orange;
  width: 150px;
  height: 40px;
  border-radius: 5px;
  text-align: center;
  font-size: 15px;
  color: #fff;
  border-left: 1px solid #33b8ec;
  border-top: 1px solid #33b8ec;
  border-right: 3px solid #000;
  border-bottom: 3px solid #000;
}
button:hover {
  background-color: rgb(252, 187, 67);
}
</style>
