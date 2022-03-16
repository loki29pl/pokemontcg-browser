import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'pokemontcg', loadChildren: () => import('./pokemontcg/pokemontcg.module').then(m => m.PokemontcgModule) },
  { path: '', redirectTo: 'pokemontcg', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
