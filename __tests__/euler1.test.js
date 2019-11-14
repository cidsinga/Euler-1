import { inputArray, arrayResult } from "./../src/euler1.js";

describe ("inputArray", () => {
  test("should return the total of an array of numbers divisible by 3 or 5", () => {
    const inputT = inputArray(9);
    expect(inputT).toEqual(23);
  })
});
