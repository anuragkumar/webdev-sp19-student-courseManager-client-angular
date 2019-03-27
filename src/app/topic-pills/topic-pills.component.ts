import { Component, OnInit } from '@angular/core';
import {Course} from '../models/course.model.client';
import {Module} from '../models/module.model.client';
import {Lesson} from '../models/lesson.model.client';
import {Topic} from '../models/topic.model.client';
import {CourseServiceClient} from '../services/course.service.client';
import {ModuleServiceClient} from '../services/module.service.client';
import {LessonServiceClient} from '../services/lesson.service.client';
import {ActivatedRoute} from '@angular/router';
import {TopicServiceClient} from '../services/topic.service.client';

@Component({
  selector: 'app-topic-pills',
  templateUrl: './topic-pills.component.html',
  styleUrls: ['./topic-pills.component.css']
})
export class TopicPillsComponent implements OnInit {
  course: Course;
  modules: Module[] = [];
  lessons: Lesson[] = [];
  topics: Topic[] = [];
  courseId: number;
  moduleId: number;
  lessonId: number;

  constructor(private courseService: CourseServiceClient,
              private  moduleService: ModuleServiceClient,
              private lessonService: LessonServiceClient,
              private topicService: TopicServiceClient,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      console.log(params);
      this.courseId = params.cid;
      this.moduleId = params.mid;
      this.lessonId = params.lid;
    });
  }

  ngOnInit() {
    this.courseService.findCourseById(this.courseId)
      .then(data => {
        this.course = data;
        this.modules = data.modules;
        this.lessons = data.modules[this.moduleId].chapters;
        this.topics = data.modules[this.moduleId].chapters[this.lessonId].topics;
      });
  }

}
