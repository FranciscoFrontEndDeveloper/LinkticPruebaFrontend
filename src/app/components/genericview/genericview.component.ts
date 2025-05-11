import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-genericview',
  imports: [MatCardModule,RouterModule],
  templateUrl: './genericview.component.html',
  styleUrl: './genericview.component.sass'
})
export class GenericviewComponent {
  
  constructor() {}

}
