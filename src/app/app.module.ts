import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ComponentsComponent } from './components/components.component';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { FormCandidatoComponent } from './components/form-candidato/form-candidato.component';
import { FormsModule } from '@angular/forms';
import { ConsulReposComponent } from './components/consul-repos/consul-repos.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing/AppRoutingModule';


// Services
import { GithubService } from './components/service/github.service';













@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    HomeComponent,
    NotfoundComponent,
    FormCandidatoComponent,
    ConsulReposComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [
    GithubService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
