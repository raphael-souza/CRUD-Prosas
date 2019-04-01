import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorMsgComponent } from './compartilhado/error-msg/error-msg.component';
import { ListaPropostaComponent } from './paginas/lista-proposta/lista-proposta.component';
import { PropostaService } from './services/proposta.service';
import { FormPropostaComponent } from './compartilhado/form-proposta/form-proposta.component';
import { FormsModule } from '@angular/forms';
import { CriarPropostaComponent } from './paginas/criar-proposta/criar-proposta.component';
// tslint:disable-next-line:max-line-length
import { EditarPropostaComponent } from './paginas/editar-proposta/editar-proposta.component'; // habilita o uso das diretivas em form-proposta

@NgModule({
  declarations: [
    AppComponent,
    ErrorMsgComponent,
    ListaPropostaComponent,
    FormPropostaComponent,
    CriarPropostaComponent,
    EditarPropostaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ PropostaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
