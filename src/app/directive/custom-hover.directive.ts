import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCustomHover]',
})
export class CustomHoverDirective {
  @Input() appCustomHover = '';

  constructor(private ele: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appCustomHover);
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }
  private highlight(color: string) {
    this.ele.nativeElement.style.backgroundColor = color;
    // this.ele.nativeElement.style.color = 'green';
  }
}
