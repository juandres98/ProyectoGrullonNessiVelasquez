import { RouterModule, Routes } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { MenuComponent } from './menu/menu.component';


import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';

import { ConexionService } from './services/conexion.service';
import { ComprasComponent } from './compras/compras.component';
import { OrdenComponent } from './orden/orden.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AdminComponent } from './admin/admin.component';

import { FormsModule} from '@angular/forms';




const routes: Routes = [
  

  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },
  { path: 'registrarse', component: RegistrarseComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'compras', component: ComprasComponent},
  { path: 'orden', component: OrdenComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    FooterComponent,
    LoginComponent,
    RegistrarseComponent,
    MenuComponent,
    ComprasComponent,
    OrdenComponent,
    NavBarComponent,
    AdminComponent,
    
    
 
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule, 
    AngularFireAuthModule, 
    AngularFireStorageModule,
    FormsModule
    
  ],
  providers: [
    ConexionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
