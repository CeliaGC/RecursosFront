function msgToBox() {
    let letter1 = document.querySelectorAll('input')[0].value;
    let letter2 = document.querySelectorAll('input')[1].value;
    let letter3 = document.querySelectorAll('input')[2].value;
    var concatLetter = [letter1, letter2, letter3]
    let board = document.querySelector('#msgCont');

    for (let index = 0; index < concatLetter.length; index++) {
        const row = concatLetter[index];
        let newMsg = document.createElement('p');
        let mailbox = document.createElement('div');

        mailbox.className = "mailBoxes";
        newMsg.className = "letters";

        newMsg.innerText = row;
        mailbox.appendChild(newMsg);
        board.appendChild(mailbox)
    
    }

    reset();

    function reset() {
        document.querySelectorAll('input')[0].value = "";
        document.querySelectorAll('input')[1].value = "";
        document.querySelectorAll('input')[2].value = "";
    } 

}