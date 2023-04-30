const input = document.querySelector('input')
const ul = document.querySelector('ul')
const liElements = document.querySelectorAll('li')

const searchTask = (e) => {
    const searchText = e.target.value.toLowerCase()
    let tasks = [...liElements]
    tasks = tasks.filter(li => li.textContent.toLocaleLowerCase().includes(searchText))
    ul.textContent = ''
    tasks.forEach(li => ul.appendChild(li))
}

input.addEventListener('input', searchTask)






