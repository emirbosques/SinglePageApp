import { HeroesService } from './../../services/heroes.services';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  public hero : any ;

  constructor( private _activatedRoute : ActivatedRoute, private _heroeSrv: HeroesService) { }

  ngOnInit() {
    this.getHeroData();
  }


  getHeroData() {
    this._activatedRoute.params.subscribe((param) => {
      let idHero = +param.id;
      console.log('Param', idHero);
      this.hero = this._heroeSrv.getSingleHeroe(idHero);
      console.log(`Single Heroe:  ${this.hero}`);
    });
  }

}
