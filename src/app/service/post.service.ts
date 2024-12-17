import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Encuestas } from '../models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  http = inject(HttpClient);
  urlJSON = 'http://localhost:3000/'

  constructor() { }

  getEncuestas(): Observable<Encuestas[]> {
    return this.http.get<Encuestas[]>(this.urlJSON + "encuestas")
  }

  newEncuesta(encuesta: Encuestas) {
    this.http.post(this.urlJSON + "encuestas", encuesta).subscribe(() => {
      console.log("registro exitoso")
    }

    )
  }

  delateEncuesta(id: string){
    
    this.http.delete(this.urlJSON + "encuestas/" + id  ).subscribe(()=> console.log("se elimino correctamente: ", id))
    
  }
}