import { expect, test } from "vitest";
import { Calculadora } from "../src/calculadora";

test("Deve somar 10 + 10 e retornar 10", () => {
  const calculadora = new Calculadora();
  const resultado = calculadora.somar(10, 10);
  expect(resultado).toBe(20);
});
