export default class Building {
  constructor(sqft) {
    this.sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(sqft) {
    if (typeof sqft === 'number') this._sqft = sqft;
    else throw TypeError('sqft must be a number');
  }

  evacuationWarningMessage() {
    if (this.constructor === Building) {
      throw Error(
        'Class extending Building must override evacuationWarningMessage'
      );
    }
  }
}
