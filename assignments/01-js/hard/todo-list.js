/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.list = [];
  }

  add(todo) {
    // this.list.push(todo);
    this.list.push(todo);
  }

  remove(index) {
    if (this.list.length < index) {
      return null;
    }

    this.list = [...this.list.slice(0, index), ...this.list.slice(index + 1)];
  }

  update(index, updatedTodo) {
    if (index >= this.list.length) {
      return "Invalid Task";
    }
    this.list[index] = updatedTodo;
    return this.list[index];
  }

  getAll() {
    return this.list;
  }

  get(index) {
    if (this.list.length <= index) {
      return null;
    }

    return this.list[index];
  }

  clear() {
    this.list = [];
  }
}

module.exports = Todo;
