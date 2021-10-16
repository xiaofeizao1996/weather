<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style language="scss">
#app {
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(to top, #5ee7df 0, #66a6ff 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
}
</style>
