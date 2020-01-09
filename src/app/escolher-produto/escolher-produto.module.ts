import { EscolherProdutoRoutingModule } from './escolher-produto.routing.module';
import { TreinarLiderComponent } from './treinar-lider/treinar-lider.component';
import { TreinarColaboradorComponent } from './treinar-colaborador/treinar-colaborador.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';




@NgModule({
  declarations: [TreinarColaboradorComponent,TreinarLiderComponent],
  imports: [
    CommonModule,
    EscolherProdutoRoutingModule
  ]
})
export class EscolherProdutoModule { }
