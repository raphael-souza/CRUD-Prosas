import { Component, OnInit, ViewChild } from '@angular/core';
import { PropostaService } from '../../services/proposta.service';
import { Proposta } from '../../interface/proposta';
import { ErrorMsgComponent } from '../../compartilhado/error-msg/error-msg.component';
import { Subscriber } from 'rxjs';


@Component({
  selector: 'app-lista-proposta',
  templateUrl: './lista-proposta.component.html',
  styleUrls: ['./lista-proposta.component.css']
})
export class ListaPropostaComponent implements OnInit {
  public proposta: Proposta[];

  public dadosProposta = [
    // tslint:disable-next-line:max-line-length
    { id: 1, nome: 'Raphael', descricao: 'çerijf', valor: '10.99', dataInicial: '11-11-2018', dataFinal: '11-11-2019', cidade: 'Belo Horizonte' },
    // tslint:disable-next-line:max-line-length
    { id: 2, nome: 'jhonny cash', descricao: 'eorqkkgmm',  valor: '1012.99', dataInicial: '11-08-2018', dataFinal: '11-11-2019', cidade: 'Itaúna'}
  ];

  @ViewChild(ErrorMsgComponent) errorMsgComponent: ErrorMsgComponent;

  ngOnInit() {
    this.getListaProposta();
  }
  constructor(private propostaService: PropostaService ) { }

  getListaProposta() {
    // this.propostaService.getlistaPropostas()
    // .subscribe((propostas: Proposta[]) => { this.proposta = propostas; },
    // () => {this.errorMsgComponent.setError('falha ao buscar propostas.'); });

    this.propostaService.getlistaPropostas()
      .subscribe(dados => this.proposta = dados);
  }


  deletaProposta(id: number) {
    this.propostaService.deletaProposta(id).subscribe(
      () => { this.getListaProposta(); },
      () => { this.errorMsgComponent.setError('Falha ao deletar proposta.'); });
  }

  existemPropostas(): boolean {
    return this.proposta && this.proposta.length > 0;
  }
}
