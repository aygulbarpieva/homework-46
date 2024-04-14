function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskText = taskInput.value.trim();

    if (taskText !== '') {
        var taskList = document.getElementById('taskList');

        var li = document.createElement('li');
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        var editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.style.color = 'red';
        editButton.style.backgroundColor = 'rgb(55, 20, 20)';
        editButton.style.fontSize = '20px';
        editButton.style.marginRight = '50px';
      
        editButton.onclick = function () {
            var newText = prompt('Измените!', li.querySelector('span').textContent);
            if (newText !== null) {
                li.querySelector('span').textContent = newText;
            }
        };

        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.style.color = 'red';
        deleteButton.style.backgroundColor = 'rgb(55, 20, 20)';
        deleteButton.style.fontSize = '20px';
        deleteButton.style.marginRight = '30px';

        deleteButton.onclick = function () {
            li.remove();
        };

        checkbox.addEventListener('change', function () {
            if (checkbox.checked) {
                li.classList.add('allList');
            } else {
                li.classList.remove('allList');
            }
        });

        var taskLabel = document.createElement('span');
        taskLabel.style.color = 'white';
        taskLabel.style.fontSize = '20px';
        taskLabel.style.marginRight = '150px';
        taskLabel.textContent = taskText;

        li.appendChild(checkbox);
        li.appendChild(taskLabel);
        li.appendChild(editButton);
        li.appendChild(deleteButton);
        taskList.appendChild(li);

        taskInput.value = '';
    }
}