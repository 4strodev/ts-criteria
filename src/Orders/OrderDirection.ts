export class OrderDirection {
    public static readonly NONE = new OrderDirection("NONE");
    public static readonly ASC = new OrderDirection("ASC");
    public static readonly DESC = new OrderDirection("DESC");

    public get value() {
        return this._value;
    }

    protected constructor(private _value: string) {}

    private static get entries() {
        return [this.NONE, this.ASC, this.DESC];
    }

    public static from(value: string) {
        for (const orderDirection of this.entries) {
            if (orderDirection.value === value) {
                return orderDirection;
            }
        }

        throw new Error(`'${value}' is not a valid order direction`);
    }

    public equals(direction: OrderDirection) {
        return this.value === direction.value;
    }
}
