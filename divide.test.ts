/**
 * Unit tests for divide()
 * Loads the compiled divide.js so window.divide is available (same as in the browser).
 */
declare global {
  interface Window {
    divide: (a: number, b: number) => number;
  }
}

beforeAll(() => {
  // Load the built script that attaches divide to window (non-module)
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require("./divide.js");
});

describe("divide", () => {
  // Casos básicos con enteros positivos
  it("divide dos enteros positivos de forma exacta", () => {
    expect(window.divide(12, 4)).toBe(3);
  });

  it("divide con resultado decimal", () => {
    expect(window.divide(10, 4)).toBeCloseTo(2.5);
  });

  // Casos con cero
  it("divide cero entre un número", () => {
    expect(window.divide(0, 5)).toBe(0);
  });

  it("divide un número entre uno", () => {
    expect(window.divide(7, 1)).toBe(7);
  });

  // Casos con números negativos
  it("divide dos números negativos", () => {
    expect(window.divide(-12, -4)).toBe(3);
  });

  it("divide un positivo entre un negativo", () => {
    expect(window.divide(12, -4)).toBe(-3);
  });

  it("divide un negativo entre un positivo", () => {
    expect(window.divide(-12, 4)).toBe(-3);
  });

  // Caso límite: división por cero
  it("lanza un error al dividir por cero", () => {
    expect(() => window.divide(5, 0)).toThrow("Division by zero is not allowed.");
  });
});