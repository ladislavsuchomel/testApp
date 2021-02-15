import { Component, Input, OnInit } from '@angular/core';
import { FunFactData, IntroScreenData, Screen } from '../model/lecture.model';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'test-app-fun-fact',
  templateUrl: './fun-fact.component.html',
  styleUrls: ['./fun-fact.component.scss']
})
export class FunFactComponent implements OnInit {

  @Input() public data: FunFactData;
  constructor() { }

  @Select(state => state.lectureState.activeScreenSubmitted)
  public activeScreenSubmitted$: Observable<boolean>;

  public resultFormControl = new FormControl('');

  ngOnInit(): void {
    this.activeScreenSubmitted$.subscribe(value => {
      if(value)
        this.resultFormControl.setValue(this.data.funFacts[0].answer);
    })
  }

}
