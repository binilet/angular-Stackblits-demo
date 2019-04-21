import { Injectable } from '@angular/core';
import {Hero} from './Hero';
import {fakeHeros} from './mock-heros';
@Injectable()
export class HeroServiceService {

  constructor() { }

  getHeros(): Hero[]
  {
    return fakeHeros;
  }

}