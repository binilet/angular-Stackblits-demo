import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {fakeHeros} from '../mock-heros';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero:Hero;
  heros = fakeHeros;

  constructor() { }

  ngOnInit() {
  }
  
  onSelect(h: Hero): void{
   this.selectedHero = h;
  }

}