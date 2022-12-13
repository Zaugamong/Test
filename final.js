const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tasksEl = $("#tasks");
const addBtn = $('#new-task-submit')
const valueTodo = $('#new-task-input')

let tasksData = ["Do homework BITC", "Do ASM BTEC", "Participlat in IT TOUR"];

function renderTodos() {
  const taskHtml = tasksData.map((task) => {
    return `
        <div class="task">
        <div class="before">.</div>

            <div class="content">
            <input type="text"
                    class="text"
                    value="${task}"
                    readonly />
            </div>
            <div class="actions">
            <button class="delete"><i class="fa-solid fa-trash-can"></i></button>
            <button class="edit"><i class="fa-solid fa-pen-to-square"></i></button>
            </div>
        </div>
        `;
  });
//   console.log(taskHtml);
  tasksEl.innerHTML = taskHtml.join("");
}
renderTodos();

addBtn.onclick = function addTodo(e) {
    e.preventDefault();
    const value = valueTodo.value
    console.log(value);
    tasksData.unshift(value)
    console.log(tasksData);
    renderTodos()
}
