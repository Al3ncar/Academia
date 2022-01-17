//------------01------------//

let yearsOld = 19

if (yearsOld >= 18 ){
    console.log("Parabéns, Você pode acessar ")
}else{
    console.log("Infelizmente você não pode acessar esse site." )
}

//-----------02--------------//

let myYearsOld = 19
let human = true

if(myYearsOld >= 18 && human === true){
    console.log("Você e maior de 18 e humano")
}else{
    console.log("Você não é maior de 18 ou você não é humano")
}

//------------03------------//

let month = "Dezembro"

if(month === "Janeiro" || month === "Dezembro"){
    console.log("Uau!!! que coincidência, você faz aniversario em Janeiro ou Dezembro.")
}else{
    console.log("Você não faz aniversario nem em Janeiro nem em Dezembro")
}

// ------------04------------//

let name = "Igor"

if(name[0] == "R"|| name[0] == "r"){
    console.log("Seu nome começa com R")
}else{
    console.log("Seu nome não começa com R")
}

// ------------05----------//

let lestName = "Bastos"
lestName.length

if(lestName[0] == "E"|| lestName.length === 6){
    console.log("Seu sobrenome tem todas as caracteristicas requisitadas")
}else{
    console.log("Seu sobrenome não tem todas as caracteristicas requisitadas")
}