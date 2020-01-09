import { EscolherAtividadeComponent } from './escolher-atividade.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import  { TreinarColaboradorComponent } from '../escolher-atividade/treinar-colaborador/treinar-colaborador.component';


const routes: Routes = [
  {
    path: '',
    component: EscolherAtividadeComponent
  },
  {
    path: 'treinar-colaborador',
    component: TreinarColaboradorComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EscolherAtividadeRoutingModule { }