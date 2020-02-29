import { Unit } from './unit.model';

export class Player implements Unit {
    health = 50
    level = 1
    experience = 0
    attacks = [
        {
            name: 'Kick',
            damage: 10
        }
    ]
}