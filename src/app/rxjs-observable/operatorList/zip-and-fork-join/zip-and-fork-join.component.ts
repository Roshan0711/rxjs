import { Component, ElementRef, OnInit, ViewChild ,Renderer2, AfterViewInit } from '@angular/core';
import { forkJoin, fromEvent, zip } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-zip-and-fork-join',
  templateUrl: './zip-and-fork-join.component.html',
  styleUrls: ['./zip-and-fork-join.component.scss']
})
export class ZipAndForkJoinComponent implements OnInit , AfterViewInit {
  toppingList: string[] = ['Roshan','Ramesh','Ghuge','Bhima','Madhuri','Ganesh','Ishan'];
  colours : string[] = ['red','green','blue','yellow','violet','purple','white'];

  @ViewChild('name') name! : ElementRef<any> 
  @ViewChild('colour') colour! : ElementRef<any>


  constructor(
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const nameObs = fromEvent<any>(this.name.nativeElement,'change').pipe(map((res:any)=>res?.target?.value),take(3))
    const colour = fromEvent<any>(this.colour.nativeElement,'change').pipe(map((res:any)=>res?.target?.value),take(3))
    
    //Ex : 1 | Zip
    zip(nameObs,colour).subscribe(([name,colourName])=>{
      console.log(name,colourName)
      this.createBox(name,colourName,'id')
    })

    //Ex : 2 | ForkJoin    
    forkJoin([nameObs,colour]).subscribe(([name,colourName])=>{
      console.log(name,colourName)
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
✅ RxJS zip – Interview-Ready Breakdown
💬 Interview Answer:
zip combines multiple observables by pairing their values in order — it emits the first value from each observable as a group, then the second from each, and so on. 
It waits until all observables emit before emitting a new combined value.

zip(obs1$, obs2$, obs3$).subscribe(([val1, val2, val3]) => {
  // paired values from each observable
});


🧠 Behavior Overview
Emits only when all observables have emitted the same number of values
Stops emitting when any one completes (after emitting its last paired value)
Combines values by index position

✅ When to Use zip
| Use Case                               | Why `zip`?                               |
| -------------------------------------- | ---------------------------------------- |
| ⛓️ Pairing fixed steps                 | When values must be processed in order   |
| 🎮 Game input pairing                  | Combine actions from multiple players    |
| 🧾 Combine metadata + values           | Zip file names with file contents        |
| 📊 Load multiple datasets sequentially | Values needed together and in same count |


| Operator         | Emits When?                              | Behavior                     |
| ---------------- | ---------------------------------------- | ---------------------------- |
| `zip`            | When **all emit once per round**         | Strict 1:1 pairing           |
| `combineLatest`  | When **any emits** (after all emit once) | Uses latest values from all  |
| `withLatestFrom` | When **source emits**                    | Pulls latest from others     |
| `forkJoin`       | When **all complete**                    | Emits only final values once |



🧠 Common Interview Questions
🔸 Q: What happens if one observable emits fewer values?
zip will emit only up to the shortest observable’s emissions. It then completes.

🔸 Q: Can you zip more than 2 observables?
✅ Yes, you can zip any number of observables.

🔸 Q: Is zip eager or lazy?
It’s lazy — it waits for all observables to emit the required number of values before combining them.


✅ Summary – zip
| Feature    | Description                                 |
| ---------- | ------------------------------------------- |
| Emits      | When all observables emit a new value (1:1) |
| Pairs by   | Index position                              |
| Stops when | Any observable completes                    |
| Best for   | **Synchronized** value processing           |
*/








/*
✅ RxJS forkJoin – Interview-Ready Breakdown
💬 Interview Answer:
forkJoin waits for all input observables to complete, and then emits the last emitted value from each as an array (or object). 
It’s great when you want to run multiple tasks in parallel and act only when all results are ready — like combining multiple API responses.


forkJoin([obs1$, obs2$, obs3$]).subscribe(([res1, res2, res3]) => {
  // Use the final results from each observable
});


forkJoin([
  this.api.getUserProfile(),
  this.api.getUserSettings(),
  this.api.getUserPermissions()
]).subscribe(([profile, settings, permissions]) => {
  this.profile = profile;
  this.settings = settings;
  this.permissions = permissions;
});

✅ All 3 requests run in parallel, and you get their final result together, only when all have completed.

🧠 How It Works:
Starts all observables at once (in parallel)
Waits for each to complete
Emits only once with the last values
Then completes


| Scenario                        | Why `forkJoin`?                             |
| ------------------------------- | ------------------------------------------- |
| Multiple HTTP calls on Init     | Load everything in parallel, wait once      |
| Submit combined data            | Save form sections, then emit final result  |
| Final report generation         | Wait for all stats/data streams to complete |
| Batch processing (e.g. uploads) | Wait till all file uploads complete         |


| Feature                | Behavior                                     |
| ---------------------- | -------------------------------------------- |
| Starts all observables | ✅ Yes (in parallel)                          |
| Emits                  | ❗ Only once, when all complete               |
| Emits what?            | Final value of each observable               |
| Best for               | **Batch API**, initialization, final results |










✅ RxJS Combination Operators – Final Comparison Chart

| Operator             | **When It Emits**                                                 | **Emission Type**                            | **Re-emits on New Value?** | **Requires All to Emit First?** | **Requires All to Complete?** | **Use Case / Analogy**                                 |
| -------------------- | ----------------------------------------------------------------- | -------------------------------------------- | -------------------------- | ------------------------------- | ----------------------------- | ------------------------------------------------------ |
| **`forkJoin`**       | When **all observables complete**                                 | **Last emitted value** from each observable  | ❌ No                       | ✅ Yes                           | ✅ Yes                         | Batch requests → wait for everything before continuing |
| **`zip`**            | When **all observables emit once per group**                      | **Synchronized pair-wise values**            | ✅ Yes, per cycle           | ✅ Yes                           | ❌ No                          | Step-wise pairing → one-to-one like zipping two files  |
| **`combineLatest`**  | After **all have emitted at least once**, emits on **any change** | **Latest values** from all                   | ✅ Yes                      | ✅ Yes (once)                    | ❌ No                          | Reactive filters, form values → live combination       |
| **`withLatestFrom`** | When **source observable emits**                                  | Source value + **latest values** from others | ❌ No                       | ❌ No (others may not emit)      | ❌ No                          | Enrich clicks/events with latest form/control state    |
| **`race`**           | As soon as **first observable emits**, others are ignored         | Emissions from **first** observable only     | ❌ No                       | ❌ No                            | ❌ No                          | Competing streams → return whichever "wins the race"   |



🔥 Interview Cheat Notes

| 🔹 **Operator**  | 🔸 **Think Of It Like...**                                        |
| ---------------- | ----------------------------------------------------------------- |
| `forkJoin`       | `Promise.all()` → Wait for **all results** before proceeding      |
| `zip`            | `Array.zip()` → Pair items at same index together                 |
| `combineLatest`  | Live dashboard → Update when **any source** changes               |
| `withLatestFrom` | Form + submit button → Only emit on submit with current state     |
| `race`           | First API to respond wins → good for fallbacks or fast responders |


🧠 Pro Interview Tips:
Use forkJoin for initial data loading or parallel final tasks
Use zip when events must be synchronized and ordered
Use combineLatest for reactive UIs and dynamic filters
Use withLatestFrom for one-time events like form submit + latest state
Use race for fallbacks or performance prioritization
*/
