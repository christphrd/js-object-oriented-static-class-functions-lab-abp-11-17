'use strict';

let questionId = 0;

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
    return this._All.find(questionObj => questionObj.id === id)
  }
}

Question._All = [];