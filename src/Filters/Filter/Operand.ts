export class Operand {
    // biome-ignore lint/suspicious/noExplicitAny: Operand must accept any kind of value
    constructor(private _value: any) {}

    get value(): string {
        return this._value;
    }

    /**
     * Check if provided operand is equal comparing values
     * @param operand
     */
    equals(operand: Operand): boolean {
        return this.value === operand.value;
    }
}
