import { Component } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import { GenericviewComponent } from "../genericview/genericview.component";
@Component({
  selector: 'app-apimenu',
  imports: [MatSidenavModule, GenericviewComponent],
  templateUrl: './apimenu.component.html',
  styleUrl: './apimenu.component.sass',
})
export class ApimenuComponent {

}
