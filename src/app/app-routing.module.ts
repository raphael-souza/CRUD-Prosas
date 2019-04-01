import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaPropostaComponent } from './paginas/lista-proposta/lista-proposta.component';
import { CriarPropostaComponent } from './paginas/criar-proposta/criar-proposta.component';
import { EditarPropostaComponent } from './paginas/editar-proposta/editar-proposta.component';
// array rotas dos componentes criados
const routes: Routes = [
  { path: '', component: ListaPropostaComponent},
  { path: 'proposta/criar', component: CriarPropostaComponent},
  { path: 'proposta/editar/:id', component: EditarPropostaComponent},
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
