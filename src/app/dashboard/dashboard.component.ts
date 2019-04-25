import { Component, OnInit } from '@angular/core';
import {Hero} from '../Hero';
import {HeroServiceService} from '../hero-service.service';
import {MessageService} from '../message.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  hero : Hero[] = [];
  constructor(private heroService : HeroServiceService,private ms: MessageService) { }

  ngOnInit() {
    this.getHeroes();
  }
  getHeroes():void{
    
    this.heroService.getHeroes().subscribe
    (e=>this.hero = e.slice(1,5));
  }

}