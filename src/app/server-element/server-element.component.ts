import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None //This will turn off the view Encapsulation. All the CSSs will have global
  // scope now (red label will be applied to all the labels)
})
export class ServerElementComponent implements OnInit {
  @Input('srvElement') element: {type: string, name: string, content: string};

  ngOnInit() {
  }
  constructor() {
    this.element = {type: 'hi', content: 'hi', name: 'hi'};
  }
}
