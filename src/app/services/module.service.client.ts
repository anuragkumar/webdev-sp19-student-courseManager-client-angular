import {Injectable} from '@angular/core';

@Injectable()
export class ModuleServiceClient {
  API_URL = 'https://infinite-sands-33180.herokuapp.com';
  findAllModules = (cid) => {
    return fetch(this.API_URL + '/api/courses/' + cid + '/modules')
      .then(response => response.json());
  }
  findModulesForCourse = (cid) => {
    return fetch(this.API_URL + '/api/courses/' + cid + '/allModules')
      .then(response => response.json());
  }
  findModuleById = (cid, moduleId) => {
    return fetch(this.API_URL + '/api/courses/' + cid + '/modules/' + moduleId)
      .then(response => response.json());
  }
}
