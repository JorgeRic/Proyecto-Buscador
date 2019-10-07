'use stric'

const autos = [
	{
		marca: 'BMW',
		modelo: 'Serie 3',
		year: 2012,
		precio: 30000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ marca: 'Audi', modelo: 'A4', year: 2018, precio: 40000, puertas: 4, color: 'Negro', transmision: 'automatico' },
	{
		marca: 'Ford',
		modelo: 'Mustang',
		year: 2015,
		precio: 20000,
		puertas: 2,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ marca: 'Audi', modelo: 'A6', year: 2010, precio: 35000, puertas: 4, color: 'Negro', transmision: 'automatico' },
	{
		marca: 'BMW',
		modelo: 'Serie 5',
		year: 2016,
		precio: 70000,
		puertas: 4,
		color: 'Rojo',
		transmision: 'automatico'
	},
	{
		marca: 'Mercedes Benz',
		modelo: 'Clase C',
		year: 2015,
		precio: 25000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{
		marca: 'Chevrolet',
		modelo: 'Camaro',
		year: 2018,
		precio: 60000,
		puertas: 2,
		color: 'Rojo',
		transmision: 'manual'
	},
	{ marca: 'Ford', modelo: 'Mustang', year: 2019, precio: 80000, puertas: 2, color: 'Rojo', transmision: 'manual' },
	{
		marca: 'Dodge',
		modelo: 'Challenger',
		year: 2017,
		precio: 40000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ marca: 'Audi', modelo: 'A3', year: 2017, precio: 55000, puertas: 2, color: 'Negro', transmision: 'manual' },
	{
		marca: 'Dodge',
		modelo: 'Challenger',
		year: 2012,
		precio: 25000,
		puertas: 2,
		color: 'Rojo',
		transmision: 'manual'
	},
	{
		marca: 'Mercedes Benz',
		modelo: 'Clase C',
		year: 2018,
		precio: 45000,
		puertas: 4,
		color: 'Azul',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 5',
		year: 2019,
		precio: 90000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ marca: 'Ford', modelo: 'Mustang', year: 2017, precio: 60000, puertas: 2, color: 'Negro', transmision: 'manual' },
	{
		marca: 'Dodge',
		modelo: 'Challenger',
		year: 2015,
		precio: 35000,
		puertas: 2,
		color: 'Azul',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 3',
		year: 2018,
		precio: 50000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 5',
		year: 2017,
		precio: 80000,
		puertas: 4,
		color: 'Negro',
		transmision: 'automatico'
	},
	{
		marca: 'Mercedes Benz',
		modelo: 'Clase C',
		year: 2018,
		precio: 40000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ marca: 'Audi', modelo: 'A4', year: 2016, precio: 30000, puertas: 4, color: 'Azul', transmision: 'automatico' }
];


const years = document.createElement('option');
const  max = new Date().getFullYear();
let  min = max - 10;

for(let i = max; i >  min; i--) {
    let option =  document.createElement('option');
    option.value = i;
    option.innerText = i;
    document.querySelector('#year').appendChild(option);
}

let datosBusqueda = {
    marca : '',
    year: '',
    minimo : '',
    maximo: '',
    puertas: '',
    transmision:'',
    color:''
}

document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos);
});

const marca = document.querySelector('#marca')
marca.addEventListener('input', (e) =>{
    datosBusqueda.marca = e.target.value;

    filtrarAuto();
})

const year = document.querySelector('#year')
year.addEventListener('input', (e) =>{
    datosBusqueda.year = Number(e.target.value);

    filtrarAuto();
})
const minimo = document.querySelector('#minimo')
minimo.addEventListener('input', (e) =>{
    datosBusqueda.minimo = Number(e.target.value);

    filtrarAuto();
})
const maximo = document.querySelector('#maximo')
maximo.addEventListener('input', (e) =>{
    datosBusqueda.maximo = Number(e.target.value);

    filtrarAuto();
})
const puertas = document.querySelector('#puertas')
puertas.addEventListener('input', (e) =>{
    datosBusqueda.puertas = Number(e.target.value);

    filtrarAuto();
})
const transmision = document.querySelector('#transmision')
transmision.addEventListener('input', (e) =>{
    datosBusqueda.transmision = e.target.value;

    filtrarAuto();
})
const color = document.querySelector('#color')
color.addEventListener('input', (e) =>{
    datosBusqueda.color = e.target.value;

    filtrarAuto();
})

function limpiarHTML() {
    const contenedor = document.querySelector('#resultado');
    while(contenedor.firstChild) {
        contenedor.removeChild(contenedor.firstChild);   
    }
}

function mostrarAutos(autos){
    
    limpiarHTML();

    const contenedor = document.querySelector('#resultado');

    autos.forEach(auto => {
        const autoHTML = document.createElement('p');
        autoHTML.innerHTML += `
            <p>${auto.marca} ${auto.modelo} - ${auto.year} - ${auto.puertas} Puertas - Transmisión: ${auto.transmision} - Precio: ${auto.precio} - Color: ${auto.color}</p>
        `;
        contenedor.appendChild(autoHTML);
    })
}

function noResultado() {
    limpiarHTML();

    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta', 'error');
    noResultado.appendChild(document.createTextNode('No hay Resultados'));
    document.querySelector('#resultado').appendChild(noResultado);
}

function filtrarAuto(){
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor)
    console.log(resultado)
    if(resultado.length){
        mostrarAutos(resultado)
    }else{
        noResultado();
    }
}

function filtrarMarca(auto){
    
    if(datosBusqueda.marca){
        return auto.marca === datosBusqueda.marca
    }else{
        return auto
    }
}
function filtrarYear(auto){
    
    if(datosBusqueda.year){
        return auto.year === datosBusqueda.year
    }else{
        return auto
    }
}
function filtrarMinimo(auto){
    
    if(datosBusqueda.minimo){
        return auto.precio >= datosBusqueda.minimo
    }else{
        return auto
    }
}
function filtrarMaximo(auto){
    
    if(datosBusqueda.maximo){
        return auto.precio >= datosBusqueda.maximo
    }else{
        return auto
    }
}
function filtrarPuertas(auto){
    
    if(datosBusqueda.puertas){
        return auto.puertas === datosBusqueda.puertas
    }else{
        return auto
    }
}
function filtrarTransmision(auto){
    
    if(datosBusqueda.transmision){
        return auto.transmision === datosBusqueda.transmision
    }else{
        return auto
    }
}
function filtrarColor(auto){
    
    if(datosBusqueda.color){
        return auto.color === datosBusqueda.color
    }else{
        return auto
    }
}

