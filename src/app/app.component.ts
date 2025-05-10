import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JsonplaceholderService } from './services/jsonplaceholder.service';
import { Jsonplaceholderinterface } from './jsonplaceholderinterface';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent {
  title = 'masterApis';
  private jsonApiUrl = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private jsonplaceholderService: JsonplaceholderService) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.jsonplaceholderService
      .getApiData(this.jsonApiUrl)
      .subscribe((jsonplace: Jsonplaceholderinterface[]) => {
        console.group('json place holder');
        console.log(jsonplace);
        console.groupEnd();
        console.group('object keys');
        console.log(Object.keys(jsonplace[0]));
        console.groupEnd();
      });
  }
}
