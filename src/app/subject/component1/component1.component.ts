import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RxjsServiceService } from 'src/services/rxjs-service.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss'],
})
export class Component1Component implements OnInit {
  username: string = '';
  constructor(private rxjs: RxjsServiceService) {
    this.rxjs.username.subscribe((res) => {
      this.username = res;
    });
  }

  ngOnInit(): void {}

  getName(inputText1 : any) {
    console.log(inputText1.value);
    this.username = inputText1.value;
    this.rxjs.username.next(inputText1.value);
    inputText1.value =''
  }
}
