const $form = document.querySelector('.correo')     //obteniendo datos del formulario
$form.addEventListener('submit', handlesubmit)
async function handlesubmit(event){                 //crear funcion asincrona para enviar datos del formulario
    event.preventDefault();
    const form = new FormData(this);
    const response = await fetch(this.action, {     //promesa para enviar y recibir una respuesta de la entrega del formulario
        method: this.method,
        body: form,
        headers: {
            'Accept':'aplication/json'
        } 
    })
    if (response.ok){
        this.reset();
        mailMessage();
        }
        else{
            alert('Lo siento algo inesperado ocurrió. Por favor, inteta contactarme por otro medio. Gracias')
        }
    }

function mailMessage (){
    document.querySelector('.mail-message').style.display='flex';
}

var btnReload = document.getElementById('mail-done');
btnReload.addEventListener('click', function(){
    location.reload()
}) 