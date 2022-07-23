const nome = "Willian"
const idade = 29
let peso
let alturaEmM
let imc
peso = 71.5
alturaEmM  = 1.83
imc = peso / (alturaEmM * alturaEmM)

console.log(`${nome} tem ${idade} anos, pesa ${String(peso.replace(".",","))} kg tem ${String(alturaEmM.replace(".",","))} de altura`)
console.log(`seu imc é ${imc.toFixed(2).replace(".",",")}`)