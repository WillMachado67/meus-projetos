function caching() {
    const work = document.querySelector('#work').value
    const week = document.querySelector('#listWeek').value
    const idWeek = document.querySelector(`#${week}`)
    const createLabel = document.createElement('label')
    const createLine = document.createElement('br')
    createLabel.innerHTML = `<input type='checkbox'>${work}`
    idWeek.append(createLabel, createLine)
}