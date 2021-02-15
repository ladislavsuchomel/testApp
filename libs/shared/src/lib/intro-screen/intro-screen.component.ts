import { Component, Input, OnInit } from '@angular/core';
import { IntroScreenData } from '../model/lecture.model';
import { Store } from '@ngxs/store';

@Component({
  selector: 'test-app-intro-screen',
  templateUrl: './intro-screen.component.html',
  styleUrls: ['./intro-screen.component.scss']
})
export class IntroScreenComponent implements OnInit {

  @Input() public data: IntroScreenData;
  constructor() { }

  ngOnInit(): void {
  }
}
