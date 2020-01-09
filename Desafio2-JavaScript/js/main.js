var nPlay = 4
var randomArray = []
var answerArray = []
var clickString = ""

const start = (n, arr = [], setTimmer = 1000, numMax = 12) => {
    if(n > 0){
        n--
        setTimeout(function(){
            let randomNum = Math.trunc(Math.random() * numMax + 1)
            let onButton = document.querySelector(`button[value="${randomNum}"]`)
            setTimeout(() => {
                if (arr.length > 0){
                    let offButton = document.querySelector(`button[value="${
                        arr[arr.length-1]}"]`)
                    offButton.textContent = ""        
                }
            }, (setTimmer * 0.75))
            onButton.textContent = randomNum
            arr.push(randomNum)            
            start(n, arr)
            console.log(arr, n)
            return arr
        }, (setTimmer * 1.25))
    }    
}


const answers = (buttonValue) => {
    if(parseInt(buttonValue.toElement.value) == buttonValue.toElement.value){
        answerArray.push(parseInt(buttonValue.toElement.value))
    }
    console.log(buttonValue.toElement.value, answerArray)
    return answerArray
}    

const valueClick = buttonValue => clickString = buttonValue.toElement.value    

document.addEventListener("click", answers)
document.addEventListener("click", valueClick)
document.addEventListener("click", () =>{
    if(clickString === "start"){
        randomArray = []
        answerArray = []
        start(nPlay, randomArray)
    }    
})


//console.log(randomArray == answerArray)


