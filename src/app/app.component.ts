import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ApimenuComponent } from "./components/apimenu/apimenu.component";
import { MaincomponentComponent } from "./components/maincomponent/maincomponent.component";
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ApimenuComponent, MatSlideToggleModule, MaincomponentComponent,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
  standalone: true,
})
export class AppComponent {
  title = 'master of apis';

}
