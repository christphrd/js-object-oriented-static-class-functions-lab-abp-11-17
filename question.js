'use strict';

class Question {
  constructor() {
    this.constructor._All = [];
  }
  
  save() {
    this.constructor._All.push(this)
  }
  
  static All() {
    return this._All
  }
}