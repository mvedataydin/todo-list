import { todoFactory } from './todoo.js'
import { projects } from './projects.js'
import{ renderProjects, renderAddTodo } from './render.js'

const addTodo = (project) => {
  var x = document.getElementById("myLI").parentNode.nodeName;
  let todoVal = document.querySelector('#todo-input');
  let dateVal = document.querySelector('.date-picker');
  console.log(todoVal.value);
  console.log(dateVal.value);
  let todo = todoFactory(todoVal.value, dateVal.value);
  project.addTodo(todo)
  renderProjects(project)
  
}

const showForm = () => {
  let addButton = document.querySelector('.add-task');
  addButton.addEventListener('click', function(){
    if(!document.querySelector('.todo-form')){
      renderAddTodo()
  }
  else if(!document.querySelector('.todo-form').value){
    let todoInput = document.getElementById('todo-input');
    let sampleTodos = ['e.g. Pay bills ', 'e.g. Schelude appointment with the dentist ',
     'e.g. Attend daily meetings with team ', 'e.g. Submit my expenses ',
    'e.g. Call mom today! ', 'e.g. Solve 10 coding problems', 'e.g. Pay bills ',
     'e.g. Do weekly grocery shopping  ', 'e.g. Go to gym @8pm LegDay ', 'e.g. Reach out to prev. clients',
     'e.g. Make dinner reservation for 12th August', "e.g. Plan David's birthday event",
     'e.g. Wash dishes','e.g. Pick up party supplies', 'e.g. Book tickets to London'
    ];
    var pHolder = sampleTodos[Math.floor(Math.random()*sampleTodos.length)];
    todoInput.placeholder = pHolder;
  }
  else{
    addTodo(project);
  }
  });

}

// var obj = {todo :{}, todo:{todos2 :'asd'}}
// const size = item => (item.constructor === Object ? Object.keys(item).length : item.length)
// console.log(size(obj))

export {addTodo, showForm}




