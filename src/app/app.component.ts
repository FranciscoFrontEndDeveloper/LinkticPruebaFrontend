import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ApimenuComponent } from "./components/apimenu/apimenu.component";
import { MaincomponentComponent } from "./components/maincomponent/maincomponent.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ApimenuComponent, MatSlideToggleModule, MaincomponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent {
  title = 'masterApis';

}
