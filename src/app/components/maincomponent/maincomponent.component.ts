import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-maincomponent',
  imports: [MatButtonModule, MatDividerModule, MatIconModule,RouterModule],
  templateUrl: './maincomponent.component.html',
  styleUrl: './maincomponent.component.sass',
})
export class MaincomponentComponent {
  public titleApp = 'master of apis';
}
