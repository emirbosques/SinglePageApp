import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( private _router : Router) { }

  ngOnInit() {
  }

  searchHero( termino: any ) {
    console.log("Busqueda:: ", termino);
    if(termino){
      this._router.navigate(['/search', termino]);
    }
    else{
      this._router.navigate(['/allheroes']);
    }
   
  }

}
