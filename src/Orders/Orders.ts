import { Order } from "./Order";

export class Orders {
    protected constructor(private _orders: Order[]) {}

    public get orders(): Order[] {
        return this._orders;
    }

    public static create(_orders: Order[]): Orders {
        const orders = new Orders(_orders);
        if (orders.isEmpty()) {
            throw new Error("Empty orders not allowed");
        }

        return orders;
    }

    public static EMPTY(): Orders {
        return new Orders([]);
    }

    public isEmpty(): boolean {
        return this.orders.length === 0;
    }

    /**
     * Check if is equal to provided group comparing its filters
     * @param orders
     */
    public equals(orders: Orders): boolean {
        if (this.orders.length !== orders.orders.length) {
            return false;
        }

        for (let i = 0; i < this.orders.length; i++) {
            // biome-ignore lint/style/noNonNullAssertion: <explanation>
            const order = orders.orders[i]!;
            // biome-ignore lint/style/noNonNullAssertion: <explanation>
            const _order = this.orders[i]!;

            if (!order.equals(_order)) {
                return false;
            }
        }

        return true;
    }

    serialize() {
        return this.orders.map((order) => order.serialize());
    }
}
