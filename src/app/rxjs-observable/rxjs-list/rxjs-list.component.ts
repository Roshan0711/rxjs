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
    },
    {
      name : "Interval",
      link : "interval"
    },
    {
      name : "Timer",
      link : "timer"
    },
    {
      name : "Off-From",
      link : "off-from"
    },
    {
      name : "ToArray",
      link : "to-array"
    },
    {
      name : "Custom Observable",
      link : "custom-observable"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
