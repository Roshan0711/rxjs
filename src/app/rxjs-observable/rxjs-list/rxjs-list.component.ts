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
    },
    {
      name : "Map",
      link : "map"
    },
    {
      name : "Pluck",
      link : "pluck"
    },
    {
      name : "Filter",
      link : "filter"
    },
    {
      name : "Tap",
      link : "tap"
    },
    {
      name : "Take , TakeLast , TakeUntil",
      link : "take-takeLast-takeUntil"
    },
    {
      name : "Retry , RetryWhen , Scan , Delay",
      link : "retry"
    },
    {
      name : "DebounceTime , DistinctUntilChanged",
      link : "debounceTimer-and-distinctUntilChanged"
    },
    {
      name : "Subject and BehaviorSubject",
      link : "Subject-and-BehaviorSubject"
    },
    {
      name : "Reply",
      link : "reply"
    },
    {
      name : "Async Subject",
      link : "async"
    },
    {
      name : "Concat",
      link : "concat"
    },
    {
      name : "Merge",
      link : "merge"
    },
    {
      name : "Merge Map (mergeAll + map)",
      link : "merge-map"
    },
    {
      name : "Concat Map (ConcatAll + map)",
      link : "concat-map"
    },
    {
      name : "Switch Map (SwtichAll + map)",
      link : "switch-map"
    },
    {
      name : "Exhaust Map",
      link : "exhaust-map"
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
