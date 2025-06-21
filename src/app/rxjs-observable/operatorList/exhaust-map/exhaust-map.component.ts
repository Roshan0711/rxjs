import { HttpClientModule } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, interval, Observable, pipe } from 'rxjs';
import { delay, exhaustMap, take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-exhaust-map',
  templateUrl: './exhaust-map.component.html',
  styleUrls: ['./exhaust-map.component.scss']
})
export class ExhaustMapComponent implements OnInit , AfterViewInit {
  num : any = 0
  loading : boolean = false
  @ViewChild('button') button! : ElementRef<any>
  constructor(
    private http : HttpClientModule,
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    fromEvent(this.button.nativeElement,'click').pipe(
      tap(()=>this.loading = true),
      exhaustMap(()=>this.getData())).subscribe(
      (res)=>{
        this.loading = false
        this.num++
      }
    )  
  }

  getData() : Observable<any>{
    return interval(1000).pipe(take(1),delay(500))
  }
}
/*
RxJS exhaustMap – Interview-Ready Breakdown

💬 Interview Answer:
exhaustMap maps each source emission to an inner observable but ignores new emissions while the current inner observable is active. 
It's best for scenarios where you want to prevent overlapping tasks — like repeated form submissions or button spamming.

source$.pipe(exhaustMap(value => innerObservable(value)))

🔁 How it behaves:
Click → request starts
Click again while request is running → ignored
Once the first request completes → next click is allowed

| Use Case                        | Why `exhaustMap`?                               |
| ------------------------------- | ----------------------------------------------- |
| 🧾 Form submit button           | Prevent double submissions                      |
| 🔄 Login/Register               | Avoid triggering multiple requests accidentally |
| ⏱️ Debounced polling logic      | Prevent concurrent calls                        |
| 🧪 Long-running background jobs | Only allow one job at a time                    |


| Operator     | Cancels Previous | Ignores New? | Runs Concurrent?    | Use When                           |
| ------------ | ---------------- | ------------ | ------------------- | ---------------------------------- |
| `mergeMap`   | ❌ No             | ❌ No         | ✅ Yes               | Run all requests in parallel       |
| `concatMap`  | ❌ No             | ❌ No         | ❌ No                | Run in sequence                    |
| `switchMap`  | ✅ Yes            | ❌ No         | ✅ Yes (latest only) | Only latest matters (search input) |
| `exhaustMap` | ❌ No             | ✅ Yes        | ❌ No                | Only first matters until done      |

*/