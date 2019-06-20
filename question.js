'use strict';

let questionId = 1;

class Question {
  constructor(content) {
    this.id = ++questionId;
    this.content = content;
    this.save();
  }
  
  save() {
    this.constructor._All.push(this)
  }
  
  static All() {
    return this._All
  }
  
  static Find(id) {
    return this.All()
  }
}

Question._All = [];