let kitchenInput = document.getElementById("kitchen-input");
let addBtn = document.getElementById("add-btn");
let kitchenItemsList = document.getElementById("kitchen-items-list");

//add items
function addKitchenItems(){
    let kitchenInputData = kitchenInput.value;
    let li = document.createElement("li");
    
    let spanEl =document.createElement('span');
    li.appendChild(spanEl);
    spanEl.innerHTML = kitchenInputData;

    //li.innerText = kitchenInputData;
    kitchenItemsList.appendChild(li);
    kitchenInput.value = "";
    kitchenInput.focus();

    let trashBtn = document.createElement("i");
    trashBtn.classList.add("fas", "fa-trash");
    li.appendChild(trashBtn);

    //created edit button
    let editBtn = document.createElement("i");
    editBtn.classList.add("fas", "fa-edit");
    li.appendChild(editBtn);
}
//delet items
function deleteKitchenItem(event){
    if(event.target.classList[1] === "fa-trash"){
        let item = event.target.parentElement;
        item.remove();
    }
}

//edit items
function editKitchenItem(event){
    if(event.target.classList[1] === "fa-edit"){
        let editedValue = prompt("Please add new text here");
        let item = event.target.parentElement;
        let spanEl = item.querySelector("span")
        spanEl.innerText = editedValue;
    }
}

addBtn.addEventListener('click', addKitchenItems)
kitchenItemsList.addEventListener('click', deleteKitchenItem);
kitchenItemsList.addEventListener('click', editKitchenItem);


//kitchenInput.addEventListener('keydown', function (addKitchenItems){
//    if (addKitchenItems.key === 'Enter'){
//        addBtn();
//    }
//});