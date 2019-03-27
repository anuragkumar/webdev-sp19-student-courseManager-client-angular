import {Injectable} from '@angular/core';

@Injectable()
export class WidgetServiceClient {
  API_URL = 'http://localhost:8080';
  findAllWidgets = (cid, mid, lid, tid) => {
    return fetch(this.API_URL + '/api/courses/' + cid + '/modules/' + mid + '/lessons/' + lid + '/topics/' + tid + '/widgets')
      .then(response => response.json());
  }
}
