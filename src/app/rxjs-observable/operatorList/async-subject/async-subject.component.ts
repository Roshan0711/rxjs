import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RxjsServiceService } from 'src/services/rxjs-service.service';

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.scss']
})
export class AsyncSubjectComponent implements OnInit {
  asyncVal : any;
  constructor(private rxjs: RxjsServiceService) { }

  ngOnInit(): void {
    this.rxjs.asyncSub.subscribe((res)=>{
      this.asyncVal = res;
    })
  }

  clickMe(inputText1:any){
    this.rxjs.asyncSub.next(inputText1.value);
    inputText1.value = '';
  }

  subscribed(){
    this.rxjs.asyncSub.complete()
  }
}

/*
RxJS AsyncSubject – Interview-Ready Explanation

Interview Answer:
AsyncSubject is a special kind of RxJS Subject that only emits the last value it has seen when the source completes. 
It’s useful for scenarios where you only care about the final result of an async operation.


| Feature                       | Description                                  |
| ----------------------------- | -------------------------------------------- |
| Emits only the **last value** | But **only when completed** (`.complete()`)  |
| Caches the final value        | Sends to **all subscribers**, even late ones |
| Multicast                     | Multiple subscribers get the **same** value  |




| Feature             | `Subject` | `BehaviorSubject` | `ReplaySubject`  | `AsyncSubject`                |
| ------------------- | --------- | ----------------- | ---------------- | ----------------------------- |
| Initial value       | ❌         | ✅ Yes             | ❌ Optional       | ❌ No                          |
| Replays past values | ❌         | ✅ (latest only)   | ✅ (configurable) | ✅ (last only, on complete)    |
| Emits on complete   | ❌         | ❌                 | ❌                | ✅ Yes                         |
| Use case            | Events    | State mgmt        | Buffering        | Final result (once completed) |



Common Interview Questions:
Q: What if AsyncSubject never completes?
Subscribers will never receive any value.

Q: When would you choose AsyncSubject?
When you want to cache and broadcast only the final value of a stream once it completes — e.g., HTTP request results, async task status.
*/
