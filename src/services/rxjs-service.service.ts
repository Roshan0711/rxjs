import { Injectable } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RxjsServiceService {
exclusive = new Subject<boolean>();
username = new Subject<string>();
videoEmit = new ReplaySubject<any>(5);

  constructor() { }

    LiAppend(text:any,id:any){
    let li = document.createElement('li');
    li.innerText = text
    document.getElementById(id)?.appendChild(li);
  }
}
