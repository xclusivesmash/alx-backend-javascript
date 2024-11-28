/* import modules */
const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function() {
  /* addition testing */
  describe('type: "SUM"', function() {
    it('equal +ve numbers', function() {
      assert.strictEqual(calculateNumber('SUM', 2.0, 2.0), 4);
    });

    it('+ve numbers', function() {
      assert.strictEqual(calculateNumber('SUM', 2.3, 1.8), 4);
    });

    it('equal -ve numbers', function() {
      assert.strictEqual(calculateNumber('SUM', -2.0, -2.0), -4);
    });

    it('-ve numbers', function() {
      assert.strictEqual(calculateNumber('SUM', -2.3, -1.8), -4);
    });

    it('oppositesigns', function() {
      assert.strictEqual(calculateNumber('SUM', -2.0, 2.0), 0);
    });

    it('opposite signs (second version)', function() {
      assert.strictEqual(calculateNumber('SUM', 2.0, -2.0), 0);
    });

    it('sum of zeros', function() {
      assert.strictEqual(calculateNumber('SUM', 0.0, 0.0), 0);
    });
  });

  /* subtraction testing */
  describe('type: "SUBTRACT"', function() {
    it('equal +ive numbers', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.0, 2.0), 0);
    });

    it('+ive numbers', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.3, 1.8), 0);
    });

    it('equal -ve numbers', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', -2.0, -2.0), 0);
    });

    it('-ve numbers', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', -2.3, -1.8), 0);
    });

    it('opposite signs', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', -2.0, 2.0), -4.0);
    });

    it('opposite signs (second version)', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.0, -2.0), 4.0);
    });

    it('subtraction of zeros', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 0.0, 0.0), 0);
    });
  });

  /* division testing */
  describe('type: "DIVIDE"', function() {
    it('+ve numbers', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 8.0, 2.0), 4.0);
    });

    it('opposite signs', function() {
      assert.strictEqual(calculateNumber('DIVIDE', -7.0, 2.0), -3.5);
    });

    it('opposite signs', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 7.0, -2.0), -3.5);
    });

    it('-ve numbers', function() {
      assert.strictEqual(calculateNumber('DIVIDE', -7.0, -2.0), 3.5);
    });

    it('equal +ve numbers', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 2.0, 2.0), 1);
    });

    it('equal -ve numbers', function() {
      assert.strictEqual(calculateNumber('DIVIDE', -2.0, -2.0), 1);
    });

    it('equal numbers', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 2.6, 3.0), 1);
    });

    it('equal numbers', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 2.4, 2.0), 1);
    });

    it('0 and +ve number', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 0.0, 5.0), 0);
    });

    it('0 and -ve number', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 0.0, -5.0), -0);
    });

    it('+ve number and 0', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 5.0, 0), 'Error');
    });

    it('+ve number and number rounded down to 0', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 5.0, 0.2), 'Error');
    });

    it('+ve number and number rounded up to 0', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 5.0, -0.2), 'Error');
    });

    it('-ve number and 0', function() {
      assert.strictEqual(calculateNumber('DIVIDE', -5.0, 0), 'Error');
    });

    it('-ve number and number rounded down to zero', function() {
      assert.strictEqual(calculateNumber('DIVIDE', -5.0, 0.2), 'Error');
    });

    it('-ve number and number rounded up to zero', function() {
      assert.strictEqual(calculateNumber('DIVIDE', -5.0, -0.2), 'Error');
    });

    it('division of zeros', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 0.0, 0.0), 'Error');
    });
  });
});
