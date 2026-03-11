import { subtract } from "./subtract";

describe("subtract", () => {
  // Casos básicos con enteros positivos
  it("resta dos enteros positivos", () => {
    expect(subtract(10, 3)).toBe(7);
  });

  it("resta cuando el resultado es negativo", () => {
    expect(subtract(3, 10)).toBe(-7);
  });

  // Casos con cero
  it("resta cero a un número", () => {
    expect(subtract(5, 0)).toBe(5);
  });

  it("resta un número a cero", () => {
    expect(subtract(0, 5)).toBe(-5);
  });

  it("resta cero a cero", () => {
    expect(subtract(0, 0)).toBe(0);
  });

  // Casos con números negativos
  it("resta dos números negativos", () => {
    expect(subtract(-4, -7)).toBe(3);
  });

  it("resta un número negativo a un positivo", () => {
    expect(subtract(5, -3)).toBe(8);
  });

  it("resta un número positivo a un negativo", () => {
    expect(subtract(-5, 3)).toBe(-8);
  });
});