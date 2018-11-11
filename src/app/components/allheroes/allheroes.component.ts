import { Component, OnInit } from '@angular/core';
import { HeroesService, HeroeInterface } from '../../services/heroes.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-allheroes',
  templateUrl: './allheroes.component.html',
  styleUrls: ['./allheroes.component.css']
})
export class AllheroesComponent implements OnInit {

  allHeroes : HeroeInterface[] = [];

  constructor( private _heroesSrv : HeroesService, private _router : Router) { }

  ngOnInit() {

   this.allHeroes = this._heroesSrv.getAllHeroes();
   console.log(`All Heroes ${this.allHeroes}`);

  }

  goToHeroeInfo( idx) {
    console.log('Heroe ID: ', idx);
    this._router.navigate(['/heroe', idx]);
  }

}
