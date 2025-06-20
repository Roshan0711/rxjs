import { Component, OnInit } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { map, mergeAll, mergeMap } from 'rxjs/operators';
import { RxjsServiceService } from 'src/services/rxjs-service.service';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.scss']
})
export class MergeMapComponent implements OnInit {

  constructor(
    private rxjs : RxjsServiceService
  ) { }

  ngOnInit(): void {
    const source = from(['tech', 'comedy', 'news']);

    //Ex :1 | Map

    source.pipe(map(res=>this.getData(res))).subscribe((res)=>res.subscribe((res2)=>{
      this.rxjs.LiAppend(res2,"elId1")
    }))


    //Ex :2 | Map + Merge All

    source.pipe(map(res=>this.getData(res)),mergeAll()).subscribe((res)=>{
      this.rxjs.LiAppend(res,"elId2")
    })

    //Ex :3 | MergeMap

    source.pipe(mergeMap(res=>this.getData(res))).subscribe((res)=>{
      this.rxjs.LiAppend(res,"elId3")
    })
  }

  getData(data:any) : Observable<any>{
    return of(data + ' ' + 'Videos Uploaded')
  }

}


/*
MergeMap = mergeAll (observable) + Map (observable)

RxJS mergeMap – Interview-Focused Explanation

💬 Interview Answer:
mergeMap is a higher-order RxJS operator that maps each emitted value to an inner observable, 
then merges all inner observables to emit values concurrently. 
It’s best when you want to run all operations in parallel, without waiting for one to finish.

Why is it called mergeMap?
map → Transforms value

merge → All resulting observables are merged (parallel execution)
So: map + merge = mergeMap



| Scenario                            | Why `mergeMap`?                        |
| ----------------------------------- | -------------------------------------- |
| API calls on loop or user inputs    | Parallel, non-blocking                 |
| Multiple uploads/downloads          | Allow all to proceed simultaneously    |
| Combine click events with API calls | Each click triggers an independent API |


Q: What's the difference between mergeMap and concatMap?
mergeMap runs inner observables concurrently, concatMap queues them and runs one after the other.

Q: What happens if inner observable emits multiple values?
All of them are merged into the output stream — no cancellation or delay.



| Operator    | Concurrency     | Order Preserved | Cancels Previous | Use Case                                   |
| ----------- | --------------- | --------------- | ---------------- | ------------------------------------------ |
| `mergeMap`  | ✅ Yes           | ❌ No            | ❌ No             | Multiple API calls (parallel)              |
| `concatMap` | ❌ No            | ✅ Yes           | ❌ No             | Ordered, sequential API calls              |
| `switchMap` | ✅ One at a time | ❌ No            | ✅ Yes            | Latest-only operations (e.g. search input) |



Interviewers love asking: “What if user types quickly and every keystroke fires an API call using mergeMap?”
You should say: “It may cause race conditions. If only the latest result is needed, switchMap is a better fit.”




✅ RxJS mergeAll – Interview-Focused Explanation
mergeAll is a flattening operator in RxJS that takes an observable which emits other observables (i.e., higher-order observable), and flattens it by subscribing to all inner observables concurrently, merging their emissions into one stream.

| Feature       | Description                                      |
| ------------- | ------------------------------------------------ |
| Type          | Flattening operator                              |
| Input         | Observable\<Observable<T>>                       |
| Behavior      | Subscribes to all inner observables concurrently |
| Equivalent to | `map + mergeAll = mergeMap`                      |
| Use case      | Flatten nested observables in parallel           |


Common Interview Questions:
Q: When do you need mergeAll instead of mergeMap?
When you want explicit control: first map to observable, then flatten manually.

Q: What happens if inner observables never complete?
mergeAll keeps listening until all inner and outer observables complete.
*/
