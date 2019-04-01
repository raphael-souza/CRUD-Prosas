import { Component, ViewChild } from '@angular/core';
import { ErrorMsgComponent } from '../../compartilhado/error-msg/error-msg.component';
import { PropostaService } from '../../services/proposta.service';
import { Router } from '@angular/router';
import { Proposta } from 'src/app/interface/proposta';

@Component({
  selector: 'app-criar-proposta',
  templateUrl: './criar-proposta.component.html',
  styleUrls: ['./criar-proposta.component.css']
})
export class CriarPropostaComponent {
  @ViewChild(ErrorMsgComponent) errorMsgComponent: ErrorMsgComponent;

  constructor(private propostaService: PropostaService, private router: Router) { }

  addProposta(proposta: Proposta) {
    this.propostaService.addProposta(proposta).subscribe(
      () => { this.router.navigateByUrl('/'); },
      () => {this.errorMsgComponent.setError('Falha ao cadastrar Proposta'); });
  }



}
