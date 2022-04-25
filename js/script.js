
    let close= document.getElementById("Close");
    let abrir= document.getElementById("btn1");
    let campo= document.getElementById("Mail").value;
                document.getElementById("name").value;
                document.getElementById("textarea").value;
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

enviar.addEventListener("click",function(){
    if(campo === ""){
        document.getElementById("name").focus();
    }
})








