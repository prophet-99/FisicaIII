import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RelatividadComponent } from './components/relatividad/relatividad.component';

const routes: Routes = [
  { path: 'relatividad', component: RelatividadComponent },
  // {path:'cuantica', component: CuanticaComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'relatividad' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
