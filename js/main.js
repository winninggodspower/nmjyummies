const peanutPrice = 250;
const UserEmailAdress = 'winninggodspower@gmail.com';

const addBtn = document.getElementById('add-product');
const redBtn = document.getElementById('delete-product');
const qtn = document.getElementById('product-quantity');
const price = document.getElementById('price');


addBtn.addEventListener('click', ()=>{
    qtn.innerHTML = new Number(qtn.innerText) + 1
    calculatePrice()
})

redBtn.addEventListener('click', ()=>{
    if(new Number(qtn.innerText) > 1){
        qtn.innerHTML = new Number(qtn.innerText) - 1
        calculatePrice()
    }
})

calculatePrice = ()=>{
    price.innerHTML = peanutPrice * new Number(qtn.innerHTML)
}

// code for validating phone number

const abstractapi_key = 'a57297c5b5d24a5ba1293cdcc98545b8';
const phoneInput = document.getElementById('phoneInput');

function validateForm(res) {
    if (!res.valid) {
        
        phoneInput.classList.add('is-invalid');
        
    } else {

        phoneInput.classList.remove('is-invalid');
        sendEmail(constructEmailbody());
        alert("Order submited you'll receive a call in a couple of hours")
    
    }
}

async function httpGetAsync(e) {
    e.preventDefault()
    console.log(e);
    await $.ajax({
        url: `https://phonevalidation.abstractapi.com/v1/?api_key=${abstractapi_key}&phone=234${phoneInput.value}`,
        type: 'GET',
        dataType: 'json', // added data type
        success: function(res) {
            console.log(res);
            validateForm(res)
        },
    });
}

document.getElementById('order-form').addEventListener('submit', httpGetAsync);


//   code for sending the email
const mainslurpApi_kei = 'a721588980e34fb723e6cbf7639d5ebd5eca3046f400921102cdea3520e9ada9'

let constructEmailbody = ()=>{
    let formData = document.getElementById('order-form').elements
    console.log(formData);
    return `
    Location: ${formData['location'].value},\n
    Phonenumber: ${formData['phonenumber'].value}, \n
    Other Details: ${formData['other-details'].value}, \n
    Number Of Sacs Needed: ${qtn.innerText}
    `
}

async function sendEmail(emailBody) {
	await Email.send({
            Host: "smtp.elasticemail.com",
            Username : UserEmailAdress,
            Password : "EEA13A26C70AA46789577E448E1A74364FA5",
            To : UserEmailAdress,
            From :UserEmailAdress,
            Subject : "An Order From Nmjummies Website",
            Body : emailBody,
            }).then(
                message => alert("mail sent successfully")
        );
    alert('Email sent');
}