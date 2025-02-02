(function() {
    //Public key
  emailjs.init("0oXJhcMytt-yOgDdT");
})();
document.getElementById('contact-form').addEventListener('submit', function(event) {
event.preventDefault();
var name = document.getElementById("name").value;
var email = document.getElementById("email").value;
var message = document.getElementById("message").value;

var templateParams = {
from_name: name,
from_email: email,
message: message,
user_name:" Email Js demo"
};
console.log(templateParams)

//service key, template id
emailjs.send("service_c0h0l9d","template_7x85esh", templateParams)
.then(function(response) {
console.log('SUCCESS!', response.status, response.text);
alert('Message sent successfully!');
}, function(error) {
console.log('FAILED...', error);
alert('Message failed to send.');
});

});