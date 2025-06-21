import { Component, OnInit } from '@angular/core';
import { RxjsServiceService } from 'src/services/rxjs-service.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.scss'],
})
export class Component2Component implements OnInit {
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
