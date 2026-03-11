/**
 * Unit tests for subtract()
 * Loads the compiled subtract.js so window.subtract is available (same as in the browser).
 */
export {};
declare global {
  interface Window {
    subtract: (a: number, b: number) => number;
  }
}

beforeAll(() => {
  // Load the built script that attaches subtract to window (non-module)
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require("./subtract.js");
});

describe("subtract", () => {
  // Casos básicos con enteros positivos
  it("resta dos enteros positivos", () => {
    expect(window.subtract(10, 3)).toBe(7);
  });

  it("resta cuando el resultado es negativo", () => {
    expect(window.subtract(3, 10)).toBe(-7);
  });

  // Casos con cero
  it("resta cero a un número", () => {
    expect(window.subtract(5, 0)).toBe(5);
  });

  it("resta un número a cero", () => {
    expect(window.subtract(0, 5)).toBe(-5);
  });

  it("resta cero a cero", () => {
    expect(window.subtract(0, 0)).toBe(0);
  });

  // Casos con números negativos
  it("resta dos números negativos", () => {
    expect(window.subtract(-4, -7)).toBe(3);
  });

  it("resta un número negativo a un positivo", () => {
    expect(window.subtract(5, -3)).toBe(8);
  });

  it("resta un número positivo a un negativo", () => {
    expect(window.subtract(-5, 3)).toBe(-8);
  });
});