const addButton = document.getElementById('add');
const itemField = document.querySelector('#item-name');
const itemPriceField = document.querySelector('#item-price');
const totalSpan = document.querySelector('.total-price');
const list = document.querySelector('#item-list');
let total = 0;





addButton.addEventListener('click', (event)=> {
    let itemName = itemField.value; //get the item name from the input file
    let itemPrice = parseInt(itemPriceField.value); //get the price from the field
    total = total + itemPrice; //calculates the total price intake
    totalSpan.innerHTML = total;

    let listItem = document.createElement('li');
    listItem.classList.add('collection-item');
    let text = `item: ${itemName}. Price: ${itemPrice}` ;
    listItem.appendChild(document.createTextNode(text));
    console.log(listItem);
    list.appendChild(listItem);

    //clear the input fields
    itemField.value = '';
    itemPriceField.value = '';
    
    
    console.log('Item:', typeof(itemName)); 
    console.log('Price:', typeof(itemPrice));
    console.log('Total:', total);


    event.preventDefault();
});