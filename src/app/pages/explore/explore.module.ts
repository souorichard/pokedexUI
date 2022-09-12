import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExploreRoutingModule } from './explore-routing.module';
import { ExploreComponent } from './explore/explore.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';


@NgModule({
  declarations: [
    ExploreComponent,
    PokemonCardComponent,
    PokemonListComponent,
  ],
  imports: [
    CommonModule,
    ExploreRoutingModule
  ]
})
export class ExploreModule { }
