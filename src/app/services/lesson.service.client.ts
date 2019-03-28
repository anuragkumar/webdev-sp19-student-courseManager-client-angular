import {Injectable} from '@angular/core';

@Injectable()
export class LessonServiceClient {
  API_URL = 'https://infinite-sands-33180.herokuapp.com';
  findAllLessons = (cid, mid) => {
    return fetch(this.API_URL + '/api/courses/' + cid + '/modules/' + mid + '/lessons')
      .then(response => response.json());
  }
  findLessonById = (cid, mid, lid) => {
    return fetch(this.API_URL + '/api/courses/' + cid + '/modules/' + mid + '/lessons/' + lid)
      .then(response => response.json());
  }
  findLessonsForModule = (cid, mid) => {
    return fetch(this.API_URL + '/api/courses/' + cid + '/modules/' + mid + '/allLessons')
      .then(response => response.json());
  }
}
