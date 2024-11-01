import Building from './5-building';

/* new class implementation */
export default class SkyHighBuilding extends Building {
  /* SkyHighBuilding class definition.
  * _sqft (number): area covered.
  * _floors (number): building floor count.
  */
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  get floors() {
    return this._floors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
