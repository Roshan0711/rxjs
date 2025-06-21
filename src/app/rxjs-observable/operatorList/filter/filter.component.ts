import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { filter, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  data1 :any
  data2 :any
  constructor() {}

  ngOnInit(): void {
    const members = from([
      {
        id: 1,
        name: 'Roshan',
        skill: 'Javascript',
        gender: 'male',
        job: {
          title: 'SDE-1',
          exp: '3 yrs',
        },
      },
      {
        id: 2,
        name: 'Ramesh',
        skill: 'Angular',
        gender: 'male',
        job: {
          title: 'SDE-5',
          exp: '3 yrs',
        },
      },
      {
        id: 3,
        name: 'Ghuge',
        skill: 'Python',
        gender: 'male',
        job: {
          title: 'SDE-4',
          exp: '3 yrs',
        },
      },
      {
        id: 4,
        name: 'Bhima',
        skill: 'Spring boot',
        gender: 'female',
        job: {
          title: 'SDE-2',
          exp: '3 yrs',
        },
      },
      {
        id: 5,
        name: 'Madhuri',
        skill: 'java',
        gender: 'female',
        job: {
          title: 'SDE-3',
          exp: '3 yrs',
        },
      },
    ]);
    // Ex : 1 by Name length 
    members.pipe(filter((res)=>res.name.length > 4),toArray()).subscribe((res)=>{
      this.data1 = res;
      console.log(res)
    })

    // Ex : 2 by Gender 
    members.pipe(filter((res)=>res.gender == 'male'),toArray()).subscribe((res)=>{
      this.data2 = res;
      console.log(res)
    })

  }
}

/*
 What is filter in RxJS?
filter is a filtering operator that allows you to control which values pass through the observable stream. 
It only emits values that satisfy a given predicate condition.

Interview Answer Template:
filter is a RxJS operator used to emit only those values from the observable stream that satisfy a specified condition. 
It works similarly to JavaScript's Array.prototype.filter, but it's applied to asynchronous streams. 
It's useful when you need to ignore certain values like nulls, empty strings, or unwanted data based on business rules.

Syntax
filter(predicate: (value: T, index: number) => boolean): Observable<T>


Q. What's the difference between filter and takeWhile?
filter continues checking each value and allows multiple valid emissions.
takeWhile stops the stream as soon as the condition fails.


❗️Important Tip:
Use filter to clean or validate data before it reaches your business logic or UI.
*/
