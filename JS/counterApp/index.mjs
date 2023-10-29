import "./styles.css";

const displayValue = document.querySelector('#count-display');
const increase = document.querySelector('#increase');
const decrease = document.querySelector('#decrease');
const step  = document.querySelector('#count-step');
const reset = document.querySelector('#reset');

increase.addEventListener('click', function(){
  let temp = parseInt(displayValue.innerHTML) + parseInt(step.value);
  displayValue.innerHTML = temp;
});

decrease.addEventListener('click', function(){
  let temp = parseInt(displayValue.innerHTML) - parseInt(step.value);
  displayValue.innerHTML = temp;
});

reset.addEventListener('click', ()=>{
  displayValue.innerHTML = 0;
})


