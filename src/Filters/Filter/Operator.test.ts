import { describe, expect, it } from "@jest/globals";
import { Operator, Operators } from "./Operator";

describe("Operator", () => {
    it("should accept only provided values", () => {
        const tests: { value: number; success: boolean }[] = [
            ...Object.values(Operators).map((value) => ({
                value: value as number,
                success: true,
            })),
            {
                value: -1,
                success: false,
            },
        ];

        for (const test of tests) {
            const assertion = expect(() => {
                Operator.from(test.value);
            });
            if (test.success) {
                assertion.not.toThrowError();
            } else {
                assertion.toThrowError();
            }
        }
    });

    it("should be compared using values", () => {
        const operator1 = Operator.from(Operators.EQUAL);
        const operator2 = Operator.from(Operators.EQUAL);

        expect(operator1.equals(operator2)).toBe(true);

        const operator3 = Operator.from(Operators.NOT_EQUAL);
        expect(operator3.equals(operator2)).toBe(false);
    });
});
