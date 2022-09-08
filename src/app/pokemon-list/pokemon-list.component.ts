import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/Pokemon';
import { Type } from '../models/Type';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  constructor( public pokemonService: PokemonService ) { }

  ngOnInit(): void {
  }

}
