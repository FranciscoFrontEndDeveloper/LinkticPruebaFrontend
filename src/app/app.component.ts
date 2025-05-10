import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JsonplaceholderService } from './services/jsonplaceholder.service';
import { Jsonplaceholderinterface } from './jsonplaceholderinterface';
import { GenericviewComponent } from "./components/genericview/genericview.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, GenericviewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent {
  title = 'masterApis';

}
