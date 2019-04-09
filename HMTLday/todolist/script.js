var todoList = {
      todos: ['item1', 'item2', 'item3'], //todos array

      displayTodos: function() {
        console.log ('My Todos: ', this.todos)
        },

      addTodos: function(add) {
        this.todos.push (add);
        this.displayTodos();
        },
      changeTodos: function(position, newValue) {
        this.todos[position] = newValue;
        this.displayTodos();
        },
      deleteTodos: function (position) {
        this.todos.splice (position, 1);
        this.displayTodos();
      }
    };
