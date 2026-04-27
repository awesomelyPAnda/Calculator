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
        const val = event.target.getAttribute("data-value")
        if (!firstvaluestored) {
            firstvalue += val
            maindisplay.style.fontSize = "48px"
            maindisplay.textContent = firstvalue
        } else {
            secondvalue += val
            maindisplay.style.fontSize = "48px"
            maindisplay.textContent = secondvalue
        }
    })
})

operator.forEach((button) => {
    button.addEventListener("click", (event) => {
        op = event.target.getAttribute("data-value")
        if (!firstvaluestored) {
            firstvaluestored = true
        }
        maindisplay.style.fontSize = "60px"
        maindisplay.textContent = op
        secondarydisplay.style.fontSize = "36px"
    secondarydisplay.textContent = firstvalue + op
        if (secondvaluestored && firstvaluestored){
            secondvaluestored = false
            firstvalue = performOperation()
            secondvalue = ""
            secondarydisplay.style.fontSize = "36px"
            secondarydisplay.textContent = firstvalue + op

        }
    })
})

equals.addEventListener("click", () => {
    console.log(firstvalue)
    console.log(secondvalue)
    console.log(op)
    maindisplay.textContent = performOperation()
    secondarydisplay.style.fontSize = "36px"
    console.log(performOperation().toString())
    if(performOperation().toString().length > 13){
        maindisplay.style.fontSize = "36px"
        secondarydisplay.style.fontSize = "18px"
    }
    secondvaluestored = true
    secondarydisplay.textContent = firstvalue + op + secondvalue + "=" + performOperation()
})

AC.addEventListener("click", () => {
   firstvalue = ""
   secondvalue = ""
   firstvaluestored = false
secondvaluestored = false
    op = ""
    maindisplay.textContent = ""
    secondarydisplay.textContent = ""
})

backspace.addEventListener("click", () => {
    lastDigit = getLastDigitAtChar();
    if(!firstvaluestored){
       firstvalue = firstvalue.slice(0, -1);
    }
    else{
        secondvalue = secondvalue.slice(0, -1)
    }

    console.log(lastDigit)
    maindisplay.textContent = maindisplay.textContent.slice(0, -1);

})