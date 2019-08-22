import { compareAsc, format } from 'date-fns'
import flatpickr from "flatpickr";
import { createDom } from './modules/createDom.js'
import { todoFactory } from './modules/todoo.js'
import { projects} from './modules/projects.js'
import { addTodo,showForm} from './modules/handlers.js'
import { renderProjects, renderTodos,renderAddTodo} from './modules/render.js'


showForm();



// format(new Date(2014, 1, 11), 'yyyy-MM-dd')
// //=> '2014-02-11'

// const dateDisplay = document.querySelector('.date-picker')
// const fp = flatpickr('.date-picker', {
//   altInput: true,
//   altFormat: "F j",
//   dateFormat: "Y-m-d",
// });


// const dates = [
//   new Date(1995, 6, 2),
//   new Date(1987, 1, 11),
//   new Date(1989, 6, 10)
// ]
// dates.sort(compareAsc)
// console.log(dates)
//=> [
//   Wed Feb 11 1987 00:00:00,
//   Mon Jul 10 1989 00:00:00,
//   Sun Jul 02 1995 00:00:00
// ]