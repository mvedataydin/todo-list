import { createDom } from './createDom.js';
import { addTodo, addProject } from './handlers.js';
import flatpickr from 'flatpickr';
import { storage } from './storage.js';

createDom();

const renderProject = () => {
  let list = document.querySelectorAll('li');
  list.forEach(function(el) {
    el.parentNode.removeChild(el);
  });
  for (let obj of storage) {
    let projectUl = document.querySelector('.projects');
    let li = document.createElement('li');
    li.textContent = obj.name;
    projectUl.appendChild(li);
    li.addEventListener('click', function() {
      renderTodos(obj);
      if (!document.querySelector('.fa-minus-circle')) {
        renderRemoveProject(obj, storage);
      }
      window.localStorage.setItem('data', JSON.stringify(storage));
      if (document.querySelector('.add-task')) {
        let addTodoButton = document.querySelector('.add-task');
        addTodoButton.parentNode.removeChild(addTodoButton);
      }
      if (document.querySelector('.todo-form')) {
        let addTodoForm = document.querySelector('.todo-form');
        addTodoForm.parentNode.removeChild(addTodoForm);
      }
      renderTButton(obj);
    });
  }
};

const renderRemoveProject = (obj, storage) => {
  let projectTitleRightDiv = document.querySelector('.project-title');
  let deletePrjButton = document.createElement('i');
  deletePrjButton.classList.add(
    'fas',
    'fa-minus-circle',
    'red',
    'left',
  );
  projectTitleRightDiv.appendChild(deletePrjButton);
  let index = storage.indexOf(obj);
  deletePrjButton.addEventListener('click', function() {
    let tr = document.querySelectorAll('tr');
    let td = document.querySelectorAll('td');
    if (document.querySelector('.todo-form')) {
      let formContainer = document.querySelector('.todo-form');
      formContainer.parentNode.removeChild(formContainer);
    }
    let addTask = document.querySelector('.add-task');
    let projectTitle = document.querySelector('.project-a');

    storage.splice(index, 1);

    addTask.parentNode.removeChild(addTask);
    deletePrjButton.parentNode.removeChild(deletePrjButton);
    projectTitle.textContent = '';
    td.forEach(function(elm) {
      elm.parentNode.removeChild(elm);
    });
    tr.forEach(function(elm) {
      elm.parentNode.removeChild(elm);
    });
    window.localStorage.setItem('data', JSON.stringify(storage));
    renderProject();
    if (document.querySelector('li')) {
      renderTodos(storage[0]);
      renderTButton(storage[0]);
    }
  });
};

const renderTodos = project => {
  let projectTitle = document.querySelector('.project-a');
  let table = document.querySelector('table');

  table.textContent = '';
  projectTitle.textContent = '— ' + project.name + '—';

  for (let obj of project.todos) {
    let tr = document.createElement('tr');
    tr.classList.add('todo');

    let index = project.todos.indexOf(obj);

    let tdDelete = document.createElement('td');
    let iDelete = document.createElement('i');
    iDelete.classList.add('fas', 'fa-trash-alt', 'right');
    iDelete.addEventListener('click', function() {
      tr.parentNode.removeChild(tr);
      info.parentNode.removeChild(info);
      trSeperator.parentNode.removeChild(trSeperator);
      project.todos.splice(index, 1);
      window.localStorage.setItem('data', JSON.stringify(storage));
    });
    tdDelete.appendChild(iDelete);

    let tdCircle = document.createElement('td');
    let iCircle = document.createElement('i');
    iCircle.classList.add('far', 'fa-circle');
    tdCircle.appendChild(iCircle);

    let tdTodo = document.createElement('td');
    tdTodo.textContent = obj.todo;

    if (obj.completed == true) {
      iCircle.classList.remove('fa-circle', 'far');
      iCircle.classList.add('fa-check-circle', 'fas');
      tdTodo.classList.add('toggle');
    }
    if (obj.completed == false) {
      iCircle.classList.remove('fa-check-circle', 'fas');
      iCircle.classList.add('fa-circle', 'far');
      tdTodo.classList.remove('toggle');
    }
    iCircle.addEventListener('click', function() {
      obj.toggleCompleted();
      if (obj.completed == true) {
        iCircle.classList.remove('fa-circle', 'far');
        iCircle.classList.add('fa-check-circle', 'fas');
        tdTodo.classList.add('toggle');
      }
      if (obj.completed == false) {
        iCircle.classList.remove('fa-check-circle', 'fas');
        iCircle.classList.add('fa-circle', 'far');
        tdTodo.classList.remove('toggle');
      }
      window.localStorage.setItem('data', JSON.stringify(storage));
    });

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
    if (obj.priority == 'high') {
      iFlag.classList.add('flag-toggle');
      iCircle.classList.add('red');
    }
    iFlag.addEventListener('click', function() {
      obj.togglePriority();
      window.localStorage.setItem('data', JSON.stringify(storage));
      if (obj.priority == 'high') {
        iFlag.classList.add('flag-toggle');
        iCircle.classList.add('red');
        return;
      }
      if (obj.priority == 'normal') {
        iFlag.classList.remove('flag-toggle');
        iCircle.classList.remove('red');
        return;
      }
    });

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
};

const renderAddTodo = project => {
  let todosDiv = document.querySelector('.todos');
  let addTaskButton = document.querySelector('.add-task');
  let formContainer = document.createElement('div');
  formContainer.classList.add('form-container');

  let form = document.createElement('form');
  form.classList.add('todo-form');
  form.action = 'javascript:;';
  form.addEventListener('submit', function() {
    addTodo(project);
    todoInput.value = '';
    fp.clear();
    window.localStorage.setItem('data', JSON.stringify(storage));
  });

  let todoInput = document.createElement('input');
  todoInput.type = 'text';
  todoInput.id = 'todo-input';
  todoInput.name = 'YourTodo';
  todoInput.autocomplete = 'off';
  todoInput.placeholder = 'e.g. Business Meeting Today @15';
  let datePicker = document.createElement('input');
  datePicker.type = 'text';
  datePicker.classList.add('date-picker');
  datePicker.placeholder = 'Schedule';
  let submitButton = document.createElement('input');
  submitButton.type = 'submit';
  submitButton.value = 'Add Todo';
  let cancelButton = document.createElement('input');
  cancelButton.type = 'button';
  cancelButton.value = 'Cancel';
  cancelButton.name = 'cancel';
  cancelButton.addEventListener('click', function() {
    form.parentNode.removeChild(form);
  });

  form.appendChild(todoInput);
  form.appendChild(datePicker);
  form.appendChild(submitButton);
  form.appendChild(cancelButton);

  const fp = flatpickr(datePicker, {
    altInput: true,
    altFormat: 'F j',
    dateFormat: 'F j',
  });
  todosDiv.insertBefore(form, addTaskButton);
};

const renderTButton = project => {
  let todosDiv = document.querySelector('.todos');
  let addTask = document.createElement('div');
  addTask.classList.add('add-task');
  let plusIcon = document.createElement('i');
  plusIcon.classList.add('fas', 'fa-plus');
  addTask.appendChild(plusIcon);
  addTask.insertAdjacentHTML('beforeend', '  Add Task');
  addTask.addEventListener('click', function() {
    if (document.querySelector('.todo-form')) {
      let todoInput = document.getElementById('todo-input');
      let sampleTodos = [
        'e.g. Pay bills ',
        'e.g. Schelude appointment with the dentist ',
        'e.g. Attend daily meetings with team ',
        'e.g. Submit my expenses ',
        'e.g. Call mom today! ',
        'e.g. Solve 10 coding problems',
        'e.g. Pay bills ',
        'e.g. Do weekly grocery shopping  ',
        'e.g. Go to gym @8pm LegDay ',
        'e.g. Reach out to prev. clients',
        'e.g. Make dinner reservation for 12th August',
        "e.g. Plan David's birthday event",
        'e.g. Wash dishes',
        'e.g. Pick up party supplies',
        'e.g. Book tickets to London',
      ];
      let pHolder =
        sampleTodos[Math.floor(Math.random() * sampleTodos.length)];
      todoInput.placeholder = pHolder;
      return;
    }
    renderAddTodo(project);
    window.localStorage.setItem('data', JSON.stringify(storage));
  });
  todosDiv.appendChild(addTask);
};

const renderAddProject = () => {
  let mainContainer = document.getElementById('content');
  let fullScreenDiv = document.createElement('div');
  fullScreenDiv.classList.add('fullscreen-container');
  let formProjectDiv = document.createElement('div');
  let formProject = document.createElement('form');
  formProject.classList.add('project-form');
  formProject.action = 'javascript:;';

  formProject.addEventListener('submit', function() {
    if (document.getElementById('project-input').value != '') {
      addProject();
      window.localStorage.setItem('data', JSON.stringify(storage));
    }
  });
  let submitButton = document.createElement('input');
  submitButton.id = 'project-submit';
  submitButton.type = 'submit';
  submitButton.value = 'Add';
  let br = document.createElement('br');
  let projectInput = document.createElement('input');
  projectInput.type = 'text';
  projectInput.id = 'project-input';
  projectInput.name = 'YourProject';
  projectInput.autocomplete = 'off';
  projectInput.placeholder = 'Add new project';
  let cancelButton = document.createElement('input');
  cancelButton.id = 'cancel-button';
  cancelButton.type = 'button';
  cancelButton.value = 'Cancel';
  cancelButton.name = 'cancel';
  cancelButton.addEventListener('click', function() {
    fullScreenDiv.parentNode.removeChild(fullScreenDiv);
  });

  formProject.appendChild(projectInput);
  formProject.appendChild(br);
  formProject.appendChild(submitButton);
  formProject.appendChild(cancelButton);
  formProjectDiv.appendChild(formProject);
  fullScreenDiv.appendChild(formProjectDiv);
  mainContainer.appendChild(fullScreenDiv);
};

export {
  renderProject,
  renderTButton,
  renderTodos,
  renderAddTodo,
  renderAddProject,
};
