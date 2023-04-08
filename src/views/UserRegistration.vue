<template>
  <div class="login">
    <router-link to="/" class="navbar-brand">Home</router-link>
    <h1>This is registration page</h1>

    <button @click="registration">Registration</button>
  </div>
</template>

<script lang="ts">

import { defineComponent, reactive, ref } from "vue";
import UserService from "../services/UserService";

export default defineComponent({
  
  name: "registration-page",
  
  setup() { 
    
    const state = reactive({
      response: ref(),
    });

    const registration =  async () => { 
      
      let data = {
        first_name : 'Jhon11',
        last_name : 'Doe',
        address : 'Dhaka',
        city : 'Dhaka',
        state : 'Dhaka',
        zip : '1207',
        email : 'jhon11@gmail.com',
        password : '12345678',
      }

      state.response = await UserService.userRegistration(data);
      console.log(state.response);
    }

    return { state, registration}
  },
});
</script>
