import { describe, expect, it } from "@jest/globals";
import { Skip } from "./Skip";

describe("Skip test suite", () => {
    it("should be instantiated", () => {
        expect(() => new Skip(-1)).toThrowError();
        expect(() => new Skip(1)).not.toThrowError();
        expect(() => new Skip(0)).not.toThrowError();
        expect(() => Skip.NONE()).not.toThrowError();
    });

    it("should be compared by value", () => {
        const skip1 = new Skip(0);
        expect(skip1.isNone()).toBe(true);
        const skip2 = Skip.NONE();
        expect(skip1.equals(skip2)).toBe(true);

        const skip3 = new Skip(3);
        expect(skip1.equals(skip3)).toBe(false);
    });
});
