<template>
  <div class="login">
    <router-link to="/" class="navbar-brand">Home</router-link>
    <h1>This is login page</h1>
    <button @click="login">Login</button>
  </div>
</template>

<script lang="ts">

import { defineComponent, reactive, ref } from "vue";
import UserService from "../services/UserService";

export default defineComponent({

  name: "login-page",

  setup() { 

    const state = reactive({
      user: ref(),
    });

    const login =  async () => { 

      let data = {
        email : 'testapi@gmail.com',
        password : '12345678',
      }

      state.user = await UserService.userLogin(data);
      console.log('user',state.user);
    }

    return { state, login}
  },
});
</script>
