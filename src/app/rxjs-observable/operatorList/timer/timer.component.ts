import { Component, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { RxjsServiceService } from '../../../../services/rxjs-service.service'
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  intervalStream! : Subscription
  count : any = 0;
  constructor(
    private rxjs : RxjsServiceService
  ) { }

  ngOnInit(): void {
    const time = timer(5000,1000) //timer(delay,interval)
    this.intervalStream = time.pipe(take(5)).subscribe((res)=>{
      const msg = "video" + ' ' + this.count++
      this.rxjs.LiAppend(msg,'ulId');    
    })
  }
}

/*
What is timer in RxJS?
timer is a creation operator that emits a number after a delay or at a delay + regular interval. 
Think of it as a more flexible version of setTimeout and setInterval combined.

Interview Answer Template:
timer in RxJS is used to create an observable that emits after a specific delay or after a delay and then continues to emit values at regular intervals. 
It's useful for delayed execution, retry logic, and polling with a delay. Unlike interval, it gives more control over the initial delay and emission frequency.
*/
