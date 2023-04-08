import { defineStore } from 'pinia'
import UserApi from "../api/userApi";

export const useUserStore = defineStore("user", {
    state: () => ({
       user: {},
    }),
    actions: {
        async getUser(data: object) { 
            try { 
                await UserApi.userLoginAsync(data).then((response:any) => { 
                        this.user = response.data;
                });
            }
            catch (error) {
                console.log(error)
            }
        }
    }
})