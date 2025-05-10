import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ApimenuComponent } from "./components/apimenu/apimenu.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ApimenuComponent,MatSlideToggleModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent {
  title = 'masterApis';

}
