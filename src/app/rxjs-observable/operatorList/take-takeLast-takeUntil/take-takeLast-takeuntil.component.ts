import { Component, OnInit } from '@angular/core';
import { from, interval, timer } from 'rxjs';
import { map, take, takeLast, takeUntil } from 'rxjs/operators';
import { RxjsServiceService } from 'src/services/rxjs-service.service';

@Component({
  selector: 'app-take-take-last-take-until',
  templateUrl: './take-takeLast-takeUntil.component.html',
  styleUrls: ['./take-takeLast-takeUntil.component.scss']
})
export class TakeTakeLastTakeUntilComponent implements OnInit {
  randomNames = ["Roshan", "Ramesh", "Ghuge", "Bhima", "Madhuri" , "Rahul" , "Kisan" , "Shobhit"]
  constructor(
    private rxjs : RxjsServiceService
  ) { }

  ngOnInit(): void {
    const name = from(this.randomNames);

    // Ex: 1 (take)
    name.pipe(take(5)).subscribe((res)=>{
      console.log(res)
      this.rxjs.LiAppend(res,'uILd')
    })

    //Ex : 2 (takeLast)
    name.pipe(takeLast(5)).subscribe((res)=>{
      console.log(res)
      this.rxjs.LiAppend(res,'uILd1')
    })


    //Ex :3 (takeUntil)

    let intervals = interval(1000);
    let condition = timer(6000)
    intervals.pipe(takeUntil(condition),map((res)=>'video' + ' ' + res)).subscribe((res)=>{
      this.rxjs.LiAppend(res,'uILd2')
    })
  }

}
/*
RxJS take, takeLast, and takeUntil – Interview-Ready Explanations
These are filtering operators used to control the number or timing of emissions from an observable.

1) take – Emit the first N values, then complete

💬 Interview Answer:
"take allows us to take only the first N emissions from the observable and then completes. 
It’s helpful when we only need a few values or to limit emissions for performance or logic."


2) takeLast – Emit the last N values after completion.

💬 Interview Answer:
"takeLast buffers all emissions, then emits the last N values once the observable completes. 
It’s useful when you're only interested in final values."

Use Case: Show only the last few logs or results at the end of a process.

❗️Important: Works only on complete-able observables. 
Doesn’t work with infinite streams like interval() unless you take() or unsubscribe.


3) takeUntil – Emit values until another observable emits.

💬 Interview Answer:
"takeUntil listens to a notifier observable and emits values from the source until the notifier emits. After that, it completes. 
It’s commonly used for auto-unsubscribe patterns in Angular to prevent memory leaks."


| Operator      | Emits                            | Completes When                  | Use Case                             |
| ------------- | -------------------------------- | ------------------------------- | ------------------------------------ |
| `take(n)`     | First `n` values                 | After emitting `n` values       | Limit results                        |
| `takeLast(n)` | Last `n` values (after complete) | After source completes          | Post-process result history          |
| `takeUntil`   | Values until notifier emits      | Immediately when notifier emits | Unsubscribe on destroy/event/timeout |

*/