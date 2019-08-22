'use strict'

import { todoFactory } from './todoo.js'
import { projects} from './projects.js'
import { createDom } from './createDom.js'

createDom();
const renderProjects = (project) => {
  let projectUl = document.querySelector('.projects');
  let li = document.createElement('li');
  li.textContent = project.name
  projectUl.appendChild(li)
  //li.addEventListener('click', renderTodos(project.todo) )

} 


let todo1 = todoFactory('Go to gym @2pm', '12 August');
let todo2 = todoFactory('Go to gym @2pm', '12 August');
let project1 = projects('Sample Project');
project1.addTodo(todo1);
project1.addTodo(todo2);

var projectTodos = JSON.stringify(project1.todos);
console.log('Todos object is ' + projectTodos)
renderProjects(project1);

const renderTodos = (todos) => {
  
}

export {renderProjects, renderTodos};
