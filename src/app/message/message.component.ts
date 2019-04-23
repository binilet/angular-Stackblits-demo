import { Component, OnInit } from '@angular/core';
import {MessageService} from '../message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor(public _ms : MessageService) { }
  //_m : string[];

  ngOnInit() {
    //this._ms.getMessage().subscribe(x=>this._m = x);
  }

}