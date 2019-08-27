const todoFactory = (todo, dueDate = '') => {
  return {
    todo,
    dueDate,
    priority: 'normal',
    completed: false,
    toggleCompleted() {
      this.completed = this.completed == false ? true : false;
    },
    togglePriority() {
      this.priority = this.priority == 'normal' ? 'high' : 'normal';
    },
  };
};

export { todoFactory };
