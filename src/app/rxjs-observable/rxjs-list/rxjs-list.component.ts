import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rxjs-list',
  templateUrl: './rxjs-list.component.html',
  styleUrls: ['./rxjs-list.component.scss']
})
export class RxjsListComponent implements OnInit {
  rxjsList = [
    {
      name : "From Event",
      link : "from-event"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
