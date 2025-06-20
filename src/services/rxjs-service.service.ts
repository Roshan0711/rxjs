import { Injectable } from '@angular/core';
import { AsyncSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RxjsServiceService {
exclusive = new Subject<boolean>();
username = new Subject<string>();
videoEmit = new ReplaySubject<any>(5);
asyncSub = new AsyncSubject<any>();

  constructor() { }

  LiAppend(text:any,id:any){
    let li = document.createElement('li');
    li.innerText = text
    document.getElementById(id)?.appendChild(li);
  }

  DivAppend(text:any,id:any){
    let div = document.createElement('div');
    div.setAttribute('class','notification');
    div.innerHTML = text
    document.getElementById(id)?.prepend(div);
  }
}
