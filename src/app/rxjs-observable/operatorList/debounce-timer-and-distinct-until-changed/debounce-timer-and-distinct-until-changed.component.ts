import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-debounce-timer-and-distinct-until-changed',
  templateUrl: './debounce-timer-and-distinct-until-changed.component.html',
  styleUrls: ['./debounce-timer-and-distinct-until-changed.component.scss']
})
export class DebounceTimerAndDistinctUntilChangedComponent implements OnInit , AfterViewInit {
  @ViewChild("inputText1") inputText1! : ElementRef<any>;
  @ViewChild("inputText2") inputText2! : ElementRef<any>;
  inputText1Value : any = null;
  inputText2Value : any = null;
  constructor(
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    //Ex :1 (debounceTime)
    const searchTerm = fromEvent<any>(this.inputText1.nativeElement , 'keyup');
    searchTerm.pipe(debounceTime(1000),map((res)=>res.target.value)).subscribe((res)=>{
      this.inputText1Value = res;
      console.log(res)
      setTimeout(()=>{this.inputText1Value = null},2000)
    });

    //Ex: 2 (distinctUntilChanged)
    const searchTerm1 = fromEvent<any>(this.inputText2.nativeElement , 'keyup');
    searchTerm1.pipe(debounceTime(1000),map((res)=>res.target.value),distinctUntilChanged()).subscribe((res)=>{
      this.inputText2Value = res;
      console.log(res)
      setTimeout(()=>{this.inputText2Value = null},2000)
    });
  }
}


/*
✅ 1. debounceTime – Delay Emissions Until User Pauses
💬 Interview Answer:
"debounceTime is a filtering operator that delays the emission of a value from the source observable by a specified time. 
If a new value comes in before the delay ends, it resets the timer. 
It's most commonly used to limit API calls while the user is typing."

✅ 2. distinctUntilChanged – Filter Repeated Values
💬 Interview Answer:
"distinctUntilChanged prevents duplicate consecutive emissions. It only lets a value through if it's different from the previous one. 
It's useful for avoiding unnecessary UI updates or repeated HTTP calls with the same data."


Common Interview Questions:
Q: Can distinctUntilChanged work with deep objects?
Not by default. You need to pass a custom compare function like JSON.stringify().

Q: Why use both debounceTime and distinctUntilChanged?
To reduce server load and prevent duplicate API calls.

Q: When would you use throttleTime instead of debounceTime?
Use throttleTime to limit frequency, not wait for pause (e.g., scroll events).


*/
