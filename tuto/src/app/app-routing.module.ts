import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  TutosComponent } from './tutos/tutos.component';
import {  AstucesComponent } from './astuces/astuces.component';
import {  ActualitesComponent } from './actualites/actualites.component';
const routes: Routes = [
    { path: 'tutoriels', component: TutosComponent },
    { path: 'astuces', component: AstucesComponent },
    { path: 'actualites', component: ActualitesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
