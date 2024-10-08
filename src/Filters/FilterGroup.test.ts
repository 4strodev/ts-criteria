import { describe, expect, it } from "@jest/globals";
import { Field } from "./Filter/Field";
import { Filter } from "./Filter/Filter";
import { Operand } from "./Filter/Operand";
import { Operator, Operators } from "./Filter/Operator";
import { FilterGroup } from "./FilterGroup";

describe("Filter group test suite", () => {
    it("should be instantiated", () => {
        expect(() => FilterGroup.create([])).toThrowError();
        expect(() =>
            FilterGroup.create([
                new Filter(
                    new Field("name"),
                    Operator.from(Operators.EQUAL),
                    new Operand("val"),
                ),
            ]),
        ).not.toThrowError();
    });

    it("should create empty filter group", () => {
        const filterGroup = FilterGroup.EMPTY();
        expect(filterGroup.isEmpty()).toBe(true);
    });

    it("should be compared by values", () => {
        const filterGroup1 = FilterGroup.create([
            new Filter(
                new Field("name"),
                Operator.from(Operators.EQUAL),
                new Operand("val"),
            ),
        ]);
        const filterGroup2 = FilterGroup.create([
            new Filter(
                new Field("name"),
                Operator.from(Operators.EQUAL),
                new Operand("val"),
            ),
        ]);
        expect(filterGroup1.equals(filterGroup2)).toBe(true);

        const filterGroup3 = FilterGroup.create([
            new Filter(
                new Field("name"),
                Operator.from(Operators.EQUAL),
                new Operand("another value"),
            ),
        ]);
        expect(filterGroup1.equals(filterGroup3)).toBe(false);

        const filterGroup4 = FilterGroup.create([
            new Filter(
                new Field("name"),
                Operator.from(Operators.EQUAL),
                new Operand("another value"),
            ),
            new Filter(
                new Field("lastname"),
                Operator.from(Operators.EQUAL),
                new Operand("another value"),
            ),
        ]);
        expect(filterGroup1.equals(filterGroup4)).toBe(false);
    });

    it("should be serialized", () => {
        const filterGroup = FilterGroup.create([
            new Filter(
                new Field("name"),
                Operator.from(Operators.EQUAL),
                new Operand("val"),
            ),
        ]);

        expect(filterGroup.serialize()).toEqual([
            {
                field: "name",
                operator: Operators.EQUAL,
                operand: "val",
            },
        ]);
    });
});
