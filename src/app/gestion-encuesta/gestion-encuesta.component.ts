import { Component, inject, Input, signal } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { PostService } from '../service/post.service';
import { v4 as uuid } from 'uuid';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestion-encuesta',
  standalone: true,
  imports: [NavbarComponent, ReactiveFormsModule, JsonPipe],
  templateUrl: './gestion-encuesta.component.html',
  styleUrl: './gestion-encuesta.component.sass',
})
export class GestionEncuestaComponent {
  EncuestaService = inject(PostService);
  router = inject(Router);

  @Input('id') id = '';

  form = signal<FormGroup>(
    new FormGroup({
      titulo: new FormControl('', [
        Validators.required,
        Validators.maxLength(50),
      ]),
      descripcion: new FormControl('', [Validators.nullValidator]),
      preguntas: new FormArray([]),
    })
  );

  get preguntas(): FormArray {
    return this.form().get('preguntas') as FormArray;
  }

  getopciones(index: number): FormArray {
    return this.preguntas.at(index).get('opciones') as FormArray;
  }
  constructor() {
    this.actualizar();
  }

  private actualizar() {
    this.EncuestaService.getEncuestas().subscribe((data) => {
      const encuesta = data.find((el) => el.id === this.id);
      if (encuesta) {
        this.form().patchValue({
          titulo: encuesta.titulo,
          descripcion: encuesta.descripcion,
        });

        if (encuesta.preguntas) {
          encuesta.preguntas.forEach((pregunta, index) => {
            this.preguntas.push(
              new FormGroup({
                pregunta: new FormControl(pregunta.pregunta, [
                  Validators.required,
                ]),
                tipoPregunta: new FormControl(pregunta.tipoPregunta),
                opciones: new FormArray([]),
              })
            );

            pregunta.opciones.forEach((opcion, i) => {
              this.getopciones(index).push(new FormControl('opcion' + (i + 1)));
            });
          });
        }
      }
    });
  }

  submit() {
    //  this.EncuestaService.newEncuesta({
    //   id: uuid(),
    //   titulo: this.form().value.titulo,
    //   descripcion : this.form().value.descripcion
    //  })
    //  return this.router.navigate(['home'])
  }

  /// no se muestra, espera cancelo esta sesion
  ///mira, entende
  // ve, ya quedo la copia, pero se metio en lo de jaime, seguime
}
