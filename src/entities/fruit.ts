import { Nutritions } from "./nutritions";

export class Fruit {
  constructor(
    readonly id: number,
    readonly genus: string,
    readonly name: string,
    readonly family: string,
    readonly order: string,
    readonly nutritions: Nutritions
  ) {}

  static create(v: Fruit) {
    if (!v.name || v.name.trim().length === 0) {
      throw new Error("Name is required");
    }

    if (v.id <= 0) {
      throw new Error("Id must be greater than zero");
    }

    return new Fruit(v.id, v.genus, v.name, v.family, v.order, v.nutritions);
  }
}
