import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TutosComponent } from './tutos/tutos.component';
import { AstucesComponent } from './astuces/astuces.component';
import { ActualitesComponent } from './actualites/actualites.component';
import { ActualitesDetailComponent } from './actualites-detail/actualites-detail.component';
import { TutosDetailComponent } from './tutos-detail/tutos-detail.component';
import { AstucesDetailComponent } from './astuces-detail/astuces-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TutosComponent,
    AstucesComponent,
    ActualitesComponent,
    ActualitesDetailComponent,
    TutosDetailComponent,
    AstucesDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
