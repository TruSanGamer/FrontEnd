import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes} from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {AppComponent} from "./app.component";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {SweetAlert2Module} from "@sweetalert2/ngx-sweetalert2";
import {ReactiveFormsModule} from "@angular/forms";


const rutas:Routes=[
  //{path: '', redirectTo: 'listar-cursos', pathMatch: 'full'},
  {path: 'header', component: HeaderComponent},
  {path: 'footer', component: FooterComponent},
  {path: '', loadChildren: () => import('./docentes/docentes.module').then(m => m.DocentesModule)},
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(rutas),
    SweetAlert2Module.forRoot(),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
