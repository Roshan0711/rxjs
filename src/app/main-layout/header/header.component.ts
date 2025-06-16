import { Component, OnInit } from '@angular/core';
import { RxjsServiceService } from 'src/services/rxjs-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  exclusive : boolean = false;
  constructor(
    private rxjs : RxjsServiceService
  ) { 
    this.rxjs.exclusive.subscribe((res)=>{
      this.exclusive = res
    })
  }

  ngOnInit(): void {
  }

}
