import { describe, expect, it } from "@jest/globals";
import { Criteria } from "./Criteria";
import { Field, Operators } from "./Filters/Filter";
import { Filter } from "./Filters/Filter/Filter";
import { Operand } from "./Filters/Filter/Operand";
import { Operator } from "./Filters/Filter/Operator";
import { FilterGroup } from "./Filters/FilterGroup";
import { Filters } from "./Filters/Filters";
import { Limit } from "./Limit";
import { Orders } from "./Orders/Orders";
import { Skip } from "./Skip";

describe("Criteria test suite", () => {
    it("should be instantiated", () => {
        expect(
            () =>
                new Criteria({
                    filters: new Filters([
                        FilterGroup.create([
                            new Filter(
                                new Field("name"),
                                Operator.from(Operators.EQUAL),
                                new Operand("value"),
                            ),
                        ]),
                    ]),
                    orders: Orders.EMPTY(),
                    limit: Limit.NONE(),
                    skip: Skip.NONE(),
                }),
        ).not.toThrowError();

        expect(() => Criteria.NONE()).not.toThrowError();
    });
    it("should be compared by value", () => {
        const criteria1 = new Criteria({
            filters: new Filters([
                FilterGroup.create([
                    new Filter(
                        new Field("name"),
                        Operator.from(Operators.EQUAL),
                        new Operand("value"),
                    ),
                ]),
            ]),
            orders: Orders.EMPTY(),
            limit: Limit.NONE(),
            skip: Skip.NONE(),
        });
        const criteria2 = new Criteria({
            filters: new Filters([
                FilterGroup.create([
                    new Filter(
                        new Field("name"),
                        Operator.from(Operators.EQUAL),
                        new Operand("value"),
                    ),
                ]),
            ]),
            orders: Orders.EMPTY(),
            limit: Limit.NONE(),
            skip: Skip.NONE(),
        });
        expect(criteria1.equals(criteria2)).toBe(true);
        expect(criteria1.equals(Criteria.NONE())).toBe(false);
    });
    it("should be seralized", () => {
        const criteria = new Criteria({
            filters: new Filters([
                FilterGroup.create([
                    new Filter(
                        new Field("name"),
                        Operator.from(Operators.EQUAL),
                        new Operand("value"),
                    ),
                ]),
            ]),
            orders: Orders.EMPTY(),
            limit: Limit.NONE(),
            skip: Skip.NONE(),
        });
        expect(criteria.serialize()).toEqual({
            filters: [
                [
                    {
                        field: "name",
                        operator: Operators.EQUAL,
                        operand: "value",
                    },
                ],
            ],
            orders: [],
            limit: 0,
            skip: 0,
        });
    });
});
