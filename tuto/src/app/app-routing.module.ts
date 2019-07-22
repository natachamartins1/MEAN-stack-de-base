import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  TutosComponent } from './tutos/tutos.component';
import {  AstucesComponent } from './astuces/astuces.component';
import {  ActualitesComponent } from './actualites/actualites.component';
import {  TutosDetailComponent } from './tutos-detail/tutos-detail.component';
const routes: Routes = [
    { path: 'tutos', component: TutosComponent },

    { path: 'tutos/details/:id', component: TutosDetailComponent },
    { path: 'astuces', component: AstucesComponent },
    { path: 'actualites', component: ActualitesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
