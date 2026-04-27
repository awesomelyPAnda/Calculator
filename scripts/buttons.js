/* 1. Button even listeners
   2. If event listener is number, appended to variable which is stored as a string (num.toString();)
   3. If event listener is operator, store first number and assign operation value
   4. When equals sign is pressed, evaluate expression and show answer (parseFloat(firstnumber) + parseFloat(secondnumber)
   5. Figure out how to store previous answers
   6. decimals
   7. rounding
   8. keyboard support*/

   const AC = document.querySelector(".btn.misc.AC")
   const backspace = document.querySelector(".btn.misc.backspace")
   const number = document.querySelectorAll(".btn.number")
   const operator = document.querySelectorAll(".btn.operator")
   const maindisplay = document.querySelector("#bottom-text")
   const equals = document.querySelector(".btn.equals")
   const secondarydisplay = document.querySelector("#top-text")
   

   let firstvalue = ""
   let secondvalue = ""
   let symbol
   let firstvaluestored = false
   let secondvaluestored = false
   let op
   let lastDigit
   let answer

   function handleKey(key) {
    // Numbers
    if (!isNaN(key)) {
        handleNumber(key)
    }

    // Operators
    else if (["+", "-", "*", "/"].includes(key)) {
        handleOperator(key)
    }

    // Equals (Enter or =)
    else if (key === "Enter" || key === "=") {
        handleEquals()
    }

    // Backspace
    else if (key === "Backspace") {
        handleBackspace()
    }

    // Clear
    else if (key.toLowerCase() === "c") {
        handleClear()
    }

    // Decimal
    else if (key === ".") {
        handleNumber(".")
    }
}

   document.addEventListener("keydown", (event) => {
    handleKey(event.key)
})

    function handleNumber(val){
        maindisplay.style.fontSize = "60px"
        if (!firstvaluestored) {
            firstvalue += val
            maindisplay.textContent = firstvalue
        } else {
        
            if (maindisplay.textContent === op) {
                secondvalue = val
                } else {
                secondvalue += val
            }

        maindisplay.textContent = secondvalue
    }
}
    


    function handleEquals() {
        answer = performOperation()
        console.log(firstvalue)
    console.log(secondvalue)
    console.log(op)
    maindisplay.textContent = answer
    secondarydisplay.textContent = firstvalue + op + secondvalue + "=" + answer
    secondarydisplay.style.fontSize = "36px"
    if(performOperation().toString().length > 10){
        maindisplay.style.fontSize = "34px"
        secondarydisplay.style.fontSize = "16px"
    }
    console.log(answer.toString())
        secondvaluestored = true
        firstvaluestored = false
        firstvalue = ""
}

     function handleOperator(value) {
        op = value
        if (!firstvaluestored) {
            firstvaluestored = true
        }
        maindisplay.style.fontSize = "60px"
        maindisplay.textContent = op
        secondarydisplay.style.fontSize = "36px"
        secondarydisplay.textContent = firstvalue + op
        if (secondvaluestored && firstvaluestored){
            secondvaluestored = false
            firstvalue = answer
            secondvalue = ""
            secondarydisplay.style.fontSize = "36px"
            secondarydisplay.textContent = firstvalue + op

        }
    }

    function handleClear(){
        firstvalue = ""
        secondvalue = ""
        firstvaluestored = false
        secondvaluestored = false
        op = ""
        maindisplay.textContent = ""
        secondarydisplay.textContent = ""
    }

    function handleBackspace(){
        lastDigit = getLastDigitAtChar();
    if(!firstvaluestored){
       firstvalue = firstvalue.slice(0, -1);
    }
    else{
        secondvalue = secondvalue.slice(0, -1)
    }

    console.log(lastDigit)
    maindisplay.textContent = maindisplay.textContent.slice(0, -1);
    }

   function getLastDigitAtChar(){
    let strValue = String(parseFloat(maindisplay.textContent));
    return strValue.charAt(strValue.length - 1);
}


   function storevalue(value, add){
    let final = value + add
    value += add
    return final
  } 

  function performOperation (){
   let final
    switch (op){
        case "+":
            final = parseFloat(firstvalue) + parseFloat(secondvalue)
            break
        case "-":
            final = parseFloat(firstvalue) - parseFloat(secondvalue)
            break
        case "/":
            final = parseFloat(firstvalue) / parseFloat(secondvalue)
            break
        case "*":
            final = parseFloat(firstvalue) * parseFloat(secondvalue)
            break
        }
    return final
    }
   
   number.forEach((button) => {
    button.addEventListener("click", (event) => {
        handleNumber(event.target.getAttribute("data-value"))
    })
})

operator.forEach((button) => {
    button.addEventListener("click", (event) => {
        handleOperator(event.target.getAttribute("data-value"))
    })
})

equals.addEventListener("click", () => {
    handleEquals()
})

AC.addEventListener("click", () => {
    handleClear()
})

backspace.addEventListener("click", () => {
    handleBackspace()
})
