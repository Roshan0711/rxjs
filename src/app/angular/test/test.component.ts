import { Component, Input, OnInit } from '@angular/core';
interface User {
  id: number;
  name: string;
  email: string;
}

type Type = {
  id: number;
  name: string;
  email: string;
}

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  @Input() someInput: string = '';
  user : Array<User>;
  user1! : User
  user2 : Type | undefined

  
  constructor() {
    this.user =[
      {
        name : '',
        id : 1,
        email : 'RoshanGhuge78@gmail.com'
      }
    ]
   }
  ngOnInit(): void {


  }

}
