import { EscolherTipoTreinarColaboradorModule } from './escolher-tipo-treinar-colaborador/escolher-tipo-treinar-colaborador.module';
import { EscolherAtividadeModule } from './escolher-atividade/escolher-atividade.module';
import { EscolherProdutoModule } from './escolher-produto/escolher-produto.module';
import { LoginService } from './providers/login.service';
import { ProdutoConfigModule } from './produto-config/produto-config.module';
import { ProdutoConfigLinhaModule } from './produto-config-linha/produto-config-linha.module';
import { ProdutoConfigLinhaDiaModule } from './produto-config-linha-dia/produto-config-linha-dia.module';
import { LoginModule } from './login/login.module';
import { routing } from './app.routing';
import { ProdutoModule } from './produto/produto.module';
import { ApiService } from './providers/posto-trabalho.service';
import { UtilsService } from './utils/utils.service';
import { HttpClientModule } from '@angular/common/http';
import { PostoTrabalhoModule } from './posto-trabalho/posto-trabalho.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgSelect2Module } from 'ng-select2';



import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { PostoTrabalhoEquipamentoComponent } from './posto-trabalho-equipamento/posto-trabalho-equipamento.component';
import { PostoTipoArquivoComponent } from './posto-tipo-arquivo/posto-tipo-arquivo.component';
import { PostoSituacaoFuncComponent } from './posto-situacao-func/posto-situacao-func.component';
import { BibliotecaComponent } from './biblioteca/biblioteca.component';
import { LinhaComponent } from './linha/linha.component';
import { PostoTrabalhoHistComponent } from './posto-trabalho-hist/posto-trabalho-hist.component';
import { PostoTrabalhoMaquinasComponent } from './posto-trabalho-maquinas/posto-trabalho-maquinas.component';
import { ProdutoBibliotecaComponent } from './produto-biblioteca/produto-biblioteca.component';
import { ProdutoConfigAtividadeComponent } from './produto-config-atividade/produto-config-atividade.component';
import { ProdutoConfigHistComponent } from './produto-config-hist/produto-config-hist.component';
import { SituacaoPostoComponent } from './situacao-posto/situacao-posto.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AssociarProdutoALinhaComponent } from './associar-produto-a-linha/associar-produto-a-linha.component';



@NgModule({
  declarations: [
    AppComponent,  
    LinhaComponent,
    BibliotecaComponent,
    PostoSituacaoFuncComponent,
    PostoTipoArquivoComponent,
    PostoTrabalhoEquipamentoComponent,
    PostoTrabalhoHistComponent,
    PostoTrabalhoMaquinasComponent,
    ProdutoBibliotecaComponent,
    ProdutoConfigAtividadeComponent,
    ProdutoConfigHistComponent,   
    SituacaoPostoComponent,    
    NavbarComponent, 
    AssociarProdutoALinhaComponent
  
  ],
  imports: [
    BrowserModule,      
    PostoTrabalhoModule,    
    HttpClientModule,
    ProdutoModule,
    routing,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    LoginModule,
    ProdutoConfigLinhaDiaModule,
    ProdutoConfigLinhaModule,
    ProdutoConfigModule,
    EscolherProdutoModule,
    EscolherAtividadeModule,
    EscolherTipoTreinarColaboradorModule,
    NgSelectModule,
    BrowserAnimationsModule,
    NgSelect2Module   
    
  ],
  providers: [
    ApiService,    
    UtilsService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
