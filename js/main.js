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
let pcPrice = sale => sale.length>0?sale.map(e => store.prices.find(({piece}) => e === piece).price).reduce((a,b)=>a+b):0
//probando
const maquina = ["Monitor GPRS 3000", "Monitor GPRS 3000"]
console.log(`(1) La venta de ${maquina} tiene un valor total de ARS ${pcPrice(maquina)}`)

//2.ventasMes(mes, año)
let monthSales = (year, month) => 
  pcPrice(store.sales.filter(({saleDate})=>saleDate.getFullYear()===year && saleDate.getMonth()===month-1).map(({pieces})=>pieces).flat())
//probando
const mes= 1
const anio=2019
console.log(`(2) Las ventas del mes ${mes} de ${anio} son ARS ${monthSales(anio,mes)}`)

//3.vendedoraDelMes(mes, año)
let sellerMonth = (year, month) => {
    const monthSales = store.sales.filter(({saleDate})=>saleDate.getFullYear()===year && saleDate.getMonth()===month-1)
    const sellerMonth =store.sellers.map(name =>{
      return { name:name, sales:pcPrice(monthSales.filter(({seller})=>seller===name).map(({pieces})=>pieces).flat())}
    })
   const bestSale = Math.max(...sellerMonth.map(({sales})=>sales).flat())
   const sellerSalesList = sellerMonth.filter(({sales})=> sales>= bestSale).map(({name})=>name).flat()
    return sellerSalesList
    }
//probando
const anio2=2019
const mes2=2
console.log (`(3) La mejor vendedora del mes ${mes2} de ${anio2} es ${sellerMonth(anio2,mes2)}`)

//4.vendedoraDelMes(mes, año)
let storeMonth = (year, month) => {
    const monthSales = store.sales.filter(({saleDate})=>saleDate.getFullYear()===year && saleDate.getMonth()===month-1)
    const storeMonth =store.stores.map(name =>{
      return { name:name, sales:pcPrice(monthSales.filter(({store})=>store===name).map(({pieces})=>pieces).flat())}
    })
   const bestSale = Math.max(...storeMonth.map(({sales})=>sales).flat())
   const storeSalesList = storeMonth.filter(({sales})=> sales>= bestSale).map(({name})=>name).flat()
    return storeSalesList
    }
//probando
const anio3=2019
const mes3=1
console.log (`(4) La mejor sucursal del mes ${mes3} de ${anio3} es ${storeMonth(anio3,mes3)}`)

