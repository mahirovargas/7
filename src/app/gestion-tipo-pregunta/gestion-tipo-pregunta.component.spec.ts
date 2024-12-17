import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionTipoPreguntaComponent } from './gestion-tipo-pregunta.component';

describe('GestionTipoPreguntaComponent', () => {
  let component: GestionTipoPreguntaComponent;
  let fixture: ComponentFixture<GestionTipoPreguntaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionTipoPreguntaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionTipoPreguntaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
