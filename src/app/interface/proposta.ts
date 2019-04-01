import { DecimalPipe } from '@angular/common';

export interface Proposta {
    id: number;
    nome: string;
    descricao: string;
    valor: DecimalPipe;
    dataInicio: Date;
    dataFim: Date;
    Cidade: string;
}
