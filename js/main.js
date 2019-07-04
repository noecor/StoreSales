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

const qtySoldByPiece = component => {
    let totalSales = []
    store.sales.forEach(({pieces}) => pieces.forEach (e => totalSales.push(e)))
    const totalSoldComponents = totalSales.filter(e=>e===component).length
    return totalSoldComponents
}
// imprimo respuesta para dos componentes:
console.log(qtySoldByPiece("Monitor ASC 543"));
console.log(qtySoldByPiece("Monitor GPRS 3000"));

//6. componenteMasVendido() = mostSoldPiece. Calcula cuál fue el componente más vendido.

const mostSoldPiece = () =>{
    let soldComponent = []
    let nameComponent
    store.prices.forEach(e => {
        soldComponent.push(qtySoldByPiece(e.piece))
        mostSoldComponent = Math.max.apply(null, soldComponent)
        if(qtySoldByPiece(e.piece) === mostSoldComponent){
        nameComponent = e.piece
        }
    })
    return nameComponent
    }
    console.log(mostSoldPiece()); // Monitor GPRS 3000 ó Motherboard ASUS 1200

  


//7. huboVentas(mes, anio) = areThereSales. Indica si hubo ventas en un mes determinado.

const areThereSales = (month, year) =>{
    return salesMonth (month, year) > 0;
}
    console.log ('hubo ventas?:', areThereSales (3,2019));
    for ( let index = 0; index < localStorage.sales.length; index++){
        localStorage.sales[index].store = 'Centro'
    }
    console.log (store.sales)
    store.sales.forEach (sold => {
        sold.store ='Centro';
    })
    console.log(store.sales)

const monthSales = (month, year) => {
    let sumMonth = 0
    for (let index = 0; index < local.sales.length; index++){
        let components = local.sales[index].components
        if (store.sales[index].date.getMonth() + 1 == month && franchise.sales[index].date.getFullYear() == year){
            totalMonth = totalMonth + machinePrice(components)
        }
    }
    return sumMonth
}
console.log (salesMonth (1,2019));

// const salesMonth = (month, year) => {
//     let sumMonth = 0
//     for (let index = 0; index < franchise.sales.length; index++) {
//         let components = franchise.sales[index].components
//         if (franchise.sales[index].date.getMonth() + 1 == month && franchise.sales[index].date.getFullYear() == year) {
//             sumMonth = sumMonth + machinePrice(components)
//         }
    
//     }
//     return sumMonth
//     }
//     console.log(salesMonth(1, 2019)); // 1250


//     let dates = []
//     store.sales.forEach(({saleDate}))  saleDate.filter(e => dates.push)
// }
    //- .map de el atributo del objeto "new date", guardar la info y 

//1-g

// const wereThereSales = (month, year) => {
//     return salesMonth(month, year) > 0;
//     }
//     console.log('hubo ventas?:' , wereThereSales(3, 2019));
//     for (let index = 0; index < franchise.sales.length; index++) {
//       franchise.sales[index].sucursal = 'Centro'
//   }
//   console.log(franchise.sales)
//   franchise.sales.forEach(sold => {
//     sold.branch = 'Centro';
//   });
//   console.log(franchise.sales);


//Intentos fallidos:

  //store.sales.forEach(({pieces})) => pieces.filter((e, i) => pieces.indexOf(e) === i)
    // let totalSales = []
    // store.sales.forEach(({pieces}) => pieces.forEach (e => totalSales.push(e)))
    // let salesByPiece = component => totalSales.filter(item => item===component).length

    // let mostSold = Math.max (...salesByPiece)
    // console.log(mostSold)
    // return mostSold
//}
//     const qtySoldByPiece = () => {
//         store.sales.forEach (e => {
//             let piece = sales.find (e => store.sales.pieces)
//             console.log (e)
//         })
// }

    //let mostSoldPiece = Math.max(...totalSales)

    
    // let mostSoldPiece = totalSales.math.maxOftotalSales
    // console.log(getMaxOfArray)

    // function getMaxOfArray(totalSales){
    // return Math.maxOftotalSales
    // console.log(getMaxOfArray)

// let mostSoldPiece = () =>{
//     get maxOftotalSales.
// }

//    let algo = qtySoldByPiece("Monitor GPRS 3000")
// return mostSoldPiece, algo

// let bestSeller = salesList => {
//     const salesByComponent = salesList.map(({item})=>qtySoldByPiece(item))
//     const bestNumber = Math.max(...salesByComponent)
//     let bestSellerList =[]
//     data.prices.map(({item})=> qtySoldByPiece(item)>= bestNumber ? bestSellerList.push(item) :null)
//     return bestSellerList
//     }

// //NEW

//let bestSeller = salesList => {
//     const salesByComponent = salesList.map(({item})=>{return {item:item, sales:timesSold(item)}})
    
//     const bestNumber = Math.max(...salesByComponent.map(({sales})=>sales).flat())
//     const bestSellerList = salesByComponent.filter(({sales})=> sales>= bestNumber).map(({item})=>item).flat()
//     return bestSellerList
//    }

//Ejercicio
var playlist = ["Concrete and Gold", "The Line", "Sunday Rain", "Happy Ever After (Zero Hour)", "Arrows", "Dirty Water", "La Dee Da", "The Sky Is a Neighborhood", "Make It Right", "Run", "T-Shirt"];
playlist.forEach(function (value) {
    console.log(value);
  });