<script type="text/javascript">
	var a=1;
	var b="Fernando"; //
	
	console.log( a );
	console.warn( a );
	console.error( a );
	console.info( a );
	
	console.log( a + a );
	
</script>

var num = 10;
var str = "texto";
var bol = true;
var und = undefined;
var nul = null;

var obj = {
  numero: 10,
  texto: "Nuevo texto",
  objHijo {
  numero2: 20,
  texto: "Nuevo texto"
}
};

console.log( obj );

var a = 10;
var b = a;
console.log( "a: " , a );
console.log( "b: " , b );

var c = {
	nombre:"Maria"
};
var d = c;
console.log( "c: " , c );
console.log( "d: " , d );

c.nombre="Juana";

console.log( "c: " , c );
console.log( "d: " , d );

d.nombre="Pedro";

console.log( "c: " , c );
console.log( "d: " , d );


var persona = {
	nombre: "Juana",
	apellido: "Herrera",
	edad: 25,
	direccion: {
		pais: "Costa Rica",
		ciudad: "San Jose",
		edificio: {
			nombre: "Edificio 525",
			telefono: "2222-3333"
		}
	}
};

console.log( persona.nombre );
console.log( persona.direccion.pais );

persona.direccion.zipcode = 11101;

console.log( persona.direccion );
console.log( persona.direccion.zipcode );

console.log( persona.direccion.edificio.telefono );

var edificio = 	persona.direccion.edificio;

edificio.nopiso = "8vo piso";

console.log( persona );

console.log( persona["direccion"]["pais"] );

var campo = "edad";
console.log( persona[campo] );

// Funciones
function primeraFuncion(){
	var a = 20;
	console.log( a );
};
primeraFuncion();


function primeraFuncion(){
	console.log( "Invocada" );
};

//Graba el valor de la funcion
var miFuncion = primeraFuncion();
//Graba la funcion en el nuevo objeto
var miFuncion = primeraFuncion;

// Buena practica es colocar todas las funciones al principio del archivo

function imprimir(nombre){
	console.log(nombre);
};

imprimir("Juan");

function imprimir(nombre,apellido){
	console.log(nombre+" "+apellido);
};

imprimir("Juan","Perez");


function imprimir(nombre,apellido){
	if(apellido === undefined){
		apellido = "xxx";
	}
	console.log(nombre+" "+apellido);
};

imprimir("Juan");
// Juan xxx

function imprimir(nombre,apellido){
	apellido = apellido || "xxx";
	
	console.log(nombre+" "+apellido);
};

imprimir("Juan");
// Juan xxx


function imprimir(nombre){
	console.log(nombre);
};

imprimir({
	
	nombre:"Juan",
	apellido:"Padilla"
});
// Imprime solo el objeto

function imprimir(persona){
	console.log(persona.nombre+" "+persona.apellido);
};

imprimir({
	
	nombre:"Juan",
	apellido:"Padilla"
});
// Imprime Juan Padilla

var obj = {
	
	nombre:"Juan",
	apellido:"Padilla"
};

imprimir(obj);
// Imprime Juan Padilla

function imprimir(fn){
	fn();
};

var miFuncion = function(){console.log("miFuncion");};

imprimir(miFuncion);
// Imprime miFuncion


function obtenerAleatorio(){
	return Math.random();
};
// Regresa un aleatorio mas 10
console.log(obtenerAleatorio()+10);


function booleano(){
	if(obtenerAleatorio()>0.5){return TRUE}else{return FALSE};
};



function crearPersona(nombre,apellido){
	return{
		nombre: nombre,
		apellido: apellido
	}
};

var presona = crearPersona("Maria","Paz");

function crearFuncion(nombre){
	return function crearFuncion(){
		console.log("Me creo, "+nombre);
		return function(){
			console.log("Segunda Función");
		}
	
	}
};
/* Retorna lo siguiente:
	Me creo, Maria
	Segunda Función*/
var nuevaFuncion = crearFuncion();
var segundaFuncion = nuevaFuncion( persona.nombre);
segundaFuncion();

/* con el This entramos al objeto y corremos el metodo*/
var persona = {
	
	nombre: "Maria",
	apellido: "Dubon",
	imprimirNombre: function(){
		consolo.log(this.nombre + " " + this.apellido);
	}
	direccion: {
		pais: "Costa Rica",
		obtenerPais: function(){
			consolo.log("La direccion es en " this.pais);
		}
	}
};

// imprime Maria Dubon
persona.imprimirNombre();

persona.nombre="Andres";
// imprime Andres Dubon
persona.imprimirNombre();

// imprime "La direccion es en Costa Rica"
persona.direccion.obtenerPais();


var persona = {
	
	nombre: "Maria",
	apellido: "Dubon",
	imprimirNombre: function(){
		consolo.log(this.nombre + " " + this.apellido);
	}
	direccion: {
		pais: "Costa Rica",
		obtenerPais: function(){
			var self = this;
			var nuevaDireccion = function(){
				consolo.log(self);
				consolo.log("La direccion es en " self.pais);
				
			}
			
			nuevaDireccion();
		}
	}
};

/*  New   */
function Persona(nombre, apellido){
	this.nombre: nombre,
	this.apellido: apellido,
	this.edad: 30,
	
	this.imprimirPersona = function(){
		return this.nombre + " " + this.apellido + " ( " + this.edad + " )";
	}
};

var juan = new Persona("Juan","Mendoza");

console.log( juan.imprimirPersona() );


















































