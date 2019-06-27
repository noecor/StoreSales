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


// crea las listas  wsz1xw1xde valores para crear los selects de vendedora y sucursal
// const {sellers: sellersList} = store;
// const {stores: storesList} = store;
// // const [{sellers : sellersList},{stores : storesList}] = store;
// var storeProperties = Object.keys(store)
// console.log(storeProperties)
// let selectContent;


// crea los selects de la sección que define vendedora y sucursal
// const setSelects = () => {
//     storeProperties.forEach (e => {
//     if (e === 'sellers' || e === "stores") {
//         let container = document.getElementById('primarySelects')
//         let select = document.createElement('select')
//         select.id = e
//         container.appendChild(select)
//         selectContent = store[e];
//         console.log(selectContent)
//         debugger;
//         fillSelects(selectContent,select)
//     } else (e === "pieces");{
//         let container = document.getElementById('pieceSelect')
//         let select = document.createElement('select')
//         select.id = e
//         container.appendChild(select)
//         selectContent = store[e]
//         fillSelects(selectContent,select)
//     }
//     // let select = document.createElement('select')
//     // select.id = e
//     // container.appendChild(select)
//     // fillSelect(e)
//     })
// }
//-----------------------------------------------------------------
// const fillSelects = (list,select) => {
//     debugger;
//     list.forEach(e => {
//         let selectToFill = document.getElementById(e.type)
//         if (selectToFill.childElementCount === 0) {
//             let placeholder = { name: `seleccione ${e.type}`, id: '' }
//             selectToFill.appendChild(createOption(placeholder))
//         }
//         select.appendChild(createOption(e))
//     })
// }

// const createOption = elem => {
//     let option = document.createElement('option')
//     option.innerText = elem.name
//     option.value = elem.id
//     return option
// }

//2. cantidadVentasComponente(componente) = qtySoldByPiece. Calcula la cantidad de Ventas por Componente.
//     const qtySoldByPiece = () => {
//         store.sales.forEach (e => {
//             let piece = sales.find (e => store.sales.pieces)
//             console.log (e)
//         })
// }
let totalSales = []
const qtySoldByPiece = component => {
    let totalSales = []
    store.sales.forEach(({pieces}) => pieces.forEach (e => totalSales.push(e)))
    const totalComponent = totalSales.filter(e=>e===component).length
    return totalComponent
}
// imprimo respuesta para dos componentes:
console.log(qtySoldByPiece("Monitor ASC 543"));
console.log(qtySoldByPiece("Monitor GPRS 3000"));



//6. componenteMasVendido() = mostSoldPiece. Calcula cuál fue el componente más vendido.

const mostSoldPiece = () =>{
    totalSales

}
