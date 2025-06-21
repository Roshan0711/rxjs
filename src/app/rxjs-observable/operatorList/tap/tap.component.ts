import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { from, interval, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { RxjsServiceService } from 'src/services/rxjs-service.service';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss']
})
export class TapComponent implements OnInit {
  style : any
  constructor(
    private rxjs : RxjsServiceService
  ) { }

  ngOnInit(): void {
    let timer = interval(1000);
    //Ex : 1

    let array = ["Roshan" , "Ramesh" , "Ghuge" , "bhima" , "madhuri"];
    let subscribe : Subscription;
    subscribe = timer.pipe(tap((res)=>{
      console.log("res before" ,res);
        if(res>3){
          subscribe.unsubscribe();
        }
      }),
      map((res)=> array[res]),
      tap((res)=>console.log("res After",res))
    ).subscribe((res)=>{
      this.rxjs.LiAppend(res,'uILd')
    })

    //Ex : 2

    let colour = ["red", "blue", "green", "yellow", "orange", "purple", "pink", "black", "grey"];
    let subscribe1 : Subscription;
    subscribe1 = timer.pipe(tap((res)=>{
        if(res>= colour.length){
          subscribe1.unsubscribe();
        }
      }),
      map((res)=> colour[res]),
      tap((res)=>{
        this.style = res
      })
    ).subscribe((res)=>{
      this.rxjs.LiAppend(res,'uILd1')
    })
  }


}

/*
What is tap in RxJS?
tap is a side-effect operator that allows you to perform actions (like logging, updating UI, debugging, etc.) without modifying the data stream. 
It’s often used for debugging or triggering secondary effects.


Interview Answer Template:
tap is a side-effect operator in RxJS that lets you perform actions like logging or triggering non-stream code without altering the observable data. 
It's useful for debugging, setting loading indicators, or updating variables when data flows through the stream.

syntax
tap(observerOrNext: (value: T) => void): MonoTypeOperatorFunction<T>

Q: Does tap change the value in the stream?
No. tap is non-mutating. It lets values pass through untouched.

Q: What’s the difference between tap and map?
tap is used for side effects (like console logs, setting variables),
map is used to transform the emitted values.

Q: Can I perform API calls inside tap?
Avoid it. tap is for synchronous side effects only. 
For async operations, use mergeMap, switchMap, etc.

*/
