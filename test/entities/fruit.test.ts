import { beforeAll, expect, test } from "vitest";
import { Nutritions } from "../../src/entities/nutritions";
import { Fruit } from "../../src/entities/fruit";

let nutritions: Nutritions;

beforeAll(() => {
  nutritions = Nutritions.create({
    carbohydrates: 22,
    protein: 0,
    fat: 0.2,
    calories: 96,
    sugar: 17.2,
  });
});

test("should create a fruit", () => {
  const fruit = Fruit.create({
    id: 2,
    genus: "Musa",
    name: "Banana",
    family: "Musaceae",
    order: "Zingiberales",
    nutritions,
  });

  expect(fruit).toEqual({
    family: "Musaceae",
    genus: "Musa",
    id: 2,
    name: "Banana",
    order: "Zingiberales",
    nutritions: {
      calories: 96,
      carbohydrates: 22,
      fat: 0.2,
      protein: 0,
      sugar: 17.2,
    },
  });
});

test("should throws if provided id is negative", () => {
  try {
    Fruit.create({
      id: -1,
      genus: "Musa",
      name: "Banana",
      family: "Musaceae",
      order: "Zingiberales",
      nutritions,
    });
  } catch (e) {
    expect(e.message).toBe("Id must be greater than zero");
  }
});

test("should throws if provided id is zero", () => {
  try {
    Fruit.create({
      id: 0,
      genus: "Musa",
      name: "Banana",
      family: "Musaceae",
      order: "Zingiberales",
      nutritions,
    });
  } catch (e) {
    expect(e.message).toBe("Id must be greater than zero");
  }
});

test("should throws if provided name is empty", () => {
  try {
    Fruit.create({
      id: 2,
      genus: "Musa",
      name: "",
      family: "Musaceae",
      order: "Zingiberales",
      nutritions,
    });
  } catch (e) {
    expect(e.message).toBe("Name is required");
  }
});
