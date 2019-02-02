import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCandidatoComponent } from './form-candidato.component';

describe('FormCandidatoComponent', () => {
  let component: FormCandidatoComponent;
  let fixture: ComponentFixture<FormCandidatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCandidatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCandidatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
