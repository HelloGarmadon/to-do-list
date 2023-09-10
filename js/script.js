const btn = document.querySelector(".btn-add");
const input = document.querySelector(".input-text");
const fullList = document.querySelector(".list-task");

let myList = [];

function addNewTask() {
  myList.push({
    tarefa: input.value,
    concluida: false,
  });
  input.value = "";

  showTask();
}

function showTask() {
  let newLI = "";

  myList.forEach((task, index) => {
    newLI = newLI += `<li class="task ${task.concluida && "done"}">
            <img class="check-trash" src="assets/img/checked.png" alt="check-na-tarefa" onclick="taskComplet(${index})">
            <p>${task.tarefa}</p>
            <img class="check-trash" src="assets/img/trash.png" alt="tarefa-para-o-lixo" onclick="deletItem(${index})">
        </li> `;
  });
  fullList.innerHTML = newLI;

  localStorage.setItem("list", JSON.stringify(myList));
}

function deletItem(index) {
  myList.splice(index, 1);
  showTask();
}

function taskComplet(index) {
  myList[index].concluida = !myList[index].concluida;

  showTask();
}
function reloadTasks() {
  const localStorageTasks = localStorage.getItem("list");
  if (localStorageTasks) {
    myList = JSON.parse(localStorageTasks);
  }
  showTask();
}
reloadTasks();

btn.addEventListener("click", addNewTask);
