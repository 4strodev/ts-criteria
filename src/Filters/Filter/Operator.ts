export enum Operators {
    EQUAL = 0,
    NOT_EQUAL = 1,
    GREATER = 2,
    LOWER = 3,
    GREATER_EQUAL = 4,
    LOWER_EQUAL = 5,
    IN = 6,
    LIKE = 7,
}
export class Operator {
    protected constructor(private _value: Operators) {}

    get value(): number {
        return this._value;
    }

    public static from(value: number): Operator {
        for (const operator of Object.values(Operators)) {
            if (value === operator) {
                return new Operator(operator);
            }
        }
        throw new Error(
            `'${value}' is not a valid operator: ${Object.values(Operators)}`,
        );
    }

    /**
     * Check if provided operator is equal comparing values
     * @param operand
     */
    equals(operand: Operator): boolean {
        return this.value === operand.value;
    }
}
