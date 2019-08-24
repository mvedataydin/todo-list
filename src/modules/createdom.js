"use strict";

let createDom = () => {
  //get main div
  const container = document.getElementById('content');
  const docFrag = document.createDocumentFragment();
  
  // HEADER
  // create header
  let headerDiv = document.createElement('div');
  headerDiv.classList.add('header');
  
  let headerLeftDiv = document.createElement('div');
  headerLeftDiv.classList.add('header-left');
  //left header
  let headerLeft = document.createElement('h1');
  let headerLogo = document.createElement('i');
  headerLogo.classList.add('fas', 'fa-calendar-check');
  headerLeft.appendChild(headerLogo);
  headerLeft.insertAdjacentHTML( 'beforeend', '  toDoList' )


  //right header

  //append header
  headerLeftDiv.appendChild(headerLeft);
  headerDiv.appendChild(headerLeftDiv);

  docFrag.appendChild(headerDiv);
  container.appendChild(docFrag);

  // BODY
  let mainBody = document.createElement('div');
  mainBody.classList.add('mainbody');

  // left body
  let leftBody = document.createElement('div');
  leftBody.classList.add('body-left');
  let leftContainer = document.createElement('div')
  leftContainer.classList.add('left-container');

  let projectHeaderDiv = document.createElement('div');
  projectHeaderDiv.classList.add('project-header');

  let projectHeader = document.createElement('a');
  projectHeader.textContent = 'Projects '

  let plusIcon = document.createElement('i');
  plusIcon.classList.add('fas', 'fa-plus', 'right', 'project-add');

  projectHeaderDiv.appendChild(projectHeader);
  projectHeaderDiv.appendChild(plusIcon);

  leftContainer.appendChild(projectHeaderDiv);

  let hr = document.createElement('hr');
  hr.classList.add('thin-project');
  leftContainer.appendChild(hr);


  //PROJECTS LIST
  let projectList = document.createElement('div');
  projectList.classList.add('project-list');
  let ul = document.createElement('ul');
  ul.classList.add('projects')
  projectList.appendChild(ul);

  leftContainer.appendChild(projectList);

  let addProject = document.createElement('div');
  addProject.classList.add('add-project', 'project-add');
  let plusIcon2 = document.createElement('i');
  plusIcon2.classList.add('fas', 'fa-plus','project-add');
  addProject.appendChild(plusIcon2);
  addProject.insertAdjacentHTML( 'beforeend', '  Add Project!' );

  leftContainer.appendChild(addProject);
  leftBody.appendChild(leftContainer);
  mainBody.appendChild(leftBody);

  docFrag.appendChild(mainBody);
  container.appendChild(docFrag);

  // right body
  let rightBody = document.createElement('div');
  rightBody.classList.add('body-right');
  let rightContainer = document.createElement('div');
  rightContainer.classList.add('right-container');

  let projectHeaderRightDiv = document.createElement('div');
  projectHeaderRightDiv.classList.add('project-title');
  let projectHeaderRight = document.createElement('a');
  projectHeaderRight.classList.add('project-a')

  projectHeaderRightDiv.appendChild(projectHeaderRight);
  rightContainer.appendChild(projectHeaderRightDiv);
  let hrTask = document.createElement('hr');
  hrTask.classList.add('thin-task');
  rightContainer.appendChild(hrTask);

  // TODO LIST
  let todosDiv = document.createElement('div');
  todosDiv.classList.add('todos');

  let table = document.createElement('table');
  todosDiv.appendChild(table);

  // let addTask = document.createElement('div');
  // addTask.classList.add('add-task');

  // let plusIcon3 = document.createElement('i');
  // plusIcon3.classList.add('fas', 'fa-plus');
  // addTask.appendChild(plusIcon3);
  // addTask.insertAdjacentHTML( 'beforeend', '  Add Task!' );

  //todosDiv.appendChild(addTask);
  rightContainer.appendChild(todosDiv);
  rightBody.appendChild(rightContainer);
  mainBody.appendChild(rightBody);

  docFrag.appendChild(mainBody);
  container.appendChild(docFrag);

  let logoContainer = document.createElement('div');
  logoContainer.classList.add('logo');
  let logo = document.createElement('i');
  logo.classList.add('fas', 'fa-check-double');
  logoContainer.appendChild(logo);

  docFrag.appendChild(logoContainer);
  container.appendChild(docFrag);




}


export {createDom}