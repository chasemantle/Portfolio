let emailElement = document.querySelector('#email');
let messageElement = document.querySelector('#message');


let submitButton = document.querySelector('#submit-button');
submitButton.addEventListener('click', function(e){
	e.preventDefault();

	let emailValue = emailElement.value;
	let messageValue = messageElement.value;

	if(emailValue.includes('@')) {
	//all good 
alert('Thank you for your message');
} 
else {
	//wrong email
	alert('oh no sleepy head wrong adico');
}

console.log('Email:', emailValue);
console.log('Message:', messageValue);
})