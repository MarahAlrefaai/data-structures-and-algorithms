const validate_brackets=require('../validate_brackets_function');
describe('validate brackets test ', () => {
  it('first', () => {
      expect(validate_brackets("{}(){}")).toBe(true);
      expect(validate_brackets("[({}]")).toBe(false);
      expect(validate_brackets("{}{Code}[Fellows](())")).toBe(true);
      expect(validate_brackets("{}{Code}[Fellows]())")).toBe(false);
      expect(validate_brackets("CodeFellows")).toBe("there is no Brackets  in this string");
  })
})