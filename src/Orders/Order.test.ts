import { describe, expect, it } from "@jest/globals";
import { Field } from "../Filters/Filter/Field";
import { Order } from "./Order";
import { OrderDirection } from "./OrderDirection";

describe("Test suite for Order", () => {
    it("should be instantiated", () => {
        expect(
            () => new Order(new Field("name"), OrderDirection.ASC),
        ).not.toThrowError();
        expect(Order.none().direction.equals(OrderDirection.NONE)).toBe(true);
        expect(
            Order.asc(new Field("name")).direction.equals(OrderDirection.ASC),
        ).toBe(true);
        expect(
            Order.desc(new Field("name")).direction.equals(OrderDirection.DESC),
        ).toBe(true);
    });
    it("should be compared by value", () => {
        const order1 = Order.asc(new Field("name"));
        const order2 = Order.asc(new Field("name"));
        expect(order1.equals(order2)).toBe(true);
        const order3 = Order.desc(new Field("name"));
        expect(order1.equals(order3)).toBe(false);
    });
    it("should be serialized", () => {
        const orderAsc = Order.asc(new Field("name"));
        const orderDesc = Order.desc(new Field("name"));
        expect(orderAsc.serialize()).toEqual({
            field: "name",
            direction: "ASC",
        });
        expect(orderDesc.serialize()).toEqual({
            field: "name",
            direction: "DESC",
        });

        expect(Order.none().serialize()).toEqual({
            field: ".",
            direction: "NONE",
        });
    });
});
