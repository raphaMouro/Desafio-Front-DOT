let arrow = document.getElementsByClassName('icon');
for(let i = 0; i < arrow.length; i ++){
    arrow[i].addEventListener('click', (e) => {
        let textValues = document.getElementsByClassName('description');
        let bottom = document.getElementsByClassName('bottom-wrapper');
        for(let j = 0; j < textValues.length; j++){
            textValues[j].style.display = 'none';
            arrow[j].style.backgroundImage = 'url("./assets/icones/icon-arrow-down.svg")';
            arrow[j].style.backgroundColor = "#FFFFFF";
            bottom[j].style.backgroundColor = "#7a2b58";
            bottom[j].style.height = '40px';
        }
        
        arrow[i].style.backgroundImage = 'url("./assets/icones/icon-arrow-up.svg")';
        arrow[i].style.backgroundColor = "#7a2b58"
        textValues[i].style.display = 'block';
        
        bottom[i].style.backgroundColor = '#ffcc33';
        bottom[i].style.height = '340px';

        let board = document.getElementsByClassName('second-div-wrapper');
        board[0].style.height = "1000px";
        board = document.getElementsByClassName('grey-circle');
        board[0].style.top = "230px";
        
})
}