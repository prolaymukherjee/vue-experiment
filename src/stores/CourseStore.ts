import { defineStore } from 'pinia'
import CourseDataApi from "../api/CourseApi";

export const useCourseStore = defineStore("user", {
    state: () => ({
      courses: [],
      course: {},
    }),

    actions: {
      async getAllCourses() { 
        try {
          await CourseDataApi.getAllCoursesAsync().then((response:any) => { 
            this.courses = response.data;
          });
        }
        catch (error) {
          console.log(error)
        }
      },
      
      async getCourse(data:object) { 
        try { 
          await CourseDataApi.getCourseAsync(data).then((response:any) => { 
                this.course = response.data;
          });
        }
        catch (error) {
          console.log(error)
        }
      }
    }
})