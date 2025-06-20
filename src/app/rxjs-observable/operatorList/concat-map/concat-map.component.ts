import { Component, OnInit } from '@angular/core';
import { concat, from, Observable, of } from 'rxjs';
import { concatAll, concatMap, delay, map, mergeMap } from 'rxjs/operators';
import { RxjsServiceService } from 'src/services/rxjs-service.service';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.scss'],
})
export class ConcatMapComponent implements OnInit {
  list = [
    {
      id: 1,
      name: 'Facebook',
      iconUrl:
        'https://img.icons8.com/?size=100&id=TrRMlGqxzn7H&format=png&color=000000',
      time: '4 Second Ago',
      userName: 'Ajax Johnson',
      comment: 'Commented on your #Uxtrenzz Post: Awesome Post !!!! Thanks..',
    },
    {
      id: 2,
      name: 'Twitter',
      iconUrl: 'https://img.icons8.com/?size=100&id=phOKFKYpe00C&format=png&color=000000',
      time: '3 Second Ago',
      userName: 'James Smith',
      comment: 'Commented on your #Uxtrenzz Post: Awesome Post !!!! Thanks..',
    },
    {
      id: 3,
      name: 'Facebook',
      iconUrl:
        'https://img.icons8.com/?size=100&id=TrRMlGqxzn7H&format=png&color=000000',
      time: '2 Second Ago',
      userName: 'David Smith',
      comment:
        'Posted : Autem delcires qui tempora expedita dolatimus similique quae nam consectetur..',
    },
    {
      id: 4,
      name: 'Twitter',
      iconUrl: 'https://img.icons8.com/?size=100&id=phOKFKYpe00C&format=png&color=000000',
      time: '5 Second Ago',
      userName: 'Elon Smith',
      comment: 'Posted : Hey how are you !!!!!',
    },
  ];

  constructor(private rxjs: RxjsServiceService) {}

  ngOnInit(): void {
    const source = from(['tech', 'comedy', 'news']);

    //Ex :1 | (Concat)
    source.pipe(map((res) => this.getData(res))).subscribe((res) =>
      res.subscribe((res2) => {
        this.rxjs.LiAppend(res2, 'elId1');
      })
    );

    //Ex :2 | Map + Concat All

    source
      .pipe(
        map((res) => this.getData(res)),
        concatAll()
      )
      .subscribe((res) => {
        this.rxjs.LiAppend(res, 'elId2');
      });

    //Ex :3 | Merge Map

    source.pipe(mergeMap((res) => this.getData(res))).subscribe((res) => {
      this.rxjs.LiAppend(res, 'elId3');
    });

    //Ex :4 | concat Map

    source.pipe(concatMap((res: any) => this.getData(res))).subscribe((res) => {
      this.rxjs.LiAppend(res, 'elId4');
    });

    // Ex : 5 | Mobile Notification

    from(this.list)
      .pipe(
        // mergeMap((res) => this.getHtml(res)) (come all together)
        concatMap((res) => this.getHtml(res)) //(come all in sequence)
      )
      .subscribe((res) => {
        this.rxjs.DivAppend(res, 'div1');
      });
  }

  getData(data: any): Observable<any> {
    return of(data + ' ' + 'Videos Uploaded').pipe(delay(2000));
  }

  getHtml(res: any): Observable<any> {
    return of(
      `<div class="platform">${res.name}</div>
      <div class="time">${res.time}</div>
      <div class="content">
        <img src="${res.iconUrl}" alt="Post Thumbnail" />
        <div class="text">
          <strong>${res.userName}</strong><br>
          ${res.comment}        
        </div>
      </div>`
    ).pipe(delay(2000));
  }
}

/*
✅ 2. concatAll

💬 Interview Answer:
concatAll subscribes to each inner observable one at a time, in sequence. 
It waits for the current inner observable to complete before moving to the next.

Behavior:
🔁 Sequential ✅
🕒 Order preserved? ✅
🐢 Slow if inner observables take time


| Operator     | Behavior                                   | Cancels Previous | Order Preserved | Concurrency |
| ------------ | ------------------------------------------ | ---------------- | --------------- | ----------- |
| `mergeAll`   | Subscribes to all inner obs                | ❌ No             | ❌ No            | ✅ Yes       |
| `concatAll`  | Runs one inner obs at a time (in order)    | ❌ No             | ✅ Yes           | ❌ No        |
| `switchAll`  | Switches to latest, cancels previous       | ✅ Yes            | ❌ No            | ✅ Yes       |
| `exhaustAll` | Runs only first, ignores others until done | ✅ Ignores new    | ❌ No            | ❌ No        |


*/
