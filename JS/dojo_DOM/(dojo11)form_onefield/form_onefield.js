function msgToBox() {
    let letter = document.querySelectorAll('input')[0].value;
    let board = document.querySelector('#msgCont');
    let newMsg = document.createElement('p');
    let mailbox = document.createElement('div');

    mailbox.id = "mailBoxes";
    newMsg.id = "letters";

    newMsg.innerText = letter;
    mailbox.appendChild(newMsg);
    board.appendChild(mailbox)

    reset();

    function reset() {
        document.querySelectorAll('input')[0].value = "";
    } 
}