import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionEncuestaComponent } from './gestion-encuesta.component';

describe('GestionEncuestaComponent', () => {
  let component: GestionEncuestaComponent;
  let fixture: ComponentFixture<GestionEncuestaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionEncuestaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionEncuestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
