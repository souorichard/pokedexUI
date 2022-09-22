import { Component, OnInit } from '@angular/core';
import { loadMore } from 'src/app/models/LoadMore';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {

  title: string = 'Pokédex';
  label: string = 'Nome ou número';
  subtitle: string = 'Use a pesquisa avançada para explorar Pokémon por tipo, fraqueza, habilidade e mais!';
  textCard: string = 'Realize a busca por Pokémon pelo nome ou usando o número do Pokémon Nacional';

  public loadMore = loadMore;

  constructor() { }

  ngOnInit(): void {
  }

}

