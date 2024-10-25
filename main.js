/* Dom de la pantalla */
const pantalla = document.querySelector(".pantalla")
pantalla.value = ""

/* Dom de las teclas */
const Borrar = document.querySelector("#borrar")
const parentesisAbrir = document.querySelector("#parentesis-abrir")
const parentesisCerrar = document.querySelector("#parentesis-cerrar")
const porcetaje = document.querySelector("#porcentaje")
const dividir = document.querySelector("#dividir")
const por = document.querySelector("#por")
const menos = document.querySelector("#menos")
const mas = document.querySelector("#mas")
const singno = document.querySelector("#signo")
const punto = document.querySelector("#punto")
const igual = document.querySelector("#igual")

/* Dom teclas Numeros */
const cero = document.querySelector("#cero")
const uno = document.querySelector("#uno")
const dos = document.querySelector("#dos")
const tres = document.querySelector("#tres")
const cuatro = document.querySelector("#cuatro")
const cinco = document.querySelector("#cinco")
const seis = document.querySelector("#seis")
const siete = document.querySelector("#siete")
const ocho = document.querySelector("#ocho")
const nueve = document.querySelector("#nueve")

/* Agregar Numero a la pantalla */
const agregarValor =(valor)=>{
    /* condicional si el valor inicial ya es 0 */
if( pantalla.value == 0 && valor == 0){
    return
}
// cambiar el valor inicial a vacio " "
if(pantalla.value == 0){
    pantalla.value = ""
}
    pantalla.value += valor
}

/* Agregar 0peracion a la pantalla */
const agregarOperacion = (operacion) =>{
    /* evaluar si el ultimo caracter es un operador y si es el mismo operador */
    const operadores = ["+","-","*","/","(",")"]
    /* se optiene el ultimo caracter */
    const ultimoCaracter = pantalla.value.slice(-1)

    if(operadores.includes(ultimoCaracter) && operadores.includes(operacion)){
        /* si el ultimo caracter es diferente se elimina el viejo y se agrega el nuevo */
        pantalla.value = pantalla.value.slice(0,-1) + operacion
    }
    else if(!operadores.includes(ultimoCaracter)&& operacion === "("){
        pantalla.value += "*"+operacion
    }
    else{
        pantalla.value += operacion
    }
}   

/* Realizar calculo de la pantalla */
const calcular = ()=>{
    try {
        pantalla.value = eval(pantalla.value)
        
    } catch (error) {
        console.log("error de calculo")
    }

}

let arrayNumeros = [cero,uno,dos,tres,cuatro,cinco,seis,siete,ocho,nueve]
arrayNumeros.forEach((num)=> {
    num.addEventListener("click", ()=>{
        agregarValor(num.innerHTML)
    })
})

let arrayOperaciones = [mas,menos,punto,dividir,por,porcetaje,parentesisAbrir,parentesisCerrar]
arrayOperaciones.forEach((ope)=>{
    ope.addEventListener("click",()=>{
        agregarOperacion(ope.innerHTML)
    })
})

igual.addEventListener("click", calcular)
Borrar.addEventListener("click",()=>{
    pantalla.value = ""
})


