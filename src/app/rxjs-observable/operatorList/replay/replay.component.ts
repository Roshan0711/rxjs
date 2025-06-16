import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { RxjsServiceService } from 'src/services/rxjs-service.service';

@Component({
  selector: 'app-replay',
  templateUrl: './replay.component.html',
  styleUrls: ['./replay.component.scss'],
})
export class ReplayComponent implements OnInit {
  user1List: any = ['angular 1', 'angular 2'];
  user2List: any = [];
  user3List: any = [];
  subscribe2: boolean = false;
  subscribe3: boolean = false;
  subscription2!: Subscription;
  subscription3!: Subscription;
  intervals!: Subscription;

  togle: boolean = false;
  constructor(private rxjs: RxjsServiceService) {}

  ngOnInit(): void {
    this.rxjs.videoEmit.subscribe((res) => {
      this.user1List.push(res)
    });
  }

  getData(data: any) {
    this.rxjs.videoEmit.next(data.value);
    data.value = '';
  }

  user3() {
    this.subscribe3 = !this.subscribe3;
    if (this.subscribe3) {
      this.subscription3 = this.rxjs.videoEmit.subscribe((res) => {
        this.user3List.push(res);
      });
    } else {
      this.subscription3.unsubscribe();
    }
  }

  user2() {
    this.subscribe2 = !this.subscribe2;
    if (this.subscribe2) {
      this.subscription2 = this.rxjs.videoEmit.subscribe((res) => {
        this.user2List.push(res);
      });
    } else {
      this.subscription2.unsubscribe();
    }
  }

  toggleMthod() {
    this.togle = !this.togle;
    if (this.togle) {
      this.intervals = interval(1000).subscribe((res) => {
        this.rxjs.videoEmit.next('Video ' + res);
      });
    } else {
        this.intervals.unsubscribe();
    }
  }
}
/*
Absolutely! Let's dive into ReplaySubject — another important RxJS concept, 
especially useful when you want new subscribers to get past values, not just the latest one like in BehaviorSubject.

✅ RxJS ReplaySubject – Interview-Ready Breakdown

💬 Interview Answer:
ReplaySubject is a type of Subject in RxJS that stores a buffer of previous values and re-emits them to new subscribers. You can specify how many previous values to replay. 
It’s ideal when new subscribers need to catch up with some or all past data.

🔧 Syntax:
const replaySubject = new ReplaySubject<T>(bufferSize: number);
bufferSize: Number of previous values to cache and replay


| Scenario                | Why `ReplaySubject` is Ideal                               |
| ----------------------- | ---------------------------------------------------------- |
| **Chat app**            | New user joins → gets last 5 messages                      |
| **Logs**                | Developer console shows recent logs                        |
| **Buffering UI events** | Store user interactions even before a listener is attached |
| **Preloading data**     | Keep some cache ready for future subscribers               |



| Feature              | `Subject` | `BehaviorSubject` | `ReplaySubject`           |
| -------------------- | --------- | ----------------- | ------------------------- |
| Initial Value        | ❌ No      | ✅ Yes             | ❌ Optional                |
| Last Value Replay    | ❌ No      | ✅ One value       | ✅ Multiple (configurable) |
| Best For             | Events    | State             | Buffered history          |
| Late Subscriber Gets | Nothing   | Latest value      | Buffered past values      |

*/
