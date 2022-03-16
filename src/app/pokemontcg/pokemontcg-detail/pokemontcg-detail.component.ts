import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PokemonCard} from "../../api/pokemon-card";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";

@UntilDestroy()
@Component({
  selector: 'app-pokemontcg-detail',
  templateUrl: './pokemontcg-detail.component.html',
  styleUrls: ['./pokemontcg-detail.component.scss']
})
export class PokemontcgDetailComponent implements OnInit {
  pokemonCard!: PokemonCard;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.pipe(untilDestroyed(this)).subscribe(data => {
      this.pokemonCard = data['card'].data;
    })
  }

}
