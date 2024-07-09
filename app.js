let input = document.querySelector("input");
let buttons = document.querySelectorAll("button");
let string = "";
let display = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener("click" , (e) =>{
        if(e.target.innerHTML === "=" ){
            string = eval(string);
            display = string;
            input.value = display;
        }
        else if(e.target.innerHTML === "AC"){
           string ="";
            display ="";
           input.value = display;            
        }
        else if(e.target.innerHTML === "DEL"){
           string = string.slice(0, -1);
            display = display.slice(0, -1);
           input.value = display;            
        }
        else{
            string += e.target.id;
            display += e.target.innerHTML;
        input.value = display;
        }
    });
});


