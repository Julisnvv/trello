import * as bootstrap from 'bootstrap'
import { setData, getData } from './localStorage.js'

function $(selector) {
  return document.querySelector(selector);
}

//CLOCK
const clockElement = $("#clock");
window.onload = function () {
  window.setInterval(() => {
    let now = new Date()
    clockElement.innerHTML = now.toLocaleTimeString()
  }, 1000)
}

//МОДАЛЬНОЕ ОКНО
const bttnAddElement = $('#add')
const modalElement = $('#modal')
// Получите ссылку на элемент закрытия модального окна??????????
var close = document.getElementsByClassName("close")[0];
// Добавьте обработчик события на клик по кнопке
bttnAddElement.addEventListener("click", function () {
  modalElement.style.display = "block"
})
// Добавьте обработчик события на клик по элементу закрытия модального окна
close.addEventListener("click", function () {
  modal.style.display = "none"
})

//Add todo in column "To Do"
const todos = []
const bttnAddToDoInColElement = $('#addToDoInColumn')
const inputEnterElement = $('#inputEnter')
const inputDescriptionElement = $('#inputDescription')
function handleClickBttnAddToDoInCol() {
  const currentDate = new Date()
  const todo = {
    id: Date.now(),
    enter: inputEnterElement.value,
    description: inputDescriptionElement.value,
    createdAt: `${currentDate.getDate()}.${currentDate.getMonth() + 1}.${currentDate.getFullYear()} ${currentDate.getHours()}:${currentDate.getMinutes()}`,
  }
  todos.push(todo)
  render()
  inputEnterElement.value = ''
  inputDescriptionElement.value = ''
  setData('todos', todos)
}
bttnAddToDoInColElement.addEventListener('click', handleClickBttnAddToDoInCol)

function buildTemplateTodo({ id, enter, description, createdAt }) {
  return `
      <div class="card" data-id="${id}">
        <label id ="titleOfCard" class="form-check-label">
        ${enter}
        </label>
        <label class="form-check-label">
        ${description}
        </label>
        <button type="button" class="btn-close" aria-label="Close"></button>
        <span>${createdAt}</span>
      </div>
    `
}

//counter of todos and render
const counter = $('#counter')
const listElement = $('#list')
function render() {
  let html = ''
  const cloneTodos = structuredClone(todos)
  cloneTodos.forEach((todo) => {
    const templateTodo = buildTemplateTodo(todo)
    html += templateTodo
  })
  listElement.innerHTML = html
  setData('todos', cloneTodos)
  const counterOfTodos = cloneTodos.length
  counter.innerHTML = counterOfTodos
}
