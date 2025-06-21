import { Component, OnInit } from '@angular/core';
import { from, interval , Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { RxjsServiceService } from 'src/services/rxjs-service.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  sub1! : Subscription
  sub2! : Subscription
  constructor(
    private rxjs : RxjsServiceService
  ) { }

  ngOnInit(): void {
    
    const val = interval(1000)

    //Ex : 1
    this.sub1 = val.pipe(map((res:any)=> "Video" + " "+res)).subscribe((res)=>{
      this.rxjs.LiAppend(res,"ulId");
    })

    setTimeout(()=>{
      this.sub1.unsubscribe();
    },5000)


    //Ex: 2
    this.sub2 = val.pipe(map((res:any)=> "Video" + " "+res*10)).subscribe((res)=>{
    this.rxjs.LiAppend(res,"ulId1");
    })

    setTimeout(()=>{
      this.sub2.unsubscribe();
    },5000)

    //Ex : 3
    const members = from([
      {
        id : 1,
        name : "Roshan"
      },
      {
        id : 2,
        name : "Ramesh"
      },
      {
        id : 3,
        name : "Ghuge"
      },
      {
        id : 4,
        name : "Bhima"
      },
      {
        id : 5,
        name : "Madhuri"
      }
    ])

    members.pipe(map((res)=>res.name)).subscribe((res)=>{
    this.rxjs.LiAppend(res,"ulId2");
    })
  }

}


/*
What is map in RxJS?
map is a transformation operator in RxJS that lets you transform the values emitted by an observable using a projection function. 
It's similar to JavaScript's Array.prototype.map(), but used in a reactive stream.

Interview Answer Template:
map in RxJS is used to transform each value emitted by an observable. It takes a projection function and applies it to every emission. 
This is useful when you want to modify API responses, extract data, or apply calculations on the fly before passing data downstream.

syntax
map(project: (value: T, index: number) => R): Observable<R>


Q: Can map be used with nested observables (like HTTP inside HTTP)?
No. For nested observables, you should use switchMap, mergeMap, or concatMap.
map only transforms values, it does not flatten inner observables.

Q: What’s the difference between map and mergeMap?

map transforms data, but doesn't deal with inner observables.
mergeMap flattens and merges inner observables into the outer stream.
*/
