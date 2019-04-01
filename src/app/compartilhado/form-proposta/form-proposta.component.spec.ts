import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPropostaComponent } from './form-proposta.component';

describe('FormPropostaComponent', () => {
  let component: FormPropostaComponent;
  let fixture: ComponentFixture<FormPropostaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPropostaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPropostaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
