import {Routes, RouterModule} from '@angular/router';
import {CourseGridComponent} from './course-grid/course-grid.component';
import {ModuleListComponent} from './module-list/module-list.component';
import {LessonTabsComponent} from './lesson-tabs/lesson-tabs.component';
import {TopicPillsComponent} from './topic-pills/topic-pills.component';
import {WidgetListComponent} from './widget-list/widget-list.component';

const appRoutes: Routes = [
  {path: 'course', component: CourseGridComponent},
  {path: 'course/:cid/module', component: ModuleListComponent},
  {path: 'course/:cid/module/:mid/lesson', component: LessonTabsComponent},
  {path: 'course/:cid/module/:mid/lesson/:lid/topic', component: TopicPillsComponent},
  {path: 'course/:cid/module/:mid/lesson/:lid/topic/:tid/widget', component: WidgetListComponent}
];

export const routing = RouterModule.forRoot(appRoutes);
