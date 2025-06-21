import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { combineLatest, fromEvent } from 'rxjs';
import { map, withLatestFrom } from 'rxjs/operators';

@Component({
  selector: 'app-combine-latest',
  templateUrl: './combine-latest.component.html',
  styleUrls: ['./combine-latest.component.scss']
})
export class CombineLatestComponent implements OnInit , AfterViewInit {
  toppingList: string[] = ['Roshan','Ramesh','Ghuge','Bhima','Madhuri','Ganesh','Ishan'];
  colours : string[] = ['red','green','blue','yellow','violet','purple','black'];

  @ViewChild('name') name! : ElementRef<any> 
  @ViewChild('colour') colour! : ElementRef<any>

  constructor(
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const nameObs = fromEvent<any>(this.name.nativeElement,'change').pipe(map((res:any)=>res?.target?.value))
    const colour = fromEvent<any>(this.colour.nativeElement,'change').pipe(map((res:any)=>res?.target?.value))

    //Ex : 1 | combineLatest
    combineLatest([nameObs,colour]).subscribe(([name,colourName])=>{
      console.log(name,colourName)
      this.createBox(name,colourName,'id')
    })

    //Ex : 2 | WithLatestFrom
    // Master : nameObs
    // slave : colour
    
    nameObs.pipe(withLatestFrom(colour)).subscribe(([name,colourName])=>{
      this.createBox(name,colourName,'id2')
    })

  }

  createBox(name: string, colour: string, containerId: string) {
  const div = this.renderer.createElement('div');
  const text = this.renderer.createText(name);

  this.renderer.appendChild(div, text);
  this.renderer.addClass(div, 'colourClass');
  this.renderer.setStyle(div, 'background-color', colour);

  const container = document.getElementById(containerId);
  if (container) {
    this.renderer.appendChild(container, div);
  }
  }


}

/*
RxJS combineLatest

combineLatest combines the latest values from multiple observables and emits a new value every time any one of them emits, using the most recent values from all sources. 
It's perfect when you want to react to the combination of changing values — like filters or form controls.


combineLatest([obs1$, obs2$, obs3$]).subscribe(([v1, v2, v3]) => {});

🧠 Every time either stream emits, the latest values from both are combined.



| Scenario                           | Why `combineLatest`?                       |
| ---------------------------------- | ------------------------------------------ |
| 🎛️ Multiple form fields / filters | Emit result when any input changes         |
| 📦 Filter + search + sort combo    | Combine dropdowns, text input, and toggles |
| 🧪 Reactive forms                  | Watch multiple `FormControl.valueChanges`  |
| 📉 Chart + date range              | Combine date range + refresh button        |



| Characteristic       | Value                              |
| -------------------- | ---------------------------------- |
| Waits for all        | ✅ Yes, before first emit           |
| Emits when any emits | ✅ Yes                              |
| Emits what?          | Array of **latest values**         |
| Order of output      | Matches input order of observables |



| Feature        | `combineLatest`                                               | `forkJoin`                              |
| -------------- | ------------------------------------------------------------- | --------------------------------------- |
| Emits          | Every time any observable emits (after all have emitted once) | Once, when **all observables complete** |
| Caching values | ✅ Yes (keeps latest)                                          | ❌ No (only emits once)                  |
| Use case       | Dynamic UI updates                                            | Final results after all tasks finish    |



🧠 Common Interview Questions:
🔸 Q: What happens if one observable hasn't emitted yet?
combineLatest waits until all observables have emitted at least once before emitting.

🔸 Q: Can I combine more than two streams?
✅ Yes — it supports any number of observables, passed as an array.

🔸 Q: What’s the difference between combineLatest and withLatestFrom?
combineLatest: Emits any time any source emits

withLatestFrom: Emits only when the primary source emits, combining with latest from others



| Feature                | Behavior                                |
| ---------------------- | --------------------------------------- |
| Combines               | Latest values from multiple observables |
| Emits                  | When **any source** emits               |
| Waits for all sources? | ✅ Yes (at least one emit each)          |
| Use case               | Reactive forms, filters, dynamic UIs    |

*/




/*
✅ RxJS withLatestFrom – Interview-Ready Breakdown
💬 Interview Answer:
withLatestFrom combines the latest value from one or more other observables with the current value from the source observable, but it only emits when the source emits. 
It’s useful when you want to enrich one stream with data from another.

source$.pipe(withLatestFrom(other$)).subscribe(([sourceVal, otherVal]) => {
  // combined logic
});

Think of it as:
“When source$(parent) emits → fetch the latest values from other$ (slave)”


✅ Use Cases:

| Scenario                        | Why `withLatestFrom`?                        |
| ------------------------------- | -------------------------------------------- |
| 🧾 Button click + form value    | Use latest form data only when clicked       |
| 🧠 Action + shared state        | Enrich action with latest context            |
| 📊 Live chart + config snapshot | Combine chart data point with latest setting |
| 🧪 Testing event + data stream  | Pair user events with latest API/state info  |



✅ Real-World Angular Example: Auth Header

this.refreshTokenClick$.pipe(
  withLatestFrom(this.authService.token$),
  switchMap(([_, token]) => this.api.refreshToken(token))
).subscribe();

✅ When the refresh token button is clicked, get the latest auth token and use it in the HTTP request.


| Operator         | Emits When?                | Combines With?              |
| ---------------- | -------------------------- | --------------------------- |
| `combineLatest`  | When **any** emits         | Latest values from **all**  |
| `withLatestFrom` | When **source** emits only | Latest from **others (1+)** |
| `forkJoin`       | When **all complete**      | Final result                |
| `zip`            | When **all emit once**     | Paired in strict order      |



Q: What's the key difference between combineLatest and withLatestFrom?
combineLatest emits when any observable emits.
withLatestFrom emits only when the main source emits — it just fetches latest values from others at that time.




✅ Summary – withLatestFrom

| Feature       | Description                                         |
| ------------- | --------------------------------------------------- |
| Emits         | Only when **source observable** emits               |
| Combines with | Latest value(s) from other observable(s)            |
| Use case      | Button clicks with latest form values, shared state |
| Best for      | **Event-triggered enrichment**                      |

*/