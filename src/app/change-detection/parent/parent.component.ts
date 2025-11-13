import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  user = { name: 'Roshan' };

  constructor(
  ) { }

  ngOnInit(): void {
  }
  


  changeName() {
    // Same reference, only property changes
    this.user.name = 'Updated Roshan';
    // this.user = {...this.user} // change in refrence so manually can trigger change detection onPush strategy
  }

}
