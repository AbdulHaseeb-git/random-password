const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbols = "`~!@#$%^&*()_-=+}][{';:/?.>,<";

//selectors

const passboxSelector = document.getElementById("passbox");
const lengthSelector = document.getElementById("length");
const upperSelector = document.getElementById("uppercase");
const lowerSelector = document.getElementById("lowercase");
const numberSelector = document.getElementById("number");
const symbolSelector = document.getElementById("symbol");
const btnSelector = document.getElementById("btn");


btnSelector.addEventListener('click', ()=>{
    generatePassword(password = "");
})
function generateData(dataset){
    
    return dataset[Math.floor(Math.random() * dataset.length)];
}
function generatePassword(pass){
    if(upperSelector.checked){
        pass += generateData(upper)
    }
    if(lowerSelector.checked){
        pass += generateData(lower)
    }
    if(numberSelector.checked){
        pass += generateData(number)
    }
    if(symbolSelector.checked){
        pass += generateData(symbols)
    }

    if(!numberSelector.checked && !symbolSelector.checked && !lowerSelector.checked && !upperSelector.checked){
        pass += generateData(upper);
        pass += generateData(lower);
        pass += generateData(number);
        pass += generateData(symbols)
    }
    if(pass.length < lengthSelector.value)
    {return generatePassword(pass)}
    
    if(pass.length > lengthSelector.value){
        pass = pass.slice(0,lengthSelector.value);
    }
    passboxSelector.innerText = pass;
}