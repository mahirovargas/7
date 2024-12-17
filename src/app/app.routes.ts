import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { GestionEncuestaComponent } from './gestion-encuesta/gestion-encuesta.component';
import { GestionPreguntaComponent } from './gestion-pregunta/gestion-pregunta.component';
import { GestionTipoPreguntaComponent } from './gestion-tipo-pregunta/gestion-tipo-pregunta.component';

export const routes: Routes = [
  {
    path: "",
    redirectTo: "/login",
    pathMatch: "full"
  },

  { 
    path: 'login',  
    loadComponent: () => import('./public/login/login.component').then(c => c.LoginComponent)
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.component').then(c => c.HomeComponent)
  },
  { path: 'gestion-encuestas/:id', component: GestionEncuestaComponent},
  {
    path:"**",
    component: NotFoundComponent
  }
  
  
];
