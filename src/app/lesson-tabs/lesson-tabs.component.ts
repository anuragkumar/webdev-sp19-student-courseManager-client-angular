import { Component, OnInit } from '@angular/core';
import {LessonServiceClient} from '../services/lesson.service.client';
import {ActivatedRoute} from '@angular/router';
import {Course} from '../models/course.model.client';
import {CourseServiceClient} from '../services/course.service.client';
import {ModuleServiceClient} from '../services/module.service.client';
import {Module} from '../models/module.model.client';
import {Lesson} from '../models/lesson.model.client';

@Component({
  selector: 'app-lesson-tabs',
  templateUrl: './lesson-tabs.component.html',
  styleUrls: ['./lesson-tabs.component.css']
})
export class LessonTabsComponent implements OnInit {
  course: Course;
  modules: Module[] = [];
  lessons: Lesson[] = [];
  courseId: number;
  moduleId: number;

  constructor(private courseService: CourseServiceClient,
              private  moduleService: ModuleServiceClient,
              private lessonService: LessonServiceClient,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      console.log(params);
      this.courseId = params.cid;
      this.moduleId = params.mid;
    });
  }

  ngOnInit() {
    this.courseService.findCourseById(this.courseId)
      .then(data => {
        this.course = data;
        this.modules = data.modules;
        this.lessons = data.modules[this.moduleId].chapters;
      });
  }

}
