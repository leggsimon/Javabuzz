describe("Javabuzz", function() {

  var javabuzz;

  beforeEach(function() {
    javabuzz = new Javabuzz
  });

  describe('knows when a number is', function() {

    it('divisible by 3', function() {
      expect(javabuzz.isDivisibleByThree(3)).toBe(true);
    });

  });

  describe('knows when a number is NOT', function() {

    it('divisible by 3', function() {
      expect(javabuzz.isDivisibleByThree(1)).toBe(false);
    });
  });

  describe('knows when a number is', function() {
    it('divisible by 5', function() {
      expect(javabuzz.isDivisibleByFive(10)).toBe(true);
    });
  });

  describe('knows when a number is NOT', function() {
    it('divisible by 5', function() {
      expect(javabuzz.isDivisibleByFive(11)).toBe(false);
    });
  });

  describe('knows when a number is', function() {
    it('divisible by 15', function() {
      expect(javabuzz.isDivisibleByFifteen(15)).toBe(true);
    });
  });

  describe('knows when a number is NOT', function() {
    it('divisible by fifteen', function() {
      expect(javabuzz.isDivisibleByFifteen(20)).toBe(false);
    });
  });

  describe('when playing, says', function() {
    it(' "Java" when a number is divisible by 3', function() {
      expect(javabuzz.says(3)).toEqual('Java');
    });
  });

  describe('when playing, says', function() {
    it('"Buzz" when a number is divisible by 5', function() {
      expect(javabuzz.says(10)).toEqual('Buzz');
    });
  });

  describe('when playing, says', function() {
    it('"Javabuzz" when a number is divisible by 15', function() {
      expect(javabuzz.says(15)).toEqual('Javabuzz');
    });
  });

  describe('when playing, returns', function() {
    it('the number when NOT divisble by 3, 5 or 15', function() {
      expect(javabuzz.says(7)).toEqual(7);
    });
  });
});
