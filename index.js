const form = document.querySelector('form');
const name = document.getElementById('name');
const cardNum = document.getElementById('card-number');
const cardExp = document.querySelectorAll('.user-input2')
const cardCvc = document.getElementById('CVC');
const error = document.querySelectorAll('.error');


form.addEventListener('submit', (e) => {
    let isError = false;
    let isSuccess = false;
    let errorName = [];
    let errorCardNum = [];
    let errorCardExp1 = [];
    let errorCardExp2 = [];
    let errorCvc = [];
    

    if (name.value === "" || name.value == null){
        errorName.push('Can\'t be blank');
        isError = true;
    } else {
        error[0].classList.add('hide');
        name.classList.remove('error-label');
    }

    if (cardNum.value === "" || cardNum.value == null) {
        errorCardNum.push('Can\'t be blank');
        isError = true;
    } else {
        error[1].classList.add('hide');
        cardNum.classList.remove('error-label');
    }

    if ((isNaN(removeSpaces(cardNum.value))) && (cardNum.value != "") ){
        errorCardNum.push('Wrong format, Numbers Only');
        isError = true;
    }

    if (cardExp[0].value === "" || cardExp[0].value == null) {
        errorCardExp1.push('Can\'t be blank');
        isError = true;
    } else if (!error[2].classList.contains('hide')){
        error[2].classList.add('hide');
        if (cardExp[0].value != "") {
            cardExp[0].classList.remove('error-label');
        } 
    }

    if ((isNaN(cardExp[0].value)) && (cardExp[0].value != "")){
        errorCardExp1.push('Wrong format, Numbers Only');
        isError = true;
    }


    if (cardExp[1].value === "" || cardExp[1].value == null) {
        errorCardExp2.push('Can\'t be blank');
        isError = true;
    } else if (!error[2].classList.contains('hide')){
        error[2].classList.add('hide');
    } if (cardExp[1].value != "") {
        cardExp[1].classList.remove('error-label');
    } 

    if ((isNaN(cardExp[1].value)) && (cardExp[1].value != "")){
        errorCardExp2.push('Wrong format, Numbers Only');
        isError = true;
    }

    if (cardCvc.value === "" || cardCvc.value == null) {
        errorCvc.push('Can\'t be blank');
        isError = true;
    }  else if (!error[3].classList.contains('hide')){
        error[3].classList.add('hide');
    }

    if ((isNaN(cardCvc.value)) && (cardCvc.value != "")){
        errorCvc.push('Wrong format, Numbers Only');
        isError = true;
    }



    if (errorName.length > 0) {
        e.preventDefault();
        error[0].innerHTML = errorName;
        if (error[0].classList.contains('hide')){
            error[0].classList.remove('hide')
            name.classList.add('error-label')
        }
    }

    if (errorCardNum.length > 0) {
        e.preventDefault();
        error[1].innerHTML = errorCardNum;
        if (error[1].classList.contains('hide')){
            error[1].classList.remove('hide')
            cardNum.classList.add('error-label')
        }
    }

    if (errorCardExp1.length > 0 || errorCardExp2.length > 0) {
        e.preventDefault();
        if (error[2].classList.contains('hide')){
            error[2].classList.remove('hide')
            
        } 
    }
    if (errorCardExp1.length > 0) {
        cardExp[0].classList.add('error-label')
        error[2].innerHTML = errorCardExp1[0];
    }

    if (errorCardExp2.length > 0) {
        cardExp[1].classList.add('error-label')
        error[2].innerHTML = errorCardExp2[0];
    }
 
    if (errorCvc.length > 0) {
        e.preventDefault();
        error[3].innerHTML = errorCvc;
        if (error[3].classList.contains('hide')){
            error[3].classList.remove('hide')
            cardCvc.classList.add('error-label')
        }
    }

    if (isError == true) {
        e.preventDefault();
    } else {
        document.getElementById('finish-page').classList.remove('hide');
        document.getElementById('start-page').classList.add('hide');
        e.preventDefault();
        isError = false;
    }
})

const continueBtn = document.getElementById('continue');
continueBtn.addEventListener('click', function(){
    location.href = '/';
})

// const name = document.getElementById('name');
// const cardNum = document.getElementById('card-number');
// const cardExp = document.querySelectorAll('.user-input2')
// const cardCvc = document.getElementById('CVC');
const cardNameText = document.querySelector('.card-name');
const cardNumText = document.querySelector('.card-num-text');
const cardMonthText = document.getElementById('month2');
const cardYearText = document.getElementById('year2');
const cardCvcText = document.getElementById('card-cvc-text');


name.addEventListener('keypress', function(e){
    cardNameText.innerHTML = ( name.value + e.key);
})

cardNum.addEventListener('keypress', function(e){
    cardNumText.innerHTML = ( cardNum.value + e.key);    
})

cardExp[0].addEventListener('keypress', function(e){
    setTimeout(function(){
        cardMonthText.innerHTML = (cardExp[0].value )
    },100);
})

cardExp[1].addEventListener('keypress', function(e){
    setTimeout(function(){
        cardYearText.innerHTML = (cardExp[1].value )
    },100);
})

cardCvc.addEventListener('keypress', function(e){
    setTimeout(function(){
        cardCvcText.innerHTML = (cardCvc.value )
    },100);
})

cardNum.addEventListener('keypress', function(e){
    if (cardNum.value.length == 4 || cardNum.value.length == 9 || cardNum.value.length == 14){
        cardNum.value = cardNum.value + " "
    }
})

function removeSpaces(str) {
    if (str[0] != " " || str[0] !== ""){
    let arr1 = cardNum.value.split(" "); //contains array of split numbers
    let joinedNums = arr1.join('');
    return joinedNums;
    }
}