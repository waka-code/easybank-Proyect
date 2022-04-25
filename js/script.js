
    let close= document.getElementById("Close");
    let abrir= document.getElementById("btn1");
    let enviar= document.getElementById("btnModal");
    let requestModal= document.getElementById("RequestModal");
    let modal=document.getElementById("modal");

    abrir.addEventListener("click",function(e){
    e.preventDefault();
    requestModal.style.visibility="visible";
    modal.classList.toggle("modalClose");
})

    close.addEventListener("click",function(){
    modal.classList.toggle("modalClose");

    setTimeout(function(){
        requestModal.style.visibility="hidden";
    },600)
})









