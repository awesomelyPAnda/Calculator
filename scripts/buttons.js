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
   

   let firstvalue = ""
   let secondvalue = ""
   let secondvalue
   let symbol
   let firstvaluestored = false
   let secondvaluestored = false
   let operator
   let op
   let final


   function storevalue(value, add){
    let final = value + add
    firstvalue += add
    return final
  } 

  function performOperation (){
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
  }
   
   number.forEach((button) =>{
    button.addEventListener("click", (event) => {
        const val = event.target.getAttribute("data-value")
        maindisplay.style.fontSize = "48px"
        if (firstvalue = false) {
            maindisplay.textContent = storevalue(firstvalue, val)
        }
        else{
            maindisplay.textContent = storevalue(secondvalue, val)
        }
    })
    })

    operator.forEach((button) => {
        button.addEventListener("click", (event) => {
            op = event.target.getAttribute("data-value")
            if (firstvaluestored = false) {
                firstvaluestored = true
            }
        })
    })