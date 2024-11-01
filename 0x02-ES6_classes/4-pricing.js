import Currency from './3-currency';

/* pricing class implementation */
export default class Pricing {
  /* Pricing class definition.
  * attributes:
  *   _amount (Number)
  *   _currency: (Currency)
  */
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    /* amount getter */
    return this._amount;
  }

  set amount(value) {
    /* amount setter */
    if (typeof value !== 'number') {
      throw new TypeError('amount must be a number');
    }
    this._amount = value;
  }

  get currency() {
    /* currency getter */
    return this._currency;
  }

  set currency(value) {
    if (!(value instanceof Currency)) {
      throw new TypeError('currency must be of type Currency');
    }
    this._currency = value;
  }

  displayFullPrice() {
    console.log(`${this._amount} ${this._currency.name} (${this._currency.code})`);
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new TypeError('amount must be a number');
    }
    if (typeof conversionRate !== 'number') {
      throw new TypeError('conversionRate must be a number');
    }
    return amount * conversionRate;
  }
}
