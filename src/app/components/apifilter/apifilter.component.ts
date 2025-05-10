import { Component } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
@Component({
  selector: 'app-apifilter',
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule],
  templateUrl: './apifilter.component.html',
  styleUrl: './apifilter.component.sass'
})
export class ApifilterComponent {

}
