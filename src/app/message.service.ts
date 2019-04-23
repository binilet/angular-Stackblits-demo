import { Injectable } from '@angular/core';
import {Observable,of} from 'rxjs';

@Injectable()
export class MessageService {
  messages :string[] = [];

  addMessage(msg: string){
    this.messages.push(msg);
  }

  clearMessage(){
    this.messages = [];
  }
  getMessage() : Observable<string[]>{
    return of(this.messages);
  }
  
  constructor() { }

}