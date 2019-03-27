import { Component, OnInit } from '@angular/core';
import {ModuleServiceClient} from '../services/module.service.client';
import {ActivatedRoute} from '@angular/router';
import {Module} from '../models/module.model.client';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.css']
})
export class ModuleListComponent implements OnInit {
  courseId: number;
  modules: Module[] = [];
  selectedModule: Module;

  constructor(private moduleService: ModuleServiceClient, private route: ActivatedRoute) {
    this.route.params.subscribe( params => {
      console.log(params);
      this.courseId = params.id;
    } );
  }

  ngOnInit() {
    this.moduleService.findAllModules(this.courseId)
      .then(data => {
        this.modules = data;
        console.log(this.modules);
      });
  }
  onSelect(module: Module): void {
    this.selectedModule = module;
  }


}
