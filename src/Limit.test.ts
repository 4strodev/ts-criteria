import { describe, expect, it } from "@jest/globals";
import { Limit } from "./Limit";

describe("Limit test suite", () => {
    it("should be instantiated", () => {
        expect(() => new Limit(1)).not.toThrowError();
        expect(() => new Limit(0)).not.toThrowError();
        expect(() => new Limit(-1)).toThrowError();
    });

    it("should be compared by value", () => {
        const limit1 = new Limit(0);
        const limit2 = Limit.NONE();
        expect(limit1.isNone() && limit2.isNone()).toBe(true);
        expect(limit1.equals(limit2)).toBe(true);

        const limit3 = new Limit(1);
        expect(limit1.equals(limit3)).toBe(false);
    });
});
