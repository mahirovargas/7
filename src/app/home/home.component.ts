import { Component, ElementRef, inject, OnInit, signal, viewChild } from '@angular/core';
import { PostService } from '../service/post.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { Encuestas } from '../models';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Modal} from 'bootstrap';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, ReactiveFormsModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],  
})
export class HomeComponent implements OnInit {

  listado = signal<Encuestas[]>([]);
  encuestaService = inject(PostService)
  router = inject(Router)

  modal = viewChild.required<ElementRef>('modalEliminar');
  idEliminar: string | null = null; 
  
  constructor() {
    this.Actualizar();
  }
  
  ngOnInit(): void {
    
  }

  private Actualizar(){
    this.encuestaService.getEncuestas().subscribe(encuestas => {
      this.listado.set(encuestas)
    })
  }

  confirmarEliminar(id: string){
    this.idEliminar = id
    
    const modal = new Modal(this.modal().nativeElement )
    modal.show();
    
  }

  eliminar(){
    if (this.idEliminar) {
      this.encuestaService.delateEncuesta(this.idEliminar)
    }
    
    this.Actualizar();
  }
}
