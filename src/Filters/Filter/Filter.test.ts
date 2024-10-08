import { describe, expect, it } from "@jest/globals";
import { Field } from "./Field";
import { Filter } from "./Filter";
import { Operand } from "./Operand";
import { Operator, Operators } from "./Operator";

describe("Filter", () => {
    it("should be created", () => {
        expect(
            new Filter(
                new Field("name"),
                Operator.from(Operators.EQUAL),
                new Operand("my name"),
            ),
        ).toBeTruthy();
    });

    it("should be serialized", () => {
        const filter1 = new Filter(
            new Field("name"),
            Operator.from(Operators.EQUAL),
            new Operand("my name"),
        );
        expect(filter1.serialize()).toEqual({
            field: "name",
            operator: Operators.EQUAL,
            operand: "my name",
        });
    });

    it("should be compared by values", () => {
        const filter1 = new Filter(
            new Field("name"),
            Operator.from(Operators.EQUAL),
            new Operand("my name"),
        );
        const filter2 = new Filter(
            new Field("name"),
            Operator.from(Operators.EQUAL),
            new Operand("my name"),
        );
        const filter3 = new Filter(
            new Field("name"),
            Operator.from(Operators.EQUAL),
            new Operand("other name"),
        );

        expect(filter1.equals(filter2)).toBe(true);
        expect(filter1.equals(filter3)).toBe(false);
    });
});
