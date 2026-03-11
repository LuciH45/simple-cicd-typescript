/**
 * Unit tests for multiply()
 * Loads the compiled multiply.js so window.multiply is available (same as in the browser).
 */
declare global {
  interface Window {
    multiply: (a: number, b: number) => number;
  }
}

beforeAll(() => {
  // Load the built script that attaches multiply to window (non-module)
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require("./multiply.js");
});

describe("multiply", () => {
  // Casos básicos con enteros positivos
  it("multiplica dos enteros positivos", () => {
    expect(window.multiply(3, 4)).toBe(12);
  });

  it("multiplica un número por uno", () => {
    expect(window.multiply(7, 1)).toBe(7);
  });

  // Casos con cero
  it("multiplica un número por cero", () => {
    expect(window.multiply(9, 0)).toBe(0);
  });

  it("multiplica cero por un número", () => {
    expect(window.multiply(0, 9)).toBe(0);
  });

  it("multiplica cero por cero", () => {
    expect(window.multiply(0, 0)).toBe(0);
  });

  // Casos con números negativos
  it("multiplica dos números negativos", () => {
    expect(window.multiply(-3, -4)).toBe(12);
  });

  it("multiplica un positivo por un negativo", () => {
    expect(window.multiply(5, -3)).toBe(-15);
  });

  it("multiplica un negativo por un positivo", () => {
    expect(window.multiply(-5, 3)).toBe(-15);
  });
});