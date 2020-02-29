export class EnemyTakeDamage {
    static readonly type = '[ENEMY] TAKE_DAMAGE'

    constructor(public payload: number) {}
}