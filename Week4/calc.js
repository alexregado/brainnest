let numbers = document.querySelectorAll(".number");
let numbers123 = document.querySelectorAll(".number");
let screen = document.querySelector(".result");
let operators = document.querySelectorAll(".operator");
let clear = document.querySelector(".clear");
let equals = document.querySelector(".equal");
let del = document.querySelector(".delete");
let calc;
let numberOn = [];
let num = 0;

let separator;
clear.addEventListener("click", () => {
    screen.textContent = "";
    numberOn = [];
})


numbers.forEach(number => {
    number.addEventListener("click", function(){
        num = "";
        num = screen.textContent += this.textContent;

        if(this.textContent == "."  && dot > 1){
            num = num.substring(0, num.length - 1);
            dot = 0;
        }
    });
});

/* 
CRIAR MENSAGÆNS DE ERROS PARA INSERIR UM SIMBOLO APOS O PONTO
DOIS SIMBOLOS SEGUIDOS
*/

del.addEventListener("click", ()=>{num = num.substring(0, num.length - 1); screen.textContent = num;})



operators.forEach(operator => {
    operator.addEventListener("click", function(){
        if(num.includes("/0")){
            alert("U dumb or what?");
            num = num.substring(0, num.length - 1);
            num = num.substring(0, num.length - 1);
            return
        }

        //CHECKS IF THERE IS ALREADY ANY OPERATOR
        for(let i = 0; i < operators.length; i++){
            if(num.includes(operators[i].textContent)){
                sumMade = num.split(separator)
                let finalResult = operate(sumMade[0], separator, sumMade[1]); 
                screen.textContent = finalResult;
                finalResult = num;
                console.clear();
            }
        }

            num = screen.textContent += this.textContent;
            separator = this.textContent;
            oper = this.textContent;

    });
});

//CHECKS FOR DOTS 
let dot = 0;
window.setInterval(function(){
        if(num.includes(".")){
            dot++;
        num = num.replace(".." || "..." || "...." || ".....", ".")
        screen.textContent = num;
        console.log('as', num)

        console.log(dot)


    }


    let lastt = num.substr(-2, 3)
    console.log(num, lastt)

    
}, 600);


//DO THE MATH
equals.addEventListener("click", ()=>{
    if(num.includes("/0")){
        alert("U dumb or what?");
        num = num.substring(0, num.length - 1);
    }
    sumMade = num.split(separator)
    let finalResult = operate(sumMade[0], separator, sumMade[1]); 
    finalResult = num;
    screen.textContent = finalResult;
    console.clear();
});


function operate(numb1, oper, numb2){
    let result;
    numb1 = Number(numb1);
    numb2 = Number(numb2);
    switch(oper){
        case("+"):
        result = numb1 + numb2;
        break;

        case("-"):
        result = numb1 - numb2;
        break;

        case("/"):
        result = numb1 / numb2;
        break;

        case("*"):
        result = numb1 * numb2;
        break;
    }
    return result
}

