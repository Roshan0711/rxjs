import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appPane]'
})
export class PaneDirective {
  @Input() id: string = '';

  constructor() { }

}
