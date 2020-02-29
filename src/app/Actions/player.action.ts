export class TakeDamage {
    static readonly type = '[PLAYER] TAKE_DAMAGE'

    constructor(public payload: number) {}
}

export class gainExperience {
    static readonly type = '[PLAYER] GAIN_EXP'

    constructor(public payload: number) {}
}