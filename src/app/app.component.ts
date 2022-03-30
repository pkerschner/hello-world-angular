import { Component } from '@angular/core';
import { MaxLengthValidator } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The Bootcamp';
  maxOn: boolean = true;
  names: string[] = [ "Ann", "Bob", "Chris", "David", "Ellen" ];
  customers: any[] = [
    { id: 1, name: "Max", sales: 1000, state: "OH" },
    { id: 2, name: "PG", sales: 10000, state: "OH" },
    { id: 3, name: "Kroger", sales: 100000, state: "CA" }
  ];

  aString1: string = "";
  aString2: string = "";

  copy(): void {
    this.aString2 = this.aString1;
  }

  clicked(): void {
    if(this.maxOn) {
      this.title = "The MAXimum boot camp";
      this.maxOn = !this.maxOn;
    } else {
      this.maxOn = !this.maxOn;
      this.title = "The boot camp";
    }
  }
}
