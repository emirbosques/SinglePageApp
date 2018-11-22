import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-hero',
  templateUrl: './card-hero.component.html',
  styleUrls: ['./card-hero.component.css']
})
export class CardHeroComponent implements OnInit {


  @Input() heroe : any = {};
  @Input() index : number ;

  @Output() heroeSelected : EventEmitter<number>;

  constructor( private _router : Router) { 

    this.heroeSelected = new EventEmitter();

  }

  ngOnInit() {
  }

  goToHeroeInfo(){
       console.log('Index del Heroe:', this.index);
      /* this._router.navigate(['/heroe', this.index ]); */
      this.heroeSelected.emit(this.index);
  }

}
