import {  HeroesService } from './../../services/heroes.services';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchResult: any[] = [];
  termino: any ;

  constructor(private _activatedRoute: ActivatedRoute, private _heroSrv: HeroesService, private _route: Router) { }

  ngOnInit() {
    this.showSearchResult();
  }

  showSearchResult() {
    this._activatedRoute.params.subscribe((params) => {
      this.termino = params['termino'];
      console.log(`Termino Busqueda:: ${params['termino']}`);
       this.searchResult = this._heroSrv.findHeroes(params['termino']);
       console.log(`Resultado Heroes:::  ${this.searchResult}`);
    });
  }

  goToHeroeInfo(id){
    console.log(`Heroe index:: ${id}`);
    this._route.navigate(['/heroe', id]);
  }

}
