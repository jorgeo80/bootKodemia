// Ejercicio 1 - Clase 13

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <meta http-equiv="X-UA-Compatible" content="ie=edge">
//     <title>Document</title>
//     <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
// </head>
// <body>
//     <div id="event-sample" class="bg-primary p-3 w-50 m-3">Lo que sea</div>
//     <div class="container">
//       <div class="row">
//         <div class="col-6">
//           <form id="submit-koder" action="" class="p-3 border border-secondary">
//             <div class="form-group">
//               <label for="">Koder name</label>
//               <input id="koder-name" type="text" class="form-control" value="">
//             </div>
//             <div class="form-group">
//               <label for="">Koder email</label>
//               <input id="koder-email" type="text" class="form-control" onblur="validateEmptyInput()" onfocus="clearError()">
//             </div>
//             <div class="form-group">
//               <label for="">Koder address</label>
//               <input id="koder-address" type="text" class="form-control">
//             </div>
//             <div id="add-koder" class="btn btn-primary">Agregar Koder</div>
//           </form>
//         </div>
//         <div class="col-6">
//           <div id="koders-wrapper">
// ​
//           </div>
//         </div>
//       </div>
//     </div>
    
  
//     <script
//       src="https://code.jquery.com/jquery-3.4.1.js"
//       integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU="
//       crossorigin="anonymous"></script>
//     <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
//     <script src="js/main.js"></script>
// </body>
// </html>


//////////////////////////////////////////////////////////////////////
var kodersArray = [];
/* document.getElementById("koder-name")
    .addEventListener('keyup', (event) => {
        let inputValue = event.target.value;
        console.log(inputValue)
    })
document.getElementById("koder-email")
    .addEventListener('keyup', (event) => {
        let inputValue = event.target.value;
        console.log(inputValue)
    }) */
document.querySelectorAll(".form-control").forEach((element) => {
    element.addEventListener('keyup', (event) => {
        let inputValue = event.target.value;
        console.log(inputValue)
    }) 
})
const validateEmptyInput = () => {
    let koderMail = document.getElementById("koder-email").value;
    if (koderMail === "") {
        document.getElementById("koder-email").classList.add("alert-danger", "border-danger");
    } else {
        document.getElementById("koder-email").classList.remove("alert-danger", "border-danger");
    }
}
const clearError = () => {
    document.getElementById("koder-email").classList.remove("alert-danger", "border-danger");
    document.getElementById("koder-email").classList.add("alert-success", "border-success");
}
/*crear un boton que diga "agregar koder"*/
/*al darle clic debe tomar los datos de cada uno de los campos del formulario y crear un objeto llamado koderObject (koderName, koderEmail, koderAddress)*/
/*debe agregar el koderObject a kodersArray*/
/*debe crear una card por cada koder registrado*/
const buildCard = (koderName, koderAddress, koderEmail) => {
    return (
      `
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${koderName}</h5>
          <p class="card-text mb-2 text-muted">${koderAddress}</p>
          <p class="card-text">${koderEmail}</p>
        </div>
      </div>
      
      `
    )
  }
const buildCards = (cards, parent) => {
    var accCards = cards.reduce((acc, {koderName, koderEmail, koderAddress})=> {
      console.log(acc)
      return acc + buildCard(koderName, koderEmail, koderAddress) 
    }, '')
    document.getElementById(parent).innerHTML = accCards
  }
  
const addKoder = () => {
    let koderName = document.getElementById("koder-name").value;
    let koderEmail = document.getElementById("koder-email").value;
    let koderAddress = document.getElementById("koder-address").value;
    let koderObject = {koderName, koderEmail, koderAddress}
    kodersArray.push(koderObject)
    buildCards(kodersArray,"koders-wrapper")
}
document.getElementById("add-koder").addEventListener("click",addKoder)