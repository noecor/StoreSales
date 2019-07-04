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
let selectContent, newSale;
const monthsNames = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','aiciembre']
const weekDays = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado']
const piecesList = []
const {prices} = store

// crea los selects de la sección que define vendedora y sucursal y componentes
const setSelects = () => {
    storeProperties.forEach (e => {
        if (e === 'sellers' || e === "stores") {
            let container = document.getElementById('primarySelects')
            let select = document.createElement('select')
            select.id = e
            select.setAttribute('onchange',`setSaleElement(this,'saleTopLine')`)
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

// establezco en pantalla los elementos de la venta
const setSaleElement = (select,containerId) => {
    let selectedElement = select.options[select.value].text
    let container = document.getElementById(containerId)
    let saleElement = document.createElement('p')
    saleElement.setAttribute('id',`act${select.id}`)
    saleElement.innerText = selectedElement
    container.appendChild(saleElement)
}

const setSaleDate = () => {
    let actualDate = new Date()
    let container = document.getElementById('saleDate')
    container.innerHTML=''
    let date = document.createElement('p')
    date.innerText = `${weekDays[actualDate.getDay()]}, ${actualDate.getDate()} de ${monthsNames[actualDate.getMonth()]} de ${actualDate.getFullYear()}`
    container.appendChild(date)
}

// rellena los selects
const fillSelects = (list,select) => {
    list.forEach(e => {
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
    option.value = elem.id+1
    return option
}

// agregar el boton con el que se agregan las piezas a la venta
const addBtn = (containerElem,btnText,btnId,btnAttribute,btnFunction) => {
    let container = document.getElementById(containerElem)
    let btn = document.createElement('button')
    btn.innerText = btnText
    btn.id = btnId
    btn.setAttribute(btnAttribute,btnFunction)
    container.appendChild(btn)
}

const setElements = () => {
    setSelects();
    addBtn('pieceSelect','Agregar Pieza','addPiece','onclick','addPiece()');
    setSaleDate();
}

const newSaleTotalPrice = (piecesList) => {
    // debugger;
    let saleTotalPrice = 0
    piecesList.forEach(e => {
        saleTotalPrice += e.price
    })
    return saleTotalPrice   
}

const showPieceList = (rowContent) => {
    let container =document.getElementById('piecesDetails')
    container.innerHTML=''
    rowContent.forEach(e =>{
        let c1LineId = e.lineId
        let c2PieceDesc = e.piece
        let c3Price = e.price
        // let rowHtml = '<tr><td>${lineId}</td><td>${pieceDesc}</td><td>${linePrice}</td>'
        let row = document.createElement('tr')
        let lineIdCol = document.createElement('td')
        let pieceCol = document.createElement('td')
        let priceCol = document.createElement('td')
        lineIdCol.innerText=c1LineId
        pieceCol.innerText=c2PieceDesc
        priceCol.innerText=c3Price
        row.appendChild(lineIdCol)
        row.appendChild(pieceCol)
        row.appendChild(priceCol)       
        container.appendChild(row)
    })
    
}

const showSaleItems = () => {

    showPieceList(piecesList)
    let totalContainer = document.getElementById('saleTotal')
    totalContainer.innerHTML=''
    let totalPriceItem = document.createElement('p')
    totalPriceItem.innerText = `Precio Total de la Venta: ${newSaleTotalPrice(piecesList)}`
    totalContainer.appendChild(totalPriceItem)
    addBtn('saleTotal','Registrar Venta','btnAddSale','onclick','addSale()')
}

const findPrice = (list,elem) =>{
    let pieceToAdd = list.filter(thisPiece => (thisPiece.piece == elem))
    let price = pieceToAdd[0].price
    return price
}

const addPiece = () => {
    let sale = {lineId:'',piece:'',price:0 }
    let select = document.getElementById('pieces')
    let selectedPiece = select.options[select.value].text
    let id = piecesList.length
    sale.lineId = `00${++id}`
    sale.piece = selectedPiece
    sale.price = findPrice(prices,selectedPiece)    
    piecesList.push(sale)
    // console.log(piecesList)
    showSaleItems()   
}

const clearOptions = () => {
    let sellerSelect = document.getElementById('sellers')
    sellerSelect.value=0
}

const clearActualSale = () => {
    // let saleDetails = document.getElementById('piecesDetails')
    // saleDetails.innerHTML=''
    // let saleTotal = document.getElementById('saleTotal')
    // saleTotal.innerHTML=''
    // setSaleDate()
    location.reload()
}

const addSale = () => {    
    const actualSale = { saleDate: new Date(), seller:'', pieces: [], store: '' }
    let todayDate = new Date()
    let todayMonth = todayDate.getMonth()
    let todayYear = todayDate.getFullYear()
    let todayDay = todayDate.getDate()
    actualSale.seller = document.getElementById('actsellers').innerText
    actualSale.store = document.getElementById('actstores').innerText
    actualSale.saleDate = new Date (todayYear,todayMonth,todayDay)
    actualSale.pieces = piecesList.map(e => e.piece)
    store.sales.push(actualSale)
    console.log (store.sales)
    clearOptions()
    clearActualSale()
}


//2. cantidadVentasComponente(componente) = qtySoldByPiece. Calcula la cantidad de Ventas por Componente.

const qtySoldByPiece = component => {
    let totalSales = []
    store.sales.forEach(({pieces}) => pieces.forEach (e => totalSales.push(e)))
    const totalSoldComponents = totalSales.filter(e=>e===component).length
    return totalSoldComponents
}
// imprime respuesta para dos componentes:
console.log(qtySoldByPiece("Monitor ASC 543"));
console.log(qtySoldByPiece("Monitor GPRS 3000"));

//6. componenteMasVendido() = mostSoldPiece. Calcula cuál fue el componente más vendido.

const mostSoldPiece = () =>{
    let soldComponent = []
    let nameComponent
    store.prices.forEach(e => {
        soldComponent.push(qtySoldByPiece(e.piece))
        mostSoldComponent = Math.max(soldComponent)
        if(qtySoldByPiece(e.piece) === mostSoldComponent){
        nameComponent = e.piece
        }
    })
    return nameComponent
    }
    console.log(mostSoldPiece()); // Monitor GPRS 3000 ó Motherboard ASUS 1200

  

//7. huboVentas(mes, anio) = areThereSales. Indica si hubo ventas en un mes determinado.
const areThereSales = (year,month)=> {
    const togetMonth=month-1
    const hubo= store.sales.find(({saleDate})=>togetMonth===saleDate.getMonth()&&year===saleDate.getFullYear())
    hubo?console.log(`Hubo ventas en el mes ${month} de ${year}`)
        :console.log(`No hubo ventas en el mes ${month} de ${year}`)
}
//imprime resultado
const anio=2019
const mes =3
areThereSales (anio,mes)