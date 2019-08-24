import { compareAsc, format } from 'date-fns'
import flatpickr from "flatpickr";
import { createDom } from './modules/createDom.js'
import { initial } from './modules/initial.js'
import { todoFactory } from './modules/todoo.js'
import { projects} from './modules/projects.js'
import { addTodo,todoFormListener, projectFormListener} from './modules/handlers.js'
import { renderProjects,renderTButton, renderTodos,renderAddTodo} from './modules/render.js'

projectFormListener();
initial();




