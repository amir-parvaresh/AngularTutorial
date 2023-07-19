import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @Input() defaultColor: string = 'transparent';
  @Input('appBetterHighlight') highlightColor: string = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor:string = 'transparent';

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
  ngOnInit() {
    this.backgroundColor = this.defaultColor;
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }
  @HostListener('mouseenter') mouseOver(eventData: Event) {
    this.backgroundColor = this.highlightColor;
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }
  @HostListener('mouseleave') mouseLeft(eventData: Event) {
    this.backgroundColor = this.defaultColor;
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
  }
}
