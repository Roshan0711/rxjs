import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { RxjsServiceService } from '../../../../services/rxjs-service.service'

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent implements OnInit , OnDestroy {
  count : any = 0
  intervalStream! : Subscription
  constructor(
    private rxjs : RxjsServiceService
  ) { }

  ngOnInit(): void {

    const Stream = interval(1000);
    this.intervalStream = Stream.subscribe((res)=>{
      const msg = "video" + ' ' + this.count++
      this.rxjs.LiAppend(msg,'ulId');    

      if(res >= 5){
        this.intervalStream.unsubscribe();
      }
    })
  }

  ngOnDestroy(): void {
      
  }
}

/*
What is interval in RxJS?
interval is a creation operator in RxJS that emits an increasing number at a specified time interval.
It's commonly used for polling, animations, timers, or periodic tasks.

Interview Answer Template:
"interval is an RxJS operator that creates an observable which emits sequential numbers at regular time intervals. 
It’s often used for polling APIs, updating the UI periodically, or creating timers. 
It runs indefinitely until unsubscribed."

syntax
interval(period: number): Observable<number>


Use Case in Angular: 
1) Auto-refresh every 5 seconds


What's the difference between interval and timer?
interval emits values repeatedly at regular intervals, starting after the first delay.
timer can emit once after a delay, or repeatedly like interval if passed two arguments.
*/

