import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'hello-world';
ngOnInit() {
}
constructor() {
}
  serverElements = [{type: 'server', name: 'TestServer', content: 'this is test server'}];
  newServerName = '';
  newServerContent = '';
}
