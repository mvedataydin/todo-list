'use strict'

import { todoFactory } from './todoo.js'
import { projects} from './projects.js'
import { createDom } from './createDom.js'
import { addTodo } from './handlers.js'
import flatpickr from "flatpickr";

createDom();
const renderProjects = (project) => {
  let projectUl = document.querySelector('.projects');
  let li = document.createElement('li');
  li.textContent = project.name
  projectUl.appendChild(li)
  li.addEventListener('click', function(){
    renderTodos(project.name,project.todos)
  });

} 


let todo1 = todoFactory('Go to gym @2pm', '12 August');
let todo2 = todoFactory('Go to gym @2pm', '12 August');
let project1 = projects('Sample Project');
project1.addTodo(todo1);
project1.addTodo(todo2);
let project2 = projects('Project 2 ');
project2.addTodo(todo1)
project2.addTodo(todo1)
project2.addTodo(todo1)



let projectTodos = JSON.stringify(project1.todos);
console.log('Todos object is ' + projectTodos)
renderProjects(project1);
renderProjects(project2)


const renderTodos = (projectName, todos) => {
  let projectTitle = document.querySelector('.project-h1');
  let table = document.querySelector('table');

  table.textContent = '';
  projectTitle.textContent = projectName;

  for(let obj of todos){
    let tr = document.createElement('tr');
    tr.classList.add('todo');

    let tdDelete = document.createElement('td');
    let iDelete = document.createElement('i');
    iDelete.classList.add('fas', 'fa-trash-alt', 'right')
    tdDelete.appendChild(iDelete);

    let tdCircle = document.createElement('td');
    let iCircle = document.createElement('i');
    iCircle.classList.add('far', 'fa-circle');
    tdCircle.appendChild(iCircle);

    let tdTodo = document.createElement('td');
    tdTodo.textContent = obj.todo;

    tr.appendChild(tdDelete);
    tr.appendChild(tdTodo);
    tr.appendChild(tdCircle);
    
    let info = document.createElement('tr');
    info.classList.add('info');
    let tdFlag = document.createElement('td');
    let tdDate = document.createElement('td');
    tdFlag.classList.add('flag');
    tdDate.classList.add('date');
    tdDate.textContent = obj.dueDate;
    let iFlag = document.createElement('i');
    iFlag.classList.add('fas', 'fa-flag');

    tdFlag.appendChild(iFlag);
    info.appendChild(tdFlag);
    info.appendChild(tdDate);
   
    let trSeperator = document.createElement('tr');
    let tdSeperator = document.createElement('td');
    let hr = document.createElement('hr');
    hr.classList.add('thin-task');
    tdSeperator.appendChild(hr);
    trSeperator.appendChild(tdSeperator);

    table.appendChild(tr);
    table.appendChild(info);
    table.appendChild(trSeperator);
  }
}

const renderAddTodo = () => {
  let todosDiv = document.querySelector('.todos');
  let addTaskButton = document.querySelector('.add-task')
  let formContainer = document.createElement('div');
  formContainer.classList.add('form-container');

  let form = document.createElement('form');
  form.classList.add('todo-form')
  form.action = 'javascript:;'
  form.addEventListener('submit', function(){
    addTodo(project);
  })

  let todoInput = document.createElement('input');
  todoInput.type ='text';
  todoInput.id = 'todo-input';
  todoInput.name = 'YourTodo';
  todoInput.autocomplete = 'off';
  todoInput.placeholder = 'e.g. Business Meeting Today @15'
  let datePicker = document.createElement('input');
  datePicker.type ='text';
  datePicker.classList.add('date-picker');
  datePicker.placeholder = 'Schedule'
  let submitButton = document.createElement('input');
  submitButton.type ='submit';
  submitButton.value ='Add Todo!';
  let cancelButton = document.createElement('input');
  cancelButton.type ='button';
  cancelButton.value ='Cancel';
  cancelButton.name ='cancel';
  cancelButton.addEventListener('click', function(){
    form.style.display = 'none';
  })

  form.appendChild(todoInput);
  form.appendChild(datePicker);
  form.appendChild(submitButton);
  form.appendChild(cancelButton);

  const fp = flatpickr(datePicker, {
    altInput: true,
    altFormat: "F j",
    dateFormat: "F j",
 }); 
  
  todosDiv.insertBefore(form, addTaskButton);

  
}




export {renderProjects, renderTodos, renderAddTodo};
