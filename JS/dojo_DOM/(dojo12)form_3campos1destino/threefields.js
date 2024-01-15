function msgsToBox() {
    let letter1 = document.querySelectorAll('input')[0].value;
    let letter2 = document.querySelectorAll('input')[1].value;
    let letter3 = document.querySelectorAll('input')[2].value;
    var concatLetter = [letter1 + " " + letter2 + " " + letter3]
    let board = document.querySelector('#msgCont');
    let newMsg = document.createElement('p');
    let mailbox = document.createElement('div');

    mailbox.id = "mailBoxes";
    newMsg.id = "letters";

    newMsg.innerText = concatLetter;
    mailbox.appendChild(newMsg);
    board.appendChild(mailbox)

    reset();

    function reset() {
        document.querySelectorAll('input')[0].value = "";
        document.querySelectorAll('input')[1].value = "";
        document.querySelectorAll('input')[2].value = "";
    } 
}