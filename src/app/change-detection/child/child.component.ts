import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers :[]
})
export class ChildComponent implements OnInit {
  @Input() user!: { name: string };

  constructor(
    private cdr : ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    // this.cdr.markForCheck();
    // this.cdr.detectChanges();
    // this.cdr.checkNoChanges();
    // this.cdr.detach();
    // this.cdr.reattach();
  }

   manualDetect() {
    this.cdr.detectChanges();
  }

}
