import {Component, OnInit} from '@angular/core';
import {CourseServiceClient} from '../services/course.service.client';
import {Course} from '../models/course.model.client';

// let component = Component({
//   selector: 'app-course-grid',
//   templateUrl: './course-grid.component.html',
//   styleUrls: ['./course-grid.component.css']
// });

@Component({
  selector: 'app-course-grid',
  templateUrl: './course-grid.component.html',
  styleUrls: ['./course-grid.component.css']
})
export class CourseGridComponent implements OnInit {

  constructor(private courseService: CourseServiceClient) { }

  courses: Course[] = [];

  ngOnInit() {
    this.courseService.findAllCourses()
      .then(data => {
        this.courses = data;
        console.log(this.courses);
      });
  }

}
