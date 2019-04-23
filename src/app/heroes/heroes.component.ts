import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {fakeHeros} from '../mock-heros';
import {HeroServiceService} from '../hero-service.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero:Hero;
  //heros = fakeHeros;
  heros : Hero[];

  constructor(private heroService : HeroServiceService) { }
  

  ngOnInit() {
   // this.heros = this.heroService.getHeros();//this is synchronous blocking call on actual production environment won't work
   this.heroService.getHeroes().subscribe(heroes => this.heros = heroes);//asynchronous non-blocking call
   
  }
  
  onSelect(h: Hero): void{
   this.selectedHero = h;
   this.heroService._mService.addMessage("user clicked on Hero " + this.selectedHero.name);
  }

}