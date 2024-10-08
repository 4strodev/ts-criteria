import { FilterGroup } from "./FilterGroup";

export class Filters {
    constructor(private _groups: FilterGroup[]) {}

    public get groups(): FilterGroup[] {
        return this._groups;
    }

    /**
     * @throws Error if groups is empty
     * @param groups
     */
    public static create(groups: FilterGroup[]): Filters {
        const filters = new Filters(groups);
        if (filters.isEmpty()) {
            throw new Error("Empty groups not allowed");
        }
        return filters;
    }

    public static EMPTY(): Filters {
        return new Filters([]);
    }

    public isEmpty(): boolean {
        return this.groups.length === 0;
    }
    /**
     * Check if is equal to provided group comparing its filters
     * @param filters
     */
    public equals(filters: Filters): boolean {
        if (this.groups.length !== filters.groups.length) {
            return false;
        }

        for (let i = 0; i < this.groups.length; i++) {
            // biome-ignore lint/style/noNonNullAssertion: <explanation>
            const filterGroup = filters.groups[i]!;
            // biome-ignore lint/style/noNonNullAssertion: <explanation>
            const group = this.groups[i]!;

            if (!filterGroup.equals(group)) {
                return false;
            }
        }

        return true;
    }

    serialize() {
        return this.groups.map((group) => group.serialize());
    }
}
