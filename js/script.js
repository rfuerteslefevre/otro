console.log("Un texto")
console.log(3*2)
console.log("Mañana es ", 21+1," de septiembre")
console.log("Mañana es " + 21+1 + " de septiembre")
console.warn("texto de alerta")
console.error("texto de error")

//Pop-up
//alert("Hola mundo")
document.write("Hola mundo JS")

//Variables
let alumno = "Damian"
let nota = 9

//Constantes
const entidad = "Buenos Aires Ciudad"

alumno = "Rodo"

console.log(alumno)

//Tipos de dato
let dato = 36
console.log(typeof dato)

let dato2 = "Cleta"
console.log(typeof dato2)

dato=true
console.log(typeof dato)

//Buenas prácticas para crear variables
let nombreApellido = "Juan Carlos" //Camelcase
let User = "Juan Carlos" //Mayuscula
let _usuario
let $usuario
let nombre_apellido = "snake case"
let NombreApellido = "Pascal case"


//Tipos de string
let str1 = "String1"
let str2 = 'String2'
let str3 = `Este es el 3ro`
console.log(str1 + str2 + str3)
str4 = str1
console.log(str4)

//Operaciones basicas
let num1 = parseFloat(prompt("Ingrese el primer numero"))
let num2 = parseFloat(prompt("Ingrese el segundo numero"))
console.log("el numero 1 es ",num1)
console.log("el numero 2 es ",num2)

console.log("num1 + num2=",num1+num2)
let suma = num1+num2
console.log("num1 + num2=",suma)
let resta = num1-num2
console.log("num1 - num2=",resta)
let multi = num1*num2
console.log("num1 * num2=",multi)
let div = num1/num2
console.log("num1 / num2=",div)
