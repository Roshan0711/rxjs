import { HttpClientModule } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exhaust-map',
  templateUrl: './exhaust-map.component.html',
  styleUrls: ['./exhaust-map.component.scss']
})
export class ExhaustMapComponent implements OnInit , AfterViewInit {
  num : any = 0
  constructor(
    private http : HttpClientModule,
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
      
  }

  onclick(){
    
  }
}
