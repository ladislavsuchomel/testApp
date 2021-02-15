import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LectureComponent } from './lecture/lecture.component';
import { NgxsModule } from '@ngxs/store';
import { LectureState } from './lecture/state/lecture.state';
import { AdDirective } from './ad.directive';
import { IntroScreenComponent } from './intro-screen/intro-screen.component';
import { UiModule } from '@test-app/ui';
import { FunFactComponent } from './fun-fact/fun-fact.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    NgxsModule.forFeature([
      LectureState
    ]),
    UiModule,
    ReactiveFormsModule
  ],
  declarations: [LectureComponent, AdDirective, IntroScreenComponent, FunFactComponent],
  exports: [LectureComponent, AdDirective, IntroScreenComponent, FunFactComponent],
})
export class SharedModule {}
