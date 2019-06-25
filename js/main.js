const store = {
    sellers: ["Ada", "Grace", "Hedy", "Sheryl"],
    sales: [
        // tener en cuenta que Date guarda los meses del 0 (enero) al 11 (diciembre)
        { saleDate: new Date(2019, 1, 4), seller: "Grace", pieces: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], store: 'Centro' },
        { saleDate: new Date(2019, 0, 1), seller: "Ada", pieces: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], store: 'Centro' },
        { saleDate: new Date(2019, 0, 2), seller: "Grace", pieces: ["Monitor ASC 543", "Motherboard MZI"], store: 'Centro' },
        { saleDate: new Date(2019, 0, 10), seller: "Ada", pieces: ["Monitor ASC 543", "Motherboard ASUS 1200"], store: 'Centro' },
        { saleDate: new Date(2019, 0, 12), seller: "Grace", pieces: ["Monitor GPRS 3000", "Motherboard ASUS 1200"], store: 'Centro' },
        { saleDate: new Date(2019, 1, 12), seller: "Hedy", pieces: ["Monitor GPRS 3000", "HDD Toshiba"], store: 'Centro' }, 
        { saleDate: new Date(2019, 1, 24), seller: "Shery", pieces: ["Motherboard ASUS 1200", "HDD Western Digital"], store: 'Caballito' },
        { saleDate: new Date(2019, 1, 1), seller: "Ada", pieces: ["Motherboard MZI", "RAM Kingston Fury"], store: 'Centro' },
        { saleDate: new Date(2019, 1, 11), seller: "Grace", pieces: ["Monitor ASC 543", "RAM Kingston"], store: 'Caballito' },
        { saleDate: new Date(2019, 1, 15), seller: "Ada", pieces: ["Motherboard ASUS 1200", "RAM Kingston Fury"], store: 'Centro' },
        { saleDate: new Date(2019, 1, 12), seller: "Hedy", pieces: ["Motherboard ASUS 1500", "HDD Toshiba"], store: 'Caballito' },
        { saleDate: new Date(2019, 1, 21), seller: "Grace", pieces: ["Motherboard MZI", "RAM Kingston"], store: 'Centro' },
        { saleDate: new Date(2019, 1, 8), seller: "Sheryl", pieces: ["Monitor ASC 543", "HDD Western Digital"], store: 'Centro' },
        { saleDate: new Date(2019, 1, 16), seller: "Sheryl", pieces: ["Monitor GPRS 3000", "RAM Kingston Fury"], store: 'Centro' },
        { saleDate: new Date(2019, 1, 27), seller: "Hedy", pieces: ["Motherboard ASUS 1200", "HDD Toshiba"], store: 'Caballito' },
        { saleDate: new Date(2019, 1, 22), seller: "Grace", pieces: ["Monitor ASC 543", "HDD Western Digital"], store: 'Centro' },
        { saleDate: new Date(2019, 1, 5), seller: "Ada", pieces: ["Motherboard ASUS 1500", "RAM Kingston"], store: 'Centro' },
        { saleDate: new Date(2019, 1, 1), seller: "Grace", pieces: ["Motherboard MZI", "HDD Western Digital"], store: 'Centro' },
        { saleDate: new Date(2019, 1, 7), seller: "Sheryl", pieces: ["Monitor GPRS 3000", "RAM Kingston"], store: 'Caballito' },
        { saleDate: new Date(2019, 1, 14), seller: "Ada", pieces: ["Motherboard ASUS 1200", "HDD Toshiba"], store: 'Centro' },
    ],
    prices: [
        { piece: "Monitor GPRS 3000", price: 200 },
        { piece: "Motherboard ASUS 1500", price: 120 },
        { piece: "Monitor ASC 543", price: 250 },
        { piece: "Motherboard ASUS 1200", price: 100 },
        { piece: "Motherboard MZI", price: 30 },
        { piece: "HDD Toshiba", price: 90 },
        { piece: "HDD Western Digital", price: 75 },
        { piece: "RAM Kingston", price: 110 },
        { piece: "RAM Kingston Fury", price: 230 }
    ],
    stores: ['Centro','Caballito']
    };

// creo un array con las propiedades del objeto donde guardo la información de la tienda
var storeProperties = Object.keys(store)
// hago la variable de contenido de los selects global para que esté disponible para todas las instancias
let selectContent;

// crea los selects de la sección que define vendedora y sucursal y componentes
const setSelects = () => {
    storeProperties.forEach (e => {
        if (e === 'sellers' || e === "stores") {
            let container = document.getElementById('primarySelects')
            let select = document.createElement('select')
            select.id = e
            container.appendChild(select)
            selectContent = store[e];
            fillSelects(selectContent,select)
        } else if (e === "prices"){
            let container = document.getElementById('pieceSelect')
            let select = document.createElement('select')
            select.id = 'pieces'
            container.appendChild(select)
            let selectContent = store[e].map(item => item.piece)
            fillSelects(selectContent,select)
        }
    })
}
// rellena los selects
const fillSelects = (list,select) => {
    list.forEach(e => {
        // let selectToFill = document.getElementById(e)
        if (select.childElementCount === 0) {
            let placeholder = { name: `seleccione ${select.id}`, id: '' }
            select.appendChild(createOption(placeholder))
        }
        let optionItem = {name: e, id:list.indexOf(e) }
        select.appendChild(createOption(optionItem))
    })
}

// crea las opciones de cada select
const createOption = elem => {
    let option = document.createElement('option')
    option.innerText = elem.name
    option.value = elem.id
    return option
}

const addBtn = () => {
    let container = document.getElementById('pieceSelect')
    let btn = document.createElement('button')
    btn.innerText = 'Agregar Pieza'
    btn.id = 'addPiece'
    btn.onclick = 'addPiece()'
    container.appendChild(btn)
}

const setElements = () => {
    setSelects();
    addBtn();
}

const showActualSale = () => {

}

const addPiece = () => {
    let selectedSeller = document.getElementById('sellers')
    let selectedStore = document.getElementById('stores')
    let selectedPiece = document.getElementById('pieces')

}