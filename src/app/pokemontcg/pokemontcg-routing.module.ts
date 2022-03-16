import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PokemontcgComponent} from "./pokemontcg/pokemontcg.component";
import {PokemontcgDetailComponent} from "./pokemontcg-detail/pokemontcg-detail.component";
import {PokemontcgDetailResolver} from "./pokemontcg-detail.resolver";

const routes: Routes = [
  { path: '', component: PokemontcgComponent },
  { path: 'details/:id', component: PokemontcgDetailComponent, resolve: { card: PokemontcgDetailResolver } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemontcgRoutingModule { }
