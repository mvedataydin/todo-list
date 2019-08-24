import {storage} from './storage.js'
import { renderProject, renderTodos, renderTButton} from './render.js';

const initial = () => {
  let storageLocal =  JSON.parse(window.localStorage.getItem('data'));
  if(storageLocal == null){
    storageLocal = [{"name":"Sample Project :)","todos":[{"todo":"Welcome to toDoList! Let’s get you started with a few tips: ","dueDate":"","priority":"normal","completed":false},{"todo":"Here, you can add todos or remove them!","dueDate":"","priority":"normal","completed":false},{"todo":"Add date information for your todos!","dueDate":"August 30","priority":"normal","completed":false},{"todo":"Set your todos high priority!","dueDate":"September 4","priority":"high","completed":false},{"todo":"Toggle your todos completed!","dueDate":"October 6","priority":"high","completed":true}]},{"name":"Project 2","todos":[]},{"name":"Project 3","todos":[]}]

  }
  if(storageLocal != null){
    if(storageLocal != [] && storage.length == 0){
      for(let i = 0; i< storageLocal.length; i++){
        storage.push(storageLocal[i]);
      }
      for(let j = 0; j <storage.length; j++){
        // REVIVE OBJ METHODS SINCE CANT STORE THEM ON LOCAL STORAGE
        let addTodoMethod = 'addTodo';
        let toggleCompMethod = 'toggleCompleted';
        let togglePriMethod = 'togglePriority'
        storage[j][addTodoMethod] = function(todo) { this.todos.push(todo); };
        for( let x = 0; x < storage[j].todos.length; x++){
          storage[j].todos[x][toggleCompMethod] = function() { 
            this.completed = (this.completed == false) ? true : false;
          };
          storage[j].todos[x][togglePriMethod] = function() {
            this.priority = (this.priority == 'normal') ? 'high' : 'normal';
          };
          
        }

      }
      //DISPLAY FIRST PROJECT AND ITS TODOS UPON RELOAD
      renderProject();
      renderTodos(storage[0]);
      renderTButton(storage[0]);
    }

  }
}

export{initial}