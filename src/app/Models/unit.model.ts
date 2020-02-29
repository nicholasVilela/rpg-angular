import { Attack } from './attack.model';

export interface Unit {
    health: number
    level: number
    experience: number
    attacks: Attack[]
}