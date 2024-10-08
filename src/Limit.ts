export class Limit {
    public get value(): number {
        return this._value;
    }
    constructor(private _value: number) {
        if (this.value < 0) {
            throw new Error("Invalid limit it must be at least 0");
        }
    }

    public static NONE(): Limit {
        return new Limit(0);
    }

    public equals(limit: Limit): boolean {
        return this.value === limit.value;
    }

    public isNone(): boolean {
        return this.equals(Limit.NONE());
    }
}
