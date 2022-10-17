export interface CreateNutritions {
  carbohydrates: number;
  protein: number;
  fat: number;
  calories: number;
  sugar: number;
}

export class Nutritions {
  constructor(
    readonly carbohydrates: number,
    readonly protein: number,
    readonly fat: number,
    readonly calories: number,
    readonly sugar: number
  ) {}

  static create(v: CreateNutritions) {
    if (v.calories === 0 && v.carbohydrates >= 10) {
      throw new Error(
        "Zero calories requires carbohydrates quantity is less than 10"
      );
    }

    return new Nutritions(
      v.carbohydrates,
      v.protein,
      v.fat,
      v.calories,
      v.sugar
    );
  }
}
