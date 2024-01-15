

function hideNShow() {
let chameleon = document.getElementById('chameleon');
if(chameleon.textContent != ''){
    chameleon.textContent = '';
}
else{
    chameleon.textContent = "I'm gonna hide. Then I'll show up";
}
}


