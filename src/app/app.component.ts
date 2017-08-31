import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>Hello {{name}}</h1>

    <p>{{name}} is at {{street}} in the {{city}} in {{province}} province.</p>

    <input [value]="name" (input)="name = $event.target.value" /> <br> <br>
    <input [value]="name" (keyup)="name = $event.target.value" /> <br> <br>
    <input [value]="name" (blur)="name = $event.target.value" (keyup.Enter)="name = $event.target.value" /> <br> <br>

    <input [(ngModel)]="name" /> <br> <br>

    <input [ngModel]="name" (ngModelChange)="name = $event" /> <br> <br>

    <label><input type="checkbox" [(ngModel)]="showAddress"/> Show Address</label> <br> <br>

    <button (click)="toggleAddress()">Show/Hide Address</button> <br>

    <div [hidden]="!showAddress">
      <fieldset>
        <label>Street: {{street}}</label>
      </fieldset>
      <fieldset>
      <label>City: {{city}}</label>
      </fieldset>
      <fieldset>
      <label>Province: {{province}}</label>
      </fieldset>
    </div>
    

    <!--<select #selector (change)="changeColor(selector.value)">
      <option>Green</option>
      <option>Red</option>
      <option>Blue</option>
    </select>

    <br>
    <br>

    <select (change)="changeColor($event.target.value)">
      <option>Green</option>
      <option>Red</option>
      <option>Blue</option>
    </select>-->


    `,
})
export class AppComponent  { 
  name = 'Tiqri'; 

  street: string = '201, James Peiris Mawatha'
  city: string = 'Colombo'
  province: string = 'Western'

  showAddress: boolean = true;

  image = 'favicon.ico';
  color: string = 'Green'

  toggleAddress(){
    this.showAddress = !this.showAddress;
  }

  toggleColor(){
    this.color = this.color === 'Green' ? 'Red' : 'Green';
  }

  changeColor(color: string){
      this.color = color;
  }
}
