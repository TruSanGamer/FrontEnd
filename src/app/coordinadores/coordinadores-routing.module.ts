import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListarCoordinadorComponent} from "./listar-coordinador/listar-coordinador.component";
import {CrearCoordinadorComponent} from "./crear-coordinador/crear-coordinador.component";
import {DetalleCoordinadorComponent} from "./detalle-coordinador/detalle-coordinador.component";
import {EditarCoordinadorComponent} from "./editar-coordinador/editar-coordinador.component";

const routes: Routes = [
  {
    path: '',
    component: ListarCoordinadorComponent
  },
  {
    path: 'listar',
    component: ListarCoordinadorComponent
  },
  {
    path: 'crear',
    component: CrearCoordinadorComponent
  },
  {
    path: 'detalle/:id',
    component: DetalleCoordinadorComponent
  },
  {
    path: 'editar/:id',
    component: EditarCoordinadorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoordinadoresRoutingModule { }
