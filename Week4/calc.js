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
let dot = 0;

let separator;
clear.addEventListener("click", () => {
    screen.textContent = "";
    num = 0;
})


numbers.forEach(number => {
    number.addEventListener("click", function(){
        num = "";
        num = screen.textContent += this.textContent;
        console.log(dot)
        if(this.textContent === "."){
            if(dot = 0){
                dot++;
            } else {
            this.textContent = "";
        }
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
// let dot = 0;
window.setInterval(function(){
//         if(num.includes(".")){
//             dot++;
//         num = num.replace(".." || "..." || "...." || ".....", ".")
//         screen.textContent = num;
//         console.log('as', num)

//         console.log(dot)


//     }


//     let lastt = num.substr(-2, 3)
//     console.log(num, lastt)

console.log(sumMade[0])
}, 600);


//DO THE MATH
equals.addEventListener("click", ()=>{
    sumMade = num.split(separator)
    let finalResult = operate(sumMade[0], separator, sumMade[1]); 
    screen.textContent = finalResult;
    finalResult = num;
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
        if(numb1 == 0 || numb2 == 0){
            result = "WTF??"
        } else{
        result = numb1 / numb2;
        }
        break;

        case("*"):
        result = numb1 * numb2;
        break;
    }
    return result
}
