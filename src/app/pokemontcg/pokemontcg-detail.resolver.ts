import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {map, Observable, of} from 'rxjs';
import {PokemonCardApiService} from "../api/pokemon-card-api.service";
import {PokemonCard} from "../api/pokemon-card";

@Injectable({
  providedIn: 'root'
})
export class PokemontcgDetailResolver implements Resolve<PokemonCard> {
  constructor(private pokemonCardApi: PokemonCardApiService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PokemonCard> {
    const id = route.params['id'];

    return this.pokemonCardApi.get(id);
  }
}
