import { multiply } from "./multiply";

describe("multiply", () => {
  // Casos básicos con enteros positivos
  it("multiplica dos enteros positivos", () => {
    expect(multiply(3, 4)).toBe(12);
  });

  it("multiplica un número por uno", () => {
    expect(multiply(7, 1)).toBe(7);
  });

  // Casos con cero
  it("multiplica un número por cero", () => {
    expect(multiply(9, 0)).toBe(0);
  });

  it("multiplica cero por un número", () => {
    expect(multiply(0, 9)).toBe(0);
  });

  it("multiplica cero por cero", () => {
    expect(multiply(0, 0)).toBe(0);
  });

  // Casos con números negativos
  it("multiplica dos números negativos", () => {
    expect(multiply(-3, -4)).toBe(12);
  });

  it("multiplica un positivo por un negativo", () => {
    expect(multiply(5, -3)).toBe(-15);
  });

  it("multiplica un negativo por un positivo", () => {
    expect(multiply(-5, 3)).toBe(-15);
  });
});