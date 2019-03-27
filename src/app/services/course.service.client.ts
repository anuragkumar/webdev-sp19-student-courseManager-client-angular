import {Injectable} from '@angular/core';

@Injectable()
export class CourseServiceClient {
  API_URL = 'http://localhost:8080';

  findAllCourses = () => {
    return fetch(this.API_URL + '/api/courses')
      .then(response => response.json());
  }

  findCourseById = (id) => {
    const USER_API_URL = this.API_URL + '/api/users/' + id;
    return fetch(USER_API_URL, {
      headers : {
        'Content-Type' : 'application/json'
      },
      method : 'GET',
    }).then(response => {
      console.log(response);
      return response.json();
    });
  }
}

