const prev = document.getElementById('prev')
const next = document.getElementById('next')
const card = document.getElementById('card')

const BASE_URL = `https://jsonplaceholder.typicode.com/todos`
let limit = 1
let page = 1

const renderData = (data) => {
    data.forEach(item => {
        card.innerHTML = `
            <h3>${item.id}</h3>
            <p>${item.title}</p>
            <p></p>
        `
    })
}

const getData = () => {
    fetch(`${BASE_URL}?_limit=${limit}&_page=${page}`)
        .then(response => response.json())
        .then(data => renderData(data))
}

getData()

prev.onclick = () => {
    page--
    page > 0 && getData()
}

next.onclick = () => {
    page++
    page < 200 && getData()
}