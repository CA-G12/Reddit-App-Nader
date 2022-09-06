const form = document.querySelector("#form");
const password = document.querySelector('#password');
const email = document.querySelector('#email');
const submit = document.querySelector('#submit');

submit.addEventListener('click', () => {
    e.preventDefault();
    fetch('/login',{
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({
            email: email.value,
            password: password.value
        }),
       
    }).then(data => data.json()).then( result =>  {
        if(result.msg){
            error(result.msg)
        }
        else{
            success();
        }
    })
});

const error = (error) =>{
    msgContainer.textContent = error;
 }
 
 const success = () => {
     window.location.href = '/homePage';
 }