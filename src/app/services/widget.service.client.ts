import {Injectable} from '@angular/core';

@Injectable()
export class WidgetServiceClient {
  API_URL = 'http://localhost:8080';
  findAllWidgets = (cid, mid, lid, tid) => {
    return fetch(this.API_URL + '/api/courses/' + cid + '/modules/' + mid + '/lessons/' + lid + '/topics/' + tid + '/widgets')
      .then(response => response.json());
  }
  findWidgetById = (cid, mid, lid, tid, wid) => {
    return fetch(this.API_URL + '/api/courses/' + cid + '/modules/' + mid + '/lessons/' + lid + '/topics/' + tid + '/widgets/' + wid)
      .then(response => response.json());
  }
  findWidgetsForTopic = (cid, mid, lid, tid) => {
    return fetch(this.API_URL + '/api/courses/' + cid + '/modules/' + mid + '/lessons/' + lid + '/topics/' + tid + '/allWidgets')
      .then(response => response.json());
  }
}
