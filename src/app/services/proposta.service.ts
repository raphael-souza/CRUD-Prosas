import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proposta } from '../interface/proposta';

@Injectable({
  providedIn: 'root'
})
export class PropostaService {
  propostaUrl = 'http://localhost:3000/proposta';

  constructor(private http: HttpClient) { }

  // retorna uma lista com todos os itens
  getlistaPropostas(): Observable<Proposta[]> {
    // const url = `${environment.PropostaApiUrl}/proposta`;
    // return this.http.get<Proposta[]>(url);

    return this.http.get<any[]>(`${this.propostaUrl}`);
  }

  // retorna a Propostas definida pelo Id
  getProposta(id: number): Observable<Proposta> {
    const url = `${environment.PropostaApiUrl}/proposta/${id}`;
    return this.http.get<Proposta>(url);
  }

  // adicionar uma nova proposta
  addProposta(proposta: Proposta): Observable<Proposta> {
    const url = `${environment.PropostaApiUrl}/proposta/`;
    return this.http.post<Proposta>(url, proposta);
  }

  // atualizar Proposta
  atualizarProposta(proposta: Proposta): Observable<Proposta> {
    const url = `${environment.PropostaApiUrl}/proposta/${proposta.id}`;
    return this.http.put<Proposta>(url, proposta);
    }

  // deletar proposta
  deletaProposta(id: number): Observable<Proposta> {
    const url = `${environment.PropostaApiUrl}/proposta/${id}`;
    return this.http.delete<Proposta>(url);
  }
}
