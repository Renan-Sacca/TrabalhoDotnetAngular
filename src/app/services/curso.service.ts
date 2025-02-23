import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  private readonly urlBase = 'http://localhost:5029';

  constructor(private http: HttpClient) { }

  listar() : Observable<any> {
    return this.http.get<any>(`${this.urlBase}/listar`);
  }

  obter(id: any) : Observable<any> {
    return this.http.get<any>(`${this.urlBase}/obter/${id}`);
  }  

  adicionar(curso: any) : Observable<any> {
    return this.http.post<any>(`${this.urlBase}/adicionar`, curso);
  }

  atualizar(curso: any) : Observable<any> {
    return this.http.put<any>(`${this.urlBase}/atualizar`, curso);
  }  

  remover(id: any) : Observable<any> {
    return this.http.delete<any>(`${this.urlBase}/remover/${id}`);
  }
}
