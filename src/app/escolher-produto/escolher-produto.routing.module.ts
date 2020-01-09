import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TreinarLiderComponent } from './treinar-lider/treinar-lider.component';
import { TreinarColaboradorComponent } from './treinar-colaborador/treinar-colaborador.component';


const routes: Routes = [
  {
    path: '',
    component: TreinarColaboradorComponent
  },
  {
    path: 'treinar-colaborador',
    component: TreinarColaboradorComponent
  },
  {
    path: 'treinar-lider',
    component: TreinarLiderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EscolherProdutoRoutingModule { }