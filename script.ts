const buttons:any = document.querySelectorAll('button');
const display:any = document.querySelector('.display');

class calsi {
  public buttons:any
  constructor(buttons:any,display:any){
buttons.forEach(function(button:any) {
  button.addEventListener('click', calculate);
});
  }
}
 function calculate(event:any) {
  const clickedButtonValue = event.target.value;
  if (clickedButtonValue === '=') {
  
    if (display.value !== '') 
    {
      display.value = eval(display.value);
    }
  } else if (clickedButtonValue === 'C') 
  {
    display.value = '';
  } else {
    display.value += clickedButtonValue;
  }
}
let st1=new calsi(buttons,display);
