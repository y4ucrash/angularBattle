import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  maboi: Hero = {
    id: 1,
    name: 'Maboi',
    level: '120',
    charClass: 'Warrior',
    hkCount: '5895',
    achievementScore: '9395',
    realm: 'Lightbringer',
    battleGroup: 'Cyclone'
  }


  constructor() { }

  ngOnInit() {
  }

}
