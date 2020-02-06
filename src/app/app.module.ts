import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { RelatividadComponent } from './components/relatividad/relatividad.component';
import { CuanticaComponent } from './components/cuantica/cuantica.component';

import { FormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    RelatividadComponent,
    CuanticaComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
