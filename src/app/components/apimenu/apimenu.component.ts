import { Component, } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import { GenericviewComponent } from "../genericview/genericview.component";
import { ApifilterComponent } from "../apifilter/apifilter.component";
@Component({
  selector: 'app-apimenu',
  imports: [MatSidenavModule, GenericviewComponent, ApifilterComponent, ],
  templateUrl: './apimenu.component.html',
  styleUrl: './apimenu.component.sass',
  standalone: true
})
export class ApimenuComponent {
ngOnInit(): void {
 
}
}
