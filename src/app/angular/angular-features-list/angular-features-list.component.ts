import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-features-list',
  templateUrl: './angular-features-list.component.html',
  styleUrls: ['./angular-features-list.component.scss']
})
export class AngularFeaturesListComponent implements OnInit {
  angularList : any =[
    {
      name : "what is Angular",
      link : "angular-definition"
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
