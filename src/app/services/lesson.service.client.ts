import {Injectable} from '@angular/core';

@Injectable()
export class LessonServiceClient {
  API_URL = 'http://localhost:8080';
  findAllLessons = (cid, mid) => {
    return fetch(this.API_URL + '/api/courses/' + cid + '/modules/' + mid + '/lessons')
      .then(response => response.json());
  }
}
