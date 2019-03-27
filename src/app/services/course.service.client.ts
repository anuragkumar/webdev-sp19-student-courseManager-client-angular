import {Injectable} from '@angular/core';

@Injectable()
export class CourseServiceClient {
  user = {username: 'bird', password: 'bird'};

  API_URL = 'http://localhost:8080';

  async login() {
    console.log('inside user service');
    console.log(this.user);
    const response = await fetch(this.API_URL + '/api/login', {
      headers : {
        'Content-Type' : 'application/json'
      },
      method : 'POST',
      body : JSON.stringify(this.user)
    });
    const data = await response.clone().json();
    console.log('api data');
    console.log(data);
    return data;
  }

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

