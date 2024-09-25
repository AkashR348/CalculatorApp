

function input(userInput){
    let input = userInput
    
    
    
    console.log(input)
    const symbolArray = ['+', '-', '*', '/', '=', '.','AC']

    let output = document.getElementById("output_box")
    
    if(input == "back")
    {
        back()
    }
    
    if(symbolArray.includes(input) ){
        if(output.innerHTML == " "){
            output.innerHTML = "Enter "
        }
        if(input == "AC"){
            output.innerHTML = " "
        }
        else if(input == "="){
            output.innerHTML = eval(output.innerHTML)
        }
        else{
            output.innerHTML += input
        }
    }
    else if(input != "back"){
        output.innerHTML += input
    }
    

    
}

function back(){
    let output = document.getElementById("output_box")
    output.innerHTML = output.innerHTML.slice(0,-1)
}



