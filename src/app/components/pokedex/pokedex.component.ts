import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PokedexService } from '';

@Component({
  selector: 'pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css'],
})
export class PokedexComponent implements OnInit {
  pokemonTex; // = FormControl<string>;

  constructor(private service: PokedexService) {}

  ngOnInit() {
    //this.pokemonTex = new FormControl<string>('');
    
  }

  searchPokemon(): void {
    // This method should search for pokemon data.
    console.log(this.pokemonTex);
  }
}
