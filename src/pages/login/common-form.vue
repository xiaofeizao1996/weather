<template>
  <main class="login-content">
    <div class="login-content-header">
      {{ typeString }}
    </div>
    <form class="login-content-form" action="" v-on:submit.prevent="onSubmit">
      <input
        v-model="email"
        type="text"
        placeholder="Email"
        class="login-input login-content-email"
      />
      <input
        v-model="password"
        type="password"
        placeholder="password"
        class="login-input login-content-username"
      />
      <input
        class="login-button"
        :style="buttonStyle"
        type="submit"
        value="Login"
      />
    </form>
    <div class="signup-link-wrapper">
      <span>
        {{
          isLogin ? "Don't have an account?" : "Already Have an account?"
        }}
      </span>
      <a class="signup-link" @click="handleSignupLinkClick">
        {{ linkType }}
      </a>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  computed: {
    isLogin() {
      const path = this.$route.path;

      return path === "/login";
    },
    typeString() {
      const { isLogin } = this;

      return isLogin ? "Login" : "Sign Up";
    },
    linkType() {
      const { isLogin } = this;

      return isLogin ? "Sign Up" : "Login";
    },
    buttonStyle() {
      const { email, password } = this;

      let style = {};

      if (email && password) {
        style = {
          "background-color": "#00ff9b",
        };
      }

      return style;
    },
  },
  methods: {
    onSubmit() {
      const { isLogin, email, password } = this;

      if (isLogin) {
        console.log(" email, password: ", email, password);
        // 调用登录接口
      } else {
        console.log(" email, password: ", email, password);
        // 调用注册接口
      }
    },
    handleSignupLinkClick() {
      const { isLogin } = this;

      if (isLogin) {
        this.$router.push("/signup");
      } else {
        this.$router.push("/login");
      }
    },
  },
};
</script>

<style lang="scss">
.login-content {
  height: 100%;
  display: flex;
  flex: 2 2;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &-header {
    font-size: 2.5rem;
    display: block;
    margin-bottom: 2rem;
    color: #0c1066;
    letter-spacing: 0.2rem;
    font-weight: 700;
    animation: 1.75s ease-in-out fadein;
  }
  &-form {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .login-input {
      margin: 1rem 0;
      padding: 1.5rem;
      border-radius: 2rem;
      outline: 0;
      border: none;
      box-shadow: 0 0 2rem rgb(0 0 255 / 30%);
      width: 80%;
    }
    .login-button {
      background-color: #d3d3d3;
      padding: 1rem;
      border-radius: 2rem;
      outline: 0;
      border: none;
      color: #fff;
      font-size: 1.1rem;
      cursor: pointer;
      margin-top: 1.5rem;
      width: 50%;
      box-shadow: 0 0 2rem rgb(0 0 255 / 10%);
      &:hover {
        background: linear-gradient(to right, #003eff 0, #00ff9b 100%);
      }
    }
  }
  .signup-link {
    text-transform: uppercase;
    margin-top: 1rem;
    text-decoration: none;
    color: #ff3a82;
    margin-left: 1rem;
    cursor: pointer;
    &-wrapper {
      margin-top: 3rem;
      animation: 1s ease-in-out slideup;
    }
  }
}
</style>
