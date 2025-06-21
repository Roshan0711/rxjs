import { Component, OnInit } from '@angular/core';
import { concat, interval } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { RxjsServiceService } from 'src/services/rxjs-service.service';

@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.scss']
})
export class ConcatComponent implements OnInit {

  constructor(
    private rxjs : RxjsServiceService
  ) { }

  ngOnInit(): void {
    const sourceTech = interval(1000).pipe(map(res=>'Tech Video' + ' ' + (res+1)),take(5));
    const sourceComedy = interval(1000).pipe(map(res=>'Comedy Video' + ' ' + (res+1)),take(3));
    const sourceNews = interval(1000).pipe(map(res=>'News Video' + ' ' + (res+1)),take(4));

    concat(sourceTech,sourceComedy,sourceNews).subscribe((res)=>{
      this.rxjs.LiAppend(res,'ulId')
    })
  }
}

/*
concat (Creation Operator)
💬 Interview Answer:
concat is a higher-order creation operator in RxJS that joins multiple observables and emits their values sequentially, 
one after another — only starting the next observable once the previous one completes.

Use Case:
Run observables in sequence
Step-by-step API calls
Combine static + delayed streams
*/