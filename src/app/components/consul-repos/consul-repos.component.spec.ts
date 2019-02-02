import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulReposComponent } from './consul-repos.component';

describe('ConsulReposComponent', () => {
  let component: ConsulReposComponent;
  let fixture: ComponentFixture<ConsulReposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsulReposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulReposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
