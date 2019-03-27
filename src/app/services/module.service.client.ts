import {Injectable} from '@angular/core';

@Injectable()
export class ModuleServiceClient {
  API_URL = 'http://localhost:8080';
  findAllModules = (cid) => {
    return fetch(this.API_URL + '/api/courses/' + cid + '/modules')
      .then(response => response.json());
  }
}
