import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appBorderRadius]'
})
export class BorderRadiusDirective {

  @Input() borderRadius = '';

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.borderRadius = this.borderRadius ? `${this.borderRadius}px` : '12px'
  }

}
