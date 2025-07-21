import { Component, OnDestroy, OnInit } from '@angular/core';
import { observable, Observable, Subscription } from 'rxjs';
import { RxjsServiceService } from 'src/services/rxjs-service.service';

@Component({
  selector: 'app-custom-observable',
  templateUrl: './custom-observable.component.html',
  styleUrls: ['./custom-observable.component.scss'],
})
export class CustomObservableComponent implements OnInit , OnDestroy {
  status: any;
  customIntervalStatus : any
  sub! : Subscription
  count : any = 1
  name :any
  nameError! : String;
  constructor(private rxjs: RxjsServiceService) {}

  ngOnInit(): void {
    //Ex 1: (manual)
    const custom1 = new Observable((observer) => {
      setTimeout(() => {
        observer.next('Data Emit 1');
      }, 1000);

      setTimeout(() => {
        observer.next('Data Emit 2');
        // observer.error();
      }, 2000);

      setTimeout(() => {
        observer.next('Data Emit 3');
        observer.complete();
      }, 3000);
    });

    custom1.subscribe(
      (res) => {
        this.rxjs.LiAppend(res, 'ulId');
      },
      (err) => {
        this.status = 'error';
      },
      () => {
        this.status = 'completed';
      }
    );

  //Ex 2: (Custom interval)
    const custom2 = new Observable((observe)=>{
      setInterval(()=>{
        observe.next("Data Emit" +' '+ this.count)  
        if(this.count == 4){
          observe.error();
        }
      if(this.count >= 5){
        observe.complete()
      }
      this.count++;
      },1000)
    })

    custom2.subscribe(
      (res) => {
        this.rxjs.LiAppend(res, 'ulId1');
      },
      (err) => {
        this.customIntervalStatus = 'error';
      },
      () => {
        this.customIntervalStatus = 'completed';
      }
    );

  //Ex 3: (Random Name)
    let array = ["Roshan" , "Ramesh" , "Ghuge" , "bhima" , "madhuri"]
    const custom3 = new Observable((observe)=>{
      let count = 0
      setInterval(()=>{
        observe.next(array[count])  
        if(count == 2){
          observe.error('error emit');
        }
        if(count > 3){
          observe.complete()
        }
      count++;
      },1000)
    })

      custom3.subscribe(
      (res) => {
        this.name = res
      },
      (err) => {
        this.nameError = 'error'
      },
      () => {
        this.nameError = 'completed'
      }
    );

  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()    
  }

}

/*
What is a Custom Observable?
A custom observable is an observable that you create manually using the RxJS Observable constructor. 
This gives you complete control over how and when data is emitted, errors are thrown, or the stream is completed.


Interview Answer Template:
A custom observable is manually created using the Observable constructor in RxJS. 
It allows us to define exactly how the data stream behaves—including when to emit values, throw errors, or complete. 
This is useful when integrating non-RxJS async sources like WebSocket messages, event callbacks, or custom business logic.
*/
