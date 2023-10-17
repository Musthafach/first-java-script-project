let kitchenInput = document.getElementById("kitchen-input");
let addBtn = document.getElementById("add-btn");
let kitchenItemsList = document.getElementById("kitchen-items-list");

function addKitchenItems(){
    let kitchenInputData = kitchenInput.value;
    let li = document.createElement("li");
    li.innerText = kitchenInputData;
    kitchenItemsList.appendChild(li);
    kitchenInput.value = "";
    kitchenInput.focus();
    console.log(kitchenInputData);
}

addBtn.addEventListener('click', addKitchenItems)


//kitchenInput.addEventListener('keydown', function (addKitchenItems){
//    if (addKitchenItems.key === 'Enter'){
//        addBtn();
//    }
//});