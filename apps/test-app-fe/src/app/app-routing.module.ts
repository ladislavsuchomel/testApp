import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([{
      path: 'math',
      loadChildren: () => import('@test-app/features/math').then(m => m.FeaturesMathModule)
    }])
  ], exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
