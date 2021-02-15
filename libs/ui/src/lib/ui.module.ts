import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { LabelComponent } from './label/label.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [InputComponent, LabelComponent],
  exports: [InputComponent, LabelComponent],
})
export class UiModule {}
