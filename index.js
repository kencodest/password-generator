const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

// 0 - 51 = letras
// 52 - 61 = numeros
// 62 - final = simbolos

// let themeEl = document.getElementById("theme-el")
let firstPassEl = document.getElementById("first-pass-el")
let secondPassEl = document.getElementById("second-pass-el")
let thirdPassEl = document.getElementById("third-pass-el")
let fourthPassEl = document.getElementById("fourth-pass-el")
let lengthEl = document.getElementById("length-el")
let numbersEl = document.getElementById("numbers-el")
let symbolsEl = document.getElementById("symbols-el")
let passwordGenerator = document.querySelector(".password-generator")
let length = lengthEl.value
let useNumbers = numbersEl.checked
let useSymbols = symbolsEl.checked
let darkMode = true

function generatePassword(){
    let firstPass = ""
    let secondPass = ""
    let thirdPass = ""
    let fourthPass = ""

    for( let i=0; i < length; i++){
        firstPass += randomChar()
        secondPass += randomChar()
        thirdPass += randomChar()
        fourthPass += randomChar()
    }
    firstPassEl.value = firstPass
    secondPassEl.value = secondPass
    thirdPassEl.value = thirdPass
    fourthPassEl.value = fourthPass
}

function randomChar(){
    if( useNumbers && useSymbols )
        return characters[randomIndex(characters.length)]
    if( useNumbers ) {
        let validCharacters = characters.slice(0, 62)
        return validCharacters[randomIndex(validCharacters.length)]
    }
    if( useSymbols ){
        let validCharacters = [...characters.slice(0, 52), ...characters.slice(62, characters.length)]
        return validCharacters[randomIndex(validCharacters.length)]
    }
    let validCharacters = characters.slice(0, 52)
    return validCharacters[randomIndex(validCharacters.length)]
}

function randomIndex(arrLength){
    return Math.floor(Math.random() * arrLength)
}

function copy(el){
    
    if(el.value.length > 0){
        const pass = navigator.clipboard.writeText(el.value)
        el.value = "Copied!"
        const reset = () =>  navigator.clipboard.readText().then(data => el.value = data)
        setTimeout(reset, 1000)
        return pass
    }
}
/*Copy functionality*/ 
const firstIcon = document.querySelector(".firsticon")
const secondIcon = document.querySelector(".secondicon")
const thirdIcon = document.querySelector(".thirdicon")
const fourthIcon = document.querySelector(".fourthicon")

firstIcon.addEventListener("click", () => copy(firstPassEl))
secondIcon.addEventListener("click", () => copy(secondPassEl))
thirdIcon.addEventListener("click", () => copy(thirdPassEl))
fourthIcon.addEventListener("click", () => copy(fourthPassEl))



//   /* Get the text field */
//   var copyText =  firstPassEl

//   /* Select the text field */
//   copyText.select();
//   copyText.setSelectionRange(0, 99999); /* For mobile devices */

//    /* Copy the text inside the text field */
//   navigator.clipboard.writeText(copyText.value);

//   /* Alert the copied text */
//   alert("Copied the text: " + copyText.value);
// }


// themeEl.addEventListener("change", () => {
//     darkMode = themeEl.checked
//     if(darkMode)
//         passwordGenerator.classList.add('lightMode')
//     else
//         passwordGenerator.classList.remove('lightMode')
// })


lengthEl.addEventListener("change", () => {
    length = lengthEl.value
})
numbersEl.addEventListener("change", () => {
    useNumbers = numbersEl.checked
})
symbolsEl.addEventListener("change", () => {
    useSymbols = symbolsEl.checked
})



//Dark/light theme
const themeEl = document.querySelector(".theme-btn")
themeEl.addEventListener("click", function(){
    if(darkMode){
        passwordGenerator.classList.add("lightMode")
        document.getElementById("sun").style.display = "none"
        document.getElementById("moon").style.display = "inline-block"
        darkMode = !darkMode
    }

    else {
        passwordGenerator.classList.remove('lightMode')
        document.getElementById("sun").style.display = "inline-block"
        document.getElementById("moon").style.display = "none"
        darkMode = !darkMode
    }
})

const date = new Date()
const year = date.getFullYear()
document.getElementById('footer').innerHTML = `<p><span>&copy;</span> ${year} All Rights Reserved | <a href="https://github.com/kencodest/password-generator" target="_blank">kencodest</a></p>`


