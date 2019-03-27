import { Component, OnInit } from '@angular/core';
import {ModuleServiceClient} from '../services/module.service.client';
import {ActivatedRoute} from '@angular/router';
import {Module} from '../models/module.model.client';
import {Lesson} from '../models/lesson.model.client';
import {Topic} from '../models/topic.model.client';
import {LessonServiceClient} from '../services/lesson.service.client';
import {TopicServiceClient} from '../services/topic.service.client';
import {Widget} from '../models/widgets.model.client';
import {WidgetServiceClient} from '../services/widget.service.client';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.css']
})
export class ModuleListComponent implements OnInit {
  courseId: number;
  modules: Module[] = [];
  selectedModule: Module;
  lessons: Lesson[] = [];
  selectedLesson: Lesson;
  topics: Topic[] = [];
  selectedTopic: Topic;
  widgets: Widget[] = [];

  constructor(private moduleService: ModuleServiceClient,
              private lessonService: LessonServiceClient,
              private topicService: TopicServiceClient,
              private widgetService: WidgetServiceClient,
              private route: ActivatedRoute) {
    this.route.params.subscribe( params => {
      console.log(params);
      this.courseId = params.cid;
    } );
  }

  ngOnInit() {
    this.moduleService.findAllModules(this.courseId)
      .then(data => {
        this.modules = data;
        console.log(this.modules);
      });
  }
  onSelectModule(module: Module): void {
    this.selectedModule = module;
    this.lessonService.findAllLessons(this.courseId, module.id)
      .then(data => {
        console.log(data);
        this.lessons = data;
      });
  }
  onSelectLesson(lesson: Lesson): void {
    this.selectedLesson = lesson;
    this.topicService.findAllTopics(this.courseId, this.selectedModule.id, lesson.id)
      .then(data => {
        this.topics = data;
      });
  }
  onSelectTopic(topic: Topic): void {
    this.selectedTopic = topic;
    this.widgetService.findAllWidgets(this.courseId, this.selectedModule.id, this.selectedLesson.id, topic.id)
      .then(data => {
        this.widgets = data;
      });
  }


}
