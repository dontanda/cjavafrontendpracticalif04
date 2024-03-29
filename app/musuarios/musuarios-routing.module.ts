import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuevoComponent } from './paginas/nuevo/nuevo.component';
import { ListadoComponent } from './paginas/listado/listado.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'nuevo', component: NuevoComponent },
      { path: 'listado', component: ListadoComponent},
      { path: '**', redirectTo: 'listado'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MusuariosRoutingModule { }
