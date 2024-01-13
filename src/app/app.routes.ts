import { Routes } from '@angular/router';
import { SimulaCanvasComponent } from './components/canvas/simula-canvas.component';

export const routes: Routes = [
  { path: '', redirectTo: '/simula', pathMatch: 'full' },
  { path: 'simula', component: SimulaCanvasComponent}
];
