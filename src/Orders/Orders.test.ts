import { describe, expect, it } from "@jest/globals";
import { Field } from "../Filters/Filter/Field";
import { Order } from "./Order";
import { Orders } from "./Orders";

describe("Orders test suite", () => {
    it("should be instantiated", () => {
        const emptyOrders = Orders.EMPTY();
        expect(emptyOrders.isEmpty()).toBe(true);
        expect(() =>
            Orders.create([Order.asc(new Field("name"))]),
        ).not.toThrowError();
        expect(() => Orders.create([])).toThrowError();
    });
    it("should be compared by value", () => {
        const orders1 = Orders.create([Order.asc(new Field("name"))]);
        const orders2 = Orders.create([Order.asc(new Field("name"))]);
        expect(orders1.equals(orders2)).toBe(true);

        const orders3 = Orders.create([Order.asc(new Field("lastname"))]);
        expect(orders1.equals(orders3)).toBe(false);
        const emptyOrders = Orders.EMPTY();
        expect(orders1.equals(emptyOrders)).toBe(false);
    });
    it("should be serialized", () => {
        const orders = Orders.create([Order.asc(new Field("name"))]);
        expect(orders.serialize()).toEqual([
            {
                field: "name",
                direction: "ASC",
            },
        ]);
    });
});
