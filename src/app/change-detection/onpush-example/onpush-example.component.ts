import { ApplicationRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onpush-example',
  templateUrl: './onpush-example.component.html',
  styleUrls: ['./onpush-example.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class OnpushExampleComponent implements OnInit {

  counter = 0;
  constructor(
    private cdr: ChangeDetectorRef,
    private app : ApplicationRef
  ) {}

  ngOnInit(): void {
  }


  increment() {
    this.counter++;
    // Normally this wouldn't update the UI (no @Input change)
    this.cdr.markForCheck(); // forces re-check in next CD cycle
    this.app.tick(); // manually run zone.js when zone js is disabled
  }


}
