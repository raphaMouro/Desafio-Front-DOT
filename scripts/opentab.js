let options = document.getElementsByClassName('plus-option');
for(let i = 0; i < options.length; i ++){
    options[i].addEventListener('click', (e) => {
        options[i].classList.toggle('minos-option');
        document.getElementById('standard-message').style.display='none';
        let textValues = document.getElementsByClassName('content');
        for(let j = 0; j< textValues.length; j++){
            textValues[j].style.display='none';
        }
        textValues[i].style.display='block';
        if(i == 0){
            document.getElementById('interactive-content').style.backgroundColor='#ffcc33';
            document.getElementById('interactive-content').style.color='#000000';
        }else if(i == 1){
            document.getElementById('interactive-content').style.backgroundColor='#bb1919';
            document.getElementById('interactive-content').style.color='#FFFFFF';
        }else{
            document.getElementById('interactive-content').style.backgroundColor='#707070';
            document.getElementById('interactive-content').style.color='#FFFFFF';
        }
    })
}