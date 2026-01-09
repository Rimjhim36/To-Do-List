
const task = document.querySelector("#inp");
const items = document.querySelector("#list-items");

function addTask() {
    // alert("cvbnm,");
    if (task.value == "") {
        alert("cannot add empty task");
        return;
    }
    let newitem = document.createElement("li");
    newitem.innerHTML = `${task.value}<button><i class="fa-solid fa-trash"></i></button>`;
    items.appendChild(newitem);
    task.value = "";
    newitem.querySelector('button').addEventListener('click', () => {
        newitem.remove();
        if (items.innerHTML == "")
        {
            document.querySelector(`.button2 button`).style.visibility = "hidden";
        }
    })
    
}
function clear() {
    items.innerHTML="";
    document.querySelector(`button2 button`).style.visibility = "hidden";
}

