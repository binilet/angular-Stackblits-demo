import { Injectable } from '@angular/core';
import {Hero} from './Hero';
import {fakeHeros} from './mock-heros';
import {Observable,of} from 'rxjs';
import {MessageService} from './message.service';
@Injectable()
export class HeroServiceService {

  constructor(public _mService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this._mService.addMessage('HeroService: fetched heroes');
     return of(fakeHeros);
  }

  //observable<Hero> actual return type
  getHero(id:number):Observable<Hero>
  {
    this._mService.addMessage(`added Hero: id=${id}`);
    return of(fakeHeros.find(hero => hero.id === id));
  }

}