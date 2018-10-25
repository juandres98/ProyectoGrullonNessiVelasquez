import { RouterModule, Routes } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { MenuComponent } from './menu/menu.component';




const routes: Routes = [
  

  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },
  { path: 'registrarse', component: RegistrarseComponent },
  { path: 'menu', component: MenuComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    FooterComponent,
    LoginComponent,
    RegistrarseComponent,
    MenuComponent,
    
    
 
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
