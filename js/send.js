let button = document.getElementById('button').value;
let noVacio = document.getElementById('fromName');

if(noVacio === ""){
  document.getElementById("fromName").focus();
  /*solucionar error */
} else{
  document.getElementById('form')
  .addEventListener('submit', function(event) {
    event.preventDefault();
 
    button.value = 'Sending...';
 
    const serviceID = 'default_service';
    const templateID = 'template_vdd28bh';
 
    emailjs.sendForm(serviceID, templateID, this)
     .then(() => {
         button.value = 'Send Email';
         Swal.fire(
           'Message sent!',
           'Click OK!',
           'success'
         )
     }, (err) => {
         button.value = 'Send Email';
       alert(JSON.stringify(err));
     });
     
  form.reset();
 });
 
}