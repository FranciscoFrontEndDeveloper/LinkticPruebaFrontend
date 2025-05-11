import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatSlideToggleModule,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
  standalone: true,
})
export class AppComponent {
  title = 'master of apis';

}
