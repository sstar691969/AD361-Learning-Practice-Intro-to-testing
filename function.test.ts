
import {
  isEven,
  add,
  divide,
  palindrome,
  countVowels,
  findMax,
  removeDuplicates,
} from "./function";

describe("isEven", () => {
  test("returns true for an even number", () => {
    expect(isEven(3)).toBe(true);
  });

  test("returns false for an odd number", () => {
    expect(isEven(5)).toBe(false);
  });
});

describe("add", () => {
  test("adds two numbers", () => {
    expect(add(2, 3)).toBe(5);
  });
});


describe("palindrome", () => {
  test("returns true for a palindrome", () => {
    expect(palindrome("racecar")).toBe(true);
  });

  test("returns false for a non-palindrome", () => {
    expect(palindrome("hello")).toBe(false);
  });
});

describe("countVowels", () => {
  test("counts vowels in a string", () => {
    expect(countVowels("hello")).toBe(2);
  });
});

