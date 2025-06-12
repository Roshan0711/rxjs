import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { RxjsServiceService } from 'src/services/rxjs-service.service';

@Component({
  selector: 'app-of',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.scss'],
})
export class OfFromComponent implements OnInit {
  msg: any = {};
  constructor(private rxjs: RxjsServiceService) {}

  ngOnInit(): void {
    // of
    const example1 = of('Roshan', 'Ramesh', 'Ghuge');
    example1.subscribe((res) => {
      this.rxjs.LiAppend(res, 'ulId');
    });

    const example2 = of({ a: 'Roshan', b: 'Ramesh', c: 'Ghuge' });
    example2.subscribe((res) => {
      this.msg = res;
    });

    //from - array
    const example3 = from(['Roshan', 'Ramesh', 'Ghuge']);
    example3.subscribe((res) => {
      this.msg = res;
      this.rxjs.LiAppend(res, 'ulIdFrom');
    });

    //from - promise
    const example4 = from(this.promise());
    example4.subscribe((res) => {
      res.then((res) => {
        this.rxjs.LiAppend(res, 'promise');
      });
    });

    //from - String
    const example5 = from("welcome");
    example5.subscribe((res) => {
      this.rxjs.LiAppend(res, 'string');
    });
  }

  promise() {
    let promise1 = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('promise 1 resolved');
      }, 3000);
    });

    let promise2 = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('promise 2 resolved');
      }, 6000);
    });

    let promise3 = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('promise 3 resolved');
      }, 9000);
    });
    return [promise1, promise2, promise3];
  }
}

/*
| Feature  | `of`                            | `from`                                         |
| -------- | ------------------------------- | ---------------------------------------------- |
| Input    | Any values (single or multiple) | Array, Promise, Iterable, Observable           |
| Emits    | Whole value as-is               | Emits each item from the input sequentially    |
| Use case | Static or synchronous data      | Async data or iterables (Promise, array, etc.) |

Interview Answer Template:
"of and from are RxJS creation operators used to convert data into observables.
of emits the entire value as-is, whether it's a single value, object, or array.

from breaks down iterables or promises into individual emissions.
They're useful when you want to work with different data sources in a reactive way."
*/
