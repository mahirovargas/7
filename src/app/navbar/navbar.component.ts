import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { PostService } from '@app/service/post.service';
import { v4 as uuid} from 'uuid'
import { Encuestas } from '@app/models';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  imports: [RouterLink],
  styleUrl: './navbar.component.sass'
})
export class NavbarComponent {

  router = inject(Router);
  encuestaService = inject(PostService)

  addEncuesta(){
    let newEncuesta : Encuestas = {
      id: uuid(),
      titulo: "Encuesta sin titulo",
      preguntas: [
        {
          idpregunta: uuid(),
          pregunta: "pregunta 1" ,
          orden: 0,
          tipoPregunta: "selecionUnica",
          opciones: ["opcion 1"]
        }
      ]
    }
    this.encuestaService.newEncuesta(newEncuesta)
    this.router.navigate(['/gestion-encuestas', newEncuesta.id])
  }


}
