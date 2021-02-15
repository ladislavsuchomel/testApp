import { Injectable } from '@angular/core';
import { Action, State, StateContext, Store } from '@ngxs/store';
import { LectureModel, Screen } from '../../model/lecture.model';
import { LoadLecture, LoadNextScreen, RevealResult } from './lecture.actions';
import { HttpClient } from '@angular/common/http';
import { patch } from '@ngxs/store/operators';

interface LectureStateModel {
  lecture: LectureModel,
  activeScreen: Screen,
  activeScreenSubmitted: boolean
}

@State<LectureStateModel>({
  name: 'lectureState'
})

@Injectable()
export class LectureState {
  constructor(private store: Store,
              private http: HttpClient) {
  }

  @Action(LoadLecture)
  async loadLecture({ patchState }: StateContext<LectureStateModel>) {
    this.http.get('http://127.0.0.1:3333/api').toPromise().then((data: LectureModel) => {
      patchState({
        lecture: data,
        activeScreen: data.screens[0]
      });
    })
  }

  @Action(LoadNextScreen)
  loadNextScreen({ patchState, getState }: StateContext<LectureStateModel>) {
    const lastIndex = getState().lecture.screens.indexOf(getState().activeScreen);
    patchState({
      activeScreen: getState().lecture.screens[lastIndex + 1],
      activeScreenSubmitted: false
    })
  }

  @Action(RevealResult)
  revealResult({ patchState }: StateContext<LectureStateModel>) {
    patchState({
      activeScreenSubmitted: true
    })
  }
}
