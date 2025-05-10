import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-genericview',
  imports: [MatCardModule],
  templateUrl: './genericview.component.html',
  styleUrl: './genericview.component.sass'
})
export class GenericviewComponent {
  
  constructor() {}

}
