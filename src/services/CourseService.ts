import { useCourseStore } from "../stores/CourseStore";

import { createApp } from "vue";
import { createPinia } from 'pinia'
import App from '../App.vue'

const pinia = createPinia()
const app = createApp(App)
app.use(pinia)

const _useCourseStore = useCourseStore();

class CourseService { 
    async getAllCourses() {
        await _useCourseStore.getAllCourses();
        return _useCourseStore.courses;
    }
    
    async getCourse(data: object) { 
        await _useCourseStore.getCourse(data);
        return _useCourseStore.course;
    }
}

export default new CourseService();