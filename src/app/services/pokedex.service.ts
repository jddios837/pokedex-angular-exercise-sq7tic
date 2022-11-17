import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPokemon } from '../interfaces/IPokemon';

@Injectable()
export class PokedexService {
  constructor(private http: HttpClient) {}

  getPokemon(query: string): Observable<IPokemon> {
    // query can be a pokemon name like 'pikachu' or a number from 1 to 898.
    return this.http.get<IPokemon>(
      `https://pokeapi.co/api/v2/pokemon/${query}`
    );
  }
}
