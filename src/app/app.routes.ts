import { Routes } from '@angular/router';
import { OperacjeComponent } from './pages/operacje/operacje.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'operacje',
    pathMatch: 'full',
  },
  {
    path: 'operacje',
    component: OperacjeComponent,
  },
];
