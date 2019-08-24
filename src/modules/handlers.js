import { todoFactory } from './todoo.js'
import { projectFactory } from './projects.js'
import{ renderProject, renderAddTodo, renderTodos,renderTButton, renderAddProject, render } from './render.js'
import {storage} from './storage.js'

const addTodo = (project) => {
  if(document.querySelector('#todo-input').value == '') {
    let todoInput = document.getElementById('todo-input');
    let sampleTodos = ['e.g. Pay bills ', 'e.g. Schelude appointment with the dentist ',
      'e.g. Attend daily meetings with team ', 'e.g. Submit my expenses ',
      'e.g. Call mom today! ', 'e.g. Solve 10 coding problems', 'e.g. Pay bills ',
      'e.g. Do weekly grocery shopping  ', 'e.g. Go to gym @8pm LegDay ', 'e.g. Reach out to prev. clients',
      'e.g. Make dinner reservation for 12th August', "e.g. Plan David's birthday event",
      'e.g. Wash dishes','e.g. Pick up party supplies', 'e.g. Book tickets to London'
    ];
    let pHolder = sampleTodos[Math.floor(Math.random()*sampleTodos.length)];
    todoInput.placeholder = pHolder;
    return;
  }
  let todoVal = document.querySelector('#todo-input');
  let dateVal = document.querySelector('.date-picker');
  let todo = todoFactory(todoVal.value, dateVal.value);
  project.addTodo(todo);
  renderTodos(project);
}


const addProject = () => {
  let projectVal = document.querySelector('#project-input');
  let project = projectFactory(projectVal.value);
  storage.push(project);
  renderProject();
  let formProject = document.querySelector('.project-form');
  let fullScreenDiv = document.querySelector('.fullscreen-container');
  formProject.parentNode.removeChild(formProject);
  fullScreenDiv.parentNode.removeChild(fullScreenDiv);

}

const projectFormListener = () => {
  let addProjectButton = document.querySelectorAll('.project-add');
  addProjectButton.forEach(function(button){
    button.addEventListener('click', function(){
      renderAddProject();
    })
  })
}


export {addTodo,addProject, projectFormListener}




