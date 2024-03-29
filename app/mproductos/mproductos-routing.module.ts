import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './paginas/agregar/agregar.component';
import { ListarComponent } from './paginas/listar/listar.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'agregar', component: AgregarComponent },
      { path: 'listar', component: ListarComponent },
      { path: '**', redirectTo: 'listar' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MproductosRoutingModule { }
