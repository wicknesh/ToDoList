let logoutBtn = document.querySelector('.logout-btn');
let spinnerStyle = document.querySelector('.spinner-style');
let listContainer = document.querySelector('.list-container');

logoutBtn.addEventListener('click', () => {
    window.location.href = "index.html";
});

window.addEventListener("load", () => {
    fetchAPI()
    .then((data) => {
        data.forEach((element, index) => {
            const todoItem = document.createElement('div');
            todoItem.classList.add('d-flex', 'justify-content-between', 'align-items-center', 'todo-item');

            const taskDesc = document.createElement('p');
            taskDesc.classList.add('mb-0');
            taskDesc.textContent = element.title;

            const checkBox = document.createElement('input');
            checkBox.type = 'checkbox';
            checkBox.classList.add('btn-check');
            checkBox.id = `btncheck${element.id}`;
            checkBox.autocomplete = 'off';

            const label = document.createElement('label');
            label.classList.add('btn', 'btn-outline-primary');
            label.setAttribute('for', `btncheck${element.id}`);
            label.textContent = 'Done';

            todoItem.appendChild(taskDesc);
            todoItem.appendChild(checkBox);
            todoItem.appendChild(label);

            listContainer.appendChild(todoItem);
        });
    })
})

function fetchAPI() {
    const url = 'https://jsonplaceholder.typicode.com/todos';

    return fetch(url)
    .then((reponse) => {
        if(!reponse.ok){
            throw new Error('Error fetching details, please reload!');
        }
        return reponse.json();
    })
}