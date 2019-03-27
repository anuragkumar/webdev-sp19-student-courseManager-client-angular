import { Component, OnInit} from '@angular/core';
import {CourseServiceClient} from './services/course.service.client';
import {Course} from './models/course.model.client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to Course Manager';
}
