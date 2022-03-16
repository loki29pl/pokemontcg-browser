import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemontcgRoutingModule } from './pokemontcg-routing.module';
import { PokemontcgComponent } from './pokemontcg/pokemontcg.component';
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatButtonModule} from "@angular/material/button";
import { PokemontcgDetailComponent } from './pokemontcg-detail/pokemontcg-detail.component';
import {MatCardModule} from "@angular/material/card";


@NgModule({
  declarations: [
    PokemontcgComponent,
    PokemontcgDetailComponent
  ],
  imports: [
    CommonModule,
    PokemontcgRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatCardModule,
  ]
})
export class PokemontcgModule { }
