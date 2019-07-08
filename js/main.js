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

//1.precioMaquina(componentes): 
const pcPrice = sale => sale.length>0?sale.map(e => store.prices.find(({piece}) => e === piece).price).reduce((a,b)=>a+b):0
//probando
const maquina = ["Monitor GPRS 3000", "Monitor GPRS 3000"]
console.log(`(1) La venta de ${maquina} tiene un valor total de ARS ${pcPrice(maquina)}`)

//2.ventasMes(mes, año)
const monthSales = (year, month) => pcPrice(store.sales.filter(({saleDate})=>saleDate.getFullYear()===year && saleDate.getMonth()===month-1).map(({pieces})=>pieces).flat())
//probando
const mes= 1
const anio=2019
console.log(`(2) Las ventas del mes ${mes} de ${anio} son ARS ${monthSales(anio,mes)}`)

//3.vendedoraDelMes(mes, año)
const sellerMonth = (year, month) => {
    let monthSales = store.sales.filter(({saleDate})=>saleDate.getFullYear()===year && saleDate.getMonth()===month-1)
    let sellerMonth =store.sellers.map(name =>{
      return { name:name, sales:pcPrice(monthSales.filter(({seller})=>seller===name).map(({pieces})=>pieces).flat())}
    })
   let bestSale = Math.max(...sellerMonth.map(({sales})=>sales).flat())
   let sellerSalesList = sellerMonth.filter(({sales})=> sales>= bestSale).map(({name})=>name).flat()
    return sellerSalesList
    }
//probando
const anio2=2019
const mes2=2
console.log (`(3) La mejor vendedora del mes ${mes2} de ${anio2} es ${sellerMonth(anio2,mes2)}`)

//4.sucursalDelMes(mes, año)
const storeMonth = (year, month) => {
    let monthSales = store.sales.filter(({saleDate})=>saleDate.getFullYear()===year && saleDate.getMonth()===month-1)
    let storeMonth =store.stores.map(name =>{
      return { name:name, sales:pcPrice(monthSales.filter(({store})=>store===name).map(({pieces})=>pieces).flat())}
    })
   let bestSale = Math.max(...storeMonth.map(({sales})=>sales).flat())
   let storeSalesList = storeMonth.filter(({sales})=> sales>= bestSale).map(({name})=>name).flat()
    return storeSalesList 
}
//probando
const anio3=2019
const mes3=1
console.log (`(4) La mejor sucursal del mes ${mes3} de ${anio3} es ${storeMonth(anio3,mes3)}`)

//SELECTORES Y BOTONES DE REPORT.HTML

//I.-Crear Opcion
const createOption = comp => {
  typeof comp === "object" ? e = comp.item : e = comp
  const option = document.createElement("option")
  option.innerText = e
  option.value = e
  return option
}

//II.- Rellenar Select
const fillSelects = (list, secondSelect) => {
  const select = document.getElementById(secondSelect)
  list.forEach(e => {
    if (!select.childElementCount) {
      const placeholder = {
        item: `Seleccione`,
        id: ""
      }
      select.appendChild(createOption(placeholder))
    }
    select.appendChild(createOption(e))
  })
}

//III.-Armado de input
const newInput = () => {
  const input = {
    pieces: undefined,
    seller: undefined,
    store: undefined,
    year: undefined,
    month: undefined
  }
  //DOM
  input.seller = document.getElementById("seller").value
  input.store = document.getElementById("store").value
  input.pieces = document.getElementById("pieces").value
  const auxDate = new Date(document.getElementById("year").value)
  input.year = auxDate.getFullYear()
  input.month = auxDate.getMonth() + 1
  return input
}

//IV.- Imprime resultados
const outputReport = (output, contain) => {
  const container = document.getElementById(contain)
  container.innerHTML = ""
  container.innerText = output
}

//V.- Botones
//Ventas Mes
const btnMonthSales = e => {
  outputReport(`Las ventas del mes son ARS ${monthSales(newInput(e).year,newInput(e).month)}`, "result")
}

//Vendedora del mes
const btnSellerMonth = e => {
  const aux = sellerMonth(newInput(e).year, newInput(e).month)
  if (anySales(newInput(e).year, newInput(e).month)) {
    if (aux.length < 2) {
      outputReport(`(ﾉ◕ヮ◕)ﾉ*.✧ ${aux}`, "result")
    } else {
      outputReport(`¡EMPATE! ᕙ(͡°‿ ͡°)ᕗ ${aux.join(`, `)}`, "result")
    }
  } else {
    outputReport(`(ノಠ益ಠ)ノ彡┻━┻ NO HUBO VENTAS`, "result")
  }
}
//Sucursal del mes
const btnStoreMonth = e => {
  const aux = storeMonth(newInput(e).year, newInput(e).month)
  if (anySales(newInput(e).year, newInput(e).month)) {
    if (aux.length < 2) {
      outputReport(`La sucursal del mes fue ${aux}`, "result")
    } else {
      outputReport(`¡EMPATE! ᕙ(͡°‿ ͡°)ᕗ ${aux}`, "result")
    }
  } else {
    outputReport(`(ノಠ益ಠ)ノ彡┻━┻ NO HUBO VENTAS`, "result")
  }
}

//inicialización del programa
const initialize = () => {
  fillSelects(store.pieces, "piece")
  fillSelects(store.seller, "seller")
  fillSelects(store.store, "store")
}

