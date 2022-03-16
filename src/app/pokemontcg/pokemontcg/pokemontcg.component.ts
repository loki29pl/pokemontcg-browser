import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {PokemonCard} from "../../api/pokemon-card";
import {MatTableDataSource} from "@angular/material/table";
import {PokemonCardApiService} from "../../api/pokemon-card-api.service";
import {MatPaginator} from "@angular/material/paginator";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
import {finalize, Observable, Subject, tap} from "rxjs";

@UntilDestroy()
@Component({
  selector: 'app-pokemontcg',
  templateUrl: './pokemontcg.component.html',
  styleUrls: ['./pokemontcg.component.scss']
})
export class PokemontcgComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) private matPaginator!: MatPaginator;

  dataSource: MatTableDataSource<PokemonCard> = new MatTableDataSource<PokemonCard>();
  columns: string[] = ['images', 'name', 'supertype', 'number', 'types', 'actions'];
  page = 1;
  totalCount = 0;
  pageSize = 20;

  constructor(private pokemonCardApi: PokemonCardApiService) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource();
    this.fetch();
  }

  ngAfterViewInit(): void {
    this.matPaginator.page.pipe(untilDestroyed(this)).subscribe(pageEvent => {
      this.page = pageEvent.pageIndex;
      this.pageSize = pageEvent.pageSize;

      // TODO! Add saving state to store, to keep table state between routes
    });
  }

  private fetch(): Observable<void> {
    const state = new Subject<void>();

    this.pokemonCardApi.list({ pageSize: this.pageSize, page: this.page })
      .pipe(finalize(() => {
        state.next();
        state.complete();
      }))
      .subscribe((cards) => {
        this.dataSource.data = cards.data;
        this.totalCount = cards.totalCount;
      });

    return state.asObservable();
  }
}
