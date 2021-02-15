import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LectureComponent } from '@test-app/shared';

@NgModule({
  imports: [
    RouterModule.forChild([{
      path: ':lectureId',
      component: LectureComponent
    }])
  ], exports: [
    RouterModule
  ]
})
export class FeaturesRoutingModule {

}
