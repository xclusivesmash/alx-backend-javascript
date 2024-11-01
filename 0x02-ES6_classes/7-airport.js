/* Aiport class implementation */
export default class Aiport {
  /* Aiport class definition.
  */
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  get [Symbol.toStringTag]() {
    return this._code;
  }
}
