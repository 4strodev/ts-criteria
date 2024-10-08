import { describe, expect, it } from "@jest/globals";
import { OrderDirection } from "./OrderDirection";

describe("OrderDirections test suite", () => {
    it("should have basic directions", () => {
        expect(OrderDirection.DESC.value).toBe("DESC");
        expect(OrderDirection.ASC.value).toBe("ASC");
        expect(OrderDirection.NONE.value).toBe("NONE");
    });
    it("should be compared by values", () => {
        expect(OrderDirection.ASC.equals(OrderDirection.ASC)).toBe(true);
        expect(OrderDirection.DESC.equals(OrderDirection.DESC)).toBe(true);
        expect(OrderDirection.DESC.equals(OrderDirection.DESC)).toBe(true);
    });
    it("should be created with raw direction", () => {
        const direction = OrderDirection.from("ASC");
        expect(direction.equals(OrderDirection.ASC));
        expect(() => OrderDirection.from("asdfa")).toThrowError();
    });
});
