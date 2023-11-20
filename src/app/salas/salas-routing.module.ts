import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListarSalasComponent} from "./listar-salas/listar-salas.component";
import {CrearSalaComponent} from "./crear-sala/crear-sala.component";
import {DetalleSalaComponent} from "./detalle-sala/detalle-sala.component";

const routes: Routes = [
  {
    path: '',
    component: ListarSalasComponent
  },
  {
    path: 'listar',
    component: ListarSalasComponent
  },
  {
    path: 'crear',
    component: CrearSalaComponent
  },
  {
    path: 'detalle/:id',
    component: DetalleSalaComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalasRoutingModule { }
