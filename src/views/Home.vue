<template>
  <div class="app">
    <button @click="btn" v-if="kg == true" class="cli">点击进入编辑</button>
    <button @click="btn" v-else class="cli">点击退出编辑</button>
    <br />
    <hello-world ref="hello"></hello-world>
  </div>
</template>

<script>
import HelloWorld from "components/HelloWorld";
export default {
  data() {
    return {
      kg: undefined,
    };
  },
  components: {
    HelloWorld,
  },
  methods: {
    btn() {
      this.$refs.hello.kg = !this.$refs.hello.kg;
      this.kg = this.$refs.hello.kg;
    },
  },
  mounted() {
    this.kg = this.$refs.hello.kg;
  },
};
</script>

<style>
.app .cli {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}
</style>
