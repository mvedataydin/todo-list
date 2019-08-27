const projectFactory = name => {
  return {
    name,
    todos: [],
    addTodo(todo) {
      this.todos.push(todo);
    },
  };
};

export { projectFactory };
