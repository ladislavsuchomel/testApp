import {
  Component,
  ComponentFactoryResolver,
  ElementRef,
  HostBinding,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { LoadLecture, LoadNextScreen, LoadPreviousScreen, RevealResult } from './state/lecture.actions';
import { Observable } from 'rxjs';
import { LectureModel, Screen, ScreenType } from '../model/lecture.model';
import { ActivatedRoute } from '@angular/router';
import { InputComponent } from '../../../../ui/src/lib/input/input.component';
import { AdDirective } from '../ad.directive';
import { IntroScreenComponent } from '../intro-screen/intro-screen.component';
import { FunFactComponent } from '../fun-fact/fun-fact.component';

@Component({
  selector: 'test-app-lecture',
  templateUrl: './lecture.component.html',
  styleUrls: ['./lecture.component.scss']
})
export class LectureComponent implements OnInit {

  constructor(private store: Store,
              private activatedRoute: ActivatedRoute,
              private cfr: ComponentFactoryResolver,
              private viewContainerRef: ViewContainerRef) { }

  @Select(state => state.lectureState.activeScreen)
  public screen$: Observable<Screen>;

  @ViewChild(AdDirective, {static: true}) root: AdDirective;

  @HostBinding('style.backgroundColor') bckColor: string;

  ngOnInit(): void {
    this.store.dispatch(new LoadLecture(this.activatedRoute.snapshot.params['lectureId']));

    this.screen$.subscribe(data => {
      if (data) {
        this.loadScreen(data);
      }
    })
  }

  private loadScreen(screen: Screen) {
    console.log(screen);
    const componentFactory = this.cfr.resolveComponentFactory(
      this.getComponentToInject(screen.screenType)
    );

    const viewContainerRef = this.root.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent<any>(componentFactory);
    componentRef.instance.data = screen.screenData;
    this.bckColor = screen.backgroundColor;
  }

  private getComponentToInject(screenType: ScreenType) {
    switch (screenType) {
      case 'INTRO': {
        return IntroScreenComponent;
      }

      case 'FUN_FACT': {
        return FunFactComponent;
      }
    }
  }

  public onPreviousClick() {
    this.store.dispatch(new LoadPreviousScreen());
  }

  public onNextClick() {
    this.store.dispatch(new LoadNextScreen());
  }

  public onRevealClick() {
    this.store.dispatch(new RevealResult());
  }
}
