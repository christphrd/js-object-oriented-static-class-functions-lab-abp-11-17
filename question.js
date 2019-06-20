'use strict';

class Question {
  constructor() {
    this.constructor._All = [];
  }
  
  static All() {
    return this._All
  }
}