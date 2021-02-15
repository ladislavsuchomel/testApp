import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LectureComponent } from './lecture/lecture.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LectureComponent],
  exports: [LectureComponent],
})
export class SharedModule {}
