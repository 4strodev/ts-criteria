import { Filter } from "./Filter";

export class FilterGroup {
    protected constructor(private _filters: Filter[]) {}

    get filters(): Filter[] {
        return this._filters;
    }

    public static create(filters: Filter[]) {
        const filterGroup = new FilterGroup(filters);
        if (filterGroup.isEmpty()) {
            throw new Error("Empty filters are not allowed");
        }
        return filterGroup;
    }

    public static EMPTY(): FilterGroup {
        return new FilterGroup([]);
    }

    public isEmpty(): boolean {
        return this._filters.length === 0;
    }

    /**
     * Check if is equal to provided group comparing its filters
     * @param group
     */
    public equals(group: FilterGroup): boolean {
        if (this._filters.length !== group._filters.length) {
            return false;
        }

        for (let i = 0; i < this._filters.length; i++) {
            // biome-ignore lint/style/noNonNullAssertion: <explanation>
            const groupFilter = group._filters[i]!;
            // biome-ignore lint/style/noNonNullAssertion: <explanation>
            const filter = this._filters[i]!;

            if (!groupFilter.equals(filter)) {
                return false;
            }
        }

        return true;
    }

    serialize() {
        return this._filters.map((filter) => filter.serialize());
    }
}
