import { Injectable } from '@angular/core';
import {Hero} from './Hero';
import {fakeHeros} from './mock-heros';
import {Observable,of} from 'rxjs';
@Injectable()
export class HeroServiceService {

  constructor() { }

  getHeros(): Observable<Hero[]>
  {
    return of(fakeHeros);
  }

}