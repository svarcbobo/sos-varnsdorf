const tasks = [
"Dokončit domácí úkol z matematiky",
"Připravit prezentaci z IT",
"Napsat referát z češtiny",
"Procvičit programování",
"Přečíst kapitolu z učebnice"
];

const list = document.getElementById("taskList");

tasks.forEach(task => {

let li = document.createElement("li");
li.textContent = task;

let btn = document.createElement("button");
btn.textContent = "Hotovo";

btn.onclick = function(){
li.classList.toggle("done");
}

li.appendChild(btn);

list.appendChild(li);

});
