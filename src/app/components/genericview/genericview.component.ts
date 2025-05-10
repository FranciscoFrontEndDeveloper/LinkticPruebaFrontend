import { Component } from '@angular/core';
import { JsonplaceholderService } from '../../services/jsonplaceholder.service';
import { Jsonplaceholderinterface } from '../../jsonplaceholderinterface';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-genericview',
  imports: [MatCardModule],
  templateUrl: './genericview.component.html',
  styleUrl: './genericview.component.sass'
})
export class GenericviewComponent {
  private jsonApiUrl = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private jsonplaceholderService: JsonplaceholderService) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.jsonplaceholderService
      .getApiData<Jsonplaceholderinterface[]>(this.jsonApiUrl)
      .subscribe((jsonplace: Jsonplaceholderinterface[]) => {
        console.group('app-genericview');
        console.log(jsonplace);
        console.groupEnd();
        console.group('object keys');
        console.log(Object.keys(jsonplace[0]));
        console.groupEnd();
      });
  }
}
