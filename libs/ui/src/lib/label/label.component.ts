import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'test-app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {

  @Input() value: string | number;
  constructor() { }

  ngOnInit(): void {
  }

}
