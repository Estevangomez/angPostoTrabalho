import { TreinamentoColaboradorComponent } from './../treinamento-colaborador/treinamento-colaborador.component';
import { FinalizarPostoAutLinhaComponent } from './../finalizar-posto-aut-linha/finalizar-posto-aut-linha.component';
import { TipoPostoTrabalhoComponent } from './../tipo-posto-trabalho/tipo-posto-trabalho.component';
import { PostoTrabalhoComponent } from './posto-trabalho.component';





import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


const produtoRoutes = [
    {path:'',component:PostoTrabalhoComponent},  
    {path:'treinamentoColaborador',component:TreinamentoColaboradorComponent},
    {path:'tipo',component:TipoPostoTrabalhoComponent},
    {path:'finalizar-posto-aut-linha',component:FinalizarPostoAutLinhaComponent},
  
];

@NgModule({
    imports:[RouterModule.forChild(produtoRoutes)],
    exports:[RouterModule]

})
export class PostoTrabalhoRoutingModule{}