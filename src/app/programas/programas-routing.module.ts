import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListarProgramasComponent} from "./listar-programas/listar-programas.component";
import {CrearProgramasComponent} from "./crear-programas/crear-programas.component";
import {DetalleProgramasComponent} from "./detalle-programas/detalle-programas.component";


const routes: Routes = [
  {
    path: '',
    component: ListarProgramasComponent
  },
  {
    path: 'listar',
    component: ListarProgramasComponent
  },
  {
    path: 'crear',
    component: CrearProgramasComponent
  },
  {
    path: 'detalle/:id',
    component: DetalleProgramasComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgramasRoutingModule { }
