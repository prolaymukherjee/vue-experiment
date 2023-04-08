<template>
  <div class="hello">
    <router-link to="/" class="navbar-brand">Home/</router-link>
    <router-link to="/registration" class="navbar-brand">Registration/</router-link>
    <router-link to="/login" class="navbar-brand">Login</router-link>
    <h3>Courses List For LLSC</h3>
    <div v-for="course in state.courses" :key="course.uuid">
      {{course.title }}
    </div>
    <button @click="getCourse">Course</button>

  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, onMounted } from "vue";
import CourseService from "../services/CourseService";
import Course from "../types/Course";

export default defineComponent({

  name: "home-page",

  setup() { 

    const state = reactive({
        courses: ref<Course[]>(),
        course : ref()
    });

    const getAllCourses = async () => { 
      state.courses = await CourseService.getAllCourses();
    }

    const getCourse = async () => { 
      let data = {
        course_uuid : '7cdad2e0-815b-11ed-aa6c-bb687cf08764'
      }
      state.course = await CourseService.getCourse(data);
      console.log('single course', state.course);
      console.log('single course', state.course.title);
    }

    onMounted(() => {
        getAllCourses()
    });

    return { state, getAllCourses, getCourse}
  },

});
</script>

