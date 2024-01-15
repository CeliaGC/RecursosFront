function underlineAlt() {
    let chameleon = document.getElementById('chameleon');
    if(chameleon.style.textDecoration != 'underline'){
        chameleon.style.textDecoration = 'underline';
    }
    else{
        chameleon.style.textDecoration = 'none'
    }
    
}
/*
    if()
    document.getElementById('chameleon').style.textDecoration = 'underline';
}


window.addEventListener("load",function(){
    var flechaWork=document.getElementById('flecha_work');
    var work=document.getElementById("work2");
    flechaWork.addEventListener("click",function(){
        if(work.style.left=="50%"){
            work.style.left="-60%";
            work.style.transition = "all 1.3s";
        }
        else{
            work.style.left="50%";
            work.style.transition = "all 1.3s";
        }
    })
})
*/