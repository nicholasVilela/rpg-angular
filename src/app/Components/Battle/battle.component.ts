import { Component, OnInit } from "@angular/core";
import { Player } from 'src/app/Models/player.model';
import { Enemy } from 'src/app/Models/enemy.model';
import { Store, Selector, Select } from '@ngxs/store';
import { PlayerState } from 'src/app/State/player.state';
import { Observable, Subscription } from 'rxjs';
import { EnemyTakeDamage } from 'src/app/Actions/enemy.action';
import { TakeDamage } from 'src/app/Actions/player.action';

@Component({
    selector: 'battle-component',
    templateUrl: './battle.component.html'
})

export class BattleComponent implements OnInit {
    constructor(private store: Store) {
        this.store
            .select(x => x.enemy.enemy)
            .subscribe(x => this.enemy = x)
        
        console.log(this.store.select(x => x.player.player).subscribe(x => x))

        this.store
            .select(x => x.player.player)
            .subscribe(x => this.player = x)

    }

    public player: Player
    public enemy: Enemy

    ngOnInit() {
        console.log(this.player)
        console.log(this.enemy)
    }

    attack() {
        this.store.dispatch(new EnemyTakeDamage(this.player.attacks[0].damage))

        this.store.dispatch(new TakeDamage(this.enemy.attacks[0].damage))
    }
}