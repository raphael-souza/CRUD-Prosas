import { Component, ViewChild} from '@angular/core';
import { ErrorMsgComponent } from '../../compartilhado/error-msg/error-msg.component';
import { PropostaService} from '../../services/proposta.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Proposta } from '../../interface/proposta';

@Component({
  selector: 'app-editar-proposta',
  templateUrl: './editar-proposta.component.html',
  styleUrls: ['./editar-proposta.component.css']
})
export class EditarPropostaComponent  {
  public proposta: Proposta;
  @ViewChild(ErrorMsgComponent) errorMsgComponent: ErrorMsgComponent;

  constructor(private propostaService: PropostaService, private activatedRoute: ActivatedRoute, private router: Router) { }

  getProposta(id: number) {
    this.propostaService.getProposta(id).subscribe(
      (proposta: Proposta) => { this.proposta = proposta; },
      () => { this.errorMsgComponent.setError('Falha ao buscar proposta'); });
  }

  atualizaProposta(proposta: Proposta) {
    this.propostaService.atualizarProposta(proposta).subscribe(
      () => { this.router.navigateByUrl('/'); },
      () => {this.errorMsgComponent.setError('Falha ao atualizar proposta'); });
  }
}
