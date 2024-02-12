import List from "../model/list";
import Todo from "../model/todo";

export const LISTS = [
  new List(0, "Default List", [
    new Todo(0, "do the first thing"),
    new Todo(1, "make dinner"),
    new Todo(2, "create an application"),
  ]),
  new List(1, "Groceries", [
    new Todo(3, "bananas"),
    new Todo(4, "bread"),
    new Todo(5, "pizza"),
  ]),
  new List(2, "Test List XX", [new Todo(6, "test todo")]),
  new List(3, "Test List XX", []),
  new List(4, "Test List XX", []),
  new List(5, "Test List XX", []),
  new List(6, "Test List XX", []),
  new List(7, "Test List XX", []),
  new List(8, "Test List XX", []),
  new List(9, "Test List XX", []),
  new List(10, "Test List XX", []),
  new List(11, "Test List XX", []),
  new List(12, "Test List XX", []),
  new List(13, "Test List XX", []),
];
