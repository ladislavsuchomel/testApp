import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[testAppAdDirective]'
})
export class AdDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
