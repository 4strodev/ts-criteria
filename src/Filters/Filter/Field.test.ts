import { describe, expect, it } from "@jest/globals";
import { Field } from "./Field";

describe("Field", () => {
    it("should not accept empty field", () => {
        expect(() => {
            new Field("");
        }).toThrowError();
    });

    it("should be compared using values", () => {
        const field1 = new Field("name");
        const field2 = new Field("name");
        expect(field1.equals(field2)).toBe(true);

        const field3 = new Field("surname");
        expect(field3.equals(field2)).toBe(false);
    });
});
