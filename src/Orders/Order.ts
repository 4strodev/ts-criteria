import { Field } from "../Filters/Filter/Field";
import { OrderDirection } from "./OrderDirection";

export class Order {
    constructor(private _field: Field, private _direction: OrderDirection) {}

    get field(): Field {
        return this._field;
    }

    get direction(): OrderDirection {
        return this._direction;
    }

    public static none() {
        return new Order(new Field("."), OrderDirection.NONE);
    }

    public static asc(field: Field) {
        return new Order(field, OrderDirection.ASC);
    }

    public static desc(field: Field) {
        return new Order(field, OrderDirection.DESC);
    }

    public isNone(): boolean {
        return this.direction.equals(OrderDirection.NONE);
    }

    equals(order: Order): boolean {
        return (
            this.field.equals(order.field) &&
            this.direction.equals(order.direction)
        );
    }

    serialize() {
        return {
            field: this.field.value,
            direction: this.direction.value,
        };
    }
}
