import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {  timer } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Component({
  selector: 'app-catch-throw-error',
  templateUrl: './catch-throw-error.component.html',
  styleUrls: ['./catch-throw-error.component.scss'],
})
export class CatchThrowErrorComponent implements OnInit {
  loading: boolean = false;
  error: string = '';
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  fetchDetails() {
    this.error = '';
    this.getData();
  }

  getData() {
    this.loading = true;
    this.http
      .get<any>('ticket-sla-svc/oracle/v1.0/getCrmCustomerLOV')
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return timer(2000).pipe(
            map(() => {
              throw error;
            }) // rethrow the error after 2 seconds
          );
        })
      )
      .subscribe(
        (res) => {
          this.loading = false;
        },
        (err) => {
          console.log(err);
          this.loading = false;
          this.error = err.message;
        }
      );
  }
}

/*
✅ 1. throwError – Interview-Ready Breakdown
💬 Interview Answer:
throwError is a creation operator in RxJS that returns an observable which immediately emits an error and completes. 
It’s used to manually simulate or throw errors in observable streams — for example, to mock failed HTTP calls.

✅ 2. catchError – Interview-Ready Breakdown
💬 Interview Answer:
catchError is an RxJS error-handling operator that catches errors in a stream and replaces the failed observable with another observable, letting the stream recover or fail gracefully.


| Question                                               | Ideal Answer                                                               |
| ------------------------------------------------------ | -------------------------------------------------------------------------- |
| **How to gracefully handle an HTTP failure in RxJS?**  | Use `catchError()` and return `of()` or a default/fallback observable      |
| **When would you use `throwError()`?**                 | To simulate/test errors or to rethrow after custom logic                   |
| **What happens if you don’t handle errors in a pipe?** | The observable completes with an error, and **no further emissions occur** |
| **Can `catchError` continue the stream?**              | ✅ Yes, by returning a new observable (like `of()`, `EMPTY`, or `retry`)    |



✅ Summary: throwError vs catchError
| Feature       | `throwError`                               | `catchError`                                 |
| ------------- | ------------------------------------------ | -------------------------------------------- |
| Purpose       | Create an observable that errors           | Catch and handle errors from previous stream |
| Emits         | ❌ No value, just an error                  | ✅ Can return fallback values                 |
| Use Case      | Simulate failure, rethrow                  | Graceful recovery, error logging             |
| Angular usage | Testing, error re-emission in interceptors | HTTP fallback, logging, retry strategies     |

*/
