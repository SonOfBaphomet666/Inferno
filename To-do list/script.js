const inputField = document.querySelector(".input-field textarea"),
todoLists = document.querySelector(".todoLists"),
pendingNum = document.querySelector(".pending-num"),
clearButton = document.querySelector(".clear-button");

inputField.addEventListener("keyup", (e) => {
    let inputVal = inputField.value.trim();
    
    if (e.key === "Enter" && inputVal.length > 0) {
        let liTag = `<li class="todoLists__list" onclick="handleStatus(this)">
        <input type="checkbox">
        <span class="todoLists__task">${inputVal}</span>
        <i class="gg-trash"></i>
    </li>`;

    todoLists.insertAdjacentHTML("beforeend", liTag);
    inputField.value = "";
    }
});

function handleStatus(e) {
    const checkbox = e.querySelector("input");
    console.log(checkbox);
    checkbox.checked = checkbox.checked ? false : true
}