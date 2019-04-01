import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPropostaComponent } from './editar-proposta.component';

describe('EditarPropostaComponent', () => {
  let component: EditarPropostaComponent;
  let fixture: ComponentFixture<EditarPropostaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarPropostaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarPropostaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
