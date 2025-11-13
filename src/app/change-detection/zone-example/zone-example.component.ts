import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zone-example',
  templateUrl: './zone-example.component.html',
  styleUrls: ['./zone-example.component.scss']
})
export class ZoneExampleComponent implements OnInit {
  count = 0;
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      // Zone.js patches setTimeout → triggers change detection automatically
      this.count++;
    }, 1000);
  }

}
