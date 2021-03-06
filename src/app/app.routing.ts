
import { ProdutoConfigAtividadeComponent } from './produto-config-atividade/produto-config-atividade.component';
import { AppComponent } from './app.component';
import { ProdutoListarComponent } from './produto/produto-listar/produto-listar.component';
import { ProdutoComponent } from './produto/produto.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule, ModuleWithProviders } from '@angular/core';




const APP_ROUTES:Routes = [  
    {path:'',loadChildren: () => import('./login/login.module').then( mod => mod.LoginModule )},  
    {path:'produto',loadChildren: () => import('./produto/produto.module').then( mod => mod.ProdutoModule )},
    {path:'posto-trabalho',loadChildren: () => import('./posto-trabalho/posto-trabalho.module').then( mod => mod.PostoTrabalhoModule )},
    {path:'escolher-produto',loadChildren: () => import('./escolher-produto/escolher-produto.module').then( mod => mod.EscolherProdutoModule )},
    {path:'escolher-atividade',loadChildren: () => import('./escolher-atividade/escolher-atividade.module').then( mod => mod.EscolherAtividadeModule )},
    {path:'escolher-tipo',loadChildren: () => import('./escolher-tipo-treinar-colaborador/escolher-tipo-treinar-colaborador.module').then( mod => mod.EscolherTipoTreinarColaboradorModule )},
    {path:'escolher-PostoTrabalhoTipoLider',loadChildren: () => import('./escolher-tipo-treinar-lider/escolher-tipo-treinar-lider.module').then( mod => mod.EscolherTipoTreinarLiderModule )},
   
   
    {path:'atividade',component:ProdutoConfigAtividadeComponent},
   // {path:'posto-trabalho-tipo',component:TipoPostoTrabalhoComponent},
   // {path:'linha/:id',component:LinhaComponent},
   // {path:'associar-produto',component:AssociarProdutoALinhaComponent},
  
  
    
];


export const routing :ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);