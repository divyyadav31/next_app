import { describe, it, expect } from "vitest";
import sum from "../app/sum";

describe("sum", () => {
  it("should return sum of two numbers", () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(-1, 1)).toBe(0);
    expect(sum(0, 0)).toBe(0);
  });
  it("should return a negative sum when both numbers are negative", () => {
    expect(sum(-1, -1)).toBe(-2);
    expect(sum(-5, -5)).toBe(-10);
  });

  it("should return the correct sum when one number is zero", () => {
    expect(sum(0, 5)).toBe(5);
    expect(sum(5, 0)).toBe(5);
  });
});
