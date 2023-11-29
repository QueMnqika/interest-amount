let input = document.querySelector('#inputAmount')
let interest = document.querySelector('#interestCharged')
let btn = document.querySelector('#btn')
let output = document.querySelector('#output')
let interestAmount = input.value * 8/100

btn.addEventListener('click', (value) => {
    let returnMoney = input.value + interestAmount
    let answer = eval(returnMoney)
    output.innerHTML = `<h3>Money to be returned:</h3><br><h2>${answer}</h2>`
})

if(input.value != ''){
    btn.innerText = 'Proceed'
    interest.value.textContent = eval(interestAmount)
}