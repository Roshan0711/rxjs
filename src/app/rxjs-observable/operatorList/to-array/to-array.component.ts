import { Component, OnInit } from '@angular/core';
import { interval, of  } from 'rxjs';
import { take, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.scss']
})
export class ToArrayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //example 1 
    const example1 = interval(1).pipe(take(5), toArray())
    example1.subscribe(
      (res:any)=>{
        console.log(res);
      }
    );

    //example 2
    const example2 = of('Roshan', 'Ramesh', 'Ghuge');
    example2.pipe(toArray()).subscribe((resp:any) => {
      console.log(resp)
    });
  }
}

/*
What is toArray in RxJS?
toArray is a RxJS transformation operator that collects all emitted values into a single array and emits that array when the source observable completes.

Interview Answer Template:
"toArray is a transformation operator in RxJS that gathers all emitted values into an array and emits it once the source observable completes. 
It's useful when you want to collect all emitted values over time and work with them as a group instead of individually."

Syntax:
toArray(): OperatorFunction<T, T[]>

It does not emit until the source observable completes.
Often used with finite streams like range, from, or when using take()

1) Does toArray emit immediately?
No, it waits until the source completes. If the source is infinite (like interval), it will never emit unless combined with a completion operator like take().

2) Can toArray be used with HttpClient in Angular?
Usually not needed, because HTTP calls emit once and complete. But if combining multiple values (e.g., via merge or concat), toArray() might be useful to group responses.

❗️ Important Tip:
Avoid using toArray() with never-ending observables like fromEvent or interval unless you're using take, first, or takeUntil, or it will never emit.
*/
