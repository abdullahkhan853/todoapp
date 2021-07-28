var main = document.getElementById('main')
var inputText = document.getElementById('inputText')
function todo(){
    var newElement = document.createElement('P')
    var newElementText = document.createTextNode(inputText.value)
    newElement.appendChild(newElementText)
    main.appendChild(newElement)
    clear()
    var editBtn = document.createElement('BUTTON')
    var editBtnText = document.createTextNode('Edit')
    editBtn.appendChild(editBtnText)
    editBtn.setAttribute('onclick','editTodo(this)')
    newElement.appendChild(editBtn)

    var deleteBtn = document.createElement('BUTTON')
    var deleteBtnText = document.createTextNode('Delete')
    deleteBtn.appendChild(deleteBtnText)
    deleteBtn.setAttribute('onclick','deleteTodo(this)')
    newElement.appendChild(deleteBtn)
}
function deleteTodo(x){
    x.parentNode.remove()
    clear()
}
  function deleteAll() {
    main.innerHTML = "";
    clear()
}

function editTodo(x) {  
    x.parentNode.firstChild.nodeValue = prompt()
}
  function clear() {
    inputText.value = '';
  }