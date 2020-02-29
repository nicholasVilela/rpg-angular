import { Unit } from './unit.model'

export class Enemy implements Unit {
    health = 25
    level = 1
    experience = 10
    attacks = [
        {
            name: 'Headbutt',
            damage: 4
        }
    ]
}