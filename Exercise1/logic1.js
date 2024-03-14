// Começo do Contador
    let count = 0;

    //Seleção por meio do querySelector()
    
    const value = document.querySelector("#counter");
    const buttons = document.querySelectorAll(".button");
    
    console.log(buttons);
    
    buttons.forEach(function (button) {
        button.addEventListener('click', function (e){
            const styles = e.currentTarget.classList; 
            console.log(styles);
            if (styles.contains('diminuir')){
                count--;
            } else if(styles.contains('aumentar')){
                count++;
            } else{
                count = 0;
            }
            value.textContext = count;
        });
    });
    
