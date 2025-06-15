import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { pluck, toArray } from 'rxjs/operators';
import { RxjsServiceService } from 'src/services/rxjs-service.service';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.scss'],
})
export class PluckComponent implements OnInit {
  data1 : any;
  data2 : any;
  constructor(private rxjs: RxjsServiceService) {}

  ngOnInit(): void {
    const members = from([
      {
        id: 1,
        name: 'Roshan',
        skill: 'Javascript',
        job : {
          title : "SDE-1",
          exp : "3 yrs"
        }
      },
      {
        id: 2,
        name: 'Ramesh',
        skill: 'Angular',
          job : {
          title : "SDE-5",
          exp : "3 yrs"
        }
      },
      {
        id: 3,
        name: 'Ghuge',
        skill: 'Python',
          job : {
          title : "SDE-4",
          exp : "3 yrs"
        }
      },
      {
        id: 4,
        name: 'Bhima',
        skill: 'Spring boot',
          job : {
          title : "SDE-2",
          exp : "3 yrs"
        }
      },
      {
        id: 5,
        name: 'Madhuri',
        skill: 'java',
          job : {
          title : "SDE-3",
          exp : "3 yrs"
        }
      },
    ]);

    // EX : 1
    members.pipe(pluck('name'),toArray()).subscribe((res)=>{
      this.data1 = res;
      console.log(res)
    })
  
    // EX : 2
    members.pipe(pluck('job','title'),toArray()).subscribe((res)=>{
      this.data2 = res;
      console.log(res)
    })
  }
}

/*
What is pluck in RxJS?
pluck is a transformation operator used to extract a specific property (or nested properties) from objects emitted by an observable.
📌 Note: As of RxJS v7+, pluck is deprecated. It's better to use map instead. But you might still be asked about it in interviews.


Interview Answer Template:
pluck is a shortcut RxJS operator that extracts a property from emitted objects. 
It’s useful when you just want to pick a specific field, like user.name or response.data.id. 
However, in RxJS 7+, it’s deprecated in favor of using map for better readability and flexibility.

Syntax
pluck(...properties: string[]): Observable<any>


Q. Why is pluck deprecated in RxJS 7+?
pluck can be less readable in complex structures and has type-safety issues in TypeScript.
Using map gives more control and better type inference.

Q: How would you write the same logic using map?
.pipe(map(obj => obj.user.name))

*/
