import validation from "./helpers/validation";

test("Validation Helper", () => {
  const inputCase1 = "232,1,12,53";
  const inputCase2 = "232,1,12,53,sa,2";
  const inputCase3 = "232,1,12,,";

  expect(validation(inputCase1)).toBe(true);
  expect(validation(inputCase2)).toBe(false);
  expect(validation(inputCase3)).toBe(false);
});
