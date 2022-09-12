import { Component, Input, OnInit } from '@angular/core';
import { getPokemonImage, getPokemonNumber, Pokemon } from '../../../models/Pokemon';

@Component({
  selector: 'pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {

  @Input()

  public pokemon!: Pokemon;

  public getPokemonImage = getPokemonImage;
  public getPokemonNumber = getPokemonNumber;

  constructor() { }

  ngOnInit(): void {
  }

}
