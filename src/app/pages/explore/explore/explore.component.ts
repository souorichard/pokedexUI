import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

  valInitial: number = 12;
  valUpdate: number = 12;
  valCurrent: number = this.valInitial;

  buttonActive: boolean = false;
  limitValue: number = this.valInitial;

  function loadMore() {
    valCurrent += valUpdate;
    limiteValor = valAtual;
    if (valAtual >= totalItem) {
        $scope.botaoAtivo = false; //Desativa o botao de carregar mais
        return;
    };
  }

}
