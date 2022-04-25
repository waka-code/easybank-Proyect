/*footer */
let button = document.getElementById('button').value;
let buttonmod = document.getElementById('btnModal').value;

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
 

/*modal*/

  document.getElementById('formm')
  .addEventListener('submit', function(event) {
    event.preventDefault();
 
    buttonmod.value = 'Sending...';
 
    const serviceID = 'default_service';
    const templateID = 'template_2l1weck';
 
    emailjs.sendForm(serviceID, templateID, this)
     .then(() => {
      buttonmod.value = 'Send Email';
         Swal.fire(
           'Message sent!',
           'Click OK!',
           'success'
         )
     }, (err) => {
      buttonmod.value = 'Send Email';
       alert(JSON.stringify(err));
     });
     
     formm.reset();
 });
 
 
