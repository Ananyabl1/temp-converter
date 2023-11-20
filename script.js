let celciusInput = document.querySelector('#celcius > input');
let farenheitInput = document.querySelector('#farenheit > input');
let kelvinInput = document.querySelector('#kelvin > input');

let btn = document.querySelector('.button hi')

function roundNumber(number)
{
    return Math.round(number*100)/100

}
celciusInput.addEventListener('input',function(){
    let cTemp=parseFloat(celciusInput.value);
    let fTemp=(cTemp*(9/5))+32;
    let kTemp=cTemp+273.15;

    farenheitInput.value=roundNumber(fTemp);
    kelvinInput.value=roundNumber(kTemp);
})