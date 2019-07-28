import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';

import { Observable, of } from 'rxjs';

import {Tuto} from './tutos';
import {Astuce} from './astuces';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
//NB routes express = routes avec datas peut être différent de la route d'angular... On utilise juste la route express dans le service avec http
//pour récupérer le contenu dans le composant. Mais le composant peut avoir une route différente


getAstuces(): Observable<Tuto[]>{
return this.http.get<Astuce[]>('/astuces');
}

//tuto

  getTutos(): Observable<Tuto[]>{
  return this.http.get<Tuto[]>('/tutos');
  }

  getTuto(id): Observable<any> {

    let API_URL = `/tutos/details/${id}`;
    return this.http.get(API_URL)
  }

  postTuto(data): Observable<any> {
    return this.http.post('/tutos/add', data)

  }

  deleteTuto(id: any): Observable<{}> {
//n'arrive pas a faire un http delete parce que c'est pas un number
  return this.http.delete(`/tutos/details/${id}`)

}



  updateTuto(titre, id,texte,image): Observable<any>  {
      const obj = {
        titre,texte
      };
      return this.http.put(`/tutos/details/${id}`, obj)
  }

}
