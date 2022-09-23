import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../models/Pokemon';
import { from, map, mergeMap } from 'rxjs';
import { loadMore } from '../models/LoadMore';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  public loadMore = loadMore;

  public pokemons: Pokemon[] = [];

  allPokemonsUrl: any = `https://pokeapi.co/api/v2/pokemon/?limit=12&offset=${loadMore()}`;

  constructor( private httpClient: HttpClient ) {

    this.httpClient.get<any>(this.allPokemonsUrl).pipe(
      map(value => value.results),
      map((value: any) => {
        return from(value).pipe(
          mergeMap((v: any) => this.httpClient.get(v.url))
        );
      }),
      mergeMap(value => value)
    ).subscribe((result: any) => this.pokemons[result.id] = {
      image: result.sprites.front_default,
      number: result.id,
      name: result.name,
      types: result.types.map((t: any) => t.type.name)
    });

  }

}

