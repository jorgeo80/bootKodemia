
// let randomArray = []
// let answerArray = []

// for (let i = 1; i <= 3; i++){
//     setTimeout(() => {
//         randomArray.push(Math.trunc(Math.random()*12+1))
//         console.log(randomArray)
//     },3000)
// }
// console.log(randomArray)

// document.addEventListener("click", 
// (buttonValue) => {
//     answerArray.push(parseInt(buttonValue.toElement.value))
//     console.log(buttonValue.toElement.value, answerArray)
// })

// console.log(randomArray == answerArray)


var numMax = 12
var setTimmer = 1000
var n = 12
const start = (n = 1, randomArray = []) => {
    if(n > 0){
        n--
        setTimeout(function(){
            let randomNum = Math.trunc(Math.random() * numMax + 1)
            let onButton = document.querySelector(`button[value="${randomNum}"]`)
            setTimeout(() => {
                if (randomArray.length > 0){
                    let offButton = document.querySelector(`button[value="${
                        randomArray[randomArray.length-1]}"]`)
                    offButton.textContent = ""        
                }
            }, (setTimmer * 0.75))
            onButton.textContent = randomNum
            randomArray.push(randomNum)            
            start(n, randomArray)
            console.log(randomArray, n)            
        }, (setTimmer * 1.25))
    }
}
start(n)

