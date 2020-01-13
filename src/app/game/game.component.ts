import { Component, OnInit } from '@angular/core';
import Phaser from 'phaser';

class MainScene extends Phaser.Scene {
  constructor() {
    super({ key: 'main' });
  }
  preload() {
    console.log('preload method');
  }
  create() {
    console.log('create method');
  }
}
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  phaserGame: Phaser.Game;
  config: Phaser.Types.Core.GameConfig;

  constructor() {
    this.config = {
      type: Phaser.AUTO,
      height: 600,
      width: 800,
      scene: [MainScene],
      parent: 'gameContainer',
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 100 }
        }
      }
    };
  }
  ngOnInit() {
    this.phaserGame = new Phaser.Game(this.config);
  }

  clickDisplay(index) {
    console.log(index);
  }
  clickBuy(index) {
    //'res${index}'
    console.log(res1);
  }
  oneKeyScrape() {

  }
}

let res1 = {
  cardInfo: [{ cardId: 1, totalReward: 2000 }],
  gameInfo: [
    {
      num: [20],
      reward: [1000],
      result: [0]
    },
    {
      num: [10, 22, 33, 44, 55, 66],
      reward: [100, 500, 800, 1000, 20000, 2000000],
      result: [0, 0, 0, 1, 0, 1]
    }
  ]
};
let res2 = {
  cardInfo: [{ cardId: 2, totalReward: 2000 }],
  gameInfo: [
    {
      num: [20],
      reward: [1000],
      result: [0]
    },
    {
      num: [10, 22, 33, 44, 55, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      reward: [100, 500, 800, 1000, 20000, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
      result: [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }
  ]
};
let res3 = {
  cardInfo: [{ cardId: 3, totalReward: 2000 }],
  gameInfo: [
    {
      num: [20, 21, 22],
      reward: [1000, 500, 200],
      result: [0, 0, 0]
    },
    {
      num: [10, 22, 33, 44, 55, 66, 1, 2, 3, 4, 5, 6],
      reward: [100, 500, 800, 1000, 20000, 2000000, 100, 200, 300, 400, 500, 600],
      result: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }
  ]
};
