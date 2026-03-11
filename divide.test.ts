import { divide } from "./divide";

describe("divide", () => {
  // Casos básicos con enteros positivos
  it("divide dos enteros positivos de forma exacta", () => {
    expect(divide(12, 4)).toBe(3);
  });

  it("divide con resultado decimal", () => {
    expect(divide(10, 4)).toBeCloseTo(2.5);
  });

  // Casos con cero
  it("divide cero entre un número", () => {
    expect(divide(0, 5)).toBe(0);
  });

  it("divide un número entre uno", () => {
    expect(divide(7, 1)).toBe(7);
  });

  // Casos con números negativos
  it("divide dos números negativos", () => {
    expect(divide(-12, -4)).toBe(3);
  });

  it("divide un positivo entre un negativo", () => {
    expect(divide(12, -4)).toBe(-3);
  });

  it("divide un negativo entre un positivo", () => {
    expect(divide(-12, 4)).toBe(-3);
  });

  // Caso límite: división por cero
  it("lanza un error al dividir por cero", () => {
    expect(() => divide(5, 0)).toThrow("Division by zero is not allowed.");
  });
});