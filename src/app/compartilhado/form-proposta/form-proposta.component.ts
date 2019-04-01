import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Proposta } from 'src/app/interface/proposta';

@Component({
  selector: 'app-form-proposta',
  templateUrl: './form-proposta.component.html',
  styleUrls: ['./form-proposta.component.css']
})
export class FormPropostaComponent  {
  @Input() proposta: Proposta = {} as Proposta;
  @Output() outputtProposta: EventEmitter<Proposta> = new EventEmitter();

  onSubmit() {
    this.outputtProposta.emit(this.proposta);
  }


}
