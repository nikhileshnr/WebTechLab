// Simple prototype logic
function addItem() {
    var itemInput = document.getElementById('itemInput');
    var itemList = document.getElementById('itemList');

    if (itemInput.value.trim() !== '') {
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(itemInput.value));
        itemList.appendChild(li);
        itemInput.value = '';
    }
}
