import { Component, OnInit } from '@angular/core';
import { interval, merge } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { RxjsServiceService } from 'src/services/rxjs-service.service';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.scss'],
})
export class MergeComponent implements OnInit {
  constructor(
    private rxjs : RxjsServiceService
  ) {}

  ngOnInit(): void {
    const sourceTech = interval(1000).pipe(map((res) => 'Tech Video' + ' ' + (res + 1)),take(5));
    const sourceComedy = interval(1000).pipe(map((res) => 'Comedy Video' + ' ' + (res + 1)),take(3));
    const sourceNews = interval(1000).pipe(map((res) => 'News Video' + ' ' + (res + 1)),take(4));

    merge(sourceTech, sourceComedy, sourceNews).subscribe((res) => {
      this.rxjs.LiAppend(res, 'ulId');
    });
  }
}

/*
✅ RxJS merge – Interview-Focused Explanation
💬 Interview Answer:
"merge is a combination operator in RxJS that subscribes to multiple observables at the same time and emits values from all of them as they come, in real-time. 
It’s used when you want to handle parallel streams and don’t care about the order of completion."

| Use Case                               | Why `merge`?                                       |
| -------------------------------------- | -------------------------------------------------- |
| Combine **button click** and **keyup** | Handle multiple user actions together              |
| Combine **API calls in parallel**      | Load user, posts, and notifications simultaneously |
| Combine timers, intervals, etc.        | Parallel execution and monitoring                  |


| Feature      | `merge`                         | `concat`                             |
| ------------ | ------------------------------- | ------------------------------------ |
| Execution    | **Parallel**                    | **Sequential** (one after the other) |
| Emits values | As soon as any observable emits | Waits for previous to complete       |
| Use case     | Parallel streams (e.g. events)  | Step-by-step flows                   |


| Operator   | Behavior                                 | Use When                              |
| ---------- | ---------------------------------------- | ------------------------------------- |
| `merge`    | Combine multiple observables in parallel | You want all events/data together     |
| `concat`   | Run in order, one completes before next  | You need sequence/order               |
*/