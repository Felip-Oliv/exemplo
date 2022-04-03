import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { AsideComponent } from './aside/aside.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AdmComponent } from './adm/adm.component';
import { SobreComponent } from './sobre/sobre.component';
import { HomeclearComponent } from './homeclear/homeclear.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Angular ComP

import {MatSliderModule} from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';

import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    AsideComponent,
    FooterComponent,
    HomeComponent,
    AdmComponent,
    SobreComponent,
    HomeclearComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatSliderModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
