import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'l5-rating-bar';
  onRateChange(value: any): void {
    console.log(value);
  }
}
