import { Component, OnDestroy, OnInit } from '@angular/core';
import { RxjsServiceService } from 'src/services/rxjs-service.service';

@Component({
  selector: 'app-subject-and-behavior-subject',
  templateUrl: './subject-and-behavior-subject.component.html',
  styleUrls: ['./subject-and-behavior-subject.component.scss']
})
export class SubjectAndBehaviorSubjectComponent implements OnInit , OnDestroy {
  username! : string
  constructor(
    private rxjs : RxjsServiceService
  ) {
    this.rxjs.username.subscribe((res)=>{
      this.username = res
    })
   }

  ngOnInit(): void {
    //ex : 1
    this.rxjs.exclusive.next(true)
  }

  ngOnDestroy(): void {
    this.rxjs.exclusive.next(false)
  }

}

/*
1. Subject – Multicast Observable Without Initial Value

Interview Answer:
Subject is an RxJS multicast observable that allows multiple subscribers to receive the same stream of data. 
It doesn't hold any previous value, so if you subscribe late, you miss previous emissions.

Key Features:
No initial value
No value replayed to late subscribers
You push data manually using .next()

Use Case:
Emit events manually (e.g., button clicks)
Custom event emitters
Communicate between cross-components


2. BehaviorSubject – Subject with Initial & Latest Value

Interview Answer:
BehaviorSubject is a special type of Subject that holds a current value and emits it immediately to new subscribers. 
It’s ideal when you want subscribers to get the latest state as soon as they subscribe.

Key Features:
Requires an initial value
Remembers the latest emitted value
New subscribers instantly get the last emitted value

Use Case:
Store current user state, theme, auth token, etc.
Central state management
Share latest form or API data across components



| Feature                | `Subject`               | `BehaviorSubject`               |
| ---------------------- | ----------------------- | ------------------------------- |
| Initial value          | ❌ No                    | ✅ Yes (required)                |
| Last value replay      | ❌ No                    | ✅ Yes                           |
| Use case               | Events                  | Current state / reactive stores |
| Late subscriber gets   | Nothing (missed values) | Latest emitted value            |
| Requires default value | ❌ No                    | ✅ Yes                           |




Q: Which one is better for storing application state?
BehaviorSubject – because it keeps the latest value.

Q: Can I convert a Subject to Observable?
Yes, via subject.asObservable() – exposes only the observable part.

Q: How do ReplaySubject and AsyncSubject differ from BehaviorSubject?
Great follow-up! Let me know if you want that explained next.
*/
