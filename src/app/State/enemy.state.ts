import { Enemy } from '../Models/enemy.model';
import { Selector, Action, StateContext, State } from '@ngxs/store';
import { EnemyTakeDamage } from '../Actions/enemy.action';

export class EnemyStateModel {
    enemy: Enemy
}

@State<EnemyStateModel>({
    name: 'enemy',
    defaults: {
        enemy: new Enemy()
    }
})

export class EnemyState {
    @Selector()
    static getEnemy(state: EnemyStateModel) {
        return state.enemy
    }

    @Action(EnemyTakeDamage)
    enemyTakeDamage({getState, patchState}: StateContext<EnemyStateModel>, {payload}: EnemyTakeDamage) {
        const state = getState()

        patchState({
            enemy: {
                ...state.enemy,
                health: state.enemy.health - payload
            }
        })
    }
}