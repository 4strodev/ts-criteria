export class Field {
    constructor(private _value: string) {
        if (!this.value) {
            throw new Error("Filter field is empty, null or undefined");
        }
    }

    get value(): string {
        return this._value;
    }

    /**
     * Check if provided field is equal comparing value
     * @param field
     */
    public equals(field: Field): boolean {
        return this.value === field.value;
    }
}
