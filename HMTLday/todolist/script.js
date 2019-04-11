var todoList = {
      todos: [], //todos array

      displayTodos: function() {
        if (this.todos.length === 0) {
          console.log ('Todo List is empty');
        }

        else {
          console.log ('My Todos (' + this.todos.length + '): ');
          for (var i = 0; i < this.todos.length; i++) {
                if (this.todos[i].completed === true) {
                  console.log ('[X]', this.todos[i].todoText);
                }
                else {
                  console.log ('[ ]', this.todos[i].todoText);
                  }
            }
          }
        },

      addTodo: function(todoText) {
        this.todos.push({
          todoText: todoText,
          completed: false
        });
        this.displayTodos();
        },
      changeTodo: function(position, todoText) {
        this.todos[position].todoText = todoText;
        this.displayTodos();
        },
      deleteTodo: function (position) {
        this.todos.splice (position, 1);
        this.displayTodos();
      },
      toggleCompleted: function (position) {
        var todo = this.todos[position];
        todo.completed = !todo.completed;
        this.displayTodos();
      },
      toggleAll: function() {
        var totalTodos = this.todos.length;
        var completedTodos = 0;

        // Get list of completed Todos
        for (var i = 0 ; i < totalTodos ; i++) {
        if (this.todos[i].completed === true) {
          completedTodos ++;
        }
      }
      console.log('Completed Todos are: ', completedTodos);
      console.log('Total Todos are: ', totalTodos);
        // if all Todos are true, make them all false
        if (completedTodos === totalTodos) {
          for (var i = 0 ; i < totalTodos ; i++) {
          this.todos[i].completed = false;
        }
      }
        else {
          // if all or at least one Todo is false , make them all true
          for (var i = 0; i < totalTodos; i++) {
            this.todos[i].completed = true;

          }
        }


        this.displayTodos();
        }
      };

// //Grabbing ID and adding Event Listener to DisplayTodos
//       var displayTodosButton = document.getElementById('displayTodosButton');
//       displayTodosButton.addEventListener('click',function(){
//         todoList.displayTodos();
//       });
//
//       var toggleAllButton = document.getElementById('toggleAllButton');
//       toggleAllButton.addEventListener('click', function(){
//         todoList.toggleAll();
//       });

// var a = "1"
// var b = Number(a)
// var c = b.toString()


var handlers = {
  displayTodos: function() {
    todoList.displayTodos();
  },
  toggleAll: function() {
    todoList.toggleAll();
  },
  addTodo: function() {
    var addTodoTextInput = document.getElementById('addTodoTextInput');
    todoList.addTodo (addTodoTextInput.value);
    addTodoTextInput.value = '';
  },
  changeTodo: function() {
    var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
    var changeTodoTextInput = document.getElementById('changeTodoTextInput');
    var changeTodoPositionNumberInput = Number(changeTodoPositionInput.value)
    console.log (changeTodoPositionNumberInput)
    todoList.changeTodo (changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
    changeTodoTextInput.value = '';
    changeTodoPositionInput.value = '';
  },
  deleteTodo: function() {
  var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
  todoList.deleteTodo (deleteTodoPositionInput.value);
  }
};


// Testing CODE for experimenting! (Tony)
// var a = "0"
// console.log('a', a);
// var b = a.valueAsNumber
// console.log('b', b);
// console.log(typeof b);
// var c = b.valueAsString
// console.log('c', c);
// console.log(typeof c);
