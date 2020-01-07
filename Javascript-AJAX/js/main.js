// Ejercicio AJAX - Clase 14

var post = {
  "firstName": "Jorge",
  "lastName": "Camarillo",
  "age": 35,
  "pitch": true
}

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState === 4 && this.status === 200) {
  //console.log(/*this.response, */JSON.parse(this.response)/*, 'todo fine'*/)
  responseHandler(this.response)
  }
}

////////////////////////////////////////
//// El POST manda los datos a la base
// xhttp.open('POST', 'https://ajaxkode.firebaseio.com/koders.json')
// xhttp.send(JSON.stringify(post))
////////////////////////////////////////

////////////////////////////////////////
//// El GET regresa los datos del server
////////////////////////////////////////
 xhttp.open('GET', 'https://ajaxkode.firebaseio.com/koders.json')
 xhttp.send()

 var menu = [];

 const responseHandler = response => {

   const responseObj = JSON.parse(response)
   //const responseEntries = Object.entries(responseObj)
   //console.log(responseEntries)
  for (const prop in responseObj) {
    if (responseObj[prop]["firstName"] !== undefined){
      menu.push(responseObj[prop]["firstName"])
    }
  }    
    
    const buildMenu = (arr, parentSelector) => {
      let parent = document.getElementsByTagName(parentSelector)[0]; //Indice de la lista
      let children = arr.reduce((acc, cValue) => `${acc} <li>${cValue}</li>`, "");
      parent.innerHTML = children;
    };
    
    buildMenu(menu, "ul");
    
    var liNodes = document.getElementsByTagName("li");
    
     for (let i = 0; i < liNodes.length; i++) {
       liNodes[i].addEventListener("click", function() {
        removeStyle()
        liNodes[i].style.color = "red";
         console.log(`click en elemento ${i + 1}`);
       });
      }  
    
     const removeStyle = function() {
       for (let i = 0; i < liNodes.length; i++) {
         liNodes[i].style.color = "green";
         }
    }
    
}


////////////////////////////////////////

////////////////////////////////////////
// PUT actualiza todo el registro
////////////////////////////////////////
// xhttp.open('PUT', 'https://ajaxkode.firebaseio.com/koders/-LwWBB1Qo5J1nzJcbq1r.json')
// xhttp.send(JSON.stringify({
//    "test": "El Kevin"
//  }))
////////////////////////////////////////

////////////////////////////////////////
// PATCH solo es actualización parcial
////////////////////////////////////////
// xhttp.open('PATCH', 'https://ajaxkode.firebaseio.com/koders/-LwWBGmlj0nfD5h6ZQI2.json')
// xhttp.send(JSON.stringify({
//   "test": "El Kevin"
// }))
////////////////////////////////////////

////////////////////////////////////////
// DELETE borra los datos
////////////////////////////////////////
// xhttp.open('DELETE', 'https://ajaxkode.firebaseio.com/koders/-LwWBKRj7DxgcqtpsP8E.json')
// xhttp.send()
////////////////////////////////////////


const sum = (a, b) => a + b

console.log(sum(1, 2))

const calculadora = (a, b, callback) => {
  return callback(a, b)
}

console.log(calculadora(1, 2, sum))




