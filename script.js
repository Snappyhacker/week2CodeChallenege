
const shoppingForm = document.getElementById('shopping-form');
const itemList = document.getElementById('item-list');
const itemInput = document.getElementById('item-input');
const clearListBtn = document.getElementById('clear-list');


let shoppingList = [];


function addItem(event) {
  event.preventDefault(); 
  const newItem = itemInput.value.trim();

  if (newItem !== '') {
    
    shoppingList.push({
      name: newItem,
      purchased: false
    });

  
    displayItems();
    itemInput.value = ''; 
  }
}


function displayItems() {
  itemList.innerHTML = ''; 

  shoppingList.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = item.name;

    
    if (item.purchased) {
      li.classList.add('completed');
    }

    
    li.addEventListener('click', () => {
      item.purchased = !item.purchased;
      displayItems();
    });

    itemList.appendChild(li);
  });
}


function clearList() {
  shoppingList = [];
  displayItems();
}


shoppingForm.addEventListener('submit', addItem);
clearListBtn.addEventListener('click', clearList);


displayItems();
