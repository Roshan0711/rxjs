import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RxjsServiceService {

  constructor() { }

    LiAppend(text:any,id:any){
    let li = document.createElement('li');
    li.innerText = text
    document.getElementById(id)?.appendChild(li);
  }
}
