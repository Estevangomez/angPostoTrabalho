import { Component, OnInit } from '@angular/core';
import { ApiService } from './../providers/posto-trabalho.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-escolher-tipo-treinar-colaborador',
  templateUrl: './escolher-tipo-treinar-colaborador.component.html',
  
})
export class EscolherTipoTreinarColaboradorComponent implements OnInit {

  constructor(private apiService:ApiService, private route:ActivatedRoute,private router: Router) { }

  private tipos:any;
  ngOnInit() {
    
    this.getTipoPostoTrabalho();

  }

  getTipoPostoTrabalho(){
    let produto =  JSON.parse(sessionStorage.getItem('produto')); 
    let qtd =  JSON.parse(sessionStorage.getItem('qtd'));  
    let atv =  JSON.parse(sessionStorage.getItem('atividade')); 
    let linha =  JSON.parse(sessionStorage.getItem('linha')); 

    this.apiService.getTipoPostoTrabalho(produto,qtd,linha,atv).subscribe((dataTipoPosto:any)=>{
      this.tipos = dataTipoPosto.result;     
      console.log("Tipos Postos === ",this.tipos);
      
      
   })
  }

  getTipo(tipo){

    this.router.navigate(['/posto-trabalho/treinamentoColaborador'],{queryParams:{tipo:tipo}});
    

  }
}
