/*

Mira tú la mamarracha jodecodeando a su gusto y sabor

function msgToBox() {
    let letter1 = document.querySelectorAll('input')[0].value;
    let letter2 = document.querySelectorAll('input')[1].value;
    let letter3 = document.querySelectorAll('input')[2].value;
    let board = document.querySelector('#msgCont');
    let newMsg1 = document.createElement('p');
    let newMsg2 = document.createElement('p');
    let newMsg3 = document.createElement('p');
    let mailbox1 = document.createElement('div');
    let mailbox2 = document.createElement('div');
    let mailbox3 = document.createElement('div');


    mailbox1.id = "mailBox";
    mailbox2.id = "mailBoxx";
    mailbox3.id = "mailBoxxx";
    newMsg1.id = "letters";
    newMsg2.id = "letterss";
    newMsg3.id = "lettersss";

    newMsg1.innerText = letter1;
    mailbox1.appendChild(newMsg1);
    board.appendChild(mailbox1);

    newMsg2.innerText = letter2;
    mailbox2.appendChild(newMsg2);
    board.appendChild(mailbox2);

    newMsg3.innerText = letter3;
    mailbox3.appendChild(newMsg3);
    board.appendChild(mailbox3);

    reset();

    function reset() {
        document.querySelectorAll('input')[0].value = "";
        document.querySelectorAll('input')[1].value = "";
        document.querySelectorAll('input')[2].value = "";
    } 
}
*/

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