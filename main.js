function activateFunction(event){
    console.log(event);
    const button = event.currentTarget;
    const id = button.getAttribute("id");

    if(id=='firstButton'){
        document.getElementById('first').classList.toggle('hidden');
        if(button.classList.contains('changeButton')){
            button.classList.remove('changeButton');
            button.innerHTML = "+";
        }
        else{
            button.classList.add('changeButton');
            button.innerHTML = "-";
        }
    }
    else if(id=='secondButton'){
        document.getElementById('second').classList.toggle('hidden');
        if(button.classList.contains('changeButton')){
            button.classList.remove('changeButton');
            button.innerHTML = "+";
        }
        else{
            button.classList.add('changeButton');
            button.innerHTML = "-";
        }
    }
    else if(id=='thirdButton'){
        document.getElementById('third').classList.toggle('hidden');
        if(button.classList.contains('changeButton')){
            button.classList.remove('changeButton');
            button.innerHTML = "+";
        }
        else{
            button.classList.add('changeButton');
            button.innerHTML = "-";
        }
    }
    else if(id=='fourthButton'){
        document.getElementById('fourth').classList.toggle('hidden');
        if(button.classList.contains('changeButton')){
            button.classList.remove('changeButton');
            button.innerHTML = "+";
        }
        else{
            button.classList.add('changeButton');
            button.innerHTML = "-";
        }
    }
}