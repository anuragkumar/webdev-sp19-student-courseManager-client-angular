import {Routes, RouterModule} from '@angular/router';
import {CourseGridComponent} from './course-grid/course-grid.component';
import {ModuleListComponent} from './module-list/module-list.component';
import {LessonTabsComponent} from './lesson-tabs/lesson-tabs.component';
import {TopicPillsComponent} from './topic-pills/topic-pills.component';
import {WidgetListComponent} from './widget-list/widget-list.component';

const appRoutes: Routes = [
  {path: 'course', component: CourseGridComponent},
  {path: 'course/:id/module', component: ModuleListComponent},
  {path: 'course/module/lesson', component: LessonTabsComponent},
  {path: 'course/module/topic', component: TopicPillsComponent},
  {path: 'course/module/topic/widget', component: WidgetListComponent}
];

export const routing = RouterModule.forRoot(appRoutes);
