<template>
  <div class="login-card">
    <main class="login-content">1</main>
    <aside class="login-aside">
      <div class="login-aside-overlay"></div>
      <h1 class="login-welcome-text">
        Welcome Back!
      </h1>
      <hr class="login-aside-hr" />
    </aside>
  </div>
</template>

<script>
export default {
  name: "Login",
};
</script>

<style lang="scss">
.login {
  &-card {
    width: 90vw;
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 20px rgb(0 0 0 / 10%);
    border-radius: 10px;
    background-color: #fff;
  }
  &-content {
    height: 100%;
    display: flex;
    flex: 2 2;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  &-aside {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    flex: 3 3;
    background: url(https://source.unsplash.com/random/1200x900?mountain) center
      center/cover no-repeat;
    border-radius: 0 10px 10px 0;
    &-overlay {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.15);
      border-radius: 0 10px 10px 0;
    }
    &-hr {
      height: 0.5rem;
      width: 8rem;
      border: none;
      outline: 0;
      background-color: #fff;
      position: relative;
      z-index: 5;
      margin: 0 0 8rem 3rem;
      animation: 4s ease-out slideright;
    }
  }
  &-welcome-text {
    color: #fff;
    letter-spacing: 0.03rem;
    margin: 0 0 2rem 3rem;
    font-size: 2.75rem;
    position: relative;
    z-index: 5;
    animation: 2s ease-out slideright;
  }
}
</style>
