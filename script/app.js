let data={
    display:'0',
    firstNumber:0,
    secondNumber:0,
    result:0,
    operator:false,
    operation:null,

}

function displayNumber(){
    let display=document.querySelector('.display');
    display.innerText=data.display;
    
}

function updateDisplayNumber(number){
    let resultNumber=number.match(/(\d+)/);
    if(data.display==='0'){
        data.display=resultNumber[0];
    }else{
        data.display+=resultNumber[0];
    }
}


function clearDisplay(){
    data.display='0'
    data.firstNumber=0
    data.secondNumber=0
    data.result=0
    data.operator=false

}

function getFirstNumber(number){

    if(data.firstNumber===0){
    data.firstNumber=number;
    }else{
        data.firstNumber+=number;
    }
}

function getSecondNumber(number){

    if(data.secondNumber===0){
    data.secondNumber=number;
    }else{
        data.secondNumber+=number;
    }
}


function handleOperator(operator){
    let numberFirst=parseFloat(data.firstNumber);
    let numberSecond=parseFloat(data.secondNumber);
    if(operator==='+'){
        data.result=(numberFirst)+(numberSecond);
    }else if(operator==='-'){
        data.result=(numberFirst)-(numberSecond);
    }
}


let buttons=document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('click',function(){
        let target=event.target;

        if(target.classList.contains('operator')&& data.operator===false){
            data.operator=true;
            data.display='0';
            data.operation=target.innerText;
        }
        else if(target.classList.contains('operator')&& data.operator===true){
        alert("operator sudah ditentukan")}


        if(data.operator){
            let resultNumber=target.innerText.match(/(\d+)/);
            getSecondNumber(resultNumber[0]);
            updateDisplayNumber(target.innerText);
            displayNumber();
        }else{
            getFirstNumber(target.innerText);
            updateDisplayNumber(target.innerText);
            displayNumber();
        }


        console.log(`First : ${parseFloat(data.firstNumber)}`);
        console.log(`second : ${parseFloat(data.secondNumber)}`);
        

       
        
    })
});


document.querySelector('.clear').addEventListener('click',function(){
    clearDisplay();
    displayNumber()
})


const equals=document.querySelector('.equals');
equals.addEventListener('click',function(){
    handleOperator(data.operation);
    let display=document.querySelector('.display');
    display.innerText=parseFloat(data.result);
    console.log(data.result)

})



const negative=document.querySelector('.negative');
negative.addEventListener('click',function(){
    if(data.operator){
        data.secondNumber=-Math.abs(data.secondNumber);
        data.display=data.secondNumber;
        displayNumber();
        
    }else{
        data.firstNumber=-Math.abs(data.firstNumber);
        data.display=data.firstNumber;
        displayNumber();
    }



})


