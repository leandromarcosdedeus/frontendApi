import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientsComponent } from './components/clients/clients.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ClientEditComponent } from './components/client-edit/client-edit.component';
import { CitiesComponent } from './components/cities/cities.component';
import { CityEditComponent } from './components/city-edit/city-edit.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'edit/:id', component:ClientEditComponent},
  {path: 'clients', component: ClientsComponent},
  {path: 'cities', component:CitiesComponent},
  {path: 'editCity/:id', component:CityEditComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    NavbarComponent,
    ClientEditComponent,
    CitiesComponent,
    CityEditComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
