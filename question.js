'use strict';

let questionId = 0
let Question._All = [];

class Question {
  constructor(content) {
    this.id = ++questionId
    this.content = content;
  }
  
  save() {
    this.constructor._All.push(this)
  }
  
  static All() {
    return this._All
  }
  
  static Find(id) {
    return this.All().find(questionObj => questionObj.id === id)
  }
}