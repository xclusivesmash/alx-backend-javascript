/* import modules */
const { expect } = require('chai');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function() {
  /* addition testing */
  describe('type: "SUM"', function() {
    it('equal +ve numbers', function() {
      expect(calculateNumber('SUM', 2.0, 2.0)).to.equal(4);
    });

    it('+ve numbers', function() {
      expect(calculateNumber('SUM', 2.3, 1.8)).to.equal(4);
    });

    it('equal -ve numbers', function() {
      expect(calculateNumber('SUM', -2.0, -2.0)).to.equal(-4);
    });

    it('-ve numbers', function() {
      expect(calculateNumber('SUM', -2.3, -1.8)).to.equal(-4);
    });

    it('oppositesigns', function() {
      expect(calculateNumber('SUM', -2.0, 2.0)).to.equal(0);
    });

    it('opposite signs (second version)', function() {
      expect(calculateNumber('SUM', 2.0, -2.0)).to.equal(0);
    });

    it('sum of zeros', function() {
      expect(calculateNumber('SUM', 0.0, 0.0)).to.equal(0);
    });
  });

  /* subtraction testing */
  describe('type: "SUBTRACT"', function() {
    it('equal +ive numbers', function() {
      expect(calculateNumber('SUBTRACT', 2.0, 2.0)).to.equal(0);
    });

    it('+ive numbers', function() {
      expect(calculateNumber('SUBTRACT', 2.3, 1.8)).to.equal(0);
    });

    it('equal -ve numbers', function() {
      expect(calculateNumber('SUBTRACT', -2.0, -2.0)).to.equal(0);
    });

    it('-ve numbers', function() {
      expect(calculateNumber('SUBTRACT', -2.3, -1.8)).to.equal(0);
    });

    it('opposite signs', function() {
      expect(calculateNumber('SUBTRACT', -2.0, 2.0)).to.equal(-4.0);
    });

    it('opposite signs (second version)', function() {
      expect(calculateNumber('SUBTRACT', 2.0, -2.0)).to.equal(4.0);
    });

    it('subtraction of zeros', function() {
      expect(calculateNumber('SUBTRACT', 0.0, 0.0)).to.equal(0);
    });
  });

  /* division testing */
  describe('type: "DIVIDE"', function() {
    it('+ve numbers', function() {
      expect(calculateNumber('DIVIDE', 8.0, 2.0)).to.equal(4.0);
    });

    it('opposite signs', function() {
      expect(calculateNumber('DIVIDE', -7.0, 2.0)).to.equal(-3.5);
    });

    it('opposite signs', function() {
      expect(calculateNumber('DIVIDE', 7.0, -2.0)).to.equal(-3.5);
    });

    it('-ve numbers', function() {
      expect(calculateNumber('DIVIDE', -7.0, -2.0)).to.equal(3.5);
    });

    it('equal +ve numbers', function() {
      expect(calculateNumber('DIVIDE', 2.0, 2.0)).to.equal(1);
    });

    it('equal -ve numbers', function() {
      expect(calculateNumber('DIVIDE', -2.0, -2.0)).to.equal(1);
    });

    it('equal numbers', function() {
      expect(calculateNumber('DIVIDE', 2.6, 3.0)).to.equal(1);
    });

    it('equal numbers', function() {
      expect(calculateNumber('DIVIDE', 2.4, 2.0)).to.equal(1);
    });

    it('0 and +ve number', function() {
      expect(calculateNumber('DIVIDE', 0.0, 5.0)).to.equal(0);
    });

    it('0 and -ve number', function() {
      expect(calculateNumber('DIVIDE', 0.0, -5.0)).to.equal(-0);
    });

    it('+ve number and 0', function() {
      expect(calculateNumber('DIVIDE', 5.0, 0)).to.equal('Error');
    });

    it('+ve number and number rounded down to 0', function() {
      expect(calculateNumber('DIVIDE', 5.0, 0.2)).to.equal('Error');
    });

    it('+ve number and number rounded up to 0', function() {
      expect(calculateNumber('DIVIDE', 5.0, -0.2)).to.equal('Error');
    });

    it('-ve number and 0', function() {
      expect(calculateNumber('DIVIDE', -5.0, 0)).to.equal('Error');
    });

    it('-ve number and number rounded down to zero', function() {
      expect(calculateNumber('DIVIDE', -5.0, 0.2)).to.equal('Error');
    });

    it('-ve number and number rounded up to zero', function() {
      expect(calculateNumber('DIVIDE', -5.0, -0.2)).to.equal('Error');
    });

    it('division of zeros', function() {
      expect(calculateNumber('DIVIDE', 0.0, 0.0)).to.equal('Error');
    });
  });
});
