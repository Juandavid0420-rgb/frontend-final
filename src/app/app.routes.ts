import { Routes } from '@angular/router';
import { EntidadInsertarComponent } from './components/entidad-insertar/entidad-insertar.component';
import { EntidadListarComponent } from './components/entidad-listar/entidad-listar.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: 'insertar', component: EntidadInsertarComponent },
  { path: 'listar', component: EntidadListarComponent },
  { path: '',component: HomeComponent },
  {path: '**', redirectTo: 'home', pathMatch: 'full'}

];
