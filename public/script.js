
document.getElementById('to-do').addEventListener('submit', function(event) {
  event.preventDefault();
 const todoInput = document.getElementById('lists')
  const todoText =todoInput.value.trim();
  if (todoText !==''){
    addItemToList(todoText);
    todoInput.value = '';
  }
});

function addItemToList(text) {
  const li = document.createElement('li');
  li.innerText = text;
  const removeButton = document.createElement('button');
  removeButton.className = "removeButton";
  removeButton.textContent='Remove';
  removeButton.style.width = "fit-content";
  removeButton.style.marginLeft = "80px";
  removeButton.addEventListener('click', function(){
      li.remove();
    });
  li.appendChild(removeButton);
  document.getElementById("things").appendChild(li);
}
