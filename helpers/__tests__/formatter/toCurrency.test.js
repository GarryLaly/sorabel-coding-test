/* eslint-disable func-names */

import { toCurrency } from "../../formatter";

describe("toCurrency()", function() {
  it("return currency from number", () => {
    const expected = "25,000";
    const result = toCurrency(25000);

    expect(result).toEqual(expected);
  });

  it("return currency from string", () => {
    const expected = "25,000";
    const result = toCurrency("25000");

    expect(result).toEqual(expected);
  });
});
