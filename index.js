function sendEmail() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    Email.send({
	Host: "smtp.gmail.com",
	Username : "ms8704840@gmail.com",
	Password : "helloWORLD2020",
	To : 'catchphilippines@gmail.com',
	From : "ms8704840@gmail.com",
	Subject : "Client - " + name,
	Body : message + "<br/><br/>Email: " + email,
	}).then(
		msg => alert("mail sent successfully")
    );

    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('message').value = "";
}