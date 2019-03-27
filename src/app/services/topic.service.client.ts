import {Injectable} from '@angular/core';

@Injectable()
export class TopicServiceClient {
  API_URL = 'http://localhost:8080';
  findAllTopics = (cid, mid, lid) => {
    return fetch(this.API_URL + '/api/courses/' + cid + '/modules/' + mid + '/lessons/' + lid + '/topics')
      .then(response => response.json());
  }
}
