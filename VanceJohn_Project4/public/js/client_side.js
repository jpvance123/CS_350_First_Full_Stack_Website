let form = document.querySelector('form');


form.onsubmit = sendData;

function sendData(e){
  e.preventDefault();

  let formData = new FormData(form);

  let Params = {
    headers: {
      'Content-type': 'applications/json'
    },
    body: JSON.stringify({
      first_name: formData.get('fname'),
      last_name: formData.get('lname'),
      address: formData.get('faddy'),
      email: formData.get('femail'),
      phone: formData.get('fphone'),
    }),
    method: "POST"
  }

  fetch('https://intense-tundra-84541.herokuapp.com/visitor_form.html', Params)
  .then(response => response.json())
  .then(data => {

    if(data.success === "ok"){
      console.log('successful');
    } else {
      let error = document.querySelector('.error');

      error.innerHTML = "";

      data.errors.forEach(function(err) {
        error.innerHTML += `<li>${err.msg}</li>`;
      });
    }
  })
  .catch(err => console.log(err));
}
