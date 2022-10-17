import { expect, test } from "vitest";
import { Nutritions } from "../../src/entities/nutritions";

test("should create a nutritions", () => {
  const nutrition = Nutritions.create({
    carbohydrates: 22,
    protein: 0,
    fat: 0.2,
    calories: 96,
    sugar: 17.2,
  });

  expect(nutrition).toEqual({
    carbohydrates: 22,
    protein: 0,
    fat: 0.2,
    calories: 96,
    sugar: 17.2,
  });
});

test("should throws if calories is zero and carbohydrates is less than 10", () => {
  try {
    Nutritions.create({
      carbohydrates: 20,
      protein: 0,
      fat: 0.2,
      calories: 0,
      sugar: 1.2,
    });
  } catch (e) {
    expect(e.message).toBe(
      "Zero calories requires carbohydrates quantity is less than 10"
    );
  }
});
