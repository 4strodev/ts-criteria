import { Filters } from "./Filters/Filters";
import { Limit } from "./Limit";
import { Orders } from "./Orders/Orders";
import { Skip } from "./Skip";

export class Criteria {
    get filters(): Filters {
        return this._filters;
    }
    get orders(): Orders {
        return this._orders;
    }

    get limit(): Limit {
        return this._limit;
    }

    get skip(): Skip {
        return this._skip;
    }

    private readonly _filters: Filters;
    private readonly _orders: Orders;
    private readonly _limit: Limit;
    private readonly _skip: Skip;
    constructor(params: {
        filters: Filters;
        orders: Orders;
        limit?: Limit;
        skip?: Skip;
    }) {
        this._filters = params.filters;
        this._orders = params.orders;
        this._limit = params.limit || Limit.NONE();
        this._skip = params.skip || Skip.NONE();
    }

    public static NONE(): Criteria {
        return new Criteria({
            filters: Filters.EMPTY(),
            orders: Orders.EMPTY(),
        });
    }

    serialize() {
        return {
            filters: this.filters.serialize(),
            orders: this.orders.serialize(),
            limit: this.limit.value,
            skip: this.skip.value,
        };
    }

    equals(criteria: Criteria): boolean {
        return (
            criteria.filters.equals(this.filters) &&
            criteria.orders.equals(this.orders) &&
            criteria.limit.equals(this.limit) &&
            criteria.skip.equals(this.skip)
        );
    }
}
