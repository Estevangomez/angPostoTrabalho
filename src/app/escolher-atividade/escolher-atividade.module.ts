import { TreinarColaboradorComponent } from './treinar-colaborador/treinar-colaborador.component';

import { EscolherAtividadeRoutingModule } from './escolher-produto.routing.module';
import { EscolherAtividadeComponent } from './escolher-atividade.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';




@NgModule({
  declarations: [EscolherAtividadeComponent,TreinarColaboradorComponent],
  imports: [
    CommonModule,
    EscolherAtividadeRoutingModule
  ]
})
export class EscolherAtividadeModule { }
