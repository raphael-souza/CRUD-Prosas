import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPropostaComponent } from './lista-proposta.component';

describe('ListaPropostaComponent', () => {
  let component: ListaPropostaComponent;
  let fixture: ComponentFixture<ListaPropostaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaPropostaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPropostaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
