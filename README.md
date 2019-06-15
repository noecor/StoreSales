# Tp3KarinMariNoeSofi
Karin + Mariana + Noelia + Sofia

Convenciones:
	• Estilos en SASS
	• Js en ES6
	• Variables, nombradas en inglés y camelCase
	• Nombres representativos y lo más corto posible, sólo usando abreviaciones de uso general, tipo:
		○ quantity (qty)
		○ report (rpt)
		○ general (gral)
	• Branch por grupo de funciones similares o relacionadas
		○ Totales x Parámetro
		○ Cantidad x Parámetro
		○ Destacados
		○ Reportes Generales
	• Carpetas por grupo de archivos
		○ Js
		○ Styles
		○ Images
		○ (los html quedarán en el raiz)

Comenzamos nuestra aplicación con el objeto que registra todos los componentes de las tiendas (stores), incluyendo las ventas de la nueva sucursal, así nos aseguramos que la estructura del mismo soporta la inclusión de una nueva sucursal (store) en caso de que sea necesario

var store = {
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
 ]
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

Funciones
1. precioMaquina(componentes) = pcPrice
2. cantidadVentasComponente(componente) = qtySoldByPiece
3. vendedoraDelMes(mes, anio) = monthSeller
4. ventasMes(mes, anio) = monthSales 
5. ventasVendedora(nombre) = sellerSales
6. componenteMasVendido() = mostSoldPiece
7. huboVentas(mes, anio) = areThereSales
8. En la aplicación debe haber un botón Nueva venta donde se pueda sumar manualmente un nuevo ingreso con los campos requeridos * = btnNewSale, y función addSale
9. ventasSucursal(sucursal) = storeSales
10. sucursalDelMes(mes, anio) = monthStore
11. renderPorMes() Muestra una lista ordenada del importe total vendido por cada mes/año = monthlyReport
12. renderPorSucursal() Muestra una lista del importe total vendido por cada sucursal = storeReport
13. render(): Tiene que mostrar la unión de los dos reportes anteriores, cual fue el producto más vendido y la vendedora que más ingresos generó = gralReport
14.- Almacenar en LocalStorage, las ventas que se vayan registrando (opcional)

Maquetación:
Decidimos hacer 3 html (index,sales,reports), donde podamos ver la ejecución de cada una de las funciones dentro de lo que sería más parecido al flujo de una tienda.
Consideraciones:
	• Sección de selección de Vendedora/sucursal
	• Sección de selección de componentes
	• Muestra de Venta que se esta realizando (tipo lista/tabla), con botón de eliminar componente (JS)
		○ Se calcula automáticamente el precio total que se va generando en la venta
	• Botón de Registrar Venta, que dispare:
		Alerta para verificar si ya se agregaron todos los componentes (JS), podríamos mostrar, la cantidad de componente y el precio
		Alerta para indicar que la venta se ha registrado.(JS)
