import {
  AfterContentInit,
  Component,
  ContentChild,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None //This will turn off the view Encapsulation. All the CSSs will have global
  // scope now (red label will be applied to all the labels)
})
export class ServerElementComponent implements OnInit, AfterContentInit {
  @Input('srvElement') element: {type: string, name: string, content: string};
  @ContentChild('contentParagraph', {static: true}) contentParagraph!: ElementRef ;

  ngOnInit() {
    console.log(this.contentParagraph.nativeElement.textContent);
  }
  constructor() {
    this.element = {type: 'hi', content: 'hi', name: 'hi'};
  }
  ngAfterContentInit() {
    // This will be only shown here
    console.log(this.contentParagraph.nativeElement.textContent);
  }
}
