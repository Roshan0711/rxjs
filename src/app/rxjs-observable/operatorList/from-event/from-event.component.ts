import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { RxjsServiceService } from '../../../../services/rxjs-service.service'
@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss']
})
export class FromEventComponent implements OnInit , AfterViewInit {
  @ViewChild('button') button! : ElementRef<any>;
  count = 1; 

  constructor(
    private rxjs : RxjsServiceService
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    fromEvent(this.button.nativeElement,'click').subscribe((res:any)=>{
      let text = "video" + " " + this.count++
      this.rxjs.LiAppend(text,'ulId');    
      this.rxjs.LiAppend(text,'ulId1');    
    })
  }
}

/*
What is fromEvent in RxJS?
fromEvent is an RxJS creation operator used to create an observable from DOM events (or Node.js EventEmitters).

Interview Answer Template:
"fromEvent is a creation operator in RxJS that allows us to listen to DOM events and turn them into observable streams. 
It's commonly used in Angular to handle things like click events, key presses, or scroll events in a reactive way. 
This helps us manage async behavior more declaratively."

syntax
fromEvent(target: EventTarget, eventName: string): Observable<Event>

What’s the benefit over just using (click) in Angular templates?
Using fromEvent gives you full control over the stream. 
You can pipe multiple RxJS operators (like filtering, throttling, mapping), and manage complex scenarios like combining multiple events.


How do you debounce or throttle clicks?
You can use fromEvent with operators like debounceTime or throttleTime to control event frequency.
*/
