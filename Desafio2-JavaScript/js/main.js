var randomArray = []
var answerArray = []
var clickString = ""

const fnStart = (n, arr, setTimmer = 1000, numMax = 12) => {
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
            fnStart(n, arr)
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
    if(answerArray.length !== 0 && randomArray.length === answerArray.length &&
        randomArray[answerArray.length-1] === answerArray[answerArray.length-1]){
        console.log(`Terminaste ${answerArray.length}`)
    } else if(randomArray[answerArray.length-1] === answerArray[answerArray.length-1]) {
        console.log(`vas bien`)
    } else {alert(`pierdes`)}
    //return answerArray
}    

const valueClick = buttonValue => clickString = buttonValue.toElement.value    

const clickStart = () => {
    if(clickString === "start"){
        randomArray = []
        answerArray = []
        fnStart(nPlay, randomArray)
    }    
}

var nPlay = 3
document.addEventListener("click", valueClick)
document.addEventListener("click", clickStart)
document.addEventListener("click", answers)





//console.log(randomArray == answerArray)


