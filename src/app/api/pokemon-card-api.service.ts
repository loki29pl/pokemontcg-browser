import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {PokemonCard} from "./pokemon-card";
import {Query} from "./query";
import {ListResponse} from "./list-response";

@Injectable({
  providedIn: 'root'
})
export class PokemonCardApiService {
  constructor(private httpClient: HttpClient) { }

  get(id: string): Observable<PokemonCard> {
    return this.httpClient.get<PokemonCard>(`https://api.pokemontcg.io/v2/cards/${id}`);
  }

  list(query: Readonly<Partial<Query>>): Observable<ListResponse<PokemonCard>> {
    return this.httpClient.get<ListResponse<PokemonCard>>(`https://api.pokemontcg.io/v2/cards`, {
      params: new HttpParams({ fromObject: query })
    })
  }
}
