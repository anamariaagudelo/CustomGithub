import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotfoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
