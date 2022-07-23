function calculate() {

const p = document.querySelector('div')
const userName = document.querySelector('#name').value
const userYear = document.querySelector('#year').value
const currentDate = new Date().getFullYear();

let age = currentDate - userYear
let daysLive = 365 * age
p.innerText = `${userName} nasceu em ${userYear} e tem ${age} anos.
${userName} já vivel ${daysLive} dias`

}