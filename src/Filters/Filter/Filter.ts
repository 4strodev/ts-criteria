import { Field } from "./Field";
import { Operand } from "./Operand";
import { Operator, Operators } from "./Operator";

export class Filter {
    constructor(
        private _filterField: Field,
        private _filterOperator: Operator,
        private _filterValue: Operand,
    ) {}

    public static create(
        field: string,
        operator: Operators,
        // biome-ignore lint/suspicious/noExplicitAny: Operand must accept any kind of value
        value: any,
    ): Filter {
        return new Filter(
            new Field(field),
            Operator.from(operator),
            new Operand(value),
        );
    }

    get field(): Field {
        return this._filterField;
    }

    get operator(): Operator {
        return this._filterOperator;
    }

    get operand(): Operand {
        return this._filterValue;
    }

    /**
     * Returns plain object representation of filter
     */
    public serialize() {
        return {
            field: this.field.value,
            operator: this.operator.value,
            operand: this.operand.value,
        };
    }

    /**
     * Check if provided filter is equal comparing its values
     * @param filter
     */
    public equals(filter: Filter): boolean {
        return (
            this.field.equals(filter.field) &&
            this.operator.equals(filter.operator) &&
            this.operand.equals(filter.operand)
        );
    }
}
