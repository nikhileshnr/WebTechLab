// Controller
function addItem() {
    var itemInput = document.getElementById('itemInput');
    var newItem = itemInput.value.trim();

    if (newItem !== '') {
        addItemToShoppingList(newItem);
        renderShoppingList();
        itemInput.value = '';
    }
}