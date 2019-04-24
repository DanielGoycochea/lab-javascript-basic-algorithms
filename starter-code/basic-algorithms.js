// Names and Input
var hacker1= 'Daniel'
var hacker2 = prompt('Dame un numero')

console.log(`The navigator's name is ${hacker2}`)
console.log(`The driver's name is  ${hacker1}`)

//Conditionals
if(hacker1.length > hacker2.length){
   
  console.log(`The Driver has the longest name, it has ${hacker1.length} characters `)

} else if(hacker1.length == hacker2.length) {
  
  console.log(`wow, you both got equally long names,  ${hacker1.length} characters!!`)
}else{
    console.log(`Yo, navigator got the longest name, it has ${hacker2.length} characters `)
}

console.log(hacker1.toUpperCase().split(''))
console.log(hacker2.split('').reverse().join(''))

if(hacker1.localeCompare(hacker2)<= -1){
 console.log("The driver's name goes first")
}else if(hacker1.localeCompare(hacker2)>= 1){
   console.log('Yo, the navigator goes first definitely')
 }else {
   console.log('What?! You both got the same name?')
 }

if(hacker2 == hacker2.split('').reverse().join('')){
 console.log('es palindromo')
}else{
 console.log('no es palindromo')
}



// Lorem ipsum generator
