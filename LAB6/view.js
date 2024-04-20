// View
function renderShoppingList() {
    var itemList = document.getElementById('itemList');
    itemList.innerHTML = '';

    var list = getShoppingList();

    list.forEach(function (item) {
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(item));
        itemList.appendChild(li);
    });
}