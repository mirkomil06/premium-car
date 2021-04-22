window.addEventListener("DOMContentLoaded", () => {
    /* function req() {
        const request = new XMLHttpRequest()
        request.open("GET", "../db.json")
        request.setRequestHeader("Content-type", "application/json; charset=utf-8")
        request.send()
        request.addEventListener("load", function () {
            if (request.status == 200) {
                let data = JSON.parse(request.response)
                createCards(data)
            } else {
                console.error('Что-то пошло не так')
            }
        })

    }
    req() */
    fetch("https://salty-thicket-11019.herokuapp.com/api/info")
        .then(data => data.json())
        .then(data => createCards(data))
        .catch(err => console.error(err)) 

    function createCards(data) {
        let table = document.querySelector('.left')
        let pagination = document.querySelector('.widget-left__pagination')
        let notesOnPage = 6
        let countOfItems = Math.ceil(data.length / notesOnPage)
        let items = []
        for (let i = 1; i <= countOfItems; i++) {
            let a = document.createElement('a')
            a.classList.add('btn')
            pagination.appendChild(a)
            a.setAttribute('href', "#!")
            a.innerHTML = i
            items.push(a)
        }
        showPage(items[0])
        for (let item of items) [
            item.addEventListener('click', function () {
                showPage(this)
            })
        ]
        function showPage(item) {
            let active = document.querySelector('a.active')

            if (active) {
                active.classList.remove('active')
            }

            item.classList.add("active")

            let pageNum = +item.innerHTML
            let start = (pageNum - 1) * notesOnPage
            let end = start + notesOnPage
            let notes = data.slice(start, end)
            table.innerHTML = ''

            notes.forEach(node => {
                let item = document.createElement('div')
                item.classList.add('widget-left__item')
                item.innerHTML = `
                        <div class = "widget-left__info">
                            <p class = "vehicle">Vehicle</p>
                            <h3 class = "widget-left__info-title">${node.title}</h3>
                            <p class = "widget-left__info-date">${node.date}</p>
                            <p class = "widget-left__info-text">${node.text}</p>
                        </div>
                        <img class = "widget-left__img" src="${node.img}" alt="${node.img}">
                        `
                table.appendChild(item)
            });
        }
    }
})




