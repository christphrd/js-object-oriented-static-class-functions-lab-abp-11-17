'use strict';

class Question {
  constructor() {
    Question._All = [];
  }
  
  static All() {
    return this._All
  }
}