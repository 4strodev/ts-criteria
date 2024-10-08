import { describe, expect, it } from "@jest/globals";
import { Field } from "./Filter/Field";
import { Filter } from "./Filter/Filter";
import { Operand } from "./Filter/Operand";
import { Operator, Operators } from "./Filter/Operator";
import { FilterGroup } from "./FilterGroup";
import { Filters } from "./Filters";

describe("Filters test suite", () => {
    it("should be instantiated", () => {
        expect(() => Filters.create([])).toThrowError();
        expect(() => Filters.EMPTY()).not.toThrowError();
        expect(() => Filters.create([FilterGroup.EMPTY()])).not.toThrowError();
    });
    it("should be compared by values", () => {
        const filters1 = Filters.create([
            FilterGroup.create([
                new Filter(
                    new Field("name"),
                    Operator.from(Operators.EQUAL),
                    new Operand("value"),
                ),
            ]),
        ]);
        const filters2 = Filters.create([
            FilterGroup.create([
                new Filter(
                    new Field("name"),
                    Operator.from(Operators.EQUAL),
                    new Operand("value"),
                ),
            ]),
        ]);

        expect(filters1.equals(filters2)).toBe(true);

        const filters3 = Filters.create([
            FilterGroup.create([
                new Filter(
                    new Field("name"),
                    Operator.from(Operators.EQUAL),
                    new Operand("another value"),
                ),
            ]),
        ]);
        expect(filters1.equals(filters3)).toBe(false);

        const filters4 = Filters.create([
            FilterGroup.create([
                new Filter(
                    new Field("name"),
                    Operator.from(Operators.EQUAL),
                    new Operand("another value"),
                ),
            ]),
            FilterGroup.create([
                new Filter(
                    new Field("lastname"),
                    Operator.from(Operators.EQUAL),
                    new Operand("value"),
                ),
            ]),
        ]);
        expect(filters1.equals(filters4)).toBe(false);
    });
    it("should be serialized", () => {
        const filters = Filters.create([
            FilterGroup.create([
                new Filter(
                    new Field("name"),
                    Operator.from(Operators.EQUAL),
                    new Operand("value"),
                ),
            ]),
        ]);
        expect(filters.serialize()).toEqual([
            [
                {
                    field: "name",
                    operator: Operators.EQUAL,
                    operand: "value",
                },
            ],
        ]);
    });
});
