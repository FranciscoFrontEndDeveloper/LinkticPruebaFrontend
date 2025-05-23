import { Routes } from '@angular/router';
import { MaincomponentComponent } from './components/maincomponent/maincomponent.component';
import { ApimenuComponent } from './components/apimenu/apimenu.component';
import { ApidatatableComponent } from './components/apidatatable/apidatatable.component';

export const routes: Routes = [
  {
    path: '',
    component: MaincomponentComponent,
    title: 'master of apis',
  },
  {
    path: 'apimenu',
    component: ApimenuComponent,
    title: 'menu apis',
 },
    {
    path: 'apimenu/apidetails',
    component: ApidatatableComponent,
    title: 'api details',
  },
];
