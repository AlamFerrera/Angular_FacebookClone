import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { FacebookGuard } from './guards/facebook.guard';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./componentes/home/home.module').then(m => m.HomeModule),
    component: HomeComponent,
    canActivate: [FacebookGuard]
  },
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
