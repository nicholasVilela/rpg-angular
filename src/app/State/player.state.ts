import { Player } from '../Models/player.model';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { TakeDamage } from '../Actions/player.action';

export class PlayerStateModel {
    player: Player
}

@State<PlayerStateModel>({
    name: 'player',
    defaults: {
        player: new Player()
    }
})

export class PlayerState {
    @Selector()
    static getPlayer(state: PlayerStateModel) {
        return state.player
    }

    @Action(TakeDamage)
    takeDamage({getState, patchState}: StateContext<PlayerStateModel>, {payload}: TakeDamage) {
        const state = getState()

        patchState({
            player: {
                ...state.player,
                health: state.player.health - payload
            }
        })
    }
}