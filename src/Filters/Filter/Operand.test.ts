import { describe, expect, it } from "@jest/globals";
import { Operand } from "./Operand";

describe("Operand", () => {
    it("should accept any value", () => {
        const values = [null, undefined, "", 0, false, new Date()];
        for (const value of values) {
            expect(() => {
                new Operand(value);
            }).not.toThrowError();
        }
    });

    it("should be compared using values", () => {
        const operand1 = new Operand("some value");
        const operand2 = new Operand("some value");

        expect(operand1.equals(operand2)).toBe(true);

        const operand3 = new Operand("another value");
        expect(operand3.equals(operand2)).toBe(false);
    });

    it("should understand as false values that are objects", () => {
        const date = new Date();
        const operand1 = new Operand(date);
        const operand2 = new Operand(new Date(date.getTime()));

        expect(operand1.equals(operand2)).toBe(false);
    });
});
