import { Component, Input, OnInit } from '@angular/core';
import { IPokemon } from '../../interfaces/IPokemon';

@Component({
  selector: 'pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css'],
})
export class PokemonCardComponent implements OnInit {
  pokemon: IPokemon;
  error: string;

  constructor() {}

  ngOnInit() {}
}
