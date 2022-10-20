

//Parte 01

const operacao1 = 20 < 50 && 50 > 90;
console.log(operacao1);

const operacao2 = 5 == 5 || 5 == "5";
console.log(operacao2);

const operacao3 = !(20 > 50);
console.log(operacao3);

const operacao4 = !(20>50 || 50>70)
console.log(operacao4);


//Parte 02


const numFilhos = 2
const salInicial = 2000
const auxCreche = 45.50 * numFilhos
const salFixo = salInicial + auxCreche
const comJan = 5784.50*0.1
const comFev = 3418.41*0.1
const comMar = 4124.10*0.1
const comAbr = 1874*0.1
const comMai = 7000*0.1
const comJun = 9450*0.1

//porcentagem comissão 10%
//ano admissão 2019


console.log("O salário fixo mais o auxílio creche R$",salFixo)

console.log("O Fulano de Silva receberá de comissão em janeiro R$",comJan)

let salJaneiro = salInicial + comJan
let descInssJan = salJaneiro*0.05
console.log("O Fulano de Silva será descontado em janeiro pelo INSS R$",descInssJan)

//Janeiro
salJaneiro = salFixo + comJan - descInssJan
console.log("Salário Janeiro R$",salJaneiro)

//Fevereiro
let salFev = salInicial + comFev
let descInssFev = salFev*0.05
salFev = salFixo + comFev - descInssFev
console.log("Salário Fevereiro R$",salFev)

//Março
let salMar = salInicial + comMar
let descInssMar = salMar*0.05
salMar = salFixo + comMar - descInssMar
console.log("Salário Março R$",salMar)

//Abril
let salAbr = salInicial + comAbr
let descInssAbr = salAbr*0.05
salAbr = salFixo + comAbr - descInssAbr
console.log("Salário Abril R$",salAbr)

//Maio
let salMai = salInicial + comMai
let descInssMai = salMai*0.05
salMai = salFixo + comMai - descInssMai
console.log("Salário Maio R$",salMai)

//Junho
let salJun = salInicial + comJun
let descInssJun = salJun*0.05
salJun = salFixo + comJun - descInssJun
console.log("Salário Junho R$",salJun)

salJanM = salFixo+comJan
salFevM = salFixo+comFev
salMarM = salFixo+comMar
salAbrM = salFixo+comAbr
salMaiM = salFixo+comMai
salJunM = salFixo+comJun

let media = (salJanM + salFevM + salMarM + salAbrM + salMaiM + salJunM)/6
console.log("Média do salário em seis meses: R$", media)