import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
//   template: `
//     <app-customers></app-customers>
//   `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
      throw new Error("Method not implemented.");
  }
  title = 'first-web';
}
