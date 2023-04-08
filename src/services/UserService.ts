import UserApi from "../api/userApi";

import { useUserStore } from "../stores/userStore";

import { createApp } from "vue";
import { createPinia } from 'pinia'
import App from '../App.vue'

const pinia = createPinia()
const app = createApp(App)
app.use(pinia)

const _useUserStore = useUserStore();

class userService { 
    async userRegistration(data:object) {
       const response =  await UserApi.userRegistrationAsync(data);
       return response;
    }

    async userLogin(data:object) { 
        await _useUserStore.getUser(data);
        return _useUserStore.user;
    }
}

export default new userService();