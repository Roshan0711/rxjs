import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/services/common.service';

@Component({
  selector: 'app-angular-definition',
  templateUrl: './angular-definition.component.html',
  styleUrls: ['./angular-definition.component.scss']
})
export class AngularDefinitionComponent implements OnInit {

  constructor(
    private commonService : CommonService
  ) { }

  ngOnInit(): void {
    this.commonService.getApi('https://fake-json-api.mock.beeceptor.com/users ').subscribe((res)=>{
      console.log(res)
    })
    this.commonService.postApi('https://dummyjson.com/posts/add',{
    title: 'I am in love with someone.',
    userId: 5,
  }).subscribe((res)=>{
      console.log(res)
    },(err)=>{
      console.log(err)
    })
  }

}
