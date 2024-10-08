export class Skip {
    public get value(): number {
        return this._value;
    }

    constructor(private _value: number) {
        if (this.value < 0) {
            throw new Error("Invalid skip it must be at least 0");
        }
    }

    public static NONE(): Skip {
        return new Skip(0);
    }

    public equals(skip: Skip): boolean {
        return this.value === skip.value;
    }

    public isNone(): boolean {
        return this.equals(Skip.NONE());
    }
}
