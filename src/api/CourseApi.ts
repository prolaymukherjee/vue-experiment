import http from "../api/HttpCommon";

const _http = http;

class CourseDataApi { 
    getAllCoursesAsync(): Promise<any> { 
        return _http.get("/courses");
    }
    getCourseAsync(data:object): Promise<any> { 
        return _http.get("/course",{params: data});
    }
}

export default new CourseDataApi();